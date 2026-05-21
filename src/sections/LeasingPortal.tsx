import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, CheckCircle, Send, Sparkles } from 'lucide-react';

export const LeasingPortal: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    interest: 'retail',
    concept: '',
    budget: '$50k - $150k'
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!formData.name) tempErrors.name = 'Full name is required';
    if (!formData.company) tempErrors.company = 'Company name is required';
    if (!formData.email) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid';
    }
    if (!formData.phone) tempErrors.phone = 'Phone number is required';
    if (!formData.concept) tempErrors.concept = 'Tell us about your brand/concept';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 1500);
    }
  };

  return (
    <section 
      id="leasing" 
      className="relative py-24 md:py-32 bg-luxury-dark border-t border-luxury-gray/40 flex items-center min-h-screen overflow-hidden"
    >
      <div className="absolute left-1/4 top-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-gold/10 to-transparent blur-[160px] pointer-events-none animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left: Contact Info & Strategy */}
          <div className="w-full lg:w-5/12 space-y-12">
            <div>
              <span className="section-subtitle">07 // Partner Portal</span>
              <h3 className="text-3xl sm:text-5xl font-display font-bold tracking-wider text-white mb-6 uppercase leading-tight">
                Become Part Of <br />
                <span className="text-gold-bright italic font-serif font-normal">The World's Most</span> <br />
                <span className="text-gold font-normal">Visited Destination</span>
              </h3>
              <p className="text-white/70 font-light leading-relaxed text-sm md:text-base">
                Join an elite tier of global brands. Whether you are launching a flagship duplex showroom, a seasonal pop-up, sponsoring an aquarium activation, or booking our main halls for an event, we will co-create a tailored commercial strategy.
              </p>
            </div>

            {/* Quick Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 flex items-center justify-center bg-luxury-black border border-gold/10 text-gold">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-luxury-muted block">Direct Inquiry</span>
                  <a href="mailto:leasing@emaar.ae" className="text-sm font-semibold text-white hover:text-gold transition-colors">
                    leasing@emaar.ae
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 flex items-center justify-center bg-luxury-black border border-gold/10 text-gold">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-luxury-muted block">Direct Hotline</span>
                  <a href="tel:+97143627500" className="text-sm font-semibold text-white hover:text-gold transition-colors">
                    +971 4 362 7500
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 flex items-center justify-center bg-luxury-black border border-gold/10 text-gold">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-luxury-muted block">Management Office</span>
                  <span className="text-sm font-semibold text-white">
                    Emaar Square, Downtown Dubai, UAE
                  </span>
                </div>
              </div>
            </div>
            
            <div className="text-[9px] text-luxury-muted tracking-widest uppercase">
              © 2026 EMAAR PROPERTIES PJSC. ALL RIGHTS RESERVED.
            </div>
          </div>

          {/* Right: Interactive Inquiry Form */}
          <div className="w-full lg:w-7/12 relative">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  onSubmit={handleSubmit}
                  className="glass-panel p-8 sm:p-10 border border-luxury-gray/60 space-y-6"
                  noValidate
                >
                  <h4 className="text-lg sm:text-xl font-display font-semibold text-white tracking-wider pb-4 border-b border-luxury-gray/40">
                    Commercial Inquiry Form
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="text-[9px] uppercase tracking-widest text-luxury-muted block">Full Name</label>
                      <input 
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full bg-luxury-dark border ${errors.name ? 'border-red-500' : 'border-luxury-gray/80'} focus:border-gold px-4 py-3 text-sm text-white focus:outline-none rounded-none`}
                        placeholder="John Doe"
                      />
                      {errors.name && <span className="text-[10px] text-red-500">{errors.name}</span>}
                    </div>

                    {/* Company */}
                    <div className="space-y-2">
                      <label className="text-[9px] uppercase tracking-widest text-luxury-muted block">Company / Brand Name</label>
                      <input 
                        type="text" 
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className={`w-full bg-luxury-dark border ${errors.company ? 'border-red-500' : 'border-luxury-gray/80'} focus:border-gold px-4 py-3 text-sm text-white focus:outline-none rounded-none`}
                        placeholder="Lux Brands Inc."
                      />
                      {errors.company && <span className="text-[10px] text-red-500">{errors.company}</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-[9px] uppercase tracking-widest text-luxury-muted block">Corporate Email</label>
                      <input 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full bg-luxury-dark border ${errors.email ? 'border-red-500' : 'border-luxury-gray/80'} focus:border-gold px-4 py-3 text-sm text-white focus:outline-none rounded-none`}
                        placeholder="partner@company.com"
                      />
                      {errors.email && <span className="text-[10px] text-red-500">{errors.email}</span>}
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <label className="text-[9px] uppercase tracking-widest text-luxury-muted block">Phone Number</label>
                      <input 
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full bg-luxury-dark border ${errors.phone ? 'border-red-500' : 'border-luxury-gray/80'} focus:border-gold px-4 py-3 text-sm text-white focus:outline-none rounded-none`}
                        placeholder="+971 50 123 4567"
                      />
                      {errors.phone && <span className="text-[10px] text-red-500">{errors.phone}</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Interest type */}
                    <div className="space-y-2">
                      <label className="text-[9px] uppercase tracking-widest text-luxury-muted block">Area of Interest</label>
                      <select 
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full bg-luxury-dark border border-luxury-gray/80 focus:border-gold px-4 py-3 text-sm text-white focus:outline-none rounded-none"
                      >
                        <option value="retail">Retail Lease (Flagship/Luxury)</option>
                        <option value="popup">Pop-up Shop / Activation</option>
                        <option value="sponsorship">DOOH Screen / Media Sponsorship</option>
                        <option value="venue">Event Space Booking</option>
                      </select>
                    </div>

                    {/* Budget range */}
                    <div className="space-y-2">
                      <label className="text-[9px] uppercase tracking-widest text-luxury-muted block">Projected Campaign Budget</label>
                      <select 
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full bg-luxury-dark border border-luxury-gray/80 focus:border-gold px-4 py-3 text-sm text-white focus:outline-none rounded-none"
                      >
                        <option value="$10k - $45k">$10,000 - $45,000</option>
                        <option value="$50k - $150k">$50,000 - $150,000</option>
                        <option value="$150k+">$150,000+ (Signature Tiers)</option>
                      </select>
                    </div>
                  </div>

                  {/* Concept description */}
                  <div className="space-y-2">
                    <label className="text-[9px] uppercase tracking-widest text-luxury-muted block">Concept Pitch / Details</label>
                    <textarea 
                      value={formData.concept}
                      onChange={(e) => setFormData({ ...formData, concept: e.target.value })}
                      rows={4}
                      className={`w-full bg-luxury-dark border ${errors.concept ? 'border-red-500' : 'border-luxury-gray/80'} focus:border-gold px-4 py-3 text-sm text-white focus:outline-none rounded-none`}
                      placeholder="Outline your retail design, preferred size, or campaign activations..."
                    />
                    {errors.concept && <span className="text-[10px] text-red-500">{errors.concept}</span>}
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full btn-gold flex items-center justify-center space-x-2"
                  >
                    <span>{isSubmitting ? 'Transmitting Concept...' : 'Submit Inquiry'}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="glass-panel p-8 sm:p-12 border border-gold text-center space-y-6"
                >
                  <div className="w-16 h-16 bg-gold/10 border border-gold rounded-full flex items-center justify-center mx-auto text-gold animate-bounce">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-2">
                    <span className="text-xs uppercase tracking-[0.3em] font-semibold text-gold-bright flex items-center justify-center">
                      <Sparkles className="w-4 h-4 mr-1 text-gold" />
                      Concept Transmitted
                    </span>
                    <h4 className="text-2xl font-display font-bold text-white tracking-wide">
                      Thank You For Your Interest
                    </h4>
                  </div>

                  <p className="text-white/70 font-light text-xs sm:text-sm leading-relaxed max-w-md mx-auto">
                    Your commercial inquiry has been registered. A Senior Leasing Director will review your proposal and contact you within 24 hours to schedule a private video consultation.
                  </p>

                  <div className="h-[1px] bg-luxury-gray/40 w-full my-6" />

                  <button 
                    onClick={() => { setIsSubmitted(false); setFormData({ ...formData, name: '', company: '', email: '', phone: '', concept: '' }); }}
                    className="btn-outline-gold text-[10px]"
                  >
                    Submit another inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};
