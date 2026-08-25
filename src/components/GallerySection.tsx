import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Maximize2, Sparkles, Camera, Award } from 'lucide-react';
import { GALLERY_PHOTOS, GalleryPhoto } from '../data/salonData';
import salonInteriorImg from '../assets/images/scissor_salon_interior_1787666561616.jpg';

interface GallerySectionProps {
  onSelectPhoto: (photo: GalleryPhoto, index: number) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onSelectPhoto }) => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#0d0d10] border-t border-neutral-900 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#dfb776]/5 rounded-full blur-[100px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Glowing Eyebrow and Motion */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c1a17] border border-[#dfb776]/30 mb-3 shadow-[0_0_15px_rgba(223,183,118,0.15)]">
            <Camera className="w-3.5 h-3.5 text-[#dfb776]" />
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#dfb776] uppercase">
              STUDIO & WORK GALLERY
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight">
            A Glimpse of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dfb776] via-[#f7e0b5] to-[#dfb776] drop-shadow-[0_0_20px_rgba(223,183,118,0.3)]">Our Salon</span>
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-2.5">
            Step into our welcoming space designed for pure comfort, relaxation, and transformation.
          </p>
        </motion.div>

        {/* Gallery Grid with Animated Stagger Cards and Interactive Glow */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-5">
          {GALLERY_PHOTOS.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -8, scale: 1.03 }}
              onMouseEnter={() => setHoveredIdx(index)}
              onMouseLeave={() => setHoveredIdx(null)}
              onClick={() => onSelectPhoto(photo, index)}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer bg-[#141418] border border-neutral-800/90 hover:border-[#dfb776]/70 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-black/90 glow-box-hover"
            >
              {/* Image with smooth zoom and filter brightness */}
              <motion.img
                src={index === 0 ? salonInteriorImg : photo.image}
                alt={photo.title}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter brightness-90 group-hover:brightness-105 transition-all duration-700 group-hover:scale-115"
              />

              {/* Shimmer light sweep across photo on hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-1000 bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform ease-out pointer-events-none" />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-300" />
              
              {/* Interactive Zoom Indicator Button with Neon Gold Ring */}
              <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-20">
                <div className="w-8 h-8 rounded-full bg-[#1b1b22]/90 backdrop-blur-md border border-[#dfb776] shadow-[0_0_15px_rgba(223,183,118,0.5)] flex items-center justify-center text-[#dfb776]">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Bottom Details with Tag and Glow Border */}
              <div className="absolute bottom-3 left-3 right-3 text-left z-20">
                <span className="inline-block text-[9px] uppercase tracking-wider bg-[#B91C1C] text-white px-2 py-0.5 rounded-full font-bold shadow-[0_0_10px_rgba(185,28,28,0.5)] border border-red-400/40 mb-1">
                  {photo.tag}
                </span>
                <p className="text-xs font-semibold text-white group-hover:text-[#dfb776] transition-colors line-clamp-1">
                  {photo.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
