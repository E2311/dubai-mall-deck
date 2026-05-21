import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Calendar, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

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
      {/* ── YouTube Video Background ── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <iframe
          src="https://www.youtube-nocookie.com/embed/VMfm5WyEc4Y?autoplay=1&mute=1&loop=1&playlist=VMfm5WyEc4Y&controls=0&showinfo=0&rel=0&disablekb=1&playsinline=1&modestbranding=1"
          title="The Dubai Mall"
          allow="autoplay; encrypted-media; picture-in-picture"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '177.78vh',
            height: '56.25vw',
            minWidth: '100%',
            minHeight: '100%',
            transform: 'translate(-50%, -50%)',
            border: 'none',
            opacity: 0.65,
          }}
        />
      </div>

      {/* ── Dark Gradient Overlay ── */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black via-black/30 to-black/75 pointer-events-none" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/40 via-transparent to-black/40 pointer-events-none" />

      {/* ── Hero Content ── */}
      <motion.div
        style={{ y: yText, opacity: opacityText }}
        className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center"
      >
        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="text-gold uppercase tracking-[0.45em] text-[10px] sm:text-xs font-semibold mb-6 block"
        >
          Emaar Properties • Global Landmark
        </motion.span>

        {/* Main Title */}
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
            className="block text-gold-bright mt-2 font-serif italic font-normal tracking-[0.02em]"
          >
            A Global Destination.
          </motion.span>
        </h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.3 }}
          className="text-white/80 max-w-2xl text-xs sm:text-sm md:text-base font-light tracking-wide leading-relaxed mb-12"
        >
          Welcoming over 130 million visitors annually. The epicentre of luxury retail,
          world-class dining, and global entertainment, situated in the heart of Downtown Dubai.
        </motion.p>

        {/* Stat Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.5 }}
          className="flex gap-0 mb-12 border border-gold/20"
        >
          {[
            { n: '130M+', l: 'Annual Visitors' },
            { n: '1,200+', l: 'Retail Stores' },
            { n: '502M', l: 'Sq Ft GLA' },
            { n: '#1', l: 'Mall in the World' },
          ].map((s, i) => (
            <div
              key={s.l}
              className="px-6 py-4 text-center"
              style={{ borderRight: i < 3 ? '1px solid rgba(201,164,65,0.2)' : 'none' }}
            >
              <div className="text-gold font-serif text-xl sm:text-2xl font-semibold leading-none mb-1">
                {s.n}
              </div>
              <div className="text-[8px] tracking-[0.25em] text-white/40 uppercase">
                {s.l}
              </div>
            </div>
          ))}
        </motion.div>

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

      {/* ── Scroll Indicator ── */}
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
