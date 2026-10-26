"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, ShieldCheck, Truck, Sparkles, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import products from "@/data/products.json";

interface Product {
  id: number;
  name: string;
  material: string;
  price: string;
  type: string;
  image: string;
  images?: string[];
}

const VEDA_IMAGES = [
  "/images/veda-1-1.jpg"
];

export default function ProductDetailView({ product = products[0] }: { product?: Product }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedFinish, setSelectedFinish] = useState("Artisanal Walnut");
  const [inquirySent, setInquirySent] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const galleryImages = [product?.image || "/images/veda-1-1.jpg"];
  const activeImage = galleryImages[currentImageIndex];
  const imageSrc = activeImage.startsWith("/")
    ? activeImage
    : `/${activeImage}`;
  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.type === product.type)
    .slice(0, 3);

  const fallbackRelated =
    relatedProducts.length > 0
      ? relatedProducts
      : products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#111111] text-white">
      {/* Breadcrumb & Navigation */}
      <div className="border-b border-neutral-800 bg-[#161616]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-gray-400 hover:text-[#c9a84c] transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Collection
          </Link>
          <span className="text-xs uppercase tracking-widest text-[#c9a84c]">
            {product.type} Collection
          </span>
        </div>
      </div>

      {/* Main Product Showcase */}
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Image Showcase */}
          <div className="space-y-4">
            <div className="relative aspect-4/3 w-full bg-neutral-900 rounded-sm overflow-hidden border border-neutral-800 shadow-2xl group">
              <Image
                key={imageSrc}
                src={imageSrc}
                alt={`${product.name} - View ${currentImageIndex + 1}`}
                fill
                priority
                className="object-cover transition-all duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {galleryImages.length > 1 && (
                <>
                  {/* Left / Right Arrow Buttons */}
                  <button
                    type="button"
                    onClick={handlePrevImage}
                    aria-label="Previous image"
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-neutral-700 text-white hover:text-[#c9a84c] transition-all cursor-pointer shadow-lg opacity-80 group-hover:opacity-100"
                  >
                    <ChevronLeft size={20} />
                  </button>

                  <button
                    type="button"
                    onClick={handleNextImage}
                    aria-label="Next image"
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-neutral-700 text-white hover:text-[#c9a84c] transition-all cursor-pointer shadow-lg opacity-80 group-hover:opacity-100"
                  >
                    <ChevronRight size={20} />
                  </button>

                  {/* Slide Counter Badge */}
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-neutral-700 text-[11px] uppercase tracking-wider text-gray-300">
                    {currentImageIndex + 1} / {galleryImages.length}
                  </div>

                  {/* Dot Indicators */}
                  <div className="absolute bottom-4 left-0 right-0 z-10 flex justify-center gap-2">
                    {galleryImages.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setCurrentImageIndex(idx)}
                        aria-label={`Select image ${idx + 1}`}
                        className={`h-1.5 rounded-full transition-all cursor-pointer ${currentImageIndex === idx
                          ? "w-6 bg-[#c9a84c]"
                          : "w-1.5 bg-white/50 hover:bg-white"
                          }`}
                      />
                    ))}
                  </div>
                </>
              )}

              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                aria-label="Save to Wishlist"
                className="absolute top-4 right-4 p-3 rounded-full bg-black/60 backdrop-blur-md border border-neutral-700 text-white hover:text-[#c9a84c] transition cursor-pointer z-10"
              >
                <Heart
                  size={20}
                  className={
                    isWishlisted ? "fill-[#c9a84c] text-[#c9a84c]" : ""
                  }
                />
              </button>
            </div>

            {/* Thumbnail Row */}
            {galleryImages.length > 1 && (
              <div className="grid grid-cols-4 gap-3 pt-2">
                {galleryImages.map((img, idx) => {
                  const thumbSrc = img.startsWith("/") ? img : `/${img}`;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`relative aspect-4/3 rounded-sm overflow-hidden border transition-all cursor-pointer ${currentImageIndex === idx
                        ? "border-[#c9a84c] ring-1 ring-[#c9a84c]"
                        : "border-neutral-800 opacity-60 hover:opacity-100"
                        }`}
                    >
                      <Image
                        src={thumbSrc}
                        alt={`${product.name} thumbnail ${idx + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 25vw, 12vw"
                      />
                    </button>
                  );
                })}
              </div>
            )}

            <p className="text-xs text-gray-500 text-center tracking-wider uppercase font-light">
              Hand-finished solid wood · Made to order in India
            </p>
          </div>

          {/* Details & Actions */}
          <div className="flex flex-col space-y-8">
            <div>
              <span className="text-xs tracking-widest text-[#c9a84c] uppercase font-light">
                Tapasa Signature Series
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-white mt-2 mb-3">
                {product.name}
              </h1>
              <p className="text-sm tracking-wider text-gray-400 font-light">
                {product.material}
              </p>
            </div>

            {/* Dynamic Content: Swaps between Price/Description and Technical Specifications */}
            {currentImageIndex === 1 ? (
              <div className="space-y-6 text-stone-200 py-2">
                <div>
                  <span className="text-xs tracking-widest text-[#c9a84c] uppercase font-medium">
                    TECHNICAL SPECIFICATIONS
                  </span>
                  <h2 className="text-xl font-light text-amber-100 mt-1">Overall Dimensions</h2>
                  <div className="grid grid-cols-3 gap-4 mt-3 p-4 bg-stone-900/60 rounded-lg border border-stone-800 text-center">
                    <div>
                      <p className="text-xs text-stone-400 uppercase">Width</p>
                      <p className="text-2xl font-semibold text-[#c9a84c]">1800</p>
                      <p className="text-xs text-stone-500">mm</p>
                    </div>
                    <div>
                      <p className="text-xs text-stone-400 uppercase">Depth</p>
                      <p className="text-2xl font-semibold text-[#c9a84c]">700</p>
                      <p className="text-xs text-stone-500">mm</p>
                    </div>
                    <div>
                      <p className="text-xs text-stone-400 uppercase">Height</p>
                      <p className="text-2xl font-semibold text-[#c9a84c]">750</p>
                      <p className="text-xs text-stone-500">mm</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-stone-300 mb-2">Component Dimensions</h3>
                  <div className="space-y-2 text-xs divide-y divide-stone-800/60 bg-stone-900/40 p-3 rounded-lg border border-stone-800/80">
                    <div className="flex justify-between pt-1"><span className="text-stone-400">Seating section width</span><span className="text-amber-200">1000 mm</span></div>
                    <div className="flex justify-between pt-1"><span className="text-stone-400">Bookshelf section width</span><span className="text-amber-200">800 mm</span></div>
                    <div className="flex justify-between pt-1"><span className="text-stone-400">Seat height from floor</span><span className="text-amber-200">420 mm</span></div>
                    <div className="flex justify-between pt-1"><span className="text-stone-400">Seat depth</span><span className="text-amber-200">500–550 mm</span></div>
                    <div className="flex justify-between pt-1"><span className="text-stone-400">Backrest height above seat</span><span className="text-amber-200">300–330 mm</span></div>
                    <div className="flex justify-between pt-1"><span className="text-stone-400">Wooden frame thickness</span><span className="text-amber-200">35–50 mm</span></div>
                    <div className="flex justify-between pt-1"><span className="text-stone-400">Leg height</span><span className="text-amber-200">150 mm</span></div>
                    <div className="flex justify-between pt-1"><span className="text-stone-400">Shelf depth</span><span className="text-amber-200">250–300 mm</span></div>
                    <div className="flex justify-between pt-1"><span className="text-stone-400">Lower shelf opening height</span><span className="text-amber-200">180–220 mm</span></div>
                    <div className="flex justify-between pt-1"><span className="text-stone-400">Upper shelf opening height</span><span className="text-amber-200">100–150 mm</span></div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="border-y border-neutral-800 py-4 flex items-baseline justify-between">
                  <div>
                    <span className="text-xs text-gray-500 tracking-wider block mb-1">PRICE (INCL. TAXES)</span>
                    <span className="text-3xl font-light text-[#c9a84c]">{product.price}</span>
                  </div>
                  <span className="text-xs text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-3 py-1 rounded-full">
                    Available to Order
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed">
                  Every detail of the {product.name} is meticulously considered. Crafted with sustainably sourced hardwoods and solid joinery techniques, this piece pairs artisanal balance with daily durability.
                </p>
              </div>
            )}
            {/* Finish Selection */}
            <div>
              <label className="text-xs text-gray-400 tracking-widest uppercase block mb-3 font-medium">
                Wood Finish
              </label>
              <div className="grid grid-cols-2 gap-3">
                {["Artisanal Walnut", "Natural White Oak"].map((finish) => (
                  <button
                    key={finish}
                    onClick={() => setSelectedFinish(finish)}
                    className={`py-3 px-4 text-xs tracking-wider text-left border transition cursor-pointer ${selectedFinish === finish
                      ? "border-[#c9a84c] bg-[#c9a84c]/10 text-white"
                      : "border-neutral-800 bg-neutral-900/50 text-gray-400 hover:border-neutral-700"
                      }`}
                  >
                    {finish}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and CTA */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-4">
                <span className="text-xs text-gray-400 tracking-widest uppercase">
                  Qty:
                </span>
                <div className="flex items-center border border-neutral-800 bg-neutral-900">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-gray-400 hover:text-white cursor-pointer"
                  >
                    -
                  </button>
                  <span className="px-4 text-sm font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-gray-400 hover:text-white cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              {inquirySent ? (
                <div className="p-4 bg-emerald-950/70 border border-emerald-700 text-emerald-200 text-sm flex items-center gap-3">
                  <Check size={20} className="text-emerald-400 shrink-0" />
                  <span>
                    Thank you! An inquiry for {quantity}x {product.name} ({selectedFinish}) has been submitted. Our concierge will contact you within 24 hours.
                  </span>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => setInquirySent(true)}
                    className="flex-1 py-4 bg-[#c9a84c] text-neutral-950 font-semibold text-xs tracking-widest uppercase hover:bg-amber-400 transition cursor-pointer shadow-lg"
                  >
                    Request Custom Inquiry
                  </button>
                  <Link
                    href="/#contact"
                    className="py-4 px-6 border border-neutral-700 text-gray-300 font-medium text-xs tracking-widest uppercase hover:bg-neutral-800 transition text-center"
                  >
                    Visit Showroom
                  </Link>
                </div>
              )}
            </div>

            {/* Guarantees */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-neutral-800">
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <ShieldCheck size={18} className="text-[#c9a84c] shrink-0" />
                <span>10-Yr Guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Truck size={18} className="text-[#c9a84c] shrink-0" />
                <span>White Glove Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Sparkles size={18} className="text-[#c9a84c] shrink-0" />
                <span>Custom Joinery</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-24 pt-12 border-t border-neutral-800">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-serif text-white">Curated Pairings</h2>
            <Link
              href="/products"
              className="text-xs text-[#c9a84c] hover:underline uppercase tracking-widest"
            >
              View Full Collection
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fallbackRelated.map((item) => (
              <Link
                key={item.id}
                href={`/products/${item.id}`}
                className="group bg-[#1e1b18] border border-neutral-800 hover:border-[#c9a84c]/50 transition overflow-hidden"
              >
                <div className="relative aspect-4/3 w-full bg-neutral-900">
                  <Image
                    src={
                      item.image.startsWith("/") ? item.image : `/${item.image}`
                    }
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm text-white font-light mb-1">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#c9a84c]">{item.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
