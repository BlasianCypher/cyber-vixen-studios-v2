import type { Metadata } from "next";
import Image from "next/image";
import { CalendlyButton } from "@/components/booking/CalendlyBooking";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Cyber Vixen Studios, a digital growth partner helping businesses build websites, mobile apps, SEO, advertising, automation, and ongoing website management.",
};

const skillBadges = [
  "Cloud Engineering",
  "Website Development",
  "Mobile Apps",
  "SEO Growth",
];

const reasons = [
  {
    title: "Custom Solutions",
    description: "Every business receives a strategy tailored to its goals.",
    accent: "from-pink-500/25 to-purple-500/10",
  },
  {
    title: "Growth Focused",
    description: "Designed to generate leads, increase visibility, and support growth.",
    accent: "from-cyan-500/25 to-purple-500/10",
  },
  {
    title: "Long-Term Partnership",
    description: "Through Vixen Care, we continue supporting your business long after launch.",
    accent: "from-purple-500/25 to-green-500/10",
  },
];

const timelineSteps = [
  { number: "01", title: "Websites" },
  { number: "02", title: "Mobile Apps" },
  { number: "03", title: "SEO" },
  { number: "04", title: "Google Ads" },
  { number: "05", title: "Automation" },
  { number: "06", title: "Vixen Care" },
];

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen overflow-hidden bg-white text-black">
        <section className="relative flex min-h-[620px] items-center px-6 py-24">
          <div className="absolute inset-0 bg-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(236,72,153,0.08),transparent_30%),radial-gradient(circle_at_top_right,rgba(6,182,212,0.08),transparent_30%),radial-gradient(circle_at_bottom,rgba(168,85,247,0.08),transparent_35%)]" />
          </div>

          <div className="relative z-10 mx-auto max-w-5xl text-center">
            <div className="mb-6 inline-flex rounded-full border border-gray-200 bg-white/80 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm backdrop-blur-xl">
              About Cyber Vixen Studios
            </div>

            <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-gray-950 md:text-7xl">
              Technology That Helps Businesses Grow.
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-gray-600 md:text-xl">
              Cyber Vixen Studios helps businesses build, manage, and grow their online presence through websites, mobile applications, SEO, advertising, automation, and ongoing website management.
            </p>

            <div className="mt-10 flex justify-center">
              <CalendlyButton className="rounded-2xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 px-8 py-4 font-semibold text-white shadow-xl shadow-pink-500/20 transition hover:scale-105">
                Book A Consultation
              </CalendlyButton>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-black px-6 py-32 text-white">
          <div className="absolute inset-0">
            <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-pink-500/10 blur-3xl" />
            <div className="absolute right-[-10%] bottom-[-10%] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
            <div className="relative">
              <div className="overflow-hidden rounded-[40px] border border-white/10 bg-white/5 shadow-2xl shadow-pink-500/10 backdrop-blur-xl">
                <Image
                  src="/images/arteja-grier-cyber-vixen-studios.png"
                  alt="Arteja Grier - Founder of Cyber Vixen Studios"
                  width={900}
                  height={1100}
                  priority
                  className="h-[700px] w-full object-cover"
                />
              </div>
            </div>

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

              <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-300">
                <p>Hi, I&apos;m Arteja Grier, Founder of Cyber Vixen Studios.</p>
                <p>
                  I help businesses establish a strong digital presence through custom websites, SEO optimization, cloud technologies, mobile applications, automation, and ongoing website management.
                </p>
                <p>
                  My goal is simple: help businesses build credibility, attract customers, and create digital systems that continue working long after launch.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                {skillBadges.map((skill, index) => (
                  <div
                    key={skill}
                    className={`rounded-2xl border px-5 py-3 ${
                      index === 0
                        ? "border-cyan-500/30 bg-cyan-500/10 text-cyan-300"
                        : index === 1
                          ? "border-pink-500/30 bg-pink-500/10 text-pink-300"
                          : index === 2
                            ? "border-purple-500/30 bg-purple-500/10 text-purple-300"
                            : "border-green-500/30 bg-green-500/10 text-green-300"
                    }`}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-white px-6 py-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(236,72,153,0.06),transparent_28%),radial-gradient(circle_at_right,rgba(6,182,212,0.06),transparent_28%)]" />
          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <div className="mb-5 inline-flex rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-gray-600 shadow-sm">
                Why Cyber Vixen Studios
              </div>
              <h2 className="text-4xl font-black tracking-tight text-gray-950 md:text-6xl">
                Built For Growth,
                <span className="block bg-gradient-to-r from-pink-500 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
                  Not Just Launch Day.
                </span>
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {reasons.map((reason) => (
                <div
                  key={reason.title}
                  className="group rounded-[32px] border border-gray-200 bg-white/80 p-8 shadow-xl shadow-gray-200/60 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10"
                >
                  <div className={`mb-8 h-2 w-20 rounded-full bg-gradient-to-r ${reason.accent}`} />
                  <h3 className="text-2xl font-black text-gray-950">{reason.title}</h3>
                  <p className="mt-4 leading-relaxed text-gray-600">{reason.description}</p>
                </div>
              ))}
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
                What We Do
              </div>

              <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
                A Complete Digital Growth System.
              </h2>
            </div>

            <div className="mx-auto mt-20 max-w-7xl">
              <div className="relative hidden pt-12 lg:block">
                <div className="absolute left-0 right-0 top-28 h-1 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 via-pink-500 to-green-500" />

                <div className="grid grid-cols-6 gap-4">
                  {timelineSteps.map((step, index) => {
                    const top = index % 2 === 0;
                    return (
                      <div key={step.number} className="relative flex flex-col items-center text-center">
                        {top ? (
                          <>
                            <div className="mb-4 rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                              <div className="text-3xl font-black text-white">{step.number}</div>
                              <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
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
                            </div>
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mx-auto max-w-md lg:hidden">
                <div className="relative">
                  <div className="absolute bottom-0 left-1/2 top-0 w-px -translate-x-1/2 bg-gradient-to-b from-cyan-500 via-purple-500 via-pink-500 to-green-500" />

                  {timelineSteps.map((step, index) => {
                    const left = index % 2 === 0;
                    return (
                      <div key={step.number} className="relative mb-12 flex items-center">
                        {left ? (
                          <>
                            <div className="w-[45%] rounded-3xl border border-white/10 bg-white/5 p-4 text-right backdrop-blur-xl">
                              <div className="text-3xl font-black text-white">{step.number}</div>
                              <h3 className="mt-2 text-lg font-semibold text-white">{step.title}</h3>
                            </div>
                            <div className="relative z-10 mx-auto flex h-6 w-6 items-center justify-center rounded-full border-4 border-cyan-400 bg-black shadow-[0_0_20px_rgba(34,211,238,.6)]" />
                            <div className="w-[45%]" />
                          </>
                        ) : (
                          <>
                            <div className="w-[45%]" />
                            <div className="relative z-10 mx-auto flex h-6 w-6 items-center justify-center rounded-full border-4 border-purple-400 bg-black shadow-[0_0_20px_rgba(168,85,247,.6)]" />
                            <div className="w-[45%] rounded-3xl border border-white/10 bg-white/5 p-4 text-left backdrop-blur-xl">
                              <div className="text-3xl font-black text-white">{step.number}</div>
                              <h3 className="mt-2 text-lg font-semibold text-white">{step.title}</h3>
                            </div>
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-white px-6 py-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(236,72,153,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.08),transparent_30%),radial-gradient(circle_at_center,rgba(168,85,247,0.06),transparent_35%)]" />
          <div className="relative z-10 mx-auto max-w-4xl rounded-[40px] border border-white/60 bg-white/70 p-10 text-center shadow-2xl shadow-gray-200 backdrop-blur-2xl md:p-16">
            <h2 className="text-4xl font-black tracking-tight text-gray-950 md:text-6xl">
              Ready To Grow Your Business?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              Let&apos;s build a digital presence that works as hard as you do.
            </p>
            <div className="mt-10 flex justify-center">
              <CalendlyButton className="rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 px-10 py-4 font-semibold text-white shadow-xl shadow-purple-500/20 transition hover:scale-105">
                Schedule A Consultation
              </CalendlyButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
