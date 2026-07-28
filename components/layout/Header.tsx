"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { siteConfig } from "@/data/site";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/companies/", label: "Group Companies" },
  { href: "/products/", label: "Products" },
  { href: "/industries/", label: "Industries" },
  { href: "/quality/", label: "Quality" },
  { href: "/distributor/", label: "Distributor" },
  { href: "/catalogue/", label: "Catalogue" },
  { href: "/contact/", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-graphite-950/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-graphite-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center shadow-lg shadow-gold-500/20 group-hover:shadow-gold-500/40 transition-shadow">
              <span className="text-graphite-950 font-bold text-lg">B</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-white font-bold text-xl tracking-tight">BARIYAN</span>
              <span className="text-gold-400 text-xs block -mt-1 tracking-widest uppercase">Group</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-3 py-2 text-sm text-graphite-300 hover:text-white transition-colors group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gold-400 group-hover:w-4/5 transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden xl:flex items-center gap-4">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex items-center gap-2 text-sm text-graphite-300 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{siteConfig.phone}</span>
            </a>
            <Link
              href="/contact/"
              className="px-5 py-2.5 bg-gradient-to-r from-gold-500 to-gold-600 text-graphite-950 font-semibold text-sm rounded-lg hover:from-gold-400 hover:to-gold-500 transition-all shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden p-2 text-white hover:text-gold-400 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="xl:hidden bg-graphite-950/98 backdrop-blur-xl border-t border-graphite-800">
          <div className="px-4 py-6 space-y-1 max-h-[80vh] overflow-y-auto">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-graphite-300 hover:text-white hover:bg-graphite-900 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-graphite-800 mt-4 space-y-3">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="flex items-center gap-2 px-4 py-3 text-gold-400"
              >
                <Phone className="w-5 h-5" />
                {siteConfig.phone}
              </a>
              <Link
                href="/contact/"
                onClick={() => setMobileOpen(false)}
                className="block mx-4 px-5 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-graphite-950 font-semibold text-center rounded-lg"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
