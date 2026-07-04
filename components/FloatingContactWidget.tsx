"use client"

import { useState } from "react"
import { MessageCircle, Phone, Rocket } from "lucide-react"

const WHATSAPP_URL =
  "https://wa.me/919579534952?text=Hi!%20I%27d%20like%20to%20know%20more%20about%20admissions%20at%20Planet%20Master%27s%20Nursery"
const PHONE_NUMBER = "+919579534952"

export default function FloatingContactWidget() {
  // Collapsed by default so it never obscures content on first load (esp. mobile).
  const [open, setOpen] = useState(false)

  const handleWhatsApp = () => {
    window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer")
  }

  const handleCall = () => {
    window.location.href = `tel:${PHONE_NUMBER}`
  }

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-[100] flex flex-col items-end gap-3 max-w-[calc(100vw-2.5rem)]">
      {/* Action buttons launch upward from the toggle when opened */}
      <div
        className={`flex flex-col items-end gap-3 transition-all duration-300 ${
          open
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-4 scale-90 opacity-0"
        }`}
        aria-hidden={!open}
      >
        {/* WhatsApp */}
        <div className="relative group">
          <span className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 hidden sm:group-hover:flex bg-white text-[#0B0B2E] text-sm font-semibold px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Chat on WhatsApp
          </span>
          <button
            type="button"
            onClick={handleWhatsApp}
            aria-label="Chat with us on WhatsApp"
            className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-transform hover:scale-110 active:scale-95 bg-[#25D366]"
          >
            <span className="absolute inset-0 rounded-full animate-ping opacity-40 bg-[#25D366]" />
            <MessageCircle className="relative w-7 h-7 text-white" />
          </button>
        </div>

        {/* Call */}
        <div className="relative group">
          <span className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 hidden sm:group-hover:flex bg-white text-[#0B0B2E] text-sm font-semibold px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Call Us Now
          </span>
          <button
            type="button"
            onClick={handleCall}
            aria-label="Call Planet Master's Nursery"
            className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-transform hover:scale-110 active:scale-95 bg-gradient-to-br from-purple-500 to-purple-700"
          >
            <span
              className="absolute inset-0 rounded-full animate-ping opacity-40 bg-purple-600"
              style={{ animationDelay: "0.3s" }}
            />
            <Phone className="relative w-7 h-7 text-white" />
          </button>
        </div>
      </div>

      {/* Main toggle FAB */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close contact menu" : "Open contact menu"}
        aria-expanded={open}
        className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-pink-500 shadow-2xl flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
      >
        <Rocket
          className={`w-7 h-7 text-white transition-transform duration-300 ${open ? "rotate-45" : "rotate-0"}`}
        />
      </button>
    </div>
  )
}
