import { Metadata } from 'next'
import Navbar from "@/components/Navbar/navbar"
import Footer from "@/components/Footer/footer"
import BlogPage from "@/components/Blog Page/blog-page"

export const metadata: Metadata = {
  title: 'Blog | Clean Slate Pressure Washing NOLA',
  description: 'Read the latest articles about pressure washing techniques, tips, and industry news from Clean Slate Pressure Washing NOLA in Louisiana, Mississippi, and Texas.',
  openGraph: {
    title: 'Blog | Clean Slate Pressure Washing NOLA',
    description: 'Read the latest articles about pressure washing techniques, tips, and industry news for Louisiana, Mississippi, and Texas properties.',
    url: 'https://cleanslatepressurewashingnola.com/blog',
    siteName: 'Clean Slate Pressure Washing NOLA',
    images: [
      {
        url: 'https://cleanslatepressurewashingnola.com/cleanslatelogo.webp',
        width: 1200,
        height: 630,
        alt: 'Clean Slate Pressure Washing NOLA Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Clean Slate Pressure Washing NOLA',
    description: 'Latest articles on pressure washing techniques, tips, and industry news for Louisiana, Mississippi, and Texas properties.',
    images: ['https://cleanslatepressurewashingnola.com/cleanslatelogo.webp'],
  },
  alternates: {
    canonical: 'https://cleanslatepressurewashingnola.com/blog',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Clean Slate Pressure Washing NOLA Blog',
  description: 'Latest articles and insights about pressure washing techniques, tips, and industry news for Louisiana, Mississippi, and Texas.',
  url: 'https://cleanslatepressurewashingnola.com/blog',
  publisher: {
    '@type': 'Organization',
    name: 'Clean Slate Pressure Washing NOLA',
    logo: {
      '@type': 'ImageObject',
      url: 'https://cleanslatepressurewashingnola.com/cleanslatelogo.webp'
    }
  }
}

export default function Blog() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="w-full bg-gray-100 dark:bg-gray-800">
          <BlogPage />
        </section>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  )
}

