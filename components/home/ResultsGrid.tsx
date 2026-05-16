"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap, Medal } from "lucide-react";

const results = [
  {
    name: "Rahul Prajapat",
    rank: "AIR 452",
    exam: "NEET 2024",
    achievement: "AIIMS Delhi Selection",
    percentile: "99.98 %ile",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=rahul",
    badgeColor: "bg-emerald-500"
  },
  {
    name: "Priyanka Meena",
    rank: "AIR 1204",
    exam: "JEE Advanced 2024",
    achievement: "IIT Jodhpur Selection",
    percentile: "99.85 %ile",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=priyanka",
    badgeColor: "bg-blue-500"
  },
  {
    name: "Siddharth Jain",
    rank: "AIR 89",
    exam: "NEET 2023",
    achievement: "Maulana Azad Medical College",
    percentile: "99.99 %ile",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=siddharth",
    badgeColor: "bg-emerald-600"
  },
  {
    name: "Tanmay Singh",
    rank: "AIR 1580",
    exam: "JEE Advanced 2024",
    achievement: "IIT Roorkee Selection",
    percentile: "99.78 %ile",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=tanmay",
    badgeColor: "bg-blue-600"
  },
];

export function ResultsGrid() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-white relative">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-brand-secondary text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">
              Result Highlights
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-brand-navy leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Proven <span className="italic text-brand-secondary">Excellence</span> <br />in Every Examination.
            </h2>
          </motion.div>

          <div className="flex gap-4">
            <div className="p-4 bg-neutral-50 rounded-sm border border-neutral-100 flex items-center gap-3">
              <Medal className="text-brand-secondary" />
              <div>
                <p className="text-xs font-black text-brand-navy uppercase">250+ Selections</p>
                <p className="text-[10px] text-neutral-400">Total Selection count 2024</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative -mx-6 md:-mx-12 lg:mx-0">
          <div className="flex overflow-x-auto lg:grid lg:grid-cols-4 gap-8 px-6 md:px-12 lg:px-0 pb-12 lg:pb-0 snap-x snap-mandatory no-scrollbar w-full">
            {results.map((student, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="min-w-[280px] sm:min-w-[300px] lg:min-w-0 group bg-neutral-50 border border-neutral-200 rounded-sm overflow-hidden hover:shadow-2xl transition-all duration-500 snap-center"
              >
                {/* Photo Area */}
                <div className="aspect-square bg-white relative overflow-hidden p-6 flex items-center justify-center">
                  <div className="absolute inset-0 bg-brand-navy/5 group-hover:bg-brand-navy/0 transition-colors" />
                  <div 
                    className="w-32 h-32 flex items-center justify-center text-white text-5xl font-bold shadow-2xl transition-all duration-700 group-hover:scale-110"
                    style={{ backgroundColor: student.badgeColor.replace('bg-', '') === 'emerald-500' ? '#10b981' : (student.badgeColor.replace('bg-', '') === 'blue-500' ? '#3b82f6' : (student.badgeColor.replace('bg-', '') === 'emerald-600' ? '#059669' : '#2563eb')) }}
                  >
                    {student.name.charAt(0)}
                  </div>
                  <div className={`absolute top-4 right-4 ${student.badgeColor} text-white text-[10px] font-black px-3 py-1 uppercase tracking-widest rounded-full shadow-lg`}>
                    Qualified
                  </div>
                </div>

                {/* Data Area */}
                <div className="p-8 relative">
                  <div className="absolute -top-10 left-8 right-8 bg-white shadow-xl p-4 flex items-center justify-between border border-neutral-100 group-hover:border-brand-secondary transition-colors">
                    <div>
                      <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest leading-none mb-1">Rank</p>
                      <p className="text-xl font-bold text-brand-navy" style={{ fontFamily: "var(--font-playfair)" }}>{student.rank}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-black text-brand-secondary uppercase tracking-widest leading-none mb-1">Percentile</p>
                      <p className="text-xs font-bold text-brand-navy">{student.percentile}</p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h3 className="text-lg font-bold text-brand-navy mb-1">{student.name}</h3>
                    <p className="text-xs font-black text-brand-secondary uppercase tracking-widest mb-4">
                      {student.exam}
                    </p>

                    <div className="flex items-center gap-3 pt-4 border-t border-neutral-200">
                      <GraduationCap size={16} className="text-neutral-400" />
                      <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">{student.achievement}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 flex flex-col items-center"
        >
          <button className="bg-brand-navy text-white font-black px-12 py-5 uppercase tracking-[0.2em] text-xs hover:bg-brand-secondary hover:text-brand-navy transition-all shadow-premium">
            View Complete Result Archive
          </button>
          <p className="mt-6 text-[10px] font-bold text-neutral-400 uppercase tracking-[0.3em]">Consistent results since 2019</p>
        </motion.div>
      </div>
    </section>
  );
}
