import type React from "react"
import type { Metadata, Viewport } from "next"
import { Space_Grotesk, JetBrains_Mono, Manrope } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["700"],
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://velocity.tech"),
  title: {
    default: "VELOCITY | Tech Publication - AI, Hardware & Future Tech News",
    template: "%s | VELOCITY",
  },
  description:
    "High-speed tech news, AI insights, hardware reviews, and deals. Stay ahead with VELOCITY - your source for the latest in technology, artificial intelligence, and innovation.",
  keywords: [
    "tech news",
    "AI news",
    "artificial intelligence",
    "hardware reviews",
    "GPU reviews",
    "CPU reviews",
    "tech deals",
    "gadget reviews",
    "technology publication",
    "future tech",
  ],
  authors: [{ name: "VELOCITY Editorial Team", url: "https://velocity.tech/about" }],
  creator: "VELOCITY",
  publisher: "VELOCITY Media",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://velocity.tech",
    siteName: "VELOCITY",
    title: "VELOCITY | Tech Publication - AI, Hardware & Future Tech News",
    description: "High-speed tech news, AI insights, hardware reviews, and deals. Stay ahead with VELOCITY.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "VELOCITY - Tech Publication",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VELOCITY | Tech Publication",
    description: "High-speed tech news, AI insights, hardware reviews, and deals.",
    site: "@velocitytech",
    creator: "@velocitytech",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://velocity.tech",
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#00F0FF" }],
  },
  manifest: "/site.webmanifest",
  category: "technology",
  generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0A0A0A" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "VELOCITY",
              url: "https://velocity.tech",
              logo: "https://velocity.tech/logo.png",
              sameAs: [
                "https://twitter.com/velocitytech",
                "https://linkedin.com/company/velocitytech",
                "https://youtube.com/@velocitytech",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                email: "contact@velocity.tech",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "VELOCITY",
              url: "https://velocity.tech",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://velocity.tech/search?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased min-h-screen relative">
        {children}
      </body>
    </html>
  )
}
