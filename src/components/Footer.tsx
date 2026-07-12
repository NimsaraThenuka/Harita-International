import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IconPhone, IconMail, IconMapPin, IconInstagram, IconFacebook, IconTwitter, IconYoutube, IconPinterest, IconArrowRight } from "./Icons";
import Reveal from "./RevealSection";
import { useLanguage } from "../context/LanguageContext";

const socialLinks = [
  { Icon: IconInstagram, label: "Instagram", href: "https://www.instagram.com/haritaint/" },
  { Icon: IconFacebook, label: "Facebook", href: "https://web.facebook.com/haritaint/?_rdc=1&_rdr#" },
  { Icon: IconTwitter, label: "X (Twitter)", href: "https://x.com/haritaint" },
  { Icon: IconYoutube, label: "YouTube", href: "https://linktr.ee/haritaint" },
  { Icon: IconPinterest, label: "Pinterest", href: "https://linktr.ee/haritaint" },
];

const menuLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "News", to: "/news" },
  { label: "Contact", to: "/contact" },
];

const bizLinks = [
  { label: "Foods & Trading", to: "/foods" },
  { label: "Used Vehicles & Machinery", to: "/vehicles" },
  { label: "Software & AI Solutions", to: "/software" },
  { label: "Consulting", to: "/consulting" },
  { label: "Gemstones & Jewellery", to: "/gemstones" },
];

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative overflow-hidden" style={{ background: "#020b18", borderTop: "1px solid rgba(212,175,55,0.25)" }}>
      {/* Decorative background HARITA text */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 select-none pointer-events-none whitespace-nowrap font-serif font-black"
        style={{
          fontSize: "clamp(80px, 14vw, 180px)",
          color: "transparent",
          WebkitTextStroke: "1px rgba(212, 175, 55, 0.15)",
          letterSpacing: "0.12em",
          lineHeight: 1,
          bottom: "-0.15em",
        }}
        aria-hidden
      >
        HARITA
      </div>

      {/* Top gradient line */}
      <div className="h-px w-full" style={{ background: "linear-gradient(to right, transparent, rgba(212,175,55,0.4), transparent)" }} />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <Reveal className="lg:col-span-2" direction="left">
            {/* Larger logo with better visibility */}
            <div className="mb-7 p-4 inline-block rounded-sm" style={{ background: "rgba(5,81,147,0.1)", border: "1px solid rgba(212,175,55,0.2)" }}>
              <img
                src="https://res.cloudinary.com/dyp247eoh/image/upload/v1783658387/logo_full_soijbq.png"
                alt="HARITA International"
                className="w-auto object-contain"
                style={{ height: "52px", filter: "brightness(1.15) contrast(1.05)" }}
              />
            </div>
            <p className="text-sm leading-relaxed max-w-sm mb-7 font-light" style={{ color: "#A2C1DB", fontFamily: "Outfit, sans-serif" }}>
              {t("Connecting Sri Lanka and Japan through five business fields — foods, vehicles, software, consulting and gemstones.")}
            </p>
            <div className="space-y-3 text-sm">
              <p className="font-bold tracking-widest text-xs uppercase whitespace-pre-line" style={{ color: "#E8F0F8", fontFamily: "Outfit, sans-serif", letterSpacing: "0.16em" }}>
                {t("HARITA INTERNATIONAL")}
              </p>
              <div className="flex items-start gap-3 text-sm" style={{ color: "#A2C1DB" }}>
                <IconMapPin className="w-4 h-4 shrink-0 mt-0.5 text-[#D4AF37]" />
                <span className="leading-relaxed whitespace-pre-line">{t("1723 Ushioku, Enzan, Koshu-shi, Yamanashi 404-0034, Japan")}</span>
              </div>
              <div className="flex items-center gap-3" style={{ color: "#A2C1DB" }}>
                <IconPhone className="w-4 h-4 shrink-0 text-[#D4AF37]" />
                <span>+81-50-5359-0767 (9:00–17:00 JST)</span>
              </div>
              <div className="flex items-center gap-3">
                <IconMail className="w-4 h-4 shrink-0 text-[#D4AF37]" />
                <a href="mailto:info@haritainternational.com" className="transition-colors duration-200" style={{ color: "#A2C1DB" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#D4AF37")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#A2C1DB")}
                >
                  info@haritainternational.com
                </a>
              </div>
            </div>

            <div className="flex gap-2 mt-7">
              {socialLinks.map(({ Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="w-9 h-9 flex items-center justify-center transition-colors duration-200"
                  style={{ border: "1px solid rgba(212,175,55,0.2)", color: "#A2C1DB" }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = "rgba(212,175,55,0.6)";
                    e.currentTarget.style.color = "#D4AF37";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = "rgba(212,175,55,0.2)";
                    e.currentTarget.style.color = "#A2C1DB";
                  }}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </Reveal>

          {/* Menu */}
          <Reveal delay={100}>
            <h4 className="text-[10px] tracking-[0.3em] uppercase font-bold mb-6" style={{ color: "#D4AF37", fontFamily: "Outfit, sans-serif" }}>{t("MENU")}</h4>
            <ul className="space-y-3.5">
              {menuLinks.map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm flex items-center gap-3 group transition-colors" style={{ color: "#A2C1DB" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#D4AF37")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#A2C1DB")}
                  >
                    <IconArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-all duration-200 text-[#D4AF37]/50" />
                    {t(link.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Business */}
          <Reveal delay={200}>
            <h4 className="text-[10px] tracking-[0.3em] uppercase font-bold mb-6" style={{ color: "#D4AF37", fontFamily: "Outfit, sans-serif" }}>{t("Business")}</h4>
            <ul className="space-y-3.5">
              {bizLinks.map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm flex items-center gap-3 group transition-colors" style={{ color: "#A2C1DB" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#D4AF37")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#A2C1DB")}
                  >
                    <IconArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-all duration-200 text-[#D4AF37]/50" />
                    {t(link.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="border-t pt-6 flex flex-col sm:flex-row justify-between items-center gap-3" style={{ borderColor: "rgba(212,175,55,0.15)" }}>
          <p className="text-xs tracking-wide" style={{ color: "#7E9EBA", fontFamily: "Outfit, sans-serif" }}>
            {t("© 2026 HARITA INTERNATIONAL CO., LTD. All rights reserved.")}
          </p>
          <p className="text-xs tracking-[0.18em] uppercase" style={{ color: "#D4AF37", fontFamily: "Outfit, sans-serif" }}>
            {t("Connecting People with HARITA")}
          </p>
        </div>
      </div>
    </footer>
  );
}
