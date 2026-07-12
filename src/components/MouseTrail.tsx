import { useEffect, useRef } from "react";

export default function MouseTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      maxRadius: number;
      color: string;
      glowColor: string;
      alpha: number;
      decay: number;
    }> = [];

    // Premium colors: Brand Gold (#D4AF37), Brand Blue (#055193), Soft Sky Blue (#4E9FEF)
    const colors = [
      { fill: "rgba(212, 175, 55, ", glow: "#D4AF37" },
      { fill: "rgba(5, 81, 147, ", glow: "#055193" },
      { fill: "rgba(78, 159, 239, ", glow: "#4E9FEF" }
    ];

    const resizeCanvas = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      canvas.width = rect?.width || window.innerWidth;
      canvas.height = rect?.height || 600;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const spawnParticle = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Hide/disable the effect when the mouse cursor goes near the navbar (top 90px of viewport)
      if (e.clientY < 95) {
        return;
      }

      // Spawn 2 particles per mouse move for a beautiful, clear bubble trail
      for (let i = 0; i < 2; i++) {
        const theme = colors[Math.floor(Math.random() * colors.length)];
        particles.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 2.0,
          vy: (Math.random() - 0.5) * 1.5 - 0.6, // Float upwards
          radius: Math.random() * 3 + 1,
          maxRadius: Math.random() * 12 + 6, // Larger premium bubble sizes
          color: theme.fill,
          glowColor: theme.glow,
          alpha: 1.0,
          decay: Math.random() * 0.015 + 0.012, // Slow decay for better visibility
        });
      }
    };

    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener("mousemove", spawnParticle);
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;
        
        // Let bubbles grow slightly as they float
        if (p.radius < p.maxRadius) {
          p.radius += 0.35;
        }

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

        // Create a beautiful radial gradient (like a 3D glass bubble!)
        const grad = ctx.createRadialGradient(
          p.x - p.radius * 0.3,
          p.y - p.radius * 0.3,
          p.radius * 0.1,
          p.x,
          p.y,
          p.radius
        );
        grad.addColorStop(0, "rgba(255, 255, 255, " + p.alpha + ")");
        grad.addColorStop(0.4, p.color + p.alpha * 0.6 + ")");
        grad.addColorStop(1, p.color + "0)");

        ctx.fillStyle = grad;

        // Rich glow effect
        ctx.shadowBlur = 14;
        ctx.shadowColor = p.glowColor;

        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (parent) {
        parent.removeEventListener("mousemove", spawnParticle);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-20 mix-blend-screen"
    />
  );
}
