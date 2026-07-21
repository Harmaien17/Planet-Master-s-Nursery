export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://planet-master-s-nursery.vercel.app"

export const SITE_NAME = "Planet Master's Nursery"

export const BUSINESS = {
  name: "Planet Master's Nursery",
  legalName: "Planet Master's Nursery",
  phone: "+919579534952",
  phoneDisplay: "+91 95795 34952",
  email: "hello@planetmastersnursery.com",
  streetAddress: "Satav Plot, Amardip Pratishthan, Utkarsh Nagar",
  addressLocality: "Hadapsar",
  addressRegion: "Maharashtra",
  postalCode: "411028",
  addressCountry: "IN",
  // Pulled from the pinned Google Maps location — verify in Google Business Profile.
  latitude: 18.4988052,
  longitude: 73.9449724,
  // Add real profile URLs once available (Instagram, Facebook, Google Business Profile, etc.)
  sameAs: [
    "https://share.google/jKQZBk8QwuojYSVgs",
    "https://youtube.com/@sairashaikh6220"
  ],
}

export const FULL_ADDRESS = `${BUSINESS.streetAddress}, ${BUSINESS.addressLocality}, Pune, ${BUSINESS.addressRegion} ${BUSINESS.postalCode}`

// Local-SEO keyword phrases woven naturally into headings/descriptions across pages.
export const LOCAL_KEYWORDS = [
  "Best Nursery in Hadapsar",
  "Preschool in Pune",
  "Nursery in Hadapsar",
  "Early Childhood Education",
  "Playgroup in Hadapsar",
]

/**
 * LocalBusiness + Preschool JSON-LD structured data.
 * Rendered once, site-wide, from app/layout.tsx.
 */
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Preschool", "LocalBusiness"],
    "@id": `${SITE_URL}/#organization`,
    name: BUSINESS.name,
    alternateName: "Planet Masters Nursery",
    description:
      "Planet Master's Nursery is a premium early-learning preschool in Hadapsar, Pune, offering Playgroup, Nursery, Lower KG and Upper KG programs rooted in play-based, curiosity-led early childhood education.",
    url: SITE_URL,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    priceRange: "₹₹",
    image: `${SITE_URL}/og-image.jpg`,
    logo: `${SITE_URL}/og-image.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.streetAddress,
      addressLocality: BUSINESS.addressLocality,
      addressRegion: BUSINESS.addressRegion,
      postalCode: BUSINESS.postalCode,
      addressCountry: BUSINESS.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.latitude,
      longitude: BUSINESS.longitude,
    },
    hasMap: `https://www.google.com/maps?q=${BUSINESS.latitude},${BUSINESS.longitude}`,
    areaServed: [
      { "@type": "City", name: "Pune" },
      { "@type": "Place", name: "Hadapsar" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:30",
        closes: "16:00",
      },
    ],
    sameAs: BUSINESS.sameAs,
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Playgroup (Age 2–3)",
          description: "Sensory play, motor skill discovery, and social bonding for toddlers.",
          provider: { "@type": "Organization", name: BUSINESS.name },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Nursery (Age 3–4)",
          description: "Early phonics, vocabulary building, and hands-on counting.",
          provider: { "@type": "Organization", name: BUSINESS.name },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Lower KG (Age 4–5)",
          description: "Reading readiness, sight words, and curiosity-led science experiments.",
          provider: { "@type": "Organization", name: BUSINESS.name },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Upper KG (Age 5–6)",
          description: "Fluent reading, sentence writing, and big-school transition readiness.",
          provider: { "@type": "Organization", name: BUSINESS.name },
        },
      },
    ],
  }
}