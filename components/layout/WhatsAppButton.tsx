"use client";

import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href={buildWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 text-white px-4 py-3 rounded-full shadow-xl transition-all duration-500 group overflow-hidden ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
      }`}
      style={{ backgroundColor: "#25D366" }}
    >
      <MessageCircle size={24} className="shrink-0" />
      <span className="text-sm font-semibold whitespace-nowrap max-w-0 group-hover:max-w-xs overflow-hidden transition-all duration-300">
        Chat with us
      </span>
    </a>
  );
}
