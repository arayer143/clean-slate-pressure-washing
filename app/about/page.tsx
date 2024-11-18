import type { Metadata } from 'next'
import AboutUsPage from "@/components/About Page/about-page"
import Footer from "@/components/Footer/footer"
import Navbar from "@/components/Navbar/navbar"

export const metadata: Metadata = {
  title: 'About Clean Slate Pressure Washing',
  description: 'Learn about Clean Slate Pressure Washing, our history, values, and commitment to providing top-quality pressure washing services.',
  openGraph: {
    title: 'About Clean Slate Pressure Washing',
    description: 'Discover the story behind Clean Slate Pressure Washing and our dedication to excellence in pressure washing services.',
    type: 'website',
    url: 'https://www.cleanslate-pressurewashing.com/about',
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

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="w-full bg-gray-100 dark:bg-gray-800">
          <AboutUsPage />
        </section>
      </main>
      <Footer />
    </div>
  )
}