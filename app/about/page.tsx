import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { AboutPage } from "@/components/marketing/PremiumSite";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Cyber Vixen Studios, a modern digital studio building websites, apps, SEO foundations, and digital growth systems.",
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <AboutPage />
      </main>
      <Footer />
    </>
  );
}
