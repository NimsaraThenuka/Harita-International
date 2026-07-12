import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "../components/RevealSection";
import { IconPhone, IconMail, IconMapPin, IconCheck, IconArrowRight } from "../components/Icons";
import MouseTrail from "../components/MouseTrail";
import { useLanguage } from "../context/LanguageContext";

const BL = "#D4AF37";   // HARITA gold
const BB = "#F3C64F";   // HARITA bright gold
const B  = "#055193";   // HARITA brand blue

function SL({ label }: { label: string }) {
  const { t } = useLanguage();
  return (
    <div className="flex items-center gap-4 mb-4">
      <div className="w-10 h-px" style={{ background: `linear-gradient(to right, ${BL}, ${BL}50)` }} />
      <span className="text-[11px] tracking-[0.35em] uppercase font-bold" style={{ color: BL, fontFamily: "Space Mono, monospace" }}>{t(label)}</span>
    </div>
  );
}

const topics = [
  "Foods & Spices (wholesale/retail)",
  "Used Vehicles & Machinery (export/domestic)",
  "Software & AI Solutions",
  "Consulting",
  "Gemstones & Jewellery",
  "Other",
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", topic: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputBase: React.CSSProperties = {
    width: "100%",
    background: "#03152a",
    border: `1px solid rgba(212,175,55,0.2)`,
    color: "#E8F0F8",
    padding: "14px 16px",
    fontSize: "15px",
    outline: "none",
    transition: "border-color 0.2s ease",
    fontFamily: "Outfit, sans-serif",
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
      style={{ background: "#020b18", color: "#E8F0F8" }}
    >
      {/* Hero */}
      <div className="relative pt-44 pb-20 overflow-hidden min-h-[64vh] flex items-end">
        <MouseTrail />
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&h=700&fit=crop&auto=format"
            alt="Contact" className="w-full h-full object-cover opacity-22 scale-105" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(2,11,24,0.92) 0%, rgba(2,11,24,0.6) 45%, #020b18 100%)" }} />
          <div className="absolute inset-0 grid-pattern opacity-50" />
        </div>
        <motion.div className="absolute top-1/3 right-[8%] w-64 h-64 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle, rgba(5,81,147,0.08) 0%, transparent 70%)` }}
          animate={{ scale: [1, 1.18, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute top-[22%] right-[16%] w-20 h-20 border pointer-events-none"
          style={{ borderColor: "rgba(212,175,55,0.12)", rotate: 25 }}
          animate={{ rotate: [25, 50, 25] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
        <div className="absolute left-0 top-0 bottom-0 w-[3px]"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(212,175,55,0.8), transparent)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pb-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <SL label="Contact" />
            <h1 className="font-black text-[#E8F0F8] mt-1 leading-[1.12] tracking-tight pb-1"
              style={{ fontSize: "clamp(2.8rem, 6vw, 4.4rem)", fontFamily: "Outfit, sans-serif" }}>
              {t("Get in")}<br /><span className="text-gradient-blue italic py-0.5 inline-block">{t("Touch")}</span>
            </h1>
            <p className="text-lg mt-6 max-w-xl leading-relaxed font-light" style={{ color: "#A2C1DB", fontFamily: "Outfit, sans-serif" }}>
              {t("Product purchases, wholesale, vehicle export, software development, consulting or gemstones — we usually reply within two business days.")}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Form */}
          <Reveal direction="left" className="lg:col-span-2">
            <SL label="Send a Message" />
            <h2 className="font-black text-[#E8F0F8] mb-10"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontFamily: "Outfit, sans-serif" }}>
              {t("Contact")} <span className="text-gradient-blue italic">{t("Form")}</span>
            </h2>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-24"
                style={{ border: `1px solid rgba(212,175,55,0.25)`, background: "#03152a" }}
              >
                <motion.div
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="w-16 h-16 flex items-center justify-center mx-auto mb-6"
                  style={{ background: `${B}15`, border: `2px solid ${BL}` }}
                >
                  <IconCheck className="w-8 h-8 text-[#D4AF37]" />
                </motion.div>
                <h3 className="text-2xl font-bold text-[#E8F0F8] mb-3">{t("Message Sent")}</h3>
                <p className="max-w-md mx-auto px-6 text-base leading-relaxed font-light mb-10" style={{ color: "#A2C1DB", fontFamily: "Outfit, sans-serif" }}>
                  {t("Thank you for reaching out. We will reply within two business days.")}
                </p>
                <motion.button
                  onClick={() => setSubmitted(false)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 text-xs tracking-widest uppercase font-bold transition-all duration-200"
                  style={{ border: `1px solid ${BL}`, color: BL }}
                  onMouseEnter={e => { e.currentTarget.style.background = BL; e.currentTarget.style.color = "#020b18"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = BL; }}
                >
                  {t("Send another message")}
                </motion.button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    { name: "name", label: "Your Name *", placeholder: "Taro Yamada", type: "text" },
                    { name: "email", label: "Email Address *", placeholder: "taro@example.com", type: "email" },
                  ].map(f => (
                    <div key={f.name}>
                      <label className="block text-[10px] tracking-[0.3em] uppercase mb-2" style={{ color: "#4A7A9E", fontFamily: "Space Mono, monospace" }}>{t(f.label)}</label>
                      <input
                        type={f.type}
                        name={f.name}
                        value={(form as any)[f.name]}
                        onChange={handleChange}
                        placeholder={t(f.placeholder)}
                        required
                        style={inputBase}
                        onFocus={e => (e.target.style.borderColor = BL)}
                        onBlur={e => (e.target.style.borderColor = `rgba(212,175,55,0.2)`)}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.3em] uppercase mb-2" style={{ color: "#A2C1DB", fontFamily: "Space Mono, monospace" }}>{t("Company / Organisation")}</label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder={t("Company name (optional)")}
                    style={inputBase}
                    onFocus={e => (e.target.style.borderColor = BL)}
                    onBlur={e => (e.target.style.borderColor = `rgba(212,175,55,0.2)`)}
                  />
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.3em] uppercase mb-2" style={{ color: "#A2C1DB", fontFamily: "Space Mono, monospace" }}>{t("Topic *")}</label>
                  <select
                    name="topic"
                    value={form.topic}
                    onChange={handleChange}
                    required
                    style={{ ...inputBase, cursor: "pointer" }}
                    onFocus={e => (e.target.style.borderColor = BL)}
                    onBlur={e => (e.target.style.borderColor = `rgba(212,175,55,0.2)`)}
                  >
                    <option value="" disabled style={{ background: "#03152a" }}>{t("Select a topic...")}</option>
                    {topics.map(tOption => <option key={tOption} value={tOption} style={{ background: "#03152a" }}>{t(tOption)}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.3em] uppercase mb-2" style={{ color: "#A2C1DB", fontFamily: "Space Mono, monospace" }}>{t("Message *")}</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder={t("Please describe your enquiry in as much detail as you can...")}
                    required
                    rows={7}
                    style={{ ...inputBase, resize: "none" }}
                    onFocus={e => (e.target.style.borderColor = BL)}
                    onBlur={e => (e.target.style.borderColor = `rgba(212,175,55,0.2)`)}
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center gap-3 px-10 py-4 text-sm tracking-widest uppercase font-bold btn-primary"
                >
                  {t("Send Message")}
                  <IconArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </form>
            )}
          </Reveal>

          {/* Contact Info */}
          <Reveal direction="right" className="space-y-5">
            <SL label="Direct Contact" />
            <h2 className="font-black text-[#E8F0F8] mb-7"
              style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontFamily: "Outfit, sans-serif" }}>
              {t("Reach Us")} <span className="text-gradient-blue italic">{t("Directly")}</span>
            </h2>

            {[
              { Icon: IconPhone, label: "Telephone", value: "+81-50-5359-0767", sub: "9:00–17:00 JST (Mon–Fri)", href: undefined },
              { Icon: IconMail, label: "Email", value: "info@haritainternational.com", sub: "We reply within 2 business days", href: "mailto:info@haritainternational.com" },
              { Icon: IconMapPin, label: "Address", value: "1723 Ushioku, Enzan, Koshu-shi,\nYamanashi 404-0034, Japan", sub: "HARITA INTERNATIONAL CO., LTD.", href: undefined },
            ].map(item => (
              <motion.div
                key={item.label}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="p-6 transition-all duration-300"
                style={{ background: "#03152a", border: `1px solid rgba(212,175,55,0.18)` }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#D4AF37"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,55,0.18)"; }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 flex items-center justify-center"
                    style={{ background: `${B}14`, border: `1px solid ${BL}25` }}>
                    <item.Icon className="w-4 h-4 text-[#4AAEF5]" />
                  </div>
                  <span className="text-[10px] tracking-[0.3em] uppercase font-bold" style={{ color: BL, fontFamily: "Space Mono, monospace" }}>{t(item.label)}</span>
                </div>
                {item.href ? (
                  <a href={item.href} className="font-semibold text-sm break-all whitespace-pre-line block transition-colors"
                    style={{ color: "#C8D8E8" }}
                    onMouseEnter={e => (e.currentTarget.style.color = BB)}
                    onMouseLeave={e => (e.currentTarget.style.color = "#C8D8E8")}>
                    {t(item.value)}
                  </a>
                ) : (
                  <div className="font-semibold text-sm whitespace-pre-line" style={{ color: "#C8D8E8", fontFamily: "Outfit, sans-serif" }}>{t(item.value)}</div>
                )}
                <div className="text-xs mt-1" style={{ color: "#4A7A9E", fontFamily: "Outfit, sans-serif" }}>{t(item.sub)}</div>
              </motion.div>
            ))}

            <div className="p-6" style={{ background: "#03152a", border: `1px solid rgba(212,175,55,0.18)` }}>
              <div className="text-[10px] tracking-[0.3em] uppercase font-bold mb-4" style={{ color: BL, fontFamily: "Space Mono, monospace" }}>{t("Languages")}</div>
              <div className="flex gap-5">
                {["English", "Japanese"].map(lang => (
                  <span key={lang} className="flex items-center gap-2 text-sm" style={{ color: "#A2C1DB", fontFamily: "Outfit, sans-serif" }}>
                    <IconCheck className="w-3.5 h-3.5 shrink-0 text-[#D4AF37]" />
                    {t(lang)}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </motion.main>
  );
}
