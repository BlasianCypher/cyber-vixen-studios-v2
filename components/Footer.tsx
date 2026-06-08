import Link from "next/link";
import { CalendlyButton } from "./booking/CalendlyBooking";
import { Logo } from "./ui/Logo";

const footerLinks = {
  Company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Book Consultation", href: "/contact" },
  ],
  Services: [
    { label: "Website Development", href: "/websites" },
    { label: "App Development", href: "/#apps" },
    { label: "SEO Optimization", href: "/seo" },
    { label: "Automation", href: "/#apps" },
  ],
  Resources: [
    { label: "Home", href: "/" },
    { label: "Websites", href: "/websites" },
    { label: "SEO", href: "/seo" },
  ],
  Contact: [
    {
      label: "cybervixenstudios@outlook.com",
      href: "mailto:cybervixenstudios@outlook.com",
    },
    { label: "Book Consultation", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-black/[0.06] bg-white text-[#111111]">
      <div className="container-max section-padding pb-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray">
              Clean websites, apps, SEO, and digital systems for modern growth.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.1em] text-[#111111]">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.label === "Book Consultation" ? (
                      <CalendlyButton className="text-left text-sm text-gray transition-colors hover:text-[#111111]">
                        {link.label}
                      </CalendlyButton>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-gray transition-colors hover:text-[#111111]"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-black/[0.06] pt-8 sm:flex-row">
          <p className="text-xs text-gray">
            &copy; {new Date().getFullYear()} Cyber Vixen Studios. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-xs text-gray transition-colors hover:text-[#111111]"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs text-gray transition-colors hover:text-[#111111]"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
