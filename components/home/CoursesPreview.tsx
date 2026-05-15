"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, FlaskConical, Calculator, BookOpen, GraduationCap, ClipboardCheck, Sparkles, Users2, ShieldCheck } from "lucide-react";

const courses = [
  {
    icon: FlaskConical,
    title: "NEET Preparation",
    subtitle: "Medical Entrance Specialists",
    description: "Intensive biology-focused coaching for AIIMS and top medical colleges with specialized faculty.",
    highlights: ["NCERT Based Pedagogy", "Daily Practice Problems", "Weekly Mock Tests"],
    href: "/courses/neet",
    tag: "Rank #1 Focus",
    color: "border-emerald-600"
  },
  {
    icon: Calculator,
    title: "IIT-JEE Main & Adv.",
    subtitle: "Engineering Excellence",
    description: "Advanced physics and mathematics training designed to master the toughest engineering entrance.",
    highlights: ["Advanced Problem Solving", "Previous Year Analytics", "Personal Mentorship"],
    href: "/courses/jee",
    tag: "Premier Batch",
    color: "border-blue-600"
  },
  {
    icon: BookOpen,
    title: "Foundation (9th-10th)",
    subtitle: "Building the Core",
    description: "Strengthening concepts early for NTSE, Olympiads, and future competitive excellence.",
    highlights: ["Conceptual Clarity", "Olympiad Level Prep", "Early Advantage"],
    href: "/courses/foundation",
    tag: "Future Toppers",
    color: "border-brand-secondary"
  },
  {
    icon: Sparkles,
    title: "Scholarship Program",
    subtitle: "Nirvaan Talent Search",
    description: "Merit-based scholarships for talented students to support their academic journey.",
    highlights: ["Up to 100% Fee Waiver", "Talent Assessment", "Direct Admission"],
    href: "/contact",
    tag: "Now Open",
    color: "border-purple-600"
  },
];

export function CoursesPreview() {
  return (
    <section id="courses" className="py-32 px-6 md:px-12 lg:px-24 bg-neutral-50 overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-brand-secondary text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">
              Premier Programs
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-brand-navy mb-6 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Academic <span className="italic text-brand-secondary">Pathways</span> to Success.
            </h2>
            <p className="text-neutral-500 font-light leading-relaxed">
              We offer meticulously designed courses that cater to the evolving patterns of 
              competitive examinations, ensuring every student stays ahead.
            </p>
          </motion.div>
          
          <Link href="/courses" className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest text-brand-navy border-b-2 border-brand-secondary pb-2 hover:gap-4 transition-all">
            View All Courses <ArrowRight size={14} />
          </Link>
        </div>

        {/* Course Grid */}
        <div className="relative -mx-6 md:-mx-12 lg:mx-0">
          <div className="flex overflow-x-auto lg:grid lg:grid-cols-4 gap-8 px-6 md:px-12 lg:px-0 pb-12 lg:pb-0 snap-x snap-mandatory no-scrollbar w-full">
            {courses.map((course, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="min-w-[85vw] sm:min-w-[300px] lg:min-w-0 group flex flex-col bg-white border border-neutral-200 shadow-card hover:shadow-2xl transition-all duration-500 snap-center first:ml-0 last:mr-0"
              >
              <div className={`h-1.5 w-full border-t-[6px] ${course.color}`} />
              
              <div className="p-8 flex flex-col h-full">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-12 h-12 bg-neutral-50 rounded-sm flex items-center justify-center text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-colors duration-500">
                    <course.icon size={24} />
                  </div>
                  <span className="text-[10px] font-black text-brand-secondary uppercase tracking-widest bg-brand-secondary/5 px-2 py-1">
                    {course.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-secondary transition-colors" style={{ fontFamily: "var(--font-playfair)" }}>
                  {course.title}
                </h3>
                <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-6">
                  {course.subtitle}
                </p>
                
                <p className="text-sm text-neutral-500 leading-relaxed mb-8 flex-1 font-light">
                  {course.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-3 mb-10 pt-6 border-t border-neutral-50">
                  {course.highlights.map((h, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <ClipboardCheck size={14} className="text-brand-secondary shrink-0" />
                      <span className="text-xs text-neutral-600 font-medium">{h}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={course.href}
                  className="w-full py-4 bg-brand-navy text-white text-[10px] font-black uppercase tracking-widest text-center hover:bg-brand-secondary hover:text-brand-navy transition-all flex items-center justify-center gap-2"
                >
                  Enrollment Details <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
          </div>
        </div>

        {/* Supporting Features Strip */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 p-8 md:p-10 bg-brand-navy text-white relative overflow-hidden">
           <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-[-12deg] translate-x-1/2 hidden md:block" />
           
           <div className="flex items-center gap-4 relative z-10">
             <div className="w-10 h-10 border border-white/20 flex items-center justify-center text-brand-secondary shrink-0">
               <GraduationCap size={20} />
             </div>
             <div>
               <h4 className="text-xs font-black uppercase tracking-widest">Hybrid Learning</h4>
               <p className="text-[10px] text-white/40">Digital + Offline sessions</p>
             </div>
           </div>

           <div className="flex items-center gap-4 relative z-10">
             <div className="w-10 h-10 border border-white/20 flex items-center justify-center text-brand-secondary shrink-0">
               <ShieldCheck size={20} />
             </div>
             <div>
               <h4 className="text-xs font-black uppercase tracking-widest">NTA Test Series</h4>
               <p className="text-[10px] text-white/40">Real-time performance analytics</p>
             </div>
           </div>

           <div className="flex items-center gap-4 relative z-10">
             <div className="w-10 h-10 border border-white/20 flex items-center justify-center text-brand-secondary shrink-0">
               <Users2 size={20} />
             </div>
             <div>
               <h4 className="text-xs font-black uppercase tracking-widest">Expert Support</h4>
               <p className="text-[10px] text-white/40">1-on-1 doubt resolution</p>
             </div>
           </div>
        </div>

      </div>
    </section>
  );
}
