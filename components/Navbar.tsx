"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CalendlyButton } from "./booking/CalendlyBooking";
import { Logo } from "./ui/Logo";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Websites", href: "/websites" },
  { label: "Apps", href: "/#apps" },
  { label: "SEO", href: "/seo" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-black/[0.06] bg-white/85 shadow-[0_1px_0_rgba(255,255,255,0.8)_inset,0_10px_36px_-24px_rgba(17,17,17,0.28)] backdrop-blur-2xl backdrop-saturate-150"
            : "border-b border-black/[0.04] bg-white/75 backdrop-blur-xl backdrop-saturate-150"
        }`}
      >
        <nav
          className="container-max flex h-[4.25rem] items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10"
          aria-label="Main navigation"
        >
          <Link href="/" aria-label="Cyber Vixen Studios home">
            <Logo />
          </Link>

          <ul className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) => {
              const active = link.href === "/" ? pathname === "/" : pathname === link.href;
              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`nav-link group relative px-4 py-2 ${active ? "bg-black/[0.04]" : ""}`}
                    aria-current={active ? "page" : undefined}
                  >
                    <span className={`relative z-10 text-[13px] font-medium transition-colors duration-300 group-hover:text-black ${active ? "text-black" : "text-gray"}`}>
                      {link.label}
                    </span>
                    <span
                      className={`absolute inset-x-3 bottom-1.5 h-px origin-left bg-gradient-to-r from-purple to-electric-blue transition-transform duration-300 ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:block">
            <CalendlyButton className="btn-gradient h-10 px-5 text-[13px]">
              Book Consultation
            </CalendlyButton>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/[0.06] bg-white/60 backdrop-blur-sm transition-colors hover:border-black/10 lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/15 backdrop-blur-md lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 32, stiffness: 320 }}
              className="absolute right-0 top-0 flex h-full w-[min(320px,88vw)] flex-col border-l border-black/[0.06] bg-white/95 p-6 backdrop-blur-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-10 flex items-center justify-between">
                <Logo />
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/[0.06]"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                    className="block rounded-xl px-4 py-3.5 text-[15px] font-medium text-black transition-colors hover:bg-light-gray/80"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                <CalendlyButton
                  className="btn-gradient flex w-full justify-center"
                  onClick={() => setMobileOpen(false)}
                >
                  Book Consultation
                </CalendlyButton>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
