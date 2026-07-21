
import type { Metadata } from "next"
import PageHeader from "@/components/PageHeader"
import ContactForm from "@/components/ContactForm"
import GalaxyBackground from "@/components/GalaxyBackground"
import { SITE_URL } from "@/lib/seo"
import { Phone, Mail, MessageCircle, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us — Best Nursery in Hadapsar, Pune",
  description:
    "Contact Planet Master's Nursery in Hadapsar, Pune for admissions, program details or to book a campus visit. Call, WhatsApp, email or visit us directly.",
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: "Contact Planet Master's Nursery — Hadapsar, Pune",
    description: "Reach Hadapsar's favorite nursery and preschool by phone, WhatsApp, or email.",
    url: `${SITE_URL}/contact`,
  },
}

const WHATSAPP_URL =
  "https://wa.me/919579534952?text=Hi!%20I%27d%20like%20to%20know%20more%20about%20Planet%20Master%27s%20Nursery"

const CONTACT_CARDS = [
  {
    Icon: Phone,
    title: "Call Us",
    detail: "+91 95795 34952",
    href: "tel:+919579534952",
    tint: "bg-purple-100 text-purple-600",
  },
  {
    Icon: MessageCircle,
    title: "WhatsApp",
    detail: "Chat with our admissions team",
    href: WHATSAPP_URL,
    external: true,
    tint: "bg-emerald-100 text-emerald-600",
  },
  {
    Icon: Mail,
    title: "Email",
    detail: "hello@planetmastersnursery.com",
    href: "mailto:hello@planetmastersnursery.com",
    tint: "bg-pink-100 text-pink-600",
  },
  {
    Icon: Clock,
    title: "Office Hours",
    detail: "Mon – Sat, 10:00 AM – 4:00 PM",
    tint: "bg-amber-100 text-amber-600",
  },
]

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        eyebrow="We'd Love to Hear From You"
        title="Contact the Best Nursery in Hadapsar"
        description="Questions about admissions, programs or a campus visit? Reach out any way that's easiest for you."
        Icon={MessageCircle}
      />

      <section className="relative overflow-hidden bg-[#FBF7FF] px-6 py-20 md:px-12">
        <GalaxyBackground tone="amber" density="medium" />
        <div className="relative mx-auto max-w-6xl">
          <h2 className="sr-only">Ways to reach Planet Master&apos;s Nursery in Hadapsar</h2>
          {/* Contact method cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CONTACT_CARDS.map((card) => {
              const content = (
                <>
                  <span className={`flex h-12 w-12 items-center justify-center rounded-full ${card.tint}`}>
                    <card.Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-slate-900">{card.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{card.detail}</p>
                </>
              )
              const cardClass =
                "rounded-3xl border border-black/5 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"

              return card.href ? (
                <a
                  key={card.title}
                  href={card.href}
                  target={card.external ? "_blank" : undefined}
                  rel={card.external ? "noopener noreferrer" : undefined}
                  className={cardClass}
                >
                  {content}
                </a>
              ) : (
                <div key={card.title} className={cardClass}>
                  {content}
                </div>
              )
            })}
          </div>

          {/* Form + Map */}
          <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2">
            <ContactForm />

            <div className="flex flex-col gap-6">
              <div className="overflow-hidden rounded-3xl border border-black/5 shadow-sm h-64 lg:h-full min-h-[350px] bg-slate-50">
                <iframe
                  title="Planet Master's Nursery Location"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "100%" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Planet%20master's%20nursery,%20Satav%20Plot,%20Utkarsh%20Nagar,%20Hadapsar,%20Pune,%20Maharashtra%20411028&t=&z=15&ie=UTF8&iwloc=B&output=embed"
                  className="w-full h-full grayscale-[20%] transition-all duration-500 hover:grayscale-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
