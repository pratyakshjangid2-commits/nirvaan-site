"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, ArrowRight, ShieldCheck } from "lucide-react";
import { buildWhatsAppLink, PHONE_NUMBER } from "@/lib/whatsapp";

export function AdmissionCTA() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-brand-navy overflow-hidden relative border-t border-white/5">
      {/* Institutional Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="bg-brand-navy border border-white/10 p-12 md:p-20 shadow-2xl relative overflow-hidden">
          {/* Accent Skew */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-secondary skew-x-[-12deg] translate-x-1/2 opacity-10 hidden lg:block" />
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-white/5 border border-white/10 mb-8">
                <ShieldCheck size={14} className="text-brand-secondary" />
                <span className="text-[10px] font-black text-white/60 uppercase tracking-[0.3em]">
                  Admission Session 2026–27
                </span>
              </div>
              
              <h2
                className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Secure your place in the <br />
                <span className="italic text-brand-secondary">next</span> batch of achievers.
              </h2>
              <p className="text-white/40 text-lg font-light leading-relaxed mb-8">
                Admissions are now open for JEE and NEET year-long programs. 
                We maintain strictly limited batch sizes to ensure every student 
                gets the attention they need to succeed.
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 opacity-40 grayscale">
                 <div className="flex items-center gap-2 text-[10px] font-black uppercase text-white tracking-widest">
                   Expert Faculty
                 </div>
                 <div className="flex items-center gap-2 text-[10px] font-black uppercase text-white tracking-widest">
                   Small Batches
                 </div>
                 <div className="flex items-center gap-2 text-[10px] font-black uppercase text-white tracking-widest">
                   Hostel Facility
                 </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6 shrink-0 w-full sm:w-auto"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={buildWhatsAppLink({ source: "cta-strip" })}
                target="_blank"
                className="flex items-center justify-center gap-4 bg-brand-secondary text-brand-navy font-black px-12 py-6 rounded-sm uppercase tracking-[0.2em] text-xs transition-all shadow-premium"
              >
                <MessageCircle size={18} />
                Book Counselling
              </motion.a>
              
              <a
                href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
                className="flex items-center justify-center gap-4 border border-white/10 text-white font-black px-12 py-6 rounded-sm uppercase tracking-[0.2em] text-xs transition-all hover:bg-white/5"
              >
                <Phone size={18} />
                Call Admissions
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}



