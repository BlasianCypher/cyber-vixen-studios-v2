"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Check,
  Cloud,
  Code2,
  FileText,
  Globe,
  Layers3,
  LineChart,
  MapPin,
  Rocket,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";
import { CalendlyButton } from "@/components/booking/CalendlyBooking";
import { useSafeFadeUp } from "@/lib/useSafeFadeUp";

const services = [
  {
    icon: Globe,
    title: "Websites",
    description: "Modern websites built for trust, speed, search visibility, and conversion.",
    href: "/websites",
    accent: "#8B5CF6",
  },
  {
    icon: Smartphone,
    title: "Apps",
    description: "Clean customer portals, internal tools, mobile-ready apps, and digital workflows.",
    href: "/#apps",
    accent: "#00BFFF",
  },
  {
    icon: Search,
    title: "SEO",
    description: "Technical, local, and content SEO systems that help qualified customers find you.",
    href: "/seo",
    accent: "#8B5CF6",
  },
  {
    icon: Bot,
    title: "Automation",
    description: "AI-enhanced workflows that reduce repetitive work and improve response time.",
    href: "/#apps",
    accent: "#39FF14",
  },
];

const process = [
  ["01", "Discover", "Clarify goals, customers, positioning, and the outcomes the site needs to drive."],
  ["02", "Design", "Create polished interfaces, content structure, and conversion paths before development."],
  ["03", "Build", "Develop fast, accessible, responsive pages with clean code and analytics foundations."],
  ["04", "Grow", "Launch, measure, optimize, and expand with SEO, automation, and new product features."],
];

const websiteSolutions = [
  "Business websites",
  "eCommerce sites",
  "Membership platforms",
  "Custom web apps",
  "Booking systems",
  "Lead generation funnels",
];

const seoBenefits = [
  { label: "Technical SEO", value: "92", color: "#8B5CF6" },
  { label: "Local visibility", value: "78", color: "#00BFFF" },
  { label: "Content growth", value: "84", color: "#39FF14" },
];

const seoTopics = [
  {
    icon: Search,
    title: "What SEO is",
    description: "SEO is the structure, content, and technical quality that helps search engines understand and trust your website.",
  },
  {
    icon: MapPin,
    title: "Local SEO",
    description: "Optimize pages, service areas, and business signals so nearby customers can find and choose you.",
  },
  {
    icon: Code2,
    title: "Technical SEO",
    description: "Improve speed, metadata, structured data, crawlability, accessibility, and Core Web Vitals.",
  },
  {
    icon: FileText,
    title: "Content SEO",
    description: "Create useful pages that answer customer questions and build authority over time.",
  },
  {
    icon: BarChart3,
    title: "Measurement",
    description: "Track rankings, impressions, traffic quality, conversion paths, and opportunities.",
  },
  {
    icon: Target,
    title: "Conversion",
    description: "Turn search traffic into inquiries with clear offers, page structure, and calls to action.",
  },
];

const faqs = [
  ["How long does SEO take?", "SEO compounds over time. Most businesses should expect meaningful signals in 3 to 6 months, with stronger gains as content and authority grow."],
  ["Do I need SEO if I run ads?", "Yes. Ads stop when the budget stops. SEO builds a durable search presence that supports paid campaigns, referrals, and brand trust."],
  ["Can you help with local search?", "Yes. Local SEO includes location pages, service content, Google Business Profile guidance, reviews strategy, and technical cleanup."],
];

function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  useSafeFadeUp(ref, { stagger: 0.08 });

  return (
    <section ref={ref} id={id} className={`section-padding-lg bg-white ${className}`}>
      <div className="container-max">{children}</div>
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="section-label mb-4">{children}</p>;
}

function Heading({
  eyebrow,
  title,
  text,
  center = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  text?: string;
  center?: boolean;
}) {
  return (
    <div data-reveal className={`${center ? "mx-auto text-center" : ""} max-w-3xl`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="font-display text-3xl font-semibold tracking-[-0.045em] text-[#111111] md:text-5xl md:leading-[1.05]">
        {title}
      </h2>
      {text && <p className="mt-5 text-lg leading-8 text-gray md:text-xl">{text}</p>}
    </div>
  );
}

function PremiumCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      data-reveal
      className={`rounded-[28px] border border-black/[0.07] bg-white p-7 shadow-[0_18px_60px_-28px_rgba(17,17,17,0.28)] transition-all duration-300 hover:-translate-y-1.5 hover:border-purple/20 hover:shadow-[0_28px_80px_-30px_rgba(139,92,246,0.34)] ${className}`}
    >
      {children}
    </div>
  );
}

