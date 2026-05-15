import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { PHONE_NUMBER } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white border-t border-white/5">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24">
        
        {/* Brand Identity */}
        <div className="lg:col-span-1">
          <Link href="/" className="flex flex-col mb-8 leading-none">
            <span
              className="text-2xl font-bold text-white tracking-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Nirvaan
            </span>
            <span className="text-[10px] font-black text-brand-secondary uppercase tracking-[0.3em] mt-1">
              Career Institute
            </span>
          </Link>
          <p className="text-white/40 text-sm font-light leading-relaxed mb-8 max-w-xs">
            Jodhpur&apos;s elite sanctuary for JEE and NEET preparation. We specialize 
            in high-performance mentorship for serious academic aspirants.
          </p>
          <div className="flex gap-4">
            {['IG', 'FB', 'YT'].map((platform) => (
              <a
                key={platform}
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-white/10 text-white/40 hover:text-brand-secondary hover:border-brand-secondary transition-all text-[10px] font-black"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>

        {/* Institutional Links */}
        <div>
          <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-8">
            Institution
          </h4>
          <ul className="space-y-4">
            {[
              { label: "Our Story", href: "/about" },
              { label: "Academic Results", href: "/results" },
              { label: "Hostel Facility", href: "/hostel" },
              { label: "Admissions", href: "/contact" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/40 font-light hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Academic Programs */}
        <div>
          <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-8">
            Academic Programs
          </h4>
          <ul className="space-y-4">
            {[
              { label: "JEE Advanced", href: "/courses/jee" },
              { label: "NEET Medical", href: "/courses/neet" },
              { label: "Foundation (9-10)", href: "/courses/foundation" },
              { label: "Olympiad / NTSE", href: "/courses/foundation" },
            ].map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-white/40 font-light hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Strategic Contact */}
        <div>
          <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-8">
            Connect
          </h4>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <MapPin size={16} className="text-brand-secondary mt-1 shrink-0" />
              <span className="text-sm text-white/40 font-light leading-relaxed">
                Paota, Jodhpur<br />Rajasthan 342006
              </span>
            </li>
            <li className="flex items-center gap-4">
              <Phone size={16} className="text-brand-secondary shrink-0" />
              <a
                href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
                className="text-sm text-white/40 font-light hover:text-white transition-colors"
              >
                {PHONE_NUMBER}
              </a>
            </li>
            <li className="flex items-center gap-4">
              <Mail size={16} className="text-brand-secondary shrink-0" />
              <a
                href="mailto:nirvaaniitaiims@gmail.com"
                className="text-sm text-white/40 font-light hover:text-white transition-colors"
              >
                nirvaaniitaiims@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Legacy Bar */}
      <div className="border-t border-white/5 py-8">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p>© 2026 Nirvaan Career Institute. Established 2019.</p>
            <a 
              href="https://www.linkedin.com/in/pratyakshjangid/" 
              target="_blank" 
              className="text-white/40 hover:text-brand-secondary transition-colors"
            >
              Developed & Designed by <span className="text-white">Pratyaksh</span>
            </a>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Admission</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

