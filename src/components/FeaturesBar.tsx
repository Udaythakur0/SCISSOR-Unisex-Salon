import React from 'react';
import { motion } from 'motion/react';
import { Scissors, Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';
import { FEATURES } from '../data/salonData';

export const FeaturesBar: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'pro':
        return <Scissors className="w-5 h-5 sm:w-6 sm:h-6 text-[#dfb776]" />;
      case 'products':
        return <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#dfb776]" />;
      case 'hygiene':
        return <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#dfb776]" />;
      case 'satisfaction':
        return <HeartHandshake className="w-5 h-5 sm:w-6 sm:h-6 text-[#dfb776]" />;
      default:
        return <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#dfb776]" />;
    }
  };

  return (
    <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="bg-[#141418]/95 backdrop-blur-md border border-neutral-800/90 rounded-2xl p-5 sm:p-7 shadow-2xl shadow-black/90 hover:border-[#dfb776]/30 transition-all duration-300"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-neutral-800/80">
          {FEATURES.map((feat, idx) => (
            <motion.div
              key={feat.id}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className={`flex items-start gap-4 group ${
                idx !== 0 ? 'pt-4 sm:pt-0 sm:pl-6 lg:pl-8' : ''
              }`}
            >
              <div className="w-11 h-11 rounded-xl bg-[#202026] border border-[#dfb776]/20 flex items-center justify-center shrink-0 shadow-inner group-hover:border-[#dfb776]/60 group-hover:shadow-[0_0_15px_rgba(223,183,118,0.25)] transition-all duration-300">
                {getIcon(feat.id)}
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-bold tracking-wider text-white uppercase mb-1 group-hover:text-[#dfb776] transition-colors">
                  {feat.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed group-hover:text-neutral-300">
                  {feat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
