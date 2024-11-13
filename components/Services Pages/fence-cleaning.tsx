'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Shield, Paintbrush, TrendingUp, Sun, Clock, Droplets } from 'lucide-react'

export default function FenceCleaning() {
  const benefits = [
    { icon: Home, title: 'Improve Appearance', description: 'Restore the original beauty of your fence, enhancing your property\'s curb appeal.' },
    { icon: Shield, title: 'Protect Your Investment', description: 'Regular cleaning prevents long-term damage, extending the life of your fence.' },
    { icon: Paintbrush, title: 'Prepare for Painting', description: 'Clean fences provide a better surface for new paint or stain applications.' },
    { icon: TrendingUp, title: 'Increase Property Value', description: 'A well-maintained fence contributes to higher property valuation.' },
    { icon: Sun, title: 'Remove Harmful Growths', description: 'Eliminate mold, mildew, and algae that can damage your fence over time.' },
    { icon: Clock, title: 'Save Time and Effort', description: 'Professional cleaning is faster and more effective than DIY methods.' },
  ]

  const galleryImages = [
    { src: '/placeholder.svg?height=300&width=400', alt: 'Wooden fence before and after cleaning' },
    { src: '/placeholder.svg?height=300&width=400', alt: 'Vinyl fence cleaning process' },
    { src: '/placeholder.svg?height=300&width=400', alt: 'Metal fence restoration' },
    { src: '/placeholder.svg?height=300&width=400', alt: 'Privacy fence cleaning' },
    { src: '/placeholder.svg?height=300&width=400', alt: 'Garden fence transformation' },
    { src: '/placeholder.svg?height=300&width=400', alt: 'Commercial fence cleaning' },
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
            <h1 className="text-4xl font-bold mb-4">Fence Cleaning Services</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Professional fence cleaning to restore and protect your property boundaries
            </p>
            <div className="mt-8">
              <Button asChild variant="secondary" size="lg" className="mr-4 bg-yellow-400 text-purple-900 hover:bg-yellow-500 dark:bg-yellow-300 dark:text-purple-950 dark:hover:bg-yellow-400">
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white text-purple-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-yellow-300 dark:hover:bg-gray-700">
                <Link href="#benefits">Learn More</Link>
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
              <CardTitle className="text-3xl font-bold text-purple-700 dark:text-yellow-300">Why Should I Clean My Fence?</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <p className="mb-8 text-gray-700 dark:text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
                Regular fence cleaning is crucial for maintaining the appearance and integrity of your property boundaries. It removes dirt, grime, and harmful growths that can cause long-term damage to your fence. A clean fence not only looks better but also lasts longer, saving you money on repairs and replacements in the long run.
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
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {galleryImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative aspect-video overflow-hidden rounded-lg"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform hover:scale-105"
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