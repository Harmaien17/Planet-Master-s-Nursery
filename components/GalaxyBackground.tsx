import { Star, Sparkles, Rocket, Moon, Globe2 } from "lucide-react"

type Tone = "pink" | "purple" | "amber" | "teal" | "mixed"
type Density = "light" | "medium" | "heavy"

type GalaxyBackgroundProps = {
  tone?: Tone
  density?: Density
  className?: string
}

const TONE_GLOWS: Record<Tone, [string, string, string]> = {
  pink: ["bg-pink-200/30", "bg-purple-200/30", "bg-amber-100/30"],
  purple: ["bg-purple-200/30", "bg-pink-200/30", "bg-teal-100/30"],
  amber: ["bg-amber-200/30", "bg-teal-100/30", "bg-pink-100/30"],
  teal: ["bg-teal-200/30", "bg-purple-100/30", "bg-amber-100/30"],
  mixed: ["bg-pink-200/25", "bg-teal-200/25", "bg-purple-100/25"],
}

const ICON_TONES: Record<Tone, string[]> = {
  pink: ["text-pink-300/60", "text-purple-300/50", "text-amber-300/50"],
  purple: ["text-purple-300/60", "text-pink-300/50", "text-teal-300/50"],
  amber: ["text-amber-300/60", "text-teal-300/50", "text-pink-300/50"],
  teal: ["text-teal-300/60", "text-purple-300/50", "text-amber-300/50"],
  mixed: ["text-pink-300/50", "text-teal-300/50", "text-purple-300/50", "text-amber-300/50"],
}

/**
 * A purely decorative, pointer-events-none layer of floating icons, blurred
 * ambient glows, and faded SVG planets. Drop inside any `relative` section to
 * apply the site's "Space Launchpad" theme consistently. Never obstructs
 * interaction or reduces text contrast.
 */
export default function GalaxyBackground({
  tone = "mixed",
  density = "medium",
  className = "",
}: GalaxyBackgroundProps) {
  const [glowA, glowB, glowC] = TONE_GLOWS[tone]
  const iconTones = ICON_TONES[tone]
  const showExtra = density !== "light"
  const showHeavy = density === "heavy"

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {/* Ambient blurred glows */}
      <div
        className={`absolute -left-32 -top-20 hidden h-[420px] w-[420px] rounded-full ${glowA} blur-[100px] md:block`}
      />
      <div
        className={`absolute -right-32 bottom-0 hidden h-[420px] w-[420px] rounded-full ${glowB} blur-[100px] md:block`}
      />
      {showExtra && (
        <div
          className={`absolute left-1/2 top-1/2 hidden h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full ${glowC} blur-[80px] lg:block`}
        />
      )}

      {/* Floating Lucide icons */}
      <Star
        className={`absolute left-[8%] top-[14%] h-8 w-8 ${iconTones[0]} animate-[spin_18s_linear_infinite]`}
        fill="currentColor"
      />
      <Sparkles
        className={`absolute right-[10%] top-[22%] h-10 w-10 ${iconTones[1]} animate-pulse`}
        style={{ animationDuration: "3.5s" }}
      />
      {showExtra && (
        <>
          <Moon
            className={`absolute left-[14%] bottom-[18%] hidden h-9 w-9 ${iconTones[2]} animate-bounce sm:block`}
            style={{ animationDuration: "4s" }}
          />
          <Globe2
            className={`absolute right-[16%] bottom-[12%] hidden h-8 w-8 ${iconTones[0]} animate-[spin_24s_linear_infinite] sm:block`}
          />
        </>
      )}
      {showHeavy && (
        <>
          <Rocket
            className={`absolute left-[45%] top-[8%] hidden h-7 w-7 ${iconTones[1]} rotate-45 animate-pulse md:block`}
            style={{ animationDuration: "3s" }}
          />
          <Star
            className={`absolute right-[6%] top-[55%] h-5 w-5 ${iconTones[2]} animate-[spin_14s_linear_infinite]`}
            fill="currentColor"
          />
          <Sparkles
            className={`absolute left-[6%] top-[50%] hidden h-6 w-6 ${iconTones[3] ?? iconTones[0]} animate-bounce lg:block`}
            style={{ animationDuration: "3.2s" }}
          />
        </>
      )}

      {/* Faded SVG planets */}
      <div className={`absolute -top-10 -right-10 h-40 w-40 ${iconTones[0]} rotate-12 opacity-70 md:h-48 md:w-48`}>
        <svg viewBox="0 0 100 100" className="h-full w-full fill-current">
          <circle cx="50" cy="50" r="25" />
          <ellipse
            cx="50"
            cy="50"
            rx="45"
            ry="12"
            transform="rotate(-20 50 50)"
            fill="none"
            stroke="currentColor"
            strokeWidth="5"
          />
        </svg>
      </div>

      {showExtra && (
        <div className={`absolute bottom-6 -left-10 h-32 w-32 ${iconTones[2]} opacity-70 md:h-40 md:w-40`}>
          <svg viewBox="0 0 100 100" className="h-full w-full fill-current">
            <circle cx="50" cy="50" r="30" />
            <circle cx="40" cy="40" r="6" fill="white" opacity="0.4" />
            <circle cx="65" cy="55" r="10" fill="white" opacity="0.4" />
            <circle cx="45" cy="70" r="4" fill="white" opacity="0.4" />
          </svg>
        </div>
      )}

      {showHeavy && (
        <div className={`absolute bottom-0 right-0 hidden h-56 w-56 ${iconTones[1]} translate-x-1/4 translate-y-1/4 rotate-45 opacity-60 lg:block`}>
          <svg viewBox="0 0 100 100" className="h-full w-full fill-current">
            <circle cx="50" cy="50" r="35" />
            <ellipse cx="50" cy="50" rx="55" ry="10" transform="rotate(30 50 50)" fill="none" stroke="currentColor" strokeWidth="3" />
            <ellipse cx="50" cy="50" rx="65" ry="15" transform="rotate(30 50 50)" fill="none" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>
      )}

      {/* Floating stardust */}
      <div className={`absolute left-[22%] top-[30%] h-2 w-2 rounded-full ${glowA.replace("/30", "/70")} animate-pulse`} />
      <div className={`absolute right-[28%] top-[65%] h-1.5 w-1.5 rounded-full ${glowB.replace("/30", "/70")} animate-bounce`} />
      {showExtra && (
        <div className={`absolute left-[38%] bottom-[22%] h-2.5 w-2.5 rounded-full ${glowC.replace("/30", "/60")} animate-ping`} />
      )}
    </div>
  )
}
