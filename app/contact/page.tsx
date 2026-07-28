"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { siteConfig } from "@/data/site";
import { products } from "@/data/products";

function ContactForm() {
  const searchParams = useSearchParams();
  const preselectedProduct = searchParams.get("product");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {submitted ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
            <Send className="w-8 h-8 text-green-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Enquiry Submitted</h3>
          <p className="text-graphite-400">Thank you for contacting us. Our team will respond shortly.</p>
          <p className="text-graphite-500 text-sm mt-4">Note: Configure EMAIL_SERVICE in .env for live delivery.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            { name: "name", label: "Name", type: "text", required: true },
            { name: "company", label: "Company", type: "text", required: false },
            { name: "phone", label: "Phone", type: "tel", required: true },
            { name: "email", label: "Email", type: "email", required: true },
            { name: "city", label: "City", type: "text", required: false },
            { name: "state", label: "State", type: "text", required: false },
          ].map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-medium text-graphite-300 mb-1">
                {field.label} {field.required && <span className="text-red-400">*</span>}
              </label>
              <input
                type={field.type}
                name={field.name}
                required={field.required}
                className="w-full px-4 py-3 bg-graphite-950 border border-graphite-700 rounded-xl text-white placeholder:text-graphite-600 focus:outline-none focus:border-gold-500 transition-colors"
              />
            </div>
          ))}
          <div>
            <label className="block text-sm font-medium text-graphite-300 mb-1">Product / Requirement</label>
            <select
              name="product"
              defaultValue={preselectedProduct || ""}
              className="w-full px-4 py-3 bg-graphite-950 border border-graphite-700 rounded-xl text-white focus:outline-none focus:border-gold-500 transition-colors"
            >
              <option value="">Select a product (optional)</option>
              {products.map((p) => (
                <option key={p.id} value={p.slug}>{p.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-graphite-300 mb-1">Quantity</label>
            <input
              type="text"
              name="quantity"
              className="w-full px-4 py-3 bg-graphite-950 border border-graphite-700 rounded-xl text-white placeholder:text-graphite-600 focus:outline-none focus:border-gold-500 transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-graphite-300 mb-1">Message</label>
            <textarea
              name="message"
              rows={4}
              className="w-full px-4 py-3 bg-graphite-950 border border-graphite-700 rounded-xl text-white placeholder:text-graphite-600 focus:outline-none focus:border-gold-500 transition-colors"
            />
          </div>
          <button
            type="submit"
            className="w-full px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-graphite-950 font-bold rounded-xl hover:from-gold-400 hover:to-gold-500 transition-all"
          >
            Send Enquiry
          </button>
        </form>
      )}
    </>
  );
}

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${siteConfig.phoneRaw}?text=${encodeURIComponent("Hello Bariyan Group, I would like more information about your lubricant products.")}`;

  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-b from-graphite-900 to-graphite-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-4 block">Contact</span>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
              Get in <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-graphite-300 leading-relaxed">
              Reach out for product enquiries, quotations, distributorship opportunities, or any questions about our lubrication solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-graphite-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
              <div className="space-y-6">
                <a href={`tel:${siteConfig.phoneRaw}`} className="flex items-start gap-4 p-6 bg-graphite-900/50 border border-graphite-800 rounded-2xl hover:border-gold-500/20 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center shrink-0 group-hover:bg-gold-500/20 transition-colors">
                    <Phone className="w-6 h-6 text-gold-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                    <p className="text-graphite-300 group-hover:text-gold-400 transition-colors">{siteConfig.phone}</p>
                  </div>
                </a>

                <a href={`mailto:${siteConfig.email}`} className="flex items-start gap-4 p-6 bg-graphite-900/50 border border-graphite-800 rounded-2xl hover:border-gold-500/20 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center shrink-0 group-hover:bg-gold-500/20 transition-colors">
                    <Mail className="w-6 h-6 text-gold-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                    <p className="text-graphite-300 group-hover:text-gold-400 transition-colors">{siteConfig.email}</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-6 bg-graphite-900/50 border border-graphite-800 rounded-2xl">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-gold-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Address</h3>
                    <p className="text-graphite-300 leading-relaxed">{siteConfig.address.full}</p>
                  </div>
                </div>

                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-6 bg-green-600/10 border border-green-600/20 rounded-2xl hover:border-green-500/40 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-green-600/20 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">WhatsApp</h3>
                    <p className="text-green-400">Chat with us on WhatsApp</p>
                  </div>
                </a>
              </div>

              <div className="mt-8 aspect-video bg-graphite-900 rounded-2xl border border-graphite-800 overflow-hidden">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3888.721732398282!2d80.91034348990296!3d26.753920863195717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1785194706160!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Bariyan Group Location"
  />
</div>
            </div>

            <div className="bg-graphite-900/50 border border-graphite-800 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Send an Enquiry</h2>
              <Suspense fallback={<div className="animate-pulse space-y-4"><div className="h-12 bg-graphite-800 rounded-xl" /><div className="h-12 bg-graphite-800 rounded-xl" /><div className="h-32 bg-graphite-800 rounded-xl" /></div>}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
