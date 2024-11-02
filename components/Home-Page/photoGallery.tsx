'use client'

import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Expand, ChevronLeft, ChevronRight, X } from "lucide-react"
import { galleryItemsHomepage } from "../Data/gallery-items-homepage"


export default function PhotoGalleryhome() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0)

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setIsOpen(true)
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryItemsHomepage.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + galleryItemsHomepage.length) % galleryItemsHomepage.length)
  }

  return (
    <section id="gallery" className="py-12 sm:py-16 md:py-24 bg-purple-50 dark:bg-purple-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-purple-800 dark:text-purple-100">Our Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {galleryItemsHomepage.map((item, index) => (
            <Card key={index} className="overflow-hidden group bg-white dark:bg-purple-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0 relative aspect-[4/3]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-purple-900 bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => openLightbox(index)}
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gold-500 hover:bg-gold-600 p-2 rounded-full"
                  >
                    <Expand className="w-6 h-6" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-[95vw] w-full p-0 bg-white dark:bg-purple-800 sm:max-w-4xl">
          <div className="relative w-full h-[50vh] sm:h-[70vh] md:h-[80vh]">
            <Image
              src={galleryItemsHomepage[currentImageIndex].src}
              alt={galleryItemsHomepage[currentImageIndex].alt}
              fill
              sizes="(max-width: 640px) 95vw, (max-width: 1024px) 90vw, 1200px"
              className="object-contain"
              priority
            />
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
          <div className="p-4 text-center">
            <p className="text-lg font-semibold text-purple-800 dark:text-purple-100">{galleryItemsHomepage[currentImageIndex].title}</p>
            <p className="text-sm text-purple-600 dark:text-purple-300">{galleryItemsHomepage[currentImageIndex].alt}</p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}