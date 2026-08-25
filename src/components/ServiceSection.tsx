import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Scissors, 
  Sparkles, 
  Heart, 
  Crown, 
  Flower2, 
  Droplets, 
  ChevronDown, 
  ChevronUp, 
  Calendar,
  Eye,
  Flame,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { ServiceItem } from '../data/salonData';

interface CategoryFilter {
  id: string;
  label: string;
  match: (service: ServiceItem) => boolean;
}

interface ServiceSectionProps {
  id?: string;
  badge: string;
  titleWhite: string;
  titleGold: string;
  description: string;
  services: ServiceItem[];
  sectionType?: 'beauty' | 'hair';
  onSelectService: (service: ServiceItem) => void;
  onExploreAll: () => void;
}

export const ServiceSection: React.FC<ServiceSectionProps> = ({
  id,
  badge,
  titleWhite,
  titleGold,
  description,
  services,
  sectionType = 'beauty',
  onSelectService,
  onExploreAll,
}) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [showAll, setShowAll] = useState<boolean>(false);

  // Define tailored filter tabs based on section type
  const filterTabs: CategoryFilter[] = useMemo(() => {
    if (sectionType === 'beauty') {
      return [
        { id: 'all', label: 'All Services', match: () => true },
        { 
          id: 'facial-glow', 
          label: 'Facial & Glow', 
          match: (s) => ['facials', 'tanning-detan', 'permanent-makeup', 'permanent-hair-removal'].includes(s.id) 
        },
        { 
          id: 'nails-lashes', 
          label: 'Nails & Lashes', 
          match: (s) => ['acrylic-nails', 'pedicure', 'eyelashes', 'eyebrow-threading'].includes(s.id) 
        },
        { 
          id: 'bridal-waxing', 
          label: 'Bridal & Spa', 
          match: (s) => ['bridal-services', 'waxing-body', 'spa-relaxation'].includes(s.id) 
        },
        { 
          id: 'hair-styling', 
          label: 'Hair & Styling', 
          match: (s) => ['hair-styling', 'blow-dry', 'balayage', 'hair-extensions', 'box-braids'].includes(s.id) 
        },
      ];
    } else {
      return [
        { id: 'all', label: 'All Grooming', match: () => true },
        { 
          id: 'haircuts', 
          label: 'Haircuts & Locs', 
          match: (s) => ['haircuts', 'dreadlocks'].includes(s.id) 
        },
        { 
          id: 'beard-shave', 
          label: 'Beard & Shave', 
          match: (s) => ['shaving', 'beard-styling', 'beard-grooming'].includes(s.id) 
        },
        { 
          id: 'spa-care', 
          label: 'Spa & Treatments', 
          match: (s) => ['hair-beard-care', 'hair-coloring', 'head-massage'].includes(s.id) 
        },
      ];
    }
  }, [sectionType]);

  // Filter services by active tab
  const filteredServices = useMemo(() => {
    const currentFilter = filterTabs.find((t) => t.id === activeTab);
    if (!currentFilter) return services;
    return services.filter(currentFilter.match);
  }, [services, activeTab, filterTabs]);

  // If showAll is false, limit to initial 4 spotlight cards (uncluttered view)
  const INITIAL_COUNT = 4;
  const displayedServices = showAll ? filteredServices : filteredServices.slice(0, INITIAL_COUNT);
  const remainingCount = Math.max(0, filteredServices.length - INITIAL_COUNT);

  const getServiceIcon = (name: string) => {
    const n = name.toLowerCase();
    if (n.includes('hair') || n.includes('cut') || n.includes('locs') || n.includes('braid')) {
      return <Scissors className="w-3.5 h-3.5 text-[#dfb776]" />;
    }
    if (n.includes('facial') || n.includes('tan') || n.includes('skin') || n.includes('glow')) {
      return <Sparkles className="w-3.5 h-3.5 text-[#dfb776]" />;
    }
    if (n.includes('bridal') || n.includes('makeup')) {
      return <Crown className="w-3.5 h-3.5 text-[#dfb776]" />;
    }
    if (n.includes('nail') || n.includes('pedicure') || n.includes('lash') || n.includes('thread')) {
      return <Flower2 className="w-3.5 h-3.5 text-[#dfb776]" />;
    }
    if (n.includes('massage') || n.includes('spa') || n.includes('shave') || n.includes('beard')) {
      return <Heart className="w-3.5 h-3.5 text-[#dfb776]" />;
    }
    return <Droplets className="w-3.5 h-3.5 text-[#dfb776]" />;
  };

  return (
    <section id={id} className="py-16 sm:py-24 border-b border-neutral-900/80 relative overflow-hidden">
      {/* Ambient background glow effects */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#dfb776]/5 rounded-full blur-3xl pointer-events-none -z-0 animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#B91C1C]/10 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Title and Quick Filter Pills */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1a17] border border-[#dfb776]/30 mb-3 shadow-[0_0_15px_rgba(223,183,118,0.15)]">
              <Sparkles className="w-3.5 h-3.5 text-[#dfb776] animate-spin" style={{ animationDuration: '8s' }} />
              <span className="text-[11px] font-bold tracking-[0.22em] text-[#dfb776] uppercase">
                {badge}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight leading-[1.15] mb-3">
              {titleWhite}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dfb776] via-[#f5deb3] to-[#dfb776]">
                {titleGold}
              </span>
            </h2>

            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-xl">
              {description}
            </p>
          </div>

          {/* Action on Header right: Full Catalog Trigger */}
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onExploreAll}
              className="inline-flex items-center gap-2 bg-[#17171d] hover:bg-[#202028] text-[#dfb776] text-xs sm:text-sm font-bold tracking-wider px-5 py-2.5 rounded-lg border border-[#dfb776]/30 hover:border-[#dfb776] hover:shadow-[0_0_20px_rgba(223,183,118,0.25)] transition-all duration-300 cursor-pointer shadow-md"
            >
              <span>FULL SERVICE MENU</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        {/* Interactive Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar scroll-smooth">
          {filterTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  // If switching tab, keep default 4 or show all if needed
                }}
                className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer shrink-0 ${
                  isActive
                    ? 'text-white bg-[#B91C1C] shadow-[0_0_18px_rgba(185,28,28,0.4)] border border-red-500/60'
                    : 'text-neutral-400 hover:text-white bg-[#131317] hover:bg-[#1b1b22] border border-neutral-800'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Clean, Uncluttered Grid of Services */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {displayedServices.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                whileHover={{ y: -6 }}
                onClick={() => onSelectService(item)}
                className="group relative cursor-pointer flex flex-col rounded-2xl overflow-hidden bg-[#141418] border border-neutral-800/90 hover:border-[#dfb776]/60 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-black/80 glow-box-hover"
              >
                {/* Popular Pill */}
                {item.popular && (
                  <div className="absolute top-3 left-3 z-20">
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-[#B91C1C] text-white shadow-[0_0_12px_rgba(185,28,28,0.6)] border border-red-400/40">
                      <Flame className="w-3 h-3 fill-white" />
                      POPULAR
                    </span>
                  </div>
                )}

                {/* Duration chip on top right */}
                <div className="absolute top-3 right-3 z-20">
                  <span className="inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-[#dfb776] border border-[#dfb776]/30">
                    <Clock className="w-2.5 h-2.5" />
                    {item.duration}
                  </span>
                </div>

                {/* Image Container with Ambient Gradient and smooth optical scale */}
                <div className="relative h-36 sm:h-40 w-full overflow-hidden bg-neutral-900">
                  <motion.img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    whileHover={{ scale: 1.12 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="w-full h-full object-cover object-center filter brightness-[0.9] group-hover:brightness-105"
                  />

                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141418] via-[#141418]/25 to-transparent" />
                  
                  {/* Subtle shimmer hover wave */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform ease-out pointer-events-none" />

                  {/* Icon badge floating at bottom center of image */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-10">
                    <div className="w-8 h-8 rounded-full bg-[#1f1f26] border border-[#dfb776]/40 flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.6)] group-hover:border-[#dfb776] group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(223,183,118,0.5)] transition-all duration-300">
                      {getServiceIcon(item.name)}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="pt-5 pb-4 px-4 flex flex-col flex-1 justify-between text-center">
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-[#dfb776] transition-colors leading-snug mb-1.5 line-clamp-1">
                      {item.name}
                    </h3>

                    <p className="text-xs text-neutral-400 leading-relaxed line-clamp-2 mb-4 group-hover:text-neutral-300">
                      {item.description}
                    </p>
                  </div>

                  {/* Interactive Button */}
                  <div className="pt-2 border-t border-neutral-800/60 flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-[#dfb776] group-hover:text-white group-hover:bg-[#B91C1C] px-3.5 py-1.5 rounded-lg group-hover:shadow-[0_0_12px_rgba(185,28,28,0.4)] transition-all duration-300">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>BOOK APPOINTMENT</span>
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Uncluttered Show More / Show Less Toggle Button */}
        {filteredServices.length > INITIAL_COUNT && (
          <div className="mt-10 flex flex-col items-center justify-center">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-[#18181f] hover:bg-[#22222c] border border-[#dfb776]/40 hover:border-[#dfb776] text-white text-xs sm:text-sm font-bold tracking-wider shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(223,183,118,0.3)] transition-all duration-300 cursor-pointer group"
            >
              <Sparkles className="w-4 h-4 text-[#dfb776] group-hover:rotate-12 transition-transform" />
              <span>
                {showAll 
                  ? 'SHOW LESS (SPOTLIGHT VIEW)' 
                  : `SHOW ALL ${filteredServices.length} SERVICES (+${remainingCount} MORE)`}
              </span>
              {showAll ? (
                <ChevronUp className="w-4 h-4 text-[#dfb776] transition-transform group-hover:-translate-y-0.5" />
              ) : (
                <ChevronDown className="w-4 h-4 text-[#dfb776] transition-transform group-hover:translate-y-0.5" />
              )}
            </motion.button>
            
            <span className="text-[11px] text-neutral-500 mt-2">
              {showAll 
                ? `Showing all ${filteredServices.length} treatments` 
                : `Showing ${displayedServices.length} of ${filteredServices.length} treatments`}
            </span>
          </div>
        )}

      </div>
    </section>
  );
};

