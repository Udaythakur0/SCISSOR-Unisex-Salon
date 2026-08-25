import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ChevronRight, Sparkles } from 'lucide-react';

interface CtaBannerProps {
  onOpenBooking: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenBooking }) => {
  return (
    <div className="py-12 sm:py-16 bg-[#0c0c0e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl bg-gradient-to-r from-[#17171c] via-[#141418] to-[#1e1416] border border-neutral-800 hover:border-[#dfb776]/40 p-6 sm:p-10 shadow-2xl overflow-hidden transition-colors duration-500"
        >
          {/* Subtle gold accent background pattern */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#dfb776]/10 rounded-full blur-3xl -z-0 pointer-events-none animate-pulse-glow" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#B91C1C]/15 rounded-full blur-3xl -z-0 pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
            
            {/* Left: Icon & Text */}
            <div className="flex items-center gap-5 sm:gap-6 text-center md:text-left flex-col sm:flex-row">
              <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-[#202026] border border-[#dfb776]/40 flex items-center justify-center shrink-0 shadow-[0_0_25px_rgba(223,183,118,0.2)]">
                <Calendar className="w-8 h-8 text-[#dfb776]" />
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
                  Ready for Your Next Look?
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-md">
                  Book your appointment now and let our certified salon experts bring out the best in you.
                </p>
              </div>
            </div>

            {/* Right: Red CTA Button with Shimmer */}
            <div className="shrink-0 w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={onOpenBooking}
                className="relative group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#B91C1C] hover:bg-[#a01818] text-white text-xs sm:text-sm font-bold tracking-wider px-8 py-4 rounded-xl shadow-[0_0_25px_rgba(185,28,28,0.5)] border border-red-500/70 transition-all duration-300 cursor-pointer overflow-hidden"
                id="cta-book-appointment-btn"
              >
                {/* Shimmer light sweep */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform ease-out pointer-events-none" />

                <Calendar className="w-4 h-4" />
                <span>BOOK APPOINTMENT</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>

          </div>

        </motion.div>
      </div>
    </div>
  );
};
