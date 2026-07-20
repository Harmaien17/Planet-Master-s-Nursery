import type { Metadata } from "next"
import PageHeader from "@/components/PageHeader"
import ProgramsSection from "@/components/ProgramsSection"
import CTASection from "@/components/CTASection"
import { Rocket, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Programs — Planet Master's Nursery",
  description: "Explore our age-based space missions: Playgroup, Nursery, Lower KG and Upper KG.",
}

const SCHEDULE = [
  { time: "8:30 – 9:00 AM", activity: "Welcome & Free Play" },
  { time: "9:00 – 9:30 AM", activity: "Morning Circle & Show and Tell" },
  { time: "9:30 – 10:15 AM", activity: "Structured Learning (Phonics / Numbers)" },
  { time: "10:15 – 10:45 AM", activity: "Snack Time" },
  { time: "10:45 – 11:30 AM", activity: "Art, Craft & Sensory Play" },
  { time: "11:30 – 12:15 PM", activity: "Outdoor / Motor Skills Play" },
  { time: "12:15 – 1:00 PM", activity: "Story Time & Wind Down" },
]

export default function ProgramsPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Our Missions"
        title="Programs for Every Little Astronaut"
        description="From first steps to big-school readiness — a program designed for every stage of early childhood."
        Icon={Rocket}
      />

      <ProgramsSection />

      {/* Daily schedule */}
      <section className="relative bg-[#FBF7FF] px-6 py-20 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="mx-auto mb-4 w-fit rounded-full bg-teal-100 px-4 py-1 text-sm font-medium text-teal-700">
            A Day in Orbit
          </div>
          <h2 className="text-balance text-center text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Sample Daily Schedule
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-center text-slate-600">
            A gentle, predictable rhythm that balances structured learning with plenty of joyful play.
          </p>

          <div className="mt-12 overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm">
            {SCHEDULE.map((item, i) => (
              <div
                key={item.time}
                className={`flex items-center gap-4 px-6 py-4 ${
                  i !== SCHEDULE.length - 1 ? "border-b border-black/5" : ""
                } ${i % 2 === 0 ? "bg-purple-50/40" : "bg-white"}`}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-purple-100">
                  <Clock className="h-4 w-4 text-purple-500" aria-hidden="true" />
                </span>
                <span className="w-40 shrink-0 text-sm font-semibold text-slate-800">{item.time}</span>
                <span className="text-sm text-slate-600">{item.activity}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  )
}
