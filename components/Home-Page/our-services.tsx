'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Droplet, Home, DropletIcon, GanttChartSquare } from 'lucide-react'

export default function ServicesSection() {
  const services = [
    {
      icon: Droplet,
      title: "Soft and Pressure Washing",
      description: "Soft Washing - Cleaning method that uses low-pressure water combined with specialized cleaning solutions to safely remove organics. Pressure Washing - Utilizes high-pressure water to remove dirt, grime, mold, and other contaminants from hard surfaces like concrete, brick, and stone.",
      link: "/soft-and-pressure-washing"
    },
    {
      icon: Home,
      title: "Roof Washing",
      description: "A specialized cleaning service designed to remove algae, mold, mildew, lichen, and moss from roofing materials. Utilizing a soft washing technique, this method employs low-pressure water combined with eco-friendly cleaning solutions to safely clean and protect your roof.",
      link: "/roof-washing"
    },
    {
      icon: DropletIcon,
      title: "Concrete Washing",
      description: "A professional service aimed at revitalizing the appearance of concrete surfaces by removing organics.",
      link: "/concrete-washing"
    },
    {
      icon: Home,
      title: "Gutter Cleaning",
      description: "An essential maintenance service that involves the removal of leaves, debris, and other obstructions from your gutters and downspouts.",
      link: "/gutter-cleaning"
    },
    {
      icon: Home,
      title: "Deck and Patio Washing",
      description: "A professional service designed to restore the beauty and safety of your outdoor living spaces. Utilizing specialized equipment and cleaning solutions, this service effectively removes organics from wood, composite, and stone surfaces.",
      link: "/deck-and-patio-washing"
    },
    {
      icon: GanttChartSquare,
      title: "Fence Cleaning",
      description: "A specialized service aimed at rejuvenating the appearance of your fences by removing dirt, grime, mold, mildew, and algae. Using appropriate cleaning techniques for wood, vinyl, and metal fences, this service restores their original look and helps prevent long-term damage.",
      link: "/fence-cleaning"
    }
  ]

  return (
    <section id="services" className="py-16 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Services</h2>
          <p className="text-gray-600 dark:text-gray-300">Add description of services here</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center text-center bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl">
                <CardHeader className="p-6 flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-600 dark:to-purple-700 rounded-full flex items-center justify-center mb-4 shadow-lg">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0 flex-grow flex items-center">
                  <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button asChild variant="outline" className="bg-white hover:bg-gray-100 text-purple-600 border-purple-600 hover:text-purple-700 hover:border-purple-700 transition-colors duration-300 shadow-md hover:shadow-lg dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-purple-400 dark:border-purple-400 dark:hover:text-purple-300 dark:hover:border-purple-300">
                    <Link href={service.link}>Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}