'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, HeartPulse, Bug, TrendingUp, ChevronUp, Search, Droplets } from 'lucide-react'

export default function ConcreteWashing() {
  const benefits = [
    { icon: Home, title: 'Improve Appearance', description: 'Concrete can become filled with dirt, mold, algae, plant stains, tire marks, oil, and liquids, which can make it look less appealing. Washing concrete can help it look fresh and make a better first impression.' },
    { icon: HeartPulse, title: 'Improve Safety Measures', description: 'Buildup of contaminants like mold and algae can make concrete slippery and unsafe. Weeds can also grow in concrete and create tripping hazards. Washing concrete regularly can remove these potential issues making your concrete to be safer for those who use it.' },
    { icon: Bug, title: 'Remove Stains', description: 'Regular washing can prevent minor damage from becoming major repairs. Buildup of debris like oil and mold can erode concrete surfaces and damage their integrity over time.' },
    { icon: TrendingUp, title: 'Increase Value', description: 'If you\'re planning to sell your Home or Business, washing it can help increase its value. Prospective buyers may assume a home is in poor condition if it\'s covered in dirt.' },
    { icon: ChevronUp, title: 'Improve Durability', description: 'Washing concrete regularly can help it last longer.' },
    { icon: Search, title: 'Identifying a Problem', description: 'Clean concrete can help identify a problem sooner' },
  ]

  const galleryImages = [
    { src: '/placeholder.svg?height=300&width=400', alt: 'Driveway before and after' },
    { src: '/placeholder.svg?height=300&width=400', alt: 'Driveway before and after' },
    { src: '/placeholder.svg?height=300&width=400', alt: 'Concrete Before and After' },
    { src: '/placeholder.svg?height=300&width=400', alt: 'Concrete before and after' },
    { src: '/placeholder.svg?height=300&width=400', alt: 'Front Porch before and after' },
    { src: '/placeholder.svg?height=300&width=400', alt: 'Concrete Before and After' },
    { src: '/placeholder.svg?height=300&width=400', alt: 'Back alley before and after' },
    { src: '/placeholder.svg?height=300&width=400', alt: 'Concrete before and after' },
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
            <h1 className="text-4xl font-bold mb-4">Concrete Washing Services</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Professional concrete cleaning to restore and protect your surfaces
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
              <CardTitle className="text-3xl font-bold text-purple-700 dark:text-yellow-300">Why Should I Wash my Driveway, Sidewalk, Patio or Deck?</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <p className="mb-8 text-gray-700 dark:text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
                Regular cleaning of your Driveway, Sidewalks, Patio or Deck can help prevent the accumulation of dirt, grime, and other debris that can make surfaces slippery and hazardous. It also enhances the overall appearance of your property and extends the life of these surfaces.
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
          <Card className="bg-white dark:bg-gray-800">
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