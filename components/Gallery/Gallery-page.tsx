'use client'

import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Expand, ChevronLeft, ChevronRight, X } from "lucide-react"

const galleryItems = [
  { src: "/concrete-beforeandafter-2.webp", alt: "Concrete before and after", title: "Gallery 1" },
  { src: "/conrete-beforeandafter-3.webp", alt: "Concrete before and after", title: "Gallery 2" },
  { src: "/patio-beforeandafter.webp", alt: "Patio before and after", title: "Gallery 3" },
  { src: "/parking-lot-beforeandafter.webp", alt: "Parking lot before and after", title: "Gallery 4" },
  { src: "/diveway-beforeandafter.webp", alt: "Driveway before and after", title: "Gutter Before and After" },
  { src: "/sign-beforeandafter.webp", alt: "Sign before and after", title: "Gallery 6" },
  { src: "/afterwalkway.webp", alt: "Clean walkway after pressure washing", title: "Restored Walkway" },
  { src: "/anotherfrontporch-after.webp", alt: "Front porch after cleaning", title: "Refreshed Front Porch" },
  { src: "/anotherfrontporch-before.webp", alt: "Front porch before cleaning", title: "Dirty Front Porch" },
  { src: "/backalley-beforeandafter.webp", alt: "Back alley before and after cleaning", title: "Alley Transformation" },
  { src: "/before-and-after1.webp", alt: "Before and after pressure washing comparison 1", title: "Amazing Transformation 1" },
  { src: "/before-and-after2.webp", alt: "Before and after pressure washing comparison 2", title: "Stunning Results 2" },
  { src: "/before-and-after3.webp", alt: "Before and after pressure washing comparison 3", title: "Incredible Difference 3" },
  { src: "/before-and-after5.webp", alt: "Before and after pressure washing comparison 5", title: "Remarkable Change 5" },
  { src: "/before-and-after7.webp", alt: "Before and after pressure washing comparison 7", title: "Impressive Cleanup 7" },
  { src: "/before-and-after8.webp", alt: "Before and after pressure washing comparison 8", title: "Noticeable Improvement 8" },
  { src: "/before-and-after9.webp", alt: "Before and after pressure washing comparison 9", title: "Dramatic Transformation 9" },
  { src: "/before-and-after10.webp", alt: "Before and after pressure washing comparison 10", title: "Striking Difference 10" },
  { src: "/before-and-after12.webp", alt: "Before and after pressure washing comparison 12", title: "Astonishing Results 12" },
  { src: "/before-and-after13.webp", alt: "Before and after pressure washing comparison 13", title: "Remarkable Cleanup 13" },
  { src: "/before-and-after14.webp", alt: "Before and after pressure washing comparison 14", title: "Impressive Change 14" },
  { src: "/before-and-after15.webp", alt: "Before and after pressure washing comparison 15", title: "Stunning Transformation 15" },
  { src: "/before-and-after16.webp", alt: "Before and after pressure washing comparison 16", title: "Incredible Difference 16" },
  { src: "/before-and-after17.webp", alt: "Before and after pressure washing comparison 17", title: "Amazing Results 17" },
]

export default function GalleryPage() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0)

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setIsOpen(true)
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryItems.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + galleryItems.length) % galleryItems.length)
  }

  return (
    <section id="gallery" className="py-12 sm:py-16 md:py-24 bg-purple-50 dark:bg-purple-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-purple-800 dark:text-purple-100">Our Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {galleryItems.map((item, index) => (
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
              src={galleryItems[currentImageIndex].src}
              alt={galleryItems[currentImageIndex].alt}
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
            <p className="text-lg font-semibold text-purple-800 dark:text-purple-100">{galleryItems[currentImageIndex].title}</p>
            <p className="text-sm text-purple-600 dark:text-purple-300">{galleryItems[currentImageIndex].alt}</p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}