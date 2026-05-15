"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How do I enroll in a course at Nirvaan?",
    answer: "Enrollment begins with a free counselling session followed by our mandatory entrance assessment. Based on the assessment results, we recommend the most suitable batch for the student."
  },
  {
    question: "What is the average batch size at your institute?",
    answer: "We maintain a boutique model of education. Our batches typically range from 20-35 students to ensure that every individual receives personalized attention from the faculty."
  },
  {
    question: "Do you provide study material for NEET and JEE?",
    answer: "Yes, we provide our proprietary MQB (Meticulous Question Bank) series, which covers the complete NCERT syllabus along with advanced application-based problems for competitive exams."
  },
  {
    question: "What are the timings for doubt-clearing sessions?",
    answer: "Doubt-clearing sessions are held daily after regular lectures. Students can also book 1-on-1 slots with specific subject experts via our student portal."
  },
  {
    question: "Is there a hostel facility for outstation students?",
    answer: "Yes, we have a dedicated hostel facility located within walking distance of the campus. It provides a safe, focused environment with nutritious meals and 24/7 security."
  },
  {
    question: "How do you track and report student progress to parents?",
    answer: "We have a robust reporting system. Parents receive real-time SMS alerts for attendance and detailed performance analytics after every weekly mock test."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto relative z-10">
        
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-secondary text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">
              Support Center
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
              Frequently Asked <span className="italic text-brand-secondary">Questions</span>.
            </h2>
          </motion.div>
          <div className="flex items-center gap-3 text-brand-navy opacity-40">
             <HelpCircle size={18} />
             <span className="text-[10px] font-black uppercase tracking-widest">Student Support</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-4">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className={`border rounded-sm transition-all duration-300 ${openIndex === i ? 'border-brand-secondary shadow-lg bg-neutral-50/50' : 'border-neutral-100 bg-white hover:border-neutral-300'}`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full p-8 flex items-center justify-between text-left"
                >
                  <span className={`text-lg font-bold transition-colors ${openIndex === i ? 'text-brand-navy' : 'text-neutral-600'}`}>
                    {faq.question}
                  </span>
                  <div className={`shrink-0 ml-4 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}>
                    {openIndex === i ? (
                      <Minus size={20} className="text-brand-secondary" />
                    ) : (
                      <Plus size={20} className="text-neutral-300" />
                    )}
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-8 pt-0 text-neutral-500 font-light leading-relaxed border-t border-neutral-100 mt-2">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-32 p-10 bg-brand-navy text-white rounded-sm relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 skew-x-[-15deg] translate-x-1/2" />
               <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-playfair)" }}>Still have questions?</h3>
               <p className="text-white/40 text-sm font-light mb-10 leading-relaxed">
                 If you can't find the answer you're looking for, our admissions team is here to help.
               </p>
               <div className="space-y-6">
                 <a href="tel:+917737383958" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 border border-white/20 flex items-center justify-center text-brand-secondary group-hover:bg-brand-secondary group-hover:text-brand-navy transition-all">
                      <HelpCircle size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase text-white/20">Call us at</p>
                      <p className="text-sm font-bold">+91 7737383958</p>
                    </div>
                 </a>
                 <div className="h-[1px] w-full bg-white/5" />
                 <a href="/contact" className="w-full py-4 bg-brand-secondary text-brand-navy font-black text-[10px] uppercase tracking-widest text-center hover:bg-white transition-colors flex items-center justify-center gap-2">
                   Contact Support
                 </a>
               </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
