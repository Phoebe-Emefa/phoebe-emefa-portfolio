import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Phoebe Emefa Agbesi - Frontend Developer",
  description:
    "Creative Frontend Engineer specializing in React, TypeScript, and modern web technologies. Building beautiful, functional user experiences.",
  keywords: "frontend developer, react developer, typescript, web developer, UI/UX, Ghana developer",
  authors: [{ name: "Phoebe Emefa Agbesi" }],
  creator: "Phoebe Emefa Agbesi",
  openGraph: {
    title: "Phoebe Emefa Agbesi - Frontend Developer",
    description: "Creative Frontend Engineer specializing in React, TypeScript, and modern web technologies.",
    url: "https://phoebeagbesi.dev",
    siteName: "Phoebe Agbesi Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phoebe Emefa Agbesi - Frontend Developer",
    description: "Creative Frontend Engineer specializing in React, TypeScript, and modern web technologies.",
    creator: "@phoebeagbesi",
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
  verification: {
    google: "your-google-verification-code",
  },
  icons: {
    icon: [
      { url: "/favicon_io/favicon.ico", sizes: "any" },
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/favicon_io/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      { url: "/favicon_io/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon_io/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  manifest: "/favicon_io/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
