import React from 'react';
import { motion } from 'motion/react';
import { Users, Award, Sparkles, Wind, Clock } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';
import salonInteriorImg from '../assets/images/scissor_salon_interior_1787666561616.jpg';

export const AboutSection: React.FC = () => {
  const icons = [
    <Users className="w-4 h-4 text-[#dfb776]" />,
    <Award className="w-4 h-4 text-[#dfb776]" />,
    <Sparkles className="w-4 h-4 text-[#dfb776]" />,
    <Wind className="w-4 h-4 text-[#dfb776]" />
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-[#0b0b0e] relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-[#dfb776]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#B91C1C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Salon Interior Photo with interactive Motion & Shimmer */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-6 relative"
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-2xl overflow-hidden border border-[#dfb776]/40 shadow-[0_15px_40px_rgba(0,0,0,0.9)] bg-neutral-900 group glow-box-hover"
            >
              <img
                src={salonInteriorImg}
                alt="SCISSOR Unisex Salon Experience"
                referrerPolicy="no-referrer"
                className="w-full h-auto aspect-[4/3] object-cover group-hover:scale-108 transition-transform duration-700 filter contrast-[1.06] brightness-95 group-hover:brightness-105"
              />
              
              {/* Shimmer light pass on image */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-1000 bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform ease-out pointer-events-none" />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0e]/85 via-transparent to-transparent" />
              
              {/* Floating verified badge with glowing live status */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#17171c]/95 backdrop-blur-md border border-[#dfb776]/40 shadow-[0_4px_20px_rgba(0,0,0,0.6)] rounded-xl p-3 sm:px-4 sm:py-3 flex items-center gap-3">
                <div className="relative flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <div className="absolute w-3 h-3 rounded-full bg-emerald-400 animate-ping opacity-75" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-bold block">
                    CURRENT STATUS
                  </span>
                  <span className="text-xs font-bold text-white flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-[#dfb776]" />
                    Open Today: {SALON_INFO.hours}
                  </span>
                </div>
              </div>
            </motion.div>
            
            {/* Subtle glow backdrop */}
            <div className="absolute -inset-4 bg-[#dfb776]/10 rounded-3xl blur-2xl -z-10 animate-pulse-glow" />
          </motion.div>

          {/* Right Column: About Details */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1a17] border border-[#dfb776]/30 mb-3 shadow-[0_0_15px_rgba(223,183,118,0.15)]">
              <Sparkles className="w-3.5 h-3.5 text-[#dfb776]" />
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#dfb776] uppercase">
                {SALON_INFO.about.badge}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight leading-[1.15] mb-4 sm:mb-5">
              {SALON_INFO.about.titleLine1}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dfb776] via-[#f7e0b5] to-[#dfb776] drop-shadow-[0_0_20px_rgba(223,183,118,0.3)]">
                {SALON_INFO.about.titleLine2}
              </span>
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-8">
              {SALON_INFO.about.description}
            </p>

            {/* Feature List with glowing hover cards */}
            <div className="space-y-3 sm:space-y-4 w-full">
              {SALON_INFO.about.highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-start gap-3.5 p-3 rounded-xl bg-[#141418]/60 hover:bg-[#1a1a22] border border-neutral-800/60 hover:border-[#dfb776]/40 transition-all duration-300 shadow-sm"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#1f1f26] border border-[#dfb776]/40 flex items-center justify-center shrink-0 mt-0.5 shadow-sm group-hover:scale-110 transition-transform">
                    {icons[idx]}
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-white tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
