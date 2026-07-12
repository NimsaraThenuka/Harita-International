import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Reveal from "../components/RevealSection";
import { IconArrowRight, IconGlobe, IconShield, IconAward } from "../components/Icons";

const BL = "#2E90E8";
const BB = "#4AAEF5";
const B  = "#1B6FBA";

function SL({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 mb-4">
      <div className="w-10 h-px" style={{ background: `linear-gradient(to right, ${BL}, ${BL}50)` }} />
      <span className="text-[11px] tracking-[0.35em] uppercase font-bold" style={{ color: BL, fontFamily: "Space Mono, monospace" }}>{label}</span>
    </div>
  );
}

const profileRows = [
  { label: "Company", value: "HARITA INTERNATIONAL CO., LTD." },
  { label: "CEO", value: "Ranghe Bandara" },
  { label: "Established", value: "To be announced" },
  { label: "Address", value: "1723 Ushioku, Enzan, Koshu-shi, Yamanashi 404-0034, Japan" },
  { label: "Contact", value: "TEL: +81-50-5359-0767 (9:00–17:00 JST)\nFAX: +81-55-213-5957\nMail: info@haritainternational.com" },
  { label: "Business", value: "1. Import, wholesale and retail of foods and general goods\n2. Trading and export of used vehicles and heavy machinery\n3. Software / system development and maintenance, digital marketing, AI solutions\n4. Consulting for companies and individuals, branding\n5. Import and sale of gemstones and jewellery (wholesale / retail)" },
  { label: "Licenses", value: "Secondhand Dealer License\nFood importer notification under the Food Sanitation Act" },
];

const stats = [
  { val: "5",    label: "Business Fields",    Icon: IconGlobe,  color: BB },
  { val: "10+",  label: "Trading Countries",  Icon: IconAward,  color: BL },
  { val: "100%", label: "Quality Commitment", Icon: IconShield, color: BB },
];

