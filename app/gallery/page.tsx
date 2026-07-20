import type { Metadata } from "next"
import PageHeader from "@/components/PageHeader"
import CTASection from "@/components/CTASection"
import { Images } from "lucide-react"

export const metadata: Metadata = {
  title: "Gallery — Planet Master's Nursery",
  description: "A peek into everyday life at Planet Master's Nursery.",
}

// TODO: replace these placeholder tiles with real photos.
// 1) Drop your image files into the /public/gallery folder (e.g. /public/gallery/art-day.jpg).
// 2) Swap the `emoji` + `gradient` props below for an `image: "/gallery/art-day.jpg"` prop.
// 3) Render with next/image: <Image src={item.image} alt={item.caption} fill className="object-cover" />
const GALLERY_ITEMS = [
  { emoji: "🎨", caption: "Art & Craft Corner", gradient: "from-pink-200 to-pink-300" },
  { emoji: "🧩", caption: "Puzzle & Play Time", gradient: "from-purple-200 to-purple-300" },
  { emoji: "📚", caption: "Story Circle", gradient: "from-amber-200 to-amber-300" },
  { emoji: "🎶", caption: "Music & Rhymes", gradient: "from-teal-200 to-teal-300" },
  { emoji: "🌱", caption: "Nature Exploration", gradient: "from-emerald-200 to-emerald-300" },
  { emoji: "🚀", caption: "Space Themed Play", gradient: "from-indigo-200 to-indigo-300" },
  { emoji: "🍎", caption: "Snack Time", gradient: "from-rose-200 to-rose-300" },
  { emoji: "🏫", caption: "Our Campus", gradient: "from-sky-200 to-sky-300" },
  { emoji: "🎉", caption: "Celebrations", gradient: "from-fuchsia-200 to-fuchsia-300" },
]

export default function GalleryPage() {
  return (
    <main>
      <PageHeader
        eyebrow="A Peek Inside"
        title="Life at Planet Master's Nursery"
        description="Moments of curiosity, laughter and discovery from our little astronauts' everyday adventures."
        Icon={Images}
      />

      <section className="bg-[#FBF7FF] px-6 py-20 md:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-slate-500">
            These are placeholder tiles — swap them for real campus photos anytime (see the comment
            in <code className="rounded bg-white px-1.5 py-0.5">app/gallery/page.tsx</code>).
          </p>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-3">
            {GALLERY_ITEMS.map((item) => (
              <div
                key={item.caption}
                className="group relative aspect-square overflow-hidden rounded-3xl border border-black/5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className={`flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br ${item.gradient}`}
                >
                  <span className="text-5xl sm:text-6xl" role="img" aria-hidden="true">
                    {item.emoji}
                  </span>
                  <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-slate-800 backdrop-blur-sm sm:text-sm">
                    {item.caption}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  )
}
