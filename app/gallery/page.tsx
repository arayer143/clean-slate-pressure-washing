import type { Metadata } from 'next'
import GalleryPage from "@/components/Gallery/Gallery-page"
import Footer from "@/components/Footer/footer"
import Navbar from "@/components/Navbar/navbar"

export const metadata: Metadata = {
  title: 'Gallery | Clean Slate Pressure Washing',
  description: 'View our gallery of before and after photos showcasing Clean Slate Pressure Washing\'s exceptional work on various surfaces and properties.',
  openGraph: {
    title: 'Clean Slate Pressure Washing Gallery',
    description: 'See the transformative power of our pressure washing services through our before and after photo gallery.',
    type: 'website',
    url: 'https://www.cleanslate-pressurewashing.com/gallery',
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

export default function Gallery() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="w-full bg-gray-100 dark:bg-gray-800">
          <GalleryPage />
        </section>
      </main>
      <Footer />
    </div>
  )
}