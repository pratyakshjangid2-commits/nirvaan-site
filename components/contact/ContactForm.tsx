"use client";

import { useState } from "react";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";

const formSchema = z.object({
  studentName: z.string().min(2, "Student name is required"),
  parentName: z.string().min(2, "Parent name is required"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  email: z.string().email("Invalid email").or(z.literal("")).optional(),
  targetClass: z.string().min(1, "Please select a class"),
  targetExam: z.string().min(1, "Please select a target exam"),
  city: z.string().min(2, "City is required"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      studentName: "",
      parentName: "",
      phone: "",
      email: "",
      targetClass: "",
      targetExam: "",
      city: "",
      message: "",
    },
  });

  const onSubmit = (data: FormData) => {
    const course = data.targetExam || "JEE/NEET";
    const msg = encodeURIComponent(
      `Hi! My name is ${data.parentName}, parent of ${data.studentName} (Class ${data.targetClass}, from ${data.city}).\n\nWe're interested in ${course} coaching at Nirvaan Career Institute.\n\nContact: ${data.phone}${data.message ? `\n\nMessage: ${data.message}` : ""}`
    );
    const link = `https://wa.me/917737383958?text=${msg}`;
    window.open(link, "_blank");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="border border-green-200 bg-green-50 p-8 text-center"
      >
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
          className="w-16 h-16 bg-green-100 flex items-center justify-center mx-auto mb-4 rounded-full"
        >
          <Send size={24} className="text-green-600" />
        </motion.div>
        <h3 className="text-xl font-bold text-green-800 mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
          Enquiry Sent!
        </h3>
        <p className="text-green-700 text-sm mb-4">
          WhatsApp has opened with your enquiry. We&apos;ll respond shortly.
        </p>
        <button
          onClick={() => { setSubmitted(false); reset(); }}
          className="text-sm text-green-600 underline hover:text-green-800 transition-colors"
        >
          Submit another enquiry
        </button>
      </motion.div>
    );
  }

  return (
    <motion.form 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      onSubmit={handleSubmit(onSubmit)} 
      className="space-y-5" 
      noValidate
    >
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold text-neutral-600 uppercase tracking-wide mb-2">
            Student Name *
          </label>
          <input
            {...register("studentName")}
            type="text"
            placeholder="Enter student's full name"
            className={`w-full border ${errors.studentName ? "border-red-400" : "border-neutral-200"} px-4 py-3 text-sm focus:outline-none focus:border-brand-primary transition-colors bg-white/50 focus:bg-white`}
          />
          {errors.studentName && <p className="text-xs text-red-500 mt-1">{errors.studentName.message}</p>}
        </div>
        <div>
          <label className="block text-xs font-semibold text-neutral-600 uppercase tracking-wide mb-2">
            Parent / Guardian Name *
          </label>
          <input
            {...register("parentName")}
            type="text"
            placeholder="Father's / Mother's name"
            className={`w-full border ${errors.parentName ? "border-red-400" : "border-neutral-200"} px-4 py-3 text-sm focus:outline-none focus:border-brand-primary transition-colors bg-white/50 focus:bg-white`}
          />
          {errors.parentName && <p className="text-xs text-red-500 mt-1">{errors.parentName.message}</p>}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold text-neutral-600 uppercase tracking-wide mb-2">
            Mobile Number *
          </label>
          <input
            {...register("phone")}
            type="tel"
            placeholder="10-digit mobile number"
            maxLength={10}
            className={`w-full border ${errors.phone ? "border-red-400" : "border-neutral-200"} px-4 py-3 text-sm focus:outline-none focus:border-brand-primary transition-colors bg-white/50 focus:bg-white`}
          />
          {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
        </div>
        <div>
          <label className="block text-xs font-semibold text-neutral-600 uppercase tracking-wide mb-2">
            Email (Optional)
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="your@email.com"
            className={`w-full border ${errors.email ? "border-red-400" : "border-neutral-200"} px-4 py-3 text-sm focus:outline-none focus:border-brand-primary transition-colors bg-white/50 focus:bg-white`}
          />
          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold text-neutral-600 uppercase tracking-wide mb-2">
            Current Class *
          </label>
          <select
            {...register("targetClass")}
            className={`w-full border ${errors.targetClass ? "border-red-400" : "border-neutral-200"} px-4 py-3 text-sm focus:outline-none focus:border-brand-primary transition-colors bg-white/50 focus:bg-white cursor-pointer`}
          >
            <option value="">Select class</option>
            {["6", "7", "8", "9", "10", "11", "12", "Dropper"].map(c => (
              <option key={c} value={c}>Class {c}</option>
            ))}
          </select>
          {errors.targetClass && <p className="text-xs text-red-500 mt-1">{errors.targetClass.message}</p>}
        </div>
        <div>
          <label className="block text-xs font-semibold text-neutral-600 uppercase tracking-wide mb-2">
            Target Exam *
          </label>
          <select
            {...register("targetExam")}
            className={`w-full border ${errors.targetExam ? "border-red-400" : "border-neutral-200"} px-4 py-3 text-sm focus:outline-none focus:border-brand-primary transition-colors bg-white/50 focus:bg-white cursor-pointer`}
          >
            <option value="">Select exam</option>
            <option>JEE Mains & Advanced</option>
            <option>NEET-UG</option>
            <option>Foundation (Class 9–10)</option>
            <option>Olympiad / NTSE / KVPY</option>
          </select>
          {errors.targetExam && <p className="text-xs text-red-500 mt-1">{errors.targetExam.message}</p>}
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-neutral-600 uppercase tracking-wide mb-2">
          City / District *
        </label>
        <input
          {...register("city")}
          type="text"
          placeholder="e.g. Jodhpur, Barmer, Jaisalmer, Nagaur"
          className={`w-full border ${errors.city ? "border-red-400" : "border-neutral-200"} px-4 py-3 text-sm focus:outline-none focus:border-brand-primary transition-colors bg-white/50 focus:bg-white`}
        />
        {errors.city && <p className="text-xs text-red-500 mt-1">{errors.city.message}</p>}
      </div>

      <div>
        <label className="block text-xs font-semibold text-neutral-600 uppercase tracking-wide mb-2">
          Additional Message (Optional)
        </label>
        <textarea
          {...register("message")}
          placeholder="Any specific questions, hostel requirement, etc."
          rows={4}
          className="w-full border border-neutral-200 px-4 py-3 text-sm focus:outline-none focus:border-brand-primary transition-colors resize-none bg-white/50 focus:bg-white"
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full justify-center py-4 text-base relative overflow-hidden"
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          <Send size={18} /> {isSubmitting ? "Opening WhatsApp..." : "Send Enquiry via WhatsApp"}
        </span>
      </motion.button>

      <p className="text-xs text-neutral-400 text-center mt-4">
        Clicking &ldquo;Send Enquiry&rdquo; will open WhatsApp with your details pre-filled. We respond within hours.
      </p>
    </motion.form>
  );
}
