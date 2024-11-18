import type { Metadata } from 'next'
import Footer from "@/components/Footer/footer"
import Navbar from "@/components/Navbar/navbar"
import AllServicesPage from "@/components/Services Pages/All-services"

export const metadata: Metadata = {
  title: 'Our Services | Clean Slate Pressure Washing',
  description: 'Explore our comprehensive range of professional cleaning services including soft washing, pressure washing, roof cleaning, and more for both residential and commercial properties.',
  openGraph: {
    title: 'Professional Cleaning Services | Clean Slate Pressure Washing',
    description: 'Discover our expert cleaning solutions for homes and businesses. From soft washing to pressure washing, we keep your property pristine.',
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
    title: 'Expert Cleaning Services | Clean Slate Pressure Washing',
    description: 'Professional pressure washing, soft washing, and cleaning services for your property.',
    images: ['/cleanslatelogo.jpg'],
  },
  icons: {
    icon: '/cleanslatelogo.jpg',
    apple: '/cleanslatelogo.jpg',
  },
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
    </div>
  )
}