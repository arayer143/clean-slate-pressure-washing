'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Linkedin, MessageCircle, Droplets } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: "Lines appearing on your driveway after pressure washing could be due to a few reasons:",
    image: "/linesdriveway.webp",
    content: (
      <>
        <ul className="list-disc pl-5 space-y-2">
          <li>Uneven Pressure: Inconsistent pressure application while washing can leave behind lines or streaks. Ensure you maintain a consistent distance and pressure throughout the cleaning process.</li>
          <li>Improper Technique: Incorrect nozzle angle or distance from the surface can result in lines. Could you hold the nozzle at a consistent angle and maintain the same distance?</li>
          <li>Dirt Build-Up: If there are areas of heavier dirt or grime accumulation, they may require more pressure to clean thoroughly, potentially leaving lines when adjacent areas are cleaned at a different pressure.</li>
          <li>Equipment Issues: Malfunctioning or damaged pressure washer equipment can cause irregular pressure output, leading to lines or streaks on the driveway.</li>
        </ul>
        <h4 className="mt-4 font-semibold">To prevent lines in the future, ensure you use proper technique, maintain your pressure washing equipment regularly, and consider starting with a lower pressure setting before gradually increasing if necessary.</h4>
      </>
    ),
    link: "/services/concrete-washing"
  },
  {
    id: 2,
    title: "Let's talk about something that's often overlooked but can wreak havoc if ignored for too long: Dirty Gutters.",
    image: "/gutterbeforeandafter.webp",
    content: (
      <>
        <p>We&apos;ve all been there – maybe you&apos;ve noticed leaves, twigs, or even critters making a cozy home out of your gutters. It&apos;s easy to brush it off as a minor inconvenience, but trust me, it&apos;s anything but!</p>
        <p className="mt-4">Dirty gutters are more than just an eyesore:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>They&apos;re a breeding ground for problems.</li>
          <li>Clogged gutters can lead to water overflow, causing damage to your roof, siding, and foundation.</li>
          <li>And if left unattended, they can even invite unwanted guests like mosquitoes and rodents.</li>
        </ul>
        <p className="mt-4"><span className="font-semibold">So, what&apos;s the solution?</span> Regular gutter maintenance is key. Whether you tackle it yourself or call in the pros, clearing out debris and ensuring proper drainage is essential for keeping your home safe and sound. It might not be the most glamorous task, but the peace of mind knowing your gutters are clean and functioning properly? Priceless.</p>
        <h4 className="mt-4 font-semibold">Remember, a little prevention goes a long way. Don&apos;t let dirty gutters rain on your parade – take action and keep your home in tip-top shape!</h4>
      </>
    ),
    link: "/services/gutter-cleaning"
  },
  {
    id: 3,
    title: "Ever wondered why your home's siding loses its color over time?",
    image: "/oxidation.webp",
    content: (
      <>
        <p className="font-semibold">Why Does it Happen?</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Sun Exposure: UV rays break down siding materials, leading to fading.</li>
          <li>Weathering: Rain, snow, and temperature changes accelerate oxidation.</li>
          <li>Air Pollution: Pollutants can trigger discoloration and corrosion.</li>
          <li>Neglect: Lack of maintenance allows dirt and moisture to speed up the process.</li>
        </ul>
        <p className="mt-4 font-semibold">Preventing Oxidation</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Regular Cleaning: Remove dirt and grime to slow down oxidation.</li>
          <li>Protective Coatings: Apply sealants to shield siding from UV and moisture.</li>
          <li>Trim Vegetation: Prevent moisture buildup by keeping plants away from siding.</li>
          <li>Schedule inspections to catch issues early.</li>
        </ul>
        <h4 className="mt-4 font-semibold">Understanding and addressing oxidation can keep your siding looking vibrant for years!</h4>
      </>
    ),
    link: "/services/soft-and-pressure-washing"
  }
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden mb-12 bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-800 dark:to-purple-950 text-white w-full"
      >
        <div className="relative z-10 text-center py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="mb-8"
          >
            <Droplets className="mx-auto h-20 w-20 text-yellow-400 dark:text-yellow-300" />
          </motion.div>
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Our Blog
          </motion.h1>
          <motion.p 
            className="text-xl sm:text-2xl max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Insights, tips, and stories from the world of pressure washing
          </motion.p>
        </div>
      </motion.div>

      {/* Breadcrumbs */}
      <section className="bg-white dark:bg-gray-800 py-4 shadow-sm">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mt-2 text-gray-800 dark:text-white">Blog</h1>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {blogPosts.map((post, index) => (
                <motion.article 
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
                >
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    width={800} 
                    height={400} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h2 className="text-2xl text-center font-bold mb-4 text-gray-800 dark:text-white">
                      <Link href={post.link} className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                        {post.title}
                      </Link>
                    </h2>
                    <div className="prose dark:prose-invert max-w-none">
                      {post.content}
                    </div>
                    <Link href={post.link} passHref>
                      <Button className="mt-4 bg-purple-200 text-gray-900 hover:bg-purple-300">Read More</Button>
                    </Link>
                  </div>
                </motion.article>
              ))}

              {/* Facebook Embeds */}
              <Card>
                <CardHeader>
                  <CardTitle>Facebook Post</CardTitle>
                </CardHeader>
                <CardContent>
                  <iframe 
                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FCleanslatepressurewashingservicesLLC%2Fposts%2Fpfbid0sRMRS7NyDR6ZTpLMGeErrZh7ZvRav2fxnyVFGy6Cm1TtqhC2oz3i8TXm7T38Bitrl&show_text=true&width=500&is_preview=true" 
                    width="100%" 
                    height="600" 
                    style={{border: 'none', overflow: 'hidden'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen={true} 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  ></iframe>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Facebook Video</CardTitle>
                </CardHeader>
                <CardContent>
                  <iframe 
                    src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FCleanslatepressurewashingservicesLLC%2Fvideos%2F465415009173848%2F&show_text=true&width=267&t=0" 
                    width="100%" 
                    height="591" 
                    style={{border: 'none', overflow: 'hidden'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen={true} 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  ></iframe>
                  <p className="mt-4">So why settle for a leisurely Sunday drive when you can unleash the fury of our Surface Cleaner and leave those stubborn stains in the dust? Dom Toretto would approve. After all, it&apos;s not just about cleaning – it&apos;s about family... and a whole lot of speed!</p>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Social Media</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <Link href="https://www.facebook.com/CleanslatepressurewashingservicesLLC" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon">
                        <Facebook className="h-4 w-4" />
                        <span className="sr-only">Facebook</span>
                      </Button>
                    </Link>
                    <Link href="https://www.instagram.com/cleanslatepressurewashnola/" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon">
                        <Instagram className="h-4 w-4" />
                        <span className="sr-only">Instagram</span>
                      </Button>
                    </Link>
                    <Link href="http://www.linkedin.com/in/rickey-naquin-719008297" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon">
                        <Linkedin className="h-4 w-4" />
                        <span className="sr-only">LinkedIn</span>
                      </Button>
                    </Link>
                    <Link href="https://www.yelp.com/biz/clean-slate-pressure-washing-services-des-allemands?osq=Pressure+Washing&override_cta=Request+a+Quote" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon">
                        <MessageCircle className="h-4 w-4" />
                        <span className="sr-only">Yelp</span>
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}