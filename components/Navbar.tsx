"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Rocket, Menu, X } from "lucide-react"

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/programs" },
  { label: "Why Us", href: "/why-us" },
  { label: "Gallery", href: "/gallery" },
  { label: "Admissions", href: "/admissions" },
  { label: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-colors duration-300 ${
          scrolled ? "backdrop-blur-md bg-white/80 border-b border-black/5 shadow-sm" : "bg-[#FBF7FF]/70 backdrop-blur-sm"
        }`}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12"
        >
          <Link href="/" className="flex items-center gap-2 font-extrabold tracking-tight">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-100">
              <Rocket className="h-5 w-5 text-amber-500" aria-hidden="true" />
            </span>
            <span className="text-lg text-slate-900">Planet Master&apos;s Nursery</span>
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm font-medium transition-colors hover:text-pink-500 ${
                      active ? "text-pink-500" : "text-slate-600"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              href="/book-a-visit"
              className="hidden rounded-full bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-pink-500/30 transition-transform hover:scale-105 sm:inline-block"
            >
              Book a Visit
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 lg:hidden"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-gradient-to-b from-[#FDF2F8] via-[#F5F3FF] to-[#ECFEFF] lg:hidden">
          <div className="flex items-center justify-between px-6 py-4">
            <span className="flex items-center gap-2 font-extrabold">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-100">
                <Rocket className="h-5 w-5 text-amber-500" aria-hidden="true" />
              </span>
              <span className="text-lg text-slate-900">Planet Master&apos;s Nursery</span>
            </span>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div className="flex flex-1 flex-col items-center justify-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-semibold text-slate-700 transition-colors hover:text-pink-500"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book-a-visit"
              onClick={() => setMobileOpen(false)}
              className="mt-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-pink-500/30"
            >
              Book a Visit
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
