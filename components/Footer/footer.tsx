import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/cleanslate" },
  { icon: Twitter, href: "https://twitter.com/cleanslate" },
  { icon: Instagram, href: "https://instagram.com/cleanslate" },
  { icon: Linkedin, href: "https://linkedin.com/company/cleanslate" },
]

export default function Footer() {
  return (
    <footer className="bg-purple-50 dark:bg-gray-900 border-t border-purple-200 dark:border-purple-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <Card className="bg-white dark:bg-gray-800 border-purple-200 dark:border-purple-700">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Image
                src="/placeholder.svg?height=60&width=200"
                alt="Clean Slate Pressure Washing Logo"
                width={200}
                height={60}
                className="mb-4"
              />
              <p className="text-sm text-purple-700 dark:text-purple-300 leading-relaxed">
                Clean Slate Pressure Washing: Your trusted partner for professional cleaning services. We bring new life to your surfaces with our expert techniques and dedication to quality.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white dark:bg-gray-800 border-purple-200 dark:border-purple-700">
            <CardContent className="p-6 flex flex-col items-center sm:items-start">
              <h3 className="text-lg font-semibold tracking-tight mb-4 text-purple-800 dark:text-purple-300">Quick Links</h3>
              <ul className="space-y-2 text-center sm:text-left">
                {['Home', 'About', 'Services', 'Gallery', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link 
                      href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                      className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-200 transition-colors duration-200"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-white dark:bg-gray-800 border-purple-200 dark:border-purple-700">
            <CardContent className="p-6 space-y-4 flex flex-col items-center sm:items-start">
              <h3 className="text-lg font-semibold tracking-tight text-purple-800 dark:text-purple-300">Contact Us</h3>
              <ul className="space-y-2 text-sm text-purple-700 dark:text-purple-300 text-center sm:text-left">
                <li className="flex items-center space-x-2 justify-center sm:justify-start">
                  <MapPin className="h-4 w-4 flex-shrink-0 text-purple-600 dark:text-purple-400" />
                  <span>123 Pressure Wash St, Cleanville, CS 12345</span>
                </li>
                <li className="flex items-center space-x-2 justify-center sm:justify-start">
                  <Phone className="h-4 w-4 flex-shrink-0 text-purple-600 dark:text-purple-400" />
                  <span>(123) 456-7890</span>
                </li>
                <li className="flex items-center space-x-2 justify-center sm:justify-start">
                  <Mail className="h-4 w-4 flex-shrink-0 text-purple-600 dark:text-purple-400" />
                  <span>info@cleanslate.com</span>
                </li>
              </ul>
              <div className="flex space-x-2 pt-2">
                <Button variant="outline" size="sm" className="flex items-center space-x-2 border-purple-600 text-purple-600 hover:bg-purple-100 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-900">
                  <Phone className="h-4 w-4" />
                  <span>Call Us</span>
                </Button>
                <Button variant="outline" size="sm" className="flex items-center space-x-2 border-purple-600 text-purple-600 hover:bg-purple-100 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-900">
                  <Mail className="h-4 w-4" />
                  <span>Email Us</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <Separator className="my-8 bg-purple-200 dark:bg-purple-700" />
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-purple-700 dark:text-purple-300 text-center md:text-left">
            © {new Date().getFullYear()} Clean Slate Pressure Washing. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <div className="flex space-x-2">
              {socialLinks.map((social) => (
                <Link key={social.href} href={social.href} target="_blank" rel="noopener noreferrer">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="w-8 h-8 text-purple-600 hover:bg-purple-100 hover:text-purple-800 dark:text-purple-400 dark:hover:bg-purple-900 dark:hover:text-purple-200 transition-colors duration-200"
                  >
                    <social.icon className="h-4 w-4" />
                    <span className="sr-only">{social.icon.name}</span>
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}