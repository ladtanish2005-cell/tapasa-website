import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p className="text-xs text-gray-500 uppercase tracking-widest">
          Last updated: 2025
        </p>

        <div className="space-y-6 text-sm leading-relaxed border-t border-neutral-800 pt-6">
          <p>
            At TAPASA, we treat your privacy with the same discretion and care that guides our artisanal craft. This Privacy Policy outlines how your personal information is collected, protected, and honored when you visit our ateliers, digital platforms, or request bespoke commissions.
          </p>

          <h2 className="text-xl font-serif text-white pt-4">1. Information We Collect</h2>
          <p>
            When you inquire about custom furniture, schedule a showroom viewing, or place an order, we collect essential details such as your name, contact information, delivery location, and specific design preferences.
          </p>

          <h2 className="text-xl font-serif text-white pt-4">2. Concierge Discretion</h2>
          <p>
            Your details are never rented or sold to third-party marketing entities. Information is exclusively utilized by our concierge team and trusted logistics partners to fulfill your bespoke orders.
          </p>

          <h2 className="text-xl font-serif text-white pt-4">3. Direct Inquiries</h2>
          <p>
            For privacy queries or to update your archival records, contact our desk at <span className="text-[#c9a84c]">privacy@tapasa.in</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
