"use client";

import { motion } from "framer-motion";
import { Users, Target, BookOpen, ClipboardCheck, Award, Home } from "lucide-react";

const differentiators = [
  {
    icon: Users,
    title: "Small Batches",
    desc: "Limited seats per batch ensures every student gets personalized attention — not lost in a crowd of 200.",
  },
  {
    icon: Target,
    title: "Individual Attention",
    desc: "Faculty knows every student by name. Progress is tracked individually, not just as a batch average.",
  },
  {
    icon: BookOpen,
    title: "Expert Study Material",
    desc: "Topic-wise Question Banks (MQB-I & MQB-II) covering the complete JEE and NEET syllabus.",
  },
  {
    icon: ClipboardCheck,
    title: '"First Test Then Select"',
    desc: "Entrance-based admission ensures every batch has students at the right level — quality over quantity.",
  },
  {
    icon: Award,
    title: "Proven Rankings",
    desc: "Ranked #1 on BestCoaching.app, Top 10 on Edunews.info, and 4.5★ on Justdial with 86 verified reviews.",
  },
  {
    icon: Home,
    title: "Hostel Facility",
    desc: "Dedicated hostel for outstation students — study in a focused environment without the distraction of commuting.",
  },
];

export function WhyNirvaan() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-brand-dark overflow-hidden relative">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-primary/5 -skew-x-12 transform origin-top-right" />
      
      <div className="max-w-[1920px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="text-brand-secondary text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">
            Why Students Choose Us
          </span>
          <h2
            className="text-5xl md:text-6xl font-medium text-white mb-6 leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            The <span className="italic font-light text-brand-secondary">Nirvaan</span> Difference.
          </h2>
          <p className="text-white/40 max-w-xl mx-auto font-light leading-relaxed">
            We&apos;re not a factory. Every student at Nirvaan is known, tracked, and supported individually to unlock their peak performance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-10 rounded-sm hover:bg-white/[0.05] hover:border-brand-secondary/30 transition-all duration-500 group"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-brand-secondary/10 mb-8 group-hover:bg-brand-secondary transition-colors duration-500 rounded-sm">
                <item.icon
                  size={24}
                  className="text-brand-secondary group-hover:text-brand-dark transition-colors duration-500"
                />
              </div>
              <h3
                className="text-xl font-bold text-white mb-4 group-hover:text-brand-secondary transition-colors duration-500"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {item.title}
              </h3>
              <p className="text-sm text-white/40 leading-relaxed font-light group-hover:text-white/60 transition-colors duration-500">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

