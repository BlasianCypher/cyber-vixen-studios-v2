import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { WebsitesProductPage } from "@/components/marketing/PremiumSite";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Websites — Design & Development",
  description:
    "Premium website design and development for businesses that want to grow. Business websites, eCommerce, membership platforms, and custom web applications engineered for speed, SEO, and conversion.",
};

export default function WebsitesPage() {
  return (
    <>
      <Navbar />
      <main>
        <WebsitesProductPage />
      </main>
      <Footer />
    </>
  );
}
