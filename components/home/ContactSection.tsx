"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, MessageCircle, Clock, CheckCircle2, Loader2 } from "lucide-react";
import { PHONE_NUMBER, buildWhatsAppLink } from "@/lib/whatsapp";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType: "Inquiry", ...data }),
      });

      if (response.ok) {
        setIsSuccess(true);
        e.currentTarget.reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to connect to the server.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-12 lg:px-24 bg-neutral-50 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* Left: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-secondary text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">
              Contact & Admissions
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-8 leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
              Begin your <span className="italic text-brand-secondary">Journey</span> <br />with Us today.
            </h2>
            <p className="text-neutral-500 font-light leading-relaxed mb-12 max-w-md">
              Whether you have a query about our courses, scholarship programs, or 
              want to book a free demo class, our team is ready to assist you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-brand-navy rounded-sm flex items-center justify-center text-brand-secondary shrink-0 shadow-lg">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-brand-navy mb-1">Campus Address</h4>
                  <p className="text-sm text-neutral-500 font-light leading-relaxed">
                    Nirvaan Career Institute, Main Road,<br />
                    Paota Chauraha, Near BSNL Office,<br />
                    Jodhpur, Rajasthan 342006
                  </p>
                  <a href="https://maps.google.com" target="_blank" className="text-[10px] font-black text-brand-secondary uppercase tracking-widest mt-2 block hover:underline">View on Google Maps</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-brand-navy rounded-sm flex items-center justify-center text-brand-secondary shrink-0 shadow-lg">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-brand-navy mb-1">Direct Inquiries</h4>
                  <p className="text-sm text-neutral-500 font-light leading-relaxed">
                    {PHONE_NUMBER}<br />
                    Available 9:00 AM — 7:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-brand-navy rounded-sm flex items-center justify-center text-brand-secondary shrink-0 shadow-lg">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-brand-navy mb-1">Email Support</h4>
                  <p className="text-sm text-neutral-500 font-light leading-relaxed">
                    admissions@nirvaan.edu.in<br />
                    info@nirvaancareer.com
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
               <a 
                 href={buildWhatsAppLink()}
                 target="_blank"
                 className="flex items-center gap-3 px-6 py-3 bg-green-50 text-green-600 rounded-sm font-bold text-xs uppercase tracking-widest hover:bg-green-100 transition-colors"
               >
                 <MessageCircle size={16} /> WhatsApp Us
               </a>
               <div className="flex items-center gap-2 px-6 py-3 bg-neutral-100 text-neutral-400 rounded-sm font-bold text-xs uppercase tracking-widest">
                 <Clock size={16} /> Mon — Sat
               </div>
            </div>
          </motion.div>

          {/* Right: Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-10 md:p-16 border border-neutral-200 shadow-2xl relative"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-secondary/5 skew-x-[-15deg] translate-x-1/2" />
            
            <h3 className="text-2xl font-bold text-brand-navy mb-2" style={{ fontFamily: "var(--font-playfair)" }}>Detailed Inquiry</h3>
            <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest mb-10">Qualify for a free demo session</p>

            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="text-green-500" size={40} />
                </div>
                <h4 className="text-xl font-bold text-brand-navy mb-2" style={{ fontFamily: "var(--font-playfair)" }}>Inquiry Received!</h4>
                <p className="text-neutral-500 text-sm mb-8">Our admissions team will contact you within the next 2 hours.</p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="text-[10px] font-black text-brand-secondary uppercase tracking-widest border-b-2 border-brand-secondary pb-1"
                >
                  Send another inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-brand-navy">Student Name</label>
                    <input 
                      name="studentName"
                      type="text" 
                      placeholder="Enter student name"
                      className="w-full p-4 bg-neutral-50 border border-neutral-100 focus:border-brand-secondary outline-none transition-colors text-sm font-light"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-brand-navy">Parent Name</label>
                    <input 
                      name="parentName"
                      type="text" 
                      placeholder="Enter parent name"
                      className="w-full p-4 bg-neutral-50 border border-neutral-100 focus:border-brand-secondary outline-none transition-colors text-sm font-light"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-brand-navy">WhatsApp Number</label>
                    <input 
                      name="phone"
                      type="tel" 
                      placeholder="10-digit mobile"
                      className="w-full p-4 bg-neutral-50 border border-neutral-100 focus:border-brand-secondary outline-none transition-colors text-sm font-light"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-brand-navy">Current Class</label>
                    <select name="class" className="w-full p-4 bg-neutral-50 border border-neutral-100 focus:border-brand-secondary outline-none transition-colors text-sm font-light appearance-none cursor-pointer" required>
                      <option value="">Select Class</option>
                      <option>Class 9th</option>
                      <option>Class 10th</option>
                      <option>Class 11th</option>
                      <option>Class 12th</option>
                      <option>Class 12th Pass</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-brand-navy">Interested Course</label>
                  <select name="course" className="w-full p-4 bg-neutral-50 border border-neutral-100 focus:border-brand-secondary outline-none transition-colors text-sm font-light appearance-none cursor-pointer" required>
                    <option value="">Select Course</option>
                    <option>NEET-UG Preparation</option>
                    <option>IIT-JEE Main & Advanced</option>
                    <option>Foundation (Pre-Medical/Eng.)</option>
                    <option>Scholarship Program (NTS)</option>
                  </select>
                </div>

                <button 
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full py-5 bg-brand-navy text-white font-black text-[10px] uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-brand-secondary hover:text-brand-navy transition-all shadow-premium disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>Processing <Loader2 size={14} className="animate-spin" /></>
                  ) : (
                    <>Book My Free Demo <Send size={14} /></>
                  )}
                </button>
              </form>
            )}

            {/* Trust Signal */}
            <div className="mt-8 flex items-center justify-center gap-2 text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
               <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
               Your data is protected and private
            </div>
          </motion.div>
        </div>

        {/* Map Placeholder / Institutional Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 h-96 w-full bg-brand-navy relative overflow-hidden group"
        >
          <img 
            src="https://images.unsplash.com/photo-1541339907198-e08756c83f2d?q=80&w=2070"
            alt="Campus Map Location"
            className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-12 bg-white/10 backdrop-blur-md border border-white/20">
               <MapPin size={48} className="text-brand-secondary mx-auto mb-4" />
               <h4 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-playfair)" }}>Visit Our Paota Campus</h4>
               <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-6">Open Mon-Sat · 9 AM to 7 PM</p>
               <a 
                 href="https://maps.google.com" 
                 target="_blank"
                 className="px-8 py-3 bg-brand-secondary text-brand-navy font-black text-[10px] uppercase tracking-widest hover:bg-white transition-colors"
               >
                 Get Directions on Google Maps
               </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
