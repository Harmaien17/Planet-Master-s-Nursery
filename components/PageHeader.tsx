import type { LucideIcon } from "lucide-react"

type PageHeaderProps = {
  eyebrow: string
  title: string
  description: string
  Icon?: LucideIcon
}

export default function PageHeader({ eyebrow, title, description, Icon }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FDF2F8] via-[#F5F3FF] to-[#ECFEFF] px-6 py-16 md:px-12 md:py-24">
      <div
        className="pointer-events-none absolute -left-24 top-10 hidden h-72 w-72 rounded-full bg-pink-200 opacity-40 blur-3xl sm:block"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 hidden h-72 w-72 rounded-full bg-teal-200 opacity-40 blur-3xl sm:block"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-700">
          {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
          <span>{eyebrow}</span>
        </div>
        <h1 className="mt-6 text-balance text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-base text-slate-600 sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  )
}
