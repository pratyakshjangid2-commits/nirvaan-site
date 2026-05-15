import Link from "next/link";
import { Calculator, CheckCircle, MessageCircle, ArrowRight, Clock, Users, BookOpen, Award } from "lucide-react";
import { buildWhatsAppLink, PHONE_NUMBER } from "@/lib/whatsapp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JEE Mains & Advanced Coaching in Jodhpur",
  description:
    "Expert JEE Mains & Advanced coaching in Jodhpur at Nirvaan Career Institute. Small batches, expert Physics/Chemistry/Maths faculty, topic-wise MQB study material.",
};

const faqs = [
  {
    q: "Is Nirvaan Career Institute good for JEE?",
    a: "Yes. Nirvaan Career Institute is ranked among the top JEE coaching institutes in Jodhpur, known for small batch sizes, individual attention, and interactive teaching methodology with 3–6 lectures per week.",
  },
  {
    q: "What is the fee for JEE coaching at Nirvaan Career Institute?",
    a: "Please contact us directly at +91 7737383958 or WhatsApp for current fee structure and batch availability.",
  },
  {
    q: "What is the batch size for JEE at Nirvaan?",
    a: "Nirvaan Career Institute operates in small batches to ensure individual attention for each student. Batch size is kept deliberately limited.",
  },
  {
    q: "Does Nirvaan Career Institute offer study material for JEE?",
    a: "Yes. Students receive topic-wise Question Banks (MQB-I and MQB-II) covering the full JEE syllabus — Physics, Chemistry, and Mathematics.",
  },
  {
    q: "What is the admission process for JEE at Nirvaan?",
    a: "Admissions follow a 'first test then select' model. Students appear for an entrance assessment, and batch placement is based on their performance.",
  },
];

