"use client";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: "url(/hero-background.png)",
      }}
    >
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-22">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-18">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Subtitle */}
            <div className="text-xs md:text-sm tracking-widest text-gray-400 uppercase">
              Est. 2020 — Multiple Ventures. Our Legacy
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light text-white leading-tight">
              Crafted
              <br />
              beautifully
              <br />
              for <span className="text-[#C9A84C] italic">Living</span>
              <br />
              Spaces
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-300 max-w-md font-light leading-relaxed">
              Luxury furniture that transforms interiors into timeless
              sanctuaries. Each piece is a meditation on form and material.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="/products"
                className="px-8 py-4 bg-[#C9A84C] text-black font-semibold text-sm tracking-wider uppercase hover:bg-amber-500 transition-colors duration-300 text-center"
              >
                Explore Collection
              </a>
              <a
                href="#about"
                className="px-8 py-4 border border-gray-400 text-white font-semibold text-sm tracking-wider uppercase hover:bg-white/10 hover:border-[#C9A84C] transition-colors duration-300 text-center"
              >
                Our Story
              </a>
            </div>
          </div>

          {/* Right Product Image */}
          <div className="relative flex items-center justify-center mt-8 lg:mt-0">
            <img
              src="/product-furniture.png"
              alt="Luxury wooden bed with nightstand and decorative items"
              className="w-full max-w-lg lg:max-w-none h-auto object-contain drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
