import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import NextTopLoader from "nextjs-toploader";
import { Preloader } from "@/components/ui/Preloader";

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

export const metadata: Metadata = {
  title: {
    default: "Best JEE & NEET Coaching in Jodhpur | Nirvaan Career Institute",
    template: "%s | Nirvaan Career Institute",
  },
  description:
    "Ranked #1 NEET coaching in Jodhpur. Expert JEE, NEET, and Foundation coaching at Nirvaan Career Institute, Paota, Jodhpur. Small batches, proven results.",
  keywords: [
    "JEE coaching Jodhpur",
    "NEET coaching Jodhpur",
    "best coaching Jodhpur",
    "Nirvaan Career Institute",
    "NEET coaching Paota",
    "JEE foundation Jodhpur",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Nirvaan Career Institute",
    title: "Best JEE & NEET Coaching in Jodhpur | Nirvaan Career Institute",
    description:
      "Ranked #1 NEET coaching in Jodhpur. Small batches, expert faculty, proven results.",
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
    title: "Best JEE & NEET Coaching in Jodhpur | Nirvaan Career Institute",
    description: "Ranked #1 NEET coaching in Jodhpur. Small batches. Expert faculty.",
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
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col bg-white">
        <Preloader />
        <NextTopLoader color="#E63946" showSpinner={false} />
        <LocalBusinessSchema />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
