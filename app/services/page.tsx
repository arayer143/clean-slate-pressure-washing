import type { Metadata } from 'next'
import Footer from "@/components/Footer/footer"
import Navbar from "@/components/Navbar/navbar"
import AllServicesPage from "@/components/Services Pages/All-services"

export const metadata: Metadata = {
  title: 'Our Services | Clean Slate Pressure Washing NOLA',
  description: 'Explore our professional cleaning services including soft washing, pressure washing, and more for homes and businesses in New Orleans.',
  openGraph: {
    title: 'Professional Cleaning Services | Clean Slate Pressure Washing NOLA',
    description: 'Discover our expert cleaning solutions for homes and businesses in New Orleans. From soft washing to pressure washing.',
    url: 'https://cleanslatepressurewashingnola.com/services',
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
    title: 'Expert Cleaning Services | Clean Slate Pressure Washing NOLA',
    description: 'Professional pressure washing and soft washing services for your New Orleans property.',
    images: ['https://cleanslatepressurewashingnola.com/cleanslatelogo.webp'],
  },
  alternates: {
    canonical: 'https://cleanslatepressurewashingnola.com/services',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Clean Slate Pressure Washing NOLA Services',
  description: 'Comprehensive professional cleaning services including soft washing, pressure washing, and more for both residential and commercial properties in New Orleans.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Clean Slate Pressure Washing NOLA',
    image: 'https://cleanslatepressurewashingnola.com/cleanslatelogo.webp',
  },
  areaServed: 'New Orleans, LA',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Pressure Washing Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Soft Washing'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Pressure Washing'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Roof Cleaning'
        }
      }
    ]
  }
}

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="w-full bg-gray-100 dark:bg-gray-800">
          <AllServicesPage />
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

