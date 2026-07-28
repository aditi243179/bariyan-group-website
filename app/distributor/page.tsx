"use client";

import { useState } from "react";
import Link from "next/link";
import { Truck, Package, Globe, Award, MessageCircle, Send } from "lucide-react";
import { siteConfig } from "@/data/site";

const benefits = [
  { icon: Package, title: "Comprehensive Portfolio", description: "Access to 30+ automotive and industrial lubricant products." },
  { icon: Truck, title: "Pan-India Supply", description: "Reliable supply network supporting distribution across India." },
  { icon: Award, title: "Quality Products", description: "Products meeting API, SAE, MIL, and IS standards." },
  { icon: Globe, title: "Established Brand", description: "Partner with a business operating since 2017." },
];

export default function DistributorPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappUrl = `https://wa.me/${siteConfig.phoneRaw}?text=${encodeURIComponent("Hello Bariyan Group, I am interested in becoming a distributor/dealer. Please share more information.")}`;

  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-b from-graphite-900 to-graphite-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-4 block">Partnership</span>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
              Become a <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">Bariyan</span> Business Partner
            </h1>
            <p className="text-xl text-graphite-300 leading-relaxed">
              Explore opportunities to distribute Bariyan automotive and industrial lubricant products in your market.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-graphite-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Why Partner With Bariyan?</h2>
              <div className="space-y-6">
                {benefits.map((b) => (
                  <div key={b.title} className="flex items-start gap-4 p-6 bg-graphite-900/50 border border-graphite-800 rounded-2xl">
                    <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center shrink-0">
                      <b.icon className="w-6 h-6 text-gold-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{b.title}</h3>
                      <p className="text-graphite-400">{b.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-500 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  Enquire on WhatsApp
                </a>
              </div>
            </div>

            <div className="bg-graphite-900/50 border border-graphite-800 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Partnership Enquiry</h2>
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Thank You</h3>
                  <p className="text-graphite-400">Your enquiry has been received. Our team will contact you shortly.</p>
                  <p className="text-graphite-500 text-sm mt-4">Note: Form backend integration required. Configure EMAIL_SERVICE in .env.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {[
                    { name: "fullName", label: "Full Name", type: "text", required: true },
                    { name: "businessName", label: "Business Name", type: "text", required: true },
                    { name: "phone", label: "Phone", type: "tel", required: true },
                    { name: "whatsapp", label: "WhatsApp", type: "tel", required: false },
                    { name: "email", label: "Email", type: "email", required: true },
                    { name: "city", label: "City", type: "text", required: true },
                    { name: "state", label: "State", type: "text", required: true },
                    { name: "businessType", label: "Business Type", type: "text", required: false },
                    { name: "existingBusiness", label: "Existing Business", type: "text", required: false },
                    { name: "productsInterested", label: "Products Interested In", type: "text", required: false },
                    { name: "expectedRequirement", label: "Expected Requirement", type: "text", required: false },
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
                    Submit Partnership Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
