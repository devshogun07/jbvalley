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

const VENTURES: Venture[] = [
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

export default function TrackRecordPage() {
  const [filterState, setFilterState] = useState<string>("ALL");
  const [filterAuthority, setFilterAuthority] = useState<string>("ALL");

  const filteredVentures = VENTURES.filter((v) => {
    if (filterState !== "ALL" && v.state !== filterState) return false;
    if (filterAuthority !== "ALL" && v.chip !== filterAuthority) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-[#0D192B] text-white flex flex-col">
      <Navbar />
      <Breadcrumb items={[{ label: "Track Record" }]} />

      {/* Hero Header */}
      <section className="bg-[#0A1424] py-16 px-6 border-b border-[#c9a84c]/20">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 border border-[#c9a84c] bg-[#c9a84c]/10 text-[#c9a84c] text-xs font-semibold px-4 py-2 rounded-sm mb-6 uppercase tracking-widest">
            <FileCheck2 className="w-4 h-4" />
            <span>Proven Execution Record</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Nine Sanctioned Township Ventures
          </h1>

          <p className="text-gray-300 text-base md:text-lg max-w-3xl leading-relaxed mb-8">
            1,869 acres of land assembly, boundary consolidation, and statutory layout approvals delivered across Telangana and Andhra Pradesh under four statutory urban development authorities.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-[#c9a84c] hover:bg-[#d9b45f] text-[#0D192B] font-bold px-7 py-3.5 rounded-sm text-sm tracking-wide transition-all shadow-lg flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>REQUEST APPROVAL DOCUMENTS</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#111f38] py-8 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-extrabold text-[#c9a84c]">9</div>
            <div className="text-xs text-gray-400 uppercase tracking-widest mt-1">
              Sanctioned Projects
            </div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-[#c9a84c]">1,869</div>
            <div className="text-xs text-gray-400 uppercase tracking-widest mt-1">
              Acres Sanctioned &amp; Built
            </div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-[#c9a84c]">4</div>
            <div className="text-xs text-gray-400 uppercase tracking-widest mt-1">
              Development Authorities
            </div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-[#c9a84c]">2</div>
            <div className="text-xs text-gray-400 uppercase tracking-widest mt-1">
              States (TS &amp; AP)
            </div>
          </div>
        </div>
      </section>

      {/* Filterable Ventures Ledger */}
      <section className="py-16 px-6 max-w-7xl mx-auto w-full">
        {/* Filter Controls */}
        <div className="bg-[#111f38] p-6 rounded-lg border border-white/10 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-sm text-[#c9a84c] font-bold">
            <Filter className="w-4 h-4" />
            <span>FILTER VENTURES LEDGER</span>
          </div>

          <div className="flex flex-wrap gap-4 w-full md:w-auto">
            <select
              value={filterState}
              onChange={(e) => setFilterState(e.target.value)}
              className="bg-[#0D192B] border border-white/20 text-xs text-gray-200 rounded px-4 py-2.5 focus:outline-none focus:border-[#c9a84c]"
            >
              <option value="ALL">All States</option>
              <option value="Telangana">Telangana</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
            </select>

            <select
              value={filterAuthority}
              onChange={(e) => setFilterAuthority(e.target.value)}
              className="bg-[#0D192B] border border-white/20 text-xs text-gray-200 rounded px-4 py-2.5 focus:outline-none focus:border-[#c9a84c]"
            >
              <option value="ALL">All Authorities</option>
              <option value="HMDA">HMDA (Hyderabad)</option>
              <option value="HUDA">HUDA (Hyderabad)</option>
              <option value="VUDA">VUDA (Visakhapatnam)</option>
              <option value="NUDA">NUDA (Nellore)</option>
            </select>
          </div>
        </div>

        {/* Venture Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {filteredVentures.map((venture, idx) => (
            <div
              key={idx}
              className="bg-[#111f38] rounded-lg overflow-hidden border border-white/10 hover:border-[#c9a84c] transition-all p-7 flex flex-col justify-between shadow-xl group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="bg-[#0D192B] text-[#c9a84c] text-xs font-bold tracking-widest px-3 py-1.5 rounded border border-[#c9a84c]/30">
                    {venture.chip} Authority
                  </span>
                  <span
                    className={`text-xs font-semibold px-3 py-1.5 rounded flex items-center gap-1 ${
                      venture.status === "Built"
                        ? "bg-[#c9a84c]/20 text-[#c9a84c]"
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

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#c9a84c] transition-colors">
                  {venture.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {venture.desc}
                </p>
                <div className="text-xs text-gray-400 bg-[#0D192B] p-3 rounded mb-6 border border-white/5">
                  <span className="text-[#c9a84c] font-semibold">Location Highlight: </span>
                  {venture.locationDetails}
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-white/10 pt-4">
                <span className="text-gray-400 text-xs font-semibold flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#c9a84c]" />
                  <span>{venture.state}</span>
                </span>
                <Link
                  href="/contact"
                  className="text-[#c9a84c] hover:underline text-xs font-bold flex items-center gap-1"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Statutory Disclosures */}
      <section className="bg-[#0A1424] py-16 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <Layers className="w-10 h-10 text-[#c9a84c] mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-4">Statutory Layout Approval Integrity</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            Every listed venture reflects completed land assembly, statutory layout sanctions, or building permissions issued by municipal authorities. Official documents are accessible to legal and institutional partners under NDA.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#c9a84c] hover:bg-[#d9b45f] text-[#0D192B] font-bold px-8 py-4 rounded-sm text-sm"
          >
            <span>REQUEST VERIFICATION DOSSIER</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
}
