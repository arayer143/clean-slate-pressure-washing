import type { Metadata } from 'next'
import Footer from "@/components/Footer/footer"
import Navbar from "@/components/Navbar/navbar"
import ConcreteWashing from "@/components/Services Pages/concrete-washing"

export const metadata: Metadata = {
  title: 'Professional Concrete Washing Services | Clean Slate Pressure Washing NOLA',
  description: 'Revitalize your concrete surfaces in Louisiana, Mississippi, and Texas with our expert washing services. We safely remove dirt, grime, and stains.',
  openGraph: {
    title: 'Expert Concrete Washing Services | Clean Slate Pressure Washing NOLA',
    description: 'Transform your concrete surfaces with our professional cleaning services. Restore appearance and protect your investment with safe and effective cleaning methods.',
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
    url: 'https://cleanslatepressurewashingnola.com/services/concrete-washing',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Concrete Washing | Clean Slate Pressure Washing NOLA',
    description: 'Enhance your property\'s curb appeal with our expert concrete washing services. Remove dirt, oil stains, and grime to make your concrete surfaces look like new.',
    images: ['https://cleanslatepressurewashingnola.com/cleanslatelogo.webp'],
  },
  alternates: {
    canonical: 'https://cleanslatepressurewashingnola.com/services/concrete-washing',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Concrete Washing Services',
  description: 'Professional concrete washing services to revitalize driveways, patios, walkways, and other concrete surfaces in Louisiana, Mississippi, and Texas. We use safe and effective cleaning methods to remove dirt, grime, and stains.',
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
  serviceType: 'Concrete Washing'
}

export default function ConcreteWashingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="w-full bg-gray-100 dark:bg-gray-800">
          <ConcreteWashing />
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