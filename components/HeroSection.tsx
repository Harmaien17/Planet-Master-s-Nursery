import Link from "next/link"
import { Rocket, Star } from "lucide-react"

const TRUST_STATS = [
  { value: "100+", label: "Astronauts" },
  { value: "Only 1", label: "Branch" },
  { value: "4", label: "Years Experience" },
]

// Positions for the twinkling background dots (percent-based so they scale).
const STARS = [
  { top: "12%", left: "8%", size: 8, delay: 0, color: "bg-pink-300" },
  { top: "20%", left: "22%", size: 6, delay: 0.6, color: "bg-purple-300" },
  { top: "8%", left: "40%", size: 6, delay: 1.2, color: "bg-amber-300" },
  { top: "30%", left: "55%", size: 8, delay: 0.3, color: "bg-teal-300" },
  { top: "16%", left: "72%", size: 6, delay: 0.9, color: "bg-pink-300" },
  { top: "24%", left: "88%", size: 8, delay: 1.5, color: "bg-purple-300" },
  { top: "48%", left: "6%", size: 6, delay: 1.1, color: "bg-amber-300" },
  { top: "60%", left: "18%", size: 8, delay: 0.4, color: "bg-teal-300" },
  { top: "72%", left: "34%", size: 6, delay: 1.3, color: "bg-pink-300" },
  { top: "80%", left: "50%", size: 6, delay: 0.7, color: "bg-purple-300" },
  { top: "66%", left: "68%", size: 8, delay: 0.2, color: "bg-amber-300" },
  { top: "84%", left: "82%", size: 6, delay: 1.0, color: "bg-teal-300" },
  { top: "40%", left: "92%", size: 6, delay: 0.5, color: "bg-pink-300" },
  { top: "54%", left: "44%", size: 6, delay: 1.4, color: "bg-purple-300" },
]

// Small planets orbiting the mascot inside the frame.
const ORBIT_PLANETS = [
  { top: "6%", left: "10%", size: 44, color: "from-pink-300 to-pink-400", delay: 0 },
  { top: "18%", right: "8%", size: 30, color: "from-teal-200 to-teal-400", delay: 0.8 },
  { bottom: "14%", left: "6%", size: 36, color: "from-amber-200 to-amber-400", delay: 1.4 },
]

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#FDF2F8] via-[#F5F3FF] to-[#ECFEFF] min-h-[90vh] md:min-h-screen">
      {/* Decorative layers (never block interaction) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Twinkling pastel dots */}
        {STARS.map((star, i) => (
          <span
            key={i}
            className={`absolute rounded-full ${star.color} opacity-70 animate-pulse`}
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              animationDelay: `${star.delay}s`,
              animationDuration: "3s",
            }}
          />
        ))}

        {/* Soft glowing sun */}
        <div
          className="absolute right-[8%] top-[14%] hidden h-28 w-28 rounded-full blur-sm sm:block"
          style={{
            background:
              "radial-gradient(circle at 35% 35%, rgba(254,243,199,0.95), rgba(253,224,71,0.4) 70%)",
          }}
        />

        {/* Blurred colorful pastel planets */}
        <div className="absolute -left-16 top-24 hidden h-72 w-72 rounded-full bg-pink-300 opacity-40 blur-2xl sm:block" />
        <div className="absolute bottom-10 right-[-4rem] hidden h-80 w-80 rounded-full bg-teal-300 opacity-40 blur-2xl md:block" />
        <div className="absolute bottom-[-6rem] left-1/3 hidden h-64 w-64 rounded-full bg-purple-300 opacity-40 blur-2xl sm:block" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-6 py-16 md:flex-row md:px-12">
        {/* LEFT: text */}
        <div className="w-full text-center md:w-1/2 md:text-left">
          {/* Rocket badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-700">
            <Rocket className="h-4 w-4" aria-hidden="true" />
            <span>{"\u{1F680} Admissions Open 2026\u201327"}</span>
          </div>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 text-balance sm:text-5xl lg:text-6xl">
            Where Little Explorers Become{" "}
            <span className="bg-gradient-to-r from-amber-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Big Dreamers
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-base text-slate-600 text-pretty sm:text-lg md:mx-0">
            A premium early-learning journey where curiosity takes flight. We nurture confident,
            caring, and creative children through play-based discovery in a safe cosmic wonderland.
          </p>

          {/* Dual CTA */}
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
            <Link
              href="/book-a-visit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-pink-500/30 transition-transform hover:scale-105 sm:w-auto"
            >
              <Rocket className="h-5 w-5" aria-hidden="true" />
              Schedule a Visit
            </Link>
            <Link
              href="/programs"
              className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white/60 px-6 py-3 text-base font-semibold text-slate-700 transition-colors hover:bg-white sm:w-auto"
            >
              Explore Programs
            </Link>
          </div>

          {/* Trust row */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-slate-500 md:justify-start">
            {TRUST_STATS.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-4">
                {i > 0 && <span className="h-4 w-px bg-slate-300" aria-hidden="true" />}
                <span>
                  <span className="font-semibold text-slate-800">{stat.value}</span> {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: mascot visual */}
        <div className="flex w-full justify-center md:w-1/2">
          <div className="relative mx-auto w-full max-w-xs md:max-w-md">
            <div className="rounded-3xl border border-black/5 bg-gradient-to-br from-purple-200/70 to-pink-200/70 p-4 shadow-xl backdrop-blur-sm">
              <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-3xl bg-white">
                {/* Orbiting planets */}
                {ORBIT_PLANETS.map((planet, i) => (
                  <span
                    key={i}
                    className={`absolute rounded-full bg-gradient-to-br ${planet.color} shadow-lg animate-pulse`}
                    style={{
                      top: planet.top,
                      left: planet.left,
                      right: planet.right,
                      bottom: planet.bottom,
                      width: planet.size,
                      height: planet.size,
                      animationDelay: `${planet.delay}s`,
                      animationDuration: "4s",
                    }}
                    aria-hidden="true"
                  />
                ))}

                {/* Astronaut mascot */}
                <span
                  role="img"
                  aria-label="Friendly astronaut mascot waving"
                  className="select-none text-[120px] leading-none sm:text-[160px] animate-bounce"
                  style={{ animationDuration: "3s" }}
                >
                  {"\u{1F468}\u200D\u{1F680}"}
                </span>
              </div>
            </div>

            {/* Floating trust badge */}
            <div className="absolute -bottom-4 -left-4 flex items-center gap-2 rounded-2xl border border-black/5 bg-white px-4 py-3 shadow-xl">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
              </span>
              <span className="text-sm font-semibold text-slate-900">Trusted by 30+ Families</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
