"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Users2, Trophy, CheckCircle2, History } from "lucide-react";

interface TrustStat {
  icon: any;
  value: number;
  suffix: string;
  label: string;
  description: string;
  color: string;
}

const trustStats: TrustStat[] = [
  { 
    icon: Users2, 
    value: 5000, 
    suffix: "+", 
    label: "Students Mentored", 
    description: "Guidance provided to medical and engineering aspirants.",
    color: "bg-blue-50 text-blue-600"
  },
  { 
    icon: Award, 
    value: 250, 
    suffix: "+", 
    label: "Top Selections", 
    description: "Successful admissions in premier IITs and Medical colleges.",
    color: "bg-brand-secondary/10 text-brand-secondary"
  },
  { 
    icon: History, 
    value: 10, 
    suffix: "+", 
    label: "Years of Legacy", 
    description: "Consistent excellence in competitive exam preparation.",
    color: "bg-green-50 text-green-600"
  },
  { 
    icon: Trophy, 
    value: 4.9, 
    suffix: "/5", 
    label: "Parent Rating", 
    description: "Highest rated coaching institute for student care in Jodhpur.",
    color: "bg-yellow-50 text-yellow-600"
  },
];

function CountUp({ target, suffix = "", decimals = 0 }: { target: number; suffix?: string; decimals?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Number(current.toFixed(decimals)));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, decimals]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function StatsBar() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustStats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 border border-neutral-100 rounded-sm hover:shadow-xl transition-all duration-500 group bg-neutral-50/50"
            >
              <div className={`w-14 h-14 rounded-sm ${stat.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <stat.icon size={28} />
              </div>
              
              <div
                className="text-4xl font-bold text-brand-navy mb-2 tracking-tight"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                <CountUp 
                  target={stat.value} 
                  suffix={stat.suffix} 
                  decimals={stat.value % 1 !== 0 ? 1 : 0} 
                />
              </div>
              
              <h3 className="text-sm font-bold text-brand-navy uppercase tracking-widest mb-3">
                {stat.label}
              </h3>
              
              <p className="text-neutral-500 text-xs leading-relaxed font-light">
                {stat.description}
              </p>

              {/* Progress Line Accent */}
              <div className="mt-6 h-[2px] w-8 bg-brand-secondary group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>

        {/* Supporting Trust Row */}
        <div className="mt-16 flex flex-wrap justify-center gap-12 items-center opacity-40 grayscale filter">
           <div className="flex items-center gap-2 font-bold text-sm">
             <CheckCircle2 size={16} /> Ranked #1 Institute
           </div>
           <div className="flex items-center gap-2 font-bold text-sm">
             <CheckCircle2 size={16} /> Govt. Registered
           </div>
           <div className="flex items-center gap-2 font-bold text-sm">
             <CheckCircle2 size={16} /> NTA Pattern
           </div>
           <div className="flex items-center gap-2 font-bold text-sm">
             <CheckCircle2 size={16} /> NEET/JEE Specialist
           </div>
        </div>
      </div>
    </section>
  );
}



