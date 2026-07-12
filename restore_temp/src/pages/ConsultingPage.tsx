import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageHero from "../components/PageHero";
import Reveal from "../components/RevealSection";
import { IconArrowRight, IconTrendingUp, IconStar, IconGlobe, IconUsers } from "../components/Icons";

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

const services = [
  { Icon: IconTrendingUp, cat: "BUSINESS", title: "Management Consulting",     desc: "Business planning, sales channel development and profitability improvement.", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=350&fit=crop&auto=format" },
  { Icon: IconStar,       cat: "BRANDING", title: "Branding",                  desc: "From brand concept design to product development and design direction.",       img: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=500&h=350&fit=crop&auto=format" },
  { Icon: IconGlobe,      cat: "GLOBAL",   title: "Trade & Global Expansion",  desc: "Trading practice and expansion support using our Sri Lanka / South Asia network.", img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=350&fit=crop&auto=format" },
  { Icon: IconUsers,      cat: "PERSONAL", title: "Personal Consulting",        desc: "Support for start-ups, side businesses and opening online stores.",             img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=500&h=350&fit=crop&auto=format" },
];

const steps = [
  { num: "01", title: "Inquiry",       desc: "Send us your topic via the contact form." },
  { num: "02", title: "First Hearing", desc: "Online or in person, we discuss your goals and current situation." },
  { num: "03", title: "Proposal",      desc: "We propose the best format — one-off consultation or ongoing advisory." },
];

export default function ConsultingPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
      style={{ background: "#030C1A", color: "#E8F0F8" }}
    >
      <PageHero
        tag="Consulting"
        tagSub="Business Advisory"
        title="Guidance built on"
        titleAccent="real business experience."
        subtitle="Import, e-commerce, retail, export and software — because we run five businesses ourselves, our consulting is rooted in practice."
        img="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&h=700&fit=crop&auto=format"
        imgAlt="Business consulting"
        accentColor={BL}
      />

      {/* Service Menu */}
      <section className="py-28 max-w-7xl mx-auto px-6">
        <Reveal>
          <SL label="Menu" />
          <h2 className="font-black text-[#E8F0F8] mb-14"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontFamily: "Playfair Display, serif" }}>
            Service <span className="text-gradient-blue italic">Menu</span>
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((svc, i) => (
            <Reveal key={svc.title} direction={i % 2 === 0 ? "left" : "right"}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.28 }}
                className="group flex overflow-hidden transition-all duration-300"
                style={{ background: "#061525", border: `1px solid ${BL}15` }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${BL}45`; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = `${BL}15`; }}
              >
                <div className="w-44 shrink-0 overflow-hidden relative" style={{ background: "#030C1A" }}>
                  <img src={svc.img} alt={svc.title} className="w-full h-full object-cover opacity-58 img-zoom group-hover:opacity-85"
                    style={{ mixBlendMode: "luminosity" }} />
                  <div className="absolute inset-0" style={{ background: `${B}18` }} />
                </div>
                <div className="p-7 flex flex-col justify-center gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center"
                      style={{ background: `${B}14`, border: `1px solid ${BL}25` }}>
                      <svc.Icon className="w-4 h-4" style={{ color: BB }} />
                    </div>
                    <span className="text-[10px] tracking-[0.3em] uppercase font-bold" style={{ color: BL, fontFamily: "Space Mono, monospace" }}>{svc.cat}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#E8F0F8] group-hover:text-[#4AAEF5] transition-colors">{svc.title}</h3>
                  <p className="text-sm leading-relaxed font-light" style={{ color: "#4A7A9E", fontFamily: "Outfit, sans-serif" }}>{svc.desc}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* How to Start */}
      <section className="py-28" style={{ background: "#061525", borderTop: `1px solid ${B}10` }}>
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <SL label="Flow" />
            <h2 className="font-black text-[#E8F0F8] mb-14"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontFamily: "Playfair Display, serif" }}>
              How to <span className="text-gradient-blue italic">Start</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {steps.map((step, i) => (
              <Reveal key={step.num} direction="scale" delay={i * 120}>
                <div className="p-10 h-full group transition-all duration-300"
                  style={{ background: "#030C1A", border: `1px solid ${BL}12` }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${BL}45`; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = `${BL}12`; }}>
                  <span className="font-bold text-6xl block mb-6 leading-none" style={{ color: `${BL}18`, fontFamily: "Space Mono, monospace" }}>{step.num}</span>
                  <h3 className="text-xl font-bold text-[#E8F0F8] mb-3 group-hover:text-[#4AAEF5] transition-colors">{step.title}</h3>
                  <p className="leading-relaxed font-light" style={{ color: "#4A7A9E", fontFamily: "Outfit, sans-serif" }}>{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 text-center max-w-4xl mx-auto px-6">
        <Reveal>
          <h2 className="font-black text-[#E8F0F8] mb-4"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)", fontFamily: "Playfair Display, serif" }}>
            Start your <span className="text-gradient-blue italic">journey today</span>
          </h2>
          <p className="mb-10 font-light" style={{ color: "#4A7A9E", fontFamily: "Outfit, sans-serif" }}>
            Support for everyone from companies with management challenges to individuals starting a new venture.
          </p>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link to="/contact" className="group inline-flex items-center gap-3 px-10 py-4 text-sm tracking-widest uppercase font-bold btn-primary">
              Book a Consultation <IconArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </Reveal>
      </section>
    </motion.main>
  );
}
