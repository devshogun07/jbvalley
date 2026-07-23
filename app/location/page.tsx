import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import BackToTop from "../components/BackToTop";
import Link from "next/link";
import {
  Plane,
  Navigation,
  Train,
  Waves,
  MapPin,
  Clock,
  ArrowRight,
  Shield,
  Compass,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Location & Regional Connectivity | Konkan Valley",
  description:
    "Explore the strategic location of Konkan Valley township: minutes from Mopa International Airport (Goa), NH-66 4-lane highway, Tiracol River, and Konkan Railway.",
};

const CONNECTIVITY_HIGHLIGHTS = [
  {
    title: "Mopa International Airport (Goa)",
    travelTime: "25 — 30 Mins",
    distance: "28 Km",
    desc: "Direct access to Manohar International Airport (Mopa, Goa), connecting to major domestic metros and international flight hubs.",
    icon: Plane,
    badge: "Air Transit",
  },
  {
    title: "NH-66 4-Lane Coastal Highway",
    travelTime: "Direct Access",
    distance: "0 Km",
    desc: "National Highway 66 multi-lane corridor providing seamless high-speed connectivity between Mumbai, Goa, and Mangalore.",
    icon: Navigation,
    badge: "Highway Grid",
  },
  {
    title: "Konkan Railway Express Line",
    travelTime: "15 — 20 Mins",
    distance: "14 Km",
    desc: "Proximity to major Konkan Railway express stations, connecting passenger and freight rail corridors across western India.",
    icon: Train,
    badge: "Rail Infrastructure",
  },
  {
    title: "Tiracol Riverfront & Marine Corridor",
    travelTime: "Adjacent",
    distance: "0.5 Km",
    desc: "Scenic riverfront frontage along the Tiracol River basin, enabling waterfront promenade and inland water transit opportunities.",
    icon: Waves,
    badge: "Waterfront Basin",
  },
];

const SURROUNDING_DESTINATIONS = [
  { destination: "Mopa International Airport (GOX)", driveTime: "25 Mins", distance: "28 km" },
  { destination: "North Goa Coastal Beaches (Arambol/Mandrem)", driveTime: "20 Mins", distance: "18 km" },
  { destination: "Tiracol Fort & Heritage Zone", driveTime: "10 Mins", distance: "8 km" },
  { destination: "Panaji / North Goa Commercial Hub", driveTime: "50 Mins", distance: "45 km" },
  { destination: "NH-66 Express Interchange", driveTime: "5 Mins", distance: "3 km" },
  { destination: "Konkan Railway Station (Pernem)", driveTime: "15 Mins", distance: "14 km" },
];

export default function LocationPage() {
  return (
    <div className="min-h-screen bg-[#0D192B] text-white flex flex-col">
      <Navbar />
      <Breadcrumb items={[{ label: "Location & Connectivity" }]} />

      {/* Hero Header */}
      <section className="bg-[#0A1424] py-16 px-6 border-b border-[#c9a84c]/20">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 border border-[#c9a84c] bg-[#c9a84c]/10 text-[#c9a84c] text-xs font-semibold px-4 py-2 rounded-sm mb-6 uppercase tracking-widest">
            <Compass className="w-4 h-4" />
            <span>Strategic Location &amp; Regional Growth Hub</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Strategic Location &amp; Connectivity
          </h1>

          <p className="text-gray-300 text-base md:text-lg max-w-3xl leading-relaxed mb-8">
            Positioned along the vibrant Konkan coastal belt near the North Goa border, Konkan Valley benefits from multi-modal infrastructure: Mopa International Airport, NH-66 4-lane express highway, Tiracol riverfront, and Konkan Railway.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-[#c9a84c] hover:bg-[#d9b45f] text-[#0D192B] font-bold px-7 py-3.5 rounded-sm text-sm tracking-wide transition-all shadow-lg flex items-center gap-2"
            >
              <span>REQUEST LOCATION DOSSIER</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Connectivity Highlight Cards */}
      <section className="py-20 px-6 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest">
            Multi-Modal Transit Access
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-4">
            Four Core Infrastructure Anchors
          </h2>
          <p className="text-gray-400 text-sm">
            Unrivaled regional positioning driving institutional value and tourist accessibility.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CONNECTIVITY_HIGHLIGHTS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#111f38] p-8 rounded-lg border border-white/10 hover:border-[#c9a84c] transition-all flex flex-col justify-between shadow-xl group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="bg-[#0D192B] text-[#c9a84c] text-xs font-bold px-3 py-1 rounded border border-[#c9a84c]/30">
                      {item.badge}
                    </span>
                    <Icon className="w-8 h-8 text-[#c9a84c] group-hover:scale-110 transition-transform" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#c9a84c] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 text-xs leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="border-t border-white/10 pt-4 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1 text-[#c9a84c] font-semibold">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{item.travelTime}</span>
                  </div>
                  <div className="text-gray-400 font-bold">{item.distance}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Distance & Travel Time Table */}
      <section className="bg-[#0A1424] py-20 px-6 border-t border-b border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest">
              Commute Index
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-2 mb-4">
              Key Destination Travel Matrix
            </h2>
          </div>

          <div className="bg-[#111f38] rounded-lg overflow-hidden border border-white/10 shadow-2xl">
            <div className="grid grid-cols-12 bg-[#0D192B] p-4 text-xs font-bold text-[#c9a84c] uppercase tracking-wider border-b border-white/10">
              <div className="col-span-6 md:col-span-7">Destination</div>
              <div className="col-span-3 md:col-span-3 text-center">Drive Time</div>
              <div className="col-span-3 md:col-span-2 text-right">Distance</div>
            </div>

            <div className="divide-y divide-white/5">
              {SURROUNDING_DESTINATIONS.map((dest, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-12 p-4 text-sm hover:bg-white/5 transition-colors items-center"
                >
                  <div className="col-span-6 md:col-span-7 flex items-center gap-2 font-semibold text-white">
                    <MapPin className="w-4 h-4 text-[#c9a84c] shrink-0" />
                    <span>{dest.destination}</span>
                  </div>
                  <div className="col-span-3 md:col-span-3 text-center text-[#c9a84c] font-bold text-xs">
                    {dest.driveTime}
                  </div>
                  <div className="col-span-3 md:col-span-2 text-right text-gray-300 font-mono text-xs">
                    {dest.distance}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Callout section */}
      <section className="py-16 px-6 max-w-7xl mx-auto w-full text-center">
        <div className="bg-gradient-to-r from-[#0B1628] via-[#111f38] to-[#0B1628] p-12 rounded-xl border border-[#c9a84c]/30 shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
            Positioned for Regional Economic Growth
          </h2>
          <p className="text-gray-300 text-sm max-w-2xl mx-auto mb-8 leading-relaxed">
            The convergence of North Goa's expanding tourism ecosystem and Maharashtra's coastal infrastructure development makes Konkan Valley a strategic land bank location.
          </p>
          <Link
            href="/contact"
            className="bg-[#c9a84c] hover:bg-[#d9b45f] text-[#0D192B] font-bold px-8 py-4 rounded-sm text-sm tracking-wide inline-flex items-center gap-2"
          >
            <span>INQUIRE ABOUT REGIONAL LAND DEVELOPMENT</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
}
