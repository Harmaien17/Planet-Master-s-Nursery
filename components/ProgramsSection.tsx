import {
  Sparkles,
  Rocket,
  Star,
  Compass,
  CheckCircle2,
  ArrowRight,
  type LucideIcon,
} from "lucide-react"

type Program = {
  name: string
  age: string
  Icon: LucideIcon
  highlights: string[]
  // Static class strings — Tailwind cannot safely interpolate dynamic color names.
  badgeGradient: string
  badgeShadow: string
  ringBorder: string
  ageText: string
  bulletIcon: string
  linkText: string
  hoverBorder: string
  hoverShadow: string
  cardTint: string
}

const programs: Program[] = [
  {
    name: "Playgroup",
    age: "Age 2 – 3 years",
    Icon: Sparkles,
    highlights: [
      "Sensory play & motor skill discovery",
      "Gentle separation & social bonding",
      "Music, rhymes and story circles",
      "Nap, snack and self-care routines",
    ],
    badgeGradient: "from-teal-300 to-teal-500",
    badgeShadow: "shadow-teal-400/40",
    ringBorder: "border-teal-300",
    ageText: "text-teal-600",
    bulletIcon: "text-teal-500",
    linkText: "text-teal-600",
    hoverBorder: "hover:border-teal-300",
    hoverShadow: "hover:shadow-teal-200/60",
    cardTint: "bg-teal-50/60",
  },
  {
    name: "Nursery",
    age: "Age 3 – 4 years",
    Icon: Rocket,
    highlights: [
      "Early phonics & vocabulary building",
      "Hands-on counting and shapes",
      "Creative art, craft and role play",
      "Group games for teamwork skills",
    ],
    badgeGradient: "from-pink-300 to-pink-500",
    badgeShadow: "shadow-pink-400/40",
    ringBorder: "border-pink-300",
    ageText: "text-pink-600",
    bulletIcon: "text-pink-500",
    linkText: "text-pink-600",
    hoverBorder: "hover:border-pink-300",
    hoverShadow: "hover:shadow-pink-200/60",
    cardTint: "bg-pink-50/60",
  },
  {
    name: "Lower KG",
    age: "Age 4 – 5 years",
    Icon: Star,
    highlights: [
      "Reading readiness & sight words",
      "Number sense and simple addition",
      "Curiosity-led science experiments",
      "Confidence through show & tell",
    ],
    badgeGradient: "from-purple-300 to-purple-500",
    badgeShadow: "shadow-purple-400/40",
    ringBorder: "border-purple-300",
    ageText: "text-purple-600",
    bulletIcon: "text-purple-500",
    linkText: "text-purple-600",
    hoverBorder: "hover:border-purple-300",
    hoverShadow: "hover:shadow-purple-200/60",
    cardTint: "bg-purple-50/60",
  },
  {
    name: "Upper KG",
    age: "Age 5 – 6 years",
    Icon: Compass,
    highlights: [
      "Fluent reading & sentence writing",
      "Problem-solving with numbers",
      "Big-school transition readiness",
      "Leadership and public speaking",
    ],
    badgeGradient: "from-amber-300 to-amber-500",
    badgeShadow: "shadow-amber-400/40",
    ringBorder: "border-amber-300",
    ageText: "text-amber-600",
    bulletIcon: "text-amber-500",
    linkText: "text-amber-600",
    hoverBorder: "hover:border-amber-300",
    hoverShadow: "hover:shadow-amber-200/60",
    cardTint: "bg-amber-50/60",
  },
]

