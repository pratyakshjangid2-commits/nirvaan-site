import { Award, Users, BookOpen, CheckCircle, MapPin, Phone } from "lucide-react";
import { buildWhatsAppLink, PHONE_NUMBER } from "@/lib/whatsapp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Nirvaan Career Institute — Expert JEE & NEET Faculty in Jodhpur",
  description:
    "Learn about Nirvaan Career Institute's teaching philosophy, faculty team, and approach to JEE and NEET preparation. Located in Paota, Jodhpur since 2019.",
};

export default function AboutPage() {
  return (
    <div style={{ fontFamily: "var(--font-inter)" }}>
      {/* Hero */}
      <div
        className="py-24 px-4 md:px-8 text-white"
        style={{ background: "linear-gradient(135deg, #0D1B2A 0%, #1B3A6B 100%)" }}
      >
        <div className="max-w-[1920px] mx-auto pt-16">
          <p className="text-brand-secondary text-xs font-bold uppercase tracking-widest mb-3">Our Story</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
            About Nirvaan<br />
            <span className="text-brand-secondary italic">Career Institute</span>
          </h1>
          <p className="text-white/60 max-w-xl text-lg">
            Jodhpur&apos;s most trusted JEE and NEET coaching institute. Founded in 2019 with one simple mission: give every student the individual attention they deserve.
          </p>
        </div>
      </div>

      {/* AEO-optimized about paragraph */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-brand-secondary text-xs font-bold uppercase tracking-widest mb-3">Who We Are</p>
              <h2 className="text-3xl font-bold text-brand-dark mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
                Jodhpur&apos;s Ranked #1 NEET &amp; JEE Institute
              </h2>
              <div id="about-nirvaan" className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  Nirvaan Career Institute is a coaching institute located in Paota, Jodhpur, Rajasthan, India, established in 2019. It offers preparation coaching for JEE Mains, JEE Advanced, NEET-UG, Class 9–10 Foundation, NTSE, KVPY, and Olympiad exams.
                </p>
                <p>
                  The institute is ranked <strong className="text-brand-primary">#1 for NEET coaching in Jodhpur</strong> by BestCoaching.app and is listed in the Top 10 NEET Coaching Institutes in Jodhpur by Edunews.info, alongside national brands like Allen Career Institute.
                </p>
                <p>
                  Nirvaan Career Institute follows a small-batch teaching model with 3 to 6 lectures per week, each 90 minutes long, with dedicated doubt-clearing sessions. Admissions are based on an entrance assessment (first test then select policy).
                </p>
                <p>
                  Hostel accommodation is available for outstation students. The institute has a 4.5-star rating on Justdial with 86 verified reviews from students and parents.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Founded", value: "2019", sub: "6 years of excellence" },
                { label: "Justdial Rating", value: "4.5★", sub: "86 verified reviews" },
                { label: "Ranking", value: "#1", sub: "NEET Coaching, Jodhpur" },
                { label: "Courses", value: "6+", sub: "JEE · NEET · Foundation" },
              ].map((stat, i) => (
                <div key={i} className="bg-brand-light border border-brand-primary/10 p-6 text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-1" style={{ fontFamily: "var(--font-playfair)" }}>
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-brand-dark uppercase tracking-wide">{stat.label}</div>
                  <div className="text-xs text-neutral-400 mt-0.5">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="py-16 px-4 md:px-8" style={{ background: "linear-gradient(180deg, #F0F4FF 0%, #FFFFFF 100%)" }}>
        <div className="max-w-[1920px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-brand-secondary text-xs font-bold uppercase tracking-widest mb-3">How We Teach</p>
            <h2 className="text-3xl font-bold text-brand-dark" style={{ fontFamily: "var(--font-playfair)" }}>
              Our Methodology
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { step: "01", icon: Users, title: "Entrance Assessment", desc: "Every student appears for an entrance test before joining. 'First test then select' ensures batch quality." },
              { step: "02", icon: BookOpen, title: "Small Batch Placement", desc: "Based on performance, students are placed in the batch that matches their level and target exam." },
              { step: "03", icon: CheckCircle, title: "Structured Lectures", desc: "3–6 lectures per week, 90 minutes each. Interactive classroom — not a one-way lecture dump." },
              { step: "04", icon: BookOpen, title: "MQB Study Material", desc: "Topic-wise Question Banks (MQB-I and MQB-II) cover the complete JEE and NEET syllabus." },
              { step: "05", icon: CheckCircle, title: "Doubt-Clearing Sessions", desc: "Regular dedicated sessions for doubt clearing and topic quizzes to reinforce learning." },
              { step: "06", icon: Award, title: "Mock Tests & Analysis", desc: "Weekly part tests and cumulative mock tests aligned to JEE/NEET exam patterns." },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-neutral-100 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-bold text-neutral-100" style={{ fontFamily: "var(--font-playfair)" }}>
                    {item.step}
                  </span>
                  <div className="w-10 h-10 bg-brand-light flex items-center justify-center">
                    <item.icon size={18} className="text-brand-primary" />
                  </div>
                </div>
                <h3 className="font-bold text-brand-dark text-sm mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rankings */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-[1920px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-brand-secondary text-xs font-bold uppercase tracking-widest mb-3">Verified by Third Parties</p>
            <h2 className="text-3xl font-bold text-brand-dark" style={{ fontFamily: "var(--font-playfair)" }}>
              Our Rankings &amp; Recognition
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { source: "BestCoaching.app", rank: "Rank #1", desc: "NEET Coaching Jodhpur", color: "#F5A623" },
              { source: "Edunews.info", rank: "Top 10", desc: "NEET Coaching Institutes, Jodhpur", color: "#1B3A6B" },
              { source: "InstituteRank.com", rank: "Top Listed", desc: "NEET Coaching Jodhpur", color: "#16A34A" },
              { source: "Justdial", rank: "4.5★", desc: "86 Verified Reviews", color: "#E63946" },
            ].map((r, i) => (
              <div key={i} className="border border-neutral-200 p-6 text-center hover:shadow-md transition-shadow">
                <div className="text-4xl font-bold mb-2" style={{ color: r.color, fontFamily: "var(--font-playfair)" }}>
                  {r.rank}
                </div>
                <div className="font-bold text-brand-dark text-sm mb-1">{r.source}</div>
                <div className="text-xs text-neutral-500">{r.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="py-16 px-4 md:px-8" style={{ background: "linear-gradient(180deg, #F0F4FF 0%, #FFFFFF 100%)" }}>
        <div className="max-w-[1920px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-brand-secondary text-xs font-bold uppercase tracking-widest mb-3">Expert Team</p>
            <h2 className="text-3xl font-bold text-brand-dark" style={{ fontFamily: "var(--font-playfair)" }}>
              Our Faculty
            </h2>
            <p className="text-neutral-500 mt-3 max-w-xl mx-auto">
              Our faculty team is described as &ldquo;magnificent and energetic&rdquo; — experienced educators who genuinely care about each student&apos;s success.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Physics Faculty", qual: "IIT Graduate · 10+ Years Experience", sub: "Mechanics, Electrodynamics, Modern Physics", initial: "P" },
              { name: "Chemistry Faculty", qual: "M.Sc Chemistry · 8+ Years Experience", sub: "Physical, Organic & Inorganic Chemistry", initial: "C" },
              { name: "Biology Faculty", qual: "M.Sc Biology · NEET Expert", sub: "Botany, Zoology, Human Physiology", initial: "B" },
            ].map((f, i) => (
              <div key={i} className="bg-white border border-neutral-200 p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-brand-primary text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
                  {f.initial}
                </div>
                <h3 className="font-bold text-brand-dark mb-1" style={{ fontFamily: "var(--font-playfair)" }}>
                  {f.name}
                </h3>
                <p className="text-xs text-brand-secondary font-semibold mb-2">{f.qual}</p>
                <p className="text-xs text-neutral-400">{f.sub}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-neutral-400 mt-6">
            Faculty details are being updated. Contact us for full faculty profiles.
          </p>
        </div>
      </section>

      {/* Contact info (AEO) */}
      <section id="contact-details" className="py-12 px-4 md:px-8 bg-brand-dark text-white">
        <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
              Start Your JEE / NEET Journey
            </h3>
            <p className="text-white/50 text-sm">Nirvaan Career Institute · Paota, Jodhpur · Est. 2019</p>
          </div>
          <div className="flex gap-4">
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              Enquire Now
            </a>
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
              className="btn-secondary text-sm"
            >
              <Phone size={16} /> {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
