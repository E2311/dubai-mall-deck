import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Compass, ArrowRight } from 'lucide-react';
 
export const Attractions: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
 
  const attractions = [
    {
      title: 'Dubai Aquarium & Underwater Zoo',
      tagline: 'Deep Ocean in the Desert',
      image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=1200&q=80',
      fallback: 'https://images.unsplash.com/photo-1519197924294-4ba991a11128?w=1200&q=80',
      description: 'One of the largest suspended aquariums in the world, featuring a 10-million litre tank with over 33,000 aquatic animals, including the largest collection of sand tiger sharks.',
      traffic: 'Draws over 10M+ ticketed visitors annually',
      sponsorOpportunity: 'Interactive digital screen networks, brand activations inside the underwater tunnel, naming rights for educational segments.',
      stats: [
        { label: 'Tank Capacity', value: '10 Million Litres' },
        { label: 'Species', value: '140+' },
        { label: 'Tunnel Length', value: '48 Metres' },
      ],
    },
    {
      title: 'The Dubai Fountain',
      tagline: 'Light, Water & Symphony',
      image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1200&q=80',
      fallback: 'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=1200&q=80',
      description: "The world's tallest choreographed fountain system, shooting water up to 500 feet into the air. Synchronized to classical, contemporary, and Arabic musical masterpieces.",
      traffic: 'Viewed by 50,000+ spectators every evening',
      sponsorOpportunity: 'Primary audio branding pre-show, laser projection sponsorships on the Burj Khalifa facade, lakeside bridge branding activations.',
      stats: [
        { label: 'Water Shooters', value: '22,000 Gallons' },
        { label: 'Height Range', value: 'Up to 150m' },
        { label: 'Daily Shows', value: '12 Performances' },
      ],
    },
    {
      title: 'Olympic-Sized Ice Rink',
      tagline: 'Year-Round Winter Playground',
      image: 'https://images.unsplash.com/photo-1471591373672-51fb32a84e50?w=1200&q=80',
      fallback: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=1200&q=80',
      description: 'A multi-functional venue hosting public skating sessions, figure skating lessons, ice hockey tournaments, and high-impact corporate product launches.',
      traffic: 'Popular local and tourist youth hub',
      sponsorOpportunity: 'Under-ice branding sheets, perimeter boards advertising, stadium naming rights, screen sponsorship during tournaments.',
      stats: [
        { label: 'Ice Thickness', value: '38 Millimetres' },
        { label: 'Spectator Seating', value: '350 Seats' },
        { label: 'Event Capacity', value: '2,000 People' },
      ],
    },
    {
      title: 'Play DXB (Virtual Reality Park)',
      tagline: 'Challenge Reality',
      image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=1200&q=80',
      fallback: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=1200&q=80',
      description: 'The ultimate indoor virtual and augmented reality park. Offers immersive, mind-blowing educational and entertainment rides for families and adrenaline seekers.',
      traffic: 'High teenage and family dwell times',
      sponsorOpportunity: 'Custom interactive brand portals, game sponsorships, immersive DOOH screen naming, technology partnership branding.',
      stats: [
        { label: 'VR Attractions', value: '30+' },
        { label: 'Total Area', value: '7,000 m²' },
        { label: 'Dwell Time Avg', value: '2.5 Hours' },
      ],
    },
  ];
 
  return (
    <section
      id="entertainment"
      className="relative py-24 md:py-32 bg-luxury-dark border-t border-luxury-gray/40 overflow-hidden"
    >
      <div className="absolute left-0 top-0 w-[400px] h-[400px] rounded-full bg-gold/5 blur-[150px] pointer-events-none" />
 
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="section-subtitle">05 // Experiential Anchors</span>
          <h3 className="text-3xl sm:text-5xl font-display font-bold tracking-wider text-white mb-6 uppercase">
            The Experiential Draw:{' '}
            <span className="text-gold-bright italic font-serif font-normal">Attractions</span>
          </h3>
          <p className="text-white/70 font-light leading-relaxed text-sm md:text-base max-w-xl">
            Mega attractions differentiate Dubai Mall from traditional retail environments.
            They act as global anchors, drawing massive tourism and providing unique brand
            integration platforms.
          </p>
        </div>
 
        {/* Tab Layout */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left: Tab Selectors */}
          <div className="lg:w-1/3 flex flex-col space-y-4">
            {attractions.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`text-left p-6 border focus:outline-none transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-luxury-black border-gold text-white shadow-[0_0_20px_rgba(197,168,128,0.1)]'
                    : 'bg-transparent border-luxury-gray/60 text-white/60 hover:border-gold/30 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] tracking-widest text-gold font-bold">
                    05.{index + 1}
                  </span>
                  {activeTab === index && (
                    <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                  )}
                </div>
                <h4 className="text-lg font-display tracking-wider font-semibold">
                  {item.title}
                </h4>
                <p className="text-[10px] tracking-wider text-gold-bright uppercase mt-1">
                  {item.tagline}
                </p>
              </button>
            ))}
          </div>
 
          {/* Right: Active Tab Detail */}
          <div className="lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="glass-panel p-8 sm:p-10 border border-luxury-gray/60 flex flex-col justify-between min-h-[500px]"
              >
                <div>
                  {/* Image */}
                  <div className="relative h-80 sm:h-[400px] w-full overflow-hidden mb-8 bg-luxury-gray group/img border border-white/5 shadow-2xl">
                    <img
                      src={attractions[activeTab].image}
                      alt={attractions[activeTab].title}
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover/img:scale-105"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (target.src !== attractions[activeTab].fallback) {
                          target.src = attractions[activeTab].fallback;
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20 z-10" />
                    <div className="absolute bottom-4 left-4 z-20 flex items-center space-x-2 bg-luxury-black/95 px-4 py-2 border border-gold/20 backdrop-blur-sm">
                      <Compass className="w-3.5 h-3.5 text-gold" />
                      <span className="text-[9px] tracking-widest text-white uppercase font-semibold">
                        {attractions[activeTab].traffic}
                      </span>
                    </div>
                  </div>
 
                  <h4 className="text-2xl sm:text-3xl font-display font-semibold text-white tracking-wider mb-2">
                    {attractions[activeTab].title}
                  </h4>
                  <p className="text-xs text-gold uppercase tracking-[0.25em] font-semibold mb-6">
                    {attractions[activeTab].tagline}
                  </p>
                  <p className="text-white/70 font-light text-xs sm:text-sm leading-relaxed mb-8">
                    {attractions[activeTab].description}
                  </p>
 
                  <div className="h-[1px] bg-luxury-gray/60 w-full my-6" />
 
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {attractions[activeTab].stats.map((stat, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="text-[9px] uppercase tracking-widest text-luxury-muted font-semibold mb-1">
                          {stat.label}
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-white tracking-wide">
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>
 
                  <div className="bg-luxury-black/60 border border-gold/10 p-4 sm:p-6 mb-4">
                    <h5 className="text-[10px] tracking-widest font-semibold text-gold uppercase mb-2 flex items-center">
                      <ShieldCheck className="w-4 h-4 mr-2" />
                      Sponsorship Integration Platform
                    </h5>
                    <p className="text-[11px] sm:text-xs text-white/70 font-light leading-relaxed">
                      {attractions[activeTab].sponsorOpportunity}
                    </p>
                  </div>
                </div>
 
                <div className="mt-8 flex justify-end">
                  <a
                    href="#leasing"
                    className="flex items-center space-x-2 group text-xs text-gold-bright uppercase tracking-widest font-semibold"
                  >
                    <span>Inquire About Integration</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-2 transition-transform duration-300" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
