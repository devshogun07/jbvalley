"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import BackToTop from "../components/BackToTop";
import LightboxModal, { GalleryItem } from "../components/LightboxModal";
import Link from "next/link";
import { Image as ImageIcon, ZoomIn, Filter, ArrowRight } from "lucide-react";

const GALLERY_DATA: GalleryItem[] = [
  {
    image: "/render-01.jpg",
    title: "Riverside Promenade & Marine Deck",
    tag: "Master Township Entry",
    category: "Waterfront",
    description: "Architectural rendering of the riverfront walkway and pedestrian marina deck.",
  },
  {
    image: "/render-02.jpg",
    title: "Waterfront Walkway & Canal Bridge",
    tag: "Pedestrian Bridge Zone",
    category: "Waterfront",
    description: "Pedestrian bridges connecting eco-residential clusters across inland waterways.",
  },
  {
    image: "/render-03.jpg",
    title: "Aerial Master Plan Layout",
    tag: "Green Belt & Canals",
    category: "Civic",
    description: "Bird's-eye view of the 3,500+ acre master plan layout, green corridors, and arterial roads.",
  },
  {
    image: "/render-04.jpg",
    title: "Transit Gateway & Cable Stay Bridge",
    tag: "Iconic Cable Bridge",
    category: "Civic",
    description: "Signature cable-stayed bridge spanning the river basin, serving as the main entry portal.",
  },
  {
    image: "/render-05.jpg",
    title: "Business District & Office Towers",
    tag: "Commercial Hub",
    category: "Commercial",
    description: "High-density corporate towers, financial center, and tech park zones.",
  },
  {
    image: "/render-06.jpg",
    title: "Civic Plaza & Financial Corridor",
    tag: "Financial Corridor",
    category: "Commercial",
    description: "Central open plaza surrounded by retail arcades and financial institutions.",
  },
  {
    image: "/render-07.jpg",
    title: "Marina Boulevard & Retail Avenues",
    tag: "Waterfront Retail",
    category: "Waterfront",
    description: "Waterfront dining promenades, luxury retail shops, and leisure docks.",
  },
  {
    image: "/render-08.jpg",
    title: "Civic Complex & Sports Arena",
    tag: "Sports & Leisure Zone",
    category: "Civic",
    description: "Integrated sports complex, swimming lagoons, and indoor athletic facilities.",
  },
  {
    image: "/render-09.jpg",
    title: "Eco Residential Enclaves",
    tag: "Parkside Enclaves",
    category: "Residential",
    description: "Sustainable low-rise residential apartments overlooking green central parks.",
  },
  {
    image: "/render-10.jpg",
    title: "Convention Hub & Expo Arena",
    tag: "Cultural & Expo Area",
    category: "Civic",
    description: "State-of-the-art international convention center, exhibition halls, and auditorium.",
  },
  {
    image: "/render-11.jpg",
    title: "Hillside Luxury Villas",
    tag: "Luxury Residences",
    category: "Residential",
    description: "Exclusive gated hillside villas with private infinity pools and ocean-facing vistas.",
  },
  {
    image: "/render-12.jpg",
    title: "Smart Infrastructure & Solar Grid",
    tag: "Eco Transit & Power Grid",
    category: "Civic",
    description: "Integrated solar energy grid, automated waste management, and EV transit stations.",
  },
  {
    image: "/render-13.jpg",
    title: "Riverfront Park & Botanical Gardens",
    tag: "Green Canopy Zone",
    category: "Waterfront",
    description: "Botanical gardens and jogging tracks along the riverfront ecosystem.",
  },
];

const CATEGORIES = ["ALL", "Waterfront", "Commercial", "Residential", "Civic"];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const filteredGallery = GALLERY_DATA.filter((item) => {
    if (selectedCategory === "ALL") return true;
    return item.category === selectedCategory;
  });

  const handleOpenLightbox = (index: number) => {
    setActiveImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0D192B] text-white flex flex-col">
      <Navbar />
      <Breadcrumb items={[{ label: "Project Gallery" }]} />

      {/* Header */}
      <section className="bg-[#0A1424] py-16 px-6 border-b border-[#c9a84c]/20">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 border border-[#c9a84c] bg-[#c9a84c]/10 text-[#c9a84c] text-xs font-semibold px-4 py-2 rounded-sm mb-6 uppercase tracking-widest">
            <ImageIcon className="w-4 h-4" />
            <span>Master Vision Visual Gallery</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Konkan Valley Master Gallery
          </h1>

          <p className="text-gray-300 text-base md:text-lg max-w-3xl leading-relaxed mb-8">
            Explore artistic renderings of the proposed 3,500+ acre integrated township: waterfront promenades, commercial towers, hillside villa enclaves, and smart civic infrastructure.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 px-6 max-w-7xl mx-auto w-full">
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                selectedCategory === cat
                  ? "bg-[#c9a84c] text-[#0D192B] shadow-lg scale-105"
                  : "bg-[#111f38] text-gray-300 hover:text-white border border-white/10 hover:border-[#c9a84c]"
              }`}
            >
              {cat === "ALL" ? "All Renders" : cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGallery.map((item, idx) => (
            <figure
              key={idx}
              onClick={() => handleOpenLightbox(idx)}
              className="relative bg-[#111f38] rounded-lg overflow-hidden border border-white/10 hover:border-[#c9a84c] transition-all group cursor-pointer shadow-xl"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D192B] via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-5 h-5 text-[#c9a84c]" />
                </div>

                <span className="absolute top-4 left-4 bg-[#0D192B]/90 text-[#c9a84c] text-[11px] font-bold px-3 py-1 rounded border border-[#c9a84c]/30 uppercase tracking-widest">
                  {item.tag}
                </span>
              </div>

              <figcaption className="p-6">
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#c9a84c] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-xs line-clamp-2">
                  {item.description}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        items={filteredGallery}
        currentIndex={activeImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onSelectIndex={(index) => setActiveImageIndex(index)}
      />

      {/* Disclaimer */}
      <section className="py-12 px-6 bg-[#060F1E] border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center text-xs text-gray-500 leading-relaxed">
          <p>
            * All visual renderings are artistic impressions of proposed concepts for Konkan Valley. They do not represent completed, constructed, or sanctioned works, and remain subject to statutory approvals and MahaRERA registration.
          </p>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
}
