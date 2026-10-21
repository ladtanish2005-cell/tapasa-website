"use client";

export default function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen w-full bg-[#1a1a1a] py-20 scroll-mt-12">
      {/* Overlay for better text readability */}
      {/* <div className="absolute inset-0 bg-black/40"></div> */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Subtitle */}
            <p className="text-sm font-light tracking-widest text-[#C9A84C] uppercase">
              Our Identity
            </p>

            {/* Headline */}
            <h2 className="text-5xl lg:text-6xl font-light leading-tight text-white">
              Where Craftsmanship
              <br />
              Meets <span className="text-[#C9A84C] italic">Legacy</span>
            </h2>

            {/* Description */}
            <p className="text-base font-light leading-relaxed text-gray-300 max-w-md">
              Tapasa is more than a furniture brand — it is a philosophy of
              living beautifully. Rooted in artisanal traditions yet shaped by
              modern sensibility, every piece we create carries the quiet
              confidence of genuine quality.
            </p>

            {/* Quote */}
            <div className="border-l-2 border-[#C9A84C] pl-6 py-2">
              <p className="text-base italic font-light text-gray-300">
                "We believe the spaces we inhabit shape the lives we lead."
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="flex flex-col space-y-2">
                <p className="text-3xl lg:text-4xl font-light text-[#C9A84C]">
                  12+
                </p>
                <p className="text-xs font-light tracking-widest text-gray-400 uppercase">
                  Years of Craft
                </p>
              </div>
              <div className="flex flex-col space-y-2">
                <p className="text-3xl lg:text-4xl font-light text-[#C9A84C]">
                  800+
                </p>
                <p className="text-xs font-light tracking-widest text-gray-400 uppercase">
                  Pieces Created
                </p>
              </div>
              <div className="flex flex-col space-y-2">
                <p className="text-3xl lg:text-4xl font-light text-[#C9A84C]">
                  04
                </p>
                <p className="text-xs font-light tracking-widest text-gray-400 uppercase">
                  Showrooms
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Gold border frame effect */}
              <div className="absolute inset-0 border-2 border-[#C9A84C]/50 m-4"></div>
              <img
                src="/about-showroom.png"
                alt="TAPASA Showroom"
                className="relative w-full h-auto aspect-video object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
