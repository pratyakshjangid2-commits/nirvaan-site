"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, CheckCircle2 } from "lucide-react";

const faculty = [
  {
    name: "Dr. RK Sharma",
    subject: "Physics Dept. Head",
    qual: "Ph.D. (IIT Delhi), M.Sc. Physics",
    exp: "18+ Years",
    expertise: "Mechanics & Modern Physics",
    initials: "RS",
  },
  {
    name: "Prof. Anjali Mehta",
    subject: "Biology Specialist",
    qual: "M.Sc. (AIIMS Delhi), GATE Qualified",
    exp: "12+ Years",
    expertise: "Genetics & Human Physiology",
    initials: "AM",
  },
  {
    name: "Er. Vivek Gupta",
    subject: "Mathematics Lead",
    qual: "B.Tech (IIT Kanpur), Mathematics Guru",
    exp: "15+ Years",
    expertise: "Calculus & Algebra",
    initials: "VG",
  },
  {
    name: "Er. Manish Soni",
    subject: "Mathematics Guru",
    qual: "IIT Kharagpur Alumnus",
    exp: "10+ Years",
    expertise: "Coordinate Geometry & Algebra",
    initials: "MS",
  },
];

export function FacultySpotlight() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-neutral-50 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto relative z-10">

        <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-brand-secondary text-[10px] font-black uppercase tracking-[0.4em] mb-6 block">
              Academic Leadership
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-brand-navy leading-tight tracking-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Mentored by <span className="italic text-brand-secondary">Industry</span> <br />Veterans & IITians.
            </h2>
          </motion.div>

          <p className="text-neutral-500 text-sm font-light max-w-xs leading-relaxed border-l-2 border-brand-secondary pl-6">
            Our faculty members are chosen not just for their degrees, but for their
            proven ability to simplify complex concepts and inspire success.
          </p>
        </div>

        <div className="relative -mx-6 md:-mx-12 lg:mx-0">
          <div className="flex overflow-x-auto lg:grid lg:grid-cols-4 gap-8 px-6 md:px-12 lg:px-0 pb-12 lg:pb-0 snap-x snap-mandatory no-scrollbar w-full">
            {faculty.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="min-w-[280px] sm:min-w-[300px] lg:min-w-0 group bg-white border border-neutral-200 rounded-sm overflow-hidden shadow-card hover:shadow-2xl transition-all duration-500 snap-center first:ml-0 last:mr-0"
              >
                {/* Profile Header */}
                <div className="p-8 bg-brand-navy relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 skew-x-[-15deg] translate-x-1/2" />
                  <div className="relative z-10 flex items-center gap-4">
                    <div className="w-16 h-16 rounded-sm bg-brand-secondary flex items-center justify-center text-brand-navy text-xl font-black shadow-lg shrink-0">
                      {member.initials}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1 leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>{member.name}</h3>
                      <p className="text-brand-secondary text-[9px] font-black uppercase tracking-[0.2em]">{member.subject}</p>
                    </div>
                  </div>
                </div>

                {/* Profile Details */}
                <div className="p-8 space-y-5">
                  <div className="flex items-start gap-4">
                    <GraduationCap className="text-brand-secondary shrink-0" size={18} />
                    <div>
                      <p className="text-[9px] font-black text-neutral-400 uppercase tracking-widest leading-none mb-1">Qualification</p>
                      <p className="text-[11px] font-bold text-brand-navy leading-tight">{member.qual}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Award className="text-brand-secondary shrink-0" size={18} />
                    <div>
                      <p className="text-[9px] font-black text-neutral-400 uppercase tracking-widest leading-none mb-1">Experience</p>
                      <p className="text-[11px] font-bold text-brand-navy">{member.exp}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <BookOpen className="text-brand-secondary shrink-0" size={18} />
                    <div>
                      <p className="text-[9px] font-black text-neutral-400 uppercase tracking-widest leading-none mb-1">Expertise</p>
                      <p className="text-[11px] font-bold text-brand-navy">{member.expertise}</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="text-emerald-500" size={12} />
                      <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest">Verified</span>
                    </div>
                    <button className="text-[9px] font-black text-brand-navy uppercase tracking-widest border-b border-brand-secondary pb-0.5 hover:text-brand-secondary transition-colors">
                      Pedagogy
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
