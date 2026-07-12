import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import Reveal from "../components/RevealSection";
import {
  IconLeaf, IconTruck, IconCode, IconBriefcase, IconGem,
  IconArrowRight, IconChevronLeft, IconChevronRight,
  IconGlobe, IconShield, IconStar, IconShop, IconBox, IconBuilding,
} from "../components/Icons";
import { cn } from "../lib/utils";

/* ── Brand colors ─────────────────────────────────── */
const B  = "#1B6FBA";   // HARITA blue
const BL = "#2E90E8";   // Blue light
const BB = "#4AAEF5";   // Blue bright
const Y  = "#F0C040";   // Yellow accent (used sparingly)

/* ── Data ─────────────────────────────────────────── */

const slides = [
  {
    tag: "Sri Lanka × Japan",
    headline: "Connecting People\nwith HARITA",
    sub: "Foods, vehicles, software, consulting and gemstones — five businesses connecting Sri Lanka, Japan and the world.",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop&auto=format",
    alt: "Sri Lankan landscape at sunset",
  },
  {
    tag: "Premium Spices",
    headline: "From Nature\nto Your Table",
    sub: "Authentic Ceylon cinnamon, cloves and spices direct from Sri Lanka — wholesale, retail and e-commerce.",
    img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1600&h=900&fit=crop&auto=format",
    alt: "Ceylon spices and cinnamon",
  },
  {
    tag: "Island of Gems",
    headline: "Once-in-a-Lifetime\nBrilliance",
    sub: "Blue sapphires, padparadscha and rare Ceylon gems sourced directly in Sri Lanka — wholesale, retail and custom orders.",
    img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1600&h=900&fit=crop&auto=format",
    alt: "Gemstones and jewellery",
  },
];

