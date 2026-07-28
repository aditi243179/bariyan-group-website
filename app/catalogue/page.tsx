import type { Metadata } from "next";
import Link from "next/link";
import { FileText, Search, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Product Catalogue",
  description: "Browse and download the complete Bariyan Group product catalogue.",
};

export default function CataloguePage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-b from-graphite-900 to-graphite-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-4 block">Catalogue</span>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
              Bariyan Product <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">Catalogue</span>
            </h1>
            <p className="text-xl text-graphite-300 leading-relaxed">
              Explore our complete range of automotive and industrial lubricants, additives, and specialty products.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-graphite-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/products/" className="group bg-graphite-900/50 border border-graphite-800 rounded-2xl p-10 hover:border-gold-500/20 transition-all text-center">
              <div className="w-16 h-16 rounded-2xl bg-gold-500/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-gold-500/20 transition-colors">
                <Search className="w-8 h-8 text-gold-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Browse Online</h3>
              <p className="text-graphite-400 mb-6">Search, filter and explore our full product range with detailed specifications.</p>
              <span className="text-gold-400 font-semibold flex items-center justify-center gap-2">
                View Products <ExternalLink className="w-4 h-4" />
              </span>
            </Link>

            <div className="bg-graphite-900/50 border border-graphite-800 rounded-2xl p-10 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gold-500/10 flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-gold-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Download Catalogue</h3>
              <p className="text-graphite-400 mb-6">Download the official Bariyan Group product catalogue PDF.</p>
              <button disabled className="px-6 py-3 bg-graphite-800 text-graphite-400 font-semibold rounded-xl cursor-not-allowed">
                PDF Coming Soon
              </button>
            </div>
          </div>

          <div className="mt-12 p-8 bg-gradient-to-br from-gold-500/5 to-transparent border border-gold-500/10 rounded-2xl text-center">
            <h3 className="text-xl font-bold text-white mb-3">Need Product Information?</h3>
            <p className="text-graphite-400 mb-6">Our team is ready to provide detailed product information and quotations.</p>
            <Link href="/contact/" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-graphite-950 font-bold rounded-xl hover:from-gold-400 hover:to-gold-500 transition-all">
              Request Product Information
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
