import type { Metadata } from 'next'
import Footer from "@/components/Footer/footer"
import Navbar from "@/components/Navbar/navbar"
import RoofWashing from "@/components/Services Pages/roof-washing"

export const metadata: Metadata = {
  title: 'Professional Roof Washing Services | Clean Slate Pressure Washing NOLA',
  description: 'Extend the life of your roof in Louisiana and Mississippi with our expert roof washing services. We safely remove algae, moss, and debris.',
  openGraph: {
    title: 'Expert Roof Washing Services | Clean Slate Pressure Washing NOLA',
    description: 'Restore your roof\'s appearance and protect your investment with our professional roof washing services. Safe and effective cleaning for all roof types in Louisiana and Mississippi.',
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
    url: 'https://cleanslatepressurewashingnola.com/services/roof-washing',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Roof Washing | Clean Slate Pressure Washing NOLA',
    description: 'Revitalize your roof in Louisiana and Mississippi with our expert cleaning services. Safely remove algae, moss, and stains to protect your home and boost curb appeal.',
    images: ['https://cleanslatepressurewashingnola.com/cleanslatelogo.webp'],
  },
  alternates: {
    canonical: 'https://cleanslatepressurewashingnola.com/services/roof-washing',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Roof Washing Services',
  description: 'Professional roof washing services to extend the life of roofs in Louisiana and Mississippi. We safely remove algae, moss, and debris to protect and beautify homes.',
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
  serviceType: 'Roof Washing'
}

export default function RoofWashingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="w-full bg-gray-100 dark:bg-gray-800">
          <RoofWashing />
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
