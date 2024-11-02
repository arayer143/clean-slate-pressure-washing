'use client'

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { testimonials } from "../Data/testimonials"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import useEmblaCarousel from 'embla-carousel-react'
import AutoplayPlugin from 'embla-carousel-autoplay'

export default function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [AutoplayPlugin({ delay: 5000, stopOnInteraction: false })]
  )

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-background to-background/80 dark:from-background dark:to-background/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-foreground dark:text-foreground">Customer Testimonials</h2>
          <Badge variant="secondary" className="text-sm sm:text-base md:text-lg px-3 py-1 sm:px-4 sm:py-2 bg-secondary text-secondary-foreground dark:bg-secondary dark:text-secondary-foreground">
            25+ Reviews
          </Badge>
          <div className="flex justify-center mt-4 sm:mt-6 space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-400 dark:text-yellow-400 fill-yellow-400 dark:fill-yellow-400" />
            ))}
          </div>
        </div>

        <div className="flex justify-center space-x-4 sm:space-x-6 mb-8 sm:mb-12 md:mb-16">
          <Link href="https://www.google.com/localservices/prolist?spp=Cg0vZy8xMWtwdmRfcngx&scp=CgAaJUNsZWFuIFNsYXRlIFByZXNzdXJlIFdhc2hpbmcgU2VydmljZXMqJUNsZWFuIFNsYXRlIFByZXNzdXJlIFdhc2hpbmcgU2VydmljZXM%3D&q=Clean+Slate+Pressure+Washing+Services&src=2&slp=UhUIARIREg8iDS9nLzExa3B2ZF9yeDE" target="_blank" rel="noopener noreferrer">
            <Image src="/placeholder.svg?height=40&width=80" width={80} height={40} alt="Google reviews" className="w-20 h-10 sm:w-24 sm:h-12 md:w-28 md:h-14 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105" />
          </Link>
          <Link href="https://www.yelp.com/biz/clean-slate-pressure-washing-services-des-allemands?osq=Pressure+Washing&override_cta=Request+a+Quote" target="_blank" rel="noopener noreferrer">
            <Image src="/placeholder.svg?height=40&width=80" width={80} height={40} alt="Yelp reviews" className="w-20 h-10 sm:w-24 sm:h-12 md:w-28 md:h-14 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105" />
          </Link>
        </div>

        <div className="relative w-full max-w-4xl mx-auto">
          <div className="flex items-center">
            <Button
              variant="outline"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 transition-all duration-300 
                         rounded-full shadow-md hover:shadow-lg
                         bg-background/80 hover:bg-background dark:bg-gray-800/80 dark:hover:bg-gray-800
                         border-primary/10 hover:border-primary/20 dark:border-gray-600 dark:hover:border-gray-500 
                         p-2 sm:p-3 md:p-4
                         text-primary hover:text-primary dark:text-gray-200 dark:hover:text-white"
              onClick={scrollPrev}
            >
              <ChevronLeft className="h-6 w-6 sm:h-5 sm:w-5 md:h-6 md:w-6" />
              <span className="sr-only">Previous</span>
            </Button>

            <div ref={emblaRef} className="overflow-hidden rounded-xl shadow-lg flex-grow mx-8 sm:mx-12 md:mx-16">
              <div className="flex">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="flex-[0_0_100%] min-w-0 px-2 py-4">
                    <Card className="border-0 bg-gradient-to-br from-card to-card/80 dark:from-card dark:to-card/80 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                      <CardContent className="relative flex flex-col items-center justify-center p-4 sm:p-6 md:p-6 min-h-[150px] sm:min-h-[200px] md:min-h-[220px]">
                        <div className="absolute top-0 left-0 w-full h-full bg-primary/5 dark:bg-primary/10 opacity-50 z-0"></div>
                        <Quote className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-primary/20 dark:text-primary/20 mb-2 sm:mb-3 md:mb-4 z-10" />
                        <p className="text-sm sm:text-base md:text-base text-center text-card-foreground dark:text-card-foreground mb-2 sm:mb-3 md:mb-4 z-10 relative line-clamp-4 sm:line-clamp-5">
                          {testimonial.content}
                        </p>
                      </CardContent>
                      <CardFooter className="flex flex-col items-center py-2 sm:py-3 md:py-4 bg-primary/10 dark:bg-primary/20 backdrop-blur-sm">
                        <h3 className="text-sm sm:text-base md:text-base font-semibold text-primary dark:text-gray-100 px-2 sm:px-4 md:px-4">{testimonial.name}</h3>
                        <p className="text-xs sm:text-sm md:text-sm text-primary/70 dark:text-gray-300 mt-0.5 sm:mt-1">Verified Customer</p>
                      </CardFooter>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            <Button
              variant="outline"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 transition-all duration-300 
                         rounded-full shadow-md hover:shadow-lg
                         bg-background/80 hover:bg-background dark:bg-gray-800/80 dark:hover:bg-gray-800
                         border-primary/10 hover:border-primary/20 dark:border-gray-600 dark:hover:border-gray-500 
                         p-2 sm:p-3 md:p-4
                         text-primary hover:text-primary dark:text-gray-200 dark:hover:text-white"
              onClick={scrollNext}
            >
              <ChevronRight className="h-6 w-6 sm:h-5 sm:w-5 md:h-6 md:w-6" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}