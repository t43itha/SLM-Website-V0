import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import NavigationWrapper from "@/components/navigation-wrapper"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Royalhouse Chapel SLM - Welcome Home",
  description:
    "Touching Our Generation With The Power Of God. Join us for worship, fellowship, and spiritual growth in South London.",
  keywords: "church, worship, South London, Dulwich, Pentecostal, Royalhouse Chapel, SLM",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavigationWrapper />
        <div className="pt-16">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
