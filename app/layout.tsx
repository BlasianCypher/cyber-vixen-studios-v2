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
  metadataBase: new URL("https://cybervixenstudios.com"),
  title: "Cyber Vixen Studios",
  description:
    "Websites, Mobile Apps, SEO, Advertising, Cloud Solutions & Vixen Care",
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
    title: "Cyber Vixen Studios",
    description:
      "Websites, Mobile Apps, SEO, Advertising, Cloud Solutions & Vixen Care",
    siteName: "Cyber Vixen Studios",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyber Vixen Studios",
    description:
      "Websites, Mobile Apps, SEO, Advertising, Cloud Solutions & Vixen Care",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/images/cv-logo-vixen.png",
    shortcut: "/images/cv-logo-vixen.png",
    apple: "/images/cv-logo-vixen.png",
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
