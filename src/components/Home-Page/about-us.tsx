'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Facebook, Instagram, Linkedin, Home, ShieldX, Heart } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export default function AboutSection() {
  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "https://www.facebook.com/CleanslatepressurewashingservicesLLC", label: "Facebook" },
    { icon: <Instagram className="h-5 w-5" />, href: "https://www.instagram.com/cleanslatepressurewashnola/", label: "Instagram" },
    { icon: <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/></svg>, href: "https://www.tiktok.com/@rnaquin1984?lang=en&is_from_webapp=1&sender_device=mobile&sender_web_id=7238679858033706542", label: "TikTok" },
    { icon: <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M20.47,8.77c0.23,1.44,0.23,4.44,0.23,4.44s0,3-0.23,4.44c-0.13,0.79-0.5,1.4-1.15,2.05 c-0.65,0.65-1.26,1.02-2.05,1.15C15.83,21.1,12,21.1,12,21.1s-3.83,0-5.27-0.23c-0.79-0.13-1.4-0.5-2.05-1.15 c-0.65-0.65-1.02-1.26-1.15-2.05C3.23,16.21,3.23,13.21,3.23,12c0-1.21,0-4.21,0.23-5.65c0.13-0.79,0.5-1.4,1.15-2.05 C5.26,3.65,5.87,3.28,6.66,3.15C8.1,2.92,12,2.92,12,2.92s3.83,0,5.27,0.23c0.79,0.13,1.4,0.5,2.05,1.15 c0.65,0.65,1.02,1.26,1.15,2.05C20.7,7.56,20.47,8.77,20.47,8.77z M9.85,15.56l5.73-3.31L9.85,8.44V15.56z"/></svg>, href: "https://www.yelp.com/biz/clean-slate-pressure-washing-services-des-allemands?osq=Pressure+Washing&override_cta=Request+a+Quote", label: "Yelp" },
    { icon: <Linkedin className="h-5 w-5" />, href: "http://www.linkedin.com/in/rickey-naquin-719008297", label: "LinkedIn" },
  ]

  const services = [
    { icon: <Home className="h-6 w-6" />, title: "Improving curb appeal", description: "Pressure washing can remove years of dirt and grime buildup leaving surfaces as good as new!" },
    { icon: <ShieldX className="h-6 w-6" />, title: "Protect against Damage", description: "Pressure washing can remove contaminants that can damage your home's siding, such as algae, mold, and mildew" },
    { icon: <Heart className="h-6 w-6" />, title: "Improving your health", description: "Pressure washing can remove toxic contaminants like algae and mold, as well as airborne allergens like pollen, dust mites, and mold spores." },
  ]

  return (
    <section id="about" className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center text-foreground">About us</h1>
          
          <div className="flex justify-center space-x-4 mb-8">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground rounded-full p-3 hover:bg-primary/90 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          <h2 className="text-2xl font-semibold mb-4 text-foreground">Clean Slate Pressure Washing</h2>
          <p className="mb-8 text-muted-foreground">
            Clean Slate Pressure Washing LLC is located in South Louisiana and specializes in cleaning up your property. At Clean Slate you will receive a quality experience. We at Clean Slate take care of all your Power and Soft washing needs including house, deck, patio, soft wash roof and sidewalks. Clean Slate will make you proud to call your house a home.
          </p>

          <div className="flex justify-center space-x-4 mb-8">
            <motion.a
              href="https://www.google.com/localservices/prolist?spp=Cg0vZy8xMWtwdmRfcngx&scp=CgAaJUNsZWFuIFNsYXRlIFByZXNzdXJlIFdhc2hpbmcgU2VydmljZXMqJUNsZWFuIFNsYXRlIFByZXNzdXJlIFdhc2hpbmcgU2VydmljZXM%3D&q=Clean+Slate+Pressure+Washing+Services&src=2&slp=UhUIARIREg8iDS9nLzExa3B2ZF9yeDE"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image src="/5stargoogle.webp" width={100} height={50} alt="Google 5-star review" className="rounded-lg" />
            </motion.a>
            <motion.a
              href="https://www.yelp.com/biz/clean-slate-pressure-washing-services-des-allemands?osq=Pressure+Washing&override_cta=Request+a+Quote"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image src="/yelpreview.webp" width={100} height={50} alt="Yelp review" className="rounded-lg" />
            </motion.a>
          </div>

          <h3 className="text-xl font-semibold mb-6 text-foreground">Our services can help with:</h3>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service, index) => (
              <Card key={index} className="bg-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center mb-4 text-primary">
                    {service.icon}
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-card-foreground">{service.title}</h4>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}