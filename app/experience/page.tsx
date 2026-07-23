"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import BackToTop from "../components/BackToTop";
import Link from "next/link";
import {
  FileCheck2,
  Building2,
  MapPin,
  ArrowRight,
  Filter,
  CheckCircle,
  Download,
  Layers,
  Sparkles,
} from "lucide-react";

interface Venture {
  chip: string;
  acres: string;
  title: string;
  desc: string;
  status: "Approved layout" | "Built";
  state: "Telangana" | "Andhra Pradesh";
  locationDetails: string;
}

const REPRESENTATIVE_PORTFOLIO: Venture[] = [
  {
    chip: "HMDA",
    acres: "742",
    title: "JB's Nature Valley",
    desc: "Vijayawada Highway at Choutuppal, near the Regional Ring Road.",
    status: "Approved layout",
    state: "Telangana",
    locationDetails: "Strategic corridor along NH-65 & RRR junction.",
  },
  {
    chip: "HMDA",
    acres: "650",
    title: "JB's Serene City",
    desc: "Nagarjuna Sagar Highway at Ibrahimpatnam, Fourth City area — 10 km to the ORR.",
    status: "Approved layout",
    state: "Telangana",
    locationDetails: "Directly positioned in the Hyderabad Fourth City development hub.",
  },
  {
    chip: "HMDA",
    acres: "200",
    title: "JB's Serene Resort",
    desc: "Nagarjuna Sagar Highway at Mal, Fourth City area, near the Regional Ring Road.",
    status: "Approved layout",
    state: "Telangana",
    locationDetails: "Integrated eco-township and resort layout.",
  },
  {
    chip: "VUDA",
    acres: "150",
    title: "JB's Vishakha",
    desc: "Visakhapatnam, near the Steel Plant and NTPC. Developed as two parcels (90 + 60 acres).",
    status: "Approved layout",
    state: "Andhra Pradesh",
    locationDetails: "Visakhapatnam industrial and residential growth corridor.",
  },
  {
    chip: "HMDA",
    acres: "48",
    title: "JB's Serene Villas",
    desc: "Villa construction carried out on sanctioned building permission.",
    status: "Built",
    state: "Telangana",
    locationDetails: "Gated villa community with completed infrastructure.",
  },
  {
    chip: "HUDA",
    acres: "40",
    title: "JB's Enclave",
    desc: "Nagarjuna Sagar Highway at Bongulur Junction, Outer Ring Road.",
    status: "Approved layout",
    state: "Telangana",
    locationDetails: "Direct ORR exit junction access.",
  },
  {
    chip: "HUDA",
    acres: "38",
    title: "JB's Peacock Valley",
    desc: "Nagpur Highway NH-44 at Medchal, Outer Ring Road.",
    status: "Approved layout",
    state: "Telangana",
    locationDetails: "NH-44 North Hyderabad growth corridor.",
  },
  {
    chip: "NUDA",
    acres: "1.30",
    title: "JB's Apartments",
    desc: "Apartment construction carried out on sanctioned building permission.",
    status: "Built",
    state: "Andhra Pradesh",
    locationDetails: "Urban residential apartment complex.",
  },
  {
    chip: "NUDA",
    acres: "Commercial",
    title: "JB's Shopping Mall",
    desc: "Commercial complex constructed on sanctioned building permission.",
    status: "Built",
    state: "Andhra Pradesh",
    locationDetails: "Prime commercial complex development.",
  },
];

