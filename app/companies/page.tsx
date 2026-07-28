import type { Metadata } from "next";
import { Building2, Factory, Truck, Wrench } from "lucide-react";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Group Companies",
  description: "Bariyan Group comprises Bariyan Oil & Lubricants Pvt. Ltd. and Bariyan Trading and Multiservices.",
};

export default function CompaniesPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-b from-graphite-900 to-graphite-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-4 block">Group Companies</span>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">
                Companies
              </span>
            </h1>
            <p className="text-xl text-graphite-300 leading-relaxed">
              Bariyan Group operates through two business entities, each contributing 
              to our mission of delivering premium lubrication solutions across India.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-graphite-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Company 1 */}
            <div className="bg-gradient-to-br from-graphite-900 to-graphite-800 border border-graphite-700 rounded-2xl p-10">
              <div className="w-16 h-16 rounded-2xl bg-gold-500/10 flex items-center justify-center mb-8">
                <Factory className="w-8 h-8 text-gold-400" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-3">Bariyan Oil & Lubricants Pvt. Ltd.</h2>
              <span className="inline-block px-4 py-1.5 bg-gold-500/10 text-gold-400 text-sm font-semibold rounded-full mb-6">
                Private Limited Company
              </span>
              <p className="text-graphite-300 leading-relaxed mb-8">
                Bariyan Oil & Lubricants Pvt. Ltd. is the core operating company of Bariyan Group, 
                specializing in the supply of automotive and industrial lubricant products. The 
                company manages the product portfolio, quality assurance, and distribution network 
                that serves businesses across India.
              </p>
              <div className="space-y-4">
                <h4 className="text-white font-semibold">Product Portfolio:</h4>
                <div className="flex flex-wrap gap-2">
                  {["Automotive Lubricants", "Industrial Lubricants", "Engine Oils", "Gear Oils", "Hydraulic Oils", "Transmission Fluids", "Lubricant Additives", "Specialty Lubrication Products"].map((item) => (
                    <span key={item} className="px-3 py-1.5 bg-graphite-950/50 border border-graphite-700 text-graphite-300 text-sm rounded-lg">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Company 2 */}
            <div className="bg-gradient-to-br from-graphite-900 to-graphite-800 border border-graphite-700 rounded-2xl p-10">
              <div className="w-16 h-16 rounded-2xl bg-gold-500/10 flex items-center justify-center mb-8">
                <Building2 className="w-8 h-8 text-gold-400" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-3">Bariyan Trading and Multiservices</h2>
              <span className="inline-block px-4 py-1.5 bg-gold-500/10 text-gold-400 text-sm font-semibold rounded-full mb-6">
                Proprietorship
              </span>
              <p className="text-graphite-300 leading-relaxed mb-8">
                Bariyan Trading and Multiservices is a proprietorship entity within Bariyan Group. 
                It supports the group&apos;s broader business operations and trading activities, 
                contributing to the group&apos;s overall capabilities and market presence across India.
              </p>
              <div className="space-y-4">
                <h4 className="text-white font-semibold">Business Support:</h4>
                <div className="flex flex-wrap gap-2">
                  {["Trading Operations", "Business Services", "Market Support", "Distribution Assistance"].map((item) => (
                    <span key={item} className="px-3 py-1.5 bg-graphite-950/50 border border-graphite-700 text-graphite-300 text-sm rounded-lg">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
