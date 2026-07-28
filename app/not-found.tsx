import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-graphite-950 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <div className="text-8xl font-black text-graphite-800 mb-4">404</div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Looks Like You Took a <span className="text-gold-400">Wrong Turn</span>.
        </h1>
        <p className="text-xl text-graphite-400 mb-10">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-graphite-950 font-bold rounded-xl hover:from-gold-400 hover:to-gold-500 transition-all flex items-center gap-2">
            <ArrowLeft className="w-5 h-5" />
            Return Home
          </Link>
          <Link href="/products/" className="px-8 py-4 border border-graphite-600 text-white font-semibold rounded-xl hover:border-gold-500 hover:text-gold-400 transition-all flex items-center gap-2">
            <Search className="w-5 h-5" />
            Explore Products
          </Link>
        </div>
      </div>
    </div>
  );
}
