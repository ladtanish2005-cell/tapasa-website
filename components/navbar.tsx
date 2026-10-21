"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ShoppingBag, User, Menu, X, ArrowRight } from "lucide-react";
import productsData from "@/data/products.json";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [conciergeOpen, setConciergeOpen] = useState(false);

  const navLinks = [
    { label: "PRODUCTS", href: "/products" },
    { label: "ABOUT", href: "/#about" },
    { label: "COLLECTION", href: "/#collection" },
    { label: "SHOWROOMS", href: "/#stores" },
    { label: "CONTACT", href: "/#contact" },
  ];

  const filteredSearch = searchQuery.trim()
    ? productsData.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.material.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.type.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <>
      <nav className="sticky top-0 z-50 bg-[#141414]/95 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between gap-6">
            {/* Logo */}
            <div className="shrink-0">
              <Link
                href="/"
                className="text-2xl font-light font-serif tracking-widest text-[#C9A84C] hover:opacity-80 transition-opacity"
              >
                TAPASA
              </Link>
            </div>

            {/* Center Navigation Links (Desktop) */}
            <div className="hidden md:flex items-center justify-center gap-10 flex-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs font-light tracking-widest text-gray-300 hover:text-[#C9A84C] transition-colors duration-300 uppercase"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-5">
              <button
                onClick={() => setSearchOpen(true)}
                className="text-gray-300 hover:text-[#C9A84C] transition-colors p-1"
                aria-label="Search"
                title="Search collection"
              >
                <Search size={19} />
              </button>

              <Link
                href="/products"
                className="text-gray-300 hover:text-[#C9A84C] transition-colors p-1 relative"
                aria-label="Collection"
                title="View Collection"
              >
                <ShoppingBag size={19} />
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#C9A84C]" />
              </Link>

              <button
                onClick={() => setConciergeOpen(true)}
                className="text-gray-300 hover:text-[#C9A84C] transition-colors p-1"
                aria-label="Concierge"
                title="Design Concierge"
              >
                <User size={19} />
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-gray-300 hover:text-[#C9A84C] transition-colors p-1 ml-1"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-neutral-800 bg-[#161616] px-6 py-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-light tracking-widest text-gray-300 hover:text-[#C9A84C] transition-colors py-2 border-b border-neutral-800/60"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="pt-2">
              <Link
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full py-3 text-center bg-[#C9A84C] text-black font-medium text-xs tracking-widest uppercase hover:bg-amber-400 transition"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-start justify-center pt-24 px-4">
          <div className="bg-[#1c1c1c] border border-neutral-700 w-full max-w-xl rounded shadow-2xl p-6">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
              <span className="text-xs uppercase tracking-widest text-[#C9A84C]">
                Search Collection
              </span>
              <button
                onClick={() => {
                  setSearchOpen(false);
                  setSearchQuery("");
                }}
                className="text-gray-400 hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            <div className="mt-4">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search sofa, desk, walnut, armchair..."
                autoFocus
                className="w-full bg-neutral-900 border border-neutral-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C]"
              />
            </div>

            {searchQuery.trim() && (
              <div className="mt-4 max-h-64 overflow-y-auto space-y-2">
                {filteredSearch.length === 0 ? (
                  <p className="text-xs text-gray-500 py-4 text-center">
                    No matching pieces found.
                  </p>
                ) : (
                  filteredSearch.map((item) => (
                    <Link
                      key={item.id}
                      href={`/products/${item.id}`}
                      onClick={() => setSearchOpen(false)}
                      className="flex items-center justify-between p-2 hover:bg-neutral-800/80 rounded transition group"
                    >
                      <div>
                        <p className="text-sm text-white group-hover:text-[#C9A84C]">
                          {item.name}
                        </p>
                        <p className="text-xs text-gray-500">{item.material}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-[#C9A84C]">{item.price}</span>
                        <ArrowRight size={14} className="text-gray-500 group-hover:text-white" />
                      </div>
                    </Link>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Concierge Modal */}
      {conciergeOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#1c1c1c] border border-neutral-700 w-full max-w-md rounded shadow-2xl p-6">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
              <span className="text-xs uppercase tracking-widest text-[#C9A84C]">
                Private Concierge
              </span>
              <button
                onClick={() => setConciergeOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <X size={18} />
              </button>
            </div>
            <div className="py-6 space-y-4">
              <p className="text-sm text-gray-300 font-light">
                Connect directly with our senior design architects for customized dimensions, fabric swatches, or bespoke commissions.
              </p>
              <div className="bg-neutral-900 p-4 border border-neutral-800 space-y-2 text-xs">
                <p className="text-gray-400">Direct Desk: <span className="text-white">+91 98200 00000</span></p>
                <p className="text-gray-400">Email: <span className="text-white">studio@tapasa.in</span></p>
                <p className="text-gray-400">Hours: <span className="text-white">Mon – Sat, 10:00 – 20:00 IST</span></p>
              </div>
            </div>
            <Link
              href="/#contact"
              onClick={() => setConciergeOpen(false)}
              className="block w-full py-3 bg-[#C9A84C] text-black text-center text-xs tracking-widest uppercase font-medium hover:bg-amber-400 transition"
            >
              Send Custom Request
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
