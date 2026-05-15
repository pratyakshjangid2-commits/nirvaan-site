"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { PHONE_NUMBER, buildWhatsAppLink } from "@/lib/whatsapp";
import { useState, useEffect } from "react";

export function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 500px
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 right-0 z-[60] lg:hidden flex bg-white border-t border-neutral-200 shadow-[0_-10px_20px_rgba(0,0,0,0.1)] overflow-hidden"
        >
          <a
            href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
            className="flex-1 flex items-center justify-center gap-3 py-4 text-brand-navy font-black text-[10px] uppercase tracking-widest border-r border-neutral-100 active:bg-neutral-50 transition-colors"
          >
            <Phone size={16} className="text-brand-secondary" />
            Call Now
          </a>
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            className="flex-1 flex items-center justify-center gap-3 py-4 bg-brand-secondary text-brand-navy font-black text-[10px] uppercase tracking-widest active:bg-brand-accent transition-colors"
          >
            <MessageCircle size={16} />
            Enquire
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