const businesses = [
  { num: "01", Icon: IconLeaf,     label: "Foods & Trading",           desc: "Direct imports of authentic Ceylon cinnamon, cloves, curry spices and cinnamon herbal tea from Sri Lanka — wholesale, retail and e-commerce.", to: "/foods",      img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=700&h=480&fit=crop&auto=format" },
  { num: "02", Icon: IconTruck,    label: "Used Vehicles & Machinery",  desc: "Passenger cars to heavy machinery: domestic trading and worldwide export. Negotiations available in English.", to: "/vehicles",   img: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=700&h=480&fit=crop&auto=format" },
  { num: "03", Icon: IconCode,     label: "Software & AI Solutions",    desc: "System development and maintenance, digital marketing and AI-driven business efficiency.", to: "/software",   img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&h=480&fit=crop&auto=format" },
  { num: "04", Icon: IconBriefcase,label: "Consulting",                  desc: "Hands-on support for management, branding and international expansion, backed by real trading experience.", to: "/consulting", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=700&h=480&fit=crop&auto=format" },
  { num: "05", Icon: IconGem,      label: "Gemstones & Jewellery",      desc: "Blue sapphires, padparadscha and other Ceylon gems sourced directly in Sri Lanka. Wholesale, retail and custom orders.", to: "/gemstones",  img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=700&h=480&fit=crop&auto=format" },
];

const products = [
  { tag: "SPICE", name: "Ceylon Cinnamon",     desc: "The queen of spices — true cinnamon sticks from Sri Lanka.",                  img: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500&h=500&fit=crop&auto=format" },
  { tag: "SPICE", name: "Cinnamon Powder",     desc: "An elegant, versatile powder for everyday cooking and drinks.",                img: "https://images.unsplash.com/photo-1599227742702-b31a4d04e0e7?w=500&h=500&fit=crop&auto=format" },
  { tag: "SPICE", name: "Cloves",              desc: "Aromatic Sri Lankan cloves, essential for curry and chai.",                    img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500&h=500&fit=crop&auto=format" },
  { tag: "GIFT",  name: "Spice Gift Sets",     desc: "Popular spice assortments featuring cinnamon and cloves.",                     img: "https://images.unsplash.com/photo-1563822249366-3efb23b8e0c9?w=500&h=500&fit=crop&auto=format" },
];

const news = [
  { date: "2026.06.28", category: "FOOD",    title: "Royal Cashew is now available at our Rakuten store",                     excerpt: "Our premium Royal Cashew from Sri Lanka is now listed on Rakuten Ichiba.",                                            img: "https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?w=800&h=540&fit=crop&auto=format" },
  { date: "2026.06.10", category: "COMPANY", title: "Our official website has been renewed",                                   excerpt: "HARITA International has launched a redesigned website to better serve customers worldwide.",                          img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=540&fit=crop&auto=format" },
  { date: "2026.05.22", category: "EVENT",   title: "We spoke at the Cinnamon Seminar by the Embassy of Sri Lanka",            excerpt: "CEO Ranghe Bandara presented on Ceylon cinnamon trade and quality standards.",                                         img: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&h=540&fit=crop&auto=format" },
];

const stores = [
  { name: "HARITA Online", label: "Official Online Shop", Icon: IconShop },
  { name: "Rakuten",       label: "Rakuten Ichiba",       Icon: IconStar },
  { name: "Amazon",        label: "Amazon Store",         Icon: IconBox },
  { name: "Dept. Store",   label: "Department Store",     Icon: IconBuilding },
];

const marqueeItems = ["FOODS", "VEHICLES", "SOFTWARE", "CONSULTING", "GEMSTONES", "SRI LANKA", "JAPAN", "HARITA INTERNATIONAL"];

const catColors: Record<string, string> = {
  FOOD: "#34d399", COMPANY: "#38bdf8", EVENT: "#a78bfa", GEMSTONE: "#f472b6",
};

/* ── Count-up hook ─────────────────────────────────── */

function useCountUp(end: number, duration = 1800) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const t0 = Date.now();
        const timer = setInterval(() => {
          const p = Math.min((Date.now() - t0) / duration, 1);
          setCount(Math.floor((1 - Math.pow(1 - p, 3)) * end));
          if (p >= 1) clearInterval(timer);
        }, 16);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);
  return { count, ref };
}

/* ── Sub-components ────────────────────────────────── */

function SL({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 mb-4">
      <div className="w-10 h-px" style={{ background: `linear-gradient(to right, ${BL}, ${BB}50)` }} />
      <span className="text-[11px] tracking-[0.35em] uppercase font-bold" style={{ color: BL, fontFamily: "Space Mono, monospace" }}>
        {label}
      </span>
    </div>
  );
}

function Marquee() {
  const doubled = [...marqueeItems, ...marqueeItems];
  return (
    <div className="overflow-hidden border-y py-4" style={{ borderColor: "rgba(27,111,186,0.1)", background: "#020810" }}>
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="mx-8 text-[11px] tracking-[0.5em] uppercase font-bold" style={{ color: "rgba(46,144,232,0.2)", fontFamily: "Space Mono, monospace" }}>
            {item}
            <span className="mx-8" style={{ color: "rgba(27,111,186,0.12)" }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function StatCard({ val, label, icon, end, color }: { val: string; label: string; icon: React.ReactNode; end: number; color: string }) {
  const { count, ref } = useCountUp(end, 1600);
  const display = val.includes("+") ? `${count}+` : val.includes("%") ? `${count}%` : `${count}`;
  return (
    <div ref={ref} className="glass-card relative p-10 text-center overflow-hidden h-full group">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(ellipse at center, ${color}06 0%, transparent 70%)` }} />
      <div className="flex justify-center mb-5 transition-transform duration-300 group-hover:scale-110" style={{ color: `${color}70` }}>
        {icon}
      </div>
      <div className="text-4xl md:text-5xl font-bold mb-2 font-serif" style={{ color }}>
        {display}
      </div>
      <div className="text-[11px] tracking-[0.22em] uppercase font-semibold" style={{ color: "#4A7A9E", fontFamily: "Outfit, sans-serif" }}>
        {label}
      </div>
    </div>
  );
}

/* ── Hero slider ───────────────────────────────────── */

function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const next = () => setCurrent(c => (c + 1) % slides.length);
  const prev = () => setCurrent(c => (c - 1 + slides.length) % slides.length);

  useEffect(() => {
    timerRef.current = setInterval(next, 7000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [current]);

  const slide = slides[current];

  return (
    <div className="relative h-screen min-h-[640px] overflow-hidden" style={{ background: "#030C1A" }}>
      {/* Background image */}
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img src={slide.img} alt={slide.alt} className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "rgba(3,12,26,0.58)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, rgba(3,12,26,0.94) 30%, rgba(3,12,26,0.25) 75%, transparent 100%)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(3,12,26,1) 0%, transparent 55%)" }} />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 grid-pattern opacity-35 pointer-events-none" />

      {/* Floating accents */}
      <motion.div
        className="absolute top-[20%] right-[10%] w-64 h-64 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(27,111,186,0.1) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[28%] right-[18%] w-28 h-28 border pointer-events-none"
        style={{ borderColor: "rgba(46,144,232,0.14)", rotate: 30 }}
        animate={{ rotate: [30, 52, 30] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[30%] right-[7%] w-14 h-14 border pointer-events-none"
        style={{ borderColor: "rgba(74,174,245,0.15)", rotate: 12 }}
        animate={{ rotate: [12, -10, 12], y: [0, -18, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Blue left accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(46,144,232,0.8), transparent)" }} />

      {/* Slide content — SMALLER text */}
      <div className="relative z-10 h-full flex items-center pt-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl"
            >
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="flex items-center gap-4 mb-6"
              >
                <div className="w-10 h-px" style={{ background: `linear-gradient(to right, ${BL}, ${BL}40)` }} />
                <span className="text-[11px] tracking-[0.45em] uppercase font-bold" style={{ color: BL, fontFamily: "Space Mono, monospace" }}>
                  {slide.tag}
                </span>
              </motion.div>

              <h1
                className="font-black text-[#E8F0F8] leading-[1.1] tracking-tight mb-6 whitespace-pre-line"
                style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
              >
                {slide.headline.split("\n").map((line, li) => (
                  <motion.span
                    key={`${current}-${li}`}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.15 + li * 0.09, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className={cn("block", li === 1 ? "text-gradient-blue" : "")}
                  >
                    {line}
                  </motion.span>
                ))}
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.65 }}
                className="text-base leading-relaxed mb-10 font-light max-w-lg"
                style={{ color: "#4A7A9E", fontFamily: "Outfit, sans-serif" }}
              >
                {slide.sub}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.55 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/foods" className="group flex items-center gap-3 px-8 py-3.5 text-xs tracking-widest uppercase font-bold btn-primary">
                  Our Business
                  <IconArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="group flex items-center gap-3 px-8 py-3.5 text-xs tracking-widest uppercase font-semibold transition-all duration-300"
                  style={{ border: "1px solid rgba(46,144,232,0.28)", color: "#E8F0F8" }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(46,144,232,0.65)")}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(46,144,232,0.28)")}
                >
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Centered bottom controls */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex flex-col items-center gap-4">
        {/* Slide counter centered */}
        <div className="flex items-center gap-3">
          <button onClick={prev} className="w-10 h-10 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
            style={{ border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.4)" }}
            onMouseEnter={e => { e.currentTarget.style.color = BL; e.currentTarget.style.borderColor = "rgba(46,144,232,0.4)"; }}
            onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.4)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
          >
            <IconChevronLeft className="w-4 h-4" />
          </button>

          {/* Dot indicators */}
          <div className="flex items-center gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={cn("transition-all duration-500 rounded-full", i === current ? "w-8 h-2" : "w-2 h-2")}
                style={{ background: i === current ? BL : "rgba(255,255,255,0.18)" }}
              />
            ))}
          </div>

          {/* Slide number */}
          <span className="text-[11px] font-bold px-2" style={{ color: "rgba(46,144,232,0.6)", fontFamily: "Space Mono, monospace" }}>
            {String(current + 1).padStart(2, "0")}&nbsp;/&nbsp;{String(slides.length).padStart(2, "0")}
          </span>

          <button onClick={next} className="w-10 h-10 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
            style={{ border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.4)" }}
            onMouseEnter={e => { e.currentTarget.style.color = BL; e.currentTarget.style.borderColor = "rgba(46,144,232,0.4)"; }}
            onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.4)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
          >
            <IconChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── Business card ─────────────────────────────────── */
function BizCard({ biz, layout }: { biz: typeof businesses[0]; layout: "portrait" | "landscape" }) {
  if (layout === "landscape") {
    return (
      <Link to={biz.to} className="group flex flex-col sm:flex-row overflow-hidden h-full" style={{
        background: `linear-gradient(135deg, ${B}18 0%, #061525 50%, ${BL}08 100%)`,
        border: `1px solid ${BL}22`,
        transition: "border-color 0.35s ease, transform 0.35s ease, box-shadow 0.35s ease",
      }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.borderColor = `${BL}55`;
          (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
          (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(27,111,186,0.1)`;
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.borderColor = `${BL}22`;
          (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
          (e.currentTarget as HTMLElement).style.boxShadow = "none";
        }}
      >
        <div className="relative w-full sm:w-52 shrink-0 h-44 sm:h-auto overflow-hidden" style={{ background: "#030C1A" }}>
          <img src={biz.img} alt={biz.label} className="w-full h-full object-cover img-zoom" style={{ opacity: 0.55, mixBlendMode: "luminosity" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, transparent, #061525 95%)" }} />
          {/* Always-on blue overlay */}
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${B}25 0%, transparent 70%)` }} />
          <span className="absolute bottom-3 left-4 font-serif italic text-6xl font-black leading-none select-none" style={{ color: `${BL}18` }}>
            {biz.num}
          </span>
        </div>
        <div className="p-7 flex flex-col justify-center flex-1">
          <div className="w-11 h-11 flex items-center justify-center rounded-full mb-5"
            style={{ background: `${B}20`, border: `1px solid ${BL}30` }}>
            <biz.Icon className="w-5 h-5" style={{ color: BL }} />
          </div>
          <h3 className="text-lg font-bold mb-3 group-hover:text-[#4AAEF5] transition-colors duration-300" style={{ color: "#E8F0F8" }}>{biz.label}</h3>
          <p className="text-sm leading-relaxed mb-5 font-light" style={{ color: "#4A7A9E", fontFamily: "Outfit, sans-serif" }}>{biz.desc}</p>
          <div className="flex items-center gap-2.5 text-xs tracking-[0.3em] uppercase font-bold" style={{ color: BL }}>
            Explore <IconArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
          style={{ background: `linear-gradient(to right, ${B}, ${BB})` }} />
      </Link>
    );
  }

  return (
    <Link to={biz.to} className="group block relative overflow-hidden h-full" style={{
      background: `linear-gradient(135deg, ${B}18 0%, #061525 50%, ${BL}08 100%)`,
      border: `1px solid ${BL}22`,
      transition: "border-color 0.35s ease, transform 0.35s ease, box-shadow 0.35s ease",
    }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.borderColor = `${BL}55`;
        (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
        (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(27,111,186,0.1)`;
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.borderColor = `${BL}22`;
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      <div className="relative h-52 overflow-hidden" style={{ background: "#030C1A" }}>
        <img src={biz.img} alt={biz.label} className="w-full h-full object-cover img-zoom" style={{ opacity: 0.55, mixBlendMode: "luminosity" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #061525 0%, transparent 55%)" }} />
        {/* Always-on blue tint */}
        <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${B}28 0%, transparent 65%)` }} />
        <div className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full backdrop-blur-md"
          style={{ background: "rgba(3,12,26,0.6)", border: `1px solid ${BL}30` }}>
          <biz.Icon className="w-5 h-5" style={{ color: BB }} />
        </div>
        <span className="absolute bottom-3 left-5 font-serif italic text-7xl font-black leading-none select-none" style={{ color: `${BL}14` }}>
          {biz.num}
        </span>
      </div>
      <div className="p-6 pt-4">
        <h3 className="text-lg font-bold mb-3 group-hover:text-[#4AAEF5] transition-colors duration-300" style={{ color: "#E8F0F8" }}>{biz.label}</h3>
        <p className="text-sm text-[#4A7A9E] leading-relaxed mb-5 font-light" style={{ fontFamily: "Outfit, sans-serif" }}>{biz.desc}</p>
        <div className="flex items-center gap-2.5 text-xs tracking-[0.3em] uppercase font-bold" style={{ color: BL }}>
          Explore <IconArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
        style={{ background: `linear-gradient(to right, ${B}, ${BB})` }} />
    </Link>
  );
}

/* ── Product card with popup ───────────────────────── */
function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to="/foods" className="group block cursor-pointer">
        <div className="relative overflow-hidden aspect-[4/5] mb-4 rounded-sm" style={{ background: "#061525" }}>
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-full object-cover img-zoom"
            style={{ opacity: 0.72, mixBlendMode: "luminosity" }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(3,12,26,0.88) 0%, transparent 55%)" }} />
          {/* Blue tint overlay */}
          <div className="absolute inset-0 transition-opacity duration-400"
            style={{ background: `linear-gradient(135deg, ${B}22 0%, transparent 65%)` }} />
          <span
            className="absolute top-4 left-4 text-[10px] tracking-[0.3em] uppercase backdrop-blur-md px-3 py-1.5 rounded-full"
            style={{ color: BB, background: "rgba(3,12,26,0.75)", border: `1px solid ${BL}28`, fontFamily: "Space Mono, monospace" }}
          >
            {product.tag}
          </span>
          {/* Blue ring on hover */}
          <div className="absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ boxShadow: `inset 0 0 0 1px ${BL}45` }} />
        </div>
        <h3 className="text-base font-bold mb-1.5 transition-colors duration-300 group-hover:text-[#4AAEF5]" style={{ color: "#E8F0F8" }}>
          {product.name}
        </h3>
        <p className="text-[13px] font-light leading-relaxed" style={{ color: "#4A7A9E", fontFamily: "Outfit, sans-serif" }}>{product.desc}</p>
      </Link>
    </motion.div>
  );
}

/* ── Modern news section ───────────────────────────── */
function NewsSection() {
  const featured = news[0];
  const secondary = news.slice(1);

  return (
    <section className="py-32 relative" style={{ background: "#061525" }}>
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Reveal>
          <div className="flex items-end justify-between mb-12">
            <div>
              <SL label="Latest Updates" />
              <h2 className="font-black text-[#E8F0F8] leading-tight" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)", fontFamily: "Playfair Display, serif" }}>
                News & <span className="text-gradient-blue italic">Events</span>
              </h2>
            </div>
            <Link to="/news" className="hidden md:flex items-center gap-2 text-xs tracking-[0.3em] uppercase font-bold transition-colors"
              style={{ color: BL }}
              onMouseEnter={e => (e.currentTarget.style.color = BB)}
              onMouseLeave={e => (e.currentTarget.style.color = BL)}
            >
              All News <IconArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
          {/* Featured article — large */}
          <Reveal direction="left" className="lg:col-span-3">
            <Link to="/news" className="group relative block overflow-hidden h-full min-h-[420px]"
              style={{ background: "#030C1A", border: `1px solid ${BL}18` }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${BL}45`; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = `${BL}18`; }}
            >
              <div className="relative h-64 overflow-hidden">
                <img src={featured.img} alt={featured.title} className="w-full h-full object-cover img-zoom" style={{ opacity: 0.75 }} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #030C1A 0%, transparent 60%)" }} />
                <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${B}30 0%, transparent 60%)` }} />
                <div className="absolute top-4 left-4 flex items-center gap-3">
                  <span className="text-[10px] tracking-[0.3em] uppercase font-bold px-3 py-1.5 backdrop-blur-md"
                    style={{ color: catColors[featured.category] || BL, background: "rgba(3,12,26,0.8)", border: `1px solid ${catColors[featured.category] || BL}35`, fontFamily: "Space Mono, monospace" }}>
                    {featured.category}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <span className="text-xs mb-3 block" style={{ color: BL, fontFamily: "Space Mono, monospace" }}>{featured.date}</span>
                <h3 className="text-xl font-bold mb-3 leading-snug transition-colors duration-200 group-hover:text-[#4AAEF5]"
                  style={{ color: "#E8F0F8", fontFamily: "Playfair Display, serif" }}>
                  {featured.title}
                </h3>
                <p className="text-sm leading-relaxed mb-6 font-light" style={{ color: "#4A7A9E", fontFamily: "Outfit, sans-serif" }}>
                  {news[0].excerpt ?? ""}
                </p>
                <div className="flex items-center gap-2 text-xs tracking-widest uppercase font-bold" style={{ color: BL }}>
                  Read More <IconArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                style={{ background: `linear-gradient(to right, ${B}, ${BB})` }} />
            </Link>
          </Reveal>

          {/* Secondary articles stacked */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {secondary.map((item, i) => (
              <Reveal key={item.title} direction="right" delay={i * 100} className="h-full flex-1">
                <Link to="/news" className="group flex overflow-hidden h-full"
                  style={{ background: "#030C1A", border: `1px solid ${BL}18`, minHeight: "196px" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${BL}45`; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = `${BL}18`; }}
                >
                  <div className="relative w-32 shrink-0 overflow-hidden">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover img-zoom" style={{ opacity: 0.65 }} />
                    <div className="absolute inset-0" style={{ background: `linear-gradient(to right, transparent, #030C1A 95%)` }} />
                    <div className="absolute inset-0" style={{ background: `${B}20` }} />
                  </div>
                  <div className="p-5 flex flex-col justify-center flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[9px] tracking-[0.25em] uppercase font-bold px-2 py-1"
                        style={{ color: catColors[item.category] || BL, background: `${catColors[item.category] || BL}12`, border: `1px solid ${catColors[item.category] || BL}28`, fontFamily: "Space Mono, monospace" }}>
                        {item.category}
                      </span>
                      <span className="text-[10px]" style={{ color: "#4A7A9E", fontFamily: "Space Mono, monospace" }}>{item.date}</span>
                    </div>
                    <h3 className="text-sm font-bold leading-snug mb-2 transition-colors duration-200 group-hover:text-[#4AAEF5]"
                      style={{ color: "#E8F0F8", fontFamily: "Playfair Display, serif" }}>
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-[10px] tracking-widest uppercase font-bold mt-auto" style={{ color: BL }}>
                      Read <IconArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                    style={{ background: `linear-gradient(to right, ${B}, ${BB})` }} />
                </Link>
              </Reveal>
            ))}
            <Reveal delay={200}>
              <Link to="/news" className="flex items-center justify-center gap-2 py-4 text-xs tracking-[0.3em] uppercase font-bold transition-all duration-300"
                style={{ border: `1px solid ${BL}20`, color: BL }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${BL}50`; (e.currentTarget as HTMLElement).style.background = `${B}10`; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = `${BL}20`; (e.currentTarget as HTMLElement).style.background = "transparent"; }}
              >
                View All News <IconArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Main Page ─────────────────────────────────────── */

export default function HomePage() {
  return (
    <main style={{ background: "#030C1A", color: "#E8F0F8" }}>
      <HeroSlider />
      <Marquee />

      {/* ── FIVE BUSINESSES ────────────────────────── */}
      <section className="py-28 relative">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 80% 0%, rgba(27,111,186,0.06) 0%, transparent 55%)" }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <SL label="Our Business" />
                <h2 className="font-black text-[#E8F0F8] mb-4 leading-tight"
                  style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontFamily: "Playfair Display, serif" }}>
                  Five <span className="text-gradient-blue italic">Businesses</span>
                </h2>
                <p className="text-base leading-relaxed font-light max-w-xl" style={{ color: "#4A7A9E", fontFamily: "Outfit, sans-serif" }}>
                  From Sri Lanka to Japan and the world — five specialist fields, one unified vision of premium quality and absolute trust.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {businesses.slice(0, 3).map((biz, i) => (
              <Reveal key={biz.num} delay={i * 110} as="div" className="h-full">
                <BizCard biz={biz} layout="portrait" />
              </Reveal>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {businesses.slice(3).map((biz, i) => (
              <Reveal key={biz.num} delay={i * 110} as="div" className="h-full">
                <BizCard biz={biz} layout="landscape" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider mx-auto max-w-5xl" />

      {/* ── ABOUT / STATS ──────────────────────────── */}
      <section className="py-28 relative overflow-hidden mesh-mid">
        <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <Reveal direction="left" className="lg:col-span-5">
              <SL label="About Us" />
              <h2 className="font-black text-[#E8F0F8] mb-7 leading-[1.1]"
                style={{ fontSize: "clamp(1.8rem, 3.8vw, 2.8rem)", fontFamily: "Playfair Display, serif" }}>
                Connecting People <br />
                <span className="text-gradient-blue italic">with HARITA</span>
              </h2>
              <p className="leading-relaxed text-base mb-8 font-light" style={{ color: "#4A7A9E", fontFamily: "Outfit, sans-serif" }}>
                Our mission is to deliver products and services of the highest quality. Through HARITA, people feel energised, healed, inspired and encouraged.
              </p>
              <Link to="/about" className="group inline-flex items-center gap-3 text-sm tracking-[0.3em] uppercase font-bold pb-1 transition-colors"
                style={{ color: BL, borderBottom: `1px solid ${BL}35` }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = BB; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = BL; }}
              >
                Discover Our Story <IconArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Reveal>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Reveal direction="scale" delay={0}>
                <StatCard val="5"    label="Business Fields"    icon={<IconGlobe className="w-7 h-7" />}  end={5}   color={BB} />
              </Reveal>
              <Reveal direction="scale" delay={150}>
                <StatCard val="10+" label="Trading Countries"  icon={<IconGlobe className="w-7 h-7" />}   end={10}  color={Y} />
              </Reveal>
              <Reveal direction="scale" delay={300}>
                <StatCard val="100%" label="Quality Commitment" icon={<IconShield className="w-7 h-7" />} end={100} color={BL} />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider mx-auto max-w-5xl" />

      {/* ── FEATURED PRODUCTS ──────────────────────── */}
      <section className="py-28" style={{ background: "#030C1A" }}>
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-14">
              <div>
                <SL label="Showcase" />
                <h2 className="font-black text-[#E8F0F8]"
                  style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontFamily: "Playfair Display, serif" }}>
                  Featured <span className="text-gradient-blue italic">Products</span>
                </h2>
              </div>
              <Link to="/foods" className="group flex items-center gap-2 text-xs tracking-[0.3em] uppercase font-bold transition-colors"
                style={{ color: BL }}
                onMouseEnter={e => (e.currentTarget.style.color = BB)}
                onMouseLeave={e => (e.currentTarget.style.color = BL)}
              >
                View Catalog <IconArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Reveal>

          {/* Products pop up one by one on scroll */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {products.map((product, i) => (
              <ProductCard key={product.name} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Marquee />

      {/* ── NEWS ───────────────────────────────────── */}
      <NewsSection />

      {/* ── ONLINE STORES ──────────────────────────── */}
      <section className="py-24" style={{ background: "#030C1A", borderTop: "1px solid rgba(27,111,186,0.08)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-12">
              <SL label="E-Commerce" />
              <h2 className="font-black text-[#E8F0F8]"
                style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)", fontFamily: "Playfair Display, serif" }}>
                Shop <span className="text-gradient-blue italic">Online</span>
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stores.map(({ name, label, Icon }, i) => (
              <Reveal key={name} direction="scale" delay={i * 80}>
                <motion.a
                  href="#"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="group flex flex-col items-center justify-center gap-4 p-8 text-center h-full transition-all duration-300"
                  style={{ background: "#061525", border: `1px solid ${BL}18` }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${BL}50`; (e.currentTarget as HTMLElement).style.background = `${B}12`; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = `${BL}18`; (e.currentTarget as HTMLElement).style.background = "#061525"; }}
                >
                  <div className="w-13 h-13 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{ background: "#030C1A", border: `1px solid ${BL}18`, width: "52px", height: "52px" }}>
                    <Icon className="w-6 h-6" style={{ color: `${BL}70` }} />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-widest mb-1.5 font-semibold" style={{ color: "#4A7A9E", fontFamily: "Outfit, sans-serif" }}>{label}</div>
                    <div className="text-base font-serif group-hover:text-[#4AAEF5] transition-colors" style={{ color: "#E8F0F8" }}>{name}</div>
                  </div>
                </motion.a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ─────────────────────────────── */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&h=700&fit=crop&auto=format"
            alt="Global connection" className="w-full h-full object-cover" style={{ opacity: 0.25, mixBlendMode: "luminosity" }} />
          <div className="absolute inset-0" style={{ background: "rgba(3,12,26,0.88)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #030C1A 0%, rgba(3,12,26,0.4) 50%, #030C1A 100%)" }} />
          <div className="absolute inset-0 grid-pattern opacity-30" />
        </div>
        {/* Decorative rings */}
        <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ border: `1px solid rgba(27,111,186,0.06)` }}
          animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] rounded-full pointer-events-none"
          style={{ border: `1px solid rgba(27,111,186,0.04)` }}
          animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }} />

        <Reveal className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="w-16 h-px mx-auto mb-10" style={{ background: `linear-gradient(to right, transparent, ${BL}, transparent)` }} />
          <h2 className="font-black text-[#E8F0F8] mb-7 leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontFamily: "Playfair Display, serif" }}>
            Let's build something <br className="hidden md:block" />
            <span className="text-gradient-blue italic">extraordinary.</span>
          </h2>
          <p className="text-lg leading-relaxed mb-12 max-w-2xl mx-auto font-light"
            style={{ color: "#4A7A9E", fontFamily: "Outfit, sans-serif" }}>
            Wholesale imports, vehicle export, software development, consulting and gemstones. Our specialists are ready to assist you.
          </p>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link to="/contact" className="group inline-flex items-center gap-4 px-14 py-4 text-sm tracking-widest uppercase font-bold btn-primary">
              Contact Us <IconArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </Reveal>
      </section>
    </main>
  );
}
