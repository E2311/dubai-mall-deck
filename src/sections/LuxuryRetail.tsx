import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';

export const LuxuryRetail: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const brands = [
    {
      name: 'Hermès',
      category: 'Haute Couture & Leather',
      image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800',
      video: '',
      description: 'Exclusive multi-level flagship store featuring custom architectural façades and bespoke private salon suites.',
      fact: 'Direct VIP lounge connection'
    },
    {
      name: 'Chanel',
      category: 'Fashion & Fine Jewelry',
      image: 'https://images.pexels.com/photos/2558605/pexels-photo-2558605.jpeg?auto=compress&cs=tinysrgb&w=800',
      video: '',
      description: 'Stunning double-height storefront displaying limited-edition collections and haute joaillerie.',
      fact: 'Top 3 performing global boutique'
    },
    {
      name: 'Rolex',
      category: 'Luxury Horology',
      image: 'https://images.pexels.com/photos/9978722/pexels-photo-9978722.jpeg?auto=compress&cs=tinysrgb&w=800',
      video: '',
      description: 'The world\'s largest Rolex boutique, spanning three floors and featuring a dedicated heritage museum.',
      fact: '950 m² flagship footprint'
    },
    {
      name: 'Cartier',
      category: 'High Jewelry & Watches',
      image: 'https://images.pexels.com/photos/248077/pexels-photo-248077.jpeg?auto=compress&cs=tinysrgb&w=800',
      video: '',
      description: 'An oasis of elegance crafted with local design motifs, displaying signature collections and rare diamonds.',
      fact: 'Bespoke VIP dining room inside'
    },
    {
      name: 'Gucci',
      category: 'Ready-to-Wear & Accessories',
      image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800',
      video: '',
      description: 'Innovative concept store utilizing digital integrations and interactive fitting rooms for the modern consumer.',
      fact: 'High-traffic duplex facade'
    }
  ];

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="luxury-retail" 
      className="relative py-24 md:py-32 bg-luxury-dark border-t border-luxury-gray/40 overflow-hidden"
    >
      <div className="absolute left-1/4 top-0 w-[500px] h-[500px] rounded-full bg-gold/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-3xl">
            <span className="section-subtitle">03 // The Luxury Precinct</span>
            <h3 className="text-3xl sm:text-5xl font-display font-bold tracking-wider text-white mb-6 uppercase">
              Fashion Avenue: <span className="text-gold-bright italic font-serif font-normal">Apex</span> of Luxury
            </h3>
            <p className="text-white/70 font-light leading-relaxed text-sm md:text-base max-w-xl">
              Housing over 150 global luxury flagships. A dedicated precinct featuring white marble walkways, bespoke VIP services, dedicated personal shoppers, and private lounges.
            </p>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex space-x-4 mt-8 md:mt-0">
            <button 
              onClick={scrollLeft}
              className="w-12 h-12 flex items-center justify-center border border-gold-dark/30 hover:border-gold text-gold hover:text-white transition-all focus:outline-none"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button 
              onClick={scrollRight}
              className="w-12 h-12 flex items-center justify-center border border-gold-dark/30 hover:border-gold text-gold hover:text-white transition-all focus:outline-none"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Gallery */}
        <div 
          ref={scrollRef}
          className="flex space-x-8 overflow-x-auto pb-8 pt-4 scrollbar-none no-scrollbar snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none' }}
        >
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="min-w-[300px] sm:min-w-[450px] snap-start bg-luxury-black/40 border border-luxury-gray/60 p-6 flex flex-col justify-between group select-none relative overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_0_35px_rgba(197,168,128,0.15)]"
            >
              {/* Background Accent Lines */}
              <div className="absolute top-0 right-0 w-20 h-[1px] bg-gradient-to-l from-gold/30 to-transparent" />
              <div className="absolute bottom-0 left-0 w-20 h-[1px] bg-gradient-to-r from-gold/30 to-transparent" />

              <div>
                {/* Brand Image Container */}
                <div className="relative h-64 w-full overflow-hidden mb-6 bg-luxury-gray">
                  <div className="absolute inset-0 bg-black/25 z-10 group-hover:bg-transparent transition-all duration-500" />
                  {brand.video ? (
                    <video
                      src={brand.video}
                      autoPlay
                      muted
                      loop
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      onError={(e) => { const video = e.currentTarget; video.style.display = 'none'; const img = video.parentElement?.querySelector('img'); if (img) img.style.display = 'block'; }}
                    />
                  ) : null}
                  <img 
                    src={brand.image} 
                    alt={brand.name} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ display: brand.video ? 'none' : 'block' }}
                    onError={(e) => { e.currentTarget.src = '/placeholder.png'; }}
                  />
                  {brand.category && (
                    <span className="absolute bottom-4 left-4 z-20 bg-luxury-black/85 text-gold text-[9px] tracking-widest uppercase font-semibold px-3 py-1 border border-gold/10">
                      {brand.category}
                    </span>
                  )}
                </div>

                {/* Brand Info */}
                <div className="flex justify-between items-baseline mb-4">
                  <h4 className="text-2xl font-display font-semibold tracking-wide text-white group-hover:text-gold transition-colors">
                    {brand.name}
                  </h4>
                  <span className="text-[9px] font-mono tracking-widest text-gold">
                    FLAGSHIP
                  </span>
                </div>
                
                <p className="text-white/60 font-light text-xs sm:text-sm leading-relaxed mb-6">
                  {brand.description}
                </p>
              </div>

              {/* Fact Highlight */}
              <div className="border-t border-luxury-gray/40 pt-4 flex items-center text-[10px] text-gold-bright tracking-widest uppercase font-semibold">
                <Sparkles className="w-3.5 h-3.5 mr-2 text-gold animate-pulse-slow" />
                <span>{brand.fact}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
