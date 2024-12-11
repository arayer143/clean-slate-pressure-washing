'use client'

import * as React from "react"
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Droplet, Home, DropletIcon, GanttChartSquare, Droplets, Building2, Shield, Sparkles, TrendingUp, Clock, Leaf, ChevronDown, ChevronUp } from 'lucide-react'

const services = [
  {
    icon: Droplet,
    title: "Soft and Pressure Washing",
    description: "Soft Washing - Pressure washing method that uses low-pressure water combined with specialized cleaning solutions to safely remove organics. Pressure Washing - Utilizes high-pressure water to remove dirt, grime, mold, and other contaminants from hard surfaces like concrete, brick, and stone.",
    link: "/services/soft-and-pressure-washing"
  },
  {
    icon: Home,
    title: "Roof Washing",
    description: "A specialized pressure washing service designed to remove algae, mold, mildew, lichen, and moss from roofing materials. Utilizing a soft washing technique, this method employs low-pressure water combined with eco-friendly cleaning solutions to safely clean and protect your roof.",
    link: "/services/roof-washing"
  },
  {
    icon: DropletIcon,
    title: "Concrete Washing",
    description: "A professional service aimed at revitalizing the appearance of concrete surfaces by removing organics.",
    link: "/services/concrete-washing"
  },
  {
    icon: Home,
    title: "Gutter Cleaning",
    description: "An essential maintenance service that involves the removal of leaves, debris, and other obstructions from your gutters and downspouts.",
    link: "/services/gutter-cleaning"
  },
  {
    icon: Home,
    title: "Deck and Patio Washing",
    description: "A professional service designed to restore the beauty and safety of your outdoor living spaces. Utilizing specialized equipment and cleaning solutions, this service effectively removes organics from wood, composite, and stone surfaces.",
    link: "/services/soft-and-pressure-washing"
  },
  {
    icon: GanttChartSquare,
    title: "Fence Cleaning",
    description: "A specialized service aimed at rejuvenating the appearance of your fences by removing dirt, grime, mold, mildew, and algae. Using appropriate cleaning techniques for wood, vinyl, and metal fences, this service restores their original look and helps prevent long-term damage.",
    link: "/services/fence-cleaning"
  }
]

const benefits = [
  { icon: Building2, title: 'Enhance Curb Appeal', description: 'Regular pressure washing significantly improves your property\'s appearance, making a great first impression.' },
  { icon: Shield, title: 'Increase Property Value', description: 'Well-maintained exteriors can boost your property value and attract potential buyers or tenants.' },
  { icon: Sparkles, title: 'Promote a Healthy Environment', description: 'Professional cleaning removes harmful contaminants, creating a healthier environment.' },
  { icon: TrendingUp, title: 'Extend Property Lifespan', description: 'Regular cleaning and maintenance can prevent long-term damage, extending the life of your property.' },
  { icon: Clock, title: 'Save Time and Resources', description: 'Our professional services save you time and resources, allowing you to focus on what matters most.' },
  { icon: Leaf, title: 'Eco-Friendly Solutions', description: 'We use environmentally friendly cleaning methods and products to ensure your property is clean without harming the environment.' },
]

const serviceDetails = [
  {
    title: "Soft Washing vs Pressure Washing",
    content: "Soft washing and pressure washing are two distinct cleaning methods, each suited for different surfaces and levels of dirt or contamination. Soft washing uses low-pressure water combined with specialized cleaning solutions to gently remove dirt, algae, and other organic matter. It's ideal for delicate surfaces like roofs, vinyl siding, and stucco. Pressure washing, on the other hand, uses high-pressure water to blast away tough stains, grime, and built-up dirt. It's perfect for durable surfaces like concrete, brick, and some types of stone."
  },
  {
    title: "Roof Washing Process",
    content: "Our roof washing process begins with a thorough inspection to determine the type of roof and the extent of cleaning required. We then apply a specialized, eco-friendly cleaning solution that targets algae, moss, and lichen. This solution is left to dwell for a short period, allowing it to break down the organic matter. Finally, we use a low-pressure rinse to gently wash away the debris, leaving your roof clean and protected without causing any damage to the roofing materials."
  },
  {
    title: "Concrete Washing Techniques",
    content: "Concrete washing involves more than just spraying water on the surface. We use a combination of pressure washing and surface cleaning techniques to remove deep-set stains, oil spots, and ground-in dirt. For tougher stains, we may apply a degreaser or specialized concrete cleaner before pressure washing. In some cases, we might use a surface cleaner attachment that provides a consistent clean across large flat areas, ensuring an even result without streaking."
  },
  {
    title: "Importance of Gutter Cleaning",
    content: "Regular gutter cleaning is crucial for maintaining your home's structural integrity. Clogged gutters can lead to water overflow, which can damage your home's foundation, walls, and landscaping. Our gutter cleaning service involves removing all debris from gutters and downspouts, checking for proper water flow, and inspecting for any potential issues like leaks or sagging gutters. We recommend gutter cleaning at least twice a year, typically in spring and fall."
  },
  {
    title: "Deck and Patio Restoration",
    content: "Our deck and patio washing service goes beyond simple cleaning. We assess the condition of your outdoor surfaces and choose the appropriate cleaning method - soft washing for more delicate woods and composite materials, or pressure washing for tougher surfaces. After cleaning, we can apply a sealant to protect the surface from future damage and extend its lifespan. This process not only improves the appearance of your outdoor living spaces but also helps prevent slip hazards and wood rot."
  },
  {
    title: "Eco-Friendly Cleaning Solutions",
    content: "At Clean Slate Pressure Washing, we prioritize the use of environmentally friendly cleaning solutions. Our products are biodegradable and phosphate-free, ensuring they won't harm your plants, pets, or the local ecosystem. These eco-friendly solutions are just as effective as traditional chemicals but offer the added benefit of being safe for the environment. We carefully select our cleaning agents to provide the best results while minimizing our ecological footprint."
  }
]

