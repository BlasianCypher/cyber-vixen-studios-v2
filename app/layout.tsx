import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CalendlyBookingProvider } from "@/components/booking/CalendlyBooking";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Cyber Vixen Studios | Websites, Apps & SEO",
    template: "%s | Cyber Vixen Studios",
  },
  description:
    "Clean, modern websites, apps, SEO foundations, and digital growth systems for businesses that want to look trustworthy and grow online.",
  keywords: [
    "web development",
    "app development",
    "SEO optimization",
    "cloud solutions",
    "AI integration",
    "digital growth",
    "Cyber Vixen Studios",
  ],
  authors: [{ name: "Cyber Vixen Studios" }],
  creator: "Cyber Vixen Studios",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Cyber Vixen Studios",
    title: "Cyber Vixen Studios | Websites, Apps & SEO",
    description:
      "Clean websites, apps, SEO foundations, and digital growth systems for modern businesses.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyber Vixen Studios",
    description:
      "Clean websites, apps, SEO foundations, and digital growth systems.",
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
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white font-sans text-black antialiased">
        <CalendlyBookingProvider>{children}</CalendlyBookingProvider>
      </body>
    </html>
  );
}
