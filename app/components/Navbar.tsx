"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/ventures", label: "Ventures" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#0a1628] text-white relative">
      <nav className="mx-auto flex max-w-7xl items-center justify-between py-3 px-6">
        <Link href="/" className="flex items-center gap-3">
          <img src="/jblogo.png" alt="" className="h-10 md:h-12" />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-gray-200 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded bg-[#c9a84c] px-5 py-2 text-sm font-semibold text-[#0a1628] hover:bg-[#d9b45f]"
          >
            INSTITUTIONAL ENQUIRY
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
          aria-expanded={open}
          className="lg:hidden text-white"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden flex flex-col gap-1 px-6 pb-6 border-t border-white/10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 text-sm text-gray-200 hover:text-white border-b border-white/5"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 text-center rounded bg-[#c9a84c] px-5 py-3 text-sm font-semibold text-[#0a1628] hover:bg-[#d9b45f]"
          >
            INSTITUTIONAL ENQUIRY
          </Link>
        </div>
      )}
    </header>
  );
}
