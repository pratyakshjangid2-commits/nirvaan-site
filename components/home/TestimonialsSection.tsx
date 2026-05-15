"use client";

import { motion } from "framer-motion";
import { Star, Quote, CheckCircle2, UserCheck } from "lucide-react";

const testimonials = [
  {
    name: "Aman Singhania",
    role: "MBBS Student, AIIMS",
    text: "The structured methodology and expert faculty at Nirvaan were instrumental in my NEET journey. The personal attention I received here is unmatched in Jodhpur.",
    rating: 5,
    tag: "Medical Selection",
    type: "Student"
  },
  {
    name: "Dr. Rajesh Verma",
    role: "Parent (Aman's Father)",
    text: "As a doctor myself, I was looking for an institute that focuses on concepts rather than rote learning. Nirvaan exceeded my expectations with their reporting and care.",
    rating: 5,
    tag: "Parent Review",
    type: "Parent"
  },
  {
    name: "Priyanka Meena",
    role: "B.Tech Student, IIT",
    text: "Mathematics was always a challenge until I joined Er. Vivek sir's classes. The problem-solving techniques taught at Nirvaan are truly world-class.",
    rating: 5,
    tag: "IIT Selection",
    type: "Student"
  },
  {
    name: "Mrs. Sunita Devi",
    role: "Parent (Rahul's Mother)",
    text: "The small batch size ensured that my son never felt lost. His confidence grew immensely within months of joining the foundation program.",
    rating: 5,
    tag: "Confidence Build",
    type: "Parent"
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto relative z-10">

        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-brand-secondary text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">
              Testimonials
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-brand-navy mb-6 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Voices of <span className="italic text-brand-secondary">Confidence</span> <br />from our Community.
            </h2>
            <p className="text-neutral-500 font-light leading-relaxed">
              We take pride in the success and growth of our students. Hear from the
              parents and students who have experienced the Nirvaan difference.
            </p>
          </motion.div>

          <div className="flex items-center gap-4 p-6 bg-neutral-50 border border-neutral-100 rounded-sm">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-brand-navy flex items-center justify-center text-[10px] font-black text-white">
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div>
              <p className="text-xs font-black text-brand-navy uppercase">4.9/5 Average</p>
              <p className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest">Across 500+ Reviews</p>
            </div>
          </div>
        </div>

        <div className="relative -mx-6 md:-mx-12 lg:mx-0">
          <div className="flex overflow-x-auto lg:grid lg:grid-cols-2 gap-8 px-6 md:px-12 lg:px-0 pb-12 lg:pb-0 snap-x snap-mandatory no-scrollbar w-full">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="min-w-[85vw] sm:min-w-[300px] lg:min-w-0 bg-neutral-50 border border-neutral-200 p-8 md:p-12 relative group hover:bg-white hover:shadow-2xl transition-all duration-500 snap-center first:ml-0 last:mr-0"
              >
                <Quote size={40} className="text-brand-secondary/10 absolute top-10 right-10 group-hover:text-brand-secondary/20 transition-colors" />

                <div className="flex items-center gap-3 mb-8">
                  <div className="flex gap-0.5">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} size={14} className="text-brand-secondary fill-brand-secondary" />
                    ))}
                  </div>
                  <span className="text-[10px] font-black text-brand-secondary uppercase tracking-[0.2em] bg-brand-secondary/5 px-2 py-1">
                    {t.tag}
                  </span>
                </div>

                <p className="text-brand-navy/80 text-lg leading-relaxed mb-10 font-light italic">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="flex items-center gap-6 pt-10 border-t border-neutral-200/50">
                  <div className="w-14 h-14 bg-brand-navy rounded-sm flex items-center justify-center text-brand-secondary font-black text-xl shadow-lg">
                    {t.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-brand-navy">{t.name}</h4>
                      {t.type === "Student" ? <UserCheck size={14} className="text-emerald-500" /> : <CheckCircle2 size={14} className="text-blue-500" />}
                    </div>
                    <p className="text-neutral-400 text-xs font-bold uppercase tracking-widest">{t.role}</p>
                  </div>
                  <div className="hidden sm:block text-right">
                    <p className="text-[10px] font-black text-neutral-300 uppercase tracking-widest">Verified Result</p>
                    <p className="text-[10px] font-bold text-brand-secondary uppercase tracking-widest">Class of 2024</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Global Social Proof Strip */}
        <div className="mt-20 flex flex-wrap justify-center gap-16 items-center py-10 border-y border-neutral-100">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-black text-brand-navy mb-1" style={{ fontFamily: "var(--font-playfair)" }}>4.9★</span>
            <span className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.3em]">Google Maps</span>
          </div>
          <div className="w-[1px] h-10 bg-neutral-200 hidden md:block" />
          <div className="flex flex-col items-center">
            <span className="text-3xl font-black text-brand-navy mb-1" style={{ fontFamily: "var(--font-playfair)" }}>4.8★</span>
            <span className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.3em]">Justdial</span>
          </div>
          <div className="w-[1px] h-10 bg-neutral-200 hidden md:block" />
          <div className="flex flex-col items-center">
            <span className="text-3xl font-black text-brand-navy mb-1" style={{ fontFamily: "var(--font-playfair)" }}>96%</span>
            <span className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.3em]">Parent Approval</span>
          </div>
        </div>

      </div>
    </section>
  );
}
