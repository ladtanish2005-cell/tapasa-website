"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductCardProps {
  id: number;
  name: string;
  material: string;
  price: string;
  type: string;
  image: string;
  images?: string[];
}

export default function ProductCard({
  id,
  name,
  material,
  price,
  type,
  image,
  images,
}: ProductCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const galleryImages = images && images.length > 0 ? images : [image];
  const activeImage = galleryImages[currentImageIndex] || image;
  const normalizedImage = activeImage.startsWith("/") ? activeImage : `/${activeImage}`;
  const hasMultipleImages = galleryImages.length > 1;

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <Link href={`/products/${id}`} className="group block">
      <div
        className="overflow-hidden hover:opacity-95 transition-all duration-300 cursor-pointer h-full flex flex-col justify-between border border-neutral-800 hover:border-[#c9a84c]/50 rounded-sm"
        style={{ backgroundColor: "#29231f" }}
      >
        {/* Image Container */}
        <div className="relative h-72 w-full bg-neutral-900 overflow-hidden">
          <Image
            key={normalizedImage}
            src={normalizedImage}
            alt={`${name} - View ${currentImageIndex + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-all duration-500 group-hover:scale-105"
          />

          {hasMultipleImages && (
            <>
              {/* Left / Right Arrow Buttons */}
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous image"
                className="absolute left-2.5 top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-full bg-black/60 hover:bg-black/90 text-white hover:text-[#c9a84c] border border-white/20 transition-all opacity-0 group-hover:opacity-100 cursor-pointer shadow-md"
              >
                <ChevronLeft size={16} />
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next image"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-full bg-black/60 hover:bg-black/90 text-white hover:text-[#c9a84c] border border-white/20 transition-all opacity-0 group-hover:opacity-100 cursor-pointer shadow-md"
              >
                <ChevronRight size={16} />
              </button>

              {/* Indicator Dots */}
              <div className="absolute bottom-3 left-0 right-0 z-10 flex justify-center gap-1.5">
                {galleryImages.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setCurrentImageIndex(idx);
                    }}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      currentImageIndex === idx
                        ? "w-4 bg-[#c9a84c]"
                        : "w-1.5 bg-white/50 hover:bg-white"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Content Container */}
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-light text-white mb-2">{name}</h3>
            <p className="text-sm tracking-widest text-gray-400">{material}</p>
          </div>

          <p className="text-2xl font-light" style={{ color: "#c9a84c" }}>
            {price}
          </p>

          <button
            className="w-full py-4 border-t border-gray-700 flex items-center justify-between px-0 text-sm tracking-widest font-light hover:opacity-70 transition-opacity"
            style={{ color: "#c9a84c" }}
          >
            VIEW DETAILS
            <span className="text-xl">+</span>
          </button>
        </div>
      </div>
    </Link>
  );
}
