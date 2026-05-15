import { Home, MapPin, CheckCircle, MessageCircle } from "lucide-react";
import { buildWhatsAppLink, PHONE_NUMBER } from "@/lib/whatsapp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hostel for JEE & NEET Students in Jodhpur | Nirvaan Career Institute",
  description:
    "Hostel accommodation available for outstation JEE and NEET students at Nirvaan Career Institute, Paota, Jodhpur. Safe, clean, study-focused environment.",
};

export default function HostelPage() {
  return (
    <div style={{ fontFamily: "var(--font-inter)" }}>
      <div
        className="py-24 px-4 md:px-8 text-white"
        style={{ background: "linear-gradient(135deg, #0D1B2A 0%, #1B3A6B 100%)" }}
      >
        <div className="max-w-[1920px] mx-auto pt-16">
          <p className="text-brand-secondary text-xs font-bold uppercase tracking-widest mb-3">Accommodation</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
            Hostel Facility for<br />
            <span className="text-brand-secondary italic">JEE &amp; NEET Students</span>
          </h1>
          <p className="text-white/60 max-w-xl">
            Outstation students can focus entirely on their preparation. Nirvaan provides safe, comfortable hostel accommodation in Jodhpur — walking distance from the institute.
          </p>
        </div>
      </div>

      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl font-bold text-brand-dark mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
                  Why Hostel Matters for NEET/JEE
                </h2>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  Students who live in a focused study environment perform significantly better in competitive exams. Daily commuting — especially from distant cities — eats into precious study hours and mental energy.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  Nirvaan&apos;s hostel ensures you&apos;re five minutes from class, eating well, and in a community of equally motivated peers. It&apos;s the environment that separates good preparation from great preparation.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-dark mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
                  Hostel Facilities
                </h2>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Clean, well-maintained rooms",
                    "Regular meals (veg)",
                    "Proximity to coaching centre",
                    "Safe & secure premises",
                    "Study room / reading area",
                    "WiFi connectivity",
                    "24/7 staff presence",
                    "Separate boys & girls blocks",
                    "Regular housekeeping",
                    "Medical assistance available",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 py-2 border-b border-neutral-100">
                      <CheckCircle size={16} className="text-green-500 shrink-0" />
                      <span className="text-sm text-neutral-600">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-neutral-400 mt-4">
                  * Facility details subject to confirmation. Contact us for the latest hostel information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-dark mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
                  Location
                </h2>
                <div className="bg-brand-light border border-brand-primary/10 p-5 flex items-start gap-4">
                  <MapPin size={20} className="text-brand-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-brand-dark">Paota, Jodhpur, Rajasthan</p>
                    <p className="text-sm text-neutral-500 mt-1">
                      The hostel is located in close proximity to the coaching centre in Paota. Outstation students coming from Barmer, Jaisalmer, Nagaur, Pali, and other districts of Rajasthan find this especially convenient.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="sticky top-24 bg-brand-primary p-6 text-white">
                <Home size={28} className="text-brand-secondary mb-4" />
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                  Book Hostel Accommodation
                </h3>
                <p className="text-white/60 text-sm mb-6">
                  Limited hostel seats available. Contact us early to secure accommodation.
                </p>
                <div className="space-y-3">
                  <a
                    href={buildWhatsAppLink({ course: "Hostel Accommodation" })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 w-full transition-colors"
                  >
                    <MessageCircle size={18} /> Enquire on WhatsApp
                  </a>
                  <a
                    href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
                    className="flex items-center justify-center border-2 border-white/30 hover:border-white text-white font-semibold py-3 px-6 w-full transition-colors text-sm"
                  >
                    {PHONE_NUMBER}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
