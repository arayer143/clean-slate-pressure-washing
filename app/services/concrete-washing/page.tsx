import type { Metadata } from 'next'
import Footer from "@/components/Footer/footer"
import Navbar from "@/components/Navbar/navbar"
import ConcreteWashing from "@/components/Services Pages/concrete-washing"

export const metadata: Metadata = {
  title: 'Professional Concrete Washing Services | Clean Slate Pressure Washing',
  description: 'Revitalize your concrete surfaces with our expert washing services. We safely remove dirt, grime, and stains to restore the appearance of your driveways, patios, and walkways.',
  openGraph: {
    title: 'Expert Concrete Washing Services | Clean Slate Pressure Washing',
    description: 'Transform your concrete surfaces with our professional cleaning services. Restore appearance and protect your investment with safe and effective cleaning methods.',
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
    title: 'Professional Concrete Washing | Clean Slate Pressure Washing',
    description: 'Enhance your property\'s curb appeal with our expert concrete washing services. Remove dirt, oil stains, and grime to make your concrete surfaces look like new.',
    images: ['/cleanslatelogo.jpg'],
  },
  icons: {
    icon: '/cleanslatelogo.jpg',
    apple: '/cleanslatelogo.jpg',
  },
  alternates: {
    canonical: 'https://www.cleanslatepressurewashing.com/services/concrete-washing',
  },
}

export default function ConcreteWashingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="w-full bg-gray-100 dark:bg-gray-800">
          <ConcreteWashing />
        </section>
        <section className="w-full">
          <Footer />
        </section>
      </main>
    </div>
  )
}