export default function ExperiencePage() {
  const [filterState, setFilterState] = useState<string>("ALL");
  const [filterAuthority, setFilterAuthority] = useState<string>("ALL");

  const filteredVentures = REPRESENTATIVE_PORTFOLIO.filter((v) => {
    if (filterState !== "ALL" && v.state !== filterState) return false;
    if (filterAuthority !== "ALL" && v.chip !== filterAuthority) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-[#0D192B] text-white flex flex-col">
      <Navbar />
      <Breadcrumb items={[{ label: "Our Experience & Portfolio" }]} />

      {/* Hero Header */}
      <section className="bg-[#0A1424] py-16 px-6 border-b border-[#FF5722]/30">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 border border-[#FF5722] bg-[#FF5722]/10 text-[#FF5722] text-xs font-bold px-4 py-2 rounded-sm mb-6 uppercase tracking-widest">
            <Sparkles className="w-4 h-4" />
            <span>Representative Landmark Portfolio</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Selected Representative Developments
          </h1>

          <p className="text-gray-300 text-base md:text-lg max-w-3xl leading-relaxed mb-8">
            The following developments represent a curated sample of our completed land assembly, boundary consolidation, and statutory layout approvals delivered across Telangana and Andhra Pradesh.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-[#FF5722] hover:bg-[#E65100] text-white font-bold px-7 py-3.5 rounded-sm text-sm tracking-wide transition-all shadow-lg flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>REQUEST APPROVAL DOCUMENTS</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Metrics Banner */}
      <section className="bg-[#111f38] py-8 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-extrabold text-[#FF5722]">9</div>
            <div className="text-xs text-gray-400 uppercase tracking-widest mt-1 font-semibold">
              Selected Featured Ventures
            </div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-[#FF5722]">1,869+</div>
            <div className="text-xs text-gray-400 uppercase tracking-widest mt-1 font-semibold">
              Representative Acres Delivered
            </div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-[#FF5722]">4</div>
            <div className="text-xs text-gray-400 uppercase tracking-widest mt-1 font-semibold">
              Statutory Authorities (HMDA, HUDA, VUDA, NUDA)
            </div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-[#FF5722]">2</div>
            <div className="text-xs text-gray-400 uppercase tracking-widest mt-1 font-semibold">
              States (Telangana &amp; Andhra Pradesh)
            </div>
          </div>
        </div>
      </section>

      {/* Filterable Portfolio Grid */}
      <section className="py-16 px-6 max-w-7xl mx-auto w-full">
        {/* Filter Controls */}
        <div className="bg-[#111f38] p-6 rounded-lg border border-white/10 mb-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-2 text-sm text-[#FF5722] font-bold">
            <Filter className="w-4 h-4" />
            <span>FILTER REPRESENTATIVE PORTFOLIO</span>
          </div>

          <div className="flex flex-wrap gap-4 w-full md:w-auto">
            <select
              value={filterState}
              onChange={(e) => setFilterState(e.target.value)}
              className="bg-[#0D192B] border border-white/20 text-xs text-gray-200 rounded px-4 py-2.5 focus:outline-none focus:border-[#FF5722]"
            >
              <option value="ALL">All States</option>
              <option value="Telangana">Telangana</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
            </select>

            <select
              value={filterAuthority}
              onChange={(e) => setFilterAuthority(e.target.value)}
              className="bg-[#0D192B] border border-white/20 text-xs text-gray-200 rounded px-4 py-2.5 focus:outline-none focus:border-[#FF5722]"
            >
              <option value="ALL">All Authorities</option>
              <option value="HMDA">HMDA (Hyderabad)</option>
              <option value="HUDA">HUDA (Hyderabad)</option>
              <option value="VUDA">VUDA (Visakhapatnam)</option>
              <option value="NUDA">NUDA (Nellore)</option>
            </select>
          </div>
        </div>

        {/* Venture Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {filteredVentures.map((venture, idx) => (
            <div
              key={idx}
              className="bg-[#111f38] rounded-lg overflow-hidden border border-white/10 hover:border-[#FF5722] transition-all p-7 flex flex-col justify-between shadow-xl group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="bg-[#0D192B] text-[#FF5722] text-xs font-bold tracking-widest px-3 py-1.5 rounded border border-[#FF5722]/30">
                    {venture.chip} Authority
                  </span>
                  <span
                    className={`text-xs font-semibold px-3 py-1.5 rounded flex items-center gap-1 ${
                      venture.status === "Built"
                        ? "bg-[#FF5722]/20 text-[#FF5722]"
                        : "bg-emerald-500/20 text-emerald-400"
                    }`}
                  >
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>{venture.status}</span>
                  </span>
                </div>

                <div className="text-4xl font-extrabold text-white mb-1">
                  {venture.acres}
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-widest mb-6 font-semibold">
                  Acres Area
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FF5722] transition-colors">
                  {venture.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {venture.desc}
                </p>
                <div className="text-xs text-gray-400 bg-[#0D192B] p-3 rounded mb-6 border border-white/5">
                  <span className="text-[#FF5722] font-semibold">Location Highlight: </span>
                  {venture.locationDetails}
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-white/10 pt-4">
                <span className="text-gray-400 text-xs font-semibold flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#FF5722]" />
                  <span>{venture.state}</span>
                </span>
                <Link
                  href="/contact"
                  className="text-[#FF5722] hover:underline text-xs font-bold flex items-center gap-1"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
}
