import type { Metadata } from 'next'
import Footer from "@/components/Footer/footer"
import Navbar from "@/components/Navbar/navbar"
import CommercialProperties from "@/components/Services Pages/commercial-properties"

export const metadata: Metadata = {
  title: 'Expert Commercial Property Cleaning Services',
  description: 'Enhance your New Orleans business with our professional commercial property cleaning services. Solutions for offices, retail, and industrial spaces.',
  openGraph: {
    title: 'Expert Commercial Property Cleaning Services',
    description: 'Boost your New Orleans property\'s appeal with our specialized cleaning services for commercial properties. Solutions for all business types.',
    url: 'https://cleanslatepressurewashingnola.com/services/commercial-properties',
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
    title: 'Professional Commercial Property Cleaning | Clean Slate Pressure Washing NOLA',
    description: 'Elevate your New Orleans business premises with our expert cleaning services. Solutions for all commercial properties.',
    images: ['https://cleanslatepressurewashingnola.com/cleanslatelogo.webp'],
  },
  alternates: {
    canonical: 'https://cleanslatepressurewashingnola.com/services/commercial-properties',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Commercial Property Cleaning Services',
  description: 'Professional cleaning services for commercial properties in Louisiana including offices, retail spaces, and industrial facilities.',
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
  areaServed: {
    '@type': 'State',
    name: 'Louisiana',
    containsPlace: [
      {
        '@type': 'City',
        name: 'New Orleans'
      },
      {
        '@type': 'City',
        name: 'Metairie'
      },
      {
        '@type': 'City',
        name: 'Kenner'
      },
      {
        '@type': 'City',
        name: 'Gretna'
      },
      {
        '@type': 'City',
        name: 'Marrero'
      },
      {
        '@type': 'City',
        name: 'Chalmette'
      }
    ]
  },
  serviceType: 'Commercial Cleaning'
}

export default function CommercialPropertiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="w-full bg-gray-100 dark:bg-gray-800">
          <CommercialProperties />
        </section>
        <section className="w-full">
          <Footer />
        </section>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  )
}

