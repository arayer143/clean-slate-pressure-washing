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
                    <Link href={image.src} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform hover:scale-110"
                      />
                    </Link>
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

      <footer className="bg-purple-100 text-purple-900 dark:bg-purple-900 dark:text-yellow-300 mt-12 py-8">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h4 className="text-lg font-semibold mb-4">Clean Slate Pressure Washing</h4>
              <Button asChild variant="outline" className="mb-2">
                <Link href="tel:5043527963">Call Us</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="mailto:Rickeynaquin@cleanslatepressurewashingnola.com">Email Us</Link>
              </Button>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:underline">Home</Link></li>
                <li><Link href="/services" className="hover:underline">Services</Link></li>
                <li><Link href="/gallery" className="hover:underline">Gallery</Link></li>
                <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2">
                <li><Link href="/services/soft-and-pressure-washing" className="hover:underline">Soft and Pressure Wash</Link></li>
                <li><Link href="/services/roof-washing" className="hover:underline">Roof Washing</Link></li>
                <li><Link href="/services/concrete-washing" className="hover:underline">Concrete Washing</Link></li>
                <li><Link href="/services/gutter-cleaning" className="hover:underline">Gutter Cleaning</Link></li>
                <li><Link href="/services/fence-cleaning" className="hover:underline">Fence Cleaning</Link></li>
                <li><Link href="/services/commercial" className="hover:underline">Commercial Properties</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Link href="https://www.facebook.com/CleanslatepressurewashingservicesLLC" target="_blank" rel="noopener noreferrer">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link href="https://www.instagram.com/cleanslatepressurewashnola/" target="_blank" rel="noopener noreferrer">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.772-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            Designed by <Link href="https://raydunnsolutions.com/" className="font-semibold hover:underline">RayDunnSolutions</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}