export default function ProgramsSection() {
  return (
    <section className="relative overflow-hidden bg-[#FBF7FF] px-6 py-20 md:px-12">
      
      {/* ========================================= */}
      {/* 🚀 MASSIVE BACKGROUND GALAXY ELEMENTS 🚀 */}
      {/* ========================================= */}
      
      {/* Ambient Glows */}
      <div className="pointer-events-none absolute -left-40 -top-20 hidden h-[500px] w-[500px] rounded-full bg-teal-200/40 blur-[100px] md:block" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-24 -right-40 hidden h-[600px] w-[600px] rounded-full bg-pink-200/40 blur-[120px] md:block" aria-hidden="true" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-100/50 blur-[80px] md:block" aria-hidden="true" />

      {/* Scattered Stars & Sparkles */}
      <div className="absolute top-10 left-10 md:left-32 text-teal-300/60 animate-[spin_15s_linear_infinite] pointer-events-none">
        <Star className="w-10 h-10" fill="currentColor" />
      </div>
      <div className="absolute top-40 right-10 md:right-20 text-amber-300/50 animate-[spin_20s_linear_infinite] pointer-events-none">
        <Star className="w-8 h-8" fill="currentColor" />
      </div>
      <div className="absolute bottom-20 right-10 md:right-32 text-pink-300/60 animate-pulse pointer-events-none">
        <Sparkles className="w-14 h-14" />
      </div>
      <div className="absolute top-1/4 right-1/4 text-purple-300/60 animate-bounce pointer-events-none">
        <Sparkles className="w-8 h-8" />
      </div>
      <div className="absolute bottom-1/3 left-10 md:left-24 text-teal-300/40 animate-[spin_10s_linear_infinite] pointer-events-none">
        <Star className="w-6 h-6" fill="currentColor" />
      </div>

      {/* SVG Planet 1: Ringed Planet (Top Left) */}
      <div className="absolute -top-10 -left-10 md:top-20 md:left-5 w-40 h-40 text-teal-300/20 rotate-12 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
          <circle cx="50" cy="50" r="25" />
          <ellipse cx="50" cy="50" rx="45" ry="12" transform="rotate(-20 50 50)" fill="none" stroke="currentColor" strokeWidth="5" />
        </svg>
      </div>

      {/* SVG Planet 2: Small Moon (Center Right) */}
      <div className="absolute top-1/3 -right-10 md:right-10 w-32 h-32 text-amber-300/20 -rotate-12 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
          <circle cx="50" cy="50" r="30" />
          <circle cx="40" cy="40" r="6" fill="white" opacity="0.4" />
          <circle cx="65" cy="55" r="10" fill="white" opacity="0.4" />
          <circle cx="45" cy="70" r="4" fill="white" opacity="0.4" />
        </svg>
      </div>

      {/* SVG Planet 3: Striped Gas Giant (Bottom Left) */}
      <div className="absolute bottom-10 -left-10 md:bottom-10 md:left-20 w-48 h-48 text-purple-300/15 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
          <circle cx="50" cy="50" r="45" />
          <path d="M 10 35 Q 50 20 90 35" fill="none" stroke="white" strokeWidth="6" opacity="0.3" />
          <path d="M 5 50 Q 50 45 95 50" fill="none" stroke="white" strokeWidth="6" opacity="0.3" />
          <path d="M 10 65 Q 50 70 90 65" fill="none" stroke="white" strokeWidth="6" opacity="0.3" />
        </svg>
      </div>

      {/* SVG Planet 4: Large Ringed Planet (Bottom Right) */}
      <div className="absolute -bottom-20 -right-20 md:-bottom-10 md:right-1/4 w-64 h-64 text-pink-300/15 rotate-[45deg] pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
          <circle cx="50" cy="50" r="30" />
          <ellipse cx="50" cy="50" rx="50" ry="10" transform="rotate(30 50 50)" fill="none" stroke="currentColor" strokeWidth="3" />
          <ellipse cx="50" cy="50" rx="60" ry="15" transform="rotate(30 50 50)" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      {/* Floating Stardust (Tiny Dots) */}
      <div className="absolute top-1/4 right-1/3 w-3 h-3 rounded-full bg-teal-300/50 animate-pulse pointer-events-none" />
      <div className="absolute top-2/3 left-1/4 w-2 h-2 rounded-full bg-pink-300/50 animate-bounce pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-4 h-4 rounded-full bg-purple-300/40 animate-pulse pointer-events-none" />
      <div className="absolute top-10 left-1/2 w-3 h-3 rounded-full bg-amber-300/60 animate-ping pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-2 h-2 rounded-full bg-slate-300/50 animate-pulse pointer-events-none" />

      {/* ========================================= */}
      {/* END BACKGROUND ELEMENTS */}
      {/* ========================================= */}

      <div className="relative mx-auto max-w-7xl z-10">
        {/* Eyebrow */}
        <div className="mx-auto mb-4 w-fit rounded-full bg-amber-100 px-4 py-1 text-sm font-medium text-amber-700">
          Our Missions
        </div>

        {/* Heading */}
        <h2 className="text-balance text-center text-3xl font-extrabold text-slate-900 sm:text-4xl md:text-5xl">
          Choose Your Child&apos;s Space Mission
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-center text-slate-600">
          Every age group is a new planet to explore. Our carefully crafted programs guide little
          astronauts from their very first steps to confident, curious learners ready for big school.
        </p>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {programs.map((program) => {
            const { Icon } = program
            return (
              <article
                key={program.name}
                className={`group relative flex h-full flex-col rounded-3xl border border-black/5 ${program.cardTint} backdrop-blur-md p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${program.hoverBorder} ${program.hoverShadow}`}
              >
                {/* Icon badge with orbiting dashed ring */}
                <div className="relative mb-5 h-16 w-16">
                  <span
                    className={`absolute -inset-2 rounded-full border border-dashed ${program.ringBorder} animate-[spin_10s_linear_infinite] group-hover:animate-[spin_5s_linear_infinite]`}
                    aria-hidden="true"
                  />
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br shadow-lg transition-transform duration-500 group-hover:scale-110 ${program.badgeGradient} ${program.badgeShadow}`}
                  >
                    <Icon className="h-8 w-8 text-white" aria-hidden="true" />
                  </div>
                </div>

                {/* Name + age */}
                <h3 className="mb-1 text-xl font-bold text-slate-900">{program.name}</h3>
                <p className={`mb-4 text-sm font-medium ${program.ageText}`}>{program.age}</p>

                {/* Divider */}
                <div className="my-4 border-t border-black/5" />

                {/* Highlights */}
                <ul className="flex flex-col">
                  {program.highlights.map((item) => (
                    <li
                      key={item}
                      className="mb-2 flex items-start gap-2 text-sm leading-snug text-slate-700 font-medium"
                    >
                      <CheckCircle2
                        className={`mt-0.5 h-4 w-4 flex-shrink-0 ${program.bulletIcon}`}
                        aria-hidden="true"
                      />
                      <span className="min-w-0 break-words">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Know More */}
                <button
                  type="button"
                  className={`mt-auto flex w-full items-center justify-between gap-1 pt-4 text-sm font-bold transition-all group-hover:gap-3 ${program.linkText}`}
                >
                  Know More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </button>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}