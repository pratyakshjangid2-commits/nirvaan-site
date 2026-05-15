"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Bell, Loader2, CheckCircle2 } from "lucide-react";

export function InquiryPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const dismissed = sessionStorage.getItem("inquiry_popup_dismissed");
      if (!dismissed) {
        setIsVisible(true);
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem("inquiry_popup_dismissed", "true");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType: "Popup Inquiry", ...data }),
      });

      if (response.ok) {
        setIsSuccess(true);
        sessionStorage.setItem("inquiry_popup_dismissed", "true");
      }
    } catch (error) {
      console.error("Popup submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-brand-navy/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="w-full max-w-lg bg-white shadow-2xl relative overflow-hidden"
          >
            <div className="h-2 bg-brand-secondary" />
            
            <button 
              onClick={handleDismiss}
              className="absolute top-6 right-6 text-neutral-300 hover:text-brand-navy transition-colors"
            >
              <X size={24} />
            </button>

            <div className="p-10 md:p-12">
               {isSuccess ? (
                 <div className="text-center py-12">
                   <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                     <CheckCircle2 className="text-green-500" size={40} />
                   </div>
                   <h3 className="text-2xl font-bold text-brand-navy mb-2" style={{ fontFamily: "var(--font-playfair)" }}>Registration Successful!</h3>
                   <p className="text-neutral-500 text-sm mb-8">Our counselor will call you shortly to confirm your demo slot.</p>
                   <button onClick={handleDismiss} className="bg-brand-navy text-white px-8 py-3 rounded-sm text-xs font-black uppercase tracking-widest hover:bg-brand-secondary transition-colors">Close</button>
                 </div>
               ) : (
                 <>
                   <div className="flex items-center gap-4 mb-8">
                     <div className="w-12 h-12 bg-brand-secondary/10 flex items-center justify-center rounded-sm">
                        <Bell size={24} className="text-brand-secondary animate-bounce" />
                     </div>
                     <div>
                       <h3 className="text-2xl font-bold text-brand-navy leading-none" style={{ fontFamily: "var(--font-playfair)" }}>Get Free Counselling</h3>
                       <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest mt-2">Limited Slots Available for 2026</p>
                     </div>
                   </div>

                   <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-[10px] font-black uppercase text-brand-navy/60">Student Name</label>
                          <input 
                            name="studentName"
                            type="text" 
                            placeholder="e.g. Rahul Sharma"
                            className="w-full p-4 bg-neutral-50 border border-neutral-100 outline-none focus:border-brand-secondary transition-colors text-sm font-light"
                            required
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] font-black uppercase text-brand-navy/60">Parent Name</label>
                          <input 
                            name="parentName"
                            type="text" 
                            placeholder="e.g. Mr. Sharma"
                            className="w-full p-4 bg-neutral-50 border border-neutral-100 outline-none focus:border-brand-secondary transition-colors text-sm font-light"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-black uppercase text-brand-navy/60">WhatsApp Number</label>
                        <input 
                          name="phone"
                          type="tel" 
                          placeholder="10-digit mobile number"
                          className="w-full p-4 bg-neutral-50 border border-neutral-100 outline-none focus:border-brand-secondary transition-colors text-sm font-light"
                          required
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-[10px] font-black uppercase text-brand-navy/60">Current Class</label>
                          <select name="class" className="w-full p-4 bg-neutral-50 border border-neutral-100 outline-none focus:border-brand-secondary transition-colors text-sm font-light appearance-none cursor-pointer" required>
                            <option value="">Select Class</option>
                            <option>Class 9th</option>
                            <option>Class 10th</option>
                            <option>Class 11th</option>
                            <option>Class 12th</option>
                            <option>Class 12th Pass</option>
                          </select>
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] font-black uppercase text-brand-navy/60">Target Exam</label>
                          <select name="exam" className="w-full p-4 bg-neutral-50 border border-neutral-100 outline-none focus:border-brand-secondary transition-colors text-sm font-light appearance-none cursor-pointer" required>
                            <option value="">Select Exam</option>
                            <option>NEET-UG</option>
                            <option>IIT-JEE</option>
                            <option>Foundation</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-black uppercase text-brand-navy/60">Current School</label>
                        <input 
                          name="school"
                          type="text" 
                          placeholder="School name & city"
                          className="w-full p-4 bg-neutral-50 border border-neutral-100 outline-none focus:border-brand-secondary transition-colors text-sm font-light"
                          required
                        />
                      </div>

                      <button 
                        disabled={isSubmitting}
                        type="submit"
                        className="w-full py-5 bg-brand-navy text-white font-black text-[10px] uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-brand-secondary hover:text-brand-navy transition-all shadow-premium mt-6 disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <>Processing <Loader2 size={14} className="animate-spin" /></>
                        ) : (
                          <>Confirm Registration <Send size={14} /></>
                        )}
                      </button>
                   </form>
                 </>
               )}

               <p className="text-center mt-8 text-[10px] text-neutral-400 font-bold uppercase tracking-widest">
                  Secure your academic future today
               </p>
            </div>

            <div className="absolute bottom-0 right-0 w-32 h-32 bg-brand-secondary/5 skew-x-[-15deg] translate-x-1/2 translate-y-1/2 pointer-events-none" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
