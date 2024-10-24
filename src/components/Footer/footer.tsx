import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/yourpage" },
  { icon: Twitter, href: "https://twitter.com/yourhandle" },
  { icon: Instagram, href: "https://instagram.com/yourprofile" },
  { icon: Linkedin, href: "https://linkedin.com/in/yourprofile" },
]

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-tight">About Us</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We are a web development company specializing in creating beautiful and functional websites for businesses of all sizes. Our passion is turning your digital dreams into reality.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-tight">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-tight">Contact Us</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>123 Web Dev Lane, Codeville, IN 12345</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@yourcompany.com</span>
              </li>
            </ul>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Your Company Name. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">

            <Separator orientation="vertical" className="h-4" />
            <div className="flex space-x-2">
              {socialLinks.map((social) => (
                <Link key={social.href} href={social.href} target="_blank" rel="noopener noreferrer">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="w-8 h-8 hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
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