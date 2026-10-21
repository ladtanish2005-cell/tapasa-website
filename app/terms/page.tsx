import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#111111] text-gray-300 py-16 px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#c9a84c] hover:underline"
        >
          <ArrowLeft size={16} />
          Return to Tapasa Home
        </Link>

        <h1 className="text-4xl font-serif text-white font-light">
          Terms of Service
        </h1>
        <p className="text-xs text-gray-500 uppercase tracking-widest">
          Artisanal Commission Agreement
        </p>

        <div className="space-y-6 text-sm leading-relaxed border-t border-neutral-800 pt-6">
          <p>
            Welcome to TAPASA. By commissioning bespoke furniture, scheduling architectural viewings, or acquiring pieces from our collections, you agree to the terms outlined below.
          </p>

          <h2 className="text-xl font-serif text-white pt-4">1. Made-to-Order Craftsmanship</h2>
          <p>
            Each TAPASA piece is uniquely handcrafted using genuine solid hardwoods (Walnut, Teak, and Oak). Natural grain variations, subtle knots, and tonal gradations are natural characteristics of honest materials, confirming authenticity rather than imperfection.
          </p>

          <h2 className="text-xl font-serif text-white pt-4">2. Structural Warranty</h2>
          <p>
            All residential furniture includes a comprehensive 10-year warranty covering joinery integrity and frame craftsmanship under standard residential use.
          </p>

          <h2 className="text-xl font-serif text-white pt-4">3. White Glove Delivery & Logistics</h2>
          <p>
            We manage specialized white-glove transport across India and internationally. Inspection is performed upon placement in your living space.
          </p>
        </div>
      </div>
    </div>
  );
}
