"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { buildWhatsAppLink, PHONE_NUMBER } from "@/lib/whatsapp";

export function AdmissionCTA() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-brand-dark overflow-hidden relative border-t border-white/5">
      {/* Subtle Glow Connection */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-brand-secondary/5 rounded-full blur-[140px] opacity-40 pointer-events-none" />
      
      <div className="max-w-[1920px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-center lg:text-left"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-brand-secondary/10 border border-brand-secondary/20 mb-8">
              <span className="text-brand-secondary text-[10px] font-black uppercase tracking-[0.3em]">
                Admission Cycle 2026–27
              </span>
            </div>
            
            <h2
              className="text-5xl md:text-6xl font-medium text-white mb-8 leading-[1.1] tracking-tighter"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Secure your <span className="italic font-light text-brand-secondary/80">future</span> <br />with personalized mentorship.
            </h2>
            <p className="text-white/30 text-lg font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
              Our small-batch model is designed for depth. Seats are allocated through 
              our entrance assessment to ensure high-performance peer environments.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-8 items-center shrink-0"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={buildWhatsAppLink({ source: "cta-strip" })}
              target="_blank"
              className="flex items-center justify-center gap-4 bg-brand-secondary text-brand-dark font-black px-12 py-6 rounded-sm uppercase tracking-[0.2em] text-xs transition-all shadow-[0_20px_40px_-10px_rgba(245,166,35,0.2)]"
            >
              <MessageCircle size={16} />
              Book Counselling
            </motion.a>
            
            <div className="hidden sm:block w-[1px] h-12 bg-white/10" />

            <a
              href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white/[0.03] transition-all">
                <Phone size={16} className="text-white/40 group-hover:text-white transition-colors" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-widest text-white/20">Direct Line</span>
                <span className="text-sm font-bold text-white group-hover:text-brand-secondary transition-colors">{PHONE_NUMBER}</span>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


