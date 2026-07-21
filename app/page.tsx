import type { Metadata } from "next"
import HeroSection from "@/components/HeroSection"
import ProgramsSection from "@/components/ProgramsSection"
import TrustMetricsSection from "@/components/TrustMetricsSection"
import CTASection from "@/components/CTASection"
import { SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Best Nursery in Hadapsar, Pune | Planet Master's Nursery",
  description:
    "Planet Master's Nursery is the best nursery and preschool in Hadapsar, Pune, offering play-based early childhood education for Playgroup, Nursery, Lower KG and Upper KG. Admissions open for 2026-27.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Best Nursery in Hadapsar, Pune | Planet Master's Nursery",
    description:
      "Premium early-learning journey for ages 2-6 in Hadapsar, Pune. Admissions open for 2026-27 — book a visit today.",
    url: SITE_URL,
    type: "website",
  },
}

export default function Page() {
  return (
    <main>
      <HeroSection />
      <ProgramsSection />
      <TrustMetricsSection />
      <CTASection />
    </main>
  )
}
