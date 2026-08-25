import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Phone, Star, Sparkles, Scissors, ShieldCheck } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';
import heroSalonBg from '../assets/images/scissor_hero_bg_1787666538800.jpg';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] sm:min-h-[94vh] flex items-center pt-24 sm:pt-28 pb-16 overflow-hidden"
    >
      {/* Background Image with Cinematic Dark Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1, filter: 'brightness(0.35)' }}
          animate={{ scale: 1.04, filter: 'brightness(0.42)' }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
          src={heroSalonBg}
          alt="SCISSOR Unisex Salon Interior"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center contrast-[1.08]"
        />
        {/* Gradients to blend smoothly with dark theme */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0d] via-[#0b0b0d]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b0d]/90 via-[#0b0b0d]/55 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(223,183,118,0.18),transparent_60%)]" />
        
        {/* Ambient Glowing Orbs */}
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-[#dfb776]/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-[#B91C1C]/15 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl sm:max-w-3xl">
          
          {/* Eyebrow with Animated Glow Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181613]/90 border border-[#dfb776]/40 shadow-[0_0_20px_rgba(223,183,118,0.2)] mb-4 sm:mb-5"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#dfb776] animate-spin" style={{ animationDuration: '6s' }} />
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-[#dfb776] uppercase font-sans-custom">
              {SALON_INFO.welcomeNote}
            </span>
          </motion.div>

          {/* Main Headline with High Contrast Typography */}
          <motion.h1 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white font-display leading-[1.08] mb-4 sm:mb-5"
          >
            Your Style.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dfb776] via-[#f7e0b5] to-[#dfb776] drop-shadow-[0_0_35px_rgba(223,183,118,0.35)]">
              Your Signature.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="text-base sm:text-xl text-neutral-300 font-normal leading-relaxed mb-8 sm:mb-9 max-w-xl"
          >
            {SALON_INFO.heroDescription}
          </motion.p>

          {/* Glowing CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-10 sm:mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={onOpenBooking}
              className="relative group inline-flex items-center justify-center gap-2.5 bg-[#B91C1C] hover:bg-[#a01818] text-white text-xs sm:text-sm font-bold tracking-wider px-7 sm:px-9 py-3.5 sm:py-4 rounded-xl shadow-[0_0_25px_rgba(185,28,28,0.55)] border border-red-500/70 transition-all duration-300 cursor-pointer overflow-hidden"
              id="hero-book-btn"
            >
              {/* Shimmer light pass */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform ease-out" />
              <Calendar className="w-4 h-4 text-white" />
              <span>BOOK APPOINTMENT</span>
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href={`tel:${SALON_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2.5 bg-[#17171b]/90 hover:bg-[#222228] text-neutral-200 hover:text-white text-xs sm:text-sm font-semibold tracking-wider px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl border border-neutral-700/80 hover:border-[#dfb776]/50 hover:shadow-[0_0_20px_rgba(223,183,118,0.2)] transition-all duration-300"
              id="hero-call-btn"
            >
              <Phone className="w-4 h-4 text-[#dfb776]" />
              <span>CALL NOW</span>
            </motion.a>
          </motion.div>

          {/* Social Proof & Trust Badges */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4 border-t border-neutral-800/80 text-xs sm:text-sm text-neutral-300"
          >
            {/* Rating with Gold Stars */}
            <div className="flex items-center gap-2">
              <div className="flex text-[#dfb776]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#dfb776]" />
                ))}
              </div>
              <span className="font-semibold text-white">{SALON_INFO.rating}</span>
              <span className="text-neutral-400">({SALON_INFO.reviewsCount})</span>
            </div>

            <span className="hidden sm:inline-block text-neutral-600">|</span>

            {/* Verified Badge */}
            <div className="flex items-center gap-1.5 text-neutral-300 font-medium">
              <div className="w-5 h-5 rounded-full bg-[#dfb776]/15 border border-[#dfb776]/40 flex items-center justify-center shadow-[0_0_10px_rgba(223,183,118,0.3)]">
                <Sparkles className="w-3 h-3 text-[#dfb776]" />
              </div>
              <span>{SALON_INFO.badge}</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
