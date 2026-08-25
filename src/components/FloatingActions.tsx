import React from 'react';
import { MessageSquare, Phone, Calendar } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface FloatingActionsProps {
  onOpenBooking: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenBooking }) => {
  return (
    <>
      {/* Floating WhatsApp Quick Action Button (Desktop & Mobile) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        <a
          href={`https://wa.me/${SALON_INFO.whatsapp}?text=${encodeURIComponent("Hello SCISSOR Unisex Salon! I would like to book an appointment.")}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="group flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3 sm:px-4 sm:py-3 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 border border-white/20"
        >
          <MessageSquare className="w-5 h-5 fill-current" />
          <span className="hidden sm:inline-block text-xs font-bold tracking-wide">
            Chat on WhatsApp
          </span>
        </a>
      </div>

      {/* Mobile Sticky Bottom Conversion Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#121216]/95 backdrop-blur-lg border-t border-neutral-800 p-2.5 flex items-center gap-2 shadow-2xl">
        <a
          href={`tel:${SALON_INFO.phoneRaw}`}
          className="flex-1 flex items-center justify-center gap-2 bg-[#202028] text-neutral-200 text-xs font-bold py-3 rounded-lg border border-neutral-700 active:bg-neutral-800"
        >
          <Phone className="w-4 h-4 text-[#dfb776]" />
          <span>Call Salon</span>
        </a>

        <button
          onClick={onOpenBooking}
          className="flex-1 flex items-center justify-center gap-2 bg-[#B91C1C] text-white text-xs font-bold py-3 rounded-lg shadow-lg active:bg-[#991b1b]"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Now</span>
        </button>
      </div>
    </>
  );
};
