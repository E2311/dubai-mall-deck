import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChefHat, Coffee, Award, Sparkles, Flame } from 'lucide-react';

export const DiningLifestyle: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'fine' | 'casual' | 'cafe'>('all');

  const diningConcepts = [
    {
      name: 'Fountain-View Terraces',
      type: 'fine',
      icon: <Award className="w-5 h-5 text-gold" />,
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800',
      description: 'Exclusive fine dining experiences with outdoor terraces overlooking the synchronized Dubai Fountain and Burj Khalifa light shows.',
      stats: '25+ high-end terrace venues • Michelin-linked concepts'
    },
    {
      name: 'Munchies Food Hall',
      type: 'casual',
      icon: <Flame className="w-5 h-5 text-gold" />,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800',
      description: 'A dynamic, high-energy culinary market highlighting global street food, local artisanal concepts, and trending desserts.',
      stats: '15,000+ daily average customers • High footfall anchor'
    },
    {
      name: 'Luxury Brand Cafés',
      type: 'cafe',
      icon: <Coffee className="w-5 h-5 text-gold" />,
      image: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=800',
      description: 'Sophisticated salons integrated with haute couture labels, offering premium teas, artisanal pastries, and bespoke dining.',
      stats: 'Armani Caffé, Ladurée, & Ralph\'s Coffee flagships'
    },
    {
      name: 'Global Gastronomy',
      type: 'casual',
      icon: <ChefHat className="w-5 h-5 text-gold" />,
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800',
      description: 'A curated selection of international dining institutions, celebrity chef restaurants, and family-friendly dining spots.',
      stats: '200+ distinct food & beverage concepts'
    }
  ];

  const filteredConcepts = activeCategory === 'all' 
    ? diningConcepts 
    : diningConcepts.filter(c => c.type === activeCategory);

  return (
    <section 
      id="dining-lifestyle" 
      className="relative py-24 md:py-32 bg-luxury-black border-t border-luxury-gray/40"
    >
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] rounded-full bg-gold/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="section-subtitle">04 // Gastronomical Center</span>
          <h3 className="text-3xl sm:text-5xl font-display font-bold tracking-wider text-white mb-6 uppercase">
            Culinary Innovation: <span className="text-gold-bright italic font-serif font-normal">200+</span> F&B Outlets
          </h3>
          <p className="text-white/70 font-light leading-relaxed text-sm md:text-base max-w-xl">
            Food is a destination drawer, not an afterthought. Dubai Mall features the most extensive concentration of dining concepts, generating massive night-life and day-long foot traffic.
          </p>
        </div>

        {/* Categories Navigation */}
        <div className="flex flex-wrap gap-4 mb-12 border-b border-luxury-gray/60 pb-6">
          {(['all', 'fine', 'casual', 'cafe'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 text-xs font-semibold uppercase tracking-widest transition-all duration-300 border focus:outline-none ${
                activeCategory === cat
                  ? 'border-gold text-black bg-gold font-bold shadow-[0_0_15px_rgba(197,168,128,0.2)]'
                  : 'border-luxury-gray/60 text-white hover:border-gold/40 hover:text-gold'
              }`}
            >
              {cat === 'all' ? 'All Concepts' : cat === 'fine' ? 'Fine Dining' : cat === 'casual' ? 'Casual / Food Hall' : 'Luxury Cafés'}
            </button>
          ))}
        </div>

        {/* Culinary Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredConcepts.map((concept) => (
              <motion.div
                layout
                key={concept.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="glass-panel group relative h-[380px] overflow-hidden flex flex-col justify-end p-8 border border-luxury-gray/60 cursor-pointer"
              >
                {/* Background Image with Zoom */}
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10 z-10 transition-all duration-500 group-hover:bg-black/20" />
                  <img 
                    src={concept.image} 
                    alt={concept.name} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    onError={(e) => { e.currentTarget.src = '/placeholder.png'; }}
                  />
                </div>

                {/* Floating Category Icon */}
                <div className="absolute top-6 left-6 z-20 w-10 h-10 flex items-center justify-center bg-luxury-black/90 border border-gold/20 rounded-none">
                  {concept.icon}
                </div>

                {/* Content */}
                <div className="relative z-20 mt-auto">
                  <h4 className="text-2xl font-display font-semibold tracking-wide text-white mb-3 group-hover:text-gold-bright transition-colors">
                    {concept.name}
                  </h4>
                  <p className="text-white/70 font-light text-xs sm:text-sm leading-relaxed mb-6 max-w-lg">
                    {concept.description}
                  </p>
                  
                  {/* Stats Tag */}
                  <div className="border-t border-white/10 pt-4 flex items-center text-[10px] text-gold tracking-widest uppercase font-semibold">
                    <Sparkles className="w-3.5 h-3.5 mr-2 text-gold animate-pulse-slow" />
                    <span>{concept.stats}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
