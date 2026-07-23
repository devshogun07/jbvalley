import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Link from "next/link";
import {
  Building2,
  ShieldCheck,
  Award,
  ArrowRight,
  Plane,
  Navigation,
  Train,
  Waves,
  Globe,
  CheckCircle2,
  MapPin,
  Sparkles,
  Layers,
  PhoneCall,
  Briefcase,
} from "lucide-react";

const STATS = [
  { value: "3,500+", label: "ACRES PROPOSED MASTER TOWNSHIP" },
  { value: "700+", label: "ACRE CONTIGUOUS PARCELS ASSEMBLED" },
  { value: "4", label: "STATUTORY DEVELOPMENT AUTHORITIES" },
  { value: "41 YRS", label: "CIVIL ENGINEERING LEADERSHIP" },
];

const FEATURED_DEVELOPMENTS = [
  {
    acres: "742",
    location: "Hyderabad, Telangana",
    corridor: "Vijayawada Highway (NH-65)",
    desc: "Highway Facing Venture — Strategic land assembly along the Vijayawada Highway corridor near the Regional Ring Road junction.",
    chip: "HMDA Sanctioned",
  },
  {
    acres: "650",
    location: "Hyderabad, Telangana",
    corridor: "Nagarjuna Sagar Highway",
    desc: "Positioned on the Nagarjuna Sagar Highway after Ibrahimpatnam, directly within the Fourth City development hub area.",
    chip: "HMDA Sanctioned",
  },
  {
    acres: "200",
    location: "Hyderabad, Telangana",
    corridor: "Nagarjuna Sagar Highway",
    desc: "Positioned on the Nagarjuna Sagar Highway after Ibrahimpatnam at Mal, integrated master eco-resort & township layout.",
    chip: "HMDA Sanctioned",
  },
];

