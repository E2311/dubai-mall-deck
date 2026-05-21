import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { Hero } from './sections/Hero';
import { WhyDubaiMall } from './sections/WhyDubaiMall';
import { LuxuryRetail } from './sections/LuxuryRetail';
import { DiningLifestyle } from './sections/DiningLifestyle';
import { Attractions } from './sections/Attractions';
import { Sponsorship } from './sections/Sponsorship';
import { LeasingPortal } from './sections/LeasingPortal';
import { ChevronRight, Phone } from 'lucide-react';

const SECTIONS = [
  { id: 'hero', name: 'Cinematic Opening' },
  { id: 'why-dubai-mall', name: 'Strategic Scale' },
  { id: 'luxury-retail', name: 'Fashion Avenue' },
  { id: 'dining-lifestyle', name: 'Culinary Hub' },
  { id: 'entertainment', name: 'Global Attractions' },
  { id: 'sponsorship', name: 'Media Sponsorship' },
  { id: 'leasing', name: 'Partner Portal' }
];

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Cinematic Opening');
  const [activeSectionId, setActiveSectionId] = useState('hero');
  const [loading, setLoading] = useState(true);

  // Preloader timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer for Active Section Tracking
  useEffect(() => {
    if (loading) return;

    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px', // Trigger when section occupies the middle of the screen
      threshold: 0.1
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const matched = SECTIONS.find((s) => s.id === entry.target.id);
          if (matched) {
            setActiveSection(matched.name);
            setActiveSectionId(matched.id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    SECTIONS.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => {
      SECTIONS.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) observer.unobserve(element);
      });
    };
  }, [loading]);

  const handleBulletClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getNextSection = () => {
    const currentIndex = SECTIONS.findIndex((s) => s.id === activeSectionId);
    if (currentIndex !== -1 && currentIndex < SECTIONS.length - 1) {
      return SECTIONS[currentIndex + 1];
    }
    return null;
  };

  const nextSection = getNextSection();

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-gold selection:text-black font-sans">
      
      {/* 1. Cinematic Preloader */}
      <AnimatePresence>
        {loading && (
          <motion.div 
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center"
          >
            {/* Draw Gold Frame */}
            <div className="relative border border-gold/15 p-12 md:p-16 max-w-sm sm:max-w-md w-full text-center overflow-hidden flex flex-col items-center">
              
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-gold" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-gold" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-gold" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-gold" />

              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-[9px] uppercase tracking-[0.45em] text-gold mb-4"
              >
                EMAAR PJSC presents
              </motion.span>
              
              <motion.h2 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.8 }}
                className="font-display text-2xl md:text-3xl tracking-[0.25em] font-bold text-white mb-1"
              >
                THE DUBAI MALL
              </motion.h2>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '60px' }}
                transition={{ duration: 1, delay: 1.2 }}
                className="h-[1px] bg-gold my-4"
              />
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                className="text-[8px] uppercase tracking-[0.3em] text-white/80 font-light"
              >
                Interactive Sales Deck & Partner Portal
              </motion.p>
            </div>
            
            {/* Soft loader bar */}
            <div className="w-40 h-[1px] bg-white/10 mt-8 overflow-hidden relative">
              <motion.div 
                initial={{ left: '-100%' }}
                animate={{ left: '100%' }}
                transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                className="absolute top-0 w-20 h-full bg-gold"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Main App Content (Rendered only after preloader) */}
      {!loading && (
        <>
          {/* Navigation */}
          <Navbar 
            sidebarOpen={sidebarOpen} 
            setSidebarOpen={setSidebarOpen} 
            activeSection={activeSection} 
          />
          
          <Sidebar 
            isOpen={sidebarOpen} 
            setIsOpen={setSidebarOpen} 
            activeSection={activeSection} 
          />

          {/* Chapters */}
          <main className="relative z-10">
            <Hero />
            <WhyDubaiMall />
            <LuxuryRetail />
            <DiningLifestyle />
            <Attractions />
            <Sponsorship />
            <LeasingPortal />
          </main>

          {/* Right Side Vertical Chapter Progress Bullets */}
          <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden md:flex flex-col space-y-4">
            {SECTIONS.map((section) => (
              <button
                key={section.id}
                onClick={() => handleBulletClick(section.id)}
                className="group flex items-center justify-end focus:outline-none"
                aria-label={`Scroll to ${section.name}`}
              >
                {/* Tooltip Label */}
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-3 text-[9px] uppercase tracking-widest text-gold-bright font-semibold pointer-events-none">
                  {section.name}
                </span>
                
                {/* Circle Indicator */}
                <div className={`w-2 h-2 rounded-full border transition-all duration-300 ${
                  activeSectionId === section.id 
                    ? 'bg-gold border-gold scale-125 shadow-[0_0_10px_rgba(197,168,128,0.5)]' 
                    : 'bg-transparent border-white/40 group-hover:border-gold group-hover:scale-110'
                }`} />
              </button>
            ))}
          </div>

          {/* Bottom Floating Control Bar (Deck Navigation) */}
          <div className="fixed bottom-6 left-6 z-40 flex items-center space-x-4">
            {nextSection ? (
              <button 
                onClick={() => handleBulletClick(nextSection.id)}
                className="glass-panel px-6 py-3 border border-gold/10 hover:border-gold/30 text-white/80 hover:text-white flex items-center space-x-4 text-[10px] uppercase tracking-widest font-semibold transition-all duration-300 shadow-lg group focus:outline-none"
              >
                <span className="text-gold-bright text-[9px] font-mono">NEXT CHAPTER</span>
                <span>{nextSection.name}</span>
                <ChevronRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
              </button>
            ) : (
              <button 
                onClick={() => handleBulletClick('hero')}
                className="glass-panel px-6 py-3 border border-gold/10 hover:border-gold/30 text-white/80 hover:text-white flex items-center space-x-4 text-[10px] uppercase tracking-widest font-semibold transition-all duration-300 shadow-lg group focus:outline-none"
              >
                <span className="text-gold-bright text-[9px] font-mono">RETURN</span>
                <span>Back to top</span>
              </button>
            )}

            {/* Quick Inquiry floating button */}
            <a 
              href="#leasing" 
              className="glass-panel p-3 border border-gold/20 hover:border-gold text-gold hover:text-white transition-all duration-300 shadow-lg"
              title="Fast inquiry"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
