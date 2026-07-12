import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageHero from "../components/PageHero";
import Reveal from "../components/RevealSection";
import { IconArrowRight, IconTruck, IconGlobe } from "../components/Icons";

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

const vehicles = [
  { cat: "CAR",      name: "Passenger Cars",   desc: "Sedans, SUVs and kei cars — for both domestic sale and export.",                       img: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=600&h=400&fit=crop&auto=format" },
  { cat: "TRUCK",    name: "Trucks & Vans",    desc: "Commercial trucks, vans and dump trucks, offered after condition checks.",              img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&h=400&fit=crop&auto=format" },
  { cat: "MACHINERY",name: "Heavy Machinery",  desc: "Excavators, wheel loaders and other construction machinery in high overseas demand.",    img: "https://images.unsplash.com/photo-1590534247854-e97d5e3feef6?w=600&h=400&fit=crop&auto=format" },
  { cat: "PARTS",    name: "Parts & More",     desc: "Used parts and related equipment are also available on request.",                        img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=400&fit=crop&auto=format" },
];

const steps = [
  { num: "01", title: "Inquiry",              desc: "Tell us the model, conditions and destination you are looking for." },
  { num: "02", title: "Proposal & Quote",     desc: "We propose the best vehicles from auctions and stock, with a quotation." },
  { num: "03", title: "Maintenance & Docs",   desc: "Inspection, deregistration for export and shipping documents." },
  { num: "04", title: "Shipping & Delivery",  desc: "After shipment we send the B/L and related documents to complete delivery." },
];

const stock = [
  { id: "V-001", name: "Toyota Hiace Van DX (sample)",        year: "2015", mileage: "118,000 km",  spec: "Diesel / AT / 2WD",     price: "¥1,850,000", status: "ON HOLD",  img: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=500&h=350&fit=crop&auto=format" },
  { id: "V-002", name: "Komatsu Mini Excavator PC30 (sample)", year: "2012", mileage: "2,340 h",     spec: "2,340 hours / serviced", price: "¥2,400,000", status: "AVAILABLE",img: "https://images.unsplash.com/photo-1590534247854-e97d5e3feef6?w=500&h=350&fit=crop&auto=format" },
  { id: "V-003", name: "Suzuki Every JOIN (sample)",           year: "2018", mileage: "64,000 km",   spec: "Petrol / AT / High roof", price: "¥680,000",  status: "AVAILABLE",img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=500&h=350&fit=crop&auto=format" },
];

export default function VehiclesPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
      style={{ background: "#030C1A", color: "#E8F0F8" }}
    >
      <PageHero
        tag="Used Vehicles & Machinery"
        tagSub="Automobile"
        title="Honest trading,"
        titleAccent="one vehicle at a time."
        subtitle="We trade and export used vehicles — from passenger cars, trucks and vans to heavy construction machinery. Negotiations available in English with a strong track record with international buyers."
        img="https://images.unsplash.com/photo-1549924231-f129b911e442?w=1600&h=700&fit=crop&auto=format"
        imgAlt="Vehicles for export"
        accentColor={BL}
      />

      {/* What We Handle */}
      <section className="py-28 max-w-7xl mx-auto px-6">
        <Reveal>
          <SL label="Line Up" />
          <h2 className="font-black text-[#E8F0F8] mb-14"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontFamily: "Playfair Display, serif" }}>
            What We <span className="text-gradient-blue italic">Handle</span>
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {vehicles.map((v, i) => (
            <Reveal key={v.name} direction="scale" delay={i * 90}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group overflow-hidden border-blue-glow"
                style={{ background: "#061525" }}
              >
                <div className="relative overflow-hidden h-44" style={{ background: "#030C1A" }}>
                  <img src={v.img} alt={v.name} className="w-full h-full object-cover opacity-62 img-zoom group-hover:opacity-88"
                    style={{ mixBlendMode: "luminosity" }} />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #061525 0%, transparent 60%)" }} />
                  <div className="absolute inset-0" style={{ background: `${B}18` }} />
                  <span className="absolute top-3 left-3 text-[10px] tracking-[0.25em] uppercase px-2.5 py-1 backdrop-blur-md"
                    style={{ color: BB, background: "rgba(3,12,26,0.8)", border: `1px solid ${BL}30`, fontFamily: "Space Mono, monospace" }}>
                    {v.cat}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-[#E8F0F8] font-bold mb-2 group-hover:text-[#4AAEF5] transition-colors">{v.name}</h3>
                  <p className="text-sm leading-relaxed font-light" style={{ color: "#4A7A9E", fontFamily: "Outfit, sans-serif" }}>{v.desc}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Export Process */}
      <section className="py-28" style={{ background: "#061525", borderTop: `1px solid ${B}10` }}>
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <SL label="Export Flow" />
            <h2 className="font-black text-[#E8F0F8] mb-14"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontFamily: "Playfair Display, serif" }}>
              Export <span className="text-gradient-blue italic">Process</span>
            </h2>
          </Reveal>
          <div className="relative">
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px pointer-events-none"
              style={{ background: `${BL}18` }} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, i) => (
                <Reveal key={step.num} direction="scale" delay={i * 100} className="text-center">
                  <motion.div whileHover={{ scale: 1.04 }} transition={{ duration: 0.2 }}
                    className="w-16 h-16 flex items-center justify-center mx-auto mb-5"
                    style={{ background: "#030C1A", border: `2px solid ${BL}`, boxShadow: `0 0 20px ${B}20` }}>
                    <span className="font-bold" style={{ color: BL, fontFamily: "Space Mono, monospace" }}>{step.num}</span>
                  </motion.div>
                  <h3 className="text-[#E8F0F8] font-bold mb-2">{step.title}</h3>
                  <p className="text-sm leading-relaxed font-light" style={{ color: "#4A7A9E", fontFamily: "Outfit, sans-serif" }}>{step.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stock */}
      <section className="py-28 max-w-7xl mx-auto px-6">
        <Reveal>
          <SL label="Stock" />
          <h2 className="font-black text-[#E8F0F8] mb-4"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontFamily: "Playfair Display, serif" }}>
            Vehicles in <span className="text-gradient-blue italic">Stock</span>
          </h2>
          <p className="mb-14 max-w-2xl font-light" style={{ color: "#4A7A9E", fontFamily: "Outfit, sans-serif" }}>
            Our current stock is listed below with prices, updated regularly. We support both export and domestic sales.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {stock.map((item, i) => (
            <Reveal key={item.id} direction="scale" delay={i * 100}>
              <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3 }}
                className="group overflow-hidden h-full"
                style={{ background: "#061525", border: `1px solid ${BL}14` }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${BL}40`; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = `${BL}14`; }}>
                <div className="relative overflow-hidden h-48" style={{ background: "#030C1A" }}>
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover opacity-62 img-zoom group-hover:opacity-88"
                    style={{ mixBlendMode: "luminosity" }} />
                  <div className="absolute inset-0" style={{ background: `${B}18` }} />
                  <span className={`absolute top-3 right-3 text-[10px] tracking-[0.2em] uppercase px-2.5 py-1 font-bold ${item.status === "AVAILABLE" ? "bg-emerald-700 text-white" : "bg-amber-700 text-white"}`}>
                    {item.status}
                  </span>
                </div>
                <div className="p-6">
                  <span className="text-xs" style={{ color: "#4A7A9E", fontFamily: "Space Mono, monospace" }}>{item.id}</span>
                  <h3 className="text-[#E8F0F8] font-bold mt-1 mb-4 group-hover:text-[#4AAEF5] transition-colors">{item.name}</h3>
                  <div className="space-y-2 text-sm mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>
                    {[["Year", item.year], ["Mileage", item.mileage], ["Spec", item.spec]].map(([k, v]) => (
                      <div key={k} className="flex justify-between">
                        <span style={{ color: "#4A7A9E" }}>{k}</span>
                        <span style={{ color: "#94AFC8" }}>{v}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4" style={{ borderTop: `1px solid ${BL}12` }}>
                    <div>
                      <div className="font-bold text-lg" style={{ color: BL, fontFamily: "Space Mono, monospace" }}>{item.price}</div>
                      <div className="text-[10px]" style={{ color: "#4A7A9E" }}>tax incl.</div>
                    </div>
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
        <p className="text-xs mt-8" style={{ color: "#4A7A9E", fontFamily: "Outfit, sans-serif" }}>
          * Prices shown are domestic prices including tax. Export prices (FOB/CIF) are quoted separately. Looking for something not listed?{" "}
          <Link to="/contact" className="transition-colors hover:underline" style={{ color: BL }}>Contact us.</Link>
        </p>
      </section>
    </motion.main>
  );
}
