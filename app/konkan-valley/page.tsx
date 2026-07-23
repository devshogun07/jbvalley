import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import BackToTop from "../components/BackToTop";
import Link from "next/link";
import {
  Building2,
  TreePine,
  ShieldCheck,
  Compass,
  ArrowRight,
  Layers,
  MapPin,
  Sparkles,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Konkan Valley Master Overview | JB Valley Homes Infra LLP",
  description:
    "Explore Konkan Valley — a proposed 3,500+ acre master-planned integrated township project featuring 275 Mn sq.ft. of residential, commercial, and civic infrastructure.",
};

const PROPOSED_ZONES = [
  {
    title: "Waterfront & Marina Boulevard",
    desc: "Luxury waterfront retail, pedestrian riverfront promenades, marina deck, and canal networks along the riverfront.",
    image: "/render-01.jpg",
    acres: "High-density mixed use",
  },
  {
    title: "Financial & Commercial Corridor",
    desc: "Iconic high-rise office towers, financial centers, civic plazas, and transit gateway hubs.",
    image: "/render-05.jpg",
    acres: "Business district",
  },
  {
    title: "Eco Residential Enclaves & Hillside Villas",
    desc: "Low-density hillside luxury villas, parkside residential clusters, and smart sustainable housing zones.",
    image: "/render-11.jpg",
    acres: "Master residential",
  },
  {
    title: "Convention & Cultural Hub",
    desc: "International convention center, expo arenas, sports complexes, and performing arts centers.",
    image: "/render-10.jpg",
    acres: "Civic & Hospitality",
  },
];

const DEVELOPMENT_PHASES = [
  {
    phase: "Phase 1 - 2",
    title: "Land Assembly & Primary Utility Backbone",
    desc: "Boundary consolidation, arterial road access, water management, and high-voltage power grid setup.",
  },
  {
    phase: "Phase 3 - 4",
    title: "Transit Gateway & Commercial Core",
    desc: "Cable bridge transit linkages, financial center infrastructure, and primary commercial plazas.",
  },
  {
    phase: "Phase 5 - 7",
    title: "Residential Enclaves & Waterfront Boulevard",
    desc: "Parkside housing developments, marina walkway, eco-residences, and retail avenues.",
  },
  {
    phase: "Phase 8 - 10",
    title: "Convention Hub & Smart Infrastructure Completion",
    desc: "International convention arena, hospital complex, higher education campus, and full operational handover.",
  },
];

export default function KonkanValleyPage() {
  return (
    <div className="min-h-screen bg-[#0D192B] text-white flex flex-col">
      <Navbar />
      <Breadcrumb items={[{ label: "Konkan Valley Master Overview" }]} />

      {/* Hero Banner */}
      <section className="relative bg-[#0A1424] py-20 px-6 border-b border-[#c9a84c]/20 overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img src="/master-vision.jpg" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 border border-[#c9a84c] bg-[#c9a84c]/10 text-[#c9a84c] text-xs font-semibold px-4 py-2 rounded-sm mb-6 uppercase tracking-widest">
            <Compass className="w-4 h-4" />
            <span>Proposed Master Township Vision</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight max-w-4xl">
            Konkan Valley Integrated Township
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
            A vision spanning 3,500+ acres and 275 Million Sq.Ft. of master-planned infrastructure, designed to create a self-sustaining coastal township with world-class residential, commercial, and civic amenities.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/gallery"
              className="bg-[#c9a84c] hover:bg-[#d9b45f] text-[#0D192B] font-bold px-7 py-3.5 rounded-sm text-sm tracking-wide transition-all shadow-lg flex items-center gap-2"
            >
              <span>EXPLORE PROJECT GALLERY</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/location"
              className="border border-gray-400 hover:border-[#c9a84c] text-white hover:text-[#c9a84c] font-semibold px-7 py-3.5 rounded-sm text-sm tracking-wide transition-all"
            >
              LOCATION &amp; CONNECTIVITY
            </Link>
          </div>
        </div>
      </section>

      {/* Metrics Strip */}
      <section className="bg-[#c9a84c] py-10 px-6 text-[#0D192B]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-extrabold">3,500+</div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#0D192B]/80 mt-1">
              Acres Proposed
            </div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-extrabold">275 Mn</div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#0D192B]/80 mt-1">
              Sq.Ft Proposed
            </div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-extrabold">10</div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#0D192B]/80 mt-1">
              Development Phases
            </div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-extrabold">10 Yrs</div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#0D192B]/80 mt-1">
              Execution Horizon
            </div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-extrabold">43</div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#0D192B]/80 mt-1">
              Consortium Investors
            </div>
          </div>
        </div>
      </section>

      {/* Proposed Zones Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest">
            Zoning &amp; Components
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-4">
            Master Township Sector Architecture
          </h2>
          <p className="text-gray-400 text-sm">
            Integrated districts designed to harmonize natural coastal topography with high-density smart urbanism.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {PROPOSED_ZONES.map((zone, idx) => (
            <div
              key={idx}
              className="bg-[#111f38] rounded-lg overflow-hidden border border-white/10 hover:border-[#c9a84c] transition-all group shadow-xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={zone.image}
                  alt={zone.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#0D192B]/90 text-[#c9a84c] text-xs font-bold px-3 py-1.5 rounded border border-[#c9a84c]/30 uppercase tracking-wider">
                  {zone.acres}
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#c9a84c] transition-colors">
                  {zone.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {zone.desc}
                </p>
                <Link
                  href="/project-vision"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#c9a84c] hover:underline"
                >
                  <span>VIEW SPECIFICATIONS</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10-Phase Roadmap Section */}
      <section className="bg-[#0A1424] py-20 px-6 border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest">
              Execution Strategy
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-2 mb-4">
              10-Phase Structured Development Sequence
            </h2>
            <p className="text-gray-400 text-sm">
              Capital deployment and statutory approvals are staged in strict sequential order.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {DEVELOPMENT_PHASES.map((dp, idx) => (
              <div
                key={idx}
                className="bg-[#111f38] p-8 rounded-lg border border-white/10 hover:border-[#c9a84c] transition-colors relative"
              >
                <span className="inline-block bg-[#0D192B] text-[#c9a84c] text-xs font-bold px-3 py-1 rounded border border-[#c9a84c]/30 mb-4">
                  {dp.phase}
                </span>
                <h3 className="text-lg font-bold text-white mb-3">{dp.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{dp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 px-6 bg-[#060F1E]">
        <div className="max-w-4xl mx-auto text-center text-xs text-gray-500 leading-relaxed">
          <p>
            * Disclaimer: All details regarding Konkan Valley describe a proposed master plan vision spanning 3,500+ acres. Quantities, boundaries, and zoning parameters remain subject to statutory sanctions, environmental clearances, and MahaRERA registration.
          </p>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
}
