import type { Metadata } from "next";
import { Shield, Thermometer, FlaskConical, Award, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Quality & Performance",
  description: "Bariyan Group products meet API, SAE, MIL, IS and other industry performance standards.",
};

const standards = [
  { code: "API", name: "American Petroleum Institute", description: "Products meet API SN, CI4+, GL-5, and other service classifications." },
  { code: "SAE", name: "Society of Automotive Engineers", description: "Viscosity grades conform to SAE standards including 10W-30, 15W-40, 20W-40, and 20W-50." },
  { code: "GL", name: "Gear Lubricant", description: "Gear oils meet GL-5 extreme pressure requirements." },
  { code: "MIL", name: "Military Specifications", description: "Products conform to US MIL-L-2104B and MIL-L-2105D standards." },
  { code: "IS", name: "Indian Standards", description: "Products meet IS:13656-1993 and IS:10522:1983 specifications." },
];

const characteristics = [
  { icon: Thermometer, title: "Viscosity Stability", description: "Shear stable viscosity index improvers maintain consistent performance across temperature extremes." },
  { icon: Shield, title: "Wear Protection", description: "Advanced anti-wear chemistry protects engine parts, gears, and hydraulic components from premature failure." },
  { icon: FlaskConical, title: "Oxidation & Thermal Stability", description: "Formulations resist oil degradation and thickening under high temperature operation." },
  { icon: Award, title: "Corrosion Protection", description: "Superior rust and corrosion inhibitors protect metal surfaces in demanding environments." },
];

export default function QualityPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-b from-graphite-900 to-graphite-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-4 block">Quality</span>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
              Quality & <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">Performance</span>
            </h1>
            <p className="text-xl text-graphite-300 leading-relaxed">
              Our products are formulated to meet recognized industry standards and deliver consistent, reliable performance.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-graphite-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Technical Characteristics</h2>
            <p className="text-graphite-400 max-w-2xl mx-auto">Key performance attributes engineered into every Bariyan product.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {characteristics.map((c) => (
              <div key={c.title} className="p-8 bg-graphite-900/50 border border-graphite-800 rounded-2xl hover:border-gold-500/20 transition-all">
                <div className="w-14 h-14 rounded-xl bg-gold-500/10 flex items-center justify-center mb-6">
                  <c.icon className="w-7 h-7 text-gold-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{c.title}</h3>
                <p className="text-graphite-400 leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-graphite-950 to-graphite-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Applicable Standards</h2>
            <p className="text-graphite-400 max-w-2xl mx-auto">
              Our products are formulated to meet the following industry specifications. Individual product pages list specific applicable standards.
            </p>
          </div>
          <div className="space-y-6 max-w-4xl mx-auto">
            {standards.map((s) => (
              <div key={s.code} className="flex items-start gap-6 p-6 bg-graphite-950/50 border border-graphite-800 rounded-2xl">
                <div className="w-16 h-16 rounded-xl bg-gold-500/10 flex items-center justify-center shrink-0">
                  <span className="text-gold-400 font-black text-xl">{s.code}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{s.name}</h3>
                  <p className="text-graphite-400">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 p-6 bg-gold-500/5 border border-gold-500/10 rounded-2xl max-w-4xl mx-auto">
            <p className="text-graphite-300 text-sm flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-gold-400 mt-0.5 shrink-0" />
              <span>
                <strong className="text-white">Important:</strong> Product specifications indicate that the product meets the referenced standard. This is distinct from company-level certification. Please refer to individual product pages for specific standard claims.
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
