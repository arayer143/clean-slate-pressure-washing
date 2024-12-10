import { Metadata } from 'next'
import Navbar from "@/components/Navbar/navbar"
import Footer from "@/components/Footer/footer"
import BlogPage from "@/components/Blog Page/blog-page"

export const metadata: Metadata = {
  title: 'Blog | Clean Slate Pressure Washing',
  description: 'Read the latest articles and insights about pressure washing techniques, tips, and industry news from Clean Slate Pressure Washing.',
  openGraph: {
    title: 'Clean Slate Pressure Washing Blog',
    description: 'Read the latest articles and insights about pressure washing techniques, tips, and industry news.',
    type: 'website',
    url: 'https://www.cleanslate.com/blog',
    images: [
      {
        url: 'https://www.cleanslate.com/cleanslate',
        width: 1200,
        height: 630,
        alt: 'Clean Slate Pressure Washing Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clean Slate Pressure Washing Blog',
    description: 'Read the latest articles and insights about pressure washing techniques, tips, and industry news.',
    images: ['https://www.cleanslate.com/cleanslate'],
  },
  alternates: {
    canonical: 'https://www.cleanslate.com/blog',
  },
}

export default function Blog() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-3">
        <section className="w-full bg-gray-100 dark:bg-gray-800">
          <BlogPage />
        </section>
        <section className="w-full">
          <Footer />
        </section>
      </main>
    </div>
  )
}

