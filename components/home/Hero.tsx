"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, ShieldCheck } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-brand-dark overflow-hidden">
      {/* Aesthetic Background Layers */}
      <div className="absolute inset-0 z-0">
        {/* Ambient Glows */}
        <div className="absolute top-[-10%] right-[-5%] w-[70vw] h-[70vw] bg-brand-primary/10 rounded-full blur-[160px] opacity-60" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-brand-secondary/5 rounded-full blur-[140px] opacity-40" />
        
        {/* Subtle Noise Texture */}
        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
        
        {/* Refined Grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="relative z-10 max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 w-full flex flex-col lg:flex-row items-center gap-16 pt-20">
        
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
              <ShieldCheck size={14} className="text-brand-secondary" />
              <span className="text-[10px] font-bold text-white/60 uppercase tracking-[0.2em]">
                Jodhpur&apos;s Elite Coaching · Since 2019
              </span>
            </div>
            
            <h1 
              className="text-6xl md:text-7xl lg:text-8xl font-medium text-white leading-[0.95] mb-8 tracking-tighter"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              The Art of <br />
              <span className="text-brand-secondary italic font-light">Academic</span> Mastery.
            </h1>

            <p className="text-white/40 text-lg md:text-xl leading-relaxed mb-12 max-w-xl mx-auto lg:mx-0 font-light">
              Nirvaan provides a focused sanctuary for JEE and NEET aspirants. 
              We blend traditional mentorship with modern precision to cultivate 
              the next generation of rankers.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 items-center lg:items-center justify-center lg:justify-start">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={buildWhatsAppLink()}
                target="_blank"
                className="bg-brand-secondary text-brand-dark font-black px-10 py-5 rounded-sm uppercase tracking-[0.2em] text-xs transition-all shadow-[0_20px_40px_-10px_rgba(245,166,35,0.2)]"
              >
                Inquire Now
              </motion.a>
              
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-brand-secondary group-hover:border-brand-secondary transition-all">
                  <ArrowRight size={18} className="text-white group-hover:text-brand-dark transition-all" />
                </div>
                <span className="text-white/60 text-xs font-bold uppercase tracking-widest group-hover:text-white transition-all">Explore Programs</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Visual Element: Glassmorphic Composition */}
        <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-square lg:aspect-video bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/10 rounded-sm overflow-hidden shadow-2xl"
          >
            {/* Inner Content */}
            <div className="absolute inset-0 p-12 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="w-12 h-1 bg-brand-secondary" />
                <h3 className="text-3xl font-medium text-white max-w-xs leading-snug" style={{ fontFamily: "var(--font-playfair)" }}>
                  Personal attention is not a feature. <br />
                  <span className="italic font-light opacity-60">It&apos;s our foundation.</span>
                </h3>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={14} className="text-brand-secondary fill-brand-secondary" />
                  ))}
                </div>
                <div className="text-[10px] font-bold text-white/20 uppercase tracking-[0.3em]">
                  Verified NEET #1
                </div>
              </div>
            </div>

            {/* Decorative Light Streak */}
            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-tr from-transparent via-white/5 to-transparent rotate-45 pointer-events-none" />
          </motion.div>

          {/* Floating Stat Widget */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-white p-6 shadow-2xl hidden md:block"
          >
            <div className="text-brand-dark font-black text-4xl">94<span className="text-brand-secondary italic">%</span></div>
            <div className="text-brand-dark/40 text-[10px] font-black uppercase tracking-widest">Selection Rate</div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}



