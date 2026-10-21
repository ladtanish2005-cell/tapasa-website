"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import ProductCard from "@/components/product-card";
import products from "@/data/products.json";

type FilterType = "all" | "seating" | "tables" | "storage";

const filters: { label: string; value: FilterType }[] = [
  { label: "ALL", value: "all" },
  { label: "SEATING", value: "seating" },
  { label: "TABLES", value: "tables" },
  { label: "STORAGE", value: "storage" },
];

export default function AllProducts() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filteredProducts = useMemo(() => {
    if (activeFilter === "all") {
      return products;
    }
    return products.filter((product) => product.type === activeFilter);
  }, [activeFilter]);

  return (
    <section
      className="w-full min-h-screen py-20 px-4 md:px-8"
      style={{ backgroundColor: "#1a1a1a" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Filter Buttons */}
        <div className="flex gap-8 mb-16 justify-center md:justify-start">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className="text-sm tracking-widest font-light transition-all duration-300"
              style={{
                color: activeFilter === filter.value ? "#c9a84c" : "#666666",
              }}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Back to Home Link */}
        <div className="flex justify-center mt-20">
          <Link
            href="/"
            className="text-sm tracking-widest font-light transition-colors hover:underline"
            style={{ color: "#c9a84c" }}
          >
            ← BACK TO HOME
          </Link>
        </div>
      </div>
    </section>
  );
}
