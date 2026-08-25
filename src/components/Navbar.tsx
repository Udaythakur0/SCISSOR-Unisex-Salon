import React, { useState, useEffect } from 'react';
import { Calendar, Phone, Menu, X } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface NavbarProps {
  onOpenBooking: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home', id: 'home' },
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'SERVICES', href: '#services', id: 'services' },
    { label: 'BOOKING', href: '#booking', id: 'booking' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0c0c0e]/95 backdrop-blur-md py-3 shadow-xl border-b border-neutral-800/60'
          : 'bg-gradient-to-b from-[#0c0c0e]/90 via-[#0c0c0e]/60 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex flex-col items-start group select-none"
          id="logo-brand"
        >
          <div className="flex items-center gap-1.5">
            <span className="font-brand text-xl sm:text-2xl font-bold tracking-[0.25em] text-white">
              SCISS
            </span>
            <span className="relative flex items-center justify-center">
              <span className="font-brand text-xl sm:text-2xl font-bold tracking-[0.25em] text-[#B91C1C]">
                O
              </span>
              <span className="absolute w-1.5 h-1.5 bg-[#dfb776] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
            </span>
            <span className="font-brand text-xl sm:text-2xl font-bold tracking-[0.25em] text-white">
              R
            </span>
          </div>
          <span className="font-sans-custom text-[9px] sm:text-[10px] tracking-[0.35em] text-neutral-400 font-medium -mt-1 group-hover:text-[#dfb776] transition-colors">
            UNISEX SALON
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8" id="desktop-nav">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-xs font-semibold tracking-wider transition-all duration-200 py-1 relative ${
                  isActive
                    ? 'text-[#dfb776]'
                    : 'text-neutral-300 hover:text-white'
                }`}
                id={`nav-link-${link.id}`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#B91C1C] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenBooking}
            className="hidden sm:inline-flex items-center gap-2 bg-[#B91C1C] hover:bg-[#a01818] active:scale-[0.98] text-white text-xs font-semibold px-4 py-2.5 rounded-md shadow-lg shadow-red-900/30 transition-all duration-200 border border-red-700/50 cursor-pointer"
            id="nav-book-btn"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>BOOK APPOINTMENT</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-neutral-300 hover:text-white p-2 rounded-lg bg-neutral-900/80 border border-neutral-800"
            aria-label="Toggle navigation menu"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="md:hidden bg-[#111114]/98 border-b border-neutral-800 px-5 py-6 space-y-4 backdrop-blur-xl animate-fadeIn"
          id="mobile-nav-drawer"
        >
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-semibold tracking-wider text-neutral-200 hover:text-[#dfb776] py-2 border-b border-neutral-800/40"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#B91C1C] hover:bg-[#a01818] text-white text-xs font-bold py-3 rounded-md shadow-md"
            >
              <Calendar className="w-4 h-4" />
              <span>BOOK APPOINTMENT</span>
            </button>

            <a
              href={`tel:${SALON_INFO.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2 bg-neutral-900 border border-neutral-700 text-neutral-200 text-xs font-semibold py-3 rounded-md"
            >
              <Phone className="w-4 h-4 text-[#dfb776]" />
              <span>CALL {SALON_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
