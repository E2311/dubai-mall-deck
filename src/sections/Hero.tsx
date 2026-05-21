import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Calendar, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const opacityText = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const handleScrollToNext = () => {
    const nextSection = document.getElementById('why-dubai-mall');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={containerRef}
      id="hero" 
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Video with Parallax */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute inset-0 z-0"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60 scale-[1.05]"
        >
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-aerial-panorama-of-a-city-at-night-4235-large.mp4" 
            type="video/mp4" 
          />
          {/* Fallback image if video fails to load */}
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1582948636199-af4de21d1b45?q=80&w=1920')] bg-cover bg-center" />
        </video>
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/80" />
      </motion.div>

      {/* Hero Content with Parallax */}
      <motion.div 
        style={{ y: yText, opacity: opacityText }}
        className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center"
      >
        {/* Animated Subtitle */}
        <motion.span 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="text-gold uppercase tracking-[0.45em] text-[10px] sm:text-xs font-semibold mb-6 block"
        >
          Emaar Properties • Global Landmark
        </motion.span>

        {/* Animated Main Title */}
        <h2 className="text-4xl sm:text-6xl md:text-8xl font-display font-bold tracking-[0.05em] text-white leading-[1.1] mb-8">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="block text-white"
          >
            MORE THAN A MALL.
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="block text-gold-bright mt-2 font-serif italic font-normal tracking-[0.02em] font-serif"
          >
            A Global Destination.
          </motion.span>
        </h2>

        {/* Paragraph Reveal */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.3 }}
          className="text-white/80 max-w-2xl text-xs sm:text-sm md:text-base font-light tracking-wide leading-relaxed mb-12"
        >
          Welcoming over 130 million visitors annually. The epicentre of luxury retail, world-class dining, and global entertainment, situated in the heart of Downtown Dubai.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.7 }}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto justify-center"
        >
          <a href="#leasing" className="btn-gold flex items-center justify-center space-x-2">
            <Calendar className="w-3.5 h-3.5" />
            <span>Lease Space</span>
          </a>
          <a href="#sponsorship" className="btn-outline-gold flex items-center justify-center space-x-2">
            <span>Explore Deck</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </motion.div>

      {/* Down Scroll Arrow */}
      <motion.button 
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut', delay: 2.2 }}
        onClick={handleScrollToNext}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 hover:text-gold transition-colors focus:outline-none z-10 flex flex-col items-center space-y-2 cursor-pointer"
      >
        <span className="text-[8px] tracking-[0.3em] uppercase">Scroll to Pitch</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </motion.button>
    </section>
  );
};