function IconBadge({
  icon: Icon,
  color = "#8B5CF6",
}: {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties; "aria-hidden"?: boolean }>;
  color?: string;
}) {
  return (
    <div
      className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-black/[0.06]"
      style={{ background: `${color}12` }}
    >
      <Icon className="h-5 w-5" style={{ color }} aria-hidden />
    </div>
  );
}

function CTAButtons({ primary = "Book Consultation" }: { primary?: string }) {
  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <CalendlyButton className="btn-gradient">
        {primary}
        <ArrowRight className="h-4 w-4" aria-hidden />
      </CalendlyButton>
      <Link href="/websites" className="btn-secondary">
        Explore Websites
      </Link>
    </div>
  );
}

function ProductMockup() {
  return (
    <div data-reveal className="relative">
      <div className="absolute -left-10 top-8 h-48 w-48 rounded-full bg-purple/20 blur-3xl" aria-hidden />
      <div className="absolute -right-8 bottom-8 h-48 w-48 rounded-full bg-electric-blue/20 blur-3xl" aria-hidden />
      <div className="relative overflow-hidden rounded-[32px] border border-black/[0.08] bg-white p-3 shadow-[0_32px_100px_-42px_rgba(17,17,17,0.45)]">
        <div className="rounded-[24px] border border-black/[0.06] bg-[#fafafa] p-5">
          <div className="mb-5 flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
            <span className="ml-auto rounded-full bg-white px-3 py-1 text-xs text-gray shadow-sm">Live system</span>
          </div>
          <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <div className="mb-4 h-3 w-32 rounded-full bg-purple/30" />
              <div className="space-y-3">
                {[80, 92, 68].map((width, index) => (
                  <div key={index} className="h-3 rounded-full bg-black/[0.06]" style={{ width: `${width}%` }} />
                ))}
              </div>
              <div className="mt-8 grid grid-cols-3 gap-3">
                {["#8B5CF6", "#00BFFF", "#39FF14"].map((color) => (
                  <div key={color} className="aspect-square rounded-2xl" style={{ background: `${color}18` }} />
                ))}
              </div>
            </div>
            <div className="space-y-4">
              {[
                ["Speed", "98"],
                ["Leads", "+34%"],
                ["SEO", "A+"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-black/[0.06] bg-white p-4 shadow-sm">
                  <p className="text-xs text-gray">{label}</p>
                  <p className="mt-1 font-display text-2xl font-semibold text-[#111111]">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ImageShowcase({ src, alt }: { src: string; alt: string }) {
  return (
    <div data-reveal className="relative mx-auto w-full max-w-[1180px]">
      <div className="absolute inset-8 rounded-[40px] bg-purple/15 blur-3xl" aria-hidden />
      <div className="relative overflow-hidden rounded-[32px] border border-black/[0.08] bg-white p-2 shadow-[0_32px_100px_-42px_rgba(17,17,17,0.42)]">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={800}
          className="h-auto w-full rounded-[24px] object-contain"
          sizes="(min-width: 1280px) 1180px, 100vw"
        />
      </div>
    </div>
  );
}

export function HomePage() {
  return (
    <>
      <Section className="pt-32 md:pt-40">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.95fr]">
          <div data-reveal>
            <div className="mb-6 inline-flex rounded-full border border-black/[0.07] bg-white px-4 py-2 text-sm font-medium text-gray shadow-sm">
              Websites, apps, SEO, and digital growth systems
            </div>
            <h1 className="font-display text-5xl font-semibold leading-[0.98] tracking-[-0.06em] text-[#111111] md:text-7xl">
              Clean digital systems for serious business growth.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray md:text-xl">
              Cyber Vixen Studios designs and builds premium websites, apps, and SEO foundations that feel fast, trustworthy, and ready for Google.
            </p>
            <CTAButtons />
          </div>
          <ProductMockup />
        </div>
      </Section>

      <Section id="services" className="pt-8">
        <Heading
          eyebrow="What We Build"
          title="A focused digital growth partner for modern teams."
          text="Everything is designed to improve trust, clarity, speed, and customer action."
          center
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <PremiumCard key={service.title} className="min-h-[300px]">
              <IconBadge icon={service.icon} color={service.accent} />
              <h3 className="font-display text-xl font-semibold text-[#111111]">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-gray">{service.description}</p>
              <Link href={service.href} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#111111]">
                Learn more <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </PremiumCard>
          ))}
        </div>
      </Section>

      <Section id="apps" className="bg-[#fafafa]">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Heading
            eyebrow="Apps & Automation"
            title="Software that makes the business easier to run."
            text="From booking workflows to dashboards and customer portals, we build practical systems that remove friction."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              [Workflow, "Automated workflows"],
              [Layers3, "Customer portals"],
              [Cloud, "Cloud infrastructure"],
              [ShieldCheck, "Secure foundations"],
            ].map(([Icon, title]) => (
              <PremiumCard key={String(title)} className="bg-white">
                <IconBadge icon={Icon as typeof Workflow} />
                <h3 className="font-display text-lg font-semibold text-[#111111]">{String(title)}</h3>
                <p className="mt-2 text-sm leading-6 text-gray">Reliable, scalable, and easy to understand.</p>
              </PremiumCard>
            ))}
          </div>
        </div>
      </Section>

      <Section id="process">
        <Heading eyebrow="Process" title="Calm, clear, and structured from first call to launch." center />
        <div className="mt-14 grid gap-5 md:grid-cols-4">
          {process.map(([number, title, description]) => (
            <PremiumCard key={number}>
              <span className="text-sm font-bold text-purple">{number}</span>
              <h3 className="mt-5 font-display text-xl font-semibold text-[#111111]">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-gray">{description}</p>
            </PremiumCard>
          ))}
        </div>
      </Section>

      <AboutPreview />
      <ContactCTA />
    </>
  );
}

