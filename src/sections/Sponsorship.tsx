import React, { useState } from 'react';
import { Sparkles, BarChart2, ShieldCheck } from 'lucide-react';

export const Sponsorship: React.FC = () => {
  const [budget, setBudget] = useState(50000);

  const calculateROI = (budgetVal: number) => {
    // Basic calculation formulas for demonstration
    const impressions = Math.floor(budgetVal * 350);
    const reach = Math.floor(budgetVal * 0.45);
    let channels = ['Digital Kiosks', 'Social Media Integration'];
    let tierName = 'Digital Network Partner';

    if (budgetVal >= 150000) {
      channels = ['Grand Atrium Takeover', 'Mega DOOH Curved Screens', 'Mobile App Push Notifications', 'VIP Lounge Branding'];
      tierName = 'Signature Destination Partner';
    } else if (budgetVal >= 50000) {
      channels = ['Fashion Avenue Screen Loop', 'Interactive Wayfinding Kiosks', 'WiFi Portal Landing Page Banner'];
      tierName = 'Platinum Event Partner';
    }

    return {
      impressions: impressions.toLocaleString(),
      reach: reach.toLocaleString(),
      channels,
      tierName
    };
  };

  const roi = calculateROI(budget);

  const packages = [
    {
      name: 'Digital Network Partner',
      price: '$10k - $45k',
      audience: 'General mall visitors & shoppers',
      screens: '100+ standard DOOH screens',
      features: ['10-second spot in general rotation', 'WiFi landing page banner ads', 'Wayfinding directory sidebar branding']
    },
    {
      name: 'Platinum Event Partner',
      price: '$50k - $140k',
      audience: 'High-intent fashion & lifestyle buyers',
      screens: 'Fashion Avenue LED screens + Kiosks',
      features: ['20-second spot in premium luxury loops', 'Exclusive WiFi Portal sponsorships', 'Atrium interactive kiosk takeovers', '1 seasonal pop-up activation rights']
    },
    {
      name: 'Signature Destination Partner',
      price: '$150k+',
      audience: 'VIP & Ultra-High-Net-Worth individuals',
      screens: 'Mega LED screens + Full Atrium takeover',
      features: ['Dominant spot on the Grand Curved LED screen', 'VIP Valet & Lounge naming rights', 'App push notification campaigns', 'Major event booking integration sponsorship']
    }
  ];

  return (
    <section 
      id="sponsorship" 
      className="relative py-24 md:py-32 bg-luxury-black border-t border-luxury-gray/40"
    >
      <div className="absolute right-0 top-1/4 w-[350px] h-[350px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="section-subtitle">06 // Sponsorship & Media</span>
          <h3 className="text-3xl sm:text-5xl font-display font-bold tracking-wider text-white mb-6 uppercase">
            A Global Media Platform: <span className="text-gold-bright italic font-serif font-normal">Sponsorships</span>
          </h3>
          <p className="text-white/70 font-light leading-relaxed text-sm md:text-base max-w-xl">
            Leverage one of the most powerful digital out-of-home (DOOH) advertising networks in the world. Position your brand in front of millions of active buyers with high-impact activations.
          </p>
        </div>

        {/* Dynamic ROI & Impression Calculator (Phase 2 Component) */}
        <div className="glass-panel p-8 sm:p-12 border border-gold/10 mb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-[1px] bg-gradient-to-l from-gold/40 to-transparent" />
          
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left: Input Sliders */}
            <div className="w-full lg:w-1/2 space-y-8">
              <div>
                <span className="text-xs uppercase tracking-widest text-gold font-bold mb-2 block">
                  Interactive Budget Planner
                </span>
                <h4 className="text-2xl font-display font-semibold text-white tracking-wide">
                  Project Your Campaign Reach
                </h4>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-white/70 uppercase tracking-wider">Campaign Budget (USD)</span>
                  <span className="text-2xl font-mono text-gold-bright font-bold">
                    ${budget.toLocaleString()}
                  </span>
                </div>
                <input 
                  type="range" 
                  min="10000" 
                  max="250000" 
                  step="5000" 
                  value={budget} 
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="w-full h-1 bg-luxury-lightGray rounded-none appearance-none cursor-pointer accent-gold-bright"
                  style={{
                    background: `linear-gradient(to right, #c5a880 0%, #c5a880 ${(budget - 10000) / 240000 * 100}%, #2c2c2c ${(budget - 10000) / 240000 * 100}%, #2c2c2c 100%)`
                  }}
                />
                <div className="flex justify-between text-[10px] text-luxury-muted font-mono">
                  <span>$10,000</span>
                  <span>$130,000</span>
                  <span>$250,000+</span>
                </div>
              </div>

              {/* Calculator Disclaimers */}
              <div className="flex items-start space-x-3 bg-luxury-dark/60 p-4 border border-luxury-gray/40">
                <ShieldCheck className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <p className="text-[10px] sm:text-xs text-white/60 font-light leading-relaxed">
                  Calculations are based on average monthly traffic cycles, screen frequency, and historical engagement data across the Emaar DOOH network.
                </p>
              </div>
            </div>

            {/* Right: Dynamic Outputs */}
            <div className="w-full lg:w-1/2 bg-luxury-dark/80 border border-luxury-gray/80 p-8 flex flex-col justify-between min-h-[300px]">
              <div className="space-y-6">
                <div className="flex justify-between items-start pb-4 border-b border-luxury-gray/40">
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-luxury-muted">RECOMMENDED TIER</span>
                    <h5 className="text-lg font-display font-semibold text-gold-bright mt-1">
                      {roi.tierName}
                    </h5>
                  </div>
                  <BarChart2 className="w-5 h-5 text-gold animate-pulse-slow" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-luxury-muted block">Est. Impressions</span>
                    <span className="text-2xl font-mono text-white font-bold tracking-wide">{roi.impressions}</span>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-luxury-muted block">Projected Reach</span>
                    <span className="text-2xl font-mono text-white font-bold tracking-wide">{roi.reach}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-[9px] uppercase tracking-widest text-luxury-muted block">Included Channels</span>
                  <div className="flex flex-wrap gap-2">
                    {roi.channels.map((chan, idx) => (
                      <span key={idx} className="text-[9px] tracking-widest uppercase font-semibold bg-luxury-gray border border-gold/10 text-white px-2.5 py-1">
                        {chan}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-luxury-gray/40 flex justify-between items-center">
                <span className="text-[9px] text-gold uppercase tracking-widest font-semibold flex items-center">
                  <Sparkles className="w-3.5 h-3.5 mr-1" />
                  Custom proposals available
                </span>
                <a href="#leasing" className="btn-gold !px-6 !py-2 text-[10px]">
                  Lock in rates
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Tiers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <div 
              key={idx} 
              className={`glass-panel p-8 border flex flex-col justify-between min-h-[440px] relative ${
                pkg.name === roi.tierName ? 'border-gold shadow-[0_0_20px_rgba(197,168,128,0.15)] bg-luxury-black' : 'border-luxury-gray/60'
              }`}
            >
              {pkg.name === roi.tierName && (
                <span className="absolute -top-3.5 left-6 bg-gold text-black text-[9px] tracking-widest font-bold uppercase px-3 py-1">
                  RECOMMENDED FOR BUDGET
                </span>
              )}

              <div>
                <h4 className="text-lg font-display font-semibold text-white tracking-wider mb-2">
                  {pkg.name}
                </h4>
                <div className="flex items-baseline space-x-2 mb-6">
                  <span className="text-3xl font-mono text-gold-bright font-bold">{pkg.price}</span>
                  <span className="text-[9px] text-luxury-muted uppercase tracking-widest">/ CAMPAIGN</span>
                </div>

                <div className="space-y-4 mb-8">
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-luxury-muted block">Target Audience</span>
                    <span className="text-xs text-white/80 font-medium">{pkg.audience}</span>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-luxury-muted block">Key Media Channels</span>
                    <span className="text-xs text-white/80 font-medium">{pkg.screens}</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="border-t border-luxury-gray/40 pt-6 space-y-3">
                  <span className="text-[9px] uppercase tracking-widest text-gold block font-semibold">Included Deliverables</span>
                  <ul className="space-y-2.5">
                    {pkg.features.map((feat, fidx) => (
                      <li key={fidx} className="flex items-start text-xs text-white/60 font-light leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-dark mt-1.5 mr-2.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-luxury-gray/40">
                <a 
                  href="#leasing" 
                  className={`w-full block text-center py-3 text-[10px] tracking-widest uppercase font-semibold border ${
                    pkg.name === roi.tierName 
                      ? 'bg-gold border-gold text-black hover:bg-gold-bright' 
                      : 'border-gold/30 text-gold hover:border-gold hover:text-white'
                  } transition-all duration-300`}
                >
                  Request Media Kit
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
