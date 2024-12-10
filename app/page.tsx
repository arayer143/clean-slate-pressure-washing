import { Metadata } from 'next'
import TestimonialsSection from "@/components/Home-Page/testimonials"
import Footer from "@/components/Footer/footer"
import Hero from "@/components/Home-Page/hero"
import AboutSection from "@/components/Home-Page/about-us"
import Navbar from "@/components/Navbar/navbar"
import PhotoGalleryhome from "@/components/Home-Page/photoGallery"
import ServicesSection from "@/components/Home-Page/our-services"
import CTASection from "@/components/Home-Page/call-to-action"
import BlogPreview from "@/components/Home-Page/blog-preview"
import { CookieConsentPopup } from '@/components/cookie-consent-popup'

export const metadata: Metadata = {
  title: 'Home | Clean Slate Pressure Washing NOLA',
  description: 'Professional exterior cleaning services in Louisiana, Mississippi, and Texas. We restore beauty to your property with expert pressure washing solutions.',
  openGraph: {
    title: 'Clean Slate Pressure Washing NOLA - Professional Exterior Cleaning',
    description: 'Transform your property with our expert pressure washing services. From residential to commercial, we deliver spotless results in Louisiana.',
    url: 'https://cleanslatepressurewashingnola.com',
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
    title: 'Clean Slate Pressure Washing NOLA',
    description: 'Expert pressure washing services for homes and businesses in Louisiana. Get a clean slate today!',
    images: ['https://cleanslatepressurewashingnola.com/cleanslatelogo.webp'],
  },
  alternates: {
    canonical: 'https://cleanslatepressurewashingnola.com',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Clean Slate Pressure Washing NOLA',
  description: 'Professional exterior cleaning services in Louisiana, Mississippi, and Texas. We offer expert pressure washing solutions for residential and commercial properties.',
  url: 'https://cleanslatepressurewashingnola.com',
  logo: 'https://cleanslatepressurewashingnola.com/cleanslatelogo.webp',
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
  sameAs: [
    'https://www.facebook.com/cleanslatepressurewashingnola',
    'https://www.instagram.com/cleanslatepressurewashingnola'
  ],
  priceRange: '$$'
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="w-full bg-gray-100 dark:bg-gray-800">
          <Hero />
          <AboutSection />
          <ServicesSection />
          <CTASection />
          <BlogPreview />
          <PhotoGalleryhome />
          <TestimonialsSection />
          <CookieConsentPopup />
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

