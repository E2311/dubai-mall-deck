import React from 'react';
import { X, Calendar, Building, Sparkles } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  activeSection: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen, activeSection }) => {
  const menuItems = [
    { id: 'hero', number: '01', label: 'Cinematic Opening' },
    { id: 'why-dubai-mall', number: '02', label: 'Why Dubai Mall' },
    { id: 'luxury-retail', number: '03', label: 'Luxury Retail (Fashion Avenue)' },
    { id: 'dining-lifestyle', number: '04', label: 'Dining & Culinary Hub' },
    { id: 'entertainment', number: '05', label: 'Attractions & Entertainment' },
    { id: 'sponsorship', number: '06', label: 'Sponsorships & Media' },
    { id: 'leasing', number: '07', label: 'Partner Portal & Inquiry' },
  ];

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Backdrop Overlay */}
      <div 
        className={`fixed inset-0 bg-black/85 z-40 transition-opacity duration-500 backdrop-blur-sm ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar Drawer */}
      <div 
        className={`fixed top-0 left-0 h-screen w-full max-w-sm sm:max-w-md bg-luxury-black/95 z-50 transition-all duration-500 ease-out border-r border-gold/10 flex flex-col justify-between ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Top Header */}
        <div className="p-6 md:p-8 flex items-center justify-between border-b border-luxury-gray/40">
          <div className="flex flex-col">
            <span className="font-display tracking-[0.25em] text-white text-sm font-semibold">PRESENTATION DECK</span>
            <span className="text-[8px] tracking-[0.4em] text-gold uppercase mt-0.5">DUBAI MALL COMMERCIAL PORTAL</span>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="w-10 h-10 flex items-center justify-center text-white hover:text-gold transition-colors border border-luxury-muted/20 hover:border-gold/30 rounded-none focus:outline-none"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mid Navigation Links */}
        <div className="flex-1 overflow-y-auto px-6 md:px-8 py-10 no-scrollbar">
          <div className="space-y-6">
            {menuItems.map((item) => {
              const isActive = activeSection.toLowerCase().includes(item.id.replace(/-/g, ' ')) || activeSection === item.label;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="w-full text-left group flex items-start space-x-6 py-2 border-b border-transparent focus:outline-none"
                >
                  <span className={`font-mono text-xs tracking-wider mt-1.5 transition-colors duration-300 ${
                    isActive ? 'text-gold-bright' : 'text-luxury-muted group-hover:text-gold'
                  }`}>
                    {item.number}
                  </span>
                  
                  <div className="flex flex-col">
                    <span className={`font-display text-sm sm:text-base tracking-[0.1em] transition-all duration-300 ${
                      isActive 
                        ? 'text-gold-bright translate-x-1 font-semibold' 
                        : 'text-white/80 group-hover:text-gold group-hover:translate-x-1'
                    }`}>
                      {item.label}
                    </span>
                    <span className="text-[9px] text-luxury-muted tracking-wider uppercase mt-1">
                      {isActive ? 'Current Chapter' : 'Explore section'}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA / Information */}
        <div className="p-6 md:p-8 bg-luxury-dark border-t border-luxury-gray/40 space-y-6">
          <div className="space-y-3">
            <h4 className="text-[10px] tracking-[0.25em] font-semibold text-gold uppercase">Quick Actions</h4>
            <div className="grid grid-cols-2 gap-3">
              <a 
                href="#leasing" 
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-2 p-2 bg-luxury-gray hover:bg-gold/10 border border-transparent hover:border-gold/20 transition-all text-left group"
              >
                <Building className="w-3.5 h-3.5 text-gold group-hover:text-gold-bright" />
                <span className="text-[9px] uppercase tracking-wider text-white">Lease Space</span>
              </a>
              <a 
                href="#sponsorship" 
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-2 p-2 bg-luxury-gray hover:bg-gold/10 border border-transparent hover:border-gold/20 transition-all text-left group"
              >
                <Calendar className="w-3.5 h-3.5 text-gold group-hover:text-gold-bright" />
                <span className="text-[9px] uppercase tracking-wider text-white">Sponsorship</span>
              </a>
            </div>
          </div>
          
          <div className="flex items-center justify-between text-[8px] text-luxury-muted tracking-widest uppercase">
            <span>Dubai Mall Sales Platform v1.0</span>
            <span className="flex items-center text-gold"><Sparkles className="w-2.5 h-2.5 mr-1" /> Emaar</span>
          </div>
        </div>
      </div>
    </>
  );
};
