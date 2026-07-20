import type { Metadata } from "next"
import PageHeader from "@/components/PageHeader"
import AdmissionForm from "@/components/AdmissionForm"
import { ClipboardList, Search, Rocket, PartyPopper } from "lucide-react"

export const metadata: Metadata = {
  title: "Admissions — Planet Master's Nursery",
  description: "Admissions open for 2026-27. Learn the process and apply online.",
}

const STEPS = [
  {
    Icon: Search,
    title: "1. Explore & Enquire",
    text: "Browse our programs and reach out via the form, WhatsApp or a phone call.",
    tint: "bg-teal-100 text-teal-600",
  },
  {
    Icon: ClipboardList,
    title: "2. Schedule a Visit",
    text: "Tour our campus, meet the educators and see the classrooms in action.",
    tint: "bg-pink-100 text-pink-600",
  },
  {
    Icon: Rocket,
    title: "3. Submit Application",
    text: "Fill out the admission form below with your child's details and preferred program.",
    tint: "bg-purple-100 text-purple-600",
  },
  {
    Icon: PartyPopper,
    title: "4. Welcome Aboard",
    text: "Our admissions crew confirms your seat and shares the onboarding checklist.",
    tint: "bg-amber-100 text-amber-600",
  },
]

export default function AdmissionsPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Admissions Open 2026–27"
        title="Begin the Countdown to Admission"
        description="Reserve your little explorer's seat in four simple steps."
        Icon={Rocket}
      />

      <section className="bg-[#FBF7FF] px-6 py-20 md:px-12">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <div
              key={step.title}
              className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <span className={`flex h-12 w-12 items-center justify-center rounded-full ${step.tint}`}>
                <step.Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-base font-bold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <AdmissionForm />
    </main>
  )
}
