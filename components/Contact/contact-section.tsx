'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react'

export default function ContactSection() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('submitting')

    const form = e.currentTarget
    const formData = new FormData(form)
    const formJson = Object.fromEntries(formData.entries())

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formJson),
      })

      if (response.ok) {
        setFormStatus('submitted')
        form.reset()
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setFormStatus('error')
    }
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  return (
    <section className="py-16 bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-purple-800 dark:text-purple-300 mb-4 text-center">
          Contact Us
        </h1>
        <motion.h2 
          className="text-2xl font-semibold text-purple-700 dark:text-purple-200 mb-8 text-center"
          {...fadeInUp}
        >
          Get in Touch with us today!
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div {...fadeInUp}>
            <Card className="h-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 lg:h-auto">
              <CardHeader className="lg:py-4">
                <CardTitle className="text-2xl font-bold text-center text-purple-700 dark:text-purple-300 lg:text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 flex flex-col items-center text-center lg:space-y-2 lg:py-2">
                <div className="flex flex-col items-center space-y-2">
                  <Button 
                    variant="outline" 
                    className="w-40 justify-center space-x-2 bg-white dark:bg-gray-800 hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors duration-300 lg:w-36 lg:text-sm lg:py-1"
                    asChild
                  >
                    <a href="tel:5043527963">
                      <Phone className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400" />
                      Call Me
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-40 justify-center space-x-2 bg-white dark:bg-gray-800 hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors duration-300 lg:w-36 lg:text-sm lg:py-1"
                    asChild
                  >
                    <a href="mailto:Rickeynaquin@cleanslatepressurewashingnola.com">
                      <Mail className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400" />
                      Email Me
                    </a>
                  </Button>
                </div>
    
                <div className="pt-4 w-full lg:pt-2">
                  <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-300 mb-2 text-center lg:text-base lg:mb-1">Follow Us</h3>
                  <div className="flex justify-center space-x-4 lg:space-x-2 py-4">
                    {[
                      { icon: Facebook, label: "Facebook" , name: "Facebook" },
                      { icon: Instagram, label: "Instagram", name: "Instagram" },
                      { icon: Linkedin, label: "LinkedIn", name: "LinkedIn" },
                    ].map((social, index) => (
                      <Button key={index} variant="outline" size="icon" className="rounded-full bg-white dark:bg-gray-800 hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors duration-300 lg:w-8 lg:h-8">
                        <social.icon className="w-5 h-5 text-purple-600 dark:text-purple-300 lg:w-4 lg:h-4" />
                        <span className="sr-only">{social.label}</span>
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div {...fadeInUp}>
            <Card className="h-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-center font-bold text-purple-700 dark:text-purple-300">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" placeholder="Your Name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="Your Email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Service</Label>
                    <Select name="service" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="soft-pressure-washing">Soft and Pressure Washing</SelectItem>
                        <SelectItem value="roof-washing">Roof Washing</SelectItem>
                        <SelectItem value="concrete-washing">Concrete Washing</SelectItem>
                        <SelectItem value="commercial-properties">Commercial Properties</SelectItem>
                        <SelectItem value="fence-cleaning">Fence Cleaning</SelectItem>
                        <SelectItem value="gutter-cleaning">Gutter Cleaning</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" placeholder="Your Message" required />
                  </div>
                  <Button type="submit" className="w-full" disabled={formStatus === 'submitting'}>
                    {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                  </Button>
                  {formStatus === 'submitted' && (
                    <p className="text-green-600 dark:text-green-400">Thank you for your message. We&apos;ll get back to you soon!</p>
                  )}
                  {formStatus === 'error' && (
                    <p className="text-red-600 dark:text-red-400">There was an error sending your message. Please try again.</p>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
