import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import FloatingContactWidget from '@/components/FloatingContactWidget'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SITE_URL, SITE_NAME, getLocalBusinessSchema } from '@/lib/seo'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Best Nursery in Hadapsar, Pune | Planet Master's Nursery",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Planet Master's Nursery is a premium early childhood education preschool in Hadapsar, Pune, offering Playgroup, Nursery, Lower KG and Upper KG. Admissions open for 2026-27.",
  keywords: [
    'Best Nursery in Hadapsar',
    'Preschool in Pune',
    'Nursery in Hadapsar',
    'Early Childhood Education',
    'Playgroup Hadapsar',
    'Kindergarten Hadapsar Pune',
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: 'education',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    siteName: SITE_NAME,
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Planet Master's Nursery Hadapsar Pune",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [`${SITE_URL}/og-image.jpg`],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const localBusinessSchema = getLocalBusinessSchema()

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-[#FBF7FF]`}>
      <head>
        {/* Google Analytics Tag */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-G19CZXHDRL"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-G19CZXHDRL');
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased bg-[#FBF7FF] text-slate-900">
        {/* LocalBusiness / Preschool structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Navbar />
        {children}
        <Footer />
        <FloatingContactWidget />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}