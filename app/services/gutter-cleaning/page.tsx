import type { Metadata } from 'next'
import Footer from "@/components/Footer/footer"
import Navbar from "@/components/Navbar/navbar"
import GutterCleaning from "@/components/Services Pages/gutter-cleaning"

export const metadata: Metadata = {
  title: 'Professional Gutter Cleaning Services | Clean Slate Pressure Washing NOLA',
  description: 'Protect your Louisiana, Mississippi, and Texas home from water damage with our expert gutter cleaning services. We remove debris and ensure proper water flow.',
  openGraph: {
    title: 'Expert Gutter Cleaning Services | Clean Slate Pressure Washing NOLA',
    description: 'Keep your gutters clear and functional with our professional cleaning services. Prevent water damage and extend the life of your home in Louisiana, Mississippi, and Texas.',
    images: [
      {
        url: 'https://cleanslatepressurewashingnola.com/cleanslatelogo.webp',
        width: 1200,
        height: 630,
        alt: 'Clean Slate Pressure Washing NOLA Logo',
      },
    ],
    type: 'website',
    locale: 'en_US',
    siteName: 'Clean Slate Pressure Washing NOLA',
    url: 'https://cleanslatepressurewashingnola.com/services/gutter-cleaning',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Gutter Cleaning | Clean Slate Pressure Washing NOLA',
    description: 'Ensure proper water drainage and protect your Louisiana, Mississippi, and Texas home with our expert gutter cleaning services. Prevent clogs and water damage today.',
    images: ['https://cleanslatepressurewashingnola.com/cleanslatelogo.webp'],
  },
  alternates: {
    canonical: 'https://cleanslatepressurewashingnola.com/services/gutter-cleaning',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Gutter Cleaning Services',
  description: 'Professional gutter cleaning services to protect homes in Louisiana, Mississippi, and Texas from water damage. We remove debris, ensure proper water flow, and prevent costly repairs.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Clean Slate Pressure Washing NOLA',
    image: 'https://cleanslatepressurewashingnola.com/cleanslatelogo.webp',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '206 Mitchell Ln',
      addressLocality: 'Des Allemands',
      addressRegion: 'LA',
      postalCode: '70030',
      addressCountry: 'US'
    }
  },
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
  serviceType: 'Gutter Cleaning'
}

export default function GutterCleaningPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="w-full bg-gray-100 dark:bg-gray-800">
          <GutterCleaning />
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