export default function AllServicesPage() {
  const [openBenefit, setOpenBenefit] = React.useState<string | null>(null)

  return (
    <div className="min-h-screen bg-background">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden mb-12 bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-800 dark:to-purple-950 text-white w-full"
      >
        <div className="relative z-10 text-center py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="mb-8"
          >
            <Droplets className="mx-auto h-20 w-20 text-yellow-400 dark:text-yellow-300" />
          </motion.div>
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Our Cleaning Services
          </motion.h1>
          <motion.p 
            className="text-xl sm:text-2xl max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Professional cleaning solutions for residential and commercial properties
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Button asChild variant="secondary" size="lg" className="bg-yellow-400 text-purple-900 hover:bg-yellow-500 dark:bg-yellow-300 dark:text-purple-950 dark:hover:bg-yellow-400">
              <Link href="/contact">
                <span className="sr-only">Contact us to </span>
                Get a Free Quote
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white text-purple-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-yellow-300 dark:hover:bg-gray-700">
              <Link href="#services">
                <span className="sr-only">Scroll down to </span>
                Explore Services
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>

      <main className="container mx-auto px-4 py-8 flex flex-col items-center">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16 w-full max-w-4xl"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">Why Choose Our Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <Collapsible
                key={index}
                open={openBenefit === benefit.title}
                onOpenChange={() => setOpenBenefit(openBenefit === benefit.title ? null : benefit.title)}
              >
                <CollapsibleTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-between text-left font-normal"
                  >
                    <div className="flex items-center">
                      <benefit.icon className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400" />
                      <span>{benefit.title}</span>
                    </div>
                    {openBenefit === benefit.title ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-2">
                  <Card>
                    <CardContent className="pt-4">
                      <p>{benefit.description}</p>
                    </CardContent>
                  </Card>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </motion.section>

        <section id="services" className="mb-16 w-full max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">Our Service Offerings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full max-w-sm"
              >
                <Card className="h-full overflow-hidden transition-all duration-300 ease-in-out flex flex-col items-center text-center bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg hover:shadow-2xl">
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
                      <Link href={service.link}>
                        <span className="sr-only">Learn more about {service.title}</span>
                        Learn More
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16 w-full max-w-4xl"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">Detailed Service Information</h2>
          <Accordion type="single" collapsible className="w-full">
            {serviceDetails.map((detail, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">{detail.title}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600 dark:text-gray-300">{detail.content}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center py-12 bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-800 dark:to-purple-950 text-white rounded-lg shadow-2xl w-full max-w-4xl"
        >
          <h3 className="text-3xl font-bold mb-6">Ready to Get Started?</h3>
          <div className="space-x-4">
            <Button asChild className="bg-yellow-400 text-purple-900 hover:bg-yellow-500 dark:bg-yellow-300 dark:text-purple-950 dark:hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105">
              <Link href="/contact">
                <span className="sr-only">Contact us to </span>
                Get a Free Quote
              </Link>
            </Button>
            <Button asChild variant="secondary" className="bg-white text-purple-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-yellow-300 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
              <Link href="tel:5043527963">
                <span className="sr-only">Click to </span>
                Call Us Now
              </Link>
            </Button>
          </div>
        </motion.section>
      </main>
    </div>
  )
}
