import type { Metadata } from 'next'
import Footer from "@/components/Footer/footer"
import Navbar from "@/components/Navbar/navbar"
import GutterCleaning from "@/components/Services Pages/gutter-cleaning"

export const metadata: Metadata = {
  title: 'Professional Gutter Cleaning Services | Clean Slate Pressure Washing',
  description: 'Protect your home from water damage with our expert gutter cleaning services. We remove debris, ensure proper water flow, and prevent costly repairs.',
  openGraph: {
    title: 'Expert Gutter Cleaning Services | Clean Slate Pressure Washing',
    description: 'Keep your gutters clear and functional with our professional cleaning services. Prevent water damage and extend the life of your home.',
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
    title: 'Professional Gutter Cleaning | Clean Slate Pressure Washing',
    description: 'Ensure proper water drainage and protect your home with our expert gutter cleaning services. Prevent clogs and water damage today.',
    images: ['/cleanslatelogo.jpg'],
  },
  icons: {
    icon: '/cleanslatelogo.jpg',
    apple: '/cleanslatelogo.jpg',
  },
}

export default function GutterCleaningPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="w-full bg-gray-100 dark:bg-gray-800">
          <GutterCleaning />
        </section>
        <section className="w-full">
          <Footer />
        </section>
      </main>
    </div>
  )
}