"use client";

import { motion } from "framer-motion";

const faculty = [
  {
    name: "Dr. RK Sharma",
    subject: "Physics",
    qual: "Ph.D. · 15y Experience",
    initials: "RS",
  },
  {
    name: "Prof. Anjali Mehta",
    subject: "Biology",
    qual: "M.Sc. · 12y Experience",
    initials: "AM",
  },
  {
    name: "Er. Vivek Gupta",
    subject: "Mathematics",
    qual: "IIT Delhi · 10y Experience",
    initials: "VG",
  },
];

export function FacultySpotlight() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-brand-dark overflow-hidden relative border-t border-white/5">
      {/* Subtle Ambient Background */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-brand-primary/[0.03] to-transparent pointer-events-none" />

      <div className="max-w-[1920px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-baseline justify-between mb-24 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-brand-secondary/60 text-[10px] font-black uppercase tracking-[0.4em] mb-6 block">
              The Mentors
            </span>
            <h2 
              className="text-5xl md:text-6xl font-medium text-white leading-tight tracking-tighter"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Academic <span className="italic font-light text-brand-secondary/80">Mastery</span> <br />meets guidance.
            </h2>
          </motion.div>
          
          <p className="text-white/30 text-sm font-light max-w-xs leading-relaxed text-left lg:text-right border-l lg:border-l-0 lg:border-r border-white/10 pl-6 lg:pl-0 lg:pr-6">
            Our faculty are not just lecturers; they are mentors providing the 
            intellectual depth that defines the Nirvaan legacy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-16 lg:gap-24">
          {faculty.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group cursor-default"
            >
              {/* Professional Abstract Placeholder */}
              <div className="aspect-[3/4] bg-white/[0.02] mb-10 overflow-hidden relative rounded-sm border border-white/5 flex items-center justify-center group-hover:border-brand-secondary/20 transition-all duration-700">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <span className="text-7xl font-light text-white/[0.03] group-hover:text-brand-secondary/10 transition-colors duration-700 select-none" style={{ fontFamily: "var(--font-playfair)" }}>
                  {member.initials}
                </span>
                
                {/* Decorative Minimal Corner */}
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-white/10 group-hover:border-brand-secondary/40 transition-all duration-700" />
              </div>

              <div>
                <h3 
                  className="text-2xl font-medium text-white mb-2 tracking-tight transition-colors duration-500 group-hover:text-brand-secondary"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {member.name}
                </h3>
                <p className="text-brand-secondary/40 text-[10px] font-black uppercase tracking-[0.2em] mb-5">
                  {member.subject} Specialist
                </p>
                <div className="h-[1px] w-6 bg-white/5 mb-5 group-hover:w-full group-hover:bg-brand-secondary/20 transition-all duration-700" />
                <p className="text-white/20 text-xs font-light tracking-wide group-hover:text-white/40 transition-colors duration-500">
                  {member.qual}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}




