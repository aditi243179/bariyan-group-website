import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Phone,
  Mail,
  MessageCircle,
  Shield,
  Thermometer,
  Cog,
  Droplets,
  MapPin,
  ChevronRight,
  Search,
  Wrench,
  Truck,
  Factory,
  Zap,
  Award,
  Globe,
  Clock,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import { products, categories } from "@/data/products";
import { images, categoryImages } from "@/data/images";

const featuredProducts = products.slice(0, 6);

const applications = [
  {
    title: "Motorcycles",
    icon: Zap,
    description: "High-performance 4-stroke engine oils for bikes and scooters",
    image: images.motorcycle,
  },
  {
    title: "Passenger Vehicles",
    icon: Cog,
    description: "Premium multigrade oils for cars and SUVs",
    image: images.passengerCar,
  },
  {
    title: "Commercial Vehicles",
    icon: Truck,
    description: "Heavy-duty diesel engine oils for trucks and buses",
    image: images.commercialTruck,
  },
  {
    title: "Industrial Machinery",
    icon: Factory,
    description: "Hydraulic oils and industrial lubricants",
    image: images.industrial,
  },
  {
    title: "Hydraulic Systems",
    icon: Droplets,
    description: "Anti-wear hydraulic fluids for equipment",
    image: images.hydraulic,
  },
  {
    title: "Gear & Transmission",
    icon: Wrench,
    description: "EP gear oils and transmission fluids",
    image: images.gears,
  },
];

