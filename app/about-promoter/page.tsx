import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import BackToTop from "../components/BackToTop";
import Link from "next/link";
import {
  HardHat,
  Building2,
  Award,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  MapPin,
  Clock,
  Briefcase,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Promoter — Er. Papeshwar Rao Berelli | JB Valley Homes Infra LLP",
  description:
    "Er. Papeshwar Rao Berelli — 41 years of civil engineering discipline across public infrastructure and 9 sanctioned private township ventures totaling 1,869 acres.",
};

const TIMELINE = [
  {
    period: "1983 — 1999 (16 Years)",
    role: "Assistant Executive Engineer",
    organization: "AP Panchayat Raj Department (Government of Andhra Pradesh)",
    highlights: [
      "Directed rural water supply and civil engineering infrastructure across district administrations.",
      "Managed public tender processes, departmental quality audits, and municipal compliance.",
      "Engineered rural connectivity pipelines and civic infrastructure projects.",
    ],
    icon: HardHat,
  },
  {
    period: "1999 — Present (25+ Years)",
    role: "Township Developer & Land Assembler",
    organization: "Independent Township Ventures",
    highlights: [
      "Conceptualized, acquired, and consolidated multi-parcel land holdings totaling 1,869 acres.",
      "Secured statutory layout approvals from 4 regional authorities: HMDA, HUDA, VUDA, and NUDA.",
      "Delivered 9 completed and sanctioned ventures across Telangana and Andhra Pradesh.",
    ],
    icon: Building2,
  },
  {
    period: "Present Enterprise",
    role: "Founder & Designated Partner",
    organization: "JB Valley Homes Infra LLP",
    highlights: [
      "Leading the 3,500+ acre Konkan Valley master-planned township project.",
      "Managing institutional consortium capital and structured co-developer partnerships.",
      "Enforcing strict phased development sequence and statutory transparency.",
    ],
    icon: Award,
  },
];

const CORE_PRINCIPLES = [
  {
    title: "Engineering Discipline",
    desc: "Rigorous civil engineering methodology applied to land consolidation, road networks, storm water drainage, and utility grids.",
    icon: GraduationCap,
  },
  {
    title: "Statutory Compliance First",
    desc: "No marketing or land sale commences prior to obtaining statutory layout sanctions and regulatory clearances.",
    icon: ShieldCheck,
  },
  {
    title: "Large-Scale Land Assembly",
    desc: "Proven capability to aggregate 700+ acre single contiguous parcels with clear title verification and boundary demarcation.",
    icon: MapPin,
  },
  {
    title: "Phased Exposure Management",
    desc: "Structuring capital deployment into distinct phases to minimize risk and align execution with demand.",
    icon: Clock,
  },
];

