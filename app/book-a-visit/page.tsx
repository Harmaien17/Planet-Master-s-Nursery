import type { Metadata } from "next"
import PageHeader from "@/components/PageHeader"
import BookVisitForm from "@/components/BookVisitForm"
import { CalendarDays } from "lucide-react"

export const metadata: Metadata = {
  title: "Book a Visit — Planet Master's Nursery",
  description: "Schedule a campus tour at Planet Master's Nursery.",
}

export default function BookAVisitPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Schedule a Tour"
        title="Book a Visit"
        description="Come see our campus, meet the teachers, and experience a day in the life of a Planet Master's astronaut."
        Icon={CalendarDays}
      />

      <section className="relative bg-[#FBF7FF] px-6 py-20 md:px-12">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(236,72,153,0.06), transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-2xl">
          <BookVisitForm />
        </div>
      </section>
    </main>
  )
}
