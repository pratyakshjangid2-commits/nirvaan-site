"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { PHONE_NUMBER, buildWhatsAppLink } from "@/lib/whatsapp";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Courses",
    href: "/courses",
    children: [
      { label: "JEE Mains & Advanced", href: "/courses/jee" },
      { label: "NEET-UG", href: "/courses/neet" },
      { label: "Foundation & Olympiad", href: "/courses/foundation" },
    ],
  },
  { label: "Results", href: "/results" },
  { label: "About", href: "/about" },
  { label: "Hostel", href: "/hostel" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-brand-dark/80 backdrop-blur-xl border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">
        {/* Aesthetic Logo */}
        <Link href="/" className="flex flex-col leading-none group">
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

        {/* Strategic Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.href} className="relative group">
                <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-white transition-all">
                  {link.label} <ChevronDown size={12} className="text-brand-secondary" />
                </button>
                <div className="absolute top-full left-[-20px] mt-6 w-64 bg-brand-dark border border-white/5 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 z-50 p-4">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-3 text-xs font-bold text-white/40 hover:text-white hover:bg-white/[0.03] transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-white transition-all"
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Elite CTA */}
        <div className="hidden lg:flex items-center gap-8">
          <a
            href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
            className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-white transition-all"
          >
            {PHONE_NUMBER}
          </a>
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            className="bg-brand-secondary text-brand-dark font-black px-8 py-3 text-[10px] uppercase tracking-[0.2em] rounded-sm hover:scale-105 transition-all shadow-[0_10px_20px_-5px_rgba(245,166,35,0.3)]"
          >
            Enroll Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Aesthetic Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-brand-dark min-h-screen fixed inset-0 z-50 p-8 flex flex-col justify-center">
          <button 
             className="absolute top-8 right-8 text-white"
             onClick={() => setMobileOpen(false)}
          >
             <X size={32} />
          </button>
          
          <div className="space-y-8">
            {navLinks.map((link) => (
               <Link
                  key={link.href}
                  href={link.href}
                  className="block text-4xl font-medium text-white tracking-tighter hover:text-brand-secondary transition-colors"
                  style={{ fontFamily: "var(--font-playfair)" }}
                  onClick={() => setMobileOpen(false)}
               >
                  {link.label}
               </Link>
            ))}
          </div>

          <div className="mt-16 space-y-6">
             <a
                href={buildWhatsAppLink()}
                target="_blank"
                className="block text-center bg-brand-secondary text-brand-dark font-black py-5 uppercase tracking-[0.2em] text-xs"
             >
                Enquire Now
             </a>
             <a
                href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
                className="block text-center border border-white/10 text-white font-black py-5 uppercase tracking-[0.2em] text-xs"
             >
                {PHONE_NUMBER}
             </a>
          </div>
        </div>
      )}
    </header>
  );
}

