"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Star, ShieldCheck, Users, Award, BookOpen } from "lucide-react";
import { buildWhatsAppLink, PHONE_NUMBER } from "@/lib/whatsapp";

const stats = [
  { icon: Users, value: "5000+", label: "Students Mentored", color: "text-blue-400" },
  { icon: Award, value: "250+", label: "Top Selections", color: "text-brand-secondary" },
  { icon: BookOpen, value: "10+", label: "Years Experience", color: "text-green-400" },
  { icon: Star, value: "4.9★", label: "Parent Rating", color: "text-yellow-400" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-brand-navy overflow-hidden pt-32 lg:pt-20 w-full">
      {/* Institutional Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-gradient-to-l from-brand-secondary/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 w-full overflow-hidden lg:overflow-visible">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-12 lg:mt-0"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-white/5 border border-white/10 mb-8 mt-4 lg:mt-0">
                <ShieldCheck size={16} className="text-brand-secondary" />
                <span className="text-xs font-bold text-white/80 uppercase tracking-[0.2em]">
                  Ranked #1 Coaching in Jodhpur
                </span>
              </div>
              
              <h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Trusted <span className="text-brand-secondary">NEET & JEE</span> <br />
                Coaching in Jodhpur.
              </h1>

              <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl font-light">
                Empowering students to achieve their medical and engineering dreams through 
                proven methodology, expert faculty, and personalized mentorship. 
                Your success story begins at Nirvaan.
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 border-y border-white/10 py-8">
                {stats.map((stat, i) => (
                  <div key={i} className="flex flex-col items-start gap-1">
                    <div className="flex items-center gap-2">
                      <stat.icon size={18} className={stat.color} />
                      <span className="text-2xl font-bold text-white">{stat.value}</span>
                    </div>
                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest leading-none">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#contact"
                  className="w-full sm:w-auto bg-brand-secondary text-brand-navy font-bold px-10 py-5 rounded-sm uppercase tracking-widest text-xs transition-all shadow-premium text-center"
                >
                  Book Free Demo Class
                </motion.a>
                
                <a
                  href={buildWhatsAppLink({ source: "hero" })}
                  target="_blank"
                  className="w-full sm:w-auto flex items-center justify-center gap-3 text-white font-bold px-10 py-5 rounded-sm border border-white/20 hover:bg-white/5 transition-all text-xs uppercase tracking-widest"
                >
                  <MessageCircle size={18} className="text-green-400" />
                  Talk on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right: Visual Trust */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative rounded-sm overflow-hidden border border-white/10 shadow-2xl"
            >
              {/* This would be a high-quality classroom or topper photo */}
              <div className="aspect-[4/5] bg-brand-dark/50 relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" 
                  alt="Nirvaan Learning Environment" 
                  className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                
                {/* Floating Achievement Card */}
                <div className="absolute bottom-10 left-10 right-10 z-20 bg-white p-6 shadow-2xl">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-brand-secondary/10 flex items-center justify-center">
                      <Award size={24} className="text-brand-secondary" />
                    </div>
                    <div>
                      <h4 className="text-brand-navy font-black text-sm uppercase tracking-widest">99.8 Percentile</h4>
                      <p className="text-neutral-400 text-[10px] font-bold uppercase tracking-widest leading-none">JEE Mains 2024 Result</p>
                    </div>
                  </div>
                  <p className="text-neutral-600 text-xs italic">
                    "The personalized attention at Nirvaan made all the difference in my preparation."
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative Element */}
            <div className="absolute -top-8 -right-8 w-32 h-32 border-t-2 border-r-2 border-brand-secondary/30 pointer-events-none" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 border-b-2 border-l-2 border-brand-secondary/30 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}



