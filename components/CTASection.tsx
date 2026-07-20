import Link from "next/link"
import { Rocket, CalendarDays } from "lucide-react"

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-pink-100 via-purple-100 to-teal-100 px-6 py-16 md:px-12">
      <div
        className="pointer-events-none absolute -top-10 left-10 h-40 w-40 rounded-full bg-white/40 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
        <h2 className="text-balance text-3xl font-extrabold text-slate-900 sm:text-4xl">
          Ready to Launch Your Child&apos;s Journey?
        </h2>
        <p className="max-w-xl text-pretty text-slate-600">
          Seats for the 2026–27 mission are filling fast. Come tour our campus or start your
          application today.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/book-a-visit"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-pink-500/30 transition-transform hover:scale-105"
          >
            <CalendarDays className="h-5 w-5" aria-hidden="true" />
            Book a Visit
          </Link>
          <Link
            href="/admissions"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3.5 text-base font-semibold text-slate-700 transition-colors hover:bg-slate-50"
          >
            <Rocket className="h-5 w-5" aria-hidden="true" />
            Start Application
          </Link>
        </div>
      </div>
    </section>
  )
}