export default function AboutPromoterPage() {
  return (
    <div className="min-h-screen bg-[#0D192B] text-white flex flex-col">
      <Navbar />
      <Breadcrumb items={[{ label: "Promoter Profile" }]} />

      {/* Hero Section */}
      <section className="relative bg-[#0A1424] py-20 px-6 border-b border-[#c9a84c]/20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 border border-[#c9a84c] bg-[#c9a84c]/10 text-[#c9a84c] text-xs font-semibold px-4 py-2 rounded-sm mb-6 uppercase tracking-widest">
              <Briefcase className="w-4 h-4" />
              <span>Founder &amp; Designated Partner Profile</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Er. Papeshwar Rao Berelli
            </h1>

            <p className="text-lg text-[#c9a84c] font-semibold mb-6">
              41 Years Across Public Civil Infrastructure &amp; Private Master-Planned Townships
            </p>

            <p className="text-gray-300 text-base leading-relaxed mb-8">
              Er. Papeshwar Rao Berelli’s four-decade career spans sixteen years as a senior government civil engineer directing public works and twenty-five years executing large-scale private township developments. His institutional discipline, statutory mastery, and land assembly expertise form the foundation of JB Valley Homes Infra LLP.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/track-record"
                className="bg-[#c9a84c] hover:bg-[#d9b45f] text-[#0D192B] font-bold px-7 py-3.5 rounded-sm text-sm tracking-wide transition-all shadow-lg flex items-center gap-2"
              >
                <span>VIEW 9 SANCTIONED VENTURES</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="border border-gray-400 hover:border-[#c9a84c] text-white hover:text-[#c9a84c] font-semibold px-7 py-3.5 rounded-sm text-sm tracking-wide transition-all"
              >
                REQUEST DOSSIER
              </Link>
            </div>
          </div>

          <div className="md:col-span-5 relative">
            <div className="relative rounded-lg overflow-hidden border-2 border-[#c9a84c]/40 shadow-2xl bg-[#111f38]">
              <img
                src="/profile2.png"
                alt="Er. Papeshwar Rao Berelli"
                className="w-full h-auto object-cover max-h-[500px]"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0A1424] via-[#0A1424]/80 to-transparent p-6">
                <p className="text-white font-bold text-lg">Er. Papeshwar Rao Berelli</p>
                <p className="text-xs text-[#c9a84c] uppercase tracking-wider">
                  Founder &amp; Designated Partner, JB Valley Homes Infra LLP
                </p>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-[#c9a84c] text-[#0D192B] p-5 rounded-sm shadow-xl hidden sm:block">
              <div className="text-3xl font-extrabold">41</div>
              <div className="text-[10px] font-bold uppercase tracking-widest">
                Years Practice
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics Banner */}
      <section className="bg-[#c9a84c] py-10 px-6 text-[#0D192B]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-extrabold">16 Years</div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#0D192B]/80 mt-1">
              Public Service (AEE, AP Panchayat Raj)
            </div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-extrabold">25 Years</div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#0D192B]/80 mt-1">
              Independent Township Development
            </div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-extrabold">1,869 Acres</div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#0D192B]/80 mt-1">
              Sanctioned Land Assembly
            </div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-extrabold">4 Authorities</div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#0D192B]/80 mt-1">
              HMDA, HUDA, VUDA, NUDA Sanctions
            </div>
          </div>
        </div>
      </section>

      {/* Career Timeline Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest">
            Professional Evolution
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-4">
            Four Decades of Engineering Record
          </h2>
          <p className="text-gray-400 text-sm">
            From managing public sector civil infrastructure projects to founding multi-thousand acre private township projects.
          </p>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:left-8 md:before:left-1/2 before:-ml-px before:w-0.5 before:bg-[#c9a84c]/30">
          {TIMELINE.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="relative flex flex-col md:flex-row items-center group">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#0B1628] border-2 border-[#c9a84c] text-[#c9a84c] z-10 shrink-0 mb-4 md:mb-0">
                  <Icon className="w-7 h-7" />
                </div>

                <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"}`}>
                  <div className="bg-[#111f38] p-6 rounded-lg border border-white/10 hover:border-[#c9a84c] transition-colors shadow-lg">
                    <span className="inline-block text-[#c9a84c] text-xs font-bold uppercase tracking-widest mb-1">
                      {item.period}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-1">{item.role}</h3>
                    <p className="text-sm font-semibold text-gray-300 mb-4">{item.organization}</p>
                    <ul className={`space-y-2 text-xs text-gray-400 ${idx % 2 === 0 ? "md:items-end" : ""}`}>
                      {item.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#c9a84c] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Core Principles Grid */}
      <section className="bg-[#0A1424] py-20 px-6 border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest">
              Core Philosophy
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-2">
              Foundational Engineering Principles
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {CORE_PRINCIPLES.map((cp, idx) => {
              const Icon = cp.icon;
              return (
                <div key={idx} className="bg-[#111f38] p-8 rounded-lg border border-white/10 hover:border-[#c9a84c] transition-all group">
                  <Icon className="w-10 h-10 text-[#c9a84c] mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-bold text-white mb-3">{cp.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{cp.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
}
