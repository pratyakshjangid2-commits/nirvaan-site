"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, FlaskConical, Calculator, BookOpen } from "lucide-react";

const courses = [
  {
    icon: Calculator,
    title: "JEE Mains & Advanced",
    subtitle: "Engineering Entrance",
    description:
      "Comprehensive Physics, Chemistry & Mathematics coaching for IIT-JEE with topic-wise study material, mock tests, and doubt-clearing sessions.",
    highlights: ["3–6 lectures/week", "90 min each", "MQB Study Material"],
    href: "/courses/jee",
    color: "#F5A623",
  },
  {
    icon: FlaskConical,
    title: "NEET-UG",
    subtitle: "Medical Entrance · Rank #1",
    description:
      "Expert Biology, Physics & Chemistry coaching. Ranked #1 NEET coaching in Jodhpur. Individual attention in small batches — no crowded lecture halls.",
    highlights: ["Biology + Physics + Chemistry", "Small batches", "Rank #1 on BestCoaching.app"],
    href: "/courses/neet",
    color: "#E63946",
    featured: true,
  },
  {
    icon: BookOpen,
    title: "Foundation & Olympiad",
    subtitle: "Class 9–10 · NTSE · KVPY",
    description:
      "Build the right foundation for JEE and NEET from Class 9. Also covers NTSE, KVPY, and Science Olympiad preparation.",
    highlights: ["Class 6–12", "NTSE / KVPY", "Science Olympiad"],
    href: "/courses/foundation",
    color: "#1B3A6B",
  },
];

export function CoursesPreview() {
  return (
    <section id="courses" className="py-32 px-6 md:px-12 lg:px-24 bg-brand-dark overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-[50vw] h-[50vw] bg-brand-primary/5 rounded-full blur-[160px]" />

      <div className="max-w-[1920px] mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="text-brand-secondary text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">
            Our Programs
          </span>
          <h2
            className="text-5xl md:text-6xl font-medium text-white mb-6 leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Academic <span className="italic font-light text-brand-secondary">Pathways</span>.
          </h2>
          <p className="text-white/40 max-w-xl mx-auto font-light leading-relaxed">
            From foundation to advanced level — expert coaching for every stage of your JEE and NEET journey.
          </p>
        </motion.div>

        {/* Course cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative group bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-sm hover:border-brand-secondary/30 transition-all duration-500`}
            >
              {course.featured && (
                <div className="absolute -top-3 left-8 z-20">
                  <span className="bg-brand-secondary text-brand-dark text-[10px] font-black px-4 py-1 uppercase tracking-widest">
                    Premier Choice
                  </span>
                </div>
              )}

              <div className="p-10 flex flex-col h-full">
                {/* Icon */}
                <div
                  className="w-16 h-16 flex items-center justify-center mb-8 bg-white/5 rounded-sm group-hover:bg-brand-secondary transition-colors duration-500"
                >
                  <course.icon size={24} className="text-white group-hover:text-brand-dark transition-colors duration-500" />
                </div>

                {/* Content */}
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-2 group-hover:text-brand-secondary/60 transition-colors">
                  {course.subtitle}
                </p>
                <h3
                  className="text-2xl font-bold text-white mb-4 group-hover:text-brand-secondary transition-colors"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {course.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed mb-8 flex-1 font-light group-hover:text-white/60 transition-colors">
                  {course.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-3 mb-10">
                  {course.highlights.map((h, j) => (
                    <li key={j} className="flex items-center gap-3 text-xs text-white/40 group-hover:text-white/60 transition-colors">
                      <div className="w-1 h-1 rounded-full bg-brand-secondary" />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={course.href}
                  className="flex items-center gap-4 font-black uppercase tracking-widest text-[10px] text-white group-hover:text-brand-secondary transition-all"
                >
                  Explore Program <ArrowRight size={14} />
                </Link>
              </div>

              {/* Decorative Accent */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-secondary group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

