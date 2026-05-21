import React, { useEffect, useState } from 'react';
import { Globe } from 'lucide-react';

interface NavbarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ sidebarOpen, setSidebarOpen, activeSection }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  // Sections order matching App.tsx SECTIONS array
  const sections = ['Cinematic Opening', 'Strategic Scale', 'Fashion Avenue', 'Culinary Hub', 'Global Attractions', 'Media Sponsorship', 'Partner Portal'];
  const activeIdx = sections.indexOf(activeSection);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Check if page is scrolled past hero
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'py-4 glass-panel-heavy' : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between relative">
        
        {/* Left Side: Sidebar Toggle & Brand */}
        <div className="flex items-center space-x-6">
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="flex items-center space-x-2 text-white hover:text-gold transition-colors focus:outline-none group"
            aria-label="Toggle navigation drawer"
          >
            <div className="relative w-6 h-5 flex flex-col justify-between items-center">
              <span className={`w-6 h-[2px] bg-current transition-all duration-300 ${
                sidebarOpen ? 'rotate-45 translate-y-[9px]' : ''
              }`} />
              <span className={`w-6 h-[2px] bg-current transition-all duration-300 ${
                sidebarOpen ? 'opacity-0' : 'opacity-100 group-hover:w-4'
              }`} />
              <span className={`w-6 h-[2px] bg-current transition-all duration-300 ${
                sidebarOpen ? '-rotate-45 -translate-y-[9px]' : ''
              }`} />
            </div>
            <span className="hidden md:inline text-[10px] tracking-[0.25em] font-semibold uppercase">
              {sidebarOpen ? 'Close Menu' : 'Explore Deck'}
            </span>
          </button>

          {/* Divider */}
          <div className="hidden md:block h-6 w-[1px] bg-luxury-muted/20" />

          {/* Active Chapter indicator */}
          <span className="hidden md:inline text-[10px] tracking-[0.2em] text-gold uppercase font-serif">
            {activeSection}
          </span>
        </div>

        {/* Center: Luxury Branding */}
        <a href="#hero" className="inline-block group">
          <h1 className="font-display text-lg md:text-xl tracking-[0.3em] font-bold text-white transition-all duration-300 group-hover:text-gold">
            THE DUBAI MALL
          </h1>
          <span className="block text-[8px] tracking-[0.55em] text-gold uppercase mt-0.5 transition-all duration-300 group-hover:text-white">
            E MAAR
          </span>
        </a>

        {/* Right Side: Quick Actions */}
        <div className="flex items-center space-x-6">
          <a 
            href="#leasing" 
            className="hidden sm:flex items-center space-x-2 text-[10px] tracking-[0.2em] font-semibold text-white hover:text-gold transition-colors uppercase"
          >
            <span>Lease Inquiry</span>
          </a>
          <a 
            href="https://thedubaimall.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-gold transition-colors"
            title="Official Website"
          >
            <Globe className="w-4 h-4" />
          </a>
          <a 
            href="#leasing" 
            className="btn-gold !px-4 !py-2 hidden md:block text-[9px]"
          >
            Book Venue
          </a>
        </div>
        
        {/* Floating active indicator */}
        <div className="absolute bottom-0 left-0 h-0.5 bg-gold transition-all duration-300" style={{ width: '8rem', transform: `translateX(${activeIdx * 8}rem)` }} />
      </div>

      {/* Gold Scroll Progress Indicator */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-luxury-lightGray">
        <div 
          className="h-full bg-gradient-to-r from-gold-dark via-gold-bright to-gold-dark transition-all duration-100" 
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </nav>
  );
};
