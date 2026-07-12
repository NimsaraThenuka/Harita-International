import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IconPhone, IconMail, IconMapPin, IconInstagram, IconFacebook, IconTwitter, IconYoutube, IconPinterest, IconArrowRight } from "./Icons";
import Reveal from "./RevealSection";

const socialLinks = [
  { Icon: IconInstagram, label: "Instagram" },
  { Icon: IconFacebook, label: "Facebook" },
  { Icon: IconTwitter, label: "X (Twitter)" },
  { Icon: IconYoutube, label: "YouTube" },
  { Icon: IconPinterest, label: "Pinterest" },
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
  return (
    <footer className="relative overflow-hidden" style={{ background: "#020A16", borderTop: "1px solid rgba(27,111,186,0.15)" }}>
      {/* Decorative background HARITA text */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 select-none pointer-events-none whitespace-nowrap font-serif font-black"
        style={{
          fontSize: "clamp(80px, 14vw, 180px)",
          color: "transparent",
          WebkitTextStroke: "1px rgba(27, 111, 186, 0.05)",
          letterSpacing: "0.12em",
          lineHeight: 1,
          bottom: "-0.15em",
        }}
        aria-hidden
      >
        HARITA
      </div>

      {/* Top gradient line */}
      <div className="h-px w-full" style={{ background: "linear-gradient(to right, transparent, rgba(27,111,186,0.5), transparent)" }} />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <Reveal className="lg:col-span-2" direction="left">
            {/* Larger logo with better visibility */}
            <div className="mb-7 p-4 inline-block rounded-sm" style={{ background: "rgba(27,111,186,0.06)", border: "1px solid rgba(27,111,186,0.12)" }}>
              <img
                src="https://res.cloudinary.com/dyp247eoh/image/upload/v1783658387/logo_full_soijbq.png"
                alt="HARITA International"
                className="w-auto object-contain"
                style={{ height: "52px", filter: "brightness(1.15) contrast(1.05)" }}
              />
            </div>
            <p className="text-sm leading-relaxed max-w-sm mb-7 font-light" style={{ color: "#4A7A9E", fontFamily: "Outfit, sans-serif" }}>
              Connecting Sri Lanka and Japan through five business fields — foods, vehicles, software, consulting and gemstones.
            </p>
            <div className="space-y-3 text-sm">
              <p className="font-bold tracking-widest text-xs uppercase" style={{ color: "#E8F0F8", fontFamily: "Outfit, sans-serif", letterSpacing: "0.16em" }}>
                HARITA INTERNATIONAL CO., LTD.
              </p>
              <div className="flex items-start gap-3" style={{ color: "#4A7A9E" }}>
                <IconMapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#2E90E8" }} />
                <span className="leading-relaxed">1723 Ushioku, Enzan, Koshu-shi,<br />Yamanashi 404-0034, Japan</span>
              </div>
              <div className="flex items-center gap-3" style={{ color: "#4A7A9E" }}>
                <IconPhone className="w-4 h-4 shrink-0" style={{ color: "#2E90E8" }} />
                <span>+81-50-5359-0767 (9:00–17:00 JST)</span>
              </div>
              <div className="flex items-center gap-3">
                <IconMail className="w-4 h-4 shrink-0" style={{ color: "#2E90E8" }} />
                <a href="mailto:info@haritainternational.com" className="transition-colors duration-200" style={{ color: "#4A7A9E" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#2E90E8")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#4A7A9E")}
                >
                  info@haritainternational.com
                </a>
              </div>
            </div>

            <div className="flex gap-2 mt-7">
              {socialLinks.map(({ Icon, label }) => (
                <motion.a
                  key={label}
                  href="#"
                  aria-label={label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="w-9 h-9 flex items-center justify-center transition-colors duration-200"
                  style={{ border: "1px solid rgba(27,111,186,0.18)", color: "#4A7A9E" }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = "rgba(46,144,232,0.5)";
                    e.currentTarget.style.color = "#2E90E8";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = "rgba(27,111,186,0.18)";
                    e.currentTarget.style.color = "#4A7A9E";
                  }}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </Reveal>

          {/* Menu */}
          <Reveal delay={100}>
            <h4 className="text-[10px] tracking-[0.3em] uppercase font-bold mb-6" style={{ color: "#2E90E8", fontFamily: "Outfit, sans-serif" }}>Menu</h4>
            <ul className="space-y-3.5">
              {menuLinks.map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm flex items-center gap-3 group transition-colors" style={{ color: "#4A7A9E" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#E8F0F8")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#4A7A9E")}
                  >
                    <IconArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-all duration-200" style={{ color: "rgba(46,144,232,0.35)" }} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Business */}
          <Reveal delay={200}>
            <h4 className="text-[10px] tracking-[0.3em] uppercase font-bold mb-6" style={{ color: "#4AAEF5", fontFamily: "Outfit, sans-serif" }}>Business</h4>
            <ul className="space-y-3.5">
              {bizLinks.map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm flex items-center gap-3 group transition-colors" style={{ color: "#4A7A9E" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#E8F0F8")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#4A7A9E")}
                  >
                    <IconArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-all duration-200" style={{ color: "rgba(74,174,245,0.35)" }} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="border-t pt-6 flex flex-col sm:flex-row justify-between items-center gap-3" style={{ borderColor: "rgba(27,111,186,0.08)" }}>
          <p className="text-xs tracking-wide" style={{ color: "#2A4A6A", fontFamily: "Outfit, sans-serif" }}>
            © 2026 HARITA INTERNATIONAL CO., LTD. All rights reserved.
          </p>
          <p className="text-xs tracking-[0.18em] uppercase" style={{ color: "#2A4A6A", fontFamily: "Outfit, sans-serif" }}>
            Connecting People with HARITA
          </p>
        </div>
      </div>
    </footer>
  );
}
