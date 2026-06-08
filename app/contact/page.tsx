import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { ContactPage } from "@/components/marketing/PremiumSite";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Cyber Vixen Studios to discuss a website, app, SEO, or digital growth project.",
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <ContactPage />
      </main>
      <Footer />
    </>
  );
}
