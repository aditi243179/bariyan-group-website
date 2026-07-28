"use client";

import { useState, useMemo, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Filter, ChevronRight } from "lucide-react";
import { products, categories } from "@/data/products";

function ProductsContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        searchQuery === "" ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.subcategory.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.grade && product.grade.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (product.apiRating && product.apiRating.toLowerCase().includes(searchQuery.toLowerCase())) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-b from-graphite-900 to-graphite-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-4 block">Products</span>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
              Product{" "}
              <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">
                Catalogue
              </span>
            </h1>
            <p className="text-xl text-graphite-300 leading-relaxed">
              Browse our complete range of automotive and industrial lubricants, additives, 
              and specialty products.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-8 bg-graphite-950 border-b border-graphite-800 sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-graphite-500" />
              <input
                type="text"
                placeholder="Search products, grades or applications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-graphite-900 border border-graphite-700 rounded-xl text-white placeholder:text-graphite-500 focus:outline-none focus:border-gold-500 transition-colors"
              />
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
              <Filter className="w-5 h-5 text-graphite-500 shrink-0" />
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === "all"
                    ? "bg-gold-500 text-graphite-950"
                    : "bg-graphite-900 text-graphite-300 hover:text-white border border-graphite-700"
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === cat.id
                      ? "bg-gold-500 text-graphite-950"
                      : "bg-graphite-900 text-graphite-300 hover:text-white border border-graphite-700"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-graphite-950 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <Search className="w-12 h-12 text-graphite-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No products found</h3>
              <p className="text-graphite-400">Try adjusting your search or filters.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group bg-graphite-900/50 border border-graphite-800 rounded-2xl overflow-hidden hover:border-gold-500/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-graphite-900/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="text-gold-400 text-xs font-semibold uppercase tracking-wider">{product.subcategory}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gold-400 transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      {product.grade && (
                        <span className="px-2 py-1 bg-graphite-800 text-graphite-300 text-xs rounded-md font-mono">
                          {product.grade}
                        </span>
                      )}
                      {product.apiRating && (
                        <span className="px-2 py-1 bg-gold-500/10 text-gold-400 text-xs rounded-md font-mono">
                          {product.apiRating}
                        </span>
                      )}
                    </div>
                    <p className="text-graphite-400 text-sm leading-relaxed mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex items-center gap-3">
                      <Link
                        href={`/products/${product.slug}/`}
                        className="text-sm font-semibold text-white hover:text-gold-400 transition-colors flex items-center gap-1"
                      >
                        View Details <ChevronRight className="w-4 h-4" />
                      </Link>
                      <Link
                        href={`/contact/?product=${product.slug}`}
                        className="text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors"
                      >
                        Request Quote
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="pt-32 pb-20 bg-graphite-950 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 w-32 bg-graphite-800 rounded mb-4" />
            <div className="h-16 w-96 bg-graphite-800 rounded mb-4" />
            <div className="h-8 w-64 bg-graphite-800 rounded" />
          </div>
        </div>
      </div>
    }>
      <ProductsContent />
    </Suspense>
  );
}
