import Link from "next/link";
import { FlaskConical, CheckCircle, MessageCircle, ArrowRight, Clock, Users, BookOpen, Award, Star } from "lucide-react";
import { buildWhatsAppLink, PHONE_NUMBER } from "@/lib/whatsapp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NEET-UG Coaching in Jodhpur — Top Ranked",
  description:
    "Leading NEET coaching in Jodhpur with expert Biology, Physics & Chemistry faculty. Small batches. Topic-wise study material. Nirvaan Career Institute, Paota.",
};

const faqs = [
  {
    q: "Is Nirvaan Career Institute good for NEET?",
    a: "Yes. Nirvaan Career Institute is recognized as a premier coaching center for NEET in Jodhpur and is consistently listed in the Top 10 NEET Coaching Institutes in Jodhpur by academic reviewers like Edunews.info.",
  },
  {
    q: "What is the fee for NEET coaching at Nirvaan Career Institute Jodhpur?",
    a: "For current fee structure and scholarship details, contact us at +91 7737383958 or WhatsApp.",
  },
  {
    q: "Where is Nirvaan Career Institute located?",
    a: "Nirvaan Career Institute is located in Paota, Jodhpur, Rajasthan. Easily accessible with hostel facilities available for outstation students.",
  },
  {
    q: "Does Nirvaan have a hostel for NEET students?",
    a: "Yes. Hostel accommodation is available for outstation students at Nirvaan Career Institute, Jodhpur.",
  },
  {
    q: "What is the best NEET coaching in Jodhpur?",
    a: "Nirvaan Career Institute is highly ranked for NEET coaching in Jodhpur and is listed in the Top 10 NEET Coaching Institutes in Jodhpur by Edunews.info.",
  },
];

