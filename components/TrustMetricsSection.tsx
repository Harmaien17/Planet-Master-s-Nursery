"use client"

import { useEffect, useRef, useState } from "react"
import {
  ShieldCheck,
  GraduationCap,
  Puzzle,
  Smile,
  MapPin,
  Heart,
  CheckCircle2,
  Star,
  Sparkles,
} from "lucide-react"

function useCountUp(target: number, duration = 1500, start = false) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return
    let raf: number
    const startTime = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) {
        raf = requestAnimationFrame(tick)
      }
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, duration, start])

  return value
}

type CounterCardProps = {
  target: number
  suffix?: string
  label: string
  icon: React.ReactNode
  gradient: string
  border: string
  numberColor: string
  start: boolean
}

function CounterCard({
  target,
  suffix = "",
  label,
  icon,
  gradient,
  border,
  numberColor,
  start,
}: CounterCardProps) {
  const value = useCountUp(target, 1500, start)

  return (
    <div
      className={`${gradient} ${border} rounded-3xl p-6 flex flex-col items-center justify-center text-center shadow-sm relative overflow-hidden`}
    >
      <div className="mb-2 relative z-10">{icon}</div>
      <div className={`text-4xl font-extrabold ${numberColor} relative z-10`}>
        {value}
        {suffix}
      </div>
      <p className="text-slate-500 text-sm mt-1 relative z-10">{label}</p>
    </div>
  )
}