const GALLERY_PREVIEW = [
  { image: "/render-01.jpg", title: "Riverside Promenade", tag: "Waterfront Boulevard" },
  { image: "/render-04.jpg", title: "Transit Gateway", tag: "Iconic Cable Bridge" },
  { image: "/render-05.jpg", title: "Business District", tag: "Commercial & Office Hub" },
  { image: "/render-11.jpg", title: "Hillside Villas", tag: "Luxury Residences" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0D192B] text-white flex flex-col font-sans">
      <Navbar />

      {/* Main Corporate Hero Section */}
      <section
        className="relative bg-cover bg-center border-b border-[#FF5722]/30"
        style={{ backgroundImage: "url(/hero-bg.jpeg)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D192B]/95 via-[#0D192B]/80 to-[#0D192B]" />

        <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 border border-[#FF5722] rounded-sm text-[#FF5722] bg-[#FF5722]/10 text-xs font-bold tracking-[0.2em] px-4 py-2 mb-6 uppercase">
              <Building2 className="w-4 h-4" />
              <span>JB VALLEY HOMES INFRA LLP · MASTER TOWNSHIP DEVELOPER</span>
            </span>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
              <span className="block text-white">Engineering Discipline.</span>
              <span className="block text-[#FF5722]">Master-Planned Infrastructure.</span>
            </h1>

            <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed max-w-2xl">
              An institutional master township and civil infrastructure enterprise specializing in large-scale land assembly, multi-authority statutory governance, and landmark coastal developments.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/about-company"
                className="bg-[#FF5722] hover:bg-[#E65100] text-white font-bold px-8 py-4 rounded-sm text-sm tracking-wider uppercase transition-all shadow-xl flex items-center gap-2"
              >
                <span>DISCOVER COMPANY CAPABILITIES</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/konkan-valley"
                className="border border-gray-400 hover:border-[#FF5722] text-white hover:text-[#FF5722] font-semibold px-8 py-4 rounded-sm text-sm tracking-wider uppercase transition-all"
              >
                KONKAN VALLEY MASTER PLAN
              </Link>
            </div>
          </div>
        </div>

        {/* Enterprise Metrics Strip */}
        <div className="relative bg-[#FF5722]/15 border-t border-[#FF5722]/40 backdrop-blur-md">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[#FF5722]/40">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center py-8 px-4">
                <div className="text-3xl md:text-4xl font-extrabold text-[#FF5722] mb-1">
                  {stat.value}
                </div>
                <div className="text-[11px] font-bold tracking-widest text-gray-200 uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Capabilities Section */}
      <section className="bg-[#0B1628] py-20 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#FF5722] text-xs font-bold uppercase tracking-widest">
              Institutional Capability
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-4">
              Master Infrastructure &amp; Land Assembly
            </h2>
            <p className="text-gray-400 text-sm">
              Built to inspire confidence among government authorities, financial institutions, and strategic development partners.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#111f38] p-8 rounded-lg border border-white/10 hover:border-[#FF5722] transition-all group shadow-xl">
              <MapPin className="w-9 h-9 text-[#FF5722] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FF5722] transition-colors">
                Contiguous Land Assembly
              </h3>
              <p className="text-gray-300 text-xs leading-relaxed">
                Proven capability to aggregate single 700+ acre contiguous land parcels with legal tenure security.
              </p>
            </div>

            <div className="bg-[#111f38] p-8 rounded-lg border border-white/10 hover:border-[#FF5722] transition-all group shadow-xl">
              <ShieldCheck className="w-9 h-9 text-[#FF5722] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FF5722] transition-colors">
                Multi-Authority Sanctions
              </h3>
              <p className="text-gray-300 text-xs leading-relaxed">
                Securing layout permissions across statutory authorities (HMDA, HUDA, VUDA, NUDA).
              </p>
            </div>

            <div className="bg-[#111f38] p-8 rounded-lg border border-white/10 hover:border-[#FF5722] transition-all group shadow-xl">
              <Building2 className="w-9 h-9 text-[#FF5722] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FF5722] transition-colors">
                Civil Infrastructure
              </h3>
              <p className="text-gray-300 text-xs leading-relaxed">
                Methodical execution of primary utility backbones, arterial roads, and water management.
              </p>
            </div>

            <div className="bg-[#111f38] p-8 rounded-lg border border-white/10 hover:border-[#FF5722] transition-all group shadow-xl">
              <Layers className="w-9 h-9 text-[#FF5722] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FF5722] transition-colors">
                Phased Risk Control
              </h3>
              <p className="text-gray-300 text-xs leading-relaxed">
                Structured capital deployment sequence matching physical execution to milestone approvals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Major Developments Section (REVISED AS REQUESTED) */}
      <section className="py-20 px-6 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-px bg-[#FF5722]" />
              <span className="text-[#FF5722] text-xs tracking-[0.2em] font-bold uppercase">
                FEATURED MAJOR DEVELOPMENTS
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Selected Major Developments
            </h2>
          </div>

          <Link
            href="/experience"
            className="flex items-center gap-2 text-xs font-bold text-[#FF5722] border border-[#FF5722]/50 px-5 py-3 rounded-sm hover:bg-[#FF5722]/10 transition-colors uppercase"
          >
            <span>EXPLORE EXTENDED PORTFOLIO</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Prominent Featured Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {FEATURED_DEVELOPMENTS.map((p, idx) => (
            <div
              key={idx}
              className="bg-[#111f38] p-8 rounded-lg border border-white/10 hover:border-[#FF5722] transition-all group shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="bg-[#0D192B] text-[#FF5722] text-xs font-bold px-3 py-1.5 rounded border border-[#FF5722]/30">
                    {p.chip}
                  </span>
                  <span className="text-xs text-gray-400 font-semibold">{p.location}</span>
                </div>

                <div className="text-5xl font-black text-white mb-1 tracking-tight">
                  {p.acres}
                </div>
                <div className="text-xs text-[#FF8A65] uppercase tracking-widest mb-6 font-bold">
                  Acres Master Layout
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FF5722] transition-colors">
                  {p.corridor}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {p.desc}
                </p>
              </div>

              <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#FF5722]" />
                  <span>{p.location}</span>
                </span>
                <Link href="/contact" className="text-xs font-bold text-[#FF5722] hover:underline">
                  Inquire
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Explicit Broad Portfolio Callout */}
        <div className="bg-[#0A1424] border border-[#FF5722]/30 rounded-lg p-6 text-center max-w-4xl mx-auto shadow-xl">
          <p className="text-sm text-gray-300 leading-relaxed italic">
            "The projects displayed above represent a selection of major developments from a broader portfolio of township and civil infrastructure projects executed over several decades of professional engineering practice."
          </p>
        </div>
      </section>

      {/* Flagship Konkan Valley Section */}
      <section className="bg-[#0A1424] py-20 px-6 border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#FF5722]" />
              <span className="text-[#FF5722] text-xs tracking-[0.2em] font-bold uppercase">
                FLAGSHIP PROJECT
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-6">
              Konkan Valley Integrated Township
            </h2>

            <p className="text-gray-300 text-base leading-relaxed mb-6">
              Proposed 3,500+ acre master plan comprising 275 Million Sq.Ft. of integrated waterfront residential, commercial financial district, convention hub, and eco-resort enclaves.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8 bg-[#111f38] p-6 rounded-lg border border-white/10">
              <div>
                <div className="text-2xl font-extrabold text-[#FF5722]">3,500+</div>
                <div className="text-xs text-gray-400">Acres Proposed</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-[#FF5722]">275 Mn</div>
                <div className="text-xs text-gray-400">Sq.Ft Proposed</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-[#FF5722]">10</div>
                <div className="text-xs text-gray-400">Execution Phases</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-[#FF5722]">43</div>
                <div className="text-xs text-gray-400">Consortium Investors</div>
              </div>
            </div>

            <Link
              href="/konkan-valley"
              className="inline-flex items-center gap-2 bg-[#FF5722] hover:bg-[#E65100] text-white font-bold px-7 py-3.5 rounded-sm text-sm tracking-wide shadow-lg uppercase"
            >
              <span>EXPLORE MASTER PROJECT</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="md:col-span-6 relative">
            <img
              src="/master-vision.jpg"
              alt="Konkan Valley Master Vision"
              className="rounded-lg border border-white/20 shadow-2xl w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Multi-Modal Regional Infrastructure */}
      <section className="py-20 px-6 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#FF5722] text-xs font-bold uppercase tracking-widest">
            Regional Positioning
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-4">
            Surrounding Infrastructure &amp; Connectivity
          </h2>
          <p className="text-gray-400 text-sm">
            Positioned along the North Goa border corridor, minutes from Mopa International Airport, NH-66 4-lane highway, Tiracol Riverfront, and Konkan Railway.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#111f38] p-6 rounded-lg border border-white/10 hover:border-[#FF5722] transition-colors">
            <Plane className="w-8 h-8 text-[#FF5722] mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Mopa Airport (Goa)</h3>
            <p className="text-xs text-gray-400 mb-4">25-30 minutes drive to Goa's international aviation hub.</p>
            <span className="text-xs font-bold text-[#FF5722]">28 Km Away</span>
          </div>

          <div className="bg-[#111f38] p-6 rounded-lg border border-white/10 hover:border-[#FF5722] transition-colors">
            <Navigation className="w-8 h-8 text-[#FF5722] mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">NH-66 Highway</h3>
            <p className="text-xs text-gray-400 mb-4">Direct access to the 4-lane coastal express highway corridor.</p>
            <span className="text-xs font-bold text-[#FF5722]">Direct Corridor</span>
          </div>

          <div className="bg-[#111f38] p-6 rounded-lg border border-white/10 hover:border-[#FF5722] transition-colors">
            <Train className="w-8 h-8 text-[#FF5722] mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Konkan Railway</h3>
            <p className="text-xs text-gray-400 mb-4">Minutes from Pernem &amp; major regional express stations.</p>
            <span className="text-xs font-bold text-[#FF5722]">14 Km Away</span>
          </div>

          <div className="bg-[#111f38] p-6 rounded-lg border border-white/10 hover:border-[#FF5722] transition-colors">
            <Waves className="w-8 h-8 text-[#FF5722] mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Tiracol Riverfront</h3>
            <p className="text-xs text-gray-400 mb-4">Adjacent to river basin and waterfront marine walkways.</p>
            <span className="text-xs font-bold text-[#FF5722]">Adjacent Basin</span>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/location"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#FF5722] hover:underline"
          >
            <span>VIEW LOCATION MATRIX &amp; CONNECTIVITY MAP</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* Leadership Section (FIXED FOUNDER IMAGE POSITIONING WITH NO HEAD CROPPING) */}
      <section className="bg-[#0B1628] py-20 px-6 border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <div className="rounded-lg overflow-hidden border-2 border-[#FF5722]/40 shadow-2xl bg-[#111f38] p-4 flex items-center justify-center">
              <img
                src="/profile2.png"
                alt="Er. Papeshwar Rao Berelli, Founder & Designated Partner"
                className="w-full h-auto max-h-[460px] object-contain object-top rounded"
              />
            </div>
          </div>

          <div className="md:col-span-7">
            <span className="text-[#FF5722] text-xs font-bold uppercase tracking-widest block mb-2">
              Leadership &amp; Engineering Governance
            </span>
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Supported by Four Decades of Civil Engineering Discipline
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Founded by Er. Papeshwar Rao Berelli, whose practice spans 16 years as an Assistant Executive Engineer with the AP Panchayat Raj Department and 25 years executing private township developments across HMDA, HUDA, VUDA, and NUDA.
            </p>
            <Link
              href="/leadership"
              className="inline-flex items-center gap-2 bg-[#FF5722] hover:bg-[#E65100] text-white font-bold px-7 py-3.5 rounded-sm text-sm tracking-wide shadow-lg uppercase"
            >
              <span>VIEW LEADERSHIP PROFILE</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Dubai & Global Operations Teaser */}
      <section className="py-16 px-6 max-w-7xl mx-auto w-full">
        <div className="bg-[#111f38] p-10 rounded-xl border border-[#FF5722]/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 text-[#FF5722] text-xs font-bold uppercase tracking-widest mb-2">
              <Globe className="w-4 h-4" />
              <span>International Capital &amp; GCC Desk</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
              Dubai Operations &amp; International Strategy
            </h2>
            <p className="text-gray-300 text-sm max-w-xl leading-relaxed">
              Establishing international cross-border frameworks for GCC investors, family offices, and consortium equity partners.
            </p>
          </div>

          <Link
            href="/global-marketing"
            className="bg-[#FF5722] hover:bg-[#E65100] text-white font-bold px-7 py-3.5 rounded-sm text-sm tracking-wide shrink-0 shadow-lg uppercase"
          >
            EXPLORE GLOBAL DESK
          </Link>
        </div>
      </section>

      {/* Dossier Request CTA */}
      <section className="bg-[#0A1424] py-20 px-6 border-t border-white/10 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-[#FF5722] text-xs font-bold uppercase tracking-widest">
            Institutional Engagement
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-6">
            Request the Investor Dossier
          </h2>
          <p className="text-gray-300 text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Confidential project dossier available under non-disclosure to institutional investors, co-developers, and qualified land partners.
          </p>
          <Link
            href="/contact"
            className="bg-[#FF5722] hover:bg-[#E65100] text-white font-bold px-9 py-4 rounded-sm text-sm tracking-wider uppercase inline-flex items-center gap-2 shadow-2xl"
          >
            <span>SUBMIT DOSSIER REQUEST</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
}
