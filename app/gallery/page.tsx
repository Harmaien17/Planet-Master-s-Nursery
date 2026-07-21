import type { Metadata } from "next"
import PageHeader from "@/components/PageHeader"
import CTASection from "@/components/CTASection"
import GalaxyBackground from "@/components/GalaxyBackground"
import { SITE_URL } from "@/lib/seo"
import { Images } from "lucide-react"

export const metadata: Metadata = {
  title: "Gallery — A Day at Our Nursery in Hadapsar, Pune",
  description:
    "See everyday moments of play-based early childhood education at Planet Master's Nursery — the best nursery in Hadapsar, Pune. Art, music, story time and more.",
  alternates: { canonical: `${SITE_URL}/gallery` },
  openGraph: {
    title: "Gallery — Planet Master's Nursery, Hadapsar",
    description: "A peek into everyday life at Hadapsar's favorite nursery and preschool.",
    url: `${SITE_URL}/gallery`,
  },
}

// TODO: replace these placeholder tiles with real campus photos.
// 1) Drop your image files into /public/gallery (e.g. /public/gallery/art-day.webp — export
//    photos as WebP for the smallest file size; Next.js will further optimize them on request).
// 2) Swap the `emoji` + `gradient` props below for an `image: "/gallery/art-day.webp"` prop.
// 3) Render with next/image so Next serves an auto-optimized, responsive WebP/AVIF file:
//      <Image
//        src={item.image}
//        alt={item.alt}          // keep the keyword-rich alt text below — great for Google Images
//        fill
//        sizes="(min-width: 1024px) 33vw, 50vw"
//        className="object-cover"
//      />
const GALLERY_ITEMS = [
  {
    emoji: "🎨",
    caption: "Art & Craft Corner",
    alt: "Children doing art and craft activities at Planet Master's Nursery in Hadapsar, Pune",
    gradient: "from-pink-200 to-pink-300",
  },
  {
    emoji: "🧩",
    caption: "Puzzle & Play Time",
    alt: "Preschool students playing with puzzles during early childhood education at Hadapsar nursery",
    gradient: "from-purple-200 to-purple-300",
  },
  {
    emoji: "📚",
    caption: "Story Circle",
    alt: "Teacher reading a story to nursery kids during story circle time in Hadapsar, Pune",
    gradient: "from-amber-200 to-amber-300",
  },
  {
    emoji: "🎶",
    caption: "Music & Rhymes",
    alt: "Toddlers singing rhymes during a music session at the best nursery in Hadapsar",
    gradient: "from-teal-200 to-teal-300",
  },
  {
    emoji: "🌱",
    caption: "Nature Exploration",
    alt: "Young children exploring nature and plants at Planet Master's Nursery campus",
    gradient: "from-emerald-200 to-emerald-300",
  },
  {
    emoji: "🚀",
    caption: "Space Themed Play",
    alt: "Kids enjoying space-themed play activities at a preschool in Pune",
    gradient: "from-indigo-200 to-indigo-300",
  },
  {
    emoji: "🍎",
    caption: "Snack Time",
    alt: "Preschool children enjoying a healthy snack break at Hadapsar nursery",
    gradient: "from-rose-200 to-rose-300",
  },
  {
    emoji: "🏫",
    caption: "Our Campus",
    alt: "Planet Master's Nursery campus building in Hadapsar, Pune, Maharashtra",
    gradient: "from-sky-200 to-sky-300",
  },
  {
    emoji: "🎉",
    caption: "Celebrations",
    alt: "Children celebrating a festival at the best preschool in Hadapsar, Pune",
    gradient: "from-fuchsia-200 to-fuchsia-300",
  },
]

export default function GalleryPage() {
  return (
    <main>
      <PageHeader
        eyebrow="A Peek Inside"
        title="A Day at the Best Nursery in Hadapsar"
        description="Moments of curiosity, laughter and discovery from our little astronauts' everyday adventures at our Hadapsar, Pune campus."
        Icon={Images}
      />

      <section className="relative overflow-hidden bg-[#FBF7FF] px-6 py-20 md:px-12">
        <GalaxyBackground tone="teal" density="medium" />
        <div className="relative mx-auto max-w-7xl">
          <h2 className="sr-only">Photo gallery of early childhood education activities in Hadapsar</h2>
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
                  role="img"
                  aria-label={item.alt}
                >
                  <span className="text-5xl sm:text-6xl" aria-hidden="true">
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
