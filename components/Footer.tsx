import Link from "next/link"
import { Rocket, Phone, Mail, MapPin, MessageCircle } from "lucide-react"

const WHATSAPP_URL =
  "https://wa.me/919579534952?text=Hi!%20I%27d%20like%20to%20know%20more%20about%20admissions%20at%20Planet%20Master%27s%20Nursery"
const PHONE_NUMBER = "+91 95795 34952"
const PHONE_HREF = "tel:+919579534952"
const EMAIL = "hello@planetmastersnursery.com"
const MAPS_URL =
  "https://www.google.com/maps/dir//Planet+master's+nursery,+FWXV%2BGXH,+Satav+Plot,+Amardip+Pratishthan,+Utkarsh+Nagar,+Hadapsar,+Pune,+Maharashtra+411028/@18.5011468,73.9242248,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bc2c35d225a0367:0xc31cdec3643633bc!2m2!1d73.9449724!2d18.4988052?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D"

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/programs" },
  { label: "Why Us", href: "/why-us" },
  { label: "Gallery", href: "/gallery" },
  { label: "Admissions", href: "/admissions" },
  { label: "Contact", href: "/contact" },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-black/5 bg-[#FBF7FF] px-6 py-14 md:px-12">
      <div
        className="pointer-events-none absolute -bottom-24 left-1/4 hidden h-72 w-72 rounded-full bg-purple-200 opacity-30 blur-3xl md:block"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 md:grid-cols-4">
        {/* Brand */}
        <div className="sm:col-span-2 md:col-span-1">
          <Link href="/" className="flex items-center gap-2 font-extrabold tracking-tight">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-100">
              <Rocket className="h-5 w-5 text-amber-500" aria-hidden="true" />
            </span>
            <span className="text-lg text-slate-900">Planet Master&apos;s Nursery</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-600">
            A premium early-learning journey where curiosity takes flight — nurturing confident,
            caring, and creative little explorers.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-sm font-semibold text-slate-900">Quick Links</h3>
          <ul className="mt-4 space-y-2.5">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-slate-600 transition-colors hover:text-pink-500"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold text-slate-900">Get in Touch</h3>
          <ul className="mt-4 space-y-3">
            <li>
              <a href={PHONE_HREF} className="flex items-center gap-2 text-sm text-slate-600 hover:text-pink-500">
                <Phone className="h-4 w-4 shrink-0 text-purple-500" aria-hidden="true" />
                {PHONE_NUMBER}
              </a>
            </li>
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-600 hover:text-pink-500"
              >
                <MessageCircle className="h-4 w-4 shrink-0 text-emerald-500" aria-hidden="true" />
                WhatsApp Us
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-sm text-slate-600 hover:text-pink-500">
                <Mail className="h-4 w-4 shrink-0 text-pink-500" aria-hidden="true" />
                {EMAIL}
              </a>
            </li>
          </ul>
        </div>

        {/* Visit */}
        <div>
          <h3 className="text-sm font-semibold text-slate-900">Visit Us</h3>
          <p className="mt-4 flex items-start gap-2 text-sm text-slate-600">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" aria-hidden="true" />
            <a 
              href={MAPS_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors"
            >
              Planet Master&apos;s Nursery, Satav Plot, Utkarsh Nagar, Hadapsar, Pune 411028
            </a>
          </p>
          <Link
            href="/book-a-visit"
            className="mt-4 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-500 px-5 py-2 text-sm font-semibold text-white shadow-md shadow-pink-500/30 transition-transform hover:scale-105"
          >
            Book a Visit
          </Link>
        </div>
      </div>

      <div className="relative mx-auto mt-12 max-w-7xl border-t border-black/5 pt-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Planet Master&apos;s Nursery. All rights reserved.
      </div>
    </footer>
  )
}