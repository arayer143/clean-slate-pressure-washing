import type { Metadata } from 'next'
import Navbar from "@/components/Navbar/navbar"
import Footer from "@/components/Footer/footer"
import ContactPage from "@/components/Contact/contact-section"

export const metadata: Metadata = {
  title: 'Contact Clean Slate Pressure Washing NOLA',
  description: 'Get in touch with Clean Slate Pressure Washing NOLA for all your pressure washing needs in Louisiana and Mississippi. Free quotes available.',
  openGraph: {
    title: 'Contact Clean Slate Pressure Washing NOLA',
    description: 'Reach out to Clean Slate Pressure Washing NOLA for professional pressure washing services in Louisiana and Mississippi. Contact us for a free quote today!',
    url: 'https://cleanslatepressurewashingnola.com/contact',
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
    title: 'Contact Clean Slate Pressure Washing NOLA',
    description: 'Get in touch for professional pressure washing services in Louisiana and Mississippi. Free quotes available.',
    images: ['https://cleanslatepressurewashingnola.com/cleanslatelogo.webp'],
  },
  alternates: {
    canonical: 'https://cleanslatepressurewashingnola.com/contact',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Clean Slate Pressure Washing NOLA',
  description: 'Contact page for Clean Slate Pressure Washing NOLA. Get in touch for quotes and information about our services in Louisiana and Mississippi.',
  url: 'https://cleanslatepressurewashingnola.com/contact',
  mainEntity: {
    '@type': 'LocalBusiness',
    name: 'Clean Slate Pressure Washing NOLA',
    telephone: '+1-504-352-7963',
    email: 'Rickeynaquin@cleanslatepressurewashingnola.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '206 Mitchell Ln',
      addressLocality: 'Des Allemands',
      addressRegion: 'LA',
      postalCode: '70030',
      addressCountry: 'US'
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
    ]
  }
}

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="w-full bg-gray-100 dark:bg-gray-800">
          <ContactPage />
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
