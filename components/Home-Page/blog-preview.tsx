'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ArrowRight } from 'lucide-react'

const blogItems = [
  {
    title: 'Gutter Cleanup',
    image: '/gutterbeforeandafter.webp',
    description: 'Dirty gutters are more than just an eyesore. They\'re a breeding ground for problems. Clogged gutters can lead to water overflow, causing damage to your roof, siding, and foundation. 🏠💧 And if left unattended, they can even invite unwanted guests like mosquitoes and rodents. Clean Slate get your gutters clean and clear of all debris for water to flow smoothly!',
    link: '/services/gutter-cleaning'
  },
  {
    title: 'Deck Washing',
    image: '/porch-beforeandafter.webp',
    description: 'Is your wood deck looking a little worse for wear? 😟 Don\'t worry, we\'ve got you covered! At Clean Slate Pressure Washing Services L.L.C, we specialize in restoring the beauty of wood decks. Our expert team uses gentle yet effective cleaning techniques to remove dirt, mold, and stains, leaving your deck looking refreshed and rejuvenated.',
    link: '/services/soft-and-pressure-washing'
  },
  {
    title: 'Sidewalks',
    image: '/sidewalk-beforeandafter.webp',
    description: 'Are you tired of looking at dull, lifeless sidewalks? Let me introduce you to Clean Slate Pressure Washing Services! 💦 Our team worked wonders on my sidewalk, bringing it back to life and restoring its vibrant appearance.',
    link: '/services/concrete-washing'
  },
  {
    title: 'Concrete Stains',
    image: '/oilstain-beforeandafter.webp',
    description: 'Considering environmental and safety concerns, it\'s crucial to remove oil stains from concrete. Protect your surroundings, prevent slips, and contribute to a cleaner environment by taking the initiative to remove oil stains.',
    link: '/blog'
  }
]

export default function BlogPreview() {
  const [openCard, setOpenCard] = useState<number | null>(null)

  return (
    <section id="blog-preview" className="py-24 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {blogItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-purple-900 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 md:h-80">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">{item.title}</h3>
                </div>
                <CardContent className="p-6 pb-4 flex-grow">
                  <Button
                    variant="ghost"
                    className="w-full justify-between text-lg font-semibold mb-4"
                    onClick={() => setOpenCard(openCard === index ? null : index)}
                  >
                    Learn More
                    <ChevronDown
                      className={`h-5 w-5 transition-transform duration-300 ${
                        openCard === index ? 'transform rotate-180' : ''
                      }`}
                    />
                  </Button>
                  <AnimatePresence>
                    {openCard === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
                <CardFooter className="border-t border-purple-100 dark:border-purple-800">
                  <Link href={item.link} className="w-full">
                    <Button variant="ghost" className="w-full text-purple-600 hover:text-purple-700 dark:text-purple-300 dark:hover:text-purple-200 hover:bg-purple-50 dark:hover:bg-purple-800 transition-colors duration-300">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center space-x-4 mt-12">
          <Link href="/blog" passHref>
            <Button>Read More</Button>
          </Link>
          <Link href="/gallery" passHref>
            <Button variant="outline">Gallery</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}