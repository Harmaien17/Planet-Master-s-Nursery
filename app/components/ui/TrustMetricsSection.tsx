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
} from "lucide-react"

function useCountUp(target: number, duration = 1500, start = false) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return
    let raf: number
    const startTime = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      // easeOutCubic for a natural deceleration
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
      className={`${gradient} ${border} rounded-3xl p-6 flex flex-col items-center justify-center text-center`}
    >
      <div className="mb-2">{icon}</div>
      <div className={`text-4xl font-extrabold ${numberColor}`}>
        {value}
        {suffix}
      </div>
      <p className="text-white/60 text-sm mt-1">{label}</p>
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
    "CCTV Monitored",
    "Hygienic Sanitized Campus",
    "Trained Emergency Staff",
  ]

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#0B0B2E] to-[#14143F] py-20 px-6 md:px-12"
    >
      {/* Header */}
      <div className="max-w-2xl mx-auto text-center">
        <span className="inline-flex items-center rounded-full bg-yellow-400/10 border border-yellow-400/40 px-4 py-1.5 text-yellow-300 text-sm font-medium">
          Why Parents Trust Us
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white text-center mt-5 text-balance">
          Our Space Launchpad
        </h2>
        <p className="text-white/60 text-base sm:text-lg mt-4 text-pretty">
          Every mission is built on safety, expert guidance, and a whole lot of
          joyful learning that keeps little astronauts thriving.
        </p>
      </div>

      {/* Bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-5 max-w-7xl mx-auto mt-14">
        {/* 1. Safety & Hygiene - large feature tile */}
        <div className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-purple-600/20 to-purple-900/20 border border-purple-400/20 rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:-translate-y-1 hover:border-white/30 transition-all duration-300">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-purple-500/25 border border-purple-400/30 flex items-center justify-center">
              <ShieldCheck className="w-7 h-7 text-purple-200" />
            </div>
            <h3 className="text-2xl font-bold text-white mt-6">
              Safety &amp; Hygiene
            </h3>
            <p className="text-white/60 mt-2 leading-relaxed">
              Your child explores the galaxy in a secure, spotless environment.
              We hold ourselves to mission-grade standards so parents can relax
              at every launch.
            </p>
          </div>
          <ul className="flex flex-col gap-3 mt-8">
            {safetyChecklist.map((item) => (
              <li key={item} className="flex items-center gap-3 text-white/80">
                <CheckCircle2 className="w-5 h-5 text-purple-300 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 2. Trained Space Educators */}
        <div className="md:col-span-2 bg-[#12123A] border border-white/10 rounded-3xl p-6 flex items-center gap-5 hover:-translate-y-1 hover:border-white/30 transition-all duration-300">
          <div className="w-14 h-14 shrink-0 rounded-full bg-pink-500/20 border border-pink-400/30 flex items-center justify-center">
            <GraduationCap className="w-7 h-7 text-pink-300" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">
              Trained Space Educators
            </h3>
            <p className="text-white/60 mt-1 leading-relaxed">
              Certified, caring teachers trained in early-childhood development
              guide every young explorer.
            </p>
          </div>
        </div>

        {/* 3. Play-Based Stellar Pedagogy */}
        <div className="md:col-span-1 bg-[#12123A] border border-white/10 rounded-3xl p-6 flex flex-col items-center text-center hover:-translate-y-1 hover:border-white/30 transition-all duration-300">
          <div className="w-14 h-14 rounded-full bg-teal-500/20 border border-teal-400/30 flex items-center justify-center">
            <Puzzle className="w-7 h-7 text-teal-300" />
          </div>
          <h3 className="text-lg font-bold text-white mt-4">
            Play-Based Stellar Pedagogy
          </h3>
          <p className="text-white/60 text-sm mt-2 leading-relaxed">
            Curiosity-led play turns every lesson into an adventure.
          </p>
        </div>

        {/* 4. Happy Astronauts Counter */}
        <CounterCard
          target={100}
          suffix="+"
          label="Happy Astronauts"
          start={visible}
          gradient="bg-gradient-to-br from-yellow-400/20 to-orange-500/10"
          border="border border-yellow-400/20"
          numberColor="text-yellow-300"
          icon={<Smile className="w-6 h-6 text-yellow-300" />}
        />

        {/* 5. Single Branch Counter */}
        <CounterCard
          target={1}
          label="Trusted Branch"
          start={visible}
          gradient="bg-gradient-to-br from-teal-400/20 to-emerald-500/10"
          border="border border-teal-400/20"
          numberColor="text-teal-300"
          icon={<MapPin className="w-6 h-6 text-teal-300" />}
        />

        {/* 6. Parent Satisfaction Counter */}
        <CounterCard
          target={98}
          suffix="%"
          label="Parent Satisfaction"
          start={visible}
          gradient="bg-gradient-to-br from-pink-500/20 to-rose-500/10"
          border="border border-pink-400/20"
          numberColor="text-pink-300"
          icon={<Heart className="w-6 h-6 text-pink-300" />}
        />
      </div>
    </section>
  )
}
