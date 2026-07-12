import { motion } from "framer-motion";

export default function ScrollDownIndicator() {
  return (
    <div className="absolute right-2.5 md:right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3.5 z-20 pointer-events-none opacity-40 md:opacity-100">
      <span 
        className="text-[9px] tracking-[0.3em] font-bold uppercase select-none opacity-80" 
        style={{ 
          writingMode: "vertical-lr", 
          fontFamily: "Space Mono, monospace",
          color: "#A2C1DB"
        }}
      >
        SCROLL
      </span>
      <div className="w-[1.5px] h-20 bg-slate-800/80 relative overflow-hidden rounded-full">
        <motion.div 
          className="absolute top-0 left-0 right-0 bg-gradient-to-b from-[#D4AF37] to-[#F3C64F] rounded-full" 
          style={{ height: '35%' }}
          animate={{ 
            top: ["-35%", "100%"] 
          }}
          transition={{ 
            duration: 2.2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
      </div>
    </div>
  );
}
