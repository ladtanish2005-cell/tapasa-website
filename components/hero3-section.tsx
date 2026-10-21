"use client";

export default function Hero3Section() {
  return (
    <section className="relative w-full flex items-center bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 pt-20 w-full">
        <div className="max-w-2xl">
          <p className="text-sm tracking-widest mb-8 font-light text-[#c9a84c]">
            THE COLLECTION – 2025
          </p>

          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl font-light text-white mb-2 leading-tight">
              Our Finest
            </h1>
            <p
              className="text-5xl md:text-6xl font-light italic"
              style={{ color: "#c9a84c" }}
            >
              Pieces
            </p>
          </div>

          <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
            Every piece in the TAPASA collection is made to order, crafted in
            solid walnut and oak by artisans who understand that furniture is
            not just functional — it is the architecture of daily life.
          </p>
        </div>
      </div>
    </section>
  );
}
