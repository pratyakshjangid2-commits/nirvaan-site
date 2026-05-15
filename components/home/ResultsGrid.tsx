"use client";

import { motion } from "framer-motion";

const results = [
  {
    name: "Rahul Prajapat",
    rank: "AIR 452",
    exam: "NEET 2024",
    detail: "Score: 685/720",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=rahul",
  },
  {
    name: "Priyanka Meena",
    rank: "AIR 1204",
    exam: "JEE Advanced 2024",
    detail: "IIT Jodhpur Selection",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=priyanka",
  },
  {
    name: "Siddharth Jain",
    rank: "AIR 89",
    exam: "NEET 2023",
    detail: "AIIMS Delhi Selection",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=siddharth",
  },
  {
    name: "Tanmay Singh",
    rank: "99.8%ile",
    exam: "JEE Mains 2025",
    detail: "Physics 100/100",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=tanmay",
  },
];

export function ResultsGrid() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-brand-dark overflow-hidden relative border-y border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-brand-primary/5 rounded-full blur-[160px]" />

      <div className="max-w-[1920px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-secondary text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">
              Elite Outcomes
            </span>
            <h2 
              className="text-5xl md:text-6xl font-medium text-white leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              The <span className="italic font-light text-brand-secondary">Archive</span> <br />of Success.
            </h2>
          </motion.div>
          
          <p className="text-white/40 text-sm font-light tracking-wide italic max-w-xs text-right">
            Measurable results, delivered with consistency since 2019.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {results.map((student, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative"
            >
              <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-10 rounded-sm hover:bg-white/[0.05] hover:border-brand-secondary/30 transition-all duration-500">
                <div className="mb-8 relative">
                   <div className="text-6xl font-light text-white/[0.02] absolute -top-12 -left-6 pointer-events-none group-hover:text-brand-secondary/5 transition-colors" style={{ fontFamily: "var(--font-playfair)" }}>
                      0{i + 1}
                   </div>
                   <div className="text-4xl font-bold text-white mb-2 tracking-tighter group-hover:text-brand-secondary transition-colors" style={{ fontFamily: "var(--font-playfair)" }}>
                      {student.rank}
                   </div>
                   <p className="text-brand-secondary text-[10px] font-black uppercase tracking-[0.2em]">
                      {student.exam}
                   </p>
                </div>
                
                <div className="h-[1px] w-12 bg-white/10 mb-8 group-hover:w-full group-hover:bg-brand-secondary/30 transition-all duration-700" />
                
                <h3 className="text-xl font-medium text-white mb-2">{student.name}</h3>
                <p className="text-white/40 text-xs font-light tracking-wide group-hover:text-white/60 transition-colors">{student.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="mt-24 text-center lg:text-left"
        >
           <button className="text-xs font-black uppercase tracking-[0.3em] text-white border-b border-brand-secondary/50 pb-2 hover:text-brand-secondary hover:border-brand-secondary transition-all">
              View Detailed Result History →
           </button>
        </motion.div>
      </div>
    </section>
  );
}


