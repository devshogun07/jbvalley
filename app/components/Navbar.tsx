"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Logo from "./Logo";
import { Menu, X, ChevronDown, PhoneCall } from "lucide-react";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about-company", label: "About Company" },
  { href: "/leadership", label: "Leadership" },
  { href: "/experience", label: "Our Experience" },
  {
    label: "Konkan Valley",
    children: [
      { href: "/konkan-valley", label: "Master Project Overview" },
      { href: "/location", label: "Location & Connectivity" },
      { href: "/infrastructure", label: "Infrastructure & Specs" },
      { href: "/gallery", label: "Project Gallery" },
    ],
  },
  { href: "/global-marketing", label: "Global Operations" },
  { href: "/news", label: "News & Insights" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#060F1E]/95 backdrop-blur-md shadow-2xl border-b border-[#FF5722]/30"
          : "bg-[#0a1628] border-b border-white/10"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between py-3.5 px-4 sm:px-6 lg:px-8">
        {/* Redesigned Logo */}
        <Logo variant="dark" size="md" />

        {/* Desktop Nav Items */}
        <nav className="hidden xl:flex items-center gap-6 lg:gap-7">
          {NAV_ITEMS.map((item, idx) => {
            if (item.children) {
              const isChildActive = item.children.some((child) =>
                pathname.startsWith(child.href)
              );
              return (
                <div
                  key={idx}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className={`flex items-center gap-1 text-xs font-bold tracking-wider uppercase py-2 transition-colors ${
                      isChildActive
                        ? "text-[#FF5722]"
                        : "text-gray-200 hover:text-white"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className="w-3.5 h-3.5 text-[#FF5722]" />
                  </button>

                  {dropdownOpen && (
                    <div className="absolute top-full left-0 w-60 bg-[#0B1628] border border-[#FF5722]/40 rounded-lg shadow-2xl py-2 z-50">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-4 py-2.5 text-xs font-semibold transition-colors ${
                            pathname === child.href
                              ? "bg-[#FF5722]/20 text-[#FF5722] border-l-3 border-[#FF5722]"
                              : "text-gray-300 hover:bg-white/5 hover:text-white"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href!}
                className={`text-xs font-bold tracking-wider uppercase py-2 border-b-2 transition-all ${
                  isActive(item.href!)
                    ? "border-[#FF5722] text-[#FF5722] font-black"
                    : "border-transparent text-gray-200 hover:text-white hover:border-gray-500"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Primary CTA Button */}
        <div className="hidden lg:flex items-center ml-4 pl-4 lg:ml-6 lg:pl-6 border-l border-white/15">
          <Link
            href="/contact"
            className="flex items-center gap-2 rounded bg-[#FF5722] hover:bg-[#E65100] px-5 py-2.5 text-xs font-bold tracking-widest text-white transition-all transform hover:-translate-y-0.5 shadow-lg uppercase whitespace-nowrap"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>REQUEST DOSSIER</span>
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
          aria-expanded={open}
          className="xl:hidden text-white p-2 hover:bg-white/10 rounded-md"
        >
          {open ? <X className="w-6 h-6 text-[#FF5722]" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="xl:hidden bg-[#060F1E] border-t border-white/10 px-6 py-6 space-y-3 shadow-2xl">
          {NAV_ITEMS.map((item, idx) => {
            if (item.children) {
              return (
                <div key={idx} className="space-y-1 py-1">
                  <div className="text-xs font-bold text-[#FF5722] uppercase tracking-wider px-2 py-1">
                    {item.label}
                  </div>
                  <div className="pl-3 space-y-1 border-l border-white/10">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className={`block px-3 py-2 text-sm rounded ${
                          pathname === child.href
                            ? "bg-[#FF5722]/20 text-[#FF5722] font-semibold"
                            : "text-gray-300 hover:text-white"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href!}
                onClick={() => setOpen(false)}
                className={`block px-3 py-2.5 text-sm font-medium rounded transition-colors ${
                  isActive(item.href!)
                    ? "bg-[#FF5722]/20 text-[#FF5722] font-bold border-l-4 border-[#FF5722]"
                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <div className="pt-4 border-t border-white/10">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 w-full rounded bg-[#FF5722] hover:bg-[#E65100] px-5 py-3 text-sm font-bold text-white transition-all shadow-lg uppercase"
            >
              <PhoneCall className="w-4 h-4" />
              <span>REQUEST DOSSIER</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
