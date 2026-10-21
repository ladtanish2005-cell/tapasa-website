"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProductLink {
  name: string;
  id: number;
}

interface RoomData {
  name: string;
  tagline: string;
  products: ProductLink[];
  image: string;
}

const rooms: Record<string, RoomData> = {
  living: {
    name: "The Living Room",
    tagline: "Sleek low-profile silhouettes and rich figured walnut tones.",
    products: [
      { name: "Veda 2 Sectioned Sofa", id: 2 },
      { name: "TPS Signature Armchair", id: 3 },
      { name: "Setu Study Desk", id: 4 },
    ],
    image: "/hero2-room-showcase.png",
  },
  bedroom: {
    name: "The Bedroom Sanctuary",
    tagline: "Serene craftsmanship designed for restorative quiet and tactile comfort.",
    products: [
      { name: "Kosha Cube Nightstand", id: 8 },
      { name: "Mitra Pet Nightstand", id: 9 },
      { name: "Jharna Study Table Set", id: 5 },
    ],
    image: "/product-furniture.png",
  },
};

export default function Hero2Section() {
  const [activeRoom, setActiveRoom] = useState<"living" | "bedroom">("living");
  const currentRoom = rooms[activeRoom];

  return (
    <section id="showcase" className="bg-[#181818] py-16 lg:py-24 border-t border-neutral-800 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="mb-10">
          <p className="text-xs tracking-widest text-[#C9A84C] uppercase mb-2 font-medium">
            ROOM SHOWCASE — CURATED INTERIORS
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-serif font-light mb-4 leading-tight">
            See how it lives{" "}
            <span className="text-[#C9A84C] italic font-serif">
              in your home.
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl text-sm md:text-base leading-relaxed font-light">
            Two curated concepts, six signature pieces. Click any highlighted piece below to inspect materials and dimensions.
          </p>
        </div>

        {/* Room Switcher Tabs */}
        <div className="flex gap-8 mb-8 border-b border-neutral-800">
          {Object.entries(rooms).map(([key, room]) => (
            <button
              key={key}
              onClick={() => setActiveRoom(key as "living" | "bedroom")}
              className={`pb-4 text-xs tracking-widest uppercase transition-all relative ${
                activeRoom === key
                  ? "text-white font-medium"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              {key === "living" ? "The Living Room" : "The Bedroom Sanctuary"}
              {activeRoom === key && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C9A84C]" />
              )}
            </button>
          ))}
        </div>

        {/* Current Room Products Strip */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-neutral-900/60 p-4 border border-neutral-800">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#C9A84C] block mb-1">
              {currentRoom.name}
            </span>
            <p className="text-xs text-gray-400 font-light">{currentRoom.tagline}</p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] text-gray-500 uppercase tracking-wider mr-1">
              Included:
            </span>
            {currentRoom.products.map((prod, idx) => (
              <Link
                key={prod.id}
                href={`/products/${prod.id}`}
                className="inline-flex items-center gap-1 text-xs text-gray-300 hover:text-[#C9A84C] bg-neutral-800 px-3 py-1.5 rounded-sm transition"
              >
                <span>{prod.name}</span>
                <ArrowRight size={12} className="text-[#C9A84C]" />
              </Link>
            ))}
          </div>
        </div>

        {/* Showcase Image Display */}
        <div className="relative w-full h-[400px] md:h-[520px] lg:h-[600px] overflow-hidden rounded-sm border border-neutral-800 shadow-2xl bg-neutral-900">
          <Image
            key={currentRoom.image}
            src={currentRoom.image}
            alt={currentRoom.name}
            fill
            className="object-cover transition-opacity duration-700 animate-in fade-in"
            sizes="(max-width: 1280px) 100vw, 1280px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between pointer-events-auto">
            <span className="text-xs text-white/90 bg-black/60 backdrop-blur-md px-4 py-2 border border-white/10 uppercase tracking-widest">
              TAPASA Bespoke Architecture
            </span>
            <Link
              href="/products"
              className="text-xs text-black bg-[#C9A84C] hover:bg-amber-400 font-medium px-5 py-2 uppercase tracking-widest transition shadow-lg"
            >
              Shop Curated Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
