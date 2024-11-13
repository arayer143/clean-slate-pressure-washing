'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, ShieldX, Droplets } from 'lucide-react'

export default function RoofWashing() {
  const benefits = [
    { 
      icon: Home, 
      title: "Extending your Roof's Lifespan", 
      description: "Removing all dirt and debris from your roof can make your roofing materials last longer!" 
    },
    { 
      icon: ShieldX, 
      title: "Prevent Repairs", 
      description: "By scheduling regular roof cleaning, you can prevent damages from occurring and avoid expensive repairs or even roof replacement." 
    },
  ]

  const galleryImages = [
    { src: '/placeholder.svg?height=300&width=400', alt: 'Roof before and after' },
    { src: '/placeholder.svg?height=300&width=400', alt: 'Roof before and after' },
    { src: '/placeholder.svg?height=300&width=400', alt: 'Gas station before' },
    { src: '/placeholder.svg?height=300&width=400', alt: 'Gas station after' },
    { src: '/placeholder.svg?height=300&width=400', alt: 'Roof before and after' },
    { src: '/placeholder.svg?height=300&width=400', alt: 'Roof before and after' },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden mb-12 rounded-lg bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-800 dark:to-purple-950 text-white"
        >
          <div className="relative z-10 text-center py-16 px-4">
            <Droplets className="mx-auto h-16 w-16 mb-4 text-yellow-400 dark:text-yellow-300" />
            <h1 className="text-4xl font-bold mb-4">Roof Washing Services</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Professional roof cleaning to protect and beautify your home
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
              <CardTitle className="text-3xl font-bold text-purple-700 dark:text-yellow-300">Why should I wash my roof?</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <p className="mb-8 text-gray-700 dark:text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
                Cleaning your roof is essential to maintain its longevity and structural integrity. Over time, algae, moss, and debris accumulate on your roof which lead to moisture retention. This moisture causes rot and deterioration of roofing materials. Regular cleaning prevents these issues, enhances curb appeal, and safeguards against potential damage.
              </p>
              <div className="w-16 h-1 bg-purple-200 dark:bg-purple-700 mb-8"></div>
              <h3 className="text-2xl font-semibold mb-6 text-purple-700 dark:text-yellow-300">Our services can help with:</h3>
              <div className="grid gap-8 md:grid-cols-2 w-full">
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
                        <h4 className="text-xl font-semibold mb-3 text-purple-700 dark:text-yellow-300">{benefit.title}</h4>
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
          className="mb-12"
        >
          <Card className="bg-purple-600 text-white dark:bg-purple-900">
            <CardContent className="text-center py-8">
              <h3 className="text-3xl font-bold mb-6">Contact Us Today!</h3>
              <div className="space-x-4">
                <Button asChild variant="secondary" className="bg-yellow-400 text-purple-900 hover:bg-yellow-500 dark:bg-yellow-300 dark:text-purple-950 dark:hover:bg-yellow-400">
                  <Link href="/contact">Free Estimate</Link>
                </Button>
                <Button asChild variant="secondary" className="bg-white text-purple-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-yellow-300 dark:hover:bg-gray-700">
                  <Link href="tel:5043527963">Call Us</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  )
}