const whyBariyan = [
  { icon: Shield, title: "Wear Protection", description: "Advanced formulations that minimize engine and component wear." },
  { icon: Thermometer, title: "Thermal Performance", description: "Stable viscosity across extreme temperature ranges." },
  { icon: Droplets, title: "Corrosion Protection", description: "Superior rust and corrosion resistance for longer equipment life." },
  { icon: Award, title: "Quality Standards", description: "Products meeting API, SAE, MIL, and IS specifications." },
  { icon: Globe, title: "Pan-India Supply", description: "Reliable supply network across all of India." },
  { icon: Clock, title: "Since 2017", description: "Established expertise in lubrication solutions." },
];

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={images.hero}
            alt="Premium lubricant oil"
            fill
            className="object-cover opacity-30"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-graphite-950/80 via-graphite-950/70 to-graphite-950" />
        </div>

        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            <span className="text-gold-400 text-sm font-medium tracking-wide">Since 2017 &middot; Pan-India Supply</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight mb-6">
            ENGINEERED FOR{" "}
            <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 bg-clip-text text-transparent">
              PERFORMANCE
            </span>
            <span className="text-gold-500">.</span>
          </h1>

          <p className="text-xl md:text-2xl text-graphite-200 max-w-3xl mx-auto mb-4 font-light">
            Automotive & Industrial Lubrication Solutions Across India
          </p>
          <p className="text-graphite-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            Bariyan Group has been delivering premium lubricant products since 2017. 
            From motorcycle engine oils to industrial hydraulic fluids, we power performance 
            for businesses across India.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/products/"
              className="group px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-graphite-950 font-bold text-lg rounded-xl hover:from-gold-400 hover:to-gold-500 transition-all shadow-xl shadow-gold-500/20 hover:shadow-gold-500/40 flex items-center gap-3"
            >
              Explore Products
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact/"
              className="px-8 py-4 border border-graphite-600 text-white font-semibold text-lg rounded-xl hover:border-gold-500 hover:text-gold-400 transition-all flex items-center gap-3"
            >
              Get a Quote
            </Link>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-graphite-400">
            <a href={`https://wa.me/${siteConfig.phoneRaw}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-green-400 transition-colors">
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
            <span className="text-graphite-700">|</span>
            <a href={`tel:${siteConfig.phoneRaw}`} className="flex items-center gap-2 hover:text-gold-400 transition-colors">
              <Phone className="w-4 h-4" />
              {siteConfig.phone}
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-graphite-500">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gold-500 to-transparent" />
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-24 bg-graphite-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-4 block">About Bariyan Group</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Powering Performance Across{" "}
                <span className="text-gold-400">Automotive & Industrial</span>{" "}
                Applications
              </h2>
              <p className="text-graphite-300 text-lg leading-relaxed mb-6">
                Bariyan Group is an established Indian business operating since 2017, specializing in 
                automotive and industrial lubrication solutions with Pan-India supply capabilities.
              </p>
              <p className="text-graphite-400 leading-relaxed mb-8">
                The group comprises <strong className="text-white">Bariyan Oil & Lubricants Pvt. Ltd.</strong>, 
                a Private Limited Company focused on lubricant manufacturing and supply, and{" "}
                <strong className="text-white">Bariyan Trading and Multiservices</strong>, a Proprietorship 
                supporting the group&apos;s diverse business operations across India.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/about/" className="text-gold-400 hover:text-gold-300 font-semibold flex items-center gap-2 group">
                  Learn More About Us
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/companies/" className="text-graphite-400 hover:text-white font-medium flex items-center gap-2 group">
                  Group Companies
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-gold-500/20 to-gold-600/10 rounded-2xl blur-2xl" />
              <div className="relative bg-gradient-to-br from-graphite-900 to-graphite-800 rounded-2xl p-8 border border-graphite-700">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-graphite-950/50 rounded-xl border border-graphite-800">
                    <div className="text-4xl font-black text-gold-400 mb-2">2017</div>
                    <div className="text-graphite-400 text-sm">Established</div>
                  </div>
                  <div className="text-center p-6 bg-graphite-950/50 rounded-xl border border-graphite-800">
                    <div className="text-4xl font-black text-gold-400 mb-2">PAN</div>
                    <div className="text-graphite-400 text-sm">India Supply</div>
                  </div>
                  <div className="text-center p-6 bg-graphite-950/50 rounded-xl border border-graphite-800">
                    <div className="text-4xl font-black text-gold-400 mb-2">8+</div>
                    <div className="text-graphite-400 text-sm">Product Categories</div>
                  </div>
                  <div className="text-center p-6 bg-graphite-950/50 rounded-xl border border-graphite-800">
                    <div className="text-4xl font-black text-gold-400 mb-2">30+</div>
                    <div className="text-graphite-400 text-sm">Products</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section className="py-24 bg-gradient-to-b from-graphite-950 to-graphite-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-4 block">Our Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Solutions for Every Application
            </h2>
            <p className="text-graphite-400 max-w-2xl mx-auto">
              From motorcycle engines to heavy industrial machinery, Bariyan Group delivers 
              lubrication solutions engineered for peak performance.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/products/?category=${cat.id}`}
                className="group relative bg-graphite-900/50 border border-graphite-800 rounded-2xl overflow-hidden hover:border-gold-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={categoryImages[cat.id] || images.oilPouring}
                    alt={cat.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-graphite-900 via-graphite-900/50 to-transparent" />
                </div>
                <div className="relative p-6 -mt-8">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-4 group-hover:bg-gold-500/20 transition-colors">
                    <Search className="w-6 h-6 text-gold-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold-400 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-graphite-400 text-sm leading-relaxed mb-4">
                    {cat.description}
                  </p>
                  <span className="text-gold-500 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Explore Products <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-24 bg-graphite-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <div>
              <span className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-4 block">Featured</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Engineered to Perform
              </h2>
            </div>
            <Link
              href="/products/"
              className="text-gold-400 hover:text-gold-300 font-semibold flex items-center gap-2 group"
            >
              View All Products
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
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
                  <div className="flex items-center gap-3 mb-3">
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
                      className="text-sm font-semibold text-white hover:text-gold-400 transition-colors"
                    >
                      View Details
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
        </div>
      </section>

      {/* WHY BARIYAN */}
      <section className="py-24 bg-gradient-to-b from-graphite-900 to-graphite-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-4 block">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Performance You Can Rely On
            </h2>
            <p className="text-graphite-400 max-w-2xl mx-auto">
              Every Bariyan product is formulated to deliver consistent, reliable performance 
              under the most demanding conditions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyBariyan.map((item) => (
              <div
                key={item.title}
                className="group p-8 bg-graphite-950/50 border border-graphite-800 rounded-2xl hover:border-gold-500/20 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gold-500/10 flex items-center justify-center mb-6 group-hover:bg-gold-500/20 transition-colors">
                  <item.icon className="w-7 h-7 text-gold-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-graphite-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="py-24 bg-graphite-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-4 block">Industries</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Built for Every Industry
            </h2>
            <p className="text-graphite-400 max-w-2xl mx-auto">
              Our lubrication solutions power diverse industries across the automotive and industrial sectors.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app) => (
              <Link
                key={app.title}
                href="/industries/"
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden"
              >
                <Image
                  src={app.image}
                  alt={app.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite-950 via-graphite-950/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-gold-500/20 backdrop-blur-sm flex items-center justify-center">
                      <app.icon className="w-5 h-5 text-gold-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{app.title}</h3>
                  </div>
                  <p className="text-graphite-300 text-sm">{app.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SINCE 2017 */}
      <section className="py-24 bg-gradient-to-b from-graphite-950 to-graphite-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold-500 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
              Powering Performance{" "}
              <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">
                Since 2017
              </span>
            </h2>
            <p className="text-xl text-graphite-300 max-w-3xl mx-auto leading-relaxed">
              Since our establishment in 2017, Bariyan Group has been committed to delivering 
              premium lubrication solutions to businesses across India. Our focus on quality, 
              performance, and reliability has made us a trusted partner for distributors, 
              dealers, and industrial buyers nationwide.
            </p>
          </div>
        </div>
      </section>

      {/* PAN INDIA */}
      <section className="py-24 bg-graphite-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-4 block">Nationwide Reach</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Supplying Performance{" "}
                <span className="text-gold-400">Across India</span>
              </h2>
              <p className="text-graphite-300 text-lg leading-relaxed mb-6">
                Bariyan Group operates as a Pan-India supplier, ensuring businesses from every 
                corner of the country have access to our premium lubricant products. Our supply 
                network is designed to meet the demands of distributors, dealers, fleet operators, 
                and industrial buyers nationwide.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-graphite-900 border border-graphite-800 rounded-lg text-graphite-300 text-sm">
                  Pan-India Distribution
                </span>
                <span className="px-4 py-2 bg-graphite-900 border border-graphite-800 rounded-lg text-graphite-300 text-sm">
                  Bulk Supply
                </span>
                <span className="px-4 py-2 bg-graphite-900 border border-graphite-800 rounded-lg text-graphite-300 text-sm">
                  B2B Partnerships
                </span>
                <span className="px-4 py-2 bg-graphite-900 border border-graphite-800 rounded-lg text-graphite-300 text-sm">
                  Institutional Supply
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/20 to-gold-600/5 rounded-full blur-3xl" />
                <div className="relative bg-graphite-900 border border-graphite-800 rounded-3xl p-8 h-full flex flex-col items-center justify-center">
                  <Globe className="w-24 h-24 text-gold-400/30 mb-6" />
                  <h3 className="text-3xl font-black text-white mb-2">PAN INDIA</h3>
                  <p className="text-graphite-400 text-center">Supply Network</p>
                  <div className="mt-8 grid grid-cols-2 gap-4 w-full">
                    <div className="text-center p-4 bg-graphite-950/50 rounded-xl">
                      <MapPin className="w-5 h-5 text-gold-400 mx-auto mb-2" />
                      <div className="text-white font-semibold text-sm">All Regions</div>
                    </div>
                    <div className="text-center p-4 bg-graphite-950/50 rounded-xl">
                      <Truck className="w-5 h-5 text-gold-400 mx-auto mb-2" />
                      <div className="text-white font-semibold text-sm">Reliable Delivery</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GROUP COMPANIES */}
      <section className="py-24 bg-gradient-to-b from-graphite-900 to-graphite-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-4 block">Our Structure</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              One Group. Multiple Business Capabilities.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {siteConfig.companies.map((company) => (
              <div
                key={company.name}
                className="group bg-graphite-950/50 border border-graphite-800 rounded-2xl p-8 hover:border-gold-500/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center mb-6">
                  <Award className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{company.name}</h3>
                <span className="inline-block px-3 py-1 bg-gold-500/10 text-gold-400 text-xs font-semibold rounded-full mb-4">
                  {company.type}
                </span>
                <p className="text-graphite-400 leading-relaxed mb-6">{company.description}</p>
                <Link
                  href="/companies/"
                  className="text-gold-400 hover:text-gold-300 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  Learn More <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DISTRIBUTOR CTA */}
      <section className="py-24 bg-graphite-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gold-500/5 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Grow With <span className="text-gold-400">Bariyan</span>
          </h2>
          <p className="text-xl text-graphite-300 mb-8 max-w-2xl mx-auto">
            Interested in distributing Bariyan products in your market? Join our growing 
            network of distributors and dealers across India.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/distributor/"
              className="px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-graphite-950 font-bold rounded-xl hover:from-gold-400 hover:to-gold-500 transition-all shadow-xl shadow-gold-500/20"
            >
              Become a Distributor
            </Link>
            <Link
              href="/contact/"
              className="px-8 py-4 border border-graphite-600 text-white font-semibold rounded-xl hover:border-gold-500 hover:text-gold-400 transition-all"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* CATALOGUE CTA */}
      <section className="py-24 bg-gradient-to-b from-graphite-950 to-graphite-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Explore Our Complete Product Range
          </h2>
          <p className="text-graphite-300 mb-8 max-w-2xl mx-auto">
            Browse our full catalogue of automotive and industrial lubricants, additives, 
            and specialty products.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/products/"
              className="px-8 py-4 bg-white text-graphite-950 font-bold rounded-xl hover:bg-graphite-100 transition-all"
            >
              Browse Products
            </Link>
            <Link
              href="/catalogue/"
              className="px-8 py-4 border border-graphite-600 text-white font-semibold rounded-xl hover:border-gold-500 hover:text-gold-400 transition-all"
            >
              View Catalogue
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-graphite-950 border-t border-graphite-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Let&apos;s Power Performance{" "}
            <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">
              Together
            </span>
            <span className="text-gold-500">.</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
            <a href={`tel:${siteConfig.phoneRaw}`} className="flex items-center gap-3 text-xl text-white hover:text-gold-400 transition-colors">
              <Phone className="w-6 h-6 text-gold-400" />
              {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-xl text-white hover:text-gold-400 transition-colors">
              <Mail className="w-6 h-6 text-gold-400" />
              {siteConfig.email}
            </a>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact/"
              className="px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-graphite-950 font-bold rounded-xl hover:from-gold-400 hover:to-gold-500 transition-all shadow-xl shadow-gold-500/20"
            >
              Get a Quote
            </Link>
            <a
              href={`https://wa.me/${siteConfig.phoneRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-500 transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="px-8 py-4 border border-graphite-600 text-white font-semibold rounded-xl hover:border-gold-500 hover:text-gold-400 transition-all"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
