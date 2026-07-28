import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ChevronRight,
  CheckCircle,
  Award,
  Package,
  BarChart3,
  MessageCircle,
} from "lucide-react";
import { products, getProductBySlug, getRelatedProducts } from "@/data/products";
import { siteConfig } from "@/data/site";

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: `${product.name} | ${siteConfig.name}`,
      description: product.description,
    },
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const related = getRelatedProducts(product.relatedProducts).slice(0, 3);
  const categoryName = products.find((c) => c.category === product.category)?.subcategory || product.category;

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products/" },
    { label: categoryName, href: `/products/?category=${product.category}` },
    { label: product.name, href: `#` },
  ];

  const whatsappMessage = `Hello Bariyan Group, I am interested in ${product.name}. Please share product details and quotation.`;
  const whatsappUrl = `https://wa.me/${siteConfig.phoneRaw}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      {/* Breadcrumbs */}
      <div className="pt-28 pb-4 bg-graphite-950 border-b border-graphite-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-graphite-400 flex-wrap">
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.label} className="flex items-center gap-2">
                {i > 0 && <ChevronRight className="w-4 h-4 text-graphite-600" />}
                {i === breadcrumbs.length - 1 ? (
                  <span className="text-white font-medium">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="hover:text-gold-400 transition-colors">
                    {crumb.label}
                  </Link>
                )}
              </span>
            ))}
          </nav>
        </div>
      </div>

      {/* Product Hero */}
      <section className="py-16 bg-gradient-to-b from-graphite-900 to-graphite-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Product Image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-gold-500/10 to-gold-600/5 rounded-2xl blur-2xl" />
              <div className="relative aspect-square bg-graphite-800 rounded-2xl border border-graphite-700 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite-900/60 to-transparent" />
              </div>
            </div>

            {/* Product Info */}
            <div>
              <span className="inline-block px-3 py-1 bg-gold-500/10 text-gold-400 text-xs font-semibold rounded-full mb-4">
                {product.subcategory}
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-4">{product.name}</h1>
              <p className="text-graphite-300 text-lg leading-relaxed mb-6">{product.description}</p>

              <div className="flex flex-wrap gap-3 mb-8">
                {product.grade && (
                  <span className="px-4 py-2 bg-graphite-800 text-white text-sm rounded-lg font-mono border border-graphite-700">
                    Grade: {product.grade}
                  </span>
                )}
                {product.apiRating && (
                  <span className="px-4 py-2 bg-gold-500/10 text-gold-400 text-sm rounded-lg font-mono border border-gold-500/20">
                    {product.apiRating}
                  </span>
                )}
                {product.itemCode && (
                  <span className="px-4 py-2 bg-graphite-800 text-graphite-300 text-sm rounded-lg font-mono border border-graphite-700">
                    Item Code: {product.itemCode}
                  </span>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link
                  href={`/contact/?product=${product.slug}`}
                  className="px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-graphite-950 font-bold rounded-xl hover:from-gold-400 hover:to-gold-500 transition-all shadow-xl shadow-gold-500/20 text-center"
                >
                  Request Quote
                </Link>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-500 transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Enquiry
                </a>
              </div>

              {product.packaging.length > 0 && (
                <div className="flex items-start gap-3 text-graphite-300">
                  <Package className="w-5 h-5 text-gold-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Packaging:</span>{" "}
                    {product.packaging.join(", ")}
                  </div>
                </div>
              )}
              {product.minimumOrder && (
                <div className="flex items-start gap-3 text-graphite-300 mt-2">
                  <BarChart3 className="w-5 h-5 text-gold-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Minimum Order:</span>{" "}
                    {product.minimumOrder}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-16 bg-graphite-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Applications */}
            <div className="bg-graphite-900/50 border border-graphite-800 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-gold-400" />
                Applications
              </h2>
              <ul className="space-y-3">
                {product.applications.map((app, i) => (
                  <li key={i} className="flex items-start gap-3 text-graphite-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-2 shrink-0" />
                    {app}
                  </li>
                ))}
              </ul>
            </div>

            {/* Features */}
            <div className="bg-graphite-900/50 border border-graphite-800 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Award className="w-6 h-6 text-gold-400" />
                Key Features
              </h2>
              <ul className="space-y-3">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-graphite-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-2 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gradient-to-b from-graphite-950 to-graphite-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">Performance Benefits</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.benefits.map((benefit, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-6 bg-graphite-950/50 border border-graphite-800 rounded-xl"
              >
                <CheckCircle className="w-5 h-5 text-gold-400 mt-0.5 shrink-0" />
                <span className="text-graphite-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards */}
      {product.standards.length > 0 && (
        <section className="py-16 bg-graphite-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Performance Standards</h2>
            <div className="flex flex-wrap gap-3">
              {product.standards.map((standard, i) => (
                <span
                  key={i}
                  className="px-5 py-3 bg-gold-500/10 border border-gold-500/20 text-gold-400 font-semibold rounded-xl"
                >
                  {standard}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Specifications Table */}
      {product.specifications && product.specifications.length > 0 && (
        <section className="py-16 bg-gradient-to-b from-graphite-950 to-graphite-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Technical Specifications</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-graphite-700">
                    <th className="text-left py-4 px-6 text-graphite-400 font-semibold text-sm uppercase tracking-wider">Property</th>
                    <th className="text-left py-4 px-6 text-graphite-400 font-semibold text-sm uppercase tracking-wider">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {product.specifications.map((spec, i) => (
                    <tr key={i} className="border-b border-graphite-800 hover:bg-graphite-900/50 transition-colors">
                      <td className="py-4 px-6 text-white font-medium">{spec.label}</td>
                      <td className="py-4 px-6 text-graphite-300 font-mono text-sm">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Packaging & MOQ */}
      <section className="py-16 bg-graphite-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-graphite-900/50 border border-graphite-800 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <Package className="w-5 h-5 text-gold-400" />
                Packaging Options
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.packaging.map((pkg, i) => (
                  <span key={i} className="px-4 py-2 bg-graphite-800 text-white rounded-lg text-sm font-mono">
                    {pkg}
                  </span>
                ))}
              </div>
            </div>
            {product.minimumOrder && (
              <div className="bg-graphite-900/50 border border-graphite-800 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <BarChart3 className="w-5 h-5 text-gold-400" />
                  Minimum Order
                </h3>
                <p className="text-graphite-300">{product.minimumOrder}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="py-16 bg-gradient-to-b from-graphite-900 to-graphite-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Related Products</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/products/${rel.slug}/`}
                  className="group bg-graphite-950/50 border border-graphite-800 rounded-2xl overflow-hidden hover:border-gold-500/20 transition-all"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={rel.image}
                      alt={rel.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-graphite-900/80 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gold-400 transition-colors">
                      {rel.name}
                    </h3>
                    <p className="text-graphite-400 text-sm line-clamp-2">{rel.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-graphite-950 border-t border-graphite-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Interested in this product?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={`/contact/?product=${product.slug}`}
              className="px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-graphite-950 font-bold rounded-xl hover:from-gold-400 hover:to-gold-500 transition-all shadow-xl shadow-gold-500/20"
            >
              Request a Quote
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-500 transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
