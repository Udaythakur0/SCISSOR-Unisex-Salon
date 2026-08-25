import React from 'react';
import { Phone, MapPin, MessageSquare, Clock, Instagram, Facebook, Share2 } from 'lucide-react';
import { SALON_INFO, INSTAGRAM_THUMBNAILS } from '../data/salonData';

interface FooterProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onExploreServices }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-[#09090b] text-neutral-300 border-t border-neutral-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-neutral-800/60">
          
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex flex-col items-start mb-4">
              <div className="flex items-center gap-1.5">
                <span className="font-brand text-2xl font-bold tracking-[0.25em] text-white">
                  SCISS
                </span>
                <span className="relative flex items-center justify-center">
                  <span className="font-brand text-2xl font-bold tracking-[0.25em] text-[#B91C1C]">
                    O
                  </span>
                  <span className="absolute w-1.5 h-1.5 bg-[#dfb776] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </span>
                <span className="font-brand text-2xl font-bold tracking-[0.25em] text-white">
                  R
                </span>
              </div>
              <span className="font-sans-custom text-[10px] tracking-[0.35em] text-neutral-400 font-medium">
                UNISEX SALON
              </span>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6 max-w-sm">
              Professional hair, beauty and grooming services for everyone. Experience modern luxury and perfection in Kasia.
            </p>

            {/* Social Icons (circle buttons like in image) */}
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#1c1c22] border border-neutral-700 flex items-center justify-center text-neutral-300 hover:text-[#dfb776] hover:border-[#dfb776]/50 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#1c1c22] border border-neutral-700 flex items-center justify-center text-neutral-300 hover:text-[#dfb776] hover:border-[#dfb776]/50 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${SALON_INFO.whatsapp}?text=${encodeURIComponent("Hello SCISSOR Unisex Salon! I would like to inquire about your services.")}`}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#1c1c22] border border-neutral-700 flex items-center justify-center text-neutral-300 hover:text-[#25D366] hover:border-[#25D366]/50 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <a
                href={SALON_INFO.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#1c1c22] border border-neutral-700 flex items-center justify-center text-neutral-300 hover:text-[#dfb776] hover:border-[#dfb776]/50 transition-colors"
                aria-label="Directions on Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold tracking-[0.2em] text-white uppercase mb-4">
              QUICK LINKS
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <button
                  onClick={() => scrollTo('home')}
                  className="hover:text-[#dfb776] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('about')}
                  className="hover:text-[#dfb776] transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    scrollTo('services');
                    onExploreServices();
                  }}
                  className="hover:text-[#dfb776] transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenBooking}
                  className="hover:text-[#dfb776] transition-colors"
                >
                  Booking
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('contact')}
                  className="hover:text-[#dfb776] transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Us (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold tracking-[0.2em] text-white uppercase mb-4">
              CONTACT US
            </h4>
            <ul className="space-y-3.5 text-xs text-neutral-300">
              <li>
                <a
                  href={`tel:${SALON_INFO.phoneRaw}`}
                  className="flex items-start gap-2.5 hover:text-[#dfb776] transition-colors group"
                >
                  <Phone className="w-4 h-4 text-[#dfb776] shrink-0 mt-0.5" />
                  <span className="font-semibold text-white group-hover:text-[#dfb776]">{SALON_INFO.phone}</span>
                </a>
              </li>

              <li>
                <a
                  href={SALON_INFO.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-2.5 hover:text-[#dfb776] transition-colors"
                >
                  <MapPin className="w-4 h-4 text-[#dfb776] shrink-0 mt-0.5" />
                  <span>{SALON_INFO.address}</span>
                </a>
              </li>

              <li>
                <a
                  href={`https://wa.me/${SALON_INFO.whatsapp}?text=${encodeURIComponent("Hello SCISSOR Salon! I want to book an appointment.")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-2.5 hover:text-emerald-400 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </li>

              <li className="flex items-start gap-2.5 text-neutral-400">
                <Clock className="w-4 h-4 text-[#dfb776] shrink-0 mt-0.5" />
                <div>
                  <span className="text-neutral-200 block">{SALON_INFO.hours}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Follow Us (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold tracking-[0.2em] text-white uppercase mb-4">
              FOLLOW US
            </h4>
            <div className="grid grid-cols-2 gap-2 max-w-[200px]">
              {INSTAGRAM_THUMBNAILS.map((src, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-lg overflow-hidden border border-neutral-800 hover:border-[#dfb776]/60 transition-colors group cursor-pointer"
                >
                  <img
                    src={src}
                    alt="Salon gallery thumb"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 filter brightness-90 group-hover:brightness-100"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© 2025 SCISSOR UNISEX SALON. All Rights Reserved.</p>
          <p className="flex items-center gap-1 text-neutral-400">
            Designed with <span className="text-red-500">❤️</span> for SCISSOR
          </p>
        </div>
      </div>
    </footer>
  );
};
