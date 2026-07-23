import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import BackToTop from "../components/BackToTop";
import Link from "next/link";
import {
  Building2,
  ShieldCheck,
  Award,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Layers,
  Compass,
  Briefcase,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Company — JB Valley Homes Infra LLP",
  description:
    "JB Valley Homes Infra LLP is an institutional master township and civil infrastructure development enterprise specializing in large-scale land assembly and statutory approvals.",
};

const CAPABILITIES = [
  {
    title: "Large-Scale Land Assembly",
    desc: "Capability to aggregate 700+ acre single contiguous parcels with clear title verification, boundary consolidation, and legal tenure security.",
    icon: MapPin,
  },
  {
    title: "Multi-Authority Statutory Sanctions",
    desc: "Proven track record securing statutory layout approvals across 4 development authorities: HMDA, HUDA, VUDA, and NUDA.",
    icon: ShieldCheck,
  },
  {
    title: "Civil Infrastructure Discipline",
    desc: "Methodical execution of primary utility backbones, arterial road networks, storm water drainage, and power distribution grids.",
    icon: Building2,
  },
  {
    title: "Phased Exposure Management",
    desc: "Structuring capital deployment into distinct phases to minimize risk and align execution with market demand.",
    icon: Layers,
  },
];

export default function AboutCompanyPage() {
  return (
    <div className="min-h-screen bg-[#0D192B] text-white flex flex-col">
      <Navbar />
      <Breadcrumb items={[{ label: "About Company" }]} />

      {/* Hero Section */}
      <section className="bg-[#0A1424] py-20 px-6 border-b border-[#FF5722]/30">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 border border-[#FF5722] bg-[#FF5722]/10 text-[#FF5722] text-xs font-bold px-4 py-2 rounded-sm mb-6 uppercase tracking-widest">
            <Building2 className="w-4 h-4" />
            <span>Institutional Corporate Profile</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6 max-w-4xl">
            JB Valley Homes Infra LLP
          </h1>

          <p className="text-xl text-[#FF8A65] font-semibold mb-6">
            Master Township &amp; Infrastructure Development Enterprise
          </p>

          <p className="text-gray-300 text-base md:text-lg max-w-3xl leading-relaxed mb-8">
            JB Valley Homes Infra LLP is an institutional developer built on a foundation of civil engineering discipline, multi-parcel land consolidation, and multi-authority statutory governance. We specialize in transforming large-scale land banks into master-planned, self-sustaining coastal and urban townships.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/experience"
              className="bg-[#FF5722] hover:bg-[#E65100] text-white font-bold px-7 py-3.5 rounded-sm text-sm tracking-wide transition-all shadow-lg flex items-center gap-2"
            >
              <span>EXPLORE REPRESENTATIVE PORTFOLIO</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="border border-gray-400 hover:border-[#FF5722] text-white hover:text-[#FF5722] font-semibold px-7 py-3.5 rounded-sm text-sm tracking-wide transition-all"
            >
              REQUEST CORPORATE DOSSIER
            </Link>
          </div>
        </div>
      </section>

      {/* Enterprise Metrics Bar */}
      <section className="bg-[#111f38] py-10 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-extrabold text-[#FF5722]">1,869+</div>
            <div className="text-xs text-gray-400 uppercase tracking-widest mt-1 font-semibold">
              Representative Acres Developed
            </div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-extrabold text-[#FF5722]">4</div>
            <div className="text-xs text-gray-400 uppercase tracking-widest mt-1 font-semibold">
              Statutory Authorities (HMDA, HUDA, VUDA, NUDA)
            </div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-extrabold text-[#FF5722]">41 Yrs</div>
            <div className="text-xs text-gray-400 uppercase tracking-widest mt-1 font-semibold">
              Engineering Leadership Practice
            </div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-extrabold text-[#FF5722]">3,500+</div>
            <div className="text-xs text-gray-400 uppercase tracking-widest mt-1 font-semibold">
              Acres Proposed Konkan Master Vision
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#FF5722] text-xs font-bold uppercase tracking-widest">
            Institutional Capability
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-4">
            Core Enterprise Competencies
          </h2>
          <p className="text-gray-400 text-sm">
            Delivering structural value to government authorities, financial institutions, co-developers, and land partners.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {CAPABILITIES.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div
                key={idx}
                className="bg-[#111f38] p-8 rounded-lg border border-white/10 hover:border-[#FF5722] transition-all shadow-xl flex gap-6 items-start group"
              >
                <div className="p-4 bg-[#0D192B] text-[#FF5722] rounded border border-[#FF5722]/30 shrink-0 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FF5722] transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{cap.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Corporate Governance Callout */}
      <section className="bg-[#0A1424] py-20 px-6 border-t border-b border-white/10">
        <div className="max-w-5xl mx-auto text-center">
          <ShieldCheck className="w-12 h-12 text-[#FF5722] mx-auto mb-4" />
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Corporate Governance &amp; Full Disclosure Policy
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed max-w-2xl mx-auto mb-8">
            JB Valley Homes Infra LLP operates under complete transparency. Every project milestone, statutory application, and land tenure title is maintained in a certified corporate ledger available to institutional partners under non-disclosure.
          </p>
          <Link
            href="/leadership"
            className="inline-flex items-center gap-2 bg-[#FF5722] hover:bg-[#E65100] text-white font-bold px-8 py-4 rounded-sm text-sm"
          >
            <span>LEARN ABOUT OUR LEADERSHIP &amp; GOVERNANCE</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
}