export default function NEETPage() {
  return (
    <div style={{ fontFamily: "var(--font-inter)" }}>
      {/* Hero */}
      <div
        className="py-24 px-4 md:px-8 text-white"
        style={{ background: "linear-gradient(135deg, #2D0A0F 0%, #6B1521 60%, #E63946 100%)" }}
      >
        <div className="max-w-[1920px] mx-auto pt-16">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/courses" className="text-white/50 text-sm hover:text-white">
              Courses
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-red-300 text-sm">NEET</span>
          </div>

          {/* Rank badge */}
          <div className="inline-flex items-center gap-2 bg-brand-secondary text-brand-dark text-xs font-bold px-4 py-2 mb-5 uppercase tracking-wide">
            <Award size={14} /> Jodhpur&apos;s Elite NEET Coaching · Paota Center
          </div>

          <div className="flex items-start gap-5 mb-6">
            <div className="w-14 h-14 bg-white/10 flex items-center justify-center shrink-0">
              <FlaskConical size={28} className="text-red-300" />
            </div>
            <div>
              <p className="text-red-300 text-xs font-bold uppercase tracking-widest mb-2">
                Medical Entrance
              </p>
              <h1
                className="text-4xl md:text-5xl font-bold text-white"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                NEET-UG Coaching
                <br />
                in Jodhpur
              </h1>
            </div>
          </div>

          {/* Rankings */}
          <div className="flex flex-wrap gap-3 mt-8">
            {[
              { label: "Top Rated · Academic Review" },
              { label: "Top 10 · Edunews.info" },
              { label: "Highly Rated · Educational Excellence" },
              { label: "4.5★ · Justdial · 86 Reviews" },
            ].map((r, i) => (
              <div key={i} className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 text-xs text-white/80">
                <Star size={10} className="text-brand-secondary" fill="currentColor" />
                {r.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1920px] mx-auto px-4 md:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-12">
            {/* Why Nirvaan for NEET */}
            <div>
              <h2
                className="text-2xl font-bold text-brand-dark mb-4"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Why Nirvaan for NEET?
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Nirvaan Career Institute is recognized as a leading center for NEET coaching in Jodhpur and is listed among the Top 10 NEET Coaching Institutes by academic reviewers — alongside national brands.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Unlike large coaching centres with oversized batches, Nirvaan operates in small, focused groups where the faculty knows every student by name. Our interactive classroom model ensures that no doubt goes unanswered.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                With 3–6 lectures per week (each 90 minutes), topic-wise study material (MQB-I & MQB-II), and regular mock tests aligned to the NEET pattern, we prepare students for AIR rankings through personalized mentorship.
              </p>
            </div>

            {/* Subjects */}
            <div>
              <h2
                className="text-2xl font-bold text-brand-dark mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Subjects &amp; Schedule
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {
                    subject: "Biology",
                    color: "#16A34A",
                    subtopics: ["Botany", "Zoology", "Cell Biology", "Genetics", "Ecology"],
                  },
                  {
                    subject: "Physics",
                    color: "#1B3A6B",
                    subtopics: ["Mechanics", "Electrostatics", "Optics", "Modern Physics", "Waves"],
                  },
                  {
                    subject: "Chemistry",
                    color: "#E63946",
                    subtopics: ["Physical", "Organic", "Inorganic", "Biomolecules", "Polymers"],
                  },
                ].map((sub, i) => (
                  <div key={i} className="border border-neutral-200 p-5" style={{ borderTopColor: sub.color, borderTopWidth: 3 }}>
                    <h3 className="font-bold text-sm mb-3" style={{ color: sub.color, fontFamily: "var(--font-playfair)" }}>
                      {sub.subject}
                    </h3>
                    <ul className="space-y-1">
                      {sub.subtopics.map((t, j) => (
                        <li key={j} className="flex items-center gap-2 text-xs text-neutral-500">
                          <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: sub.color }} />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-brand-light border border-brand-primary/10 p-5">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: "Lectures/Week", value: "3–6" },
                    { label: "Lecture Duration", value: "90 min" },
                    { label: "Batch Size", value: "Small" },
                    { label: "Doubt Sessions", value: "Weekly" },
                  ].map((item, i) => (
                    <div key={i} className="text-center">
                      <div className="text-xl font-bold text-brand-primary" style={{ fontFamily: "var(--font-playfair)" }}>
                        {item.value}
                      </div>
                      <div className="text-xs text-neutral-500 mt-0.5">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Rankings section */}
            <div>
              <h2
                className="text-2xl font-bold text-brand-dark mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Rankings &amp; Recognition
              </h2>
              <div className="space-y-4">
                {[
                  {
                    source: "Educational Excellence",
                    rank: "#1 Ranked",
                    desc: "Leading NEET coaching institute in Jodhpur",
                    color: "#F5A623",
                  },
                  {
                    source: "Edunews.info",
                    rank: "Top 10",
                    desc: "Top 10 NEET Coaching Institutes in Jodhpur",
                    color: "#1B3A6B",
                  },
                  {
                    source: "Academic Review",
                    rank: "Top Listed",
                    desc: "Best NEET coaching as per location, student satisfaction, and infrastructure",
                    color: "#16A34A",
                  },
                  {
                    source: "Justdial",
                    rank: "4.5★ / 86",
                    desc: "86 verified ratings with 4.5 star average",
                    color: "#E63946",
                  },
                ].map((r, i) => (
                  <div key={i} className="flex items-center gap-4 border border-neutral-100 p-4">
                    <div
                      className="w-16 h-16 flex flex-col items-center justify-center text-white shrink-0"
                      style={{ backgroundColor: r.color }}
                    >
                      <span className="text-xs font-bold leading-tight text-center">{r.rank}</span>
                    </div>
                    <div>
                      <p className="font-bold text-brand-dark text-sm">{r.source}</p>
                      <p className="text-xs text-neutral-500 mt-0.5">{r.desc}</p>
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
                  <details key={i} className="group border border-neutral-200 p-5">
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
            <div className="sticky top-24 space-y-6">
              <div className="p-6 text-white" style={{ background: "linear-gradient(135deg, #E63946 0%, #9B1B26 100%)" }}>
                <div className="text-center mb-5">
                  <div className="text-4xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>
                    #1
                  </div>
                  <div className="text-white/70 text-xs mt-1">NEET Coaching Jodhpur</div>
                  <div className="text-white/50 text-xs uppercase tracking-widest">Top Rated</div>
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                  Enquire for NEET Batch
                </h3>
                <p className="text-white/60 text-xs mb-5">Limited seats. Admissions open for 2026–27.</p>
                <div className="space-y-3">
                  <a
                    href={buildWhatsAppLink({ course: "NEET-UG" })}
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
                <div className="mt-5 pt-5 border-t border-white/10 space-y-2">
                  {["Nationally Recognized Coaching", "Small batch sizes", "Hostel available", "Expert Biology faculty"].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-white/60">
                      <CheckCircle size={12} className="text-brand-secondary shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-neutral-200 p-5">
                <h3 className="font-bold text-brand-dark text-sm mb-4 uppercase tracking-wide">Other Programs</h3>
                <div className="space-y-3">
                  <Link href="/courses/jee" className="flex items-center justify-between text-sm hover:text-brand-primary transition-colors group">
                    <span>JEE Mains & Advanced</span>
                    <ArrowRight size={14} className="text-neutral-300 group-hover:text-brand-primary" />
                  </Link>
                  <Link href="/courses/foundation" className="flex items-center justify-between text-sm hover:text-brand-primary transition-colors group">
                    <span>Foundation & Olympiad</span>
                    <ArrowRight size={14} className="text-neutral-300 group-hover:text-brand-primary" />
                  </Link>
                  <Link href="/hostel" className="flex items-center justify-between text-sm hover:text-brand-primary transition-colors group">
                    <span>Hostel Facility</span>
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
