"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, PhoneCall, Check, Droplets, Home } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function Hero() {
  const [isHovered1, setIsHovered1] = useState(false)
  const [isHovered2, setIsHovered2] = useState(false)

  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-400 text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container mx-auto px-4 py-24 sm:py-32">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
            Revitalize Your Property with Clean Slate Pressure Washing
          </h1>
          <p className="text-xl mb-8">
            Professional pressure washing services to make your home or business shine like new.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg"
                className="w-full sm:w-auto bg-white text-blue-600 hover:bg-blue-50"
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
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
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
                Call Us Now
              </Button>
            </motion.div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mb-32">
          <Card className="bg-white text-blue-600 shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Check className="mr-2 h-6 w-6" />
                Why Choose Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Experienced professionals</li>
                <li>Eco-friendly cleaning solutions</li>
                <li>State-of-the-art equipment</li>
                <li>100% satisfaction guarantee</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-white text-blue-600 shadow-lg transform hover:-translate-y-1 transition-transform duration-300 md:-mt-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Droplets className="mr-2 h-6 w-6" />
                Soft & Pressure Washing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">We offer both soft washing for delicate surfaces and high-pressure cleaning for tough stains. Our experts know exactly which method to use for optimal results without damaging your property.</p>
            </CardContent>
          </Card>
          <Card className="bg-white text-blue-600 shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Home className="mr-2 h-6 w-6" />
                Concrete & Roof Washing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Driveway and sidewalk cleaning</li>
                <li>Patio and deck restoration</li>
                <li>Gentle roof cleaning</li>
                <li>Gutter brightening</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}