"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, PhoneCall, Check, Droplets, Home } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import Link from 'next/link'

export default function Hero() {
  const [isHovered1, setIsHovered1] = useState(false)
  const [isHovered2, setIsHovered2] = useState(false)

  return (
    <div className="relative bg-cover bg-center bg-no-repeat min-h-[calc(85vh-4rem)]" style={{
      backgroundImage: `url('/cleanslatebanner.webp')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className="absolute inset-0 bg-purple-900/10 dark:bg-purple-900/20"></div>
      <div className="relative container mx-auto px-4 py-12 sm:py-16 flex flex-col min-h-[calc(85vh-4rem)]">
        <div className="max-w-3xl mb-12 animate-in fade-in slide-in-from-left duration-1000">
          <div className="inline-block bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-lg mb-4 shadow-lg border-2 border-purple-300 dark:border-purple-500">
            <h1 className="text-2xl text-center sm:text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white">
              Revitalize Your Property with Clean Slate Pressure Washing
            </h1>
            <p className="text-base sm:text-lg mt-3 mb-6 text-gray-700 dark:text-gray-200">
              Professional pressure washing services to make your home or business shine like new.
            </p>
          </div>
         
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="animate-in fade-in slide-in-from-left duration-1000 delay-300"
            >
              <Link href="/contact" passHref>
                <Button 
                  size="lg"
                  className="w-full sm:w-auto bg-gold-500 text-black hover:bg-gold-600 shadow-md hover:shadow-lg transition-all duration-300"
                  onMouseEnter={() => setIsHovered1(true)}
                  onMouseLeave={() => setIsHovered1(false)}
                >
                  Get a Free Quote
                  <motion.div
                    className="ml-2"
                    animate={{ x: isHovered1 ? 5 : 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                </Button>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="animate-in fade-in slide-in-from-left duration-1000 delay-500"
            >
              <Link href="tel:5043527963">
              <Button 
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto bg-white/60 backdrop-blur-sm border-gold-500 text-black hover:bg-gold-500 hover:text-black shadow-md hover:shadow-lg transition-all duration-300"
                onMouseEnter={() => setIsHovered2(true)}
                onMouseLeave={() => setIsHovered2(false)}
              >
                <motion.div
                  className="mr-2"
                  animate={{ rotate: isHovered2 ? 20 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <PhoneCall className="h-5 w-5" />
                </motion.div>
                Call (504) 352-7963
              </Button>
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="mt-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <Card className="bg-gradient-to-br from-white/95 to-white/70 dark:from-purple-800/95 dark:to-purple-800/70 shadow-xl hover:shadow-2xl transform transition-all duration-300 backdrop-blur-sm rounded-xl overflow-hidden animate-in fade-in slide-in-from-bottom duration-1000 delay-300 border-2 border-purple-300 dark:border-purple-500">
                <CardHeader className="bg-gradient-to-r from-gold-300/20 to-gold-500/20 dark:from-gold-700/20 dark:to-gold-900/20 py-4">
                  <CardTitle className="flex items-center text-black dark:text-gold-500 text-base">
                    <Check className="mr-2 h-5 w-5" />
                    Why Choose Us
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-3 pb-4">
                  <ul className="list-disc list-inside space-y-1 text-sm text-black dark:text-white">
                    <li>Experienced professionals</li>
                    <li>Eco-friendly cleaning solutions</li>
                    <li>State-of-the-art equipment</li>
                    <li>100% satisfaction guarantee</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              className="md:-mt-6"
            >
              <Card className="bg-gradient-to-br from-white/95 to-white/70 dark:from-purple-800/95 dark:to-purple-800/70 shadow-xl hover:shadow-2xl transform transition-all duration-300 backdrop-blur-sm rounded-xl overflow-hidden animate-in fade-in slide-in-from-bottom duration-1000 delay-500 border-2 border-purple-300 dark:border-purple-500">
                <CardHeader className="bg-gradient-to-r from-gold-300/20 to-gold-500/20 dark:from-gold-700/20 dark:to-gold-900/20 py-4">
                  <CardTitle className="flex items-center text-black dark:text-gold-500 text-base">
                    <Droplets className="mr-2 h-5 w-5" />
                    Soft & Pressure Washing
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-3 pb-4">
                  <p className="text-sm text-black dark:text-white">We offer both soft washing for delicate surfaces and high-pressure cleaning for tough stains. Our experts know exactly which method to use for optimal results without damaging your property.</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <Card className="bg-gradient-to-br from-white/95 to-white/70 dark:from-purple-800/95 dark:to-purple-800/70 shadow-xl hover:shadow-2xl transform transition-all duration-300 backdrop-blur-sm rounded-xl overflow-hidden animate-in fade-in slide-in-from-bottom duration-1000 delay-700 border-2 border-purple-300 dark:border-purple-500">
                <CardHeader className="bg-gradient-to-r from-gold-300/20 to-gold-500/20 dark:from-gold-700/20 dark:to-gold-900/20 py-4">
                  <CardTitle className="flex items-center text-black dark:text-gold-500 text-base">
                    <Home className="mr-2 h-5 w-5" />
                    Concrete & Roof Washing
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-3 pb-4">
                  <ul className="list-disc list-inside space-y-1 text-sm text-black dark:text-white">
                    <li>Driveway and sidewalk cleaning</li>
                    <li>Patio and deck restoration</li>
                    <li>Gentle roof cleaning</li>
                    <li>Gutter brightening</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}