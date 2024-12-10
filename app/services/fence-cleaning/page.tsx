import type { Metadata } from 'next'
import Footer from "@/components/Footer/footer"
import Navbar from "@/components/Navbar/navbar"
import FenceCleaning from "@/components/Services Pages/fence-cleaning"

export const metadata: Metadata = {
  title: 'Professional Fence Cleaning Services | Clean Slate Pressure Washing',
  description: 'Revitalize your property with our expert fence cleaning services. We safely remove dirt, grime, and mildew to restore the beauty of your fences.',
  openGraph: {
    title: 'Expert Fence Cleaning Services | Clean Slate Pressure Washing',
    description: 'Transform your fences with our professional cleaning services. Restore appearance and protect your investment with safe and effective cleaning methods.',
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
    title: 'Professional Fence Cleaning | Clean Slate Pressure Washing',
    description: 'Enhance your property\'s curb appeal with our expert fence cleaning services. Remove dirt, algae, and stains to make your fences look like new.',
    images: ['/cleanslatelogo.jpg'],
  },
  icons: {
    icon: '/cleanslatelogo.jpg',
    apple: '/cleanslatelogo.jpg',
  },
  alternates: {
    canonical: 'https://www.cleanslatepressurewashing.com/services/fence-cleaning',
  },
}

export default function FenceCleaningPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="w-full bg-gray-100 dark:bg-gray-800">
          <FenceCleaning />
        </section>
        <section className="w-full">
          <Footer />
        </section>
      </main>
    </div>
  )
}