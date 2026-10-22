"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, MapPin, Clock, Phone, ExternalLink } from "lucide-react";

export default function LocationsSection() {
  const roomProducts = [
    {
      id: 1,
      title: "Veda 1 Sectioned Sofa",
      category: "SOFA - LIVING",
    },
    {
      id: 3,
      title: "TPS Signature Armchair",
      category: "SOFA - LIVING",
    },
    {
      id: 4,
      title: "Setu Study Desk",
      category: "TABLES - STUDY",
    },
  ];

  const showrooms = [
    {
      city: "Mumbai Flagship",
      address: "Jogeshwari West, Near Station, S.V. Road, Mumbai 400102",
      hours: "MON – SAT 10:00 – 20:00",
      phone: "+91 8976301959 / +91 9920748812",
      mapUrl: "https://maps.google.com/?q=Jogeshwari+West+Mumbai",
    },
  ];

  return (
    <section id="stores" className="bg-[#F5F0E8] scroll-mt-12">
      {/* Product Strip */}
      <div className="border-b border-[#D4C4A8]">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center gap-6 overflow-x-auto pb-2 scrollbar-none">
            <span className="text-xs text-[#A0826D] uppercase tracking-widest font-medium shrink-0">
              Featured In Showrooms:
            </span>
            {roomProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="shrink-0 bg-white px-5 py-3 border border-[#D4C4A8]/60 hover:border-neutral-900 transition flex items-center gap-4 group"
              >
                <div>
                  <h4 className="text-sm font-serif text-neutral-900 group-hover:text-[#A0826D] transition-colors">
                    {product.title}
                  </h4>
                  <p className="text-[10px] text-[#A0826D] uppercase tracking-wider">
                    {product.category}
                  </p>
                </div>
                <span className="p-1 border border-neutral-300 group-hover:bg-neutral-900 group-hover:text-white transition">
                  <ChevronRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
        {/* Header */}
        <div className="mb-14">
          <span className="text-xs text-[#A0826D] uppercase tracking-widest font-medium">
            FIND US
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mt-2 mb-4">
            Our Showrooms
          </h2>
          <p className="text-gray-700 max-w-2xl leading-relaxed font-light">
            Visit our curated spaces and experience Tapasa in person. Touch the hand-finished solid hardwoods, test the ergonomics, and consult with our resident architects.
          </p>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white border border-[#D4C4A8] shadow-sm overflow-hidden">
          {/* Left: Locations Info */}
          <div className="space-y-8 p-8 md:p-10 flex flex-col justify-between">
            <div className="space-y-8">
              {showrooms.map((showroom) => (
                <div key={showroom.city}>
                  <div className="flex items-start gap-4 mb-3">
                    <MapPin className="text-[#A0826D] shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="text-2xl font-serif text-neutral-900">
                        {showroom.city}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                        {showroom.address}
                      </p>
                    </div>
                  </div>

                  <div className="ml-10 space-y-1 text-xs text-gray-500 font-medium">
                    <p className="flex items-center gap-2">
                      <Clock size={13} className="text-[#A0826D]" />
                      {showroom.hours}
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone size={13} className="text-[#A0826D]" />
                      {showroom.phone}
                    </p>
                  </div>

                  <div className="ml-10 mt-4 flex items-center gap-4">
                    <a
                      href={showroom.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-neutral-900 uppercase tracking-widest font-semibold hover:text-[#A0826D] transition-colors border-b border-neutral-900 pb-0.5"
                    >
                      <span>Open in Maps</span>
                      <ExternalLink size={12} />
                    </a>
                    <a
                      href="#contact"
                      className="inline-flex items-center text-xs text-[#A0826D] uppercase tracking-widest font-semibold hover:underline"
                    >
                      Book Private Visit
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="#contact"
                className="inline-block px-8 py-3.5 bg-neutral-900 text-white text-xs uppercase tracking-widest hover:bg-[#A0826D] transition-colors"
              >
                Schedule Design Consultation
              </a>
            </div>
          </div>

          {/* Right: Showroom Experience Visual */}
          <div className="relative min-h-[380px] lg:min-h-full bg-neutral-900 overflow-hidden flex flex-col justify-end p-8 text-white">
            <Image
              src="/about-showroom.png"
              alt="Tapasa Flagship Showroom Experience"
              fill
              className="object-cover opacity-80 hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="relative z-10 space-y-2">
              <span className="text-[11px] tracking-widest uppercase text-[#C9A84C] font-semibold">
                Atmosphere & Consultation
              </span>
              <h4 className="text-xl font-serif">
                Private Viewing Rooms Available
              </h4>
              <p className="text-xs text-gray-300 font-light max-w-sm">
                Reserve a complimentary 1-on-1 session with our lead interior consultants to visualize finish palettes and custom dimensions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
