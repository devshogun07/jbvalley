"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="bg-[#060F1E]/80 border-b border-white/10 py-3.5 px-6">
      <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-gray-400 overflow-x-auto whitespace-nowrap">
        <Link
          href="/"
          className="flex items-center gap-1.5 hover:text-[#c9a84c] transition-colors"
        >
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </Link>

        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <ChevronRight className="w-3.5 h-3.5 text-gray-600 shrink-0" />
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-[#c9a84c] transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-[#c9a84c] font-semibold">{item.label}</span>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