export default function TrustMetricsSection() {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const safetyChecklist = [
    "Hygienic Sanitized Campus",
    "Trained Emergency Staff",
    "Child-Safe Non-Toxic Materials",
    "Secure Entry & Exit Logs",
    "First-Aid & CPR Certified Teachers",
    "Daily Toy Disinfection",
    "Child-Proofed Play Zones",
    "Allergy-Aware Environment",
  ]

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#FBF7FF] py-20 px-6 md:px-12"
    >
      {/* Decorative blurred pastel planets — desktop only */}
      <div
        className="pointer-events-none absolute -left-32 top-10 hidden h-80 w-80 rounded-full bg-amber-200 opacity-30 blur-3xl md:block"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-0 hidden h-80 w-80 rounded-full bg-purple-200 opacity-30 blur-3xl md:block"
        aria-hidden="true"
      />

      {/* Floating Space Elements (Stars & Planets) */}
      <div className="absolute top-12 right-10 md:right-32 text-amber-300/40 animate-[spin_20s_linear_infinite] pointer-events-none">
        <Star className="w-12 h-12" fill="currentColor" />
      </div>
      <div className="absolute bottom-20 left-10 md:left-20 text-purple-300/50 animate-pulse pointer-events-none">
        <Sparkles className="w-16 h-16" />
      </div>

      <div className="absolute -top-10 -right-10 md:top-20 md:right-20 w-32 h-32 text-pink-300/30 -rotate-12 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
          <circle cx="50" cy="50" r="30" />
          <ellipse cx="50" cy="50" rx="45" ry="15" transform="rotate(-20 50 50)" fill="none" stroke="currentColor" strokeWidth="6" />
        </svg>
      </div>

      <div className="absolute bottom-10 -left-10 md:bottom-20 md:left-20 w-40 h-40 text-teal-300/20 rotate-12 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
          <circle cx="50" cy="50" r="25" />
          <circle cx="70" cy="30" r="5" fill="white" />
          <path d="M 20 50 A 30 30 0 0 0 80 50" fill="none" stroke="currentColor" strokeWidth="4" />
        </svg>
      </div>

      {/* Header */}
      <div className="relative max-w-2xl mx-auto text-center z-10">
        <span className="inline-flex items-center rounded-full bg-amber-100 border border-amber-300 px-4 py-1.5 text-amber-700 text-sm font-medium">
          Why Parents Trust Us
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 text-center mt-5 text-balance">
          Our Space Launchpad
        </h2>
        <p className="text-slate-600 text-base sm:text-lg mt-4 text-pretty">
          Every mission is built on safety, expert guidance, and a whole lot of
          joyful learning that keeps little astronauts thriving.
        </p>
      </div>

      {/* Bento grid */}
      <div className="relative grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-5 max-w-7xl mx-auto mt-14 z-10">
        
        {/* 1. Safety & Hygiene - large feature tile */}
        <div className="relative overflow-hidden md:col-span-2 md:row-span-2 bg-gradient-to-br from-purple-50 to-purple-100/70 border border-purple-200 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
          {/* Faded Watermark Planet inside the card */}
          <div className="absolute -bottom-16 -right-16 w-72 h-72 text-purple-200/50 pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
              <circle cx="50" cy="50" r="30" />
              <ellipse cx="50" cy="50" rx="45" ry="15" transform="rotate(-30 50 50)" fill="none" stroke="currentColor" strokeWidth="6" />
            </svg>
          </div>

          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-purple-200/70 border border-purple-300 flex items-center justify-center">
              <ShieldCheck className="w-7 h-7 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mt-6">
              Safety &amp; Hygiene
            </h3>
            <p className="text-slate-600 mt-2 leading-relaxed">
              Your child explores the galaxy in a secure, spotless environment.
              We hold ourselves to mission-grade standards so parents can relax
              at every launch.
            </p>
          </div>
          <ul className="relative z-10 flex flex-col gap-3 mt-8">
            {safetyChecklist.map((item) => (
              <li key={item} className="flex items-center gap-3 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 2. Trained Space Educators */}
        <div className="md:col-span-2 bg-white border border-black/5 rounded-3xl p-6 flex items-center gap-5 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
          <div className="w-14 h-14 shrink-0 rounded-full bg-pink-100 border border-pink-200 flex items-center justify-center relative z-10">
            <GraduationCap className="w-7 h-7 text-pink-500" />
          </div>
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-slate-900">
              Trained Space Educators
            </h3>
            <p className="text-slate-600 mt-1 leading-relaxed">
              Certified, caring teachers trained in early-childhood development
              guide every young explorer.
            </p>
          </div>
        </div>

        {/* 3. Play-Based Stellar Pedagogy */}
        <div className="md:col-span-1 bg-white border border-black/5 rounded-3xl p-6 flex flex-col items-center text-center shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
          <div className="w-14 h-14 rounded-full bg-teal-100 border border-teal-200 flex items-center justify-center">
            <Puzzle className="w-7 h-7 text-teal-500" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 mt-4">
            Play-Based Stellar Pedagogy
          </h3>
          <p className="text-slate-500 text-sm mt-2 leading-relaxed">
            Curiosity-led play turns every lesson into an adventure.
          </p>
        </div>

        {/* 4. Happy Astronauts Counter */}
        <CounterCard
          target={100}
          suffix="+"
          label="Happy Astronauts"
          start={visible}
          gradient="bg-gradient-to-br from-amber-50 to-amber-100/70"
          border="border border-amber-200"
          numberColor="text-amber-600"
          icon={<Smile className="w-6 h-6 text-amber-500" />}
        />

        {/* 5. Single Branch Counter */}
        <CounterCard
          target={1}
          label="Trusted Branch"
          start={visible}
          gradient="bg-gradient-to-br from-teal-50 to-teal-100/70"
          border="border border-teal-200"
          numberColor="text-teal-600"
          icon={<MapPin className="w-6 h-6 text-teal-500" />}
        />

        {/* 6. Parent Satisfaction Counter */}
        <CounterCard
          target={98}
          suffix="%"
          label="Parent Satisfaction"
          start={visible}
          gradient="bg-gradient-to-br from-pink-50 to-pink-100/70"
          border="border border-pink-200"
          numberColor="text-pink-600"
          icon={<Heart className="w-6 h-6 text-pink-500" />}
        />
      </div>
    </section>
  )
}
