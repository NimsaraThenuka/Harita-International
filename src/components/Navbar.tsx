import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { IconChevronDown, IconMenu, IconX } from "./Icons";
import { useLanguage } from "../context/LanguageContext";

const businessLinks = [
  { label: "Foods & Trading", to: "/foods", tag: "01" },
  { label: "Used Vehicles & Machinery", to: "/vehicles", tag: "02" },
  { label: "Software & AI Solutions", to: "/software", tag: "03" },
  { label: "Consulting", to: "/consulting", tag: "04" },
  { label: "Gemstones & Jewellery", to: "/gemstones", tag: "05" },
];

const BLUE = "#D4AF37";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileBusinessOpen, setMobileBusinessOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const bizPaths = ["/foods", "/vehicles", "/software", "/consulting", "/gemstones"];
  const isActive = (path: string) => location.pathname === path;
  const isBizActive = bizPaths.includes(location.pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); setDropOpen(false); }, [location.pathname]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setDropOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const linkCls = (active: boolean) =>
    `relative text-xs tracking-[0.22em] uppercase font-semibold transition-colors duration-200 ${active ? "text-[#D4AF37]" : "text-[#A2C1DB] hover:text-[#D4AF37]"}`;

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
      style={scrolled ? {
        background: "rgba(2, 11, 24, 0.96)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(212,175,55,0.25)",
        padding: "10px 0",
        transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
      } : {
        background: "transparent",
        padding: "18px 0",
        transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo — larger and clearly visible */}
        <Link to="/" className="flex-shrink-0">
          <img
            src="https://res.cloudinary.com/dyp247eoh/image/upload/v1783658387/logo_full_soijbq.png"
            alt="HARITA International"
            className="w-auto object-contain"
            style={{ height: "68px", filter: "brightness(1.2) contrast(1.1)" }}
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-9">
          {[{ label: "Home", to: "/" }, { label: "About", to: "/about" }].map(({ label, to }) => (
            <Link key={to} to={to} className={linkCls(isActive(to))}>
              {t(label)}
              {isActive(to) && (
                <motion.span layoutId="nav-underline" className="absolute -bottom-1 left-0 right-0 h-px" style={{ background: BLUE }} />
              )}
            </Link>
          ))}

          {/* Business dropdown */}
          <div className="relative" ref={dropRef}>
            <button
              onClick={() => setDropOpen(v => !v)}
              className={`${linkCls(isBizActive)} flex items-center gap-1.5`}
            >
              {t("Business")}
              <motion.span animate={{ rotate: dropOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <IconChevronDown className="w-3.5 h-3.5" />
              </motion.span>
              {isBizActive && (
                <motion.span layoutId="nav-underline" className="absolute -bottom-1 left-0 right-0 h-px" style={{ background: BLUE }} />
              )}
            </button>

            <AnimatePresence>
              {dropOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.97 }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute top-full left-0 mt-3.5 w-76 rounded-lg p-2.5 flex flex-col gap-1.5 overflow-hidden"
                  style={{
                    background: "rgba(3,21,42,0.96)",
                    backdropFilter: "blur(24px)",
                    border: "1px solid rgba(212,175,55,0.22)",
                    boxShadow: "0 28px 70px rgba(0,0,0,0.72), inset 0 1px 0 rgba(255,255,255,0.06)",
                  }}
                >
                  {businessLinks.map((link, i) => (
                    <motion.div
                      key={link.to}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04, duration: 0.2 }}
                    >
                      <Link
                        to={link.to}
                        className="flex items-center gap-4 px-4 py-3 text-sm transition-all duration-300 rounded-md group"
                        style={{ color: "#A2C1DB" }}
                        onMouseEnter={e => {
                          e.currentTarget.style.color = "#E8F0F8";
                          e.currentTarget.style.background = "rgba(5,81,147,0.3)";
                          e.currentTarget.style.boxShadow = "inset 0 0 0 1px rgba(212,175,55,0.18)";
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.color = "#A2C1DB";
                          e.currentTarget.style.background = "transparent";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      >
                        <span className="font-mono text-[9px] tracking-wider w-6 h-5 rounded flex items-center justify-center transition-all duration-300 shrink-0"
                          style={{ color: "#D4AF37", background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.15)" }}
                        >
                          {link.tag}
                        </span>
                        <span className="font-medium">{t(link.label)}</span>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {[{ label: "News", to: "/news" }, { label: "Contact", to: "/contact" }].map(({ label, to }) => (
            <Link key={to} to={to} className={linkCls(isActive(to))}>
              {t(label)}
              {isActive(to) && (
                <motion.span layoutId="nav-underline" className="absolute -bottom-1 left-0 right-0 h-px" style={{ background: BLUE }} />
              )}
            </Link>
          ))}
        </div>

        {/* CTA & Language Selector */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs tracking-[0.2em] uppercase font-bold btn-primary"
          >
            {t("Get in Touch")}
          </Link>
          <button
            onClick={() => setLanguage(language === "en" ? "ja" : "en")}
            className="px-3.5 py-2 text-xs font-bold tracking-widest rounded-sm border transition-all duration-300"
            style={{
              color: "#D4AF37",
              borderColor: "rgba(212,175,55,0.4)",
              background: "rgba(212,175,55,0.06)"
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "rgba(212,175,55,0.15)";
              e.currentTarget.style.borderColor = "#D4AF37";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "rgba(212,175,55,0.06)";
              e.currentTarget.style.borderColor = "rgba(212,175,55,0.4)";
            }}
          >
            {language === "en" ? "日本語" : "English"}
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(v => !v)}
          className="lg:hidden p-2 transition-colors"
          style={{ color: "#7AABCA" }}
          aria-label="Menu"
        >
          <AnimatePresence mode="wait">
            {mobileOpen ? (
              <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <IconX />
              </motion.span>
            ) : (
              <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <IconMenu />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden"
            style={{ background: "rgba(2,11,24,0.99)", borderTop: "1px solid rgba(212,175,55,0.2)" }}
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {[{ label: "Home", to: "/" }, { label: "About", to: "/about" }].map(({ label, to }) => (
                <Link key={to} to={to} className="text-xs tracking-[0.22em] uppercase font-semibold transition-colors"
                  style={{ color: isActive(to) ? "#D4AF37" : "#A2C1DB" }}>
                  {t(label)}
                </Link>
              ))}
              <button
                onClick={() => setMobileBusinessOpen(v => !v)}
                className="text-xs tracking-[0.22em] uppercase font-semibold flex items-center gap-2 text-left transition-colors"
                style={{ color: "#A2C1DB" }}
              >
                {t("Business")}
                <motion.span animate={{ rotate: mobileBusinessOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <IconChevronDown className="w-3 h-3" />
                </motion.span>
              </button>
              <AnimatePresence>
                {mobileBusinessOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pl-4 flex flex-col gap-3 overflow-hidden"
                    style={{ borderLeft: "2px solid rgba(212,175,55,0.25)" }}
                  >
                    {businessLinks.map((link, i) => (
                      <motion.div key={link.to} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                        <Link to={link.to} className="flex items-center gap-3 text-sm transition-colors" style={{ color: "#A2C1DB" }}>
                          <span className="font-mono text-[10px]" style={{ color: "rgba(212,175,55,0.5)" }}>{link.tag}</span>
                          {t(link.label)}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
              {[{ label: "News", to: "/news" }, { label: "Contact", to: "/contact" }].map(({ label, to }) => (
                <Link key={to} to={to} className="text-xs tracking-[0.22em] uppercase font-semibold transition-colors"
                  style={{ color: isActive(to) ? "#D4AF37" : "#A2C1DB" }}>
                  {t(label)}
                </Link>
              ))}
              <div className="flex items-center gap-4 mt-2">
                <Link to="/contact" className="flex-1 inline-flex items-center justify-center px-6 py-3 text-xs tracking-widest uppercase font-bold btn-primary">
                  {t("Get in Touch")}
                </Link>
                <button
                  onClick={() => setLanguage(language === "en" ? "ja" : "en")}
                  className="px-4 py-3 text-xs font-bold tracking-widest rounded-sm border transition-all duration-300 shrink-0"
                  style={{
                    color: "#D4AF37",
                    borderColor: "rgba(212,175,55,0.4)",
                    background: "rgba(212,175,55,0.06)"
                  }}
                >
                  {language === "en" ? "日本語" : "English"}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
