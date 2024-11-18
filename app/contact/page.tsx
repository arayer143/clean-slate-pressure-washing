import type { Metadata } from 'next'
import Navbar from "@/components/Navbar/navbar"
import Footer from "@/components/Footer/footer"
import ContactPage from "@/components/Contact/contact-section"

export const metadata: Metadata = {
  title: 'Contact Clean Slate Pressure Washing',
  description: 'Get in touch with Clean Slate Pressure Washing for all your pressure washing needs. We offer free quotes and exceptional customer service.',
  openGraph: {
    title: 'Contact Clean Slate Pressure Washing',
    description: 'Reach out to Clean Slate Pressure Washing for professional pressure washing services. Contact us for a free quote today!',
    type: 'website',
    url: 'https://www.cleanslate-pressurewashing.com/contact',
    images: [
      {
        url: '/cleanslatelogo.jpg',
        width: 1200,
        height: 630,
        alt: 'Clean Slate Pressure Washing Logo',
      },
    ],
  },
}

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="w-full bg-gray-100 dark:bg-gray-800">
          <ContactPage />
        </section>
      </main>
      <Footer />
    </div>
  )
}