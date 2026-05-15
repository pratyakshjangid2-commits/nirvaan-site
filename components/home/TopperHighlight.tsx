"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Trophy, ArrowRight } from "lucide-react";

const toppers = [
  {
    name: "Arjun Sharma",
    rank: "AIR 2,847",
    exam: "JEE Advanced",
    year: "2025",
    score: "271/360",
    initial: "A",
    color: "#1B3A6B",
  },
  {
    name: "Priya Rathore",
    rank: "AIR 1,203",
    exam: "NEET-UG",
    year: "2025",
    score: "685/720",
    initial: "P",
    color: "#E63946",
  },
  {
    name: "Rahul Parihar",
    rank: "AIR 4,512",
    exam: "JEE Mains",
    year: "2025",
    score: "99.1%ile",
    initial: "R",
    color: "#F5A623",
  },
  {
    name: "Ankita Joshi",
    rank: "AIR 876",
    exam: "NEET-UG",
    year: "2024",
    score: "697/720",
    initial: "A",
    color: "#16A34A",
  },
  {
    name: "Devesh Vyas",
    rank: "AIR 3,201",
    exam: "JEE Advanced",
    year: "2024",
    score: "258/360",
    initial: "D",
    color: "#1B3A6B",
  },
  {
    name: "Meera Choudhary",
    rank: "AIR 2,144",
    exam: "NEET-UG",
    year: "2024",
    score: "692/720",
    initial: "M",
    color: "#E63946",
  },
];

export function TopperHighlight() {
  return (
    <section className="py-20 px-4 md:px-8 bg-white" style={{ fontFamily: "var(--font-inter)" }}>
      <div className="max-w-[1920px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
        >
          <div>
            <p className="text-brand-secondary text-xs font-bold uppercase tracking-widest mb-3">
              Our Achievers
            </p>
            <h2
              className="text-4xl font-bold text-brand-dark"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Toppers &amp; Results
            </h2>
          </div>
          <Link
            href="/results"
            className="flex items-center gap-2 text-brand-primary font-semibold text-sm hover:gap-3 transition-all"
          >
            View All Results <ArrowRight size={16} />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {toppers.map((topper, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border border-neutral-100 p-5 hover:shadow-2xl hover:border-neutral-200 transition-all duration-300 flex items-start gap-4 bg-white"
            >
              {/* Avatar */}
              <div
                className="w-12 h-12 flex items-center justify-center text-white font-bold text-lg shrink-0"
                style={{ backgroundColor: topper.color }}
              >
                {topper.initial}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <Trophy size={12} className="text-brand-secondary" />
                  <span
                    className="text-xs font-bold uppercase tracking-wide"
                    style={{ color: topper.color }}
                  >
                    {topper.exam} {topper.year}
                  </span>
                </div>
                <h3
                  className="font-bold text-brand-dark text-base mb-1 truncate"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {topper.name}
                </h3>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-brand-primary">{topper.rank}</span>
                  <span className="text-xs text-neutral-400">Score: {topper.score}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
