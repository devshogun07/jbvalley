import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import BackToTop from "../components/BackToTop";
import Link from "next/link";
import {
  Globe,
  Building2,
  ShieldCheck,
  Users,
  ArrowRight,
  AlertCircle,
  Briefcase,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Global Operations & Dubai Marketing Desk — JB Valley Homes Infra LLP",
  description:
    "Explore JB Valley Homes Infra LLP's global operations, Middle East GCC desk, and international diaspora strategy for Konkan Valley.",
};

const STRATEGY_PILLARS = [
  {
    title: "Middle East Corporate Desk",
    desc: "Dedicated channel for Gulf Cooperation Council (GCC) based institutional funds, family offices, and NRI investors.",
    icon: Building2,
  },
  {
    title: "Cross-Border Investment Framework",
    desc: "Structured investment protocols aligned with Reserve Bank of India (FDI/FEMA) guidelines for non-resident capital.",
    icon: ShieldCheck,
  },
  {
    title: "International Marketing Network",
    desc: "Strategic advisory partnerships with real estate marketing agencies in Dubai, Abu Dhabi, Doha, and London.",
    icon: Globe,
  },
  {
    title: "Consortium Capital Participation",
    desc: "Engaging global consortium equity partners for phased infrastructure development of master township sectors.",
    icon: Users,
  },
];

export default function GlobalMarketingPage() {
  return (
    <div className="min-h-screen bg-[#0D192B] text-white flex flex-col">
      <Navbar />
      <Breadcrumb items={[{ label: "Global Marketing & Dubai Operations" }]} />

      {/* Hero Header */}
      <section className="bg-[#0A1424] py-16 px-6 border-b border-[#FF5722]/30">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 border border-[#FF5722] bg-[#FF5722]/10 text-[#FF5722] text-xs font-bold px-4 py-2 rounded-sm mb-6 uppercase tracking-widest">
            <Globe className="w-4 h-4" />
            <span>International Desk &amp; Global Capital</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Dubai Operations &amp; International Strategy
          </h1>

          <p className="text-gray-300 text-base md:text-lg max-w-3xl leading-relaxed mb-8">
            Establishing an international corporate bridge between global capital hubs and India's high-growth Konkan coastal development corridor.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-[#FF5722] hover:bg-[#E65100] text-white font-bold px-7 py-3.5 rounded-sm text-sm tracking-wide transition-all shadow-lg flex items-center gap-2"
            >
              <Briefcase className="w-4 h-4" />
              <span>CONNECT WITH GLOBAL DESK</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Verification Note Box */}
      <section className="py-10 px-6 max-w-7xl mx-auto w-full">
        <div className="bg-[#111f38] border border-[#FF5722]/40 rounded-lg p-6 flex items-start gap-4 text-xs text-gray-300 shadow-xl">
          <AlertCircle className="w-5 h-5 text-[#FF5722] shrink-0 mt-0.5" />
          <div>
            <span className="text-[#FF5722] font-bold uppercase tracking-wider block mb-1">
              Corporate Verification Review Note:
            </span>
            <p className="leading-relaxed">
              The international marketing and Dubai desk structure outlined on this page describes corporate representation frameworks intended for cross-border institutional engagement. **All figures, partner entities, and regulatory compliance protocols are flagged for final legal verification by client leadership prior to public international syndication.**
            </p>
          </div>
        </div>
      </section>

      {/* Pillars Grid */}
      <section className="py-16 px-6 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#FF5722] text-xs font-bold uppercase tracking-widest">
            Strategic Pillars
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-4">
            Global Capital &amp; Outreach Framework
          </h2>
          <p className="text-gray-400 text-sm">
            Professional representation focused on corporate credibility and structured co-development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {STRATEGY_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-[#111f38] p-8 rounded-lg border border-white/10 hover:border-[#FF5722] transition-all shadow-xl flex gap-6 items-start"
              >
                <div className="p-4 bg-[#0D192B] text-[#FF5722] rounded border border-[#FF5722]/30 shrink-0">
                  <Icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{pillar.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Call to action */}
      <section className="bg-[#0A1424] py-20 px-6 border-t border-b border-white/10 text-center">
        <div className="max-w-4xl mx-auto">
          <Globe className="w-12 h-12 text-[#FF5722] mx-auto mb-4" />
          <h2 className="text-3xl font-extrabold text-white mb-4">
            GCC &amp; International Investor Inquiry Desk
          </h2>
          <p className="text-gray-300 text-sm max-w-2xl mx-auto mb-8 leading-relaxed">
            For institutional syndication, joint development proposals, or non-resident investor enquiries, connect directly with our designated leadership team.
          </p>
          <Link
            href="/contact"
            className="bg-[#FF5722] hover:bg-[#E65100] text-white font-bold px-8 py-4 rounded-sm text-sm tracking-wide inline-flex items-center gap-2 shadow-lg"
          >
            <span>SUBMIT INTERNATIONAL ENQUIRY</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
}
