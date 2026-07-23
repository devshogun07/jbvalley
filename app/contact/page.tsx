"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import BackToTop from "../components/BackToTop";
import {
  Mail,
  Phone,
  MapPin,
  Building,
  CheckCircle2,
  Send,
  ShieldAlert,
  FileText,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    organisation: "",
    email: "",
    phone: "",
    natureOfInterest: "Institutional or private investment",
    acknowledged: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.acknowledged) {
      alert("Please fill in required fields and acknowledge the disclaimer.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0D192B] text-white flex flex-col">
      <Navbar />
      <Breadcrumb items={[{ label: "Contact / Request Dossier" }]} />

      {/* Hero Header */}
      <section className="bg-[#0A1424] py-16 px-6 border-b border-[#c9a84c]/20">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 border border-[#c9a84c] bg-[#c9a84c]/10 text-[#c9a84c] text-xs font-semibold px-4 py-2 rounded-sm mb-6 uppercase tracking-widest">
            <FileText className="w-4 h-4" />
            <span>Institutional Contact &amp; Dossier Desk</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Request Investor Dossier &amp; Corporate Contact
          </h1>

          <p className="text-gray-300 text-base md:text-lg max-w-3xl leading-relaxed">
            Dossier materials are shared under non-disclosure with institutional partners, co-developers, and qualified private investors.
          </p>
        </div>
      </section>

      {/* Form & Office Info Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          {/* Office Details */}
          <div className="md:col-span-5 space-y-8">
            <div className="bg-[#111f38] p-8 rounded-lg border border-white/10 shadow-xl space-y-6">
              <h2 className="text-2xl font-bold text-white mb-6 border-b border-[#c9a84c]/30 pb-3">
                Corporate Headquarters
              </h2>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#0D192B] text-[#c9a84c] rounded border border-[#c9a84c]/30 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#c9a84c] uppercase tracking-wider mb-1">
                    Registered Office
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Villa No. 253, Splendid Aparna Palm Meadows, Kompally, Medchal–Nagpur Road (NH-44), Hyderabad, Telangana
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#0D192B] text-[#c9a84c] rounded border border-[#c9a84c]/30 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#c9a84c] uppercase tracking-wider mb-1">
                    Official Email
                  </h3>
                  <a
                    href="mailto:jbhomesinfra@gmail.com"
                    className="text-gray-300 hover:text-white text-sm"
                  >
                    jbhomesinfra@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#0D192B] text-[#c9a84c] rounded border border-[#c9a84c]/30 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#c9a84c] uppercase tracking-wider mb-1">
                    Telephone Numbers
                  </h3>
                  <div className="space-y-1 text-sm">
                    <a href="tel:+916309601850" className="block text-gray-300 hover:text-white">
                      +91 63096 01850
                    </a>
                    <a href="tel:+919502076876" className="block text-gray-300 hover:text-white">
                      +91 95020 76876
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#0D192B] text-[#c9a84c] rounded border border-[#c9a84c]/30 shrink-0">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#c9a84c] uppercase tracking-wider mb-1">
                    Incorporated Entity
                  </h3>
                  <p className="text-gray-300 text-sm font-semibold">
                    JB Valley Homes Infra LLP
                  </p>
                </div>
              </div>
            </div>

            {/* Statutory Disclaimer Box */}
            <div className="bg-[#0A1424] p-6 rounded-lg border border-amber-500/20 text-xs text-gray-400 leading-relaxed flex gap-3">
              <ShieldAlert className="w-5 h-5 text-[#c9a84c] shrink-0 mt-0.5" />
              <p>
                * Notice: Konkan Valley is not registered under MahaRERA. Nothing on this website is an offer or solicitation to purchase plots/units, and no booking payments are accepted.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-7">
            <div className="bg-[#111f38] p-8 md:p-10 rounded-lg border border-white/10 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-2">Investor Dossier Request</h2>
              <p className="text-gray-400 text-sm mb-8">
                Please complete the form below to request confidential project information.
              </p>

              {submitted ? (
                <div className="bg-[#0D192B] border border-[#c9a84c] p-8 rounded-lg text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-[#c9a84c] mx-auto" />
                  <h3 className="text-xl font-bold text-white">Dossier Request Submitted</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Thank you, <span className="text-[#c9a84c] font-semibold">{formData.name}</span>. Your request has been logged. Our corporate relations team will contact you at <span className="text-[#c9a84c] font-semibold">{formData.email}</span> shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 bg-[#c9a84c] text-[#0D192B] font-bold px-6 py-2.5 rounded text-xs uppercase tracking-wider"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold text-[#c9a84c] uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Er. Vikramaditya Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#0D192B] border border-white/20 rounded px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#c9a84c]"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-[#c9a84c] uppercase tracking-wider mb-2">
                        Organisation / Enterprise
                      </label>
                      <input
                        type="text"
                        placeholder="Company name"
                        value={formData.organisation}
                        onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                        className="w-full bg-[#0D192B] border border-white/20 rounded px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#c9a84c]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#c9a84c] uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#0D192B] border border-white/20 rounded px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#c9a84c]"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-[#c9a84c] uppercase tracking-wider mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#0D192B] border border-white/20 rounded px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#c9a84c]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#c9a84c] uppercase tracking-wider mb-2">
                        Nature of Interest
                      </label>
                      <select
                        value={formData.natureOfInterest}
                        onChange={(e) => setFormData({ ...formData, natureOfInterest: e.target.value })}
                        className="w-full bg-[#0D192B] border border-white/20 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-[#c9a84c]"
                      >
                        <option>Institutional or private investment</option>
                        <option>Land / joint development</option>
                        <option>Co-development or contracting</option>
                        <option>International / GCC syndication</option>
                        <option>Other corporate inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="bg-[#0D192B] p-4 rounded border border-white/10">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={formData.acknowledged}
                        onChange={(e) => setFormData({ ...formData, acknowledged: e.target.checked })}
                        className="mt-1 accent-[#c9a84c]"
                      />
                      <span className="text-xs text-gray-300 leading-relaxed">
                        I acknowledge that Konkan Valley is not registered under MahaRERA, that nothing on this portal constitutes an offer for sale, and that dossier materials are shared strictly under corporate non-disclosure. *
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#c9a84c] hover:bg-[#d9b45f] text-[#0D192B] font-bold py-4 rounded-sm text-sm tracking-wider uppercase transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>SUBMIT DOSSIER REQUEST</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
}
