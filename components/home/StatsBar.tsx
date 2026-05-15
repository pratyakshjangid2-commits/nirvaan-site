"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Stat {
  value: string;
  numericTarget?: number;
  suffix?: string;
  label: string;
}

const stats: Stat[] = [
  { value: "500+", numericTarget: 500, suffix: "+", label: "Students Mentored" },
  { value: "Rank #1", label: "NEET Excellence" },
  { value: "4.5★", label: "Verified Reviews" },
  { value: "2019", label: "Proven Legacy" },
];

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
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
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function StatsBar() {
  return (
    <section className="bg-brand-dark py-12 border-b border-white/5 relative">
      {/* Subtle Glow Connection */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-brand-secondary/30 to-transparent" />
      
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="text-center relative group"
            >
              {/* Refined Vertical Divider */}
              {i < stats.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-0 w-[1px] h-6 bg-white/10 -translate-y-1/2" />
              )}
              
              <div
                className="text-4xl md:text-5xl font-medium text-white mb-2 tracking-tight group-hover:text-brand-secondary transition-colors duration-500"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {stat.numericTarget ? (
                  <CountUp target={stat.numericTarget} suffix={stat.suffix} />
                ) : (
                  stat.value
                )}
              </div>
              <div className="text-[10px] text-white/40 uppercase font-black tracking-[0.4em]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



