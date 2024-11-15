import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="relative bg-purple-900 text-white py-16">
      <div className="absolute inset-0 bg-purple-900/70 dark:bg-purple-900/90"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Restore Your Property?</h2>
          <p className="text-xl mb-8">Get a free estimate for our professional pressure washing services.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8 mt-10">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-gold-500 text-white hover:bg-gold-500 hover:text-black shadow-md hover:shadow-lg transition-all duration-300"
            >
              <a href="tel:5043527963" className="flex items-center justify-center space-x-2">
                <Phone className="h-5 w-5" />
                <span className="text-xl font-semibold">Call Us Now</span>
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-gold-500 text-black hover:bg-gold-600 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <Link href="/contact" className="flex items-center justify-center space-x-2">
                <span className="text-xl font-semibold">Get Free Estimate</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}