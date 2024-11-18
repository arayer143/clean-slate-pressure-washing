'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import { Facebook,  Instagram, Linkedin, Mail, Phone, User, Target, Award, Leaf, Heart, DollarSign, ArrowRight, Users, Clock } from 'lucide-react'

export default function AboutUsPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-16">
        <motion.section 
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-purple-800 dark:text-purple-300 mb-4"
            variants={fadeInUp}
          >
            About Us
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300"
            variants={fadeInUp}
          >
            Passionate about creating clean and beautiful spaces
          </motion.p>
        </motion.section>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={staggerChildren}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp} className="md:col-span-2">
            <Card className="h-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                  <div className="bg-purple-100 dark:bg-purple-900 p-6 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-purple-800 dark:text-purple-300 mb-4 flex items-center">
                      <User className="w-6 h-6 mr-2" />
                      Our Story
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      We started this business with a passion for transforming spaces and a commitment to excellence. With years of experience in pressure washing and cleaning services, we&apos;ve honed our skills to deliver outstanding results for every client.
                    </p>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-800 p-6 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-purple-800 dark:text-purple-300 mb-4 flex items-center">
                      <Target className="w-6 h-6 mr-2" />
                      Our Mission
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Our mission is to provide top-quality cleaning services that not only meet but exceed our clients&apos; expectations. We believe in the power of a clean environment to improve lives and businesses, and we&apos;re committed to delivering that transformation with every job.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUp} className="flex flex-col justify-between">
            <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 mb-4">
              <CardContent className="p-6">
                <Image
                  src="/cleanslatelogo.webp"
                  alt="Company Logo"
                  width={200}
                  height={100}
                  className="w-full h-auto"
                />
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-300 mb-4">Connect With Us</h3>
                <div className="flex justify-center space-x-4">
                  {[
                    { icon: Facebook, href: "https://www.facebook.com/CleanslatepressurewashingservicesLLC", label: "Facebook" },
                    { icon: Instagram, href: "https://www.instagram.com/cleanslatepressurewashnola/", label: "Instagram" },
                    { icon: Linkedin, href: "https://linkedin.com/company/cleanslate", label: "LinkedIn" },

              
                  ].map((social, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Button variant="outline" size="icon" className="rounded-full bg-white dark:bg-gray-800 hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors duration-300">
                        <social.icon className="w-5 h-5 text-purple-600 dark:text-purple-300" />
                        <span className="sr-only">{social.label}</span>
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <motion.section
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-purple-800 dark:text-purple-300 mb-6 text-center">Why Choose Us?</h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={staggerChildren}
          >
            {[
              { icon: Award, title: "Experience", description: "Years of industry expertise" },
              { icon: Heart, title: "Quality", description: "Top-notch service and results" },
              { icon: Clock, title: "Reliability", description: "Dependable and punctual" },
              { icon: Leaf, title: "Eco-Friendly", description: "Using green cleaning solutions" },
              { icon: Users, title: "Customer-Focused", description: "Your satisfaction is our priority" },
              { icon: DollarSign, title: "Affordable", description: "Competitive pricing for all services" },
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-purple-700 dark:text-purple-300 flex items-center">
                      <item.icon className="w-5 h-5 mr-2" />
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-purple-800 dark:text-purple-300 mb-6 text-center">Get in Touch</h2>
          <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <CardContent className="flex flex-col items-center p-6">
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
                We&apos;re always happy to answer any questions you might have. Feel free to reach out!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="outline" className="flex items-center space-x-2 group">
                  <Mail className="w-4 h-4" />
                  <span>Email Us</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
                <Button variant="outline" className="flex items-center space-x-2 group">
                  <Phone className="w-4 h-4" />
                  <span>Call Us</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </main>
    </div>
  )
}