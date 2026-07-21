import type { Metadata } from "next"
import PageHeader from "@/components/PageHeader"
import BookVisitForm from "@/components/BookVisitForm"
import GalaxyBackground from "@/components/GalaxyBackground"
import { SITE_URL } from "@/lib/seo"
import { CalendarDays } from "lucide-react"

export const metadata: Metadata = {
  title: "Book a Campus Visit — Nursery in Hadapsar, Pune",
  description:
    "Schedule a free campus tour at Planet Master's Nursery in Hadapsar, Pune. Meet our teachers and see our early childhood education programs in person.",
  alternates: { canonical: `${SITE_URL}/book-a-visit` },
  openGraph: {
    title: "Book a Visit — Planet Master's Nursery, Hadapsar",
    description: "Tour Hadapsar's favorite nursery and preschool before you apply.",
    url: `${SITE_URL}/book-a-visit`,
  },
}

export default function BookAVisitPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Schedule a Tour"
        title="Book a Visit to Our Hadapsar Campus"
        description="Come see our campus, meet the teachers, and experience a day in the life of a Planet Master's astronaut."
        Icon={CalendarDays}
      />

      <section className="relative overflow-hidden bg-[#FBF7FF] px-6 py-20 md:px-12">
        <GalaxyBackground tone="pink" density="medium" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(236,72,153,0.06), transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="sr-only">Book a visit to Planet Master&apos;s Nursery in Hadapsar</h2>
          <BookVisitForm />
        </div>
      </section>
    </main>
  )
}