export default function JEEPage() {
  return (
    <div style={{ fontFamily: "var(--font-inter)" }}>
      {/* Hero */}
      <div
        className="py-24 px-4 md:px-8 text-white"
        style={{ background: "linear-gradient(135deg, #0D1B2A 0%, #1B3A6B 100%)" }}
      >
        <div className="max-w-[1920px] mx-auto pt-16">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/courses" className="text-white/50 text-sm hover:text-white">
              Courses
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-brand-secondary text-sm">JEE</span>
          </div>
          <div className="flex items-start gap-5 mb-6">
            <div className="w-14 h-14 bg-brand-secondary/20 flex items-center justify-center shrink-0">
              <Calculator size={28} className="text-brand-secondary" />
            </div>
            <div>
              <p className="text-brand-secondary text-xs font-bold uppercase tracking-widest mb-2">
                Engineering Entrance
              </p>
              <h1
                className="text-4xl md:text-5xl font-bold text-white"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                JEE Mains &amp; Advanced
                <br />
                Coaching in Jodhpur
              </h1>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            {[
              { icon: Clock, label: "3–6 lectures/week" },
              { icon: Users, label: "Small Batches" },
              { icon: BookOpen, label: "MQB Study Material" },
              { icon: Award, label: "Top Ranked Institute" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/10 px-4 py-2 text-sm text-white/80">
                <item.icon size={14} className="text-brand-secondary" />
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1920px] mx-auto px-4 md:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-12">
            {/* About */}
            <div>
              <h2
                className="text-2xl font-bold text-brand-dark mb-4"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                About the JEE Program
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Nirvaan Career Institute offers comprehensive JEE Mains and Advanced coaching with a focus on conceptual clarity and problem-solving ability. Our small batch model ensures every student receives the individual attention they deserve — unlike large coaching factories where you&apos;re just a roll number.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                With 3 to 6 high-quality lectures per week (each 90 minutes), topic-wise study material (MQB-I and MQB-II), and regular mock tests, we build the right foundation for IIT selection.
              </p>
            </div>

            {/* Schedule */}
            <div>
              <h2
                className="text-2xl font-bold text-brand-dark mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Course Structure
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-brand-primary text-white">
                      <th className="text-left p-4 text-sm font-semibold">Phase</th>
                      <th className="text-left p-4 text-sm font-semibold">Class</th>
                      <th className="text-left p-4 text-sm font-semibold">Schedule</th>
                      <th className="text-left p-4 text-sm font-semibold">Focus</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { phase: "Foundation", classes: "Class 11", schedule: "3 lectures/week · 90 min", focus: "Concept building" },
                      { phase: "Intensive", classes: "Class 12", schedule: "5–6 lectures/week · 90 min", focus: "Full syllabus + revision" },
                      { phase: "Crash Course", classes: "Post-Class 12", schedule: "6 lectures/week", focus: "Mock test integration" },
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-neutral-50"}>
                        <td className="p-4 text-sm font-semibold text-brand-primary border-b border-neutral-100">{row.phase}</td>
                        <td className="p-4 text-sm text-neutral-600 border-b border-neutral-100">{row.classes}</td>
                        <td className="p-4 text-sm text-neutral-600 border-b border-neutral-100">{row.schedule}</td>
                        <td className="p-4 text-sm text-neutral-600 border-b border-neutral-100">{row.focus}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Subjects */}
            <div>
              <h2
                className="text-2xl font-bold text-brand-dark mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Subjects Covered
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { subject: "Physics", topics: ["Mechanics", "Electrodynamics", "Optics", "Modern Physics", "Thermodynamics"] },
                  { subject: "Chemistry", topics: ["Physical Chemistry", "Organic Chemistry", "Inorganic Chemistry", "Mole Concept", "Equilibrium"] },
                  { subject: "Mathematics", topics: ["Calculus", "Algebra", "Coordinate Geometry", "Trigonometry", "Vectors & 3D"] },
                ].map((sub, i) => (
                  <div key={i} className="border border-neutral-200 p-5">
                    <h3
                      className="font-bold text-brand-primary text-base mb-3"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {sub.subject}
                    </h3>
                    <ul className="space-y-1">
                      {sub.topics.map((t, j) => (
                        <li key={j} className="flex items-center gap-2 text-xs text-neutral-500">
                          <span className="w-1 h-1 bg-brand-secondary rounded-full shrink-0" />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Admission Process */}
            <div>
              <h2
                className="text-2xl font-bold text-brand-dark mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Admission Process
              </h2>
              <div className="space-y-4">
                {[
                  { step: "1", title: "Enquire", desc: "Call us or WhatsApp to register your interest and check batch availability." },
                  { step: "2", title: "Entrance Assessment", desc: "Appear for our entrance test — we follow a 'first test then select' model." },
                  { step: "3", title: "Batch Placement", desc: "Based on your assessment score, you're placed in the most suitable batch." },
                  { step: "4", title: "Confirm Seat", desc: "Seat is confirmed on fee deposit. Limited seats available." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-brand-primary text-white flex items-center justify-center text-sm font-bold shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-dark text-sm mb-1">{item.title}</h3>
                      <p className="text-sm text-neutral-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div>
              <h2
                className="text-2xl font-bold text-brand-dark mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <details
                    key={i}
                    className="group border border-neutral-200 p-5"
                  >
                    <summary className="font-semibold text-brand-dark text-sm cursor-pointer list-none flex justify-between items-center">
                      {faq.q}
                      <ArrowRight size={14} className="text-brand-primary group-open:rotate-90 transition-transform shrink-0 ml-4" />
                    </summary>
                    <p className="mt-3 text-sm text-neutral-600 leading-relaxed">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Enquire card */}
            <div className="bg-brand-primary p-6 text-white sticky top-24">
              <h3
                className="text-xl font-bold mb-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Enquire for JEE Batch
              </h3>
              <p className="text-white/60 text-sm mb-6">
                Limited seats. Contact us today to check availability.
              </p>
              <div className="space-y-3">
                <a
                  href={buildWhatsAppLink({ course: "JEE Mains & Advanced" })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 w-full transition-colors"
                >
                  <MessageCircle size={18} /> WhatsApp Us
                </a>
                <a
                  href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
                  className="flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-semibold py-3 px-6 w-full transition-colors text-sm"
                >
                  {PHONE_NUMBER}
                </a>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="space-y-2">
                  {[
                    "Small batch guarantee",
                    "Expert faculty",
                    "MQB study material included",
                    "Hostel available",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-white/60">
                      <CheckCircle size={12} className="text-brand-secondary shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Related courses */}
            <div className="border border-neutral-200 p-6">
              <h3 className="font-bold text-brand-dark text-sm mb-4 uppercase tracking-wide">
                Other Programs
              </h3>
              <div className="space-y-3">
                <Link href="/courses/neet" className="flex items-center justify-between text-sm hover:text-brand-primary transition-colors group">
                  <span>NEET-UG Coaching</span>
                  <ArrowRight size={14} className="text-neutral-300 group-hover:text-brand-primary" />
                </Link>
                <Link href="/courses/foundation" className="flex items-center justify-between text-sm hover:text-brand-primary transition-colors group">
                  <span>Foundation & Olympiad</span>
                  <ArrowRight size={14} className="text-neutral-300 group-hover:text-brand-primary" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
