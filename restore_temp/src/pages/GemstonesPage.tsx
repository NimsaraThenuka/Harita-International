import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageHero from "../components/PageHero";
import Reveal from "../components/RevealSection";
import { IconArrowRight, IconGem, IconShield, IconAward } from "../components/Icons";

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

const gems = [
  { name: "Blue Sapphire",              desc: "Sri Lanka's signature gem. Ceylon sapphires, prized for their deep, clear blue, are loved by collectors worldwide. We offer loose stones and finished jewellery for every budget.", img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=700&h=500&fit=crop&auto=format" },
  { name: "Padparadscha Sapphire",      desc: "Named after the colour of the lotus flower, this rare sapphire blends pink and orange. One of Sri Lanka's greatest treasures — contact us for availability.",                   img: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=700&h=500&fit=crop&auto=format" },
  { name: "Coloured Stones & Jewellery",desc: "Rubies, cat's eyes, moonstones and more from Sri Lanka, plus jewellery that brings them to life. Custom orders for weddings and anniversaries are welcome.",                    img: "https://images.unsplash.com/photo-1603974372039-adc49044b6bd?w=700&h=500&fit=crop&auto=format" },
];

const trust = [
  { Icon: IconGem,    num: "01", title: "Direct Sourcing", desc: "Rough and loose stones purchased directly with trusted local partners." },
  { Icon: IconAward,  num: "02", title: "Certification",   desc: "Gem identification reports from Japanese laboratories available on request." },
  { Icon: IconShield, num: "03", title: "Fair Pricing",    desc: "Direct import means fewer middlemen and fair prices for the quality." },
];

const stock = [
  { id: "G-001", name: "Blue Sapphire (sample)",        weight: "1.52 ct", size: "7.2 × 5.8 × 3.9 mm", report: "Gem ID report included",        price: "¥385,000", status: "AVAILABLE", img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=400&fit=crop&auto=format" },
  { id: "G-002", name: "Padparadscha Sapphire (sample)", weight: "0.83 ct", size: "6.1 × 4.9 × 3.2 mm", report: "Gem ID report included",        price: "¥580,000", status: "ON HOLD",  img: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&h=400&fit=crop&auto=format" },
  { id: "G-003", name: "Royal Blue Moonstone (sample)",  weight: "2.10 ct", size: "9.0 × 7.1 × 4.4 mm", report: "No report (avail. on request)", price: "¥48,000",  status: "AVAILABLE", img: "https://images.unsplash.com/photo-1603974372039-adc49044b6bd?w=400&h=400&fit=crop&auto=format" },
];

export default function GemstonesPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
      style={{ background: "#030C1A", color: "#E8F0F8" }}
    >
      <PageHero
        tag="Gemstones & Jewellery"
        tagSub="The Island of Gems"
        title="Once-in-a-lifetime"
        titleAccent="brilliance from the Island of Gems."
        subtitle="Sri Lanka — 'Ratnadeepa', the Island of Gems — has over 2,000 years of gem history. Through our local network, HARITA directly imports coloured stones including blue sapphires and the rare padparadscha."
        img="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1600&h=700&fit=crop&auto=format"
        imgAlt="Ceylon gemstones"
        accentColor={BL}
      />

      {/* Collection */}
      <section className="py-28 max-w-7xl mx-auto px-6">
        <Reveal>
          <SL label="Collection" />
          <h2 className="font-black text-[#E8F0F8] mb-14"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontFamily: "Playfair Display, serif" }}>
            Our <span className="text-gradient-blue italic">Gemstones</span>
          </h2>
        </Reveal>

        <div className="space-y-5">
          {gems.map((gem, i) => (
            <motion.div
              key={gem.name}
              initial={{ opacity: 0, y: 60, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.68, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={`group grid grid-cols-1 md:grid-cols-2 overflow-hidden transition-all duration-400`}
                style={{ background: "#061525", border: `1px solid ${BL}15` }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${BL}40`; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = `${BL}15`; }}>
                <div className={`relative overflow-hidden h-72 md:h-auto ${i % 2 === 1 ? "md:order-2" : ""}`} style={{ background: "#030C1A" }}>
                  <img src={gem.img} alt={gem.name} className="w-full h-full object-cover img-zoom"
                    style={{ opacity: 0.78, mixBlendMode: "luminosity" }} />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to right, transparent, #061525 95%)" }} />
                  <div className="absolute inset-0" style={{ background: `${B}18` }} />
                  <span className="absolute bottom-4 left-5 font-serif italic text-7xl font-black leading-none select-none"
                    style={{ color: `${BL}10` }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className={`p-12 md:p-14 flex flex-col justify-center ${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="w-10 h-px mb-5" style={{ background: `linear-gradient(to right, ${BL}, ${BL}40)` }} />
                  <h3 className="text-xl font-bold mb-4 group-hover:text-[#4AAEF5] transition-colors duration-300"
                    style={{ color: "#E8F0F8", fontFamily: "Playfair Display, serif" }}>{gem.name}</h3>
                  <p className="leading-relaxed font-light mb-6" style={{ color: "#4A7A9E", fontFamily: "Outfit, sans-serif" }}>{gem.desc}</p>
                  <Link to="/contact" className="flex items-center gap-2 text-xs tracking-[0.3em] uppercase font-bold transition-colors"
                    style={{ color: BL }}
                    onMouseEnter={e => (e.currentTarget.style.color = BB)}
                    onMouseLeave={e => (e.currentTarget.style.color = BL)}>
                    Inquire <IconArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
                <div className="col-span-full h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  style={{ background: `linear-gradient(to right, ${B}, ${BB})` }} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose HARITA */}
      <section className="py-28" style={{ background: "#061525", borderTop: `1px solid ${B}10` }}>
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <SL label="Trust" />
            <h2 className="font-black text-[#E8F0F8] mb-14"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontFamily: "Playfair Display, serif" }}>
              Why Choose <span className="text-gradient-blue italic">HARITA</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {trust.map((t, i) => (
              <Reveal key={t.num} direction="scale" delay={i * 120}>
                <div className="p-10 text-center h-full group transition-all duration-300"
                  style={{ background: "#030C1A", border: `1px solid ${BL}12` }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${BL}45`; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = `${BL}12`; }}>
                  <div className="w-14 h-14 flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${B}14`, border: `1px solid ${BL}28` }}>
                    <t.Icon className="w-7 h-7" style={{ color: BB }} />
                  </div>
                  <h3 className="text-xl font-bold text-[#E8F0F8] mb-3 group-hover:text-[#4AAEF5] transition-colors">{t.title}</h3>
                  <p className="text-sm leading-relaxed font-light" style={{ color: "#4A7A9E", fontFamily: "Outfit, sans-serif" }}>{t.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="text-xs mt-8 text-center" style={{ color: "#4A7A9E", fontFamily: "Outfit, sans-serif" }}>
            * Wholesale, retail and custom orders are all welcome — tell us your budget and the stone you are looking for.
          </p>
        </div>
      </section>

      {/* Stock */}
      <section className="py-28 max-w-7xl mx-auto px-6">
        <Reveal>
          <SL label="Stock" />
          <h2 className="font-black text-[#E8F0F8] mb-4"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontFamily: "Playfair Display, serif" }}>
            Gems in <span className="text-gradient-blue italic">Stock</span>
          </h2>
          <p className="mb-14 max-w-2xl font-light" style={{ color: "#4A7A9E", fontFamily: "Outfit, sans-serif" }}>
            Our currently available stones are listed below. For in-person viewing or additional photos, use the inquiry button on each stone.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stock.map((gem, i) => (
            <Reveal key={gem.id} direction="scale" delay={i * 100}>
              <motion.div
                whileHover={{ y: -7, boxShadow: "0 20px 60px rgba(0,0,0,0.5)" }}
                transition={{ duration: 0.3 }}
                className="group overflow-hidden h-full"
                style={{ background: "#061525", border: `1px solid ${BL}14` }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${BL}40`; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = `${BL}14`; }}>
                <div className="relative overflow-hidden h-64" style={{ background: "#030C1A" }}>
                  <img src={gem.img} alt={gem.name} className="w-full h-full object-cover opacity-82 img-zoom group-hover:opacity-100" />
                  <div className="absolute inset-0" style={{ background: `${B}18` }} />
                  <span className={`absolute top-3 right-3 text-[10px] tracking-[0.2em] uppercase px-2.5 py-1 font-bold ${gem.status === "AVAILABLE" ? "bg-emerald-700 text-white" : "bg-amber-700 text-white"}`}>
                    {gem.status}
                  </span>
                </div>
                <div className="p-6">
                  <span className="text-xs" style={{ color: "#4A7A9E", fontFamily: "Space Mono, monospace" }}>{gem.id}</span>
                  <h3 className="text-[#E8F0F8] font-bold mt-1 mb-4 group-hover:text-[#4AAEF5] transition-colors">{gem.name}</h3>
                  <div className="space-y-2 text-sm mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>
                    {[["Weight", gem.weight], ["Size", gem.size], ["Report", gem.report]].map(([k, v]) => (
                      <div key={k} className="flex justify-between">
                        <span style={{ color: "#4A7A9E" }}>{k}</span>
                        <span className="text-right max-w-[60%]" style={{ color: "#94AFC8" }}>{v}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4" style={{ borderTop: `1px solid ${BL}12` }}>
                    <div className="font-bold text-lg" style={{ color: BL, fontFamily: "Space Mono, monospace" }}>{gem.price}</div>
                    <Link to="/contact"
                      className="text-xs tracking-widest uppercase px-4 py-2 font-bold transition-all duration-200"
                      style={{ border: `1px solid ${BL}40`, color: BL }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = BL; (e.currentTarget as HTMLElement).style.color = "#030C1A"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = BL; }}>
                      Inquire
                    </Link>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
        <p className="text-xs mt-6" style={{ color: "#4A7A9E", fontFamily: "Outfit, sans-serif" }}>
          * Prices include tax. Each stone is one of a kind and may become unavailable.
        </p>
      </section>
    </motion.main>
  );
}
