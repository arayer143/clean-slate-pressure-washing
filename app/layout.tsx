import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
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
        url: 'https://cleanslatepressurewashingnola.com/logo.png',
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
    images: ['https://cleanslatepressurewashingnola.com/logo.png'],
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
      { url: '/icon.png', sizes: '192x192' },
    ],
    apple: '/apple-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
  manifest: '/site.webmanifest',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: 'your-google-verification-code',
    // Add other verification codes if needed
  },
  alternates: {
    canonical: 'https://cleanslatepressurewashingnola.com',
    languages: {
      'en-US': 'https://cleanslatepressurewashingnola.com',
      // Add other language versions if applicable
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}