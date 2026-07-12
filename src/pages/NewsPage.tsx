import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../components/RevealSection";
import { IconArrowRight } from "../components/Icons";
import MouseTrail from "../components/MouseTrail";
import { useLanguage } from "../context/LanguageContext";
import ScrollDownIndicator from "../components/ScrollDownIndicator";

const BL = "#2E90E8";
const BB = "#4AAEF5";
const B = "#1B6FBA";

function SL({ label }: { label: string }) {
  const { t } = useLanguage();
  return (
    <div className="flex items-center gap-4 mb-4">
      <div className="w-10 h-px" style={{ background: `linear-gradient(to right, ${BL}, ${BL}50)` }} />
      <span className="text-[11px] tracking-[0.35em] uppercase font-bold" style={{ color: BL, fontFamily: "Space Mono, monospace" }}>{t(label)}</span>
    </div>
  );
}

const allNews = [
  { date: "2026.06.28", category: "FOOD", title: "Royal Cashew is now available at our Rakuten store", excerpt: "Our premium Royal Cashew from Sri Lanka is now listed on Rakuten Ichiba. Enjoy rich Ceylon cashews at home.", img: "https://res.cloudinary.com/dyp247eoh/image/upload/v1783759790/cashews-511301902_gyj9vg.avif" },
  { date: "2026.06.10", category: "COMPANY", title: "Our official website has been renewed", excerpt: "HARITA International has launched a redesigned website to better serve customers and clients worldwide.", img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=540&fit=crop&auto=format" },
  { date: "2026.05.22", category: "EVENT", title: "We spoke at the Cinnamon Seminar by the Embassy of Sri Lanka", excerpt: "CEO Ranghe Bandara presented on Ceylon cinnamon trade, quality standards and market potential in Japan.", img: "https://res.cloudinary.com/dyp247eoh/image/upload/v1783759942/Dalchini_Cinnamon_Uses_Benefits_and_Side_Effects_oxxzwt.webp" },
];

const cats = ["ALL", "FOOD", "COMPANY", "EVENT"];
const catColors: Record<string, string> = {
  FOOD: "#34d399", COMPANY: "#38bdf8", EVENT: "#a78bfa",
};

export default function NewsPage() {
  const [activeCat, setActiveCat] = useState("ALL");
  const filtered = activeCat === "ALL" ? allNews : allNews.filter(n => n.category === activeCat);
  const { t } = useLanguage();

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
      style={{ background: "#030C1A", color: "#E8F0F8" }}
    >
      {/* Hero */}
      <div className="relative pt-44 pb-20 overflow-hidden min-h-[64vh] flex items-end">
        <MouseTrail />
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1600&h=700&fit=crop&auto=format"
            alt="News" className="w-full h-full object-cover opacity-22 scale-105" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(3,12,26,0.9) 0%, rgba(3,12,26,0.55) 50%, #030C1A 100%)" }} />
          <div className="absolute inset-0 grid-pattern opacity-50" />
        </div>
        <motion.div className="absolute top-1/3 right-[10%] w-56 h-56 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle, ${B}08 0%, transparent 70%)` }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} />
        <div className="absolute left-0 top-0 bottom-0 w-[3px]"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(46,144,232,0.8), transparent)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pb-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <SL label="News & Events" />
            <h1 className="font-black text-[#E8F0F8] mt-1 leading-[1.12] tracking-tight pb-1"
              style={{ fontSize: "clamp(2.8rem, 6vw, 4.4rem)", fontFamily: "Outfit, sans-serif" }}>
              {t("News &")}<br /><span className="text-gradient-blue italic py-0.5 inline-block">{t("Events")}</span>
            </h1>
          </motion.div>
        </div>
        <ScrollDownIndicator />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Category filter */}
        <Reveal className="flex flex-wrap gap-3 mb-14">
          {cats.map(cat => {
            const color = catColors[cat];
            const isActive = activeCat === cat;
            return (
              <motion.button
                key={cat}
                onClick={() => setActiveCat(cat)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="text-[10px] tracking-[0.3em] uppercase px-5 py-2.5 font-bold transition-all duration-200"
                style={{
                  border: `1px solid ${isActive ? (color || "#2E90E8") : `${BL}20`}`,
                  color: isActive ? (color || "#2E90E8") : "#4A7A9E",
                  background: isActive ? `${color || "#2E90E8"}12` : "transparent",
                  fontFamily: "Space Mono, monospace",
                }}
              >
                {t(cat)}
              </motion.button>
            );
          })}
        </Reveal>

        {/* News grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCat}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((item, i) => {
              const catColor = catColors[item.category];
              return (
                <Reveal key={item.title} direction="scale" delay={i * 70}>
                  <motion.article
                    whileHover={{ y: -7 }}
                    transition={{ duration: 0.3 }}
                    className="group overflow-hidden h-full flex flex-col cursor-pointer transition-all duration-300"
                    style={{ background: "#061525", border: `1px solid ${BL}14` }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${BL}45`; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = `${BL}14`; }}
                  >
                    <div className="relative overflow-hidden h-48" style={{ background: "#030C1A" }}>
                      <img src={item.img} alt={t(item.title)}
                        className="w-full h-full object-cover opacity-65 img-zoom group-hover:opacity-90" />
                      <div className="absolute inset-0" style={{ background: `${B}18` }} />
                      <span
                        className="absolute top-3 left-3 text-[10px] tracking-[0.25em] uppercase px-2.5 py-1 font-bold backdrop-blur-md"
                        style={{ color: catColor, background: "rgba(3,12,26,0.8)", border: `1px solid ${catColor}35`, fontFamily: "Space Mono, monospace" }}
                      >
                        {t(item.category)}
                      </span>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <span className="text-xs block mb-3" style={{ color: BL, fontFamily: "Space Mono, monospace" }}>{item.date}</span>
                      <h2 className="font-bold mb-3 group-hover:text-[#4AAEF5] transition-colors duration-200 leading-snug flex-1"
                        style={{ color: "#E8F0F8", fontFamily: "Outfit, sans-serif" }}>
                        {t(item.title)}
                      </h2>
                      <p className="text-sm leading-relaxed line-clamp-3 mb-4 font-light"
                        style={{ color: "#4A7A9E", fontFamily: "Outfit, sans-serif" }}>
                        {t(item.excerpt)}
                      </p>
                      <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase group-hover:gap-3 transition-all"
                        style={{ color: BL }}>
                        {t("Read More")} <IconArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    <div className="h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                      style={{ background: `linear-gradient(to right, ${B}, ${BB})` }} />
                  </motion.article>
                </Reveal>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-24 font-light" style={{ color: "#4A7A9E", fontFamily: "Outfit, sans-serif" }}>
            {t("No news in this category yet.")}
          </div>
        )}
      </div>
    </motion.main>
  );
}
