import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import BackToTop from "../components/BackToTop";
import Link from "next/link";
import {
  ShieldCheck,
  FileCheck2,
  Lock,
  AlertTriangle,
  ArrowRight,
  Landmark,
  CheckCircle2,
  FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Approvals & Statutory Governance | JB Valley Homes Infra LLP",
  description:
    "Review JB Valley Homes Infra LLP's evidence-based governance, statutory clearance process, and transparency disclosures for Konkan Valley.",
};

const STEPS = [
  {
    number: "01",
    title: "Land Assembly & Title Consolidation",
    desc: "Multi-parcel land acquisition, boundary consolidation, and legal instruments evidencing clear title of every parcel.",
  },
  {
    number: "02",
    title: "Statutory Clearance & Sanction",
    desc: "Zoning conversion, environmental clearances, master plan approval, and RERA registration before marketing.",
  },
  {
    number: "03",
    title: "Phased Construction Execution",
    desc: "Sequential 10-phase capital deployment, each backed by separate contractor packages and quality audits.",
  },
  {
    number: "04",
    title: "Completion Certificate & Handover",
    desc: "Physical possession granted upon statutory completion certification and asset facility setup.",
  },
];

export default function ApprovalsPage() {
  return (
    <div className="min-h-screen bg-[#0D192B] text-white flex flex-col">
      <Navbar />
      <Breadcrumb items={[{ label: "Approvals & Governance" }]} />

      {/* Hero Header */}
      <section className="bg-[#0A1424] py-16 px-6 border-b border-[#c9a84c]/20">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 border border-[#c9a84c] bg-[#c9a84c]/10 text-[#c9a84c] text-xs font-semibold px-4 py-2 rounded-sm mb-6 uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" />
            <span>Governance &amp; Statutory Integrity</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Evidence-Based Governance &amp; Regulatory Compliance
          </h1>

          <p className="text-gray-300 text-base md:text-lg max-w-3xl leading-relaxed mb-8">
            Every step of development at JB Valley Homes Infra LLP is conducted under strict public civil works discipline, statutory disclosures, and transparent reporting.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-[#c9a84c] hover:bg-[#d9b45f] text-[#0D192B] font-bold px-7 py-3.5 rounded-sm text-sm tracking-wide transition-all shadow-lg flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>REQUEST GOVERNANCE DOSSIER</span>
            </Link>
          </div>
        </div>
      </section>

      {/* MahaRERA Advisory Alert Box */}
      <section className="py-12 px-6 max-w-7xl mx-auto w-full">
        <div className="bg-[#111f38] border-2 border-[#c9a84c] rounded-lg p-8 shadow-2xl flex flex-col md:flex-row gap-6 items-start">
          <div className="p-4 bg-[#0D192B] text-[#c9a84c] rounded-full shrink-0 border border-[#c9a84c]">
            <AlertTriangle className="w-8 h-8" />
          </div>
          <div>
            <span className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest">
              Regulatory Disclosure &amp; Advisory Notice
            </span>
            <h2 className="text-2xl font-bold text-white mt-1 mb-3">
              MahaRERA Status &amp; Non-Solicitation Statement
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Konkan Valley is an integrated master-planned township project currently in the land assembly, survey, and statutory planning phase. **The project is NOT currently registered under MahaRERA (Real Estate Regulation and Development Act, 2016)**.
            </p>
            <p className="text-gray-400 text-xs leading-relaxed">
              Nothing on this corporate portal constitutes an offer, advertisement, invitation, or solicitation to purchase plots, units, or apartments. No booking amounts or public advance payments are solicited or accepted. Information is shared strictly for corporate disclosure and institutional evaluation.
            </p>
          </div>
        </div>
      </section>

      {/* 4-Step Sequence */}
      <section className="bg-[#0A1424] py-20 px-6 border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest">
              Development Sequence
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-2 mb-4">
              Strict Order of Execution
            </h2>
            <p className="text-gray-400 text-sm">
              No stage commences before the preceding phase is legally documented and verified.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {STEPS.map((step) => (
              <div
                key={step.number}
                className="bg-[#111f38] p-8 rounded-lg border border-white/10 relative hover:border-[#c9a84c] transition-colors"
              >
                <div className="w-12 h-12 rounded-full border border-[#c9a84c] bg-[#0D192B] flex items-center justify-center text-[#c9a84c] font-extrabold mb-6">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal & Client Verification Notice */}
      <section className="py-20 px-6 max-w-5xl mx-auto w-full text-center">
        <Landmark className="w-12 h-12 text-[#c9a84c] mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-white mb-4">Institutional Audit &amp; Legal Verification</h2>
        <p className="text-gray-300 text-sm leading-relaxed mb-8">
          JB Valley Homes Infra LLP maintains a full disclosure ledger. Institutional investors, banking partners, and co-developers may request access to certified land title deeds, encumbrance certificates, and statutory applications.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#c9a84c] hover:bg-[#d9b45f] text-[#0D192B] font-bold px-8 py-4 rounded-sm text-sm"
        >
          <span>REQUEST GOVERNANCE &amp; TITLE LEDGER</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
}
