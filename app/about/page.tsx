import type { Metadata } from "next";
import { Award, Globe, Shield, Clock, Users, Zap } from "lucide-react";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Bariyan Group - established in 2017 as a Pan-India supplier of automotive and industrial lubrication solutions.",
};

const values = [
  { icon: Shield, title: "Quality First", description: "Every product is formulated and tested to meet stringent industry standards including API, SAE, MIL, and IS specifications." },
  { icon: Zap, title: "Performance Driven", description: "Our lubricants are engineered to deliver maximum protection, efficiency, and reliability under demanding conditions." },
  { icon: Globe, title: "Pan-India Reach", description: "We supply our products to businesses across India, ensuring reliable access to premium lubrication solutions nationwide." },
  { icon: Users, title: "B2B Focused", description: "We serve distributors, dealers, fleet operators, industrial buyers, and institutional clients with tailored solutions." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-graphite-900 to-graphite-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-4 block">About Us</span>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">
                Bariyan Group
              </span>
            </h1>
            <p className="text-xl text-graphite-300 leading-relaxed">
              Established in 2017, Bariyan Group is an Indian automotive and industrial 
              lubrication solutions business with Pan-India supply capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-graphite-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Powering Performance{" "}
                <span className="text-gold-400">Since 2017</span>
              </h2>
              <div className="space-y-4 text-graphite-300 leading-relaxed">
                <p>
                  Bariyan Group was established in 2017 with a clear mission: to provide 
                  businesses across India with access to high-quality automotive and industrial 
                  lubrication products. From our base in Lucknow, Uttar Pradesh, we have built 
                  a reputation for reliability, quality, and performance.
                </p>
                <p>
                  Our product portfolio spans motorcycle engine oils, automotive engine oils, 
                  commercial vehicle lubricants, gear oils, hydraulic oils, transmission fluids, 
                  and a comprehensive range of lubricant additives and specialty products.
                </p>
                <p>
                  We serve a diverse clientele including lubricant distributors, dealers, 
                  automotive workshops, fleet operators, transport companies, industrial buyers, 
                  factories, and institutional buyers across India.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-gold-500/10 to-gold-600/5 rounded-2xl blur-2xl" />
              <div className="relative bg-gradient-to-br from-graphite-900 to-graphite-800 rounded-2xl p-10 border border-graphite-700">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-graphite-950/50 rounded-xl border border-graphite-800">
                    <Clock className="w-8 h-8 text-gold-400 mx-auto mb-3" />
                    <div className="text-3xl font-black text-white mb-1">2017</div>
                    <div className="text-graphite-400 text-sm">Year Established</div>
                  </div>
                  <div className="text-center p-6 bg-graphite-950/50 rounded-xl border border-graphite-800">
                    <Globe className="w-8 h-8 text-gold-400 mx-auto mb-3" />
                    <div className="text-3xl font-black text-white mb-1">PAN</div>
                    <div className="text-graphite-400 text-sm">India Supply</div>
                  </div>
                  <div className="text-center p-6 bg-graphite-950/50 rounded-xl border border-graphite-800">
                    <Award className="w-8 h-8 text-gold-400 mx-auto mb-3" />
                    <div className="text-3xl font-black text-white mb-1">30+</div>
                    <div className="text-graphite-400 text-sm">Products</div>
                  </div>
                  <div className="text-center p-6 bg-graphite-950/50 rounded-xl border border-graphite-800">
                    <Users className="w-8 h-8 text-gold-400 mx-auto mb-3" />
                    <div className="text-3xl font-black text-white mb-1">2</div>
                    <div className="text-graphite-400 text-sm">Group Companies</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gradient-to-b from-graphite-950 to-graphite-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-4 block">Our Approach</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Built on Performance, Protection & Reliability
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="group p-8 bg-graphite-950/50 border border-graphite-800 rounded-2xl hover:border-gold-500/20 transition-all">
                <div className="w-14 h-14 rounded-xl bg-gold-500/10 flex items-center justify-center mb-6 group-hover:bg-gold-500/20 transition-colors">
                  <value.icon className="w-7 h-7 text-gold-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-graphite-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Group Structure */}
      <section className="py-24 bg-graphite-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-4 block">Our Structure</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Group Structure
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-graphite-950 font-bold text-xl rounded-xl">
                Bariyan Group
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {siteConfig.companies.map((company) => (
                <div key={company.name} className="bg-graphite-900/50 border border-graphite-800 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-white mb-2">{company.name}</h3>
                  <span className="inline-block px-3 py-1 bg-gold-500/10 text-gold-400 text-xs font-semibold rounded-full mb-4">
                    {company.type}
                  </span>
                  <p className="text-graphite-400 leading-relaxed">{company.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
