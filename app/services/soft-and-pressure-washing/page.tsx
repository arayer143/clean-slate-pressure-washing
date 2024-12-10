import type { Metadata } from 'next'
import Footer from "@/components/Footer/footer"
import Navbar from "@/components/Navbar/navbar"
import SoftAndPressureWashing from "@/components/Services Pages/soft-and-pressure-washing"

export const metadata: Metadata = {
  title: 'Soft and Pressure Washing Services | Clean Slate Pressure Washing',
  description: 'Expert soft washing and pressure washing services for your home and business. We safely and effectively clean various surfaces to restore their appearance and protect your property.',
  openGraph: {
    title: 'Professional Soft and Pressure Washing | Clean Slate Pressure Washing',
    description: 'Revitalize your property with our expert soft washing and pressure washing services. Safe, effective cleaning for all surfaces.',
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
    title: 'Expert Soft and Pressure Washing Services | Clean Slate',
    description: 'Transform your property with our professional soft washing and pressure washing services. Safe and effective cleaning solutions.',
    images: ['/cleanslatelogo.jpg'],
  },
  icons: {
    icon: '/cleanslatelogo.jpg',
    apple: '/cleanslatelogo.jpg',
  },
  alternates: {
    canonical: 'https://www.cleanslatepressurewashing.com/services/soft-and-pressure-washing',
  },
}

export default function SoftAndPressureWashingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="w-full bg-gray-100 dark:bg-gray-800">
          <SoftAndPressureWashing />
        </section>
        <section className="w-full">
          <Footer />
        </section>
      </main>
    </div>
  )
}