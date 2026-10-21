"use client";

import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  id: number;
  name: string;
  material: string;
  price: string;
  type: string;
  image: string;
}

export default function ProductCard({
  id,
  name,
  material,
  price,
  type,
  image,
}: ProductCardProps) {
  const typeLabel = type.charAt(0).toUpperCase() + type.slice(1);
  const normalizedImage = image.startsWith("/") ? image : `/${image}`;

  return (
    <Link href={`/products/${id}`} className="group block">
      <div
        className="overflow-hidden hover:opacity-95 transition-all duration-300 cursor-pointer h-full flex flex-col justify-between border border-neutral-800 hover:border-[#c9a84c]/50 rounded-sm"
        style={{ backgroundColor: "#29231f" }}
      >
        {/* Image Container */}
        <div className="relative h-72 w-full bg-neutral-900 overflow-hidden">
          <Image
            src={normalizedImage}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
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
