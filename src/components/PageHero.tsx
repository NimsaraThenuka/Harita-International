import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import ScrollDownIndicator from "./ScrollDownIndicator";

interface PageHeroProps {
  tag: string;
  tagSub?: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  img: string;
  imgAlt?: string;
  accentColor?: string;
}

export default function PageHero({
  tag,
  tagSub,
  title,
  titleAccent,
  subtitle,
  img,
  imgAlt = "Hero background",
  accentColor = "#D4AF37",
}: PageHeroProps) {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 500], ["0%", "20%"]);
  const textY = useTransform(scrollY, [0, 500], ["0%", "8%"]);
  const { t } = useLanguage();

  return (
    <section className="relative pt-40 pb-16 min-h-[58vh] flex items-end overflow-hidden" style={{ background: "#020b18" }}>
      {/* Background image */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <img src={img} alt={imgAlt} className="w-full h-full object-cover" />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 z-0" style={{
        background: "linear-gradient(to bottom, rgba(3,12,26,0.9) 0%, rgba(3,12,26,0.55) 45%, #020b18 100%)"
      }} />
      <div className="absolute inset-0 grid-pattern opacity-60 z-0" />

      {/* Accent vertical line — always HARITA blue */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px]"
        style={{ background: `linear-gradient(to bottom, transparent 10%, ${accentColor} 50%, transparent 90%)` }} />

      {/* Subtle floating glow */}
      <motion.div
        className="absolute top-1/3 right-[8%] w-56 h-56 rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, rgba(27,111,186,0.08) 0%, transparent 70%)` }}
        animate={{ scale: [1, 1.18, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[22%] right-[16%] w-20 h-20 border pointer-events-none"
        style={{ borderColor: `rgba(27,111,186,0.1)`, rotate: 30 }}
        animate={{ rotate: [30, 52, 30], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <motion.div className="relative z-10 max-w-7xl mx-auto px-6 w-full pb-12" style={{ y: textY }}>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          {tagSub && (
            <span className="inline-block text-[10px] tracking-[0.4em] uppercase font-mono mb-3" style={{ color: accentColor }}>
              {t(tagSub)}
            </span>
          )}
          <div className="flex items-center gap-4 mb-2">
            <div className="w-10 h-px" style={{ background: `linear-gradient(to right, ${accentColor}, ${accentColor}40)` }} />
            <span className="text-[11px] tracking-[0.32em] uppercase font-semibold" style={{ color: accentColor, fontFamily: "Outfit, sans-serif" }}>
              {t(tag)}
            </span>
          </div>

          <h1 className="font-black text-[#E8F0F8] leading-[1.12] tracking-tight mb-4 py-0.5"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.2rem)", fontFamily: "Outfit, sans-serif" }}>
            {t(title)}
            {titleAccent && (
              <>
                <br />
                <span className="py-0.5 inline-block" style={{ color: accentColor }}>{t(titleAccent)}</span>
              </>
            )}
          </h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="text-base mt-4 max-w-2xl leading-relaxed font-light"
              style={{ color: "#4A7A9E", fontFamily: "Outfit, sans-serif" }}
            >
              {t(subtitle)}
            </motion.p>
          )}
        </motion.div>
      </motion.div>
      <ScrollDownIndicator />
    </section>
  );
}
