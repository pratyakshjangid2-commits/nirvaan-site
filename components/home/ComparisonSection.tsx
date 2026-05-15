"use client";

import { motion } from "framer-motion";

const philosophy = [
  {
    title: "The Batch Model",
    desc: "We limit enrollment to ensure every student is a name, not a number. Focus is our primary teaching tool.",
  },
  {
    title: "Expert Mentorship",
    desc: "Learning happens in the dialogue between student and mentor. Our faculty are chosen for their ability to inspire.",
  },
  {
    title: "Curated Content",
    desc: "We don't overwhelm with volume. We provide precisely curated MQB material that targets the core of the exam.",
  },
];

export function ComparisonSection() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-brand-dark overflow-hidden relative">
      {/* Background Accents */}
      <div className="absolute top-1/4 right-0 w-[40vw] h-[40vw] bg-brand-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-0 w-[30vw] h-[30vw] bg-brand-secondary/5 rounded-full blur-[100px]" />

      <div className="max-w-[1920px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-secondary text-[10px] font-black uppercase tracking-[0.4em] mb-6 block">
              The Nirvaan Ethos
            </span>
            <h2 
              className="text-5xl md:text-6xl font-medium text-white mb-8 leading-tight max-w-md"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              The <span className="italic font-light text-brand-secondary">Philosophy</span> <br />of Focus.
            </h2>
            <p className="text-white/40 text-lg leading-relaxed mb-12 max-w-lg font-light">
              We operate on a boutique model of education. By intentionally remaining 
              smaller than mass coaching institutes, we preserve the quality of 
              interaction that true academic excellence requires.
            </p>
            
            <div className="h-[1px] w-32 bg-gradient-to-r from-brand-secondary to-transparent" />
          </motion.div>

          <div className="space-y-16 lg:pt-12">
            {philosophy.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative"
              >
                <div className="flex gap-10">
                  <span className="text-white/10 text-4xl font-light italic shrink-0 group-hover:text-brand-secondary/40 transition-colors duration-500" style={{ fontFamily: "var(--font-playfair)" }}>
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-secondary transition-colors duration-500">
                      {item.title}
                    </h3>
                    <p className="text-white/40 font-light leading-relaxed max-w-md group-hover:text-white/60 transition-colors duration-500">
                      {item.desc}
                    </p>
                  </div>
                </div>
                
                {/* Subtle Hover Reveal */}
                <div className="absolute -inset-8 bg-white/[0.02] scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 rounded-sm -z-10" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


