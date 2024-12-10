import type { Metadata } from 'next'
import AboutUsPage from "@/components/About Page/about-page"
import Footer from "@/components/Footer/footer"
import Navbar from "@/components/Navbar/navbar"

export const metadata: Metadata = {
  title: 'About Clean Slate Pressure Washing NOLA',
  description: 'Learn about Clean Slate Pressure Washing NOLA, our history, values, and commitment to top-quality pressure washing services in Louisiana and surrounding areas.',
  openGraph: {
    title: 'About Clean Slate Pressure Washing NOLA',
    description: 'Discover the story behind Clean Slate Pressure Washing NOLA and our dedication to excellence in pressure washing services across Louisiana and beyond.',
    url: 'https://cleanslatepressurewashingnola.com/about',
    siteName: 'Clean Slate Pressure Washing NOLA',
    images: [
      {
        url: 'https://cleanslatepressurewashingnola.com/cleanslatelogo.webp',
        width: 1200,
        height: 630,
        alt: 'Clean Slate Pressure Washing NOLA Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Clean Slate Pressure Washing NOLA',
    description: 'Learn about our commitment to excellence in pressure washing services in Louisiana and surrounding areas.',
    images: ['https://cleanslatepressurewashingnola.com/cleanslatelogo.webp'],
  },
  alternates: {
    canonical: 'https://cleanslatepressurewashingnola.com/about',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  mainEntity: {
    '@type': 'LocalBusiness',
    name: 'Clean Slate Pressure Washing NOLA',
    description: 'Clean Slate Pressure Washing NOLA is committed to providing top-quality pressure washing services across Louisiana and surrounding areas with a focus on customer satisfaction and environmental responsibility.',
    image: 'https://cleanslatepressurewashingnola.com/cleanslatelogo.webp',
    areaServed: [
      {
        '@type': 'State',
        name: 'Louisiana',
        containsPlace: [
          { '@type': 'City', name: 'New Orleans' },
          { '@type': 'City', name: 'Baton Rouge' },
          { '@type': 'City', name: 'Shreveport' },
          { '@type': 'City', name: 'Lafayette' },
          { '@type': 'City', name: 'Lake Charles' },
          { '@type': 'City', name: 'Kenner' },
          { '@type': 'City', name: 'Bossier City' },
          { '@type': 'City', name: 'Monroe' }
        ]
      },
      {
        '@type': 'State',
        name: 'Mississippi',
        containsPlace: [
          { '@type': 'City', name: 'Jackson' },
          { '@type': 'City', name: 'Gulfport' },
          { '@type': 'City', name: 'Southaven' },
          { '@type': 'City', name: 'Hattiesburg' },
          { '@type': 'City', name: 'Biloxi' },
          { '@type': 'City', name: 'Meridian' },
          { '@type': 'City', name: 'Tupelo' },
          { '@type': 'City', name: 'Greenville' }
        ]
      },
      {
        '@type': 'State',
        name: 'Texas',
        containsPlace: [
          { '@type': 'City', name: 'Houston' },
          { '@type': 'City', name: 'San Antonio' },
          { '@type': 'City', name: 'Dallas' },
          { '@type': 'City', name: 'Austin' },
          { '@type': 'City', name: 'Fort Worth' },
          { '@type': 'City', name: 'El Paso' },
          { '@type': 'City', name: 'Arlington' },
          { '@type': 'City', name: 'Corpus Christi' }
        ]
      }
    ],
    priceRange: '$$'
  }
}

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="w-full bg-gray-100 dark:bg-gray-800">
          <AboutUsPage />
        </section>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  )
}
