'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { motion } from 'framer-motion'
import { Send, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

async function sendEmail(data: z.infer<typeof formSchema>) {
  'use client'
  
  // Here you would implement the logic to send an email
  // For example, using a service like SendGrid or NodeMailer
  console.log('Sending email:', data)
  
  // Simulate an API call
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // Return success or error based on the result
  return { success: true, message: 'Email sent successfully!' }
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      const result = await sendEmail(values)
      if (result.success) {
        toast({
          title: "Success!",
          description: result.message,
          variant: "default",
        })
        form.reset()
      } else {
        throw new Error(result.message)
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-purple-50 dark:bg-purple-900 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-purple-800 rounded-lg shadow-lg p-6 lg:sticky lg:top-4"
            >
              <div>
                <h2 className="text-2xl font-bold text-purple-800 dark:text-purple-100 mb-6 text-center lg:text-left">
                  Clean Slate Pressure Washing
                </h2>
                <div className="flex flex-col items-center space-y-4 mb-8">
                  <Button 
                    size="lg"
                    className="w-48 bg-gold-500 text-black hover:bg-gold-600 shadow-md hover:shadow-lg transition-all duration-300"
                    onClick={() => window.location.href = 'tel:+1234567890'}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call Us
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="w-48 bg-white/10 backdrop-blur-sm border-gold-500 text-purple-700 hover:bg-gold-500 hover:text-black shadow-md hover:shadow-lg transition-all duration-300 dark:text-purple-200 dark:hover:text-black"
                    onClick={() => window.location.href = 'mailto:contact@cleanslate.com'}
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Email Us
                  </Button>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-200 mb-4 text-center lg:text-left">
                  Follow Us
                </h3>
                <div className="flex justify-center lg:justify-start space-x-4">
                  {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                    <Button 
                      key={index}
                      variant="ghost" 
                      size="icon"
                      className="hover:bg-purple-100 dark:hover:bg-purple-700"
                    >
                      <Icon className="h-5 w-5 text-purple-600 dark:text-purple-300" />
                    </Button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-purple-800 rounded-lg shadow-lg p-6"
            >
              <h1 className="text-3xl font-extrabold text-center text-purple-800 dark:text-purple-100 mb-6">
                Contact Us
              </h1>
              <p className="text-center text-purple-600 dark:text-purple-300 mb-8">
                Have a question or want to work with us? Send us a message!
              </p>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-purple-700 dark:text-purple-200">Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} className="bg-purple-50 dark:bg-purple-700 border-purple-300 dark:border-purple-600" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-purple-700 dark:text-purple-200">Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your.email@example.com" {...field} className="bg-purple-50 dark:bg-purple-700 border-purple-300 dark:border-purple-600" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-purple-700 dark:text-purple-200">Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Your message here..." {...field} className="bg-purple-50 dark:bg-purple-700 border-purple-300 dark:border-purple-600" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex justify-center">
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      size="lg"
                      className="w-48 bg-gold-500 hover:bg-gold-600 text-purple-900 font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-opacity-50"
                    >
                      {isSubmitting ? (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="flex items-center justify-center"
                        >
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-purple-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </motion.div>
                      ) : (
                        <span className="flex items-center justify-center">
                          Send Message <Send className="ml-2 h-4 w-4" />
                        </span>
                      )}
                    </Button>
                  </div>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}