export function WebsitesProductPage() {
  return (
    <>
      <Section className="pt-32 md:pt-40">
        <div className="mx-auto max-w-4xl text-center" data-reveal>
          <Eyebrow>Website Design & Development</Eyebrow>
          <h1 className="font-display text-5xl font-semibold leading-[0.98] tracking-[-0.06em] text-[#111111] md:text-7xl">
            Premium websites built like modern products.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray md:text-xl">
            Strategy, design, development, SEO, and conversion architecture for businesses that need to look trustworthy online.
          </p>
          <div className="flex justify-center">
            <CTAButtons primary="Start Website Project" />
          </div>
        </div>
      </Section>

      <Section className="pt-4">
        <ImageShowcase src="/images/digital-storefront.png" alt="Premium website dashboard showcase" />
      </Section>

      <Section className="bg-[#fafafa]">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Heading
            eyebrow="Why Websites Matter"
            title="Your website is the center of your digital presence."
            text="Customers search, compare, verify, and decide before they ever contact you. A professional website gives them a clear reason to trust you."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {["Credibility", "24/7 lead capture", "Search visibility", "Brand control"].map((item) => (
              <PremiumCard key={item}>
                <Check className="mb-4 h-5 w-5 text-purple" aria-hidden />
                <h3 className="font-display text-lg font-semibold text-[#111111]">{item}</h3>
                <p className="mt-2 text-sm leading-6 text-gray">A stronger foundation for every marketing channel.</p>
              </PremiumCard>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12">
          <Heading
            eyebrow="Product Showcases"
            title="Educational visuals that make the case clear."
            text="Each showcase is presented as a premium product moment, not a generic agency graphic."
            center
          />
          <ImageShowcase src="/images/social-media-isnt-enough.png" alt="Social media alone is not enough visual comparison" />
          <ImageShowcase src="/images/every-marketing-channel-leads-home.png" alt="Every marketing channel leads home infographic" />
        </div>
      </Section>

      <Section className="bg-[#fafafa]">
        <Heading eyebrow="Website Solutions" title="Built for practical business outcomes." center />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {websiteSolutions.map((solution) => (
            <PremiumCard key={solution}>
              <Rocket className="mb-5 h-5 w-5 text-purple" aria-hidden />
              <h3 className="font-display text-xl font-semibold text-[#111111]">{solution}</h3>
              <p className="mt-3 text-sm leading-7 text-gray">Designed for clarity, performance, mobile usability, and measurable growth.</p>
            </PremiumCard>
          ))}
        </div>
      </Section>

      <Section>
        <Heading eyebrow="Development Process" title="A structured path from strategy to launch." center />
        <div className="mt-14 grid gap-5 md:grid-cols-4">
          {process.map(([number, title, description]) => (
            <PremiumCard key={number}>
              <span className="text-sm font-bold text-purple">{number}</span>
              <h3 className="mt-5 font-display text-xl font-semibold text-[#111111]">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-gray">{description}</p>
            </PremiumCard>
          ))}
        </div>
      </Section>

      <ContactCTA />
    </>
  );
}

export function SeoPage() {
  return (
    <>
      <Section className="pt-32 md:pt-40">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div data-reveal>
            <Eyebrow>SEO Strategy</Eyebrow>
            <h1 className="font-display text-5xl font-semibold leading-[0.98] tracking-[-0.06em] text-[#111111] md:text-7xl">
              Make your business easier to find and easier to trust.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray md:text-xl">
              SEO is not tricks. It is technical quality, helpful content, local relevance, and a website experience Google can understand.
            </p>
            <CTAButtons primary="Plan My SEO" />
          </div>
          <SeoChart />
        </div>
      </Section>

      <Section className="bg-[#fafafa]">
        <Heading
          eyebrow="How SEO Works"
          title="Search growth comes from structure, relevance, and trust."
          text="We improve the foundations that help people find your business and take action."
          center
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {seoTopics.map((topic) => (
            <PremiumCard key={topic.title}>
              <IconBadge icon={topic.icon} />
              <h3 className="font-display text-xl font-semibold text-[#111111]">{topic.title}</h3>
              <p className="mt-3 text-sm leading-7 text-gray">{topic.description}</p>
            </PremiumCard>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Heading
            eyebrow="Benefits"
            title="A stronger search presence supports every channel."
            text="SEO improves discoverability, credibility, site structure, and conversion quality. It is one of the best long-term foundations for digital growth."
          />
          <PremiumCard>
            <div className="space-y-6">
              {seoBenefits.map((item) => (
                <div key={item.label}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-medium text-[#111111]">{item.label}</span>
                    <span className="text-gray">{item.value}%</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-black/[0.06]">
                    <div className="h-full rounded-full" style={{ width: `${item.value}%`, background: item.color }} />
                  </div>
                </div>
              ))}
            </div>
          </PremiumCard>
        </div>
      </Section>

      <Section className="bg-[#fafafa]">
        <Heading eyebrow="FAQ" title="Clear answers about SEO." center />
        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {faqs.map(([question, answer]) => (
            <PremiumCard key={question}>
              <h3 className="font-display text-lg font-semibold text-[#111111]">{question}</h3>
              <p className="mt-3 text-sm leading-7 text-gray">{answer}</p>
            </PremiumCard>
          ))}
        </div>
      </Section>

      <ContactCTA />
    </>
  );
}

function SeoChart() {
  return (
    <PremiumCard className="relative overflow-hidden p-8">
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-purple/15 blur-3xl" aria-hidden />
      <div className="mb-8 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray">Organic growth model</p>
          <p className="mt-1 font-display text-3xl font-semibold text-[#111111]">+142%</p>
        </div>
        <LineChart className="h-8 w-8 text-purple" aria-hidden />
      </div>
      <div className="flex h-64 items-end gap-3">
        {[28, 36, 44, 58, 64, 72, 84, 92].map((height, index) => (
          <div key={index} className="flex-1 rounded-t-2xl bg-gradient-to-t from-purple to-electric-blue" style={{ height: `${height}%` }} />
        ))}
      </div>
    </PremiumCard>
  );
}

function AboutPreview() {
  return (
    <Section id="about" className="bg-[#fafafa]">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Heading
          eyebrow="About Cyber Vixen Studios"
          title="A modern digital studio focused on clarity, performance, and growth."
          text="We build websites, apps, SEO foundations, and digital systems for organizations that want to look credible and operate with confidence."
        />
        <PremiumCard className="grid gap-4 sm:grid-cols-2">
          {["Websites", "App development", "SEO", "Digital growth"].map((item) => (
            <div key={item} className="rounded-2xl bg-[#fafafa] p-5">
              <Sparkles className="mb-4 h-5 w-5 text-purple" aria-hidden />
              <h3 className="font-display text-lg font-semibold text-[#111111]">{item}</h3>
              <p className="mt-2 text-sm leading-6 text-gray">Clean strategy, polished execution, and practical outcomes.</p>
            </div>
          ))}
        </PremiumCard>
      </div>
    </Section>
  );
}

export function AboutPage() {
  return (
    <>
      <Section className="pt-32 md:pt-40">
        <div className="mx-auto max-w-4xl text-center" data-reveal>
          <Eyebrow>About</Eyebrow>
          <h1 className="font-display text-5xl font-semibold leading-[0.98] tracking-[-0.06em] text-[#111111] md:text-7xl">
            Digital growth systems with a product-company standard.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray md:text-xl">
            Cyber Vixen Studios helps businesses build stronger websites, better apps, more visible search presence, and clearer customer journeys.
          </p>
        </div>
      </Section>
      <AboutPreview />
      <Section>
        <Heading eyebrow="Principles" title="Simple, fast, accessible, and measurable." center />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {[
            ["Clarity first", "Every page should help customers understand what you do and what to do next."],
            ["Performance matters", "Fast, responsive experiences build trust before a visitor reads a word."],
            ["Growth is designed", "SEO, analytics, conversion paths, and content structure are part of the system."],
          ].map(([title, description]) => (
            <PremiumCard key={title}>
              <h3 className="font-display text-xl font-semibold text-[#111111]">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-gray">{description}</p>
            </PremiumCard>
          ))}
        </div>
      </Section>
      <ContactCTA />
    </>
  );
}

export function ContactPage() {
  return (
    <Section className="pt-32 md:pt-40">
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div data-reveal>
          <Eyebrow>Contact</Eyebrow>
          <h1 className="font-display text-5xl font-semibold leading-[0.98] tracking-[-0.06em] text-[#111111] md:text-6xl">
            Tell us what you want to build.
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray">
            Schedule a consultation or send a project note. No phone number, no clutter, just a clear path to start.
          </p>
          <a className="mt-8 inline-flex text-lg font-semibold text-purple" href="mailto:cybervixenstudios@outlook.com">
            cybervixenstudios@outlook.com
          </a>
        </div>
        <PremiumCard className="p-8">
          <form className="space-y-5">
            {["Name", "Email", "Company"].map((label) => (
              <label key={label} className="block">
                <span className="text-sm font-medium text-[#111111]">{label}</span>
                <input className="mt-2 h-12 w-full rounded-2xl border border-black/[0.08] bg-[#fafafa] px-4 outline-none transition-colors focus:border-purple" />
              </label>
            ))}
            <label className="block">
              <span className="text-sm font-medium text-[#111111]">Project details</span>
              <textarea className="mt-2 min-h-36 w-full rounded-2xl border border-black/[0.08] bg-[#fafafa] px-4 py-3 outline-none transition-colors focus:border-purple" />
            </label>
            <a href="mailto:cybervixenstudios@outlook.com?subject=Project%20Consultation" className="btn-gradient w-full justify-center">
              Send Project Note
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </form>
        </PremiumCard>
      </div>
    </Section>
  );
}

function ContactCTA() {
  return (
    <Section id="contact" className="pb-28">
      <div data-reveal className="relative overflow-hidden rounded-[36px] border border-black/[0.07] bg-[#111111] p-8 text-white shadow-[0_32px_100px_-42px_rgba(17,17,17,0.65)] md:p-14">
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-purple/30 blur-3xl" aria-hidden />
        <div className="absolute -bottom-20 left-1/3 h-64 w-64 rounded-full bg-electric-blue/20 blur-3xl" aria-hidden />
        <div className="relative max-w-3xl">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/60">Start</p>
          <h2 className="font-display text-3xl font-semibold tracking-[-0.045em] md:text-5xl">
            Ready for a website, app, or SEO foundation that feels premium?
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/70">
            Let us turn your goals into a clean, fast, trustworthy digital system.
          </p>
          <CalendlyButton className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-[#111111] transition-transform hover:-translate-y-0.5">
            Book Consultation
            <ArrowRight className="h-4 w-4" aria-hidden />
          </CalendlyButton>
        </div>
      </div>
    </Section>
  );
}
