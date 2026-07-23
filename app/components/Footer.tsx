import Link from "next/link";
import Logo from "./Logo";
import { Mail, Phone, MapPin, ShieldAlert } from "lucide-react";

const FOOTER_NAV = [
  {
    title: "COMPANY & LEADERSHIP",
    links: [
      { label: "About Company Profile", href: "/about-company" },
      { label: "Leadership & Governance", href: "/leadership" },
      { label: "Representative Experience", href: "/experience" },
      { label: "Corporate News & Insights", href: "/news" },
    ],
  },
  {
    title: "KONKAN VALLEY TOWNSHIP",
    links: [
      { label: "Master Project Overview", href: "/konkan-valley" },
      { label: "Location & Connectivity", href: "/location" },
      { label: "Infrastructure & Specs", href: "/infrastructure" },
      { label: "Project Renders Gallery", href: "/gallery" },
    ],
  },
  {
    title: "GLOBAL DESK & ENQUIRIES",
    links: [
      { label: "Dubai & International Desk", href: "/global-marketing" },
      { label: "Statutory Transparency", href: "/leadership" },
      { label: "Institutional Enquiry", href: "/contact" },
      { label: "Request Investor Dossier", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#060F1E] px-6 pt-16 md:pt-20 pb-8 border-t border-[#FF5722]/30">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 mb-16">
        {/* Brand Column */}
        <div className="lg:col-span-2 space-y-6">
          <Logo variant="dark" size="md" />

          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            JB Valley Homes Infra LLP — Institutional master township developer built on civil engineering discipline, large-scale land assembly, and multi-authority statutory governance.
          </p>

          <div className="space-y-3 text-xs text-gray-300 border-l-2 border-[#FF5722] pl-4 py-1">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#FF5722] shrink-0 mt-0.5" />
              <span>
                Villa No. 253, Splendid Aparna Palm Meadows, Kompally, Medchal–Nagpur Road (NH-44), Hyderabad, Telangana
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#FF5722] shrink-0" />
              <a
                href="mailto:jbhomesinfra@gmail.com"
                className="hover:text-[#FF5722] transition-colors"
              >
                jbhomesinfra@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#FF5722] shrink-0" />
              <div className="flex gap-2">
                <a href="tel:+916309601850" className="hover:text-[#FF5722] transition-colors">
                  +91 63096 01850
                </a>
                <span>·</span>
                <a href="tel:+919502076876" className="hover:text-[#FF5722] transition-colors">
                  +91 95020 76876
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Link Columns */}
        {FOOTER_NAV.map((col) => (
          <div key={col.title}>
            <h3 className="text-white text-xs font-bold tracking-widest mb-6 border-b border-[#FF5722]/30 pb-2 uppercase">
              {col.title}
            </h3>
            <ul className="space-y-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-xs hover:text-[#FF5722] transition-colors flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Statutory Disclaimer Box */}
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8">
        <div className="bg-[#0b1628] border border-amber-500/30 rounded-lg p-5 mb-8 flex gap-4 items-start">
          <ShieldAlert className="w-5 h-5 text-[#FF5722] shrink-0 mt-0.5" />
          <div className="text-xs text-gray-400 leading-relaxed space-y-2">
            <p className="font-bold text-gray-200">
              Statutory Disclosure &amp; Regulatory Disclaimer:
            </p>
            <p>
              Konkan Valley is a proposed 3,500+ acre master-planned township development. The project is currently undergoing statutory land assembly and survey planning stages and is **not registered under the Real Estate (Regulation and Development) Act, 2016 (MahaRERA)**.
            </p>
            <p>
              Nothing on this corporate website constitutes an offer, invitation, or solicitation to purchase any plot, apartment, or building, and no booking amount or advance payment is accepted. All visual renders are artistic impressions of proposed concepts.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} JB Valley Homes Infra LLP. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/leadership" className="hover:text-white transition-colors">
              Governance
            </Link>
            <Link href="/global-marketing" className="hover:text-white transition-colors">
              Dubai Desk
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact / Dossier
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
