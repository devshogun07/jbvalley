import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import BackToTop from "../components/BackToTop";
import Link from "next/link";
import {
  Users,
  HardHat,
  Building2,
  Award,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Briefcase,
  FileCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Leadership & Governance — JB Valley Homes Infra LLP",
  description:
    "Learn about JB Valley Homes Infra LLP's leadership, led by Founder Er. Papeshwar Rao Berelli with 41 years of civil engineering discipline and township experience.",
};

const LEADERSHIP_HIGHLIGHTS = [
  {
    period: "16 Years Public Sector Practice",
    role: "Assistant Executive Engineer",
    entity: "AP Panchayat Raj Department (Government of Andhra Pradesh)",
    desc: "Managed large-scale rural water supply networks, public civil tenders, and departmental quality audits.",
    icon: HardHat,
  },
  {
    period: "25+ Years Private Township Practice",
    role: "Township Developer & Land Assembler",
    entity: "Independent Township Ventures",
    desc: "Consolidated multi-parcel land holdings, securing layout approvals across HMDA, HUDA, VUDA, and NUDA.",
    icon: Building2,
  },
  {
    period: "Current Corporate Role",
    role: "Founder & Designated Partner",
    entity: "JB Valley Homes Infra LLP",
    desc: "Directing master planning, institutional capital partnerships, and statutory compliance for Konkan Valley.",
    icon: Award,
  },
];

export default function LeadershipPage() {
  return (
    <div className="min-h-screen bg-[#0D192B] text-white flex flex-col">
      <Navbar />
      <Breadcrumb items={[{ label: "Leadership & Governance" }]} />

      {/* Hero Header */}
      <section className="bg-[#0A1424] py-16 px-6 border-b border-[#FF5722]/30">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 border border-[#FF5722] bg-[#FF5722]/10 text-[#FF5722] text-xs font-bold px-4 py-2 rounded-sm mb-6 uppercase tracking-widest">
            <Users className="w-4 h-4" />
            <span>Corporate Governance &amp; Leadership</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Leadership &amp; Technical Oversight
          </h1>

          <p className="text-gray-300 text-base md:text-lg max-w-3xl leading-relaxed mb-8">
            JB Valley Homes Infra LLP’s execution discipline is backed by four decades of public civil engineering service and private township land development experience.
          </p>
        </div>
      </section>

      {/* Founder Profile Section (Framed Portrait — NO HEAD CROPPING) */}
      <section className="py-20 px-6 max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 relative">
            <div className="relative rounded-lg overflow-hidden border-2 border-[#FF5722]/40 shadow-2xl bg-[#111f38] p-4 flex flex-col items-center">
              <img
                src="/profile2.png"
                alt="Er. Papeshwar Rao Berelli"
                className="w-full h-auto max-h-[480px] object-contain object-top rounded"
              />
              <div className="w-full bg-[#0A1424] p-4 mt-3 rounded text-center border border-white/10">
                <p className="text-white font-bold text-lg">Er. Papeshwar Rao Berelli</p>
                <p className="text-xs text-[#FF8A65] font-semibold uppercase tracking-wider mt-0.5">
                  Founder &amp; Designated Partner
                </p>
              </div>
            </div>

            {/* Metric Floating Badge */}
            <div className="absolute -bottom-4 -right-4 bg-[#FF5722] text-white p-4 rounded-sm shadow-xl hidden sm:block">
              <div className="text-2xl font-extrabold">41 Yrs</div>
              <div className="text-[10px] font-bold uppercase tracking-widest">
                Practice
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <span className="text-[#FF5722] text-xs font-bold uppercase tracking-widest block mb-2">
              Promoter Profile &amp; Governance
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-6">
              Engineering Expertise Backing Enterprise Scale
            </h2>

            <p className="text-gray-300 text-base leading-relaxed mb-6">
              Er. Papeshwar Rao Berelli’s career began in public government service, spending sixteen years as an Assistant Executive Engineer with the Andhra Pradesh Panchayat Raj Department directing rural water supply infrastructure and public works across district administrations.
            </p>

            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Over the twenty-five years following his public service, he has acquired, consolidated, and executed representative township land holdings, obtaining statutory sanctions from HMDA, HUDA, VUDA, and NUDA. As Founder and Designated Partner, he leads the technical framework of JB Valley Homes Infra LLP.
            </p>

            <div className="space-y-4 mb-8">
              {LEADERSHIP_HIGHLIGHTS.map((lh, idx) => {
                const Icon = lh.icon;
                return (
                  <div key={idx} className="bg-[#111f38] p-5 rounded border border-white/10 flex gap-4 items-start">
                    <Icon className="w-6 h-6 text-[#FF5722] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs text-[#FF8A65] font-bold uppercase tracking-wider block">
                        {lh.period}
                      </span>
                      <h3 className="text-base font-bold text-white mb-0.5">{lh.role} — {lh.entity}</h3>
                      <p className="text-xs text-gray-400">{lh.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link
              href="/experience"
              className="inline-flex items-center gap-2 bg-[#FF5722] hover:bg-[#E65100] text-white font-bold px-7 py-3.5 rounded-sm text-sm tracking-wide shadow-lg uppercase"
            >
              <span>REVIEW REPRESENTATIVE PORTFOLIO</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Governance & Compliance Panel */}
      <section className="bg-[#0A1424] py-20 px-6 border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#FF5722] text-xs font-bold uppercase tracking-widest">
              Governance Framework
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-2 mb-4">
              Institutional Oversight Structure
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#111f38] p-8 rounded-lg border border-white/10">
              <ShieldCheck className="w-8 h-8 text-[#FF5722] mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Legal &amp; Tenure Security</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Comprehensive land title verification, encumbrance auditing, and statutory boundary consolidation.
              </p>
            </div>

            <div className="bg-[#111f38] p-8 rounded-lg border border-white/10">
              <FileCheck className="w-8 h-8 text-[#FF5722] mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Statutory Sanctions</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Strict adherence to urban development authority guidelines prior to marketing or layout release.
              </p>
            </div>

            <div className="bg-[#111f38] p-8 rounded-lg border border-white/10">
              <Building2 className="w-8 h-8 text-[#FF5722] mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Phased Execution</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Sequential development sequence matching capital deployment to physical completion records.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
}
