'use client'

import * as React from "react"
import Image from "next/image"
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Expand, ChevronLeft, ChevronRight, X, Play, Droplets } from 'lucide-react'
import { galleryItems, GalleryItem } from "../../lib/gallery-data"

// Fisher-Yates shuffle algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export default function GalleryPage() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0)
  const [filter, setFilter] = React.useState<GalleryItem['type'] | 'all'>('all')

  // Randomize the gallery items on component mount
  const randomizedItems = React.useMemo(() => shuffleArray(galleryItems), [])

  const filteredItems = React.useMemo(() => 
    filter === 'all' ? randomizedItems : randomizedItems.filter(item => item.type === filter),
    [filter, randomizedItems]
  )

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setIsOpen(true)
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % filteredItems.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + filteredItems.length) % filteredItems.length)
  }

  const handleTabChange = (value: string) => {
    setFilter(value as GalleryItem['type'] | 'all')
    setCurrentImageIndex(0)
  }

  const currentItem = filteredItems[currentImageIndex]

  return (
    <>
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
            Our Gallery
          </motion.h1>
          <motion.p 
            className="text-xl sm:text-2xl max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Explore our portfolio of stunning transformations
          </motion.p>
        </div>
      </motion.div>

      <section id="gallery" className="py-12 sm:py-16 md:py-24 bg-purple-50 dark:bg-purple-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-purple-800 dark:text-purple-100">Our Work</h2>
          
          <Tabs defaultValue="all" className="mb-8" onValueChange={handleTabChange}>
            <TabsList className="grid w-full grid-cols-4 mb-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="image">Images</TabsTrigger>
              <TabsTrigger value="video">Videos</TabsTrigger>
              <TabsTrigger value="before-after">Before & After</TabsTrigger>
            </TabsList>
          </Tabs>

          {filteredItems.length === 0 ? (
            <p className="text-center text-purple-800 dark:text-purple-200">No items to display.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {filteredItems.map((item, index) => (
                <Card key={index} className="overflow-hidden group bg-white dark:bg-purple-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-0 relative aspect-[4/3]">
                    {item.type === 'video' ? (
                      <div className="w-full h-full bg-black flex items-center justify-center">
                        <Play className="w-12 h-12 text-white" />
                      </div>
                    ) : (
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    )}
                    <div className="absolute inset-0 bg-purple-900 bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                      <button
                        onClick={() => openLightbox(index)}
                        className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gold-500 hover:bg-gold-600 p-2 rounded-full"
                      >
                        {item.type === 'video' ? <Play className="w-6 h-6" /> : <Expand className="w-6 h-6" />}
                      </button>
                    </div>
                    {item.type === 'before-after' && (
                      <div className="absolute top-2 left-2 bg-gold-500 text-white px-2 py-1 text-xs rounded">
                        Before & After
                      </div>
                    )}
                    {item.type === 'video' && (
                      <div className="absolute top-2 left-2 bg-gold-500 text-white px-2 py-1 text-xs rounded">
                        Video
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="max-w-[95vw] w-full p-0 bg-white dark:bg-purple-800 sm:max-w-4xl">
            {currentItem && (
              <div className="relative w-full h-[50vh] sm:h-[70vh] md:h-[80vh]">
                {currentItem.type === 'video' ? (
                  <video
                    src={currentItem.src}
                    className="w-full h-full object-contain"
                    controls
                    autoPlay
                  />
                ) : currentItem.type === 'before-after' ? (
                  <div className="w-full h-full flex">
                    <div className="w-1/2 h-full relative">
                      <Image
                        src={currentItem.beforeSrc || ''}
                        alt="Before"
                        fill
                        sizes="50vw"
                        className="object-contain"
                        priority
                      />
                      <div className="absolute top-2 left-2 bg-gold-500 text-white px-2 py-1 text-xs rounded">
                        Before
                      </div>
                    </div>
                    <div className="w-1/2 h-full relative">
                      <Image
                        src={currentItem.src}
                        alt="After"
                        fill
                        sizes="50vw"
                        className="object-contain"
                        priority
                      />
                      <div className="absolute top-2 left-2 bg-gold-500 text-white px-2 py-1 text-xs rounded">
                        After
                      </div>
                    </div>
                  </div>
                ) : (
                  <Image
                    src={currentItem.src}
                    alt={currentItem.alt}
                    fill
                    sizes="(max-width: 640px) 95vw, (max-width: 1024px) 90vw, 1200px"
                    className="object-contain"
                    priority
                  />
                )}
                <DialogClose asChild>
                  <button className="absolute top-2 right-2 z-50 p-2 rounded-full bg-purple-100 hover:bg-purple-200 text-purple-800 dark:bg-purple-700 dark:hover:bg-purple-600 dark:text-purple-100 focus:outline-none focus:ring-2 focus:ring-gold-500">
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close</span>
                  </button>
                </DialogClose>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-purple-100 hover:bg-purple-200 text-purple-800 dark:bg-purple-700 dark:hover:bg-purple-600 dark:text-purple-100"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-6 w-6" />
                  <span className="sr-only">Previous image</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-purple-100 hover:bg-purple-200 text-purple-800 dark:bg-purple-700 dark:hover:bg-purple-600 dark:text-purple-100"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-6 w-6" />
                  <span className="sr-only">Next image</span>
                </Button>
              </div>
            )}
            {currentItem && (
              <div className="p-4 text-center">
                <p className="text-lg font-semibold text-purple-800 dark:text-purple-100">{currentItem.title}</p>
                <p className="text-sm text-purple-600 dark:text-purple-300">{currentItem.alt}</p>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </section>
    </>
  )
}