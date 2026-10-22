"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import productsData from "@/data/products.json";

export default function ProductsSection() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [carouselIndices, setCarouselIndices] = useState<Record<number, number>>({});

  // Take the first 6 featured products
  const featuredProducts = productsData.slice(0, 6);

  return (
    <section id="collection" className="bg-amber-50 py-20 px-6 scroll-mt-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-[#C9A84C] text-sm font-light tracking-widest mb-4">
            THE COLLECTION
          </p>
          <h2 className="text-4xl md:text-5xl font-thin text-neutral-900 max-w-2xl">
            Our Finest Pieces
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProducts.map((product) => {
            const productImages =
              "images" in product &&
              Array.isArray(product.images) &&
              product.images.length > 0
                ? (product.images as string[])
                : [product.image];
            const currentIdx = carouselIndices[product.id] || 0;
            const activeImage = productImages[currentIdx] || product.image;
            const imageSrc = activeImage.startsWith("/")
              ? activeImage
              : `/${activeImage}`;
            const hasMultiple = productImages.length > 1;

            return (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group cursor-pointer block"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                {/* Image Container */}
                <div className="relative bg-neutral-200 h-80 overflow-hidden mb-0">
                  <Image
                    key={imageSrc}
                    src={imageSrc}
                    alt={`${product.name} - View ${currentIdx + 1}`}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    width={500}
                    height={500}
                  />

                  {hasMultiple && (
                    <>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setCarouselIndices((prev) => ({
                            ...prev,
                            [product.id]:
                              currentIdx === 0
                                ? productImages.length - 1
                                : currentIdx - 1,
                          }));
                        }}
                        aria-label="Previous image"
                        className="absolute left-2.5 top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-full bg-black/60 hover:bg-black/90 text-white hover:text-[#c9a84c] border border-white/20 transition-all opacity-0 group-hover:opacity-100 cursor-pointer shadow-md"
                      >
                        <ChevronLeft size={16} />
                      </button>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setCarouselIndices((prev) => ({
                            ...prev,
                            [product.id]:
                              currentIdx === productImages.length - 1
                                ? 0
                                : currentIdx + 1,
                          }));
                        }}
                        aria-label="Next image"
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-full bg-black/60 hover:bg-black/90 text-white hover:text-[#c9a84c] border border-white/20 transition-all opacity-0 group-hover:opacity-100 cursor-pointer shadow-md"
                      >
                        <ChevronRight size={16} />
                      </button>

                      {/* Dot Indicators */}
                      <div className="absolute bottom-3 left-0 right-0 z-10 flex justify-center gap-1.5">
                        {productImages.map((_, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              setCarouselIndices((prev) => ({
                                ...prev,
                                [product.id]: idx,
                              }));
                            }}
                            aria-label={`Go to image ${idx + 1}`}
                            className={`h-1.5 rounded-full transition-all cursor-pointer ${
                              currentIdx === idx
                                ? "w-4 bg-[#c9a84c]"
                                : "w-1.5 bg-white/60 hover:bg-white"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Product Info */}
                <div className="bg-[#8b5f3b] px-6 py-6 transition-all duration-300 group-hover:bg-[#7a5232]">
                  <h3 className="text-white text-lg font-light mb-1 pr-6 truncate">
                    {product.name}
                  </h3>
                  <p className="text-amber-200/80 text-xs mb-4 font-light">
                    {product.price}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-amber-100 text-xs font-light tracking-widest uppercase group-hover:text-white transition-colors">
                      View Details
                    </span>
                    <span
                      className={`text-white text-xl font-light transition-transform duration-300 ${
                        hoveredProduct === product.id ? "translate-x-1" : ""
                      }`}
                    >
                      +
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Link
            href="/products"
            className="inline-block bg-neutral-900 text-white px-8 py-4 font-light tracking-widest uppercase text-xs hover:bg-[#C9A84C] hover:text-black transition-colors duration-300 shadow-md"
          >
            View Full Collection
          </Link>
        </div>
      </div>
    </section>
  );
}
