import { Metadata } from 'next'
import TestimonialsSection from "@/components/Home-Page/testimonials"
import Footer from "@/components/Footer/footer"
import Hero from "@/components/Hero/hero"
import AboutSection from "@/components/Home-Page/about-us"
import Navbar from "@/components/Navbar/navbar"
import PhotoGalleryhome from "@/components/Home-Page/photoGallery"
import ServicesSection from "@/components/Home-Page/our-services"
import CTASection from "@/components/Home-Page/call-to-action"
import BlogPreview from "@/components/Home-Page/blog-preview"

export const metadata: Metadata = {
  title: 'Home | Clean Slate Pressure Washing',
  description: 'Welcome to Clean Slate Pressure Washing. We offer professional exterior cleaning to help restore beauty to your property with our expert pressure washing solutions.',
  openGraph: {
    title: 'Clean Slate Pressure Washing - Professional Exterior Cleaning',
    description: 'Transform your property with our expert pressure washing services. From residential to commercial, we deliver spotless results.',
    images: [
      {
        url: 'https://cleanslatepressurewashingnola.com/home-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Clean Slate Pressure Washing in action',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clean Slate Pressure Washing ',
    description: 'Expert pressure washing services for homes and businesses. Get a clean slate today!',
    images: ['https://cleanslatepressurewashingnola.com/home-hero.jpg'],
  },
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-3">
        <section className="w-full bg-gray-100 dark:bg-gray-800">
          <Hero />
          <AboutSection />
          <ServicesSection />
          <CTASection />
          <BlogPreview />
          <PhotoGalleryhome />
          <TestimonialsSection />
        </section>
        <section className="w-full">
          <Footer />
        </section>
      </main>
    </div>
  )
}