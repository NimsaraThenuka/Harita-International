import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageHero from "../components/PageHero";
import Reveal from "../components/RevealSection";
import { IconArrowRight, IconShop, IconStar, IconBox, IconBuilding } from "../components/Icons";

const B  = "#1B6FBA";
const BL = "#2E90E8";
const BB = "#4AAEF5";

function SL({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 mb-4">
      <div className="w-10 h-px" style={{ background: `linear-gradient(to right, ${BL}, ${BL}50)` }} />
      <span className="text-[11px] tracking-[0.35em] uppercase font-bold" style={{ color: BL, fontFamily: "Space Mono, monospace" }}>{label}</span>
    </div>
  );
}

const products = [
  { tag: "Signature", name: "Ceylon Cinnamon", desc: "The 'queen of spices' with thousands of years of history. True cinnamon from Sri Lanka is prized for its refined, delicate aroma. Available in sticks and powder, for home and professional use.", img: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=700&h=500&fit=crop&auto=format" },
  { tag: "Aromatic", name: "Cloves & Curry Spices", desc: "From aromatic cloves to the authentic spices used in Sri Lankan curry, we import directly from trusted local partners and deliver them at the peak of their fragrance.", img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=700&h=500&fit=crop&auto=format" },
  { tag: "Wellness", name: "Cinnamon Herbal Tea", desc: "A caffeine-free herbal tea with the gentle, sweet aroma of Ceylon cinnamon — perfect from breakfast to bedtime.", img: "https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?w=700&h=500&fit=crop&auto=format" },
  { tag: "Gift", name: "Gift Sets & General Goods", desc: "Gift sets combining favourites such as cinnamon and cloves, plus selected general goods from Sri Lanka — ideal for gifting and for enriching your store's line-up.", img: "https://images.unsplash.com/photo-1563822249366-3efb23b8e0c9?w=700&h=500&fit=crop&auto=format" },
];

const steps = [
  { num: "01", title: "Local Sourcing", desc: "Procured directly from trusted producers and partners in Sri Lanka." },
  { num: "02", title: "Quality Check", desc: "Only products that meet our aroma and quality standards are imported." },
  { num: "03", title: "Compliant Import", desc: "Imported and inspected in accordance with Japan's Food Sanitation Act." },
  { num: "04", title: "Delivery", desc: "Delivered to customers through e-commerce, wholesale and retail channels." },
];

const stores = [
  { name: "HARITA Online", label: "Official Online Shop", Icon: IconShop },
  { name: "Rakuten", label: "Rakuten Ichiba", Icon: IconStar },
  { name: "Amazon", label: "Amazon Store", Icon: IconBox },
  { name: "Department Store", label: "Department Store Online", Icon: IconBuilding },
];

export default function FoodsPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
      style={{ background: "#030C1A", color: "#E8F0F8" }}
    >
      <PageHero
        tag="Foods & Trading"
        tagSub="Organic Life with HARITA"
        title="From Sri Lanka's"
        titleAccent="Nature to Your Table"
        subtitle="HARITA imports foods nurtured by Sri Lanka's rich nature, directly from the source. Centred on authentic Ceylon cinnamon, our range includes cloves, curry spices and cinnamon herbal tea."
        img="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1600&h=700&fit=crop&auto=format"
        imgAlt="Ceylon spices"
        accentColor={BL}
      />

      {/* Products — popup one by one on scroll */}
      <section className="py-28 max-w-7xl mx-auto px-6">
        <Reveal>
          <SL label="Products" />
          <h2 className="font-black text-[#E8F0F8] mb-14" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontFamily: "Playfair Display, serif" }}>
            Our <span className="text-gradient-blue italic">Products</span>
          </h2>
        </Reveal>

        <div className="space-y-5">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 70, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.7, delay: i * 0.13, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className={`group grid grid-cols-1 md:grid-cols-2 overflow-hidden transition-all duration-400`}
                style={{ background: "#061525", border: `1px solid ${BL}15` }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${BL}40`; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = `${BL}15`; }}
              >
                <div className={`relative overflow-hidden h-64 md:h-auto ${i % 2 === 1 ? "md:order-2" : ""}`}
                  style={{ background: "#030C1A" }}>
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover img-zoom"
                    style={{ opacity: 0.7, mixBlendMode: "luminosity" }} />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to right, transparent, #061525 95%)" }} />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${B}22 0%, transparent 60%)` }} />
                  <span className="absolute top-4 left-4 text-[10px] tracking-[0.3em] uppercase px-3 py-1.5 backdrop-blur-md"
                    style={{ color: BB, background: "rgba(3,12,26,0.75)", border: `1px solid ${BL}28`, fontFamily: "Space Mono, monospace" }}>
                    {p.tag}
                  </span>
                  <span className="absolute bottom-4 left-5 font-serif italic text-7xl font-black leading-none select-none"
                    style={{ color: `${BL}10` }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className={`p-10 md:p-14 flex flex-col justify-center ${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="w-10 h-px mb-5" style={{ background: `linear-gradient(to right, ${BL}, ${BL}40)` }} />
                  <h3 className="text-xl font-bold mb-4 group-hover:text-[#4AAEF5] transition-colors duration-300"
                    style={{ color: "#E8F0F8", fontFamily: "Playfair Display, serif" }}>{p.name}</h3>
                  <p className="leading-relaxed font-light mb-6" style={{ color: "#4A7A9E", fontFamily: "Outfit, sans-serif" }}>{p.desc}</p>
                  <Link to="/contact" className="flex items-center gap-2 text-xs tracking-[0.3em] uppercase font-bold transition-colors"
                    style={{ color: BL }}
                    onMouseEnter={e => (e.currentTarget.style.color = BB)}
                    onMouseLeave={e => (e.currentTarget.style.color = BL)}
                  >
                    Inquire <IconArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
                {/* Bottom bar */}
                <div className="col-span-full h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  style={{ background: `linear-gradient(to right, ${B}, ${BB})` }} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quality Process */}
      <section className="py-28" style={{ background: "#061525", borderTop: `1px solid ${BL}10` }}>
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <SL label="Quality" />
            <h2 className="font-black text-[#E8F0F8] mb-14" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontFamily: "Playfair Display, serif" }}>
              Quality & Import <span className="text-gradient-blue italic">Process</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((step, i) => (
              <Reveal key={step.num} direction="scale" delay={i * 100}>
                <div className="p-8 h-full group transition-all duration-300"
                  style={{ background: "#030C1A", border: `1px solid ${BL}15` }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${BL}40`; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = `${BL}15`; }}>
                  <span className="font-black text-6xl font-mono block mb-5 leading-none" style={{ color: `${BL}15`, fontFamily: "Space Mono, monospace" }}>{step.num}</span>
                  <h3 className="text-lg font-bold text-[#E8F0F8] mb-3 group-hover:text-[#4AAEF5] transition-colors">{step.title}</h3>
                  <p className="text-sm leading-relaxed font-light" style={{ color: "#4A7A9E", fontFamily: "Outfit, sans-serif" }}>{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Where to Buy */}
      <section className="py-28 max-w-7xl mx-auto px-6">
        <Reveal>
          <SL label="Online Store" />
          <h2 className="font-black text-[#E8F0F8] mb-12" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontFamily: "Playfair Display, serif" }}>
            Where to <span className="text-gradient-blue italic">Buy</span>
          </h2>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stores.map(({ name, label, Icon }, i) => (
            <Reveal key={name} direction="scale" delay={i * 80}>
              <motion.a
                href="#"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25 }}
                className="group flex flex-col items-center justify-center gap-4 p-8 text-center transition-all duration-300"
                style={{ background: "#061525", border: `1px solid ${BL}15` }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${BL}50`; (e.currentTarget as HTMLElement).style.background = `${B}10`; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = `${BL}15`; (e.currentTarget as HTMLElement).style.background = "#061525"; }}
              >
                <div className="w-12 h-12 flex items-center justify-center transition-all duration-300"
                  style={{ background: "rgba(27,111,186,0.06)", border: `1px solid ${BL}20` }}>
                  <Icon className="w-6 h-6" style={{ color: `${BL}70` }} />
                </div>
                <div>
                  <div className="text-[11px] mb-1.5 uppercase tracking-widest" style={{ color: "#4A7A9E", fontFamily: "Outfit, sans-serif" }}>{label}</div>
                  <div className="font-semibold group-hover:text-[#4AAEF5] transition-colors font-serif" style={{ color: "#E8F0F8" }}>{name}</div>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="py-14 text-center" style={{ borderTop: `1px solid ${BL}08` }}>
        <Reveal>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link to="/contact" className="group inline-flex items-center gap-3 px-10 py-4 text-sm tracking-widest uppercase font-bold btn-primary">
              Make an Inquiry <IconArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </Reveal>
      </div>
    </motion.main>
  );
}
