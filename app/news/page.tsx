import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import BackToTop from "../components/BackToTop";
import Link from "next/link";
import {
  Newspaper,
  Calendar,
  ArrowRight,
  Sparkles,
  FileText,
  Building2,
  Globe,
} from "lucide-react";

export const metadata: Metadata = {
  title: "News & Insights — JB Valley Homes Infra LLP",
  description:
    "Official corporate announcements, press updates, master township planning milestones, and regional market insights from JB Valley Homes Infra LLP.",
};

const NEWS_ARTICLES = [
  {
    date: "July 2026",
    category: "Master Planning",
    title: "Konkan Valley Environmental & Topographical Survey Finalized",
    summary: "Detailed contour mapping and soil testing completed across the initial phases of the 3,500+ acre proposed township basin.",
    tag: "Milestone",
  },
  {
    date: "June 2026",
    category: "Corporate Operations",
    title: "Middle East Corporate Desk Established for GCC Investors",
    summary: "JB Valley Homes Infra LLP announces dedicated cross-border investment framework for non-resident Indian capital and institutional funds.",
    tag: "Global Desk",
  },
  {
    date: "May 2026",
    category: "Infrastructure",
    title: "NH-66 Four-Lane Expansion Enhances Coastal Corridor Travel Times",
    summary: "Completion of key highway flyover segments reduces drive times between North Goa Mopa Airport and Konkan Valley to under 30 minutes.",
    tag: "Connectivity",
  },
];

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-[#0D192B] text-white flex flex-col">
      <Navbar />
      <Breadcrumb items={[{ label: "News & Insights" }]} />

      {/* Hero Header */}
      <section className="bg-[#0A1424] py-16 px-6 border-b border-[#FF5722]/30">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 border border-[#FF5722] bg-[#FF5722]/10 text-[#FF5722] text-xs font-bold px-4 py-2 rounded-sm mb-6 uppercase tracking-widest">
            <Newspaper className="w-4 h-4" />
            <span>Corporate Announcements &amp; Media</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            News, Press &amp; Market Insights
          </h1>

          <p className="text-gray-300 text-base md:text-lg max-w-3xl leading-relaxed">
            Stay updated with official announcements, infrastructure milestones, statutory updates, and industry insights from JB Valley Homes Infra LLP.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-3 gap-8">
          {NEWS_ARTICLES.map((article, idx) => (
            <article
              key={idx}
              className="bg-[#111f38] rounded-lg p-8 border border-white/10 hover:border-[#FF5722] transition-all flex flex-col justify-between shadow-xl group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-[#0D192B] text-[#FF5722] text-[11px] font-bold px-3 py-1 rounded border border-[#FF5722]/30 uppercase tracking-wider">
                    {article.tag}
                  </span>
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{article.date}</span>
                  </span>
                </div>

                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-[#FF5722] transition-colors leading-snug">
                  {article.title}
                </h2>

                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {article.summary}
                </p>
              </div>

              <div className="border-t border-white/10 pt-4">
                <Link
                  href="/contact"
                  className="text-xs font-bold text-[#FF5722] hover:underline flex items-center gap-1"
                >
                  <span>Read Corporate Disclosure</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
}
