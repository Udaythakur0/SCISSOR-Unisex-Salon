import React from 'react';
import { X, ChevronLeft, ChevronRight, Tag } from 'lucide-react';
import { GALLERY_PHOTOS, GalleryPhoto } from '../data/salonData';
import salonInteriorImg from '../assets/images/scissor_salon_interior_1787666561616.jpg';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  currentIndex,
  onNavigate,
}) => {
  if (!isOpen) return null;

  const photo: GalleryPhoto = GALLERY_PHOTOS[currentIndex] || GALLERY_PHOTOS[0];
  const activeImageSrc = currentIndex === 0 ? salonInteriorImg : photo.image;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate((currentIndex - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate((currentIndex + 1) % GALLERY_PHOTOS.length);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 sm:top-2 sm:right-2 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-neutral-800 text-white flex items-center justify-center border border-neutral-700 transition-colors"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-neutral-800 text-white flex items-center justify-center border border-neutral-700 transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6 text-[#dfb776]" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-neutral-800 text-white flex items-center justify-center border border-neutral-700 transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6 text-[#dfb776]" />
        </button>

        {/* Image Container */}
        <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-950 max-h-[75vh]">
          <img
            src={activeImageSrc}
            alt={photo.title}
            referrerPolicy="no-referrer"
            className="w-full h-auto max-h-[70vh] object-contain mx-auto"
          />
        </div>

        {/* Caption */}
        <div className="mt-4 text-center px-4">
          <div className="inline-flex items-center gap-1.5 bg-[#B91C1C] text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full mb-1">
            <Tag className="w-3 h-3" />
            <span>{photo.tag}</span>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-white">
            {photo.title}
          </h4>
          <p className="text-xs text-neutral-400">
            Photo {currentIndex + 1} of {GALLERY_PHOTOS.length}
          </p>
        </div>
      </div>
    </div>
  );
};
