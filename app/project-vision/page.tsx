import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import BackToTop from "../components/BackToTop";
import Link from "next/link";
import {
  Sparkles,
  Cpu,
  Layers,
  SlidersHorizontal,
  ShieldCheck,
  Zap,
  Leaf,
  CheckCircle2,
  ArrowRight,
  Building,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Project Vision & Specifications | Konkan Valley",
  description:
    "Discover the engineering standards, premium materials, smart home integration, and buyer customization frameworks of Konkan Valley.",
};

const SPECIFICATION_GROUPS = [
  {
    title: "Smart Home & Utility Automation",
    icon: Cpu,
    points: [
      "Integrated IoT smart energy & water monitoring meters for all sectors.",
      "EV charging grid stations located across all residential and commercial parking bays.",
      "High-speed fiber-optic underground conduit backbone throughout the township.",
      "Automated street lighting grid with motion & ambient light sensors.",
    ],
  },
  {
    title: "Premium Structural Materials & Engineering",
    icon: ShieldCheck,
    points: [
      "Seismic-resistant RCC frame structure with high-durability concrete mix.",
      "Coastal corrosion-resistant coated rebar and weather-shield exterior coatings.",
      "Double-glazed acoustic & UV reflective thermal insulated glass windows.",
      "Granite & Italian marble finishing in all civic and clubhouse lobbies.",
    ],
  },
  {
    title: "Eco-Sustainability & Green Grid",
    icon: Leaf,
    points: [
      "Centralized Sewage Treatment Plant (STP) with 100% recycled water for landscaping.",
      "Rooftop & ground-mounted solar grid powering common area utilities.",
      "Zero-waste organic waste composting units per sector.",
      "Rainwater harvesting reservoirs designed to replenish local aquifers.",
    ],
  },
  {
    title: "Buyer & Investor Customization",
    icon: SlidersHorizontal,
    points: [
      "Flexible plot amalgamation & architectural footprint customization.",
      "Option for fully custom villa interiors & smart home automation packages.",
      "Bespoke commercial floor plate configuration for corporate partners.",
      "Turnkey co-development partnerships supported by developer engineering team.",
    ],
  },
];

export default function ProjectVisionPage() {
  return (
    <div className="min-h-screen bg-[#0D192B] text-white flex flex-col">
      <Navbar />
      <Breadcrumb items={[{ label: "Vision & Specifications" }]} />

      {/* Hero Header */}
      <section className="bg-[#0A1424] py-16 px-6 border-b border-[#c9a84c]/20">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 border border-[#c9a84c] bg-[#c9a84c]/10 text-[#c9a84c] text-xs font-semibold px-4 py-2 rounded-sm mb-6 uppercase tracking-widest">
            <Sparkles className="w-4 h-4" />
            <span>Engineering Standards &amp; Architecture</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Project Vision &amp; Technical Specifications
          </h1>

          <p className="text-gray-300 text-base md:text-lg max-w-3xl leading-relaxed mb-8">
            Built upon four decades of civil engineering experience, Konkan Valley combines luxury finishes with sustainable smart infrastructure and flexible customization frameworks.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-[#c9a84c] hover:bg-[#d9b45f] text-[#0D192B] font-bold px-7 py-3.5 rounded-sm text-sm tracking-wide transition-all shadow-lg flex items-center gap-2"
            >
              <span>REQUEST SPECIFICATIONS DOSSIER</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Specifications Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-10">
          {SPECIFICATION_GROUPS.map((group, idx) => {
            const Icon = group.icon;
            return (
              <div
                key={idx}
                className="bg-[#111f38] p-8 rounded-lg border border-white/10 hover:border-[#c9a84c] transition-all shadow-xl"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-[#0D192B] text-[#c9a84c] rounded border border-[#c9a84c]/30">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-bold text-white">{group.title}</h2>
                </div>

                <ul className="space-y-4 text-sm text-gray-300">
                  {group.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#c9a84c] shrink-0 mt-1" />
                      <span className="leading-relaxed">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Multi-Brand Quality Benchmark */}
      <section className="bg-[#0A1424] py-20 px-6 border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest">
            Quality Assurance
          </span>
          <h2 className="text-3xl font-extrabold text-white mt-2 mb-4">
            Institutional Infrastructure Benchmarks
          </h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto mb-12">
            Designed to match the construction discipline and durability standards set by India's premiere infrastructure &amp; real estate developers.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-[#111f38] p-6 rounded border border-white/10">
              <div className="text-2xl font-extrabold text-[#c9a84c] mb-1">100%</div>
              <div className="text-xs text-gray-400">Underground Utility Conduits</div>
            </div>
            <div className="bg-[#111f38] p-6 rounded border border-white/10">
              <div className="text-2xl font-extrabold text-[#c9a84c] mb-1">Zero</div>
              <div className="text-xs text-gray-400">Surface Cable Clutter</div>
            </div>
            <div className="bg-[#111f38] p-6 rounded border border-white/10">
              <div className="text-2xl font-extrabold text-[#c9a84c] mb-1">IGBC</div>
              <div className="text-xs text-gray-400">Green Township Standards</div>
            </div>
            <div className="bg-[#111f38] p-6 rounded border border-white/10">
              <div className="text-2xl font-extrabold text-[#c9a84c] mb-1">24/7</div>
              <div className="text-xs text-gray-400">Automated Security &amp; Surveillance</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
}
