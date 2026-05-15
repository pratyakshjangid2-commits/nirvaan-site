import Link from "next/link";
import { BookOpen, MessageCircle, ArrowRight } from "lucide-react";
import { buildWhatsAppLink, PHONE_NUMBER } from "@/lib/whatsapp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JEE Foundation Coaching Class 9 & 10 Jodhpur | NTSE · KVPY · Olympiad",
  description:
    "Build the right foundation for JEE and NEET from Class 9 at Nirvaan Career Institute, Jodhpur. Also covers NTSE, KVPY, and Science Olympiad preparation.",
};

export default function FoundationPage() {
  return (
    <div style={{ fontFamily: "var(--font-inter)" }}>
      <div
        className="py-24 px-4 md:px-8 text-white"
        style={{ background: "linear-gradient(135deg, #1A0E00 0%, #6B4200 60%, #F5A623 100%)" }}
      >
        <div className="max-w-[1920px] mx-auto pt-16">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/courses" className="text-white/50 text-sm hover:text-white">Courses</Link>
            <span className="text-white/30">/</span>
            <span className="text-amber-300 text-sm">Foundation</span>
          </div>
          <div className="flex items-start gap-5 mb-6">
            <div className="w-14 h-14 bg-white/10 flex items-center justify-center shrink-0">
              <BookOpen size={28} className="text-amber-300" />
            </div>
            <div>
              <p className="text-amber-300 text-xs font-bold uppercase tracking-widest mb-2">Class 6–10 · Competitive Exams</p>
              <h1 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "var(--font-playfair)" }}>
                Foundation &amp; Olympiad<br />Coaching
              </h1>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 mt-6">
            {["Foundation Class 9–10", "NTSE Preparation", "KVPY Preparation", "Science Olympiad", "Pre-Foundation 6–8"].map((t, i) => (
              <span key={i} className="bg-white/10 px-3 py-1.5 text-xs text-white/80">{t}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1920px] mx-auto px-4 md:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-brand-dark mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
                Why Start Early?
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                The students who crack JEE Advanced and NEET with top ranks are almost always those who started building their foundation in Class 9 or earlier. Nirvaan&apos;s foundation program is designed to give Class 6–10 students the conceptual base, problem-solving habits, and exam temperament they need.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Foundation coaching also covers NTSE, KVPY, and Science Olympiads — these are not just prestigious credentials, they are powerful signals for college admissions and scholarship eligibility.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-dark mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
                Programs Available
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Pre-Foundation",
                    class: "Class 6–8",
                    desc: "Introduction to Science and Maths at the competitive level. Builds curiosity, logical thinking, and early aptitude for JEE/NEET subjects.",
                    subjects: ["Science", "Mathematics", "Mental Ability"],
                    color: "#16A34A",
                  },
                  {
                    title: "Foundation (Nurture)",
                    class: "Class 9–10",
                    desc: "Systematic JEE/NEET foundation with full school syllabus coverage plus advanced problem sets. NTSE and Olympiad integrated.",
                    subjects: ["Physics", "Chemistry", "Biology/Maths", "NTSE MAT/SAT"],
                    color: "#F5A623",
                  },
                  {
                    title: "KVPY Preparation",
                    class: "Class 11–12",
                    desc: "Kishore Vaigyanik Protsahan Yojana preparation. Prestigious scholarship exam with national recognition.",
                    subjects: ["Physics", "Chemistry", "Biology", "Mathematics"],
                    color: "#1B3A6B",
                  },
                  {
                    title: "Science Olympiad",
                    class: "Class 6–12",
                    desc: "International/National Science and Mathematics Olympiad preparation — NTSE, IMO, NSO, and more.",
                    subjects: ["Science", "Mathematics", "Reasoning"],
                    color: "#E63946",
                  },
                ].map((prog, i) => (
                  <div key={i} className="border border-neutral-200 p-6" style={{ borderLeftWidth: 4, borderLeftColor: prog.color }}>
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-bold text-brand-dark" style={{ fontFamily: "var(--font-playfair)" }}>
                          {prog.title}
                        </h3>
                        <span className="text-xs font-semibold px-2 py-0.5 mt-1 inline-block" style={{ backgroundColor: `${prog.color}20`, color: prog.color }}>
                          {prog.class}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-neutral-600 leading-relaxed mb-4">{prog.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {prog.subjects.map((s, j) => (
                        <span key={j} className="text-xs text-neutral-500 bg-neutral-50 border border-neutral-200 px-2 py-1">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Nirvaan for Foundation */}
            <div>
              <h2 className="text-2xl font-bold text-brand-dark mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
                Competitive Edge for JEE/NEET Foundation
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "Low Competition Keyword", desc: "'JEE foundation class 9 10 Jodhpur' — weak competition means early starters have the biggest advantage." },
                  { title: "NTSE Quick Wins", desc: "NTSE scholarships strengthen college applications and are achievable with the right guidance." },
                  { title: "Expert Faculty", desc: "Same expert faculty who coach JEE/NEET — no compromise on teaching quality for younger batches." },
                  { title: "Study Material", desc: "MQB (Module Question Bank) designed for gradual skill-building aligned with school curriculum." },
                ].map((item, i) => (
                  <div key={i} className="bg-brand-light border border-brand-primary/10 p-5">
                    <h3 className="font-semibold text-brand-dark text-sm mb-2">{item.title}</h3>
                    <p className="text-xs text-neutral-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="sticky top-24 space-y-6">
              <div className="p-6 text-white" style={{ backgroundColor: "#F5A623" }}>
                <h3 className="text-lg font-bold text-brand-dark mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                  Enquire for Foundation Batch
                </h3>
                <p className="text-brand-dark/60 text-xs mb-5">Classes for Class 6 to 10. Contact us now.</p>
                <div className="space-y-3">
                  <a
                    href={buildWhatsAppLink({ course: "Foundation & Olympiad" })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-brand-dark text-white font-bold py-3 px-6 w-full hover:bg-brand-navy transition-colors"
                  >
                    <MessageCircle size={18} /> WhatsApp Us
                  </a>
                  <a
                    href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
                    className="flex items-center justify-center gap-2 border-2 border-brand-dark text-brand-dark font-semibold py-3 px-6 w-full text-sm"
                  >
                    {PHONE_NUMBER}
                  </a>
                </div>
              </div>

              <div className="border border-neutral-200 p-5">
                <h3 className="font-bold text-brand-dark text-sm mb-4 uppercase tracking-wide">Other Programs</h3>
                <div className="space-y-3">
                  <Link href="/courses/jee" className="flex items-center justify-between text-sm hover:text-brand-primary transition-colors group">
                    <span>JEE Mains & Advanced</span>
                    <ArrowRight size={14} className="text-neutral-300 group-hover:text-brand-primary" />
                  </Link>
                  <Link href="/courses/neet" className="flex items-center justify-between text-sm hover:text-brand-primary transition-colors group">
                    <span>NEET-UG Coaching</span>
                    <ArrowRight size={14} className="text-neutral-300 group-hover:text-brand-primary" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
