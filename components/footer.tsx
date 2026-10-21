"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "PRODUCTS", href: "/products" },
    { label: "ABOUT", href: "/#about" },
    { label: "COLLECTION", href: "/#collection" },
    { label: "SHOWROOMS", href: "/#stores" },
    { label: "CONTACT", href: "/#contact" },
  ];

  return (
    <footer className="bg-[#0e0e0e] border-t border-neutral-800 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          {/* Left - Navigation Links */}
          <div className="flex flex-wrap md:flex-col gap-3 justify-center md:justify-start">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-gray-400 hover:text-[#C9A84C] transition-colors text-xs tracking-widest uppercase font-light"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Center - Logo and Tagline */}
          <div className="flex flex-col items-center justify-center text-center py-4">
            <Link
              href="/"
              className="text-3xl font-serif tracking-widest text-[#C9A84C] mb-2 hover:opacity-80 transition"
            >
              TAPASA
            </Link>
            <p className="text-gray-500 text-xs tracking-wider uppercase font-light">
              Crafted beautifully for Living Spaces
            </p>
          </div>

          {/* Right - Copyright and Legal */}
          <div className="flex flex-col items-center md:items-end gap-2 text-xs">
            <p className="text-gray-500 tracking-wide font-light">
              © {currentYear} Tapasa Furniture Atelier
            </p>
            <p className="text-gray-600">All rights reserved · Mumbai, India</p>
            <div className="flex gap-4 mt-2">
              <Link
                href="/privacy"
                className="text-gray-500 hover:text-[#C9A84C] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-500 hover:text-[#C9A84C] transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
