import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageHero from "../components/PageHero";
import Reveal from "../components/RevealSection";
import { useLanguage } from "../context/LanguageContext";

const BL = "#D4AF37";   // HARITA gold

function SL({ label }: { label: string }) {
  const { t } = useLanguage();
  return (
    <div className="flex items-center gap-4 mb-4">
      <div className="w-10 h-px" style={{ background: `linear-gradient(to right, ${BL}, ${BL}50)` }} />
      <span className="text-[11px] tracking-[0.35em] uppercase font-bold" style={{ color: BL, fontFamily: "Space Mono, monospace" }}>{t(label)}</span>
    </div>
  );
}

const vehicles = [
  { cat: "CAR", name: "Passenger Cars", desc: "Sedans, SUVs and kei cars — for both domestic sale and export.", img: "https://res.cloudinary.com/dyp247eoh/image/upload/v1783761565/Krasula_Shutterstock_1561724425_RV_lxammy.jpg" },
  { cat: "TRUCK", name: "Trucks & Vans", desc: "Commercial trucks, vans and dump trucks, offered after condition checks.", img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&h=400&fit=crop&auto=format" },
  { cat: "MACHINERY", name: "Heavy Machinery", desc: "Excavators, wheel loaders and other construction machinery in high overseas demand.", img: "https://res.cloudinary.com/dyp247eoh/image/upload/v1783761620/images_-_2026-07-11T144957.219_rt0dgh.jpg" },
  { cat: "PARTS", name: "Parts & More", desc: "Used parts and related equipment are also available on request.", img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=400&fit=crop&auto=format" },
];

const steps = [
  { num: "01", title: "Inquiry", desc: "Tell us the model, conditions and destination you are looking for." },
  { num: "02", title: "Proposal & Quote", desc: "We propose the best vehicles from auctions and stock, with a quotation." },
  { num: "03", title: "Maintenance & Docs", desc: "Inspection, deregistration for export and shipping documents." },
  { num: "04", title: "Shipping & Delivery", desc: "After shipment we send the B/L and related documents to complete delivery." },
];

const stock = [
  { id: "V-001", name: "Toyota Hiace Van DX (sample)", year: "2015", mileage: "118,000 km", spec: "Diesel / AT / 2WD", price: "¥1,850,000", status: "ON HOLD", img: "https://res.cloudinary.com/dyp247eoh/image/upload/v1783761673/Toyota_Hiace_Van_3.0_DX_Long_Diesel_Turbo34_s7ce6m.jpg" },
  { id: "V-002", name: "Komatsu Mini Excavator PC30 (sample)", year: "2012", mileage: "2,340 h", spec: "2,340 hours / serviced", price: "¥2,400,000", status: "AVAILABLE", img: "https://res.cloudinary.com/dyp247eoh/image/upload/v1783761728/6143748_excavator-pc30mr-cartersville-ga-es-240501-img-9952-web_pch9wf.jpg" },
  { id: "V-003", name: "Suzuki Every JOIN (sample)", year: "2018", mileage: "64,000 km", spec: "Petrol / AT / High roof", price: "¥680,000", status: "AVAILABLE", img: "https://res.cloudinary.com/dyp247eoh/image/upload/v1783761787/Suzuki_Every_Join_jjn3kz.jpg" },
];

export default function VehiclesPage() {
  const { t } = useLanguage();

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
      style={{ background: "#020b18", color: "#E8F0F8" }}
    >
      <PageHero
        tag="Used Vehicles & Machinery"
        tagSub="Automobile"
        title="Honest trading,"
        titleAccent="one vehicle at a time."
        subtitle="We trade and export used vehicles — from passenger cars, trucks and vans to heavy construction machinery. Negotiations available in English with a strong track record with international buyers."
        img="https://res.cloudinary.com/dyp247eoh/image/upload/v1783777182/row-cars_83_1_0_aucbes.jpg"
        imgAlt="Vehicles for export"
        accentColor={BL}
      />

      {/* What We Handle */}
      <section className="py-28 max-w-7xl mx-auto px-6">
        <Reveal>
          <SL label="Line Up" />
          <h2 className="font-black text-[#E8F0F8] mb-14"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontFamily: "Outfit, sans-serif" }}>
            {t("What We")} <span className="text-gradient-blue italic">{t("Handle")}</span>
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {vehicles.map((v, i) => (
            <Reveal key={v.name} direction="scale" delay={i * 90} className="h-full">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group overflow-hidden border-blue-glow h-full flex flex-col"
                style={{ background: "rgba(5,81,147,0.18)" }}
              >
                <div className="relative overflow-hidden h-44 shrink-0" style={{ background: "#020b18" }}>
                  <img src={v.img} alt={t(v.name)} className="w-full h-full object-cover opacity-85 img-zoom group-hover:opacity-100" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #020b18 0%, transparent 60%)" }} />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, rgba(5,81,147,0.3) 0%, transparent 60%)` }} />
                  <span className="absolute top-3 left-3 text-[10px] tracking-[0.25em] uppercase px-2.5 py-1 backdrop-blur-md"
                    style={{ color: "#D4AF37", background: "rgba(2,11,24,0.8)", border: `1px solid rgba(212,175,55,0.3)`, fontFamily: "Space Mono, monospace" }}>
                    {t(v.cat)}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-start">
                  <h3 className="text-[#E8F0F8] font-bold mb-2 group-hover:text-[#D4AF37] transition-colors">{t(v.name)}</h3>
                  <p className="text-sm leading-relaxed font-light text-[#A2C1DB]" style={{ fontFamily: "Outfit, sans-serif" }}>{t(v.desc)}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Export Process */}
      <section className="py-28" style={{ background: "#03152a", borderTop: `1px solid rgba(212,175,55,0.2)` }}>
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <SL label="Export Flow" />
            <h2 className="font-black text-[#E8F0F8] mb-14"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontFamily: "Outfit, sans-serif" }}>
              {t("Export")} <span className="text-gradient-blue italic">{t("Process")}</span>
            </h2>
          </Reveal>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, i) => (
                <Reveal key={step.num} direction="scale" delay={i * 100} className="text-center relative">
                  {/* Connector line from current box center to next box center */}
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute top-[32px] left-1/2 w-[calc(100%+24px)] h-px pointer-events-none z-0"
                      style={{ background: "rgba(212,175,55,0.35)" }} />
                  )}
                  <motion.div whileHover={{ scale: 1.04 }} transition={{ duration: 0.2 }}
                    className="w-16 h-16 flex items-center justify-center mx-auto mb-5 rounded-sm relative z-10"
                    style={{ background: "#03152a", border: `2px solid #D4AF37`, boxShadow: `0 0 25px rgba(212,175,55,0.3)` }}>
                    <span className="font-black text-xl" style={{ color: "#F3C64F", fontFamily: "Space Mono, monospace" }}>{step.num}</span>
                  </motion.div>
                  <h3 className="text-[#E8F0F8] font-bold mb-2">{t(step.title)}</h3>
                  <p className="text-sm leading-relaxed font-light" style={{ color: "#A2C1DB", fontFamily: "Outfit, sans-serif" }}>{t(step.desc)}</p>
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
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontFamily: "Outfit, sans-serif" }}>
            {t("Vehicles in")} <span className="text-gradient-blue italic">{t("Vehicles Stock")}</span>
          </h2>
          <p className="mb-14 max-w-2xl font-light" style={{ color: "#A2C1DB", fontFamily: "Outfit, sans-serif" }}>
            {t("Our current stock is listed below with prices, updated regularly. We support both export and domestic sales.")}
          </p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {stock.map((item, i) => (
            <Reveal key={item.id} direction="scale" delay={i * 100}>
              <motion.div whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(0,0,0,0.6)" }} transition={{ duration: 0.3 }}
                className="group overflow-hidden h-full"
                style={{ background: "rgba(5,81,147,0.18)", border: `1px solid rgba(212,175,55,0.2)` }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#D4AF37"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,55,0.2)"; }}>
                <div className="relative overflow-hidden h-48" style={{ background: "#020b18" }}>
                  <img src={item.img} alt={t(item.name)} className="w-full h-full object-cover opacity-85 img-zoom group-hover:opacity-100" />
                  <div className="absolute inset-0" style={{ background: `rgba(5,81,147,0.2)` }} />
                  <span className={`absolute top-3 right-3 text-[10px] tracking-[0.2em] uppercase px-2.5 py-1 font-bold ${item.status === "AVAILABLE" ? "bg-emerald-700 text-white" : "bg-amber-700 text-white"}`}>
                    {t(item.status)}
                  </span>
                </div>
                <div className="p-6">
                  <span className="text-xs" style={{ color: "#A2C1DB", fontFamily: "Space Mono, monospace" }}>{item.id}</span>
                  <h3 className="text-[#E8F0F8] font-bold mt-1 mb-4 group-hover:text-[#D4AF37] transition-colors">{t(item.name)}</h3>
                  <div className="space-y-2 text-sm mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>
                    {[["Year", item.year], ["Mileage", item.mileage], ["Spec", item.spec]].map(([k, v]) => (
                      <div key={k} className="flex justify-between">
                        <span style={{ color: "#A2C1DB" }}>{t(k)}</span>
                        <span style={{ color: "#E8F0F8" }}>{t(v)}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4" style={{ borderTop: `1px solid rgba(212,175,55,0.2)` }}>
                    <div>
                      <div className="font-bold text-lg" style={{ color: BL, fontFamily: "Space Mono, monospace" }}>{item.price}</div>
                      <div className="text-[10px]" style={{ color: "#A2C1DB" }}>{t("tax incl.")}</div>
                    </div>
                    <Link to="/contact"
                      className="text-xs tracking-widest uppercase px-4 py-2 font-bold transition-all duration-200"
                      style={{ border: `1px solid rgba(212,175,55,0.4)`, color: BL }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = BL; (e.currentTarget as HTMLElement).style.color = "#020b18"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = BL; }}>
                      {t("Inquire")}
                    </Link>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
        <p className="text-xs mt-8" style={{ color: "#A2C1DB", fontFamily: "Outfit, sans-serif" }}>
          {t("* Prices shown are domestic prices including tax. Export prices (FOB/CIF) are quoted separately. Looking for something not listed? ")}
          <Link to="/contact" className="transition-colors hover:underline" style={{ color: BL }}>{t("Contact us.")}</Link>
        </p>
      </section>
    </motion.main>
  );
}
