"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react'
import { Button } from "../ui/button"

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/CleanslatepressurewashingservicesLLC" },
  { icon: Instagram, href: "https://www.instagram.com/cleanslatepressurewashnola/" },
  { icon: Linkedin, href: "https://linkedin.com/company/cleanslate" },
]

export default function AboutUs() {
  return (
    <section className="bg-white dark:bg-purple-950 py-24 mt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 w-full md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full aspect-[16/9] relative rounded-lg overflow-hidden shadow-xl"
            >
              <Image
                src="/cleanslatelogo.webp"
                alt="Clean Slate Pressure Washing Team"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </motion.div>
            <div>
              <motion.h2 
                className="text-3xl font-bold mb-6 text-black dark:text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                About Clean Slate Pressure Washing
              </motion.h2>
              <motion.p 
                className="text-lg mb-4 text-black dark:text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Clean Slate Pressure Washing has been serving our community for over a decade, providing top-notch pressure washing services to homeowners and businesses alike. Our team of experienced professionals is dedicated to restoring and maintaining the beauty of your property using eco-friendly solutions and state-of-the-art equipment.
              </motion.p>
              <motion.p 
                className="text-lg mb-6 text-black dark:text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                We take pride in our attention to detail and commitment to customer satisfaction. Whether it&apos;s a small residential job or a large commercial project, we approach every task with the same level of dedication and professionalism.
              </motion.p>
              <motion.div 
                className="flex justify-center space-x-4 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <motion.a
                  href="https://www.google.com/localservices/prolist?spp=Cg0vZy8xMWtwdmRfcngx&scp=CgAaJUNsZWFuIFNsYXRlIFByZXNzdXJlIFdhc2hpbmcgU2VydmljZXMqJUNsZWFuIFNsYXRlIFByZXNzdXJlIFdhc2hpbmcgU2VydmljZXM%3D&q=Clean+Slate+Pressure+Washing+Services&src=2&slp=UhUIARIREg8iDS9nLzExa3B2ZF9yeDE"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Image src="/5stargoogle.webp" width={100} height={50} alt="Google 5-star review" className="rounded-lg shadow-md" />
                </motion.a>
                <motion.a
                  href="https://www.yelp.com/biz/clean-slate-pressure-washing-services-des-allemands?osq=Pressure+Washing&override_cta=Request+a+Quote"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Image src="/yelpreview.webp" width={100} height={50} alt="Yelp review" className="rounded-lg shadow-md" />
                </motion.a>
              </motion.div>
              <motion.div 
                className="flex space-x-4 mb-6 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-gold-500 dark:text-white dark:hover:text-gold-400 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <link.icon className="h-6 w-6" />
                    <span className="sr-only">{link.icon.name}</span>
                  </motion.a>
                ))}
              </motion.div>
              <motion.div 
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <Button 
                  size="lg"
                  className="bg-gold-500 text-black hover:bg-gold-600 shadow-md hover:shadow-lg transition-all duration-300"
                  onClick={() => window.location.href = 'mailto:Rickeynaquin@cleanslatepressurewashingnola.com'}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm border-gold-500 text-black hover:bg-gold-500 hover:text-black shadow-md hover:shadow-lg transition-all duration-300 dark:text-white dark:hover:text-black"
                  onClick={() => window.location.href = 'tel:5043527963'}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}