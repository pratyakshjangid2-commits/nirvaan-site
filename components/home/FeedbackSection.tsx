"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Send, Loader2, CheckCircle2, MessageSquare } from "lucide-react";

export function FeedbackSection() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (rating === 0) {
      alert("Please select a star rating.");
      return;
    }
    
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const data = {
      ...Object.fromEntries(formData.entries()),
      rating,
      formType: "Feedback"
    };

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
        e.currentTarget.reset();
        setRating(0);
      }
    } catch (error) {
      console.error("Feedback submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-brand-navy relative overflow-hidden text-white">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-secondary/5 skew-x-[-12deg] translate-x-1/4 pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <span className="text-brand-secondary text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">
              Continuous Improvement
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
              Share Your <span className="italic text-brand-secondary">Experience</span> <br />with Us.
            </h2>
            <p className="text-white/40 text-lg font-light leading-relaxed mb-8 max-w-md">
              Your feedback helps us maintain the highest standards of academic 
              excellence. Whether you are a student or a parent, we value your thoughts.
            </p>
            
            <div className="flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-sm">
               <MessageSquare className="text-brand-secondary" />
               <p className="text-xs font-medium text-white/60 italic">
                 "Direct feedback is reviewed by the institutional heads to ensure 
                 immediate action on academic and infrastructure concerns."
               </p>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 shadow-2xl relative">
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="text-green-500" size={32} />
                </div>
                <h4 className="text-xl font-bold text-brand-navy mb-2" style={{ fontFamily: "var(--font-playfair)" }}>Thank You!</h4>
                <p className="text-neutral-500 text-sm mb-6">Your valuable feedback has been recorded.</p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="text-[10px] font-black text-brand-secondary uppercase tracking-widest border-b-2 border-brand-secondary pb-1"
                >
                  Submit more feedback
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-3 text-center lg:text-left">
                  <label className="text-[10px] font-black uppercase tracking-widest text-brand-navy block">Overall Rating</label>
                  <div className="flex gap-2 justify-center lg:justify-start">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHover(star)}
                        onMouseLeave={() => setHover(0)}
                        className="transition-transform hover:scale-110 focus:outline-none"
                      >
                        <Star 
                          size={28} 
                          className={`${(hover || rating) >= star ? 'text-brand-secondary fill-brand-secondary' : 'text-neutral-200'}`} 
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-brand-navy">Your Name</label>
                    <input 
                      name="name"
                      type="text" 
                      placeholder="Full name"
                      className="w-full p-4 bg-neutral-50 border border-neutral-100 text-brand-navy focus:border-brand-secondary outline-none transition-colors text-sm font-light"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-brand-navy">Role</label>
                    <select name="role" className="w-full p-4 bg-neutral-50 border border-neutral-100 text-brand-navy focus:border-brand-secondary outline-none transition-colors text-sm font-light appearance-none cursor-pointer" required>
                      <option value="Student">Student</option>
                      <option value="Parent">Parent</option>
                      <option value="Alumnus">Alumnus</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-brand-navy">Feedback Message</label>
                  <textarea 
                    name="message"
                    rows={4}
                    placeholder="Tell us about your experience..."
                    className="w-full p-4 bg-neutral-50 border border-neutral-100 text-brand-navy focus:border-brand-secondary outline-none transition-colors text-sm font-light resize-none"
                    required
                  />
                </div>

                <button 
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full py-5 bg-brand-navy text-white font-black text-[10px] uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-brand-secondary hover:text-brand-navy transition-all shadow-premium"
                >
                  {isSubmitting ? (
                    <>Submitting <Loader2 size={14} className="animate-spin" /></>
                  ) : (
                    <>Submit Feedback <Send size={14} /></>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
