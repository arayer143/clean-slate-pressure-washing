'use client'

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from "../Data/testimonials"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import useEmblaCarousel from 'embla-carousel-react'
import AutoplayPlugin from 'embla-carousel-autoplay'

export default function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [AutoplayPlugin({ delay: 8000, stopOnInteraction: false })]
  )

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-b from-gray-100 to-gray-50 dark:from-purple-900 dark:to-purple-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-800 dark:text-purple-100">Customer Testimonials</h2>
          <Badge variant="secondary" className="text-base md:text-lg px-4 py-2 bg-purple-100 text-purple-800 dark:bg-purple-200 dark:text-purple-900">
            25+ Reviews
          </Badge>
          <div className="flex justify-center mt-4 space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 md:w-8 md:h-8 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
        </div>

        <div className="flex justify-center space-x-6 mb-12 md:mb-16">
          <Link href="https://www.google.com/localservices/prolist?spp=Cg0vZy8xMWtwdmRfcngx&scp=CgAaJUNsZWFuIFNsYXRlIFByZXNzdXJlIFdhc2hpbmcgU2VydmljZXMqJUNsZWFuIFNsYXRlIFByZXNzdXJlIFdhc2hpbmcgU2VydmljZXM%3D&q=Clean+Slate+Pressure+Washing+Services&src=2&slp=UhUIARIREg8iDS9nLzExa3B2ZF9yeDE" target="_blank" rel="noopener noreferrer">
            <Image src="/5stargoogle.webp" width={100} height={50} alt="Google reviews" className="w-28 h-14 md:w-32 md:h-16 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105" />
          </Link>
          <Link href="https://www.yelp.com/biz/clean-slate-pressure-washing-services-des-allemands?osq=Pressure+Washing&override_cta=Request+a+Quote" target="_blank" rel="noopener noreferrer">
            <Image src="/yelpreview.webp" width={100} height={50} alt="Yelp reviews" className="w-28 h-14 md:w-32 md:h-16 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105" />
          </Link>
        </div>

        <div className="relative w-full max-w-4xl mx-auto">
          <div className="flex items-center">
            <Button
              variant="outline"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 transition-all duration-300 
                         rounded-full shadow-md hover:shadow-xl
                         bg-white/80 hover:bg-white dark:bg-purple-700/80 dark:hover:bg-purple-700
                         border-purple-300 hover:border-purple-400 dark:border-purple-500 dark:hover:border-purple-400 
                         p-3 md:p-4
                         text-purple-700 hover:text-purple-800 dark:text-purple-100 dark:hover:text-white"
              onClick={scrollPrev}
            >
              <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
              <span className="sr-only">Previous</span>
            </Button>

            <div ref={emblaRef} className="overflow-hidden rounded-xl shadow-2xl flex-grow mx-12 md:mx-16">
              <div className="flex">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="flex-[0_0_100%] min-w-0 p-4">
                    <Card className="border-0 bg-gradient-to-br from-white to-purple-50 dark:from-purple-800 dark:to-purple-700 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden h-full">
                      <CardContent className="relative flex flex-col items-center justify-center p-4 md:p-6 h-full">
                        <div className="absolute top-0 left-0 w-full h-full bg-purple-100/30 dark:bg-purple-900/30 opacity-50 z-0"></div>
                        <Quote className="w-10 h-10 md:w-12 md:h-12 text-purple-400 dark:text-purple-300 mb-4 z-10" />
                        <p className="text-sm md:text-base text-center text-gray-700 dark:text-gray-100 mb-4 z-10 relative">
                          {testimonial.content}
                        </p>
                      </CardContent>
                      <CardFooter className="flex flex-col items-center py-3 md:py-4 bg-purple-100 dark:bg-purple-600 backdrop-blur-sm">
                        <h3 className="text-sm md:text-base font-semibold text-purple-800 dark:text-purple-100 px-2 md:px-4">{testimonial.name}</h3>
                        <p className="text-xs md:text-sm text-purple-600 dark:text-purple-200 mt-1">Verified Customer</p>
                      </CardFooter>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            <Button
              variant="outline"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 transition-all duration-300 
                         rounded-full shadow-md hover:shadow-xl
                         bg-white/80 hover:bg-white dark:bg-purple-700/80 dark:hover:bg-purple-700
                         border-purple-300 hover:border-purple-400 dark:border-purple-500 dark:hover:border-purple-400 
                         p-3 md:p-4
                         text-purple-700 hover:text-purple-800 dark:text-purple-100 dark:hover:text-white"
              onClick={scrollNext}
            >
              <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}