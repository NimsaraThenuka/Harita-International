import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Reveal from "../components/RevealSection";
import { IconArrowRight, IconGlobe, IconShield, IconAward } from "../components/Icons";
import MouseTrail from "../components/MouseTrail";
import { useLanguage } from "../context/LanguageContext";
import ScrollDownIndicator from "../components/ScrollDownIndicator";

const BL = "#D4AF37";   // HARITA gold
const BB = "#F3C64F";   // HARITA bright gold
const B = "#055193";   // HARITA brand blue

const locations = [
  { img: "https://res.cloudinary.com/dyp247eoh/image/upload/v1783776322/neg_amivyn.jpg", label: "Sri Lanka" },
  { img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=520&fit=crop&auto=format", label: "Japan" },
  { img: "https://images.unsplash.com/photo-1528164344705-47542687000d?w=800&h=520&fit=crop&auto=format", label: "Kyoto" },
  { img: "https://res.cloudinary.com/dyp247eoh/image/upload/v1783777618/images_-_2026-07-11T191637.973_g61vhl.jpg", label: "Sigiriya" }
];

function SL({ label }: { label: string }) {
  const { t } = useLanguage();
  return (
    <div className="flex items-center gap-4 mb-4">
      <div className="w-10 h-px" style={{ background: `linear-gradient(to right, ${BL}, ${BL}50)` }} />
      <span className="text-[11px] tracking-[0.35em] uppercase font-bold" style={{ color: BL, fontFamily: "Space Mono, monospace" }}>{t(label)}</span>
    </div>
  );
}

const profileRows = [
  { label: "Company Name", value: "Harita International Co., Ltd." },
  { label: "Representative", value: "Representative Director Lange Bandara" },
  { label: "Established", value: "【Enter the date of establishment】" },
  { label: "Location", value: "〒404-0034 1723 Shioyama Ushioku, Koshu City, Yamanashi Prefecture" },
  { label: "Contact Information", value: "TEL: +81-50-5359-0767 (Business hours 9:00〜17:00)\nFax: +81-55-213-5957\nMail: info@haritainternational.com" },
  { label: "Business details", value: "1. Import, wholesale and retail sales of food and miscellaneous goods\n2. Buying and selling used cars (including heavy machinery) (domestic and international)\n3. Software/system development and maintenance (including digital marketing and AI business efficiency)\n4. Consulting (corporate, personal, branding)\n5. Import and sale of jewelry and accessories (wholesale and retail)" },
  { label: "License", value: "Secondhand goods business license 【Enter the license number 】\nImporter notification under the Food Sanitation Act" },
  { label: "Major trading partners", value: "Domestic e-commerce companies, major department stores, wholesalers, overseas buyers, etc" }
];

const historyRows = [
  { year: "【Enter the year and month】", event: "Harita International Co., Ltd. established" },
  { year: "【Enter the year and month】", event: "Started importing and selling Sri Lankan food products" },
  { year: "2020", event: "Online sales begin in earnest (Amazon, Rakuten Ichiba, Official EC)" },
  { year: "【Enter the year and month】", event: "Started handling at major department stores" },
  { year: "【Enter the year and month】", event: "Started buying and selling used cars and heavy machinery, importing and selling jewelry, and developing systems" },
  { year: "2026", event: "Corporate website completely renovated" }
];

const stats = [
  { val: "5", label: "Business Fields", Icon: IconGlobe, color: BB },
  { val: "10+", label: "Trading Countries", Icon: IconAward, color: BL },
  { val: "100%", label: "Quality Commitment", Icon: IconShield, color: BB },
];

function PhilosophySlideshow() {
  const { t } = useLanguage();
  const [locIndex, setLocIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLocIndex(prev => (prev + 1) % locations.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-sm h-80">
        <img src={locations[locIndex].img}
          alt={t(locations[locIndex].label)} className="w-full h-full object-cover img-zoom" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(3,12,26,0.4) 0%, transparent 60%)" }} />
        <div className="absolute inset-0" style={{ background: `${B}10` }} />
      </div>
      <div className="absolute -bottom-4 -left-4 w-24 h-24" style={{ border: `1px solid rgba(212,175,55,0.2)` }} />
      <div className="absolute -top-4 -right-4 w-24 h-24" style={{ border: `1px solid rgba(212,175,55,0.2)` }} />
      <div className="absolute bottom-4 right-4 text-[10px] tracking-[0.3em] uppercase px-3 py-1.5"
        style={{ color: "#D4AF37", background: "rgba(2,11,24,0.9)", border: `1px solid rgba(212,175,55,0.35)`, fontFamily: "Space Mono, monospace" }}>
        {t(locations[locIndex].label)}
      </div>
    </div>
  );
}

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
      style={{ background: "#020b18", color: "#E8F0F8" }}
    >
      {/* ── Hero ─────────────────────────────────── */}
      <div className="relative pt-44 pb-20 overflow-hidden min-h-[64vh] flex items-end">
        <MouseTrail />
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=800&fit=crop&auto=format"
            alt="Sri Lanka landscape" className="w-full h-full object-cover opacity-22 scale-105" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(2,11,24,0.9) 0%, rgba(2,11,24,0.5) 45%, #020b18 100%)" }} />
          <div className="absolute inset-0 grid-pattern opacity-50" />
        </div>
        <motion.div className="absolute top-1/3 right-[10%] w-64 h-64 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(5,81,147,0.08) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute top-[20%] right-[20%] w-24 h-24 border pointer-events-none"
          style={{ borderColor: "rgba(212,175,55,0.12)", rotate: 30 }}
          animate={{ rotate: [30, 55, 30] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} />
        <div className="absolute left-0 top-0 bottom-0 w-[3px]"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(212,175,55,0.8), transparent)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pb-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <SL label="About Us" />
            <h1 className="font-black text-[#E8F0F8] mt-1 leading-[1.12] tracking-tight pb-1"
              style={{ fontSize: "clamp(2.8rem, 6vw, 4.4rem)", fontFamily: "Outfit, sans-serif" }}>
              {t("About")}<br /><span className="text-gradient-blue italic py-0.5 inline-block">{t("HARITA")}</span>
            </h1>
          </motion.div>
        </div>
        <ScrollDownIndicator />
      </div>

      {/* ── Philosophy ──────────────────────────── */}
      <section className="py-28 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <Reveal direction="left">
            <SL label="Philosophy" />
            <h2 className="font-black text-[#E8F0F8] mb-8 leading-[1.1]"
              style={{ fontSize: "clamp(1.8rem, 3.8vw, 2.8rem)", fontFamily: "Outfit, sans-serif" }}>
              {t("Connecting People")}<br />
              <span className="text-gradient-blue italic">{t("with HARITA")}</span>
            </h2>
            <p className="text-lg leading-relaxed mb-5 font-light" style={{ color: "#A2C1DB", fontFamily: "Outfit, sans-serif" }}>
              {t("Under this philosophy, our mission is to deliver products and services of the highest quality to as many people as possible.")}
            </p>
            <p className="leading-relaxed font-light" style={{ color: "#A2C1DB", fontFamily: "Outfit, sans-serif" }}>
              {t("Through HARITA, people feel energised, healed, inspired and encouraged. We believe such products and services are needed now more than ever, and we continue to refine our work and contribute to society.")}
            </p>
          </Reveal>

          <Reveal direction="right">
            <PhilosophySlideshow />
          </Reveal>
        </div>
      </section>

      {/* ── CEO Message ─────────────────────────── */}
      <section className="py-28 relative" style={{ background: "#03152a" }}>
        <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Reveal>
            <SL label="Message" />
            <h2 className="font-black text-[#E8F0F8] mb-14"
              style={{ fontSize: "clamp(1.8rem, 3.8vw, 2.8rem)", fontFamily: "Outfit, sans-serif" }}>
              {t("Message from the")} <span className="text-gradient-blue italic">{t("CEO")}</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            <Reveal direction="left" className="md:col-span-1">
              <div className="relative overflow-hidden" style={{ background: "#020b18" }}>
                <img src={navigator.userAgent.includes("Figma") ? "https://res.cloudinary.com/dyp247eoh/image/upload/v1783760034/avatar-profile-icon-in-flat-style-male-user-profile-illustration-on-isolated-background-man-profile-sign-business-concept-vector_gjblpa.jpg" : "https://res.cloudinary.com/dyp247eoh/image/upload/v1783760034/avatar-profile-icon-in-flat-style-male-user-profile-illustration-on-isolated-background-man-profile-sign-business-concept-vector_gjblpa.jpg"}
                  alt="CEO Ranghe Bandara" className="w-full h-80 object-cover img-zoom" style={{ opacity: 0.85 }} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(2,11,24,0.7) 0%, transparent 60%)" }} />
                <div className="absolute inset-0" style={{ background: `${B}20` }} />
              </div>
              <div className="mt-4 p-4" style={{ borderLeft: `2px solid ${BL}` }}>
                <div className="text-[#E8F0F8] font-bold">{t("Ranghe Bandara")}</div>
                <div className="text-[10px] tracking-[0.3em] uppercase mt-1" style={{ color: BL, fontFamily: "Space Mono, monospace" }}>
                  {t("CEO, HARITA International")}
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" className="md:col-span-2 space-y-6">
              <div className="w-10 h-px" style={{ background: `linear-gradient(to right, ${BL}, ${BL}40)` }} />
              <p className="text-[#E8F0F8] text-2xl leading-relaxed italic" style={{ fontFamily: "Outfit, sans-serif" }}>
                {t("\"HARITA was born from a desire to build a bridge between my home country, Sri Lanka, and Japan.\"")}
              </p>
              <p className="text-lg leading-relaxed font-light" style={{ color: "#A2C1DB", fontFamily: "Outfit, sans-serif" }}>
                {t("Our journey started with importing fine spices, and has since expanded into automotive export, software solutions, and advisory services. No matter the industry, our underlying vision remains unchanged: connecting people. We will continue to deliver quality and build trust for our clients' lives and businesses.")}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────── */}
      <section style={{ background: "#020b18" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-8">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} direction="scale" delay={i * 120} className="p-10 text-center h-full" as="div"
                style={{ background: `linear-gradient(135deg, rgba(5,81,147,0.2) 0%, #03152a 60%, rgba(212,175,55,0.08) 100%)`, border: `1px solid rgba(212,175,55,0.2)` }}>
                <div className="flex justify-center mb-5" style={{ color: stat.color }}>
                  <stat.Icon className="w-7 h-7 text-[#D4AF37]" />
                </div>
                <div className="text-4xl md:text-6xl font-black mb-3 font-serif" style={{ color: stat.color }}>
                  {stat.val}
                </div>
                <div className="text-[11px] tracking-[0.25em] uppercase font-semibold" style={{ color: "#A2C1DB", fontFamily: "Outfit, sans-serif" }}>
                  {t(stat.label)}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Company Profile ──────────────────────── */}
      <section className="py-28" style={{ background: "#03152a" }}>
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <SL label="Company Profile" />
            <h2 className="font-black text-[#E8F0F8] mb-14"
              style={{ fontSize: "clamp(1.8rem, 3.8vw, 2.8rem)", fontFamily: "Outfit, sans-serif" }}>
              {t("Company")} <span className="text-gradient-blue italic">{t("Profile")}</span>
            </h2>
          </Reveal>
          <Reveal>
            <div style={{ border: `1px solid rgba(212,175,55,0.2)` }} className="overflow-hidden">
              {profileRows.map((row, i) => (
                <div key={row.label} className="grid grid-cols-1 md:grid-cols-4 transition-colors duration-200"
                  style={{ borderBottom: i < profileRows.length - 1 ? `1px solid rgba(212,175,55,0.15)` : "none" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = `rgba(5,81,147,0.15)`; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}>
                  <div className="p-6 md:border-r" style={{ background: "#020b18", borderColor: `rgba(212,175,55,0.15)` }}>
                    <span className="text-[11px] tracking-[0.28em] uppercase font-bold" style={{ color: BL, fontFamily: "Space Mono, monospace" }}>
                      {t(row.label)}
                    </span>
                  </div>
                  <div className="p-6 md:col-span-3 text-sm leading-relaxed whitespace-pre-line font-light"
                    style={{ color: "#A2C1DB", fontFamily: "Outfit, sans-serif" }}>
                    {t(row.value)}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── History ─────────────────────────────── */}
      <section className="py-28" style={{ background: "#020b18", borderTop: `1px solid ${B}10` }}>
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <SL label="History" />
            <h2 className="font-black text-[#E8F0F8] mb-14"
              style={{ fontSize: "clamp(1.8rem, 3.8vw, 2.8rem)", fontFamily: "Outfit, sans-serif" }}>
              {t("Corporate")} <span className="text-gradient-blue italic">{t("History")}</span>
            </h2>
          </Reveal>
          <Reveal>
            <div style={{ border: `1px solid rgba(212,175,55,0.2)` }} className="overflow-hidden">
              {historyRows.map((row, i) => (
                <div key={i} className="grid grid-cols-1 md:grid-cols-4 transition-colors duration-200"
                  style={{ borderBottom: i < historyRows.length - 1 ? `1px solid rgba(212,175,55,0.15)` : "none" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = `rgba(5,81,147,0.15)`; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}>
                  <div className="p-6 md:border-r" style={{ background: "#03152a", borderColor: `rgba(212,175,55,0.15)` }}>
                    <span className="text-[12px] tracking-[0.15em] font-bold" style={{ color: BL, fontFamily: "Space Mono, monospace" }}>
                      {t(row.year)}
                    </span>
                  </div>
                  <div className="p-6 md:col-span-3 text-sm leading-relaxed whitespace-pre-line font-light"
                    style={{ color: "#A2C1DB", fontFamily: "Outfit, sans-serif" }}>
                    {t(row.event)}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section className="py-24 text-center" style={{ borderTop: `1px solid ${B}10` }}>
        <Reveal>
          <p className="text-[11px] tracking-[0.4em] uppercase mb-4" style={{ color: BL, fontFamily: "Space Mono, monospace" }}>
            {t("Ready to Connect")}
          </p>
          <h2 className="font-black text-[#E8F0F8] mb-4 leading-tight"
            style={{ fontSize: "clamp(1.35rem, 6vw, 2.8rem)", fontFamily: "Outfit, sans-serif" }}>
            {t("Let's talk about")} <span className="text-gradient-blue italic">{t("your needs.")}</span>
          </h2>
          <p className="mb-10 font-light text-sm md:text-lg" style={{ color: "#A2C1DB", fontFamily: "Outfit, sans-serif" }}>
            {t("Our specialists are ready to help in English or Japanese.")}
          </p>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link to="/contact" className="group inline-flex items-center gap-3 px-10 py-4 text-sm tracking-widest uppercase font-bold btn-primary">
              {t("Contact Us")} <IconArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </Reveal>
      </section>
    </motion.main>
  );
}
