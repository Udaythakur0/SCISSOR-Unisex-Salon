import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturesBar } from './components/FeaturesBar';
import { ServiceSection } from './components/ServiceSection';
import { StatsCounter } from './components/StatsCounter';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { LightboxModal } from './components/LightboxModal';
import { FloatingActions } from './components/FloatingActions';
import { BEAUTY_SERVICES, MEN_SERVICES, GalleryPhoto, ServiceItem } from './data/salonData';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isServiceMenuOpen, setIsServiceMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  // Track active section for navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenBookingWithService = (service?: ServiceItem) => {
    if (service) {
      setSelectedService(service);
    }
    setIsBookingOpen(true);
  };

  const handleOpenPhoto = (photo: GalleryPhoto, index: number) => {
    setCurrentPhotoIndex(index);
    setIsLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0b0b0d] text-neutral-100 font-sans-custom selection:bg-[#B91C1C] selection:text-white pb-14 sm:pb-0">
      {/* Top Navbar */}
      <Navbar
        onOpenBooking={() => handleOpenBookingWithService()}
        activeSection={activeSection}
      />

      {/* Hero Section */}
      <Hero
        onOpenBooking={() => handleOpenBookingWithService()}
      />

      {/* 4 Feature Highlights */}
      <FeaturesBar />

      {/* Services Section 1: Beauty & Grooming Redefined */}
      <div id="services">
        <ServiceSection
          id="services-beauty"
          badge="BEAUTY PARLOUR & SPA"
          titleWhite="Beauty, Skin &"
          titleGold="Spa Elegance"
          description="Facials, nail artistry, lash lifts, bridal transformations, waxing, and rejuvenating skin therapies crafted to perfection."
          services={BEAUTY_SERVICES}
          sectionType="beauty"
          onSelectService={(service) => handleOpenBookingWithService(service)}
          onExploreAll={() => setIsServiceMenuOpen(true)}
        />

        {/* Services Section 2: Hair & Beard Excellence */}
        <ServiceSection
          id="services-hair-beard"
          badge="HAIRSTYLING & GROOMING"
          titleWhite="Hair, Beard &"
          titleGold="Styling Excellence"
          description="Signature fade haircuts, straight-razor shaving, beard lineup, dreadlocks, hair color, and herbal champi massage."
          services={MEN_SERVICES}
          sectionType="hair"
          onSelectService={(service) => handleOpenBookingWithService(service)}
          onExploreAll={() => setIsServiceMenuOpen(true)}
        />
      </div>

      {/* Stats Counter Row */}
      <StatsCounter />

      {/* About Section: More Than a Salon, It's an Experience */}
      <AboutSection />

      {/* Gallery: A Glimpse of Our Salon */}
      <GallerySection
        onSelectPhoto={handleOpenPhoto}
      />

      {/* CTA Banner: Ready for Your Next Look? */}
      <div id="booking">
        <CtaBanner
          onOpenBooking={() => handleOpenBookingWithService()}
        />
      </div>

      {/* Footer */}
      <Footer
        onOpenBooking={() => handleOpenBookingWithService()}
        onExploreServices={() => setIsServiceMenuOpen(true)}
      />

      {/* Sticky & Floating Quick Actions */}
      <FloatingActions
        onOpenBooking={() => handleOpenBookingWithService()}
      />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => {
          setIsBookingOpen(false);
          setSelectedService(null);
        }}
        preSelectedService={selectedService}
      />

      {/* Interactive Service Detail / Rate Card Modal */}
      <ServiceDetailModal
        isOpen={isServiceMenuOpen}
        onClose={() => setIsServiceMenuOpen(false)}
        selectedService={selectedService}
        onBookService={(service) => {
          setIsServiceMenuOpen(false);
          handleOpenBookingWithService(service);
        }}
      />

      {/* Lightbox Modal for Gallery */}
      <LightboxModal
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        currentIndex={currentPhotoIndex}
        onNavigate={(idx) => setCurrentPhotoIndex(idx)}
      />
    </div>
  );
}
