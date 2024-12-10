import type { Metadata } from 'next'
import Footer from "@/components/Footer/footer"
import Navbar from "@/components/Navbar/navbar"
import CommercialProperties from "@/components/Services Pages/commercial-properties"

export const metadata: Metadata = {
  title: 'Commercial Property Cleaning Services | Clean Slate Pressure Washing',
  description: 'Enhance your business image with our professional commercial property cleaning services. We provide comprehensive solutions for offices, retail spaces, and industrial facilities.',
  openGraph: {
    title: 'Expert Commercial Property Cleaning | Clean Slate Pressure Washing',
    description: 'Boost your property\'s appeal and maintain a professional image with our specialized cleaning services for commercial properties. Tailored solutions for all business types.',
    images: [
      {
        url: '/cleanslatelogo.jpg',
        width: 1200,
        height: 630,
        alt: 'Clean Slate Pressure Washing Logo',
      },
    ],
    type: 'website',
    locale: 'en_US',
    siteName: 'Clean Slate Pressure Washing',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Commercial Property Cleaning | Clean Slate Pressure Washing',
    description: 'Elevate your business premises with our expert cleaning services. Comprehensive solutions for all types of commercial properties.',
    images: ['/cleanslatelogo.jpg'],
  },
  icons: {
    icon: '/cleanslatelogo.jpg',
    apple: '/cleanslatelogo.jpg',
  },
  alternates: {
    canonical: 'https://www.cleanslatepressurewashing.com/services/commercial-properties',
  },
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
    </div>
  )
}