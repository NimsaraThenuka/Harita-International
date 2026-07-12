import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { IconChevronDown, IconMenu, IconX } from "./Icons";

const businessLinks = [
  { label: "Foods & Trading", to: "/foods", tag: "01" },
  { label: "Used Vehicles & Machinery", to: "/vehicles", tag: "02" },
  { label: "Software & AI Solutions", to: "/software", tag: "03" },
  { label: "Consulting", to: "/consulting", tag: "04" },
  { label: "Gemstones & Jewellery", to: "/gemstones", tag: "05" },
];

const BLUE = "#2E90E8";
const BLUE_DIM = "rgba(46,144,232,0.15)";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileBusinessOpen, setMobileBusinessOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

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
    `relative text-xs tracking-[0.22em] uppercase font-semibold transition-colors duration-200 ${active ? "text-[#4AAEF5]" : "text-[#7AABCA] hover:text-[#E8F0F8]"}`;

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
      style={scrolled ? {
        background: "rgba(3, 12, 26, 0.94)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(27,111,186,0.2)",
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
            style={{ height: "44px", filter: "brightness(1.1) contrast(1.05)" }}
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-9">
          {[{ label: "Home", to: "/" }, { label: "About", to: "/about" }].map(({ label, to }) => (
            <Link key={to} to={to} className={linkCls(isActive(to))}>
              {label}
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
              Business
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
                  className="absolute top-full left-0 mt-4 w-72 overflow-hidden"
                  style={{
                    background: "rgba(3,12,26,0.97)",
                    backdropFilter: "blur(24px)",
                    border: "1px solid rgba(27,111,186,0.22)",
                    boxShadow: "0 24px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(27,111,186,0.05) inset",
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
                        className="flex items-center gap-4 px-5 py-3.5 text-sm transition-all duration-150 border-b last:border-0 group"
                        style={{ color: "#7AABCA", borderColor: "rgba(27,111,186,0.08)" }}
                        onMouseEnter={e => {
                          e.currentTarget.style.color = "#4AAEF5";
                          e.currentTarget.style.background = "rgba(27,111,186,0.06)";
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.color = "#7AABCA";
                          e.currentTarget.style.background = "transparent";
                        }}
                      >
                        <span className="font-mono text-[10px] transition-colors w-5" style={{ color: "rgba(46,144,232,0.4)" }}>
                          {link.tag}
                        </span>
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {[{ label: "News", to: "/news" }, { label: "Contact", to: "/contact" }].map(({ label, to }) => (
            <Link key={to} to={to} className={linkCls(isActive(to))}>
              {label}
              {isActive(to) && (
                <motion.span layoutId="nav-underline" className="absolute -bottom-1 left-0 right-0 h-px" style={{ background: BLUE }} />
              )}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 text-xs tracking-[0.2em] uppercase font-bold btn-primary"
        >
          Get in Touch
        </Link>

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
            style={{ background: "rgba(3,12,26,0.98)", borderTop: "1px solid rgba(27,111,186,0.15)" }}
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {[{ label: "Home", to: "/" }, { label: "About", to: "/about" }].map(({ label, to }) => (
                <Link key={to} to={to} className="text-xs tracking-[0.22em] uppercase font-semibold transition-colors"
                  style={{ color: isActive(to) ? "#4AAEF5" : "#7AABCA" }}>
                  {label}
                </Link>
              ))}
              <button
                onClick={() => setMobileBusinessOpen(v => !v)}
                className="text-xs tracking-[0.22em] uppercase font-semibold flex items-center gap-2 text-left transition-colors"
                style={{ color: "#7AABCA" }}
              >
                Business
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
                    style={{ borderLeft: "2px solid rgba(27,111,186,0.25)" }}
                  >
                    {businessLinks.map((link, i) => (
                      <motion.div key={link.to} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                        <Link to={link.to} className="flex items-center gap-3 text-sm transition-colors" style={{ color: "#5A8BAA" }}>
                          <span className="font-mono text-[10px]" style={{ color: "rgba(46,144,232,0.45)" }}>{link.tag}</span>
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
              {[{ label: "News", to: "/news" }, { label: "Contact", to: "/contact" }].map(({ label, to }) => (
                <Link key={to} to={to} className="text-xs tracking-[0.22em] uppercase font-semibold transition-colors"
                  style={{ color: isActive(to) ? "#4AAEF5" : "#7AABCA" }}>
                  {label}
                </Link>
              ))}
              <Link to="/contact" className="mt-2 inline-flex items-center justify-center px-6 py-3 text-xs tracking-widest uppercase font-bold btn-primary">
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
