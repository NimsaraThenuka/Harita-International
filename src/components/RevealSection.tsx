import { type ReactNode } from "react";
import { motion } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "right" | "scale";
  delay?: number;
  as?: any;
  threshold?: number;
  style?: React.CSSProperties;
}

export default function Reveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  as = "div",
  threshold = 0.12,
  style,
}: RevealProps) {
  const Tag = motion.create(as as any);

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : 0,
      x: direction === "left" ? -40 : direction === "right" ? 40 : 0,
      scale: direction === "scale" ? 0.95 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 20,
        delay: delay / 1000,
      },
    },
  };

  return (
    <Tag
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: threshold }}
      variants={variants}
    >
      {children}
    </Tag>
  );
}
