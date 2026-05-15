import Link from "next/link";
import { ArrowRight, Calculator, FlaskConical, BookOpen } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JEE & NEET Courses in Jodhpur",
  description:
    "Explore JEE Mains & Advanced, NEET-UG, Foundation, and Olympiad coaching programs at Nirvaan Career Institute, Paota, Jodhpur.",
};

const courses = [
  {
    icon: Calculator,
    title: "JEE Mains & Advanced",
    subtitle: "Engineering Entrance",
    description:
      "Comprehensive Physics, Chemistry & Mathematics coaching. From concept building to full-syllabus mock tests. Structured schedule with 3–6 lectures per week.",
    href: "/courses/jee",
    color: "#1B3A6B",
    features: [
      "Physics · Chemistry · Mathematics",
      "3–6 lectures/week · 90 min each",
      "MQB-I & MQB-II study material",
      "Weekly + cumulative tests",
      "Doubt-clearing sessions",
    ],
  },
  {
    icon: FlaskConical,
    title: "NEET-UG",
    subtitle: "Medical Entrance · Rank #1 Jodhpur",
    description:
      "Ranked #1 NEET coaching in Jodhpur on BestCoaching.app. Expert Biology, Physics & Chemistry faculty. Small batches for maximum individual attention.",
    href: "/courses/neet",
    color: "#E63946",
    featured: true,
    features: [
      "Biology · Physics · Chemistry",
      "Small batch sizes",
      "Ranked #1 — BestCoaching.app",
      "Individual attention model",
      "Hostel available for outstation students",
    ],
  },
  {
    icon: BookOpen,
    title: "Foundation & Olympiad",
    subtitle: "Class 6–10 · NTSE · KVPY",
    description:
      "Build the right JEE/NEET foundation from Class 6. Also covers NTSE, KVPY, and Science/Maths Olympiad preparation for early starters.",
    href: "/courses/foundation",
    color: "#F5A623",
    features: [
      "Class 6–10 Foundation",
      "NTSE · KVPY preparation",
      "Science & Maths Olympiad",
      "Pre-Foundation program",
      "Interactive classroom model",
    ],
  },
];

export default function CoursesPage() {
  return (
    <div style={{ fontFamily: "var(--font-inter)" }}>
      {/* Hero */}
      <div
        className="py-24 px-4 md:px-8 text-white"
        style={{ background: "linear-gradient(135deg, #0D1B2A 0%, #1B3A6B 100%)" }}
      >
        <div className="max-w-[1920px] mx-auto pt-16">
          <p className="text-brand-secondary text-xs font-bold uppercase tracking-widest mb-3">
            Programs
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Our Coaching Programs
          </h1>
          <p className="text-white/60 max-w-xl">
            From foundation to advanced level — every program is designed for maximum results with small batches and expert faculty.
          </p>
        </div>
      </div>

      {/* Courses */}
      <div className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-[1920px] mx-auto space-y-8">
          {courses.map((course, i) => (
            <div
              key={i}
              className={`border ${course.featured ? "border-brand-accent" : "border-neutral-200"} hover:shadow-xl transition-shadow duration-300`}
            >
              {course.featured && (
                <div className="bg-brand-accent text-white text-xs font-bold px-4 py-2 uppercase tracking-wide">
                  ⭐ Most Popular — Ranked #1 NEET Coaching Jodhpur
                </div>
              )}
              <div className="p-8 md:p-10 grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="w-14 h-14 flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${course.color}15` }}
                    >
                      <course.icon size={28} style={{ color: course.color }} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                        {course.subtitle}
                      </p>
                      <h2
                        className="text-2xl font-bold text-brand-dark"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        {course.title}
                      </h2>
                    </div>
                  </div>
                  <p className="text-neutral-600 leading-relaxed mb-6">{course.description}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {course.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-neutral-600">
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: course.color }}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col justify-center gap-4">
                  <Link
                    href={course.href}
                    className="flex items-center justify-center gap-2 font-bold py-3 px-6 transition-colors"
                    style={{ backgroundColor: course.color, color: "white" }}
                  >
                    Course Details <ArrowRight size={16} />
                  </Link>
                  <a
                    href={buildWhatsAppLink({ course: course.title })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 border-2 font-bold py-3 px-6 transition-colors hover:opacity-80"
                    style={{ borderColor: course.color, color: course.color }}
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
