import { ContactForm } from "@/components/contact/ContactForm";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { PHONE_NUMBER, buildWhatsAppLink } from "@/lib/whatsapp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Admissions | Nirvaan Career Institute | +91 7737383958",
  description:
    "Enquire about admissions at Nirvaan Career Institute, Jodhpur. Call +91 7737383958 or WhatsApp. Located in Paota, Jodhpur. Free counselling available.",
};

export default function ContactPage() {
  return (
    <div style={{ fontFamily: "var(--font-inter)" }}>
      {/* Hero */}
      <div
        className="py-24 px-4 md:px-8 text-white"
        style={{ background: "linear-gradient(135deg, #0D1B2A 0%, #1B3A6B 100%)" }}
      >
        <div className="max-w-[1920px] mx-auto pt-16">
          <p className="text-brand-secondary text-xs font-bold uppercase tracking-widest mb-3">Get in Touch</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
            Contact &amp; Admissions
          </h1>
          <p className="text-white/60 max-w-xl">
            Admissions are open for the 2026–27 batch. Reach out on WhatsApp, call us, or fill the inquiry form below.
          </p>
        </div>
      </div>

      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-brand-dark mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
                Admission Inquiry Form
              </h2>
              <ContactForm />
            </div>

            {/* Contact details */}
            <div className="space-y-5">
              <div>
                <h2 className="text-xl font-bold text-brand-dark mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
                  Contact Details
                </h2>
                <div className="space-y-4">
                  <a
                    href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
                    className="flex items-start gap-4 p-4 border border-neutral-200 hover:border-brand-primary hover:bg-brand-light transition-all group"
                  >
                    <div className="w-10 h-10 bg-brand-light flex items-center justify-center shrink-0 group-hover:bg-brand-primary transition-colors">
                      <Phone size={18} className="text-brand-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-neutral-400 uppercase tracking-wide mb-0.5">Phone / WhatsApp</p>
                      <p className="font-semibold text-brand-dark">{PHONE_NUMBER}</p>
                    </div>
                  </a>

                  <a
                    href="mailto:nirvaaniitaiims@gmail.com"
                    className="flex items-start gap-4 p-4 border border-neutral-200 hover:border-brand-primary hover:bg-brand-light transition-all group"
                  >
                    <div className="w-10 h-10 bg-brand-light flex items-center justify-center shrink-0 group-hover:bg-brand-primary transition-colors">
                      <Mail size={18} className="text-brand-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-neutral-400 uppercase tracking-wide mb-0.5">Email</p>
                      <p className="font-semibold text-brand-dark text-sm">nirvaaniitaiims@gmail.com</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 border border-neutral-200">
                    <div className="w-10 h-10 bg-brand-light flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-brand-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-neutral-400 uppercase tracking-wide mb-0.5">Address</p>
                      <p className="font-semibold text-brand-dark text-sm">Paota, Jodhpur</p>
                      <p className="text-xs text-neutral-500 mt-0.5">Rajasthan 342006</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div
                className="p-6 text-white"
                style={{ backgroundColor: "#25D366" }}
              >
                <MessageCircle size={24} className="mb-3" />
                <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                  Fastest Response on WhatsApp
                </h3>
                <p className="text-white/80 text-sm mb-4">
                  Parents in Jodhpur prefer WhatsApp. Get a response within minutes.
                </p>
                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white text-green-700 font-bold py-3 px-6 w-full hover:bg-green-50 transition-colors text-sm"
                >
                  Chat on WhatsApp Now
                </a>
              </div>

              {/* Free counselling */}
              <div className="bg-brand-light border border-brand-primary/10 p-5">
                <h3 className="font-bold text-brand-dark mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                  Free Counselling Session
                </h3>
                <p className="text-sm text-neutral-500 mb-4">
                  Not sure which course is right? Book a free 30-minute counselling session with our faculty.
                </p>
                <a
                  href={buildWhatsAppLink({ source: "free-counselling" })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm w-full justify-center"
                >
                  Book Free Session
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
