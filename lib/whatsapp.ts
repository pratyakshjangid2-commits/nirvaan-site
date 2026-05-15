export const WHATSAPP_NUMBER = "917737383958";
export const PHONE_NUMBER = "+91 7737383958";

export function buildWhatsAppLink(options: {
  course?: string;
  className?: string;
  source?: string;
} = {}) {
  const course = options.course || "JEE/NEET";
  const className = options.className ? ` for Class ${options.className}` : "";
  const message = encodeURIComponent(
    `Hi! I'm interested in ${course} coaching${className} at Nirvaan Career Institute. Please share details.`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

export const WHATSAPP_LINK = buildWhatsAppLink();
