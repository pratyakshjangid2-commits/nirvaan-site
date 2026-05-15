"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown, ShieldCheck, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PHONE_NUMBER, buildWhatsAppLink } from "@/lib/whatsapp";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Academic Programs",
    href: "/courses",
    children: [
      { label: "NEET-UG Preparation", href: "/courses/neet" },
      { label: "IIT-JEE Main & Advanced", href: "/courses/jee" },
      { label: "Foundation (Class 9-10)", href: "/courses/foundation" },
      { label: "Scholarship Program", href: "/contact" },
    ],
  },
  { label: "Toppers & Results", href: "/results" },
  { label: "About Institute", href: "/about" },
  { label: "Hostel Facility", href: "/hostel" },
  { label: "Contact Us", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.height = "auto";
    }
    return () => { 
      document.body.style.overflow = "unset";
      document.body.style.height = "auto";
    };
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100]">
      {/* Institutional Top Bar */}
      <div className={`bg-brand-navy border-b border-white/5 transition-all duration-300 ${scrolled ? 'h-0 opacity-0 invisible' : 'py-2 opacity-100 visible'}`}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-[10px] font-black text-white/40 uppercase tracking-widest">
              <ShieldCheck size={12} className="text-brand-secondary" />
              Ranked #1 in Jodhpur
            </div>
          </div>
          <div className="flex items-center gap-6">
             <a href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`} className="text-[10px] font-black text-white/60 hover:text-brand-secondary transition-colors uppercase tracking-[0.2em]">
               {PHONE_NUMBER}
             </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`transition-all duration-500 ${
        scrolled 
          ? "bg-brand-navy/95 backdrop-blur-xl border-b border-white/5 py-3 shadow-2xl" 
          : "bg-transparent py-6"
      }`}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo Area */}
          <Link href="/" className="flex flex-col leading-none group relative z-[110]">
            <span
              className="text-2xl font-bold text-white tracking-tighter group-hover:text-brand-secondary transition-colors duration-500"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Nirvaan
            </span>
            <span className="text-[10px] font-black text-brand-secondary uppercase tracking-[0.3em] mt-1">
              Career Institute
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] font-black uppercase tracking-[0.2em] text-white/60 hover:text-white transition-all py-2"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-4 relative z-[110]">
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              className="hidden sm:block bg-brand-secondary text-brand-navy font-black px-6 py-2.5 text-[10px] uppercase tracking-[0.2em] rounded-sm hover:translate-y-[-2px] transition-all shadow-premium"
            >
              Enroll Now
            </a>

            {/* Mobile toggle */}
            <button
              className="lg:hidden text-white p-2 focus:outline-none"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Institutional Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="lg:hidden bg-brand-navy fixed inset-0 z-[105] flex flex-col p-8 pt-32 h-screen w-screen overflow-y-auto overflow-x-hidden"
          >
            <div className="flex flex-col space-y-8">
              {navLinks.map((link) => (
                 <Link
                    key={link.href}
                    href={link.href}
                    className="text-4xl font-bold text-white tracking-tighter hover:text-brand-secondary transition-colors"
                    style={{ fontFamily: "var(--font-playfair)" }}
                    onClick={() => setMobileOpen(false)}
                 >
                    {link.label}
                 </Link>
              ))}
            </div>

            <div className="mt-auto pt-16 space-y-6">
               <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  className="block text-center bg-brand-secondary text-brand-navy font-black py-5 uppercase tracking-[0.2em] text-xs shadow-premium"
               >
                  Book Free Counselling
               </a>
               <div className="flex justify-center gap-8 opacity-20 grayscale pb-8">
                 {['IG', 'FB', 'YT'].map((p) => (
                   <span key={p} className="text-[10px] font-black text-white uppercase tracking-widest">{p}</span>
                 ))}
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}




