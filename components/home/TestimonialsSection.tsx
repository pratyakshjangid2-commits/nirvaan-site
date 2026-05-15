"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Aman S.",
    role: "NEET Aspirant",
    text: "Experienced and supportive teaching staff. The well-maintained facilities and comprehensive study materials have made my NEET preparation journey incredibly smooth.",
    rating: 5,
    initial: "A",
  },
  {
    name: "Ravi K.",
    role: "JEE Aspirant",
    text: "My amazing experience at Nirvaan Institute! The interactive classroom approach and individual attention from faculty make a huge difference. Highly recommend.",
    rating: 5,
    initial: "R",
  },
  {
    name: "Neha M.",
    role: "NEET Aspirant",
    text: "The regular doubt-clearing sessions and mock tests are very helpful. It ensures we are always assessing our readiness for exams without feeling overwhelmed.",
    rating: 5,
    initial: "N",
  },
  {
    name: "Sunil P.",
    role: "JEE Aspirant",
    text: "Great study environment with modern classrooms. The faculty provides class notes that are extremely detailed. The best coaching center in Jodhpur.",
    rating: 5,
    initial: "S",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-brand-dark overflow-hidden relative border-y border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-0 w-[40vw] h-[40vw] bg-brand-secondary/5 rounded-full blur-[120px]" />

      <div className="max-w-[1920px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="text-brand-secondary text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">
            Student Voices
          </span>
          <h2
            className="text-5xl md:text-6xl font-medium text-white mb-6 leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            The <span className="italic font-light text-brand-secondary">Endorsement</span> <br />of Quality.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-10 rounded-sm hover:bg-white/[0.05] hover:border-brand-secondary/30 transition-all duration-500 group"
            >
              <Quote size={32} className="text-brand-secondary/20 mb-8 group-hover:text-brand-secondary/40 transition-colors duration-500" />
              <p className="text-white/40 text-lg leading-relaxed mb-10 italic font-light group-hover:text-white/70 transition-colors duration-500">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-brand-secondary/10 flex items-center justify-center text-brand-secondary font-black rounded-sm group-hover:bg-brand-secondary group-hover:text-brand-dark transition-all duration-500">
                  {t.initial}
                </div>
                <div className="flex-1">
                  <div className="font-bold text-white mb-1">{t.name}</div>
                  <div className="text-white/20 text-[10px] uppercase tracking-widest font-black">{t.role}</div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={12} className="text-brand-secondary fill-brand-secondary" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

