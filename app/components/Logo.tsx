"use client";

import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark";
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Logo({
  variant = "dark",
  showText = true,
  size = "md",
  className = "",
}: LogoProps) {
  const iconSize = size === "sm" ? 34 : size === "md" ? 42 : 52;
  const textColor = variant === "dark" ? "text-white" : "text-[#0D192B]";
  const subTextColor = "#FF8A65";

  return (
    <Link href="/" className={`inline-flex items-center gap-3.5 group shrink-0 ${className}`}>
      {/* Modern Saffron House Emblem with Integrated JB Monogram (NO FLAG) */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform group-hover:scale-105 shrink-0"
        aria-label="JB Valley Homes Infra Emblem"
      >
        {/* Outer Roof & Frame */}
        <path d="M50 10L10 46H24V88H76V46H90L50 10Z" fill="#FF5722" />
        {/* Inner House Cutout */}
        <path d="M50 20L26 44V80H74V44L50 20Z" fill={variant === "dark" ? "#0A1424" : "#FFFFFF"} />
        {/* 'J' Monogram */}
        <path d="M37 34H44V62C44 66 41 69 37 69C33 69 30 66 30 62H36C36 63.5 36.5 64 37 64C38 64 38.5 63 38.5 61V34Z" fill="#FF5722" />
        {/* 'B' Monogram */}
        <path d="M47 34H61C65.5 34 68 36.2 68 39C68 41.2 66.5 43 64 43.8C67 44.8 69 47 69 50.5C69 54.5 65.5 57 61 57H47V34ZM53 39V42.5H60C61.5 42.5 62.5 41.8 62.5 40.8C62.5 39.8 61.5 39 60 39H53ZM53 47.5V52H61C62.8 52 63.8 51 63.8 49.5C63.8 48 62.8 47.5 61 47.5H53Z" fill="#FF8A65" />
        {/* Base Foundation Bar */}
        <rect x="16" y="86" width="68" height="5" rx="2.5" fill="#FF5722" />
      </svg>

      {showText && (
        <div className="flex flex-col justify-center whitespace-nowrap select-none">
          {/* Main Title on ONE Single Clean Line */}
          <div className="flex items-baseline gap-1.5 leading-none">
            <span className="text-[#FF5722] font-black text-base md:text-lg tracking-wider">
              JB
            </span>
            <span className={`${textColor} font-extrabold text-xs md:text-sm tracking-[0.18em] uppercase`}>
              VALLEY HOMES INFRA
            </span>
          </div>

          {/* Subtitle Tagline on ONE Single Clean Line */}
          <span className="text-[9px] md:text-[10px] font-bold text-[#FF8A65] uppercase tracking-[0.22em] mt-1 leading-none">
            TOWNSHIP &amp; INFRASTRUCTURE DEVELOPER
          </span>
        </div>
      )}
    </Link>
  );
}
