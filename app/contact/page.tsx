import type { Metadata } from "next"
import PageHeader from "@/components/PageHeader"
import ContactForm from "@/components/ContactForm"
import { Phone, Mail, MessageCircle, MapPin, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact — Planet Master's Nursery",
  description: "Get in touch with Planet Master's Nursery via phone, WhatsApp, email or our contact form.",
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
    detail: "Mon – Sat, 8:30 AM – 4:00 PM",
    tint: "bg-amber-100 text-amber-600",
  },
]

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        eyebrow="We'd Love to Hear From You"
        title="Get in Touch"
        description="Questions about admissions, programs or a campus visit? Reach out any way that's easiest for you."
        Icon={MessageCircle}
      />

      <section className="bg-[#FBF7FF] px-6 py-20 md:px-12">
        <div className="mx-auto max-w-6xl">
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
              <div className="flex h-64 flex-col items-center justify-center gap-3 rounded-3xl border border-black/5 bg-gradient-to-br from-teal-100 to-purple-100 shadow-sm lg:h-full">
                <MapPin className="h-10 w-10 text-purple-500" aria-hidden="true" />
                <p className="max-w-xs text-center text-sm text-slate-600">
                  Campus map placeholder — embed a Google Maps iframe here with your exact address.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
