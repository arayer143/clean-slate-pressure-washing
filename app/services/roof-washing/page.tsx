import type { Metadata } from 'next'
import Footer from "@/components/Footer/footer"
import Navbar from "@/components/Navbar/navbar"
import RoofWashing from "@/components/Services Pages/roof-washing"

export const metadata: Metadata = {
  title: 'Professional Roof Washing Services | Clean Slate Pressure Washing',
  description: 'Extend the life of your roof with our expert roof washing services. We safely remove algae, moss, and debris to protect and beautify your home.',
  openGraph: {
    title: 'Expert Roof Washing Services | Clean Slate Pressure Washing',
    description: 'Restore your roof\'s appearance and protect your investment with our professional roof washing services. Safe and effective cleaning for all roof types.',
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
    title: 'Professional Roof Washing | Clean Slate Pressure Washing',
    description: 'Revitalize your roof with our expert cleaning services. Safely remove algae, moss, and stains to protect your home and boost curb appeal.',
    images: ['/cleanslatelogo.jpg'],
  },
  icons: {
    icon: '/cleanslatelogo.jpg',
    apple: '/cleanslatelogo.jpg',
  },
  alternates: {
    canonical: 'https://www.cleanslatepressurewashing.com/services/roof-washing',
  },
}

export default function RoofWashingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="w-full bg-gray-100 dark:bg-gray-800">
          <RoofWashing />
        </section>
        <section className="w-full">
          <Footer />
        </section>
      </main>
    </div>
  )
}