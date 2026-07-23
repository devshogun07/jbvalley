"use client";

import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export interface GalleryItem {
  image: string;
  title: string;
  tag: string;
  category?: string;
  description?: string;
}

interface LightboxModalProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export default function LightboxModal({
  items,
  currentIndex,
  isOpen,
  onClose,
  onSelectIndex,
}: LightboxModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, currentIndex]);

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex];

  const handlePrev = () => {
    onSelectIndex(currentIndex === 0 ? items.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    onSelectIndex(currentIndex === items.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-8">
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close Lightbox"
        className="absolute top-5 right-5 z-10 p-2 text-gray-300 hover:text-white bg-white/10 rounded-full hover:bg-white/20 transition-all"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation Buttons */}
      {items.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            aria-label="Previous Image"
            className="absolute left-4 md:left-8 z-10 p-3 text-white bg-black/50 hover:bg-[#c9a84c] hover:text-[#0D192B] rounded-full transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next Image"
            className="absolute right-4 md:right-8 z-10 p-3 text-white bg-black/50 hover:bg-[#c9a84c] hover:text-[#0D192B] rounded-full transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Content Container */}
      <div className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center">
        <img
          src={currentItem.image}
          alt={currentItem.title}
          className="max-h-[70vh] w-auto object-contain rounded-lg shadow-2xl border border-white/10"
        />

        <div className="mt-4 text-center max-w-2xl px-4">
          <span className="inline-block bg-[#c9a84c]/20 text-[#c9a84c] text-xs font-semibold px-3 py-1 rounded-sm mb-2">
            {currentItem.tag}
          </span>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
            {currentItem.title}
          </h3>
          {currentItem.description && (
            <p className="text-gray-300 text-sm">{currentItem.description}</p>
          )}
          <div className="text-xs text-gray-500 mt-2">
            Image {currentIndex + 1} of {items.length}
          </div>
        </div>
      </div>
    </div>
  );
}
