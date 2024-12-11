"use client"

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, PhoneCall, Check, Droplets, Home } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import Link from 'next/link'

const MotionLink = motion(Link)

export default function Hero() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null)

  const handleHover = useCallback((buttonId: string | null) => {
    setHoveredButton(buttonId)
  }, [])

  return (
    <div className="relative bg-cover bg-center bg-no-repeat min-h-[calc(85vh-4rem)]" style={{
      backgroundImage: `url('/cleanslatebanner.webp')`,
    }}>
      <div className="absolute inset-0 bg-purple-900/10 dark:bg-purple-900/20" />
      <div className="relative container mx-auto px-4 py-12 sm:py-16 flex flex-col min-h-[calc(85vh-4rem)]">
        <motion.div 
          className="max-w-3xl mb-12"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="inline-block bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-lg mb-4 shadow-lg border-2 border-purple-300 dark:border-purple-500">
            <h1 className="text-2xl text-center sm:text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white">
              Clean Slate Pressure Washing
            </h1>
            <p className="text-base sm:text-lg mt-3 mb-6 text-gray-700 dark:text-gray-200">
              Professional pressure washing services to make your home or business shine like new.
            </p>
          </div>
         
          <div className="flex flex-col sm:flex-row gap-4">
            <MotionLink 
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
              onHoverStart={() => handleHover('quote')}
              onHoverEnd={() => handleHover(null)}
            >
              <Button 
                size="lg"
                className="w-full bg-gold-500 text-black hover:bg-gold-600 shadow-md hover:shadow-lg transition-all duration-300"
              >
                Get a Free Quote
                <AnimatePresence>
                  {hoveredButton === 'quote' && (
                    <motion.div
                      className="ml-2"
                      initial={{ x: -5, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 5, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <ArrowRight className="h-5 w-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </MotionLink>
            <MotionLink 
              href="tel:5043527963"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
              onHoverStart={() => handleHover('call')}
              onHoverEnd={() => handleHover(null)}
            >
              <Button 
                size="lg" 
                variant="outline"
                className="w-full bg-white/60 backdrop-blur-sm border-gold-500 text-black hover:bg-gold-500 hover:text-black shadow-md hover:shadow-lg transition-all duration-300"
              >
                <AnimatePresence>
                  {hoveredButton === 'call' && (
                    <motion.div
                      className="mr-2"
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 20 }}
                      exit={{ rotate: 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                      <PhoneCall className="h-5 w-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
                Call Us
              </Button>
            </MotionLink>
          </div>
        </motion.div>
        <div className="mt-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {[
              { 
                title: "Why Choose Us", 
                icon: Check, 
                content: [
                  "Experienced professionals",
                  "Eco-friendly cleaning solutions",
                  "State-of-the-art equipment",
                  "100% satisfaction guarantee"
                ]
              },
              { 
                title: "Soft & Pressure Washing", 
                icon: Droplets, 
                content: [
                  "Soft washing for delicate surfaces",
                  "High-pressure cleaning for tough stains",
                  "Expert method selection",
                  "Damage-free optimal results"
                ],
                className: "md:-mt-6"
              },
              { 
                title: "Concrete & Roof Washing", 
                icon: Home, 
                content: [
                  "Driveway and sidewalk cleaning",
                  "Patio and deck restoration",
                  "Gentle roof cleaning",
                  "Gutter brightening"
                ]
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                whileHover={{ scale: 1.05 }}
                className={item.className}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 10,
                  opacity: { duration: 0.5, delay: index * 0.2 },
                  y: { duration: 0.5, delay: index * 0.2 }
                }}
              >
                <Card className="bg-white dark:bg-purple-900 shadow-xl hover:shadow-2xl transform transition-all duration-300 overflow-hidden border-2 border-purple-300 dark:border-purple-500 h-full">
                  <CardHeader className="bg-gradient-to-r from-gold-200 to-gold-100 dark:from-gold-300 dark:to-gold-600 dark:text-black py-4">
                    <h2 className="flex items-center text-purple-900 dark:text-black text-lg font-bold">
                      <item.icon className="mr-2 h-6 w-6" />
                      {item.title}
                    </h2>
                  </CardHeader>
                  <CardContent className="pt-6 pb-4">
                    <ul className="space-y-2">
                      {item.content.map((point, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-gold-500 mr-2 mt-0.5" />
                          <span className="text-sm text-gray-700 dark:text-gray-200">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}