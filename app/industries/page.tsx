import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Zap, Cog, Truck, Factory, Droplets, Wrench, ChevronRight } from "lucide-react";
import { industryImages } from "@/data/images";

export const metadata: Metadata = {
  title: "Industries",
  description: "Bariyan Group lubrication solutions for motorcycles, passenger vehicles, commercial vehicles, industrial machinery, and more.",
};

const industries = [
  {
    title: "Motorcycles",
    icon: Zap,
    description: "High-performance 4-stroke engine oils engineered for motorcycles and scooters operating with wet clutch systems.",
    products: ["Accord 4T 20W-40", "Active 4T 20W-40", "Super 4T 20W-40", "Dynamic 4T 20W-40", "Cadillac 4T 10W-30", "Fork Oil"],
  },
  {
    title: "Passenger Vehicles",
    icon: Cog,
    description: "Premium multigrade engine oils for modern passenger cars, providing wear protection and thermal stability.",
    products: ["Accord 4T 20W-40", "Active 4T 20W-40", "Super 4T 20W-40", "Engine Oil Booster", "Engine Oil Flush"],
  },
  {
    title: "Commercial Vehicles",
    icon: Truck,
    description: "Heavy-duty diesel engine oils for trucks, buses, and fleet operations requiring CI4+ performance.",
    products: ["Bolt CI4+ 15W-40", "Engine Oil Additive DI Package", "Multipurpose Engine Oil Additive"],
  },
  {
    title: "Heavy-Duty Diesel",
    icon: Factory,
    description: "Premium commercial multipurpose diesel engine oils for turbocharged engines in severe operating conditions.",
    products: ["Bolt CI4+ 15W-40", "HT Engine Oil Additive POT 3270", "Heavy Duty Vehicle Engine Oil Additive"],
  },
  {
    title: "Industrial Machinery",
    icon: Factory,
    description: "Hydraulic oils, gear oils, and industrial lubricants for factories and maintenance teams.",
    products: ["Hydraulic Oil", "Gear EP 90", "Industrial Gear Oil Additive", "Corrosion Inhibitor"],
  },
  {
    title: "Hydraulic Equipment",
    icon: Droplets,
    description: "Anti-wear hydraulic fluids for hydraulic systems, pumps, and industrial machinery.",
    products: ["Hydraulic Oil", "Corrosion Inhibitor POT 9110", "Antiwear Additive POT 9120"],
  },
  {
    title: "Gear Systems",
    icon: Wrench,
    description: "Extreme pressure gear oils for hypoid differentials, transmissions, and drive axles.",
    products: ["Gear EP 90", "Gear Oil Additive EP POT 4230", "Automobile Gear Oil Additive POT 4220"],
  },
  {
    title: "Transmission Systems",
    icon: Cog,
    description: "Automatic transmission fluids for smooth gear shifting and extended component life.",
    products: ["Automatic Transmission Fluid", "ATF Additive POT 6110", "UTTO Additive POT 3280"],
  },
];

export default function IndustriesPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-b from-graphite-900 to-graphite-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-4 block">Industries</span>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
              Industries We <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">Serve</span>
            </h1>
            <p className="text-xl text-graphite-300 leading-relaxed">
              Bariyan Group delivers specialized lubrication solutions across automotive and industrial sectors.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-graphite-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((ind) => (
              <div key={ind.title} className="group bg-graphite-900/50 border border-graphite-800 rounded-2xl overflow-hidden hover:border-gold-500/20 transition-all">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={industryImages[ind.title] || "/images/oilPouring"}
                    alt={ind.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-graphite-900 via-graphite-900/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gold-500/20 backdrop-blur-sm flex items-center justify-center">
                      <ind.icon className="w-5 h-5 text-gold-400" />
                    </div>
                    <h2 className="text-xl font-bold text-white">{ind.title}</h2>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-graphite-300 leading-relaxed mb-6">{ind.description}</p>
                  <div className="mb-6">
                    <span className="text-sm font-semibold text-graphite-400 uppercase tracking-wider">Key Products:</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {ind.products.map((p) => (
                        <span key={p} className="px-3 py-1 bg-graphite-800 text-graphite-300 text-xs rounded-lg">{p}</span>
                      ))}
                    </div>
                  </div>
                  <Link href="/products/" className="text-gold-400 hover:text-gold-300 font-semibold text-sm flex items-center gap-1">
                    Browse Products <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
