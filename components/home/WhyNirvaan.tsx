"use client";

import { motion } from "framer-motion";
import { Users, Target, BookOpen, ClipboardCheck, Award, MessageSquare, BarChart3, Clock } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Expert Faculty Team",
    desc: "Learn from subject matter experts with over a decade of experience in JEE and NEET pedagogy. Mentorship from IITians & AIIMS alumni.",
  },
  {
    icon: Clock,
    title: "Regular & Timely Classes",
    desc: "Strict adherence to the academic calendar. Daily 6-hour intensive sessions with zero cancellations, ensuring 100% syllabus coverage on time.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    desc: "Regular NTA-pattern mock tests with detailed performance analytics and AIR ranking to identify and bridge conceptual gaps.",
  },
  {
    icon: MessageSquare,
    title: "Direct Doubt Resolution",
    desc: "Beyond lectures, we provide dedicated daily slots for 1-on-1 doubt clearing with the same faculty who taught in the class.",
  },
  {
    icon: ClipboardCheck,
    title: "Discipline & Reporting",
    desc: "A high-performance environment with mandatory attendance. Parents receive real-time SMS alerts and weekly performance reports.",
  },
  {
    icon: Award,
    title: "Elite Result Track Record",
    desc: "A consistent history of producing top-tier ranks in NEET and JEE. Focused on quality selections rather than mass enrollment.",
  },
];

export function WhyNirvaan() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="text-brand-secondary text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">
            Institutional Excellence
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-brand-navy mb-6 leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            The Nirvaan <span className="italic text-brand-secondary">Edge</span>.
          </h2>
          <p className="text-neutral-500 max-w-2xl mx-auto font-light leading-relaxed">
            Our commitment to quality education is reflected in our structured approach, 
            expert mentors, and the success of our students.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group flex gap-6 p-2 hover:translate-y-[-4px] transition-transform duration-300"
            >
              <div className="w-16 h-16 shrink-0 bg-brand-navy rounded-sm flex items-center justify-center text-brand-secondary group-hover:bg-brand-secondary group-hover:text-brand-navy transition-all duration-500 shadow-premium">
                <feature.icon size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-brand-navy mb-3 group-hover:text-brand-secondary transition-colors" style={{ fontFamily: "var(--font-playfair)" }}>
                  {feature.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed font-light">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Support Quote */}
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="mt-32 p-12 bg-neutral-50 border-l-4 border-brand-secondary relative overflow-hidden"
        >
           <div className="absolute top-[-20px] right-[-20px] text-brand-secondary/10">
             <Clock size={200} />
           </div>
           <div className="relative z-10">
             <p className="text-xl md:text-2xl text-brand-navy font-medium italic mb-6 leading-relaxed max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
               "Education is the movement from darkness to light. At Nirvaan, we ensure 
               that this movement is guided by the most experienced hands in the industry."
             </p>
             <div className="flex items-center gap-4">
               <div className="w-10 h-[1px] bg-brand-secondary" />
               <span className="text-xs font-black uppercase tracking-[0.2em] text-brand-navy">Founder&apos;s Vision</span>
             </div>
           </div>
        </motion.div>

      </div>
    </section>
  );
}