export default function AboutPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
      style={{ background: "#030C1A", color: "#E8F0F8" }}
    >
      {/* ── Hero ─────────────────────────────────── */}
      <div className="relative pt-24 pb-24 overflow-hidden min-h-[52vh] flex items-end">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=800&fit=crop&auto=format"
            alt="Sri Lanka landscape" className="w-full h-full object-cover opacity-22 scale-105" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(3,12,26,0.9) 0%, rgba(3,12,26,0.5) 45%, #030C1A 100%)" }} />
          <div className="absolute inset-0 grid-pattern opacity-50" />
        </div>
        <motion.div className="absolute top-1/3 right-[10%] w-64 h-64 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(27,111,186,0.08) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute top-[20%] right-[20%] w-24 h-24 border pointer-events-none"
          style={{ borderColor: "rgba(46,144,232,0.12)", rotate: 30 }}
          animate={{ rotate: [30, 55, 30] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} />
        <div className="absolute left-0 top-0 bottom-0 w-[3px]"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(46,144,232,0.8), transparent)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pb-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <SL label="About Us" />
            <h1 className="font-black text-[#E8F0F8] mt-3 leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontFamily: "Playfair Display, serif" }}>
              About<br /><span className="text-gradient-blue italic">HARITA</span>
            </h1>
          </motion.div>
        </div>
      </div>

      {/* ── Philosophy ──────────────────────────── */}
      <section className="py-28 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <Reveal direction="left">
            <SL label="Philosophy" />
            <h2 className="font-black text-[#E8F0F8] mb-8 leading-[1.1]"
              style={{ fontSize: "clamp(1.8rem, 3.8vw, 2.8rem)", fontFamily: "Playfair Display, serif" }}>
              Connecting People<br />
              <span className="text-gradient-blue italic">with HARITA</span>
            </h2>
            <p className="text-lg leading-relaxed mb-5 font-light" style={{ color: "#4A7A9E", fontFamily: "Outfit, sans-serif" }}>
              Under this philosophy, our mission is to deliver products and services of the highest quality to as many people as possible.
            </p>
            <p className="leading-relaxed font-light" style={{ color: "#4A7A9E", fontFamily: "Outfit, sans-serif" }}>
              Through HARITA, people feel energised, healed, inspired and encouraged. We believe such products and services are needed now more than ever, and we continue to refine our work and contribute to society.
            </p>
          </Reveal>

          <Reveal direction="right">
            <div className="relative">
              <div className="relative overflow-hidden rounded-sm">
                <img src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=700&h=520&fit=crop&auto=format"
                  alt="Sri Lankan culture" className="w-full h-80 object-cover img-zoom" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(3,12,26,0.4) 0%, transparent 60%)" }} />
                <div className="absolute inset-0" style={{ background: `${B}10` }} />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24" style={{ border: `1px solid ${BL}18` }} />
              <div className="absolute -top-4 -right-4 w-24 h-24" style={{ border: `1px solid ${BL}18` }} />
              <div className="absolute bottom-4 right-4 text-[10px] tracking-[0.3em] uppercase px-3 py-1.5"
                style={{ color: BB, background: "rgba(3,12,26,0.85)", border: `1px solid ${BL}25`, fontFamily: "Space Mono, monospace" }}>
                Sri Lanka
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CEO Message ─────────────────────────── */}
      <section className="py-28 relative" style={{ background: "#061525" }}>
        <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Reveal>
            <SL label="Message" />
            <h2 className="font-black text-[#E8F0F8] mb-14"
              style={{ fontSize: "clamp(1.8rem, 3.8vw, 2.8rem)", fontFamily: "Playfair Display, serif" }}>
              Message from the <span className="text-gradient-blue italic">CEO</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            <Reveal direction="left" className="md:col-span-1">
              <div className="relative overflow-hidden" style={{ background: "#030C1A" }}>
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=520&fit=crop&auto=format"
                  alt="CEO Ranghe Bandara" className="w-full h-80 object-cover img-zoom" style={{ opacity: 0.82 }} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(3,12,26,0.7) 0%, transparent 60%)" }} />
                <div className="absolute inset-0" style={{ background: `${B}15` }} />
              </div>
              <div className="mt-4 p-4" style={{ borderLeft: `2px solid ${BL}` }}>
                <div className="text-[#E8F0F8] font-bold">Ranghe Bandara</div>
                <div className="text-[10px] tracking-[0.3em] uppercase mt-1" style={{ color: BL, fontFamily: "Space Mono, monospace" }}>
                  CEO, HARITA International
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" className="md:col-span-2 space-y-6">
              <div className="w-10 h-px" style={{ background: `linear-gradient(to right, ${BL}, ${BL}40)` }} />
              <p className="text-[#E8F0F8] text-2xl leading-relaxed italic" style={{ fontFamily: "Playfair Display, serif" }}>
                "HARITA was born from a desire to build a bridge between my home country, Sri Lanka, and Japan."
              </p>
              <p className="text-lg leading-relaxed font-light" style={{ color: "#4A7A9E", fontFamily: "Outfit, sans-serif" }}>
                The blessings of nature such as Ceylon cinnamon, beautiful gemstones, and encounters between people — delivering the authentic across borders is our work.
              </p>
              <p className="leading-relaxed font-light" style={{ color: "#4A7A9E", fontFamily: "Outfit, sans-serif" }}>
                What began as food importing has grown into vehicle export, software development and consulting. Across every field, our founding philosophy remains the same: connecting people with people. With quality and trust first, we will keep contributing to your life and business.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────── */}
      <section style={{ background: "#030C1A" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-4 py-8">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} direction="scale" delay={i * 120} className="p-10 text-center" as="div"
                style={{ background: "#061525", border: `1px solid ${B}15` }}>
                <div className="flex justify-center mb-5" style={{ color: stat.color }}>
                  <stat.Icon className="w-7 h-7" />
                </div>
                <div className="text-4xl md:text-6xl font-black mb-3 font-serif" style={{ color: stat.color }}>
                  {stat.val}
                </div>
                <div className="text-[11px] tracking-[0.25em] uppercase font-semibold" style={{ color: "#4A7A9E", fontFamily: "Outfit, sans-serif" }}>
                  {stat.label}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Company Profile ──────────────────────── */}
      <section className="py-28" style={{ background: "#061525" }}>
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <SL label="Company Profile" />
            <h2 className="font-black text-[#E8F0F8] mb-14"
              style={{ fontSize: "clamp(1.8rem, 3.8vw, 2.8rem)", fontFamily: "Playfair Display, serif" }}>
              Company <span className="text-gradient-blue italic">Profile</span>
            </h2>
          </Reveal>
          <Reveal>
            <div style={{ border: `1px solid ${B}15` }} className="overflow-hidden">
              {profileRows.map((row, i) => (
                <div key={row.label} className="grid grid-cols-1 md:grid-cols-4 transition-colors duration-200"
                  style={{ borderBottom: i < profileRows.length - 1 ? `1px solid ${B}10` : "none" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = `${B}04`; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}>
                  <div className="p-6 md:border-r" style={{ background: "#030C1A", borderColor: `${B}10` }}>
                    <span className="text-[11px] tracking-[0.28em] uppercase font-bold" style={{ color: BL, fontFamily: "Space Mono, monospace" }}>
                      {row.label}
                    </span>
                  </div>
                  <div className="p-6 md:col-span-3 text-sm leading-relaxed whitespace-pre-line font-light"
                    style={{ color: "#4A7A9E", fontFamily: "Outfit, sans-serif" }}>
                    {row.value}
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
            Ready to Connect
          </p>
          <h2 className="font-black text-[#E8F0F8] mb-4"
            style={{ fontSize: "clamp(1.8rem, 3.8vw, 2.8rem)", fontFamily: "Playfair Display, serif" }}>
            Let's talk about <span className="text-gradient-blue italic">your needs.</span>
          </h2>
          <p className="mb-10 font-light text-lg" style={{ color: "#4A7A9E", fontFamily: "Outfit, sans-serif" }}>
            Our specialists are ready to help in English or Japanese.
          </p>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link to="/contact" className="group inline-flex items-center gap-3 px-10 py-4 text-sm tracking-widest uppercase font-bold btn-primary">
              Contact Us <IconArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </Reveal>
      </section>
    </motion.main>
  );
}
