"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";
import { siteConfig } from "@/data/site";

const footerLinks = [
  { href: "/about/", label: "About" },
  { href: "/products/", label: "Products" },
  { href: "/industries/", label: "Industries" },
  { href: "/quality/", label: "Quality" },
  { href: "/distributor/", label: "Distributor" },
  { href: "/catalogue/", label: "Catalogue" },
  { href: "/contact/", label: "Contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-graphite-950 border-t border-graphite-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                <span className="text-graphite-950 font-bold text-lg">B</span>
              </div>
              <div>
                <span className="text-white font-bold text-xl tracking-tight block">BARIYAN</span>
                <span className="text-gold-400 text-xs tracking-widest uppercase">Group</span>
              </div>
            </Link>
            <p className="text-graphite-400 text-sm leading-relaxed mb-4">
              Powering Performance Since 2017. Automotive & Industrial Lubrication Solutions Across India.
            </p>
            <p className="text-graphite-500 text-xs">
              Pan-India Supplier of Premium Lubricants
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-graphite-400 hover:text-gold-400 text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Group Companies */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Group Companies</h4>
            <ul className="space-y-4">
              {siteConfig.companies.map((company) => (
                <li key={company.name}>
                  <p className="text-white text-sm font-medium">{company.name}</p>
                  <p className="text-graphite-500 text-xs mt-1">{company.type}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${siteConfig.phoneRaw}`} className="flex items-start gap-3 text-graphite-400 hover:text-gold-400 text-sm transition-colors">
                  <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="flex items-start gap-3 text-graphite-400 hover:text-gold-400 text-sm transition-colors">
                  <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <span className="flex items-start gap-3 text-graphite-400 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  {siteConfig.address.full}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-graphite-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-graphite-500 text-sm">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-graphite-400 hover:text-gold-400 text-sm transition-colors"
            aria-label="Back to top"
          >
            Back to Top
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
