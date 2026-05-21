import React from 'react';
import { motion } from 'framer-motion';
import { Users, LayoutGrid, ShoppingBag, TrendingUp, Sparkles } from 'lucide-react';

export const WhyDubaiMall: React.FC = () => {
  const stats = [
    {
      icon: <Users className="w-6 h-6 text-gold" />,
      value: '130M+',
      label: 'Annual Visitors',
      detail: 'Surpassing the annual foot traffic of Times Square, Disneyland, and the Eiffel Tower combined.',
      hoverData: '45% international tourists • 55% high-net-worth residents'
    },
    {
      icon: <LayoutGrid className="w-6 h-6 text-gold" />,
      value: '1.2M m²',
      label: 'Total Area',
      detail: 'Equivalent to 200 football pitches. A massive destination incorporating retail, leisure, and hotels.',
      hoverData: '350,000 m² gross leasable area • Connected directly to Burj Khalifa'
    },
    {
      icon: <ShoppingBag className="w-6 h-6 text-gold" />,
      value: '1,200+',
      label: 'Retail Outlets',
      detail: 'Home to the world\'s largest collection of premium fashion flagships, department stores, and concepts.',
      hoverData: '2 anchor department stores (Galeria Lafayette & Bloomingdale\'s)'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-gold" />,
      value: '98%',
      label: 'Average Occupancy',
      detail: 'Consistent premium occupancy and highly sought-after commercial retail zones across all levels.',
      hoverData: 'Average dwell time: 3.5 hours • Highest density sales worldwide'
    }
  ];

  return (
    <section 
      id="why-dubai-mall" 
      className="relative min-h-screen w-full py-24 md:py-32 bg-luxury-black flex items-center border-t border-luxury-gray/40"
    >
      {/* Ambient background blur */}
      <div className="absolute right-0 top-1/4 w-[400px] h-[400px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-[300px] h-[300px] rounded-full bg-white/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="section-subtitle">02 // The Commercial Scale</span>
          <h3 className="text-3xl sm:text-5xl font-display font-bold tracking-wider text-white mb-6 uppercase">
            The World's Most <span className="text-gold-bright italic font-serif font-normal">Visited</span> Destination
          </h3>
          <p className="text-white/70 font-light leading-relaxed text-sm md:text-base max-w-xl">
            More than just retail, Dubai Mall represents the ultimate brand platform. It connects your concept with a global audience of high-spending residents and international visitors daily.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{ y: -8, borderColor: 'rgba(197, 168, 128, 0.4)' }}
              className="glass-panel p-8 flex flex-col justify-between h-[320px] transition-all duration-300 relative group cursor-pointer overflow-hidden"
            >
              {/* Card Hover Overlay Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div>
                <div className="mb-6">{stat.icon}</div>
                <h4 className="text-4xl md:text-5xl font-display font-bold text-white mb-2 tracking-wide group-hover:text-gold transition-colors">
                  {stat.value}
                </h4>
                <p className="text-xs uppercase tracking-widest font-semibold text-gold-bright mb-4">
                  {stat.label}
                </p>
                <p className="text-white/60 font-light text-xs leading-relaxed">
                  {stat.detail}
                </p>
              </div>

              {/* Dynamic demographic/reach highlight on hover */}
              <div className="mt-6 border-t border-luxury-gray/40 pt-4 flex items-center text-[10px] text-gold-bright tracking-wider uppercase font-semibold translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <Sparkles className="w-3.5 h-3.5 mr-2 text-gold animate-pulse-slow" />
                <span>{stat.hoverData}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
