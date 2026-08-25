import React, { useState } from 'react';
import { X, Clock, Calendar, Check, Sparkles, Scissors, Heart, Award } from 'lucide-react';
import { BEAUTY_SERVICES, MEN_SERVICES, ServiceItem } from '../data/salonData';

interface ServiceDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService: ServiceItem | null;
  onBookService: (service: ServiceItem) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  isOpen,
  onClose,
  selectedService,
  onBookService,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'beauty' | 'hair-beard'>('all');
  const allServices = [...BEAUTY_SERVICES, ...MEN_SERVICES];

  if (!isOpen) return null;

  const displayedServices = activeTab === 'all'
    ? allServices
    : allServices.filter(s => s.category === activeTab);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#141418] border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden text-neutral-100"
        id="service-menu-modal"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-neutral-800 bg-[#18181e]">
          <div>
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#B91C1C] uppercase block">
              SERVICE CATALOG & DETAILS
            </span>
            <h3 className="text-lg sm:text-xl font-bold font-display text-white">
              SCISSOR Salon Services
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-neutral-800/80 hover:bg-neutral-700 text-neutral-300 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Filters */}
        <div className="flex items-center gap-2 px-5 sm:px-6 py-3 border-b border-neutral-800 bg-[#111115] overflow-x-auto">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'all'
                ? 'bg-[#B91C1C] text-white'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
            }`}
          >
            All Services ({allServices.length})
          </button>

          <button
            onClick={() => setActiveTab('beauty')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'beauty'
                ? 'bg-[#B91C1C] text-white'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
            }`}
          >
            Beauty & Skin ({BEAUTY_SERVICES.length})
          </button>

          <button
            onClick={() => setActiveTab('hair-beard')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'hair-beard'
                ? 'bg-[#B91C1C] text-white'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
            }`}
          >
            Hair & Beard ({MEN_SERVICES.length})
          </button>
        </div>

        {/* Services List Grid */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {displayedServices.map((service) => (
              <div
                key={service.id}
                className="flex items-center gap-3.5 p-3 sm:p-4 rounded-xl bg-[#191920] border border-neutral-800/80 hover:border-[#dfb776]/50 transition-all duration-300 group hover:shadow-[0_4px_20px_rgba(0,0,0,0.6)] glow-box-hover"
              >
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden shrink-0 bg-neutral-900 border border-neutral-800 group-hover:border-[#dfb776]/40">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter brightness-95 group-hover:brightness-105"
                  />
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform ease-out pointer-events-none" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <h4 className="text-sm font-bold text-white group-hover:text-[#dfb776] transition-colors truncate">
                      {service.name}
                    </h4>
                  </div>

                  <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed mb-2 group-hover:text-neutral-300">
                    {service.description}
                  </p>

                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-neutral-400 flex items-center gap-1 font-medium">
                      <Clock className="w-3 h-3 text-[#dfb776]" />
                      {service.duration}
                    </span>

                    <button
                      onClick={() => {
                        onClose();
                        onBookService(service);
                      }}
                      className="text-xs font-bold text-[#dfb776] group-hover:text-white group-hover:bg-[#B91C1C] px-2.5 py-1 rounded-md transition-all duration-200 flex items-center gap-1 cursor-pointer"
                    >
                      <span>Book Now</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer info note */}
        <div className="px-5 py-3 border-t border-neutral-800 bg-[#141418] text-center text-xs text-neutral-400 flex items-center justify-center gap-2">
          <Award className="w-4 h-4 text-[#dfb776]" />
          <span>Complimentary hair & skin consultation included with every service</span>
        </div>

      </div>
    </div>
  );
};
