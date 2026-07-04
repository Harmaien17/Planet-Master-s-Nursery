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
      {/* Decorative blurred pastel planets — desktop only */}
      <div
        className="pointer-events-none absolute -left-40 -top-20 hidden h-96 w-96 rounded-full bg-teal-200 opacity-30 blur-3xl md:block"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -right-40 hidden h-96 w-96 rounded-full bg-pink-200 opacity-30 blur-3xl md:block"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
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
                className={`group relative flex h-full flex-col rounded-3xl border border-black/5 ${program.cardTint} p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${program.hoverBorder} ${program.hoverShadow}`}
              >
                {/* Icon badge with orbiting dashed ring */}
                <div className="relative mb-5 h-16 w-16">
                  <span
                    className={`absolute -inset-2 rounded-full border border-dashed ${program.ringBorder}`}
                    aria-hidden="true"
                  />
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br shadow-lg transition-transform group-hover:scale-110 ${program.badgeGradient} ${program.badgeShadow}`}
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
                      className="mb-2 flex items-start gap-2 text-sm leading-snug text-slate-600"
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
                  className={`mt-auto flex w-full items-center justify-between gap-1 pt-4 text-sm font-semibold transition-all group-hover:gap-3 ${program.linkText}`}
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
