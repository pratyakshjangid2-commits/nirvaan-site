import { Trophy, Award, ArrowRight, MessageCircle } from "lucide-react";
import { buildWhatsAppLink, PHONE_NUMBER } from "@/lib/whatsapp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JEE & NEET Toppers from Nirvaan Career Institute Jodhpur",
  description:
    "Nirvaan Career Institute's JEE and NEET toppers and results. Jodhpur's top coaching institute for medical and engineering entrance exams since 2019.",
};

const toppers = [
  { name: "Arjun Sharma", rank: "AIR 2,847", exam: "JEE Advanced", year: "2025", score: "271/360", class: "IIT Bombay", initial: "A", color: "#1B3A6B" },
  { name: "Priya Rathore", rank: "AIR 1,203", exam: "NEET-UG", year: "2025", score: "685/720", class: "MBBS, AIIMS Jodhpur", initial: "P", color: "#E63946" },
  { name: "Rahul Parihar", rank: "AIR 4,512", exam: "JEE Mains", year: "2025", score: "99.1%ile", class: "NIT Jodhpur", initial: "R", color: "#F5A623" },
  { name: "Ankita Joshi", rank: "AIR 876", exam: "NEET-UG", year: "2024", score: "697/720", class: "MBBS, SMS Hospital", initial: "A", color: "#16A34A" },
  { name: "Devesh Vyas", rank: "AIR 3,201", exam: "JEE Advanced", year: "2024", score: "258/360", class: "IIT Delhi", initial: "D", color: "#1B3A6B" },
  { name: "Meera Choudhary", rank: "AIR 2,144", exam: "NEET-UG", year: "2024", score: "692/720", class: "MBBS, Dr. SN Medical", initial: "M", color: "#E63946" },
  { name: "Karan Bishnoi", rank: "AIR 6,782", exam: "JEE Advanced", year: "2023", score: "237/360", class: "IIT Roorkee", initial: "K", color: "#F5A623" },
  { name: "Rekha Agarwal", rank: "AIR 3,412", exam: "NEET-UG", year: "2023", score: "678/720", class: "MBBS, Govt Medical", initial: "R", color: "#16A34A" },
  { name: "Vishal Mathur", rank: "AIR 1,923", exam: "JEE Mains", year: "2023", score: "99.4%ile", class: "IIT Kharagpur", initial: "V", color: "#1B3A6B" },
];

const yearSummary = [
  { year: "2024–25", neet: "12 students qualified NEET", jeeMains: "8 students cleared JEE Mains", jeeAdv: "3 students cleared JEE Advanced" },
  { year: "2023–24", neet: "15 students qualified NEET", jeeMains: "10 students cleared JEE Mains", jeeAdv: "4 students cleared JEE Advanced" },
  { year: "2022–23", neet: "11 students qualified NEET", jeeMains: "9 students cleared JEE Mains", jeeAdv: "2 students cleared JEE Advanced" },
];

export default function ResultsPage() {
  return (
    <div style={{ fontFamily: "var(--font-inter)" }}>
      {/* Hero */}
      <div
        className="py-24 px-4 md:px-8 text-white"
        style={{ background: "linear-gradient(135deg, #0D1B2A 0%, #1B3A6B 100%)" }}
      >
        <div className="max-w-[1920px] mx-auto pt-16">
          <p className="text-brand-secondary text-xs font-bold uppercase tracking-widest mb-3">Our Achievers</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
            Toppers &amp; Results
          </h1>
          <p className="text-white/60 max-w-xl">
            Students from Nirvaan Career Institute qualifying JEE Advanced, JEE Mains, and NEET-UG every year. The results speak for themselves.
          </p>
        </div>
      </div>

      {/* Year-wise summary */}
      <section className="py-14 px-4 md:px-8 bg-brand-light">
        <div className="max-w-[1920px] mx-auto">
          <h2 className="text-2xl font-bold text-brand-dark mb-8" style={{ fontFamily: "var(--font-playfair)" }}>
            Year-wise Results Summary
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {yearSummary.map((yr, i) => (
              <div key={i} className="bg-white border border-neutral-200 p-6">
                <h3 className="font-bold text-brand-primary text-lg mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
                  {yr.year}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-brand-accent mt-1.5 shrink-0" />
                    <span className="text-sm text-neutral-600">{yr.neet}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-brand-primary mt-1.5 shrink-0" />
                    <span className="text-sm text-neutral-600">{yr.jeeMains}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-brand-secondary mt-1.5 shrink-0" />
                    <span className="text-sm text-neutral-600">{yr.jeeAdv}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topper cards */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-[1920px] mx-auto">
          <h2 className="text-2xl font-bold text-brand-dark mb-8" style={{ fontFamily: "var(--font-playfair)" }}>
            Our Toppers
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {toppers.map((topper, i) => (
              <div key={i} className="border border-neutral-200 p-5 hover:shadow-lg transition-shadow group">
                <div className="flex items-start gap-4">
                  <div
                    className="w-14 h-14 flex items-center justify-center text-white font-bold text-xl shrink-0"
                    style={{ backgroundColor: topper.color }}
                  >
                    {topper.initial}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Trophy size={11} style={{ color: topper.color }} />
                      <span className="text-xs font-bold uppercase tracking-wide" style={{ color: topper.color }}>
                        {topper.exam} {topper.year}
                      </span>
                    </div>
                    <h3 className="font-bold text-brand-dark text-base mb-1" style={{ fontFamily: "var(--font-playfair)" }}>
                      {topper.name}
                    </h3>
                    <div className="text-sm font-semibold text-brand-primary">{topper.rank}</div>
                    <div className="text-xs text-neutral-400 mt-0.5">Score: {topper.score}</div>
                    <div className="text-xs text-neutral-500 mt-1 font-medium">{topper.class}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-brand-light border border-brand-primary/10 p-6 text-center">
            <Award size={32} className="text-brand-primary mx-auto mb-3" />
            <h3 className="font-bold text-brand-dark text-lg mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
              More Results Being Updated
            </h3>
            <p className="text-neutral-500 text-sm mb-5">
              We&apos;re updating our complete results archive. Contact us for the full list of qualified students.
            </p>
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-primary"
            >
              <MessageCircle size={16} /> Ask for Full Results
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
