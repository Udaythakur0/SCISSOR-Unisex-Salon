import React from 'react';
import { SALON_INFO } from '../data/salonData';

export const StatsCounter: React.FC = () => {
  return (
    <div className="py-12 sm:py-16 bg-[#0e0e11] border-y border-neutral-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-4 sm:gap-8 text-center divide-x divide-neutral-800/60">
          {SALON_INFO.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center px-2">
              <span className="text-3xl sm:text-5xl md:text-6xl font-bold font-display text-white tracking-tight">
                {stat.value}
              </span>
              <span className="text-[11px] sm:text-sm font-medium text-neutral-400 mt-1 sm:mt-2 tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
