'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Heart, Bug, ShieldX, PaintBucket, DollarSign, Droplets } from 'lucide-react'

export default function SoftAndPressureWashing() {
  const benefits = [
    { icon: Home, title: 'Prevents Damage', description: 'Soft washing uses low pressure to gently clean surfaces and prevent damage from organic growths like mold, mildew, and algae. These harmful substances can cause long-term damage to your property, including rot, decay, and discoloration.' },
    { icon: Heart, title: 'Broadened lifespan', description: 'Soft washing can extend the lifespan of surfaces roofing and shingles' },
    { icon: Bug, title: 'Healthier environments', description: 'Soft washing uses eco-friendly chemicals and a gentle stream of water to kill microorganisms at the root and inhibit future growth.' },
    { icon: ShieldX, title: 'Safety', description: 'Pressure washing can remove slippery substances like algae, oil, and grease, which can reduce the risk of falls. It can also help prevent cracks from forming in driveways, which can be a safety hazard.' },
    { icon: PaintBucket, title: 'Prime Surfaces', description: 'Power washing is a great way to prime a surface for an additional project. When you intend to have the exterior of your home repainted, it will be incredibly important to obtain a power washing service.' },
    { icon: DollarSign, title: 'Save Money', description: 'Over time, grime builds up on the roof and sides of your building. They fence in moisture on the walls, causing growth of mildew and mold. a regularly scheduled pressure washing service can prevent rot and disintegration of your property which will save you expensive repairs.' },
  ]

  const galleryImages = [
    { src: '/siding-beforeandafter.webp', alt: 'Siding before and after', title: 'Siding Transformation' },
    { src: '/siding2-beforeandafter.webp', alt: 'Siding before and after', title: 'Another Siding Cleaning' },
    { src: '/before-and-after9.webp', alt: 'Siding before and after', title: 'Siding Restoration' },
    { src: '/before-and-after1.webp', alt: 'Brick Siding before and after', title: 'Brick Siding Cleaning' },
    { src: '/bricksiding-beforeandafter.webp', alt: 'Brick Siding before and after', title: 'Brick Siding Transformation' },
    { src: '/sign-beforeandafter.webp', alt: 'Commercial Sign before and after', title: 'Commercial Sign Cleaning' },
    { src: '/patio-beforeandafter.webp', alt: 'Patio before and after', title: 'Patio Restoration' },
    { src: '/patio-beforeandafter-2.webp', alt: 'Patio before and after', title: 'Another Patio Cleaning' },
  ]
  

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden mb-12 rounded-lg bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-800 dark:to-purple-950 text-white"
        >
          <div className="relative z-10 text-center py-16 px-4">
            <Droplets className="mx-auto h-16 w-16 mb-4 text-yellow-400 dark:text-yellow-300" />
            <h1 className="text-4xl font-bold mb-4">Soft and Pressure Washing Services</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Professional cleaning solutions for all your exterior surfaces
            </p>
            <div className="mt-8">
              <Button asChild variant="secondary" size="lg" className="mr-4 bg-yellow-400 text-purple-900 hover:bg-yellow-500 dark:bg-yellow-300 dark:text-purple-950 dark:hover:bg-yellow-400">
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white text-purple-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-yellow-300 dark:hover:bg-gray-700">
                <Link href="/blog">Learn More</Link>
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <Card className="bg-white dark:bg-gray-800 text-center">
            <CardHeader className="pb-2">
              <CardTitle className="text-3xl font-bold text-purple-700 dark:text-yellow-300">What are the benefits of Soft & Pressure Washing?</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <p className="mb-8 text-gray-700 dark:text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
                Soft washing and pressure washing are both methods that use adjusted water pressure to remove dirt and stains from surfaces without causing damage. Soft washing is generally better for softer surfaces, while pressure washing is better for removing more stubborn stains.
              </p>
              <div className="w-16 h-1 bg-purple-200 dark:bg-purple-700 mb-8"></div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full overflow-hidden transition-all hover:shadow-lg bg-purple-50 dark:bg-gray-700 flex flex-col items-center text-center">
                      <CardContent className="p-6 flex flex-col items-center">
                        <benefit.icon className="h-12 w-12 mb-4 text-purple-600 dark:text-yellow-400" />
                        <h3 className="text-xl font-semibold mb-3 text-purple-700 dark:text-yellow-300">{benefit.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{benefit.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-12"
        >
          <Card className="bg-white dark:bg-gray-800 text-center">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-purple-700 dark:text-yellow-300">Our Work</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {galleryImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative aspect-square overflow-hidden rounded-lg"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform hover:scale-110"
                    />
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center py-12 bg-purple-600 text-white dark:bg-purple-900 rounded-lg"
        >
          <h3 className="text-3xl font-bold mb-6">Contact Us Today!</h3>
          <div className="space-x-4">
            <Button asChild className="bg-yellow-400 text-purple-900 hover:bg-yellow-500 dark:bg-yellow-300 dark:text-purple-950 dark:hover:bg-yellow-400">
              <Link href="/contact">Free Estimate</Link>
            </Button>
            <Button asChild variant="secondary" className="bg-white text-purple-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-yellow-300 dark:hover:bg-gray-700">
              <Link href="tel:5043527963">Call Us</Link>
            </Button>
          </div>
        </motion.section>
      </main>
    </div>
  )
}