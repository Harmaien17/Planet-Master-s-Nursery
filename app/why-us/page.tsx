import type { Metadata } from "next"
import PageHeader from "@/components/PageHeader"
import TrustMetricsSection from "@/components/TrustMetricsSection"
import CTASection from "@/components/CTASection"
import GalaxyBackground from "@/components/GalaxyBackground"
import { SITE_URL } from "@/lib/seo"
import { Sparkles, Utensils, Bus, Palette, BookOpenCheck, Users, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Why We're the Best Nursery in Hadapsar, Pune",
  description:
    "Discover why Planet Master's Nursery is Hadapsar's most trusted preschool: certified educators, safety-first campus, small class sizes and joyful early childhood education.",
  alternates: { canonical: `${SITE_URL}/why-us` },
  openGraph: {
    title: "Why Us — Planet Master's Nursery, Hadapsar, Pune",
    description: "What makes us the best nursery in Hadapsar for early childhood education.",
    url: `${SITE_URL}/why-us`,
  },
}

const DIFFERENTIATORS = [
  {
    Icon: Utensils,
    title: "Nutritious Snacks",
    text: "Freshly prepared, kid-friendly snacks that fuel little explorers through the day.",
    tint: "bg-amber-100 text-amber-600",
  },
  {
    Icon: Bus,
    title: "Safe Pickup & Drop",
    text: "Supervised pickup & drop with trained staff for peace of mind.",
    tint: "bg-teal-100 text-teal-600",
  },
  {
    Icon: Palette,
    title: "Creative Expression",
    text: "Dedicated art, music and role-play time built into every single day.",
    tint: "bg-pink-100 text-pink-600",
  },
  {
    Icon: BookOpenCheck,
    title: "Progress You Can See",
    text: "Regular parent updates and portfolios tracking every milestone.",
    tint: "bg-purple-100 text-purple-600",
  },
  {
    Icon: Users,
    title: "Small Class Sizes",
    text: "Low child-to-teacher ratios so every astronaut gets individual attention.",
    tint: "bg-amber-100 text-amber-600",
  },
  {
    Icon: Sparkles,
    title: "Joy-First Learning",
    text: "Curiosity-led, play-based methods that make learning feel like an adventure.",
    tint: "bg-teal-100 text-teal-600",
  },
]

export default function WhyUsPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Why Parents Trust Us"
        title="Why We're the Best Nursery in Hadapsar"
        description="Every mission is built on safety, expert guidance, and a whole lot of joyful early childhood education."
        Icon={Sparkles}
      />

      <TrustMetricsSection />

      {/* Extra differentiators */}
      <section className="relative overflow-hidden bg-[#FBF7FF] px-6 py-20 md:px-12">
        <GalaxyBackground tone="pink" density="medium" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto mb-4 w-fit rounded-full bg-pink-100 px-4 py-1 text-sm font-medium text-pink-700">
            More Reasons to Love Us
          </div>
          <h2 className="text-balance text-center text-3xl font-extrabold text-slate-900 sm:text-4xl">
            The Little Details That Matter
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DIFFERENTIATORS.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <span className={`flex h-12 w-12 items-center justify-center rounded-full ${item.tint}`}>
                  <item.Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="bg-white px-6 py-20 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full bg-amber-100 px-4 py-1 text-sm font-medium text-amber-700">
            <MapPin className="h-4 w-4" />
            Our Campus
          </div>
          <h2 className="text-balance text-center text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Come See For Yourself
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
            Located in the heart of Hadapsar. We&apos;d love to show you around our safe and creative learning environment.
           </p>

          <div className="mt-12 overflow-hidden rounded-3xl border border-black/5 shadow-xl bg-slate-50">
            <iframe
              title="Planet Master's Nursery Location"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Planet%20master's%20nursery,%20Satav%20Plot,%20Utkarsh%20Nagar,%20Hadapsar,%20Pune,%20Maharashtra%20411028&t=&z=15&ie=UTF8&iwloc=B&output=embed"
              className="w-full grayscale-[20%] transition-all duration-500 hover:grayscale-0"
            />
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  )
}