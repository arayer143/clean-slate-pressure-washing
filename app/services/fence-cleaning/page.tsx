import type { Metadata } from 'next'
import Footer from "@/components/Footer/footer"
import Navbar from "@/components/Navbar/navbar"
import FenceCleaning from "@/components/Services Pages/fence-cleaning"

export const metadata: Metadata = {
  title: 'Professional Fence Cleaning Services | Clean Slate Pressure Washing NOLA',
  description: 'Revitalize your property in Louisiana and Mississippi with our expert fence cleaning services. We safely remove dirt, grime, and mildew.',
  openGraph: {
    title: 'Expert Fence Cleaning Services | Clean Slate Pressure Washing NOLA',
    description: 'Transform your fences with our professional cleaning services. Restore appearance and protect your investment with safe and effective cleaning methods.',
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
    url: 'https://cleanslatepressurewashingnola.com/services/fence-cleaning',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Fence Cleaning | Clean Slate Pressure Washing NOLA',
    description: 'Enhance your property\'s curb appeal with our expert fence cleaning services. Remove dirt, algae, and stains to make your fences look like new.',
    images: ['https://cleanslatepressurewashingnola.com/cleanslatelogo.webp'],
  },
  alternates: {
    canonical: 'https://cleanslatepressurewashingnola.com/services/fence-cleaning',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Fence Cleaning Services',
  description: 'Professional fence cleaning services to revitalize wooden, vinyl, and metal fences in Louisiana and Mississippi. We use safe and effective cleaning methods to remove dirt, grime, mildew, and algae.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Clean Slate Pressure Washing NOLA',
    image: 'https://cleanslatepressurewashingnola.com/cleanslatelogo.webp',
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
  serviceType: 'Fence Cleaning'
}

export default function FenceCleaningPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="w-full bg-gray-100 dark:bg-gray-800">
          <FenceCleaning />
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