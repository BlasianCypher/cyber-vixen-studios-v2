"use client";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";

const timelineSteps = [
  {
    number: "01",
    title: "Discovery",
    text: "Learn about your business, goals, and audience.",
    top: true,
  },
  {
    number: "02",
    title: "Strategy",
    text: "Create a roadmap focused on growth and results.",
    top: false,
  },
  {
    number: "03",
    title: "Design",
    text: "Craft a modern and user-focused experience.",
    top: true,
  },
  {
    number: "04",
    title: "Development",
    text: "Build websites, apps, and automations.",
    top: false,
  },
  {
    number: "05",
    title: "Launch",
    text: "Deploy, optimize, and go live.",
    top: true,
  },
  {
    number: "06",
    title: "Vixen Care",
    text: "Manage, maintain, and continuously improve.",
    top: false,
  },
];

export default function Home() {
  const row1Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      row1Ref.current,
      { x: 0 },
      {
        x: -2000,
        duration: 45,
        ease: "none",
        repeat: -1,
      }
    );
  }, { dependencies: [] });
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-black overflow-hidden">
        <section className="relative flex min-h-[650px] items-center px-5 py-10 md:px-6 md:py-16">
          <div className="absolute inset-0 bg-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(236,72,153,0.08),transparent_30%),radial-gradient(circle_at_top_right,rgba(6,182,212,0.08),transparent_30%),radial-gradient(circle_at_bottom,rgba(168,85,247,0.08),transparent_35%)]" />
          </div>

          <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-10 text-center lg:grid-cols-2 lg:items-center lg:text-left">
            <div>
              <div className="mx-auto mb-6 inline-flex w-full max-w-fit rounded-full border border-gray-200 bg-white px-4 py-2 text-center text-xs backdrop-blur sm:text-sm lg:mx-0">
                Digital Growth Partner For Modern Businesses
              </div>

              <div className="mb-4">
                <h2 className="text-lg font-semibold text-gray-900 sm:text-xl md:text-2xl">
                  We Build, Manage & Grow Your Online Presence.
                </h2>

                <p className="mt-3 text-center text-sm leading-relaxed text-gray-600 sm:text-base md:text-left md:text-lg">
                  Custom Websites • Mobile Apps • SEO Optimization • Google Ads • Website Management
                </p>
              </div>

              <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-gray-950 sm:text-5xl md:text-6xl">
                Your Website Should Be Working As Hard As You Do.
              </h1>

              <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
                <button className="w-full rounded-2xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 px-8 py-4 font-semibold text-white shadow-xl shadow-pink-500/20 transition hover:scale-105 sm:w-auto">
                  Start Your Project
                </button>

                <button className="w-full rounded-2xl border border-gray-200 bg-white px-8 py-4 font-semibold text-gray-900 transition hover:bg-gray-100 sm:w-auto">
                  View Services
                </button>
              </div>

              <div className="mt-10 overflow-hidden py-2">
                <div ref={row1Ref} className="flex min-w-[5000px] gap-3 whitespace-nowrap">
                  {[
                    'Website Design','Website Management','Mobile Apps','SEO Growth','Google Advertising','Domain Search','Domain Registration','Hosting Solutions','Business Email','Vixen Care',
                    'AI Automation','Brand Identity','Landing Pages','E-Commerce','Booking Systems','Lead Generation','Conversion Strategy','Content Management','Security Protection','Performance Monitoring',
                    'Speed Optimization','Technical Support','Analytics Reporting','Customer Portals','Search Visibility','Online Growth','Business Scaling','Digital Strategy','Marketing Solutions','Growth Partner',
                    'Website Design','Website Management','Mobile Apps','SEO Growth','Google Advertising','Domain Search','Domain Registration','Hosting Solutions','Business Email','Vixen Care',
                    'AI Automation','Brand Identity','Landing Pages','E-Commerce','Booking Systems','Lead Generation','Conversion Strategy','Content Management','Security Protection','Performance Monitoring',
                    'Speed Optimization','Technical Support','Analytics Reporting','Customer Portals','Search Visibility','Online Growth','Business Scaling','Digital Strategy','Marketing Solutions','Growth Partner'
                  ].map((item, index) => (
                    <span
                      key={`${item}-${index}`}
                      className={`rounded-full px-4 py-2 text-sm font-semibold shadow-md transition-all ${index % 5 === 0 ? 'bg-pink-100 text-pink-700' : index % 5 === 1 ? 'bg-cyan-100 text-cyan-700' : index % 5 === 2 ? 'bg-green-100 text-green-700' : index % 5 === 3 ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-700'}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative w-full">
              <div className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-xl shadow-gray-200">
                <h3 className="mb-4 text-xl font-bold text-gray-900">Growth Dashboard</h3>

                <div className="space-y-4">
                  <div className="rounded-2xl bg-pink-500/10 p-4">
                    <div className="text-gray-500">Website Traffic</div>
                    <div className="text-3xl font-bold">+245%</div>
                  </div>

                  <div className="rounded-2xl bg-cyan-500/10 p-4">
                    <div className="text-gray-500">Lead Generation</div>
                    <div className="text-3xl font-bold">+180%</div>
                  </div>

                  <div className="rounded-2xl bg-green-500/10 p-4">
                    <div className="text-gray-500">SEO Rankings</div>
                    <div className="text-3xl font-bold">Top Results</div>
                  </div>
                </div>
              </div>
              <div className="mt-4 rounded-3xl border border-gray-200 bg-white p-4 shadow-lg sm:absolute sm:-bottom-4 sm:-left-4 sm:mt-0">
                <p className="text-sm text-gray-500">Managed Websites</p>
                <h4 className="text-3xl font-bold text-gray-900">24/7</h4>
                <p className="text-sm text-green-600">Vixen Care Active</p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-black px-6 py-28 text-white">
          <div className="absolute inset-0">
            <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl" />
            <div className="absolute right-20 top-40 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="absolute bottom-10 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-500/10 blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <span className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 backdrop-blur-xl">
                Everything Your Business Needs Online
              </span>

              <h2 className="mx-auto max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
                One Partner.
                <span className="block bg-gradient-to-r from-pink-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Every Digital Solution.
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
                From websites and mobile apps to SEO, advertising, domains, hosting, and ongoing management — Cyber Vixen Studios helps businesses build, manage, and grow their online presence.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              <div className="group rounded-[32px] border-2 border-pink-500/40 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(236,72,153,.35)]">
                <h3 className="mb-3 text-2xl font-bold">Websites</h3>
                <p className="text-gray-400">Professional websites designed to build trust, generate leads, and convert visitors into customers.</p>
              </div>

              <div className="group rounded-[32px] border-2 border-cyan-500/40 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(34,211,238,.35)]">
                <h3 className="mb-3 text-2xl font-bold">Mobile Apps</h3>
                <p className="text-gray-400">Custom iPhone and Android applications built for modern businesses and growing brands.</p>
              </div>

              <div className="group rounded-[32px] border-2 border-green-500/40 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(34,197,94,.35)]">
                <h3 className="mb-3 text-2xl font-bold">SEO Growth</h3>
                <p className="text-gray-400">Improve visibility, increase rankings, and attract customers actively searching for your services.</p>
              </div>

              <div className="group rounded-[32px] border-2 border-purple-500/40 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(168,85,247,.35)]">
                <h3 className="mb-3 text-2xl font-bold">Google Ads</h3>
                <p className="text-gray-400">Launch targeted campaigns that bring qualified traffic, leads, and sales to your business.</p>
              </div>

              <div className="group rounded-[32px] border-2 border-gray-400/40 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(255,255,255,.15)]">
                <h3 className="mb-3 text-2xl font-bold">Vixen Care</h3>
                <p className="text-gray-400">Website maintenance, updates, backups, security monitoring, and ongoing support.</p>
              </div>

              <div className="group rounded-[32px] border-2 border-cyan-500/40 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(6,182,212,.35)]">
                <h3 className="mb-3 text-2xl font-bold">Domains & Hosting</h3>
                <p className="text-gray-400">Everything needed to launch your business online from domain registration to hosting setup.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-white text-black">
          <div className="absolute inset-0">
            <div className="absolute left-[-10%] top-20 h-96 w-96 rounded-full bg-pink-300/20 blur-3xl" />
            <div className="absolute right-[-5%] top-10 h-[28rem] w-[28rem] rounded-full bg-green-300/20 blur-3xl" />
            <div className="absolute left-1/2 top-32 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-pink-200/15 blur-3xl" />
            <div className="absolute inset-0 bg-gradient-to-b from-white via-pink-50/40 to-green-50/40" />
          </div>

          <div className="relative z-10 mx-auto max-w-5xl rounded-[40px] border border-white/50 bg-white/40 px-6 py-24 text-center backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.06)]">
            <div className="mb-5 inline-flex rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-gray-600 backdrop-blur-xl">
              Digital Presence
            </div>

            <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-gray-950 md:text-5xl">
              Your Website Is More Than A Website.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600">
              It is your storefront, sales team, marketing engine, and customer experience platform. When paired with SEO, advertising, and ongoing management, your website becomes a long-term asset that helps your business attract customers and grow consistently.
            </p>

            <div className="mt-20 mx-auto max-w-6xl">
              <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-center">
                <p className="max-w-sm text-center text-lg font-medium leading-relaxed text-gray-700 md:text-left">
                  Professional websites designed to build credibility, generate customers, and support long-term business growth.
                </p>

                <div className="hidden md:flex md:flex-col md:items-center md:justify-center">
                  <div className="h-24 w-px bg-gradient-to-b from-transparent via-cyan-500 to-transparent" />
                  <div className="mt-2 h-2 w-2 rounded-full bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.8)]" />
                </div>

                <p className="max-w-sm text-center text-lg font-medium leading-relaxed text-gray-700 md:text-left">
                  Every website is built with performance, user experience, and long-term scalability in mind.
                </p>

                <div className="hidden md:flex md:flex-col md:items-center md:justify-center">
                  <div className="h-24 w-px bg-gradient-to-b from-transparent via-purple-500 to-transparent" />
                  <div className="mt-2 h-2 w-2 rounded-full bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.8)]" />
                </div>

                <p className="max-w-sm text-center text-lg font-medium leading-relaxed text-gray-700 md:text-left">
                  Cyber Vixen Studios helps businesses launch, manage, and scale their entire digital presence from one place.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-black px-6 py-32 text-white">
          <div className="absolute inset-0">
            <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="absolute right-20 bottom-20 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="mb-20 text-center">
              <div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-gray-400 backdrop-blur-xl">
                How It Works
              </div>

              <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
                From Idea To Launch.
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
                A streamlined process designed to help businesses launch, scale, and maintain a powerful online presence.
              </p>
            </div>

            <div className="mx-auto mt-20 max-w-7xl">
              <div className="relative hidden lg:block pt-12">
                <div className="absolute left-0 right-0 top-28 h-1 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 via-pink-500 to-green-500" />

                <div className="grid grid-cols-6 gap-4">
                  {timelineSteps.map((step) => (
                    <div key={step.number} className="relative flex flex-col items-center text-center">
                      {step.top ? (
                        <>
                          <div className="mb-4 rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                            <div className="text-3xl font-black text-white">{step.number}</div>
                            <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                            <p className="mt-2 text-xs leading-relaxed text-gray-400">{step.text}</p>
                          </div>

                          <div className="h-10 w-px bg-gradient-to-b from-cyan-400 to-transparent" />

                          <div className="h-6 w-6 rounded-full border-4 border-cyan-400 bg-black shadow-[0_0_20px_rgba(34,211,238,.6)]" />
                        </>
                      ) : (
                        <>
                          <div className="h-6 w-6 rounded-full border-4 border-purple-400 bg-black shadow-[0_0_20px_rgba(168,85,247,.6)]" />

                          <div className="h-10 w-px bg-gradient-to-b from-transparent to-purple-400" />

                          <div className="mt-4 rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                            <div className="text-3xl font-black text-white">{step.number}</div>
                            <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                            <p className="mt-2 text-xs leading-relaxed text-gray-400">{step.text}</p>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:hidden mx-auto max-w-md">
                <div className="relative">
                  <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-cyan-500 via-purple-500 via-pink-500 to-green-500" />

                  {timelineSteps.map((step) => (
                    <div key={step.number} className="relative mb-12 flex items-center">
                      {step.top ? (
                        <>
                          <div className="w-[45%] rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl text-right">
                            <div className="text-3xl font-black text-white">{step.number}</div>
                            <h3 className="mt-2 text-lg font-semibold text-white">{step.title}</h3>
                            <p className="mt-2 text-xs leading-relaxed text-gray-400">{step.text}</p>
                          </div>

                          <div className="relative z-10 mx-auto flex h-6 w-6 items-center justify-center rounded-full border-4 border-cyan-400 bg-black shadow-[0_0_20px_rgba(34,211,238,.6)]" />

                          <div className="w-[45%]" />
                        </>
                      ) : (
                        <>
                          <div className="w-[45%]" />

                          <div className="relative z-10 mx-auto flex h-6 w-6 items-center justify-center rounded-full border-4 border-purple-400 bg-black shadow-[0_0_20px_rgba(168,85,247,.6)]" />

                          <div className="w-[45%] rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl text-left">
                            <div className="text-3xl font-black text-white">{step.number}</div>
                            <h3 className="mt-2 text-lg font-semibold text-white">{step.title}</h3>
                            <p className="mt-2 text-xs leading-relaxed text-gray-400">{step.text}</p>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-black px-6 py-32 text-white">
          <div className="absolute inset-0">
            <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-pink-500/10 blur-3xl" />
            <div className="absolute right-[-10%] bottom-[-10%] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="mb-20 text-center">
              <div className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] backdrop-blur-xl">
                Vixen Care
              </div>

              <h2 className="text-4xl font-black tracking-tight md:text-7xl">
                Most Agencies Build.
                <br />
                We Stay.
              </h2>

              <p className="mx-auto mt-8 max-w-3xl text-lg text-pink-100 md:text-xl">
                Launching your website is only the beginning. Vixen Care provides ongoing management, updates, optimization, and support so your business can focus on growth while we handle the technology.
              </p>
              <div className="mx-auto mt-14 mb-16 max-w-6xl overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl">
                <Image
                  src="/images/vixen-care.png"
                  alt="Vixen Care"
                  width={1200}
                  height={800}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>

            <div className="mx-auto max-w-5xl space-y-4">
              {[
                {
                  title: "What is Vixen Care?",
                  content:
                    "Vixen Care is our ongoing website management service. We continue supporting your website long after launch with updates, maintenance, monitoring, optimization, and growth.",
                },
                {
                  title: "Do you update my website for me?",
                  content:
                    "Yes. We handle content changes, page updates, image replacements, new sections, design improvements, and ongoing website enhancements.",
                },
                {
                  title: "Do you handle website security?",
                  content:
                    "Absolutely. We monitor website health, backups, security updates, and maintenance to help keep your website protected and performing properly.",
                },
                {
                  title: "Can you improve my SEO over time?",
                  content:
                    "Yes. Vixen Care includes ongoing SEO improvements, optimization recommendations, content enhancements, and performance monitoring.",
                },
                {
                  title: "What happens if something breaks?",
                  content:
                    "You have direct access to support. If issues arise, we investigate, troubleshoot, and resolve problems as quickly as possible.",
                },
                {
                  title: "Why not just build the website and leave it?",
                  content:
                    "Because websites require updates, monitoring, optimization, and support. Most businesses need a long-term technology partner, not just a launch-day developer.",
                },
              ].map((faq, index) => (
                <details
                  key={index}
                  className="group rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between p-7 text-left text-xl font-semibold text-white">
                    {faq.title}

                    <span className="text-3xl text-pink-400 transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>

                  <div className="px-7 pb-7 text-base leading-relaxed text-gray-300">
                    {faq.content}
                  </div>
                </details>
              ))}
            </div>

            <div className="mt-16 text-center">
              <button className="rounded-2xl bg-white px-8 py-4 font-semibold text-pink-600 transition hover:scale-105">
                Book A Free Consultation
              </button>
            </div>
          </div>
        </section>

        <section id="pricing" className="relative overflow-hidden bg-white px-6 py-32 text-black">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -left-32 top-20 h-[500px] w-[500px] rounded-full bg-cyan-300/20 blur-3xl" />
            <div className="absolute right-0 top-0 h-[450px] w-[450px] rounded-full bg-purple-300/20 blur-3xl" />
            <div className="absolute bottom-0 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-pink-300/20 blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="mb-20 text-center">
              <div className="mb-5 inline-flex rounded-full border border-gray-200 bg-white/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-gray-600 backdrop-blur-xl">
                Solutions & Pricing
              </div>

              <h2 className="text-4xl font-black tracking-tight text-gray-950 md:text-6xl">
                Flexible Solutions For Every Stage Of Growth.
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
                Whether you&apos;re launching your first website, scaling your business, building an app, or looking for ongoing management, Cyber Vixen Studios has a solution designed around your goals.
              </p>
            </div>

            <div className="mb-16 text-center">
              <div className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
                Website Building
              </div>

              <h3 className="mt-6 text-3xl font-bold text-gray-950 md:text-4xl">
                Professional Website Solutions For Growing Businesses
              </h3>

              <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
                Every website is custom built to help your business establish credibility, generate leads, and grow online. Choose the solution that best fits your goals.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              <div className="rounded-[36px] border border-cyan-200 bg-white/70 p-8 backdrop-blur-2xl">
                <div className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">Website Launch</div>
                <div className="mb-1 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                  Starting At
                </div>
                <div className="mb-6 text-4xl font-black text-cyan-600">75,000 KSH</div>
                <ul className="space-y-3 text-gray-700">
                  <li>✓ Custom Website Design</li>
                  <li>✓ Mobile Responsive Design</li>
                  <li>✓ Contact Forms</li>
                  <li>✓ Domain Connection</li>
                  <li>✓ Basic SEO Setup</li>
                  <li>✓ Google Maps Integration</li>
                  <li>✓ Launch Support</li>
                </ul>
                <button className="mt-8 w-full rounded-2xl bg-cyan-500 py-4 font-semibold text-white">Get Started</button>
              </div>

              <div className="rounded-[36px] border-2 border-pink-400 bg-gradient-to-b from-pink-50 to-white p-8 shadow-[0_0_50px_rgba(236,72,153,.15)]">
                <div className="mb-3 inline-flex rounded-full bg-pink-500 px-3 py-1 text-xs font-bold uppercase text-white">Most Popular</div>
                <div className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-pink-600">Website + Vixen Care</div>
                <div className="mb-1 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                  Setup + Monthly Care
                </div>
                <div className="text-4xl font-black text-pink-600">125,000 KSH</div>
                <div className="mb-6 mt-2 text-lg font-semibold text-gray-600">
                  + 65,000 KSH/month
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li>✓ Everything In Website Launch</li>
                  <li>✓ Website Updates</li>
                  <li>✓ Security Monitoring</li>
                  <li>✓ Website Backups</li>
                  <li>✓ Technical Support</li>
                  <li>✓ Performance Optimization</li>
                  <li>✓ SEO Improvements</li>
                  <li>✓ Content Changes</li>
                  <li>✓ Monthly Reporting</li>
                  <li>✓ Priority Support</li>
                  <li>✓ Ongoing Consultation</li>
                </ul>
                <button className="mt-8 w-full rounded-2xl bg-pink-500 py-4 font-semibold text-white">Book Consultation</button>
              </div>

              <div className="rounded-[36px] border border-purple-200 bg-white/70 p-8 backdrop-blur-2xl">
                <div className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-purple-600">Business Growth</div>
                <div className="mb-1 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                  Starting At
                </div>
                <div className="text-4xl font-black text-purple-600">175,000 KSH</div>
                <div className="mb-6 mt-2 text-lg font-semibold text-gray-600">
                  + Ad Budget
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li>✓ Google Ads Management</li>
                  <li>✓ Landing Pages</li>
                  <li>✓ Conversion Optimization</li>
                  <li>✓ Analytics Reporting</li>
                  <li>✓ Lead Tracking</li>
                  <li>✓ Monthly Strategy</li>
                  <li>✓ Growth Planning</li>
                </ul>
                <button className="mt-8 w-full rounded-2xl bg-purple-500 py-4 font-semibold text-white">Grow My Business</button>
              </div>
            </div>


            <div className="mt-20 rounded-[40px] border border-white/60 bg-white/70 p-12 text-center backdrop-blur-2xl">
              <h3 className="text-4xl font-black text-gray-950">Need Something Custom?</h3>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
                Every business is unique. Book a consultation and we&apos;ll create a custom solution tailored to your goals.
              </p>
              <button className="mt-8 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 px-10 py-4 font-semibold text-white">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-black px-6 py-32 text-white">
          <div className="absolute inset-0">
            <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-pink-500/10 blur-3xl" />
            <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
            <div>
              <div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-gray-300 backdrop-blur-xl">
                Meet The Founder
              </div>

              <h2 className="text-4xl font-black tracking-tight md:text-6xl">
                Built By A Developer.
                <span className="block bg-gradient-to-r from-pink-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Focused On Business Growth.
                </span>
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-gray-300">
                Hi, I&apos;m Arteja Grier, Founder of Cyber Vixen Studios. I help businesses build powerful digital experiences through custom websites, mobile applications, SEO optimization, automation, and ongoing website management.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-gray-300">
                My goal is simple: help business owners establish credibility online, attract more customers, and create systems that continue working long after launch.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 px-5 py-3 text-cyan-300">
                  Cloud Engineering
                </div>
                <div className="rounded-2xl border border-pink-500/30 bg-pink-500/10 px-5 py-3 text-pink-300">
                  Website Development
                </div>
                <div className="rounded-2xl border border-purple-500/30 bg-purple-500/10 px-5 py-3 text-purple-300">
                  Mobile Apps
                </div>
                <div className="rounded-2xl border border-green-500/30 bg-green-500/10 px-5 py-3 text-green-300">
                  SEO Growth
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl">
                <Image
                  src="/images/arteja-grier-cyber-vixen-studios.png"
                  alt="Arteja Grier - Founder of Cyber Vixen Studios"
                  width={900}
                  height={1100}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
