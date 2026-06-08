import { Footer } from "@/components/Footer";
import { HomePage } from "@/components/marketing/PremiumSite";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HomePage />
      </main>
      <Footer />
    </>
  );
}
