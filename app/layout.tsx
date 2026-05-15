import type { Metadata } from "next";
import { Inter, Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import { StickyMobileCTA } from "@/components/ui/StickyMobileCTA";
import { InquiryPopup } from "@/components/ui/InquiryPopup";
import NextTopLoader from "nextjs-toploader";
import { Preloader } from "@/components/ui/Preloader";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Nirvaan Career Institute — Trusted NEET & JEE Coaching in Jodhpur",
    template: "%s | Nirvaan Career Institute",
  },
  description:
    "Ranked #1 for NEET & JEE coaching in Jodhpur. Expert faculty from IITs & AIIMS, small batch sizes, and proven result history since 2019. Enroll now for 2026-27 batches.",
  keywords: [
    "NEET coaching Jodhpur",
    "JEE coaching Jodhpur",
    "IIT-JEE Jodhpur",
    "Best coaching for medical Jodhpur",
    "Nirvaan Career Institute",
    "NEET coaching Paota",
    "JEE foundation Jodhpur",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Nirvaan Career Institute",
    title: "Nirvaan Career Institute — Trusted NEET & JEE Coaching in Jodhpur",
    description:
      "Ranked #1 for NEET & JEE coaching in Jodhpur. Small batches, expert faculty, proven results.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nirvaan Career Institute Jodhpur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nirvaan Career Institute — Trusted NEET & JEE Coaching in Jodhpur",
    description: "Ranked #1 for NEET & JEE coaching in Jodhpur. Small batches. Expert faculty.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${manrope.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-white font-sans antialiased text-brand-navy selection:bg-brand-secondary/30 selection:text-brand-navy">
        <Preloader />
        <NextTopLoader color="#C5A059" showSpinner={false} />
        <LocalBusinessSchema />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <StickyMobileCTA />
        <InquiryPopup />
      </body>
      <SpeedInsights />
      <Analytics />
    </html>
  );
}
