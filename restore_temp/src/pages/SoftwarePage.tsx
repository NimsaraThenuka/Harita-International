import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageHero from "../components/PageHero";
import Reveal from "../components/RevealSection";
import { IconArrowRight, IconCode, IconTrendingUp, IconZap } from "../components/Icons";

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
  {
    Icon: IconCode,
    title: "System Development & Maintenance",
    desc: "Contract development and maintenance of business systems, websites and e-commerce sites — from small improvements to full builds.",
    points: ["Business systems and web applications", "E-commerce site building and operation", "Maintenance and improvement of existing systems"],
  },
  {
    Icon: IconTrendingUp,
    title: "Digital Marketing",
    desc: "Hands-on support for marketplace operations, social media and advertising, based on the know-how of running our own stores.",
    points: ["Marketplace optimisation (Amazon, Rakuten, etc.)", "Social media marketing and content planning", "Analytics and improvement proposals"],
  },
  {
    Icon: IconZap,
    title: "AI-Driven Efficiency",
    desc: "We bring generative AI and other modern technologies into daily operations — automating document work, inquiries and data processing so small teams can do more.",
    points: ["Generative AI adoption consulting", "Workflow automation", "AI training and adoption support"],
  },
];

const steps = [
  { num: "01", title: "Hearing",            desc: "We listen carefully to your challenges. Initial consultation is free." },
  { num: "02", title: "Proposal & Quote",   desc: "We propose the best architecture and estimated cost." },
  { num: "03", title: "Development",        desc: "We develop while sharing progress with you." },
  { num: "04", title: "Delivery & Support", desc: "Continuous maintenance and improvement after delivery." },
];

export default function SoftwarePage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
      style={{ background: "#030C1A", color: "#E8F0F8" }}
    >
      <PageHero
        tag="Software & AI Solutions"
        tagSub="Technology"
        title="Practical IT from a"
        titleAccent="company that runs real businesses."
        subtitle="HARITA operates its own import, e-commerce, retail and export businesses. That is why we can propose systems and digital strategies that work in the field — not just on paper."
        img="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&h=700&fit=crop&auto=format"
        imgAlt="Software and technology"
        accentColor={BL}
      />

      {/* Services */}
      <section className="py-28 max-w-7xl mx-auto px-6">
        <Reveal>
          <SL label="Services" />
          <h2 className="font-black text-[#E8F0F8] mb-14"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontFamily: "Playfair Display, serif" }}>
            Our <span className="text-gradient-blue italic">Services</span>
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((svc, i) => (
            <Reveal key={svc.title} direction="scale" delay={i * 100}>
              <div className="p-10 flex flex-col gap-5 h-full group transition-all duration-300"
                style={{ background: "#061525", border: `1px solid ${BL}15` }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${BL}45`; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = `${BL}15`; }}>
                <div className="w-12 h-12 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${B}14`, border: `1px solid ${BL}28` }}>
                  <svc.Icon className="w-6 h-6" style={{ color: BB }} />
                </div>
                <h3 className="text-xl font-bold text-[#E8F0F8] group-hover:text-[#4AAEF5] transition-colors">{svc.title}</h3>
                <p className="leading-relaxed text-sm font-light" style={{ color: "#4A7A9E", fontFamily: "Outfit, sans-serif" }}>{svc.desc}</p>
                <ul className="space-y-2.5 mt-auto pt-5" style={{ borderTop: `1px solid ${BL}12` }}>
                  {svc.points.map(pt => (
                    <li key={pt} className="flex items-start gap-2.5 text-sm" style={{ color: "#4A7A9E", fontFamily: "Outfit, sans-serif" }}>
                      <span className="mt-0.5 font-bold shrink-0" style={{ color: BL }}>—</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* How We Work */}
      <section className="py-28" style={{ background: "#061525", borderTop: `1px solid ${B}10` }}>
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <SL label="Flow" />
            <h2 className="font-black text-[#E8F0F8] mb-14"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontFamily: "Playfair Display, serif" }}>
              How We <span className="text-gradient-blue italic">Work</span>
            </h2>
          </Reveal>
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px pointer-events-none"
              style={{ background: `${BL}18` }} />
            {steps.map((step, i) => (
              <Reveal key={step.num} direction="scale" delay={i * 100}>
                <div className="p-8" style={{ background: "#030C1A", border: `1px solid ${BL}12` }}>
                  <motion.div
                    whileHover={{ scale: 1.05, boxShadow: `0 0 20px ${B}20` }}
                    transition={{ duration: 0.2 }}
                    className="w-14 h-14 flex items-center justify-center mb-6"
                    style={{ background: "#030C1A", border: `2px solid ${BL}` }}>
                    <span className="font-bold" style={{ color: BL, fontFamily: "Space Mono, monospace" }}>{step.num}</span>
                  </motion.div>
                  <h3 className="text-[#E8F0F8] font-bold mb-3">{step.title}</h3>
                  <p className="text-sm leading-relaxed font-light" style={{ color: "#4A7A9E", fontFamily: "Outfit, sans-serif" }}>{step.desc}</p>
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
            Ready to start your <span className="text-gradient-blue italic">digital transformation?</span>
          </h2>
          <p className="mb-10 font-light" style={{ color: "#4A7A9E", fontFamily: "Outfit, sans-serif" }}>
            Initial consultation is free. Let's discuss your challenges.
          </p>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link to="/contact" className="group inline-flex items-center gap-3 px-10 py-4 text-sm tracking-widest uppercase font-bold btn-primary">
              Free Consultation <IconArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </Reveal>
      </section>
    </motion.main>
  );
}
