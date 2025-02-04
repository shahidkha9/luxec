import "./globals.css"
import { Inter, Playfair_Display } from "next/font/google"
import { CartProvider } from "@/context/CartContext"
import type React from "react"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata = {
  title: "LUXE SCENT - Luxury Perfumes",
  description: "Discover your signature scent with our exquisite collection of luxury perfumes.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}


