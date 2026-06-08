import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { SeoPage } from "@/components/marketing/PremiumSite";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "SEO Strategy",
  description:
    "Educational SEO strategy for technical SEO, local SEO, content SEO, search visibility, and digital growth.",
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <SeoPage />
      </main>
      <Footer />
    </>
  );
}
