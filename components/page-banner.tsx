import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface PageBannerProps {
  title: string
  description: string
}

const PageBanner: React.FC<PageBannerProps> = ({ title, description }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden bg-gradient-to-r from-purple-500 to-purple-700 dark:from-purple-800 dark:to-purple-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
          <div className="text-center lg:text-left mb-6 lg:mb-0 lg:mr-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 text-yellow-300 dark:text-yellow-200">
              {title}
            </h1>
            <p className="text-lg sm:text-xl max-w-2xl text-purple-100 dark:text-purple-200">
              {description}
            </p>
          </div>
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ 
              scale: 1, 
              rotate: 0,
              y: [0, -10, 0]
            }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20,
              y: {
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="flex-shrink-0 sm:ml-8 lg:ml-16"
          >
            <Image
              src="/cleanslatelogo.webp"
              alt="Clean Slate Pressure Washing Logo"
              width={250}
              height={150}
              className="rounded-full"
            />
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-purple-500 to-yellow-400 dark:from-yellow-600 dark:via-purple-700 dark:to-yellow-600"></div>
    </motion.div>
  )
}

export default PageBanner