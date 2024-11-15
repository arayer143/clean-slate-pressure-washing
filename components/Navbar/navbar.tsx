'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from "../ui/button"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "../ui/dropdown-menu"
import { Sun, Moon, Menu, ChevronDown, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

const services = [
  { name: "Concrete Washing", href: "/services/concrete-washing" },
  { name: "Soft and Pressure Washing", href: "/services/soft-and-pressure-washing" },
  { name: "Commercial Properties", href: "/services/commercial-properties" },
  { name: "Roof Washing", href: "/services/roof-washing" },
  { name: "Fence Cleaning", href: "/services/fence-cleaning" },
  { name: "Gutter Cleaning", href: "/services/gutter-cleaning" },
]

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/" },
  { icon: Twitter, href: "https://twitter.com/" },
  { icon: Instagram, href: "https://instagram.com/" },
  { icon: Linkedin, href: "https://linkedin.com/in/" },
]

export default function Navbar() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-purple-200 dark:border-purple-800 bg-purple-50/95 dark:bg-purple-900/95 backdrop-blur supports-[backdrop-filter]:bg-purple-50/60 dark:supports-[backdrop-filter]:bg-purple-900/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 flex items-center justify-start">
            <Link href="/" className="flex items-center space-x-2">
              <Image 
                src="/cleanslatelogo.webp" 
                alt="Clean Slate Pressure Washing Logo" 
                width={150} 
                height={70} 
                className="h-auto w-[150px] min-w-[150px]"
              />
            </Link>
          </div>
          <nav className="hidden md:flex space-x-1 flex-1 justify-center">
            <NavLink href="/" active={pathname === "/"}>Home</NavLink>
            <NavLink href="/about" active={pathname === "/about"}>About</NavLink>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant={pathname.startsWith("/services") ? "default" : "ghost"} className="text-sm font-medium">
                  Services <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-purple-50 dark:bg-purple-900">
                <DropdownMenuItem asChild>
                  <Link href="/services" className="w-full font-medium">
                    All Services
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-purple-200 dark:bg-purple-700" />
                {services.map((service) => (
                  <DropdownMenuItem key={service.href} asChild>
                    <Link href={service.href} className="w-full">
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <NavLink href="/gallery" active={pathname === "/gallery"}>Gallery</NavLink>
            <NavLink href="/blog" active={pathname === "/blog"}>Blog</NavLink>
            <NavLink href="/contact" active={pathname === "/contact"}>Contact</NavLink>
          </nav>
          <div className="flex-1 flex items-center justify-end space-x-4">
            <div className="hidden xl:flex items-center space-x-2">
              {socialLinks.map((social) => (
                <Link key={social.href} href={social.href} target="_blank" rel="noopener noreferrer">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="w-8 h-8 hover:bg-gold-500 hover:text-purple-900 dark:hover:text-purple-100"
                  >
                    <social.icon className="h-4 w-4" />
                    <span className="sr-only">{social.icon.name}</span>
                  </Button>
                </Link>
              ))}
            </div>
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                aria-label="Toggle theme"
                className="w-9 px-0"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-gold-500" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-gold-500" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            )}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-purple-50 dark:bg-purple-900 flex flex-col">
                <nav className="flex flex-col space-y-4 mt-4 flex-grow">
                  <NavLink href="/" mobile active={pathname === "/"}>Home</NavLink>
                  <NavLink href="/about" mobile active={pathname === "/about"}>About</NavLink>
                  <div className="space-y-2">
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-lg font-medium"
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                    >
                      Services <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                    </Button>
                    {isServicesOpen && (
                      <div className="pl-4 space-y-2">
                        <NavLink href="/services" mobile active={pathname === "/services"}>All Services</NavLink>
                        {services.map((service) => (
                          <NavLink key={service.href} href={service.href} mobile active={pathname === service.href}>
                            {service.name}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                  <NavLink href="/gallery" mobile active={pathname === "/gallery"}>Gallery</NavLink>
                  <NavLink href="/blog" mobile active={pathname === "/blog"}>Blog</NavLink>
                  <NavLink href="/contact" mobile active={pathname === "/contact"}>Contact</NavLink>
                </nav>
                <div className="flex items-center justify-center space-x-2 mt-auto py-4 border-t border-purple-200 dark:border-purple-700">
                  {socialLinks.map((social) => (
                    <Link key={social.href} href={social.href} target="_blank" rel="noopener noreferrer">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="w-8 h-8 hover:bg-gold-500 hover:text-purple-900 dark:hover:text-purple-100"
                      >
                        <social.icon className="h-4 w-4" />
                        <span className="sr-only">{social.icon.name}</span>
                      </Button>
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

function NavLink({ href, children, mobile = false, active = false }: { href: string; children: React.ReactNode; mobile?: boolean; active?: boolean }) {
  return (
    <Link href={href} passHref>
      <Button
        variant={active ? "default" : "ghost"}
        className={`${
          mobile ? 'justify-start w-full text-lg' : 'text-sm'
        } font-medium transition-colors hover:text-purple-700 dark:hover:text-purple-300 focus:text-purple-700 dark:focus:text-purple-300 focus:bg-purple-100 dark:focus:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500 ${
          active ? 'bg-gold-500 text-purple-900 dark:text-purple-100 hover:bg-gold-600' : ''
        }`}
      >
        {children}
      </Button>
    </Link>
  )
}