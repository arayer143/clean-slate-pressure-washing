import type { Metadata } from 'next'
import GalleryPage from "@/components/Gallery/Gallery-page"
import Footer from "@/components/Footer/footer"
import Navbar from "@/components/Navbar/navbar"

export const metadata: Metadata = {
  title: 'Gallery | Clean Slate Pressure Washing NOLA',
  description: 'View our gallery of before and after photos showcasing Clean Slate Pressure Washing\'s exceptional work on various surfaces in Louisiana, Mississippi, and Texas.',
  openGraph: {
    title: 'Clean Slate Pressure Washing NOLA Gallery',
    description: 'See the transformative power of our pressure washing services through our before and after photo gallery.',
    type: 'website',
    url: 'https://cleanslatepressurewashingnola.com/gallery',
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
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clean Slate Pressure Washing NOLA Gallery',
    description: 'Explore our before and after photos showcasing our exceptional pressure washing results in Louisiana, Mississippi, and Texas.',
    images: ['https://cleanslatepressurewashingnola.com/cleanslatelogo.webp'],
  },
  alternates: {
    canonical: 'https://cleanslatepressurewashingnola.com/gallery',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ImageGallery',
  name: 'Clean Slate Pressure Washing NOLA Gallery',
  description: 'A collection of before and after photos showcasing the exceptional pressure washing services provided by Clean Slate Pressure Washing NOLA across Louisiana, Mississippi, and Texas.',
  url: 'https://cleanslatepressurewashingnola.com/gallery',
  author: {
    '@type': 'Organization',
    name: 'Clean Slate Pressure Washing NOLA',
    url: 'https://cleanslatepressurewashingnola.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://cleanslatepressurewashingnola.com/cleanslatelogo.webp'
    }
  }
}

export default function Gallery() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="w-full bg-gray-100 dark:bg-gray-800">
          <GalleryPage />
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

