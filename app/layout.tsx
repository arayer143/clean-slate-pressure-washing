import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Suspense } from 'react';
import GoogleAnalytics from '@/components/GoogleAnalytics'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: 'swap',
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Clean Slate Pressure Washing',
    template: '%s | Clean Slate Pressure Washing',
  },
  description: 'Clean Slate Pressure Washing offers professional exterior cleaning services in New Orleans. We restore your property\'s beauty with our expert pressure washing solutions.',
  keywords: ['Pressure Washing', 'Exterior Cleaning', 'New Orleans'],
  authors: [{ name: 'Clean Slate Pressure Washing' }],
  creator: 'Clean Slate Pressure Washing',
  publisher: 'Clean Slate Pressure Washing',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Clean Slate Pressure Washing',
    description: 'Professional pressure washing services in New Orleans. Restore your property\'s beauty with our expert exterior cleaning solutions.',
    url: 'https://cleanslatepressurewashingnola.com',
    siteName: 'Clean Slate Pressure Washing',
    images: [
      {
        url: 'https://cleanslatepressurewashingnola.com/cleanslatelogo.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clean Slate Pressure Washing',
    description: 'Professional pressure washing services in New Orleans. Restore your property\'s beauty with our expert exterior cleaning solutions.',
    creator: '@cleanslatenola',
    images: ['https://cleanslatepressurewashingnola.com/cleanslatelogo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
    ],
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://cleanslatepressurewashingnola.com',
    languages: {
      'en-US': 'https://cleanslatepressurewashingnola.com',
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense fallback={<div>Loading...</div>}>
            {children}
          </Suspense>
          <Toaster />
        </ThemeProvider>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
