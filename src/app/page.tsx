"use client"
import Image from "next/image"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { FacebookIcon, InstagramIcon, TwitterIcon } from "@/components/ui/icons"
import { CartIcon } from "@/components/CartIcon"
import { useState, useEffect } from "react"
import { QuickViewModal } from "@/components/QuickViewModal"
import { useRouter } from "next/navigation"
import type { Product } from "@/types"

export default function Home() {
  const router = useRouter()
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const handleShopNow = () => {
    router.push("/shop")
  }

  const handleQuickView = (product: Product) => {
    setSelectedProduct(product)
  }

  const closeQuickView = () => {
    setSelectedProduct(null)
  }

  // Sample products for the homepage
  const featuredProducts: Product[] = [
    {
      id: "1",
      name: "Ethereal Essence",
      description: "A captivating blend of floral and woody notes",
      price: 199.99,
      image: "/assets/ethereal_essence_perfume.jpeg",
      category: "Floral",
    },
    {
      id: "2",
      name: "Midnight Mystery",
      description: "An intoxicating mix of spices and dark woods",
      price: 249.99,
      image: "/assets/midnight_mystery_perfume.jpeg",
      category: "Oriental",
    },
    {
      id: "3",
      name: "Ocean Breeze",
      description: "A fresh and invigorating aquatic scent",
      price: 179.99,
      image: "/assets/ocean_breeze_perfume.jpeg",
      category: "Fresh",
    },
  ]

  // State for managing the current image index in the Hero section
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const heroImages = [
    "/assets/luxury_perfume.jpeg",
    "/assets/ethereal_essence_perfume.jpeg", // You can add more images here
    "/assets/midnight_mystery_perfume.jpeg",
  ]

  // Auto-change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(interval) // Cleanup interval on component unmount
  }, [])

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            LUXE SCENT
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/shop" className="hover:text-gold transition-colors">
              Shop
            </Link>
            <Link href="/collections" className="hover:text-gold transition-colors">
              Collections
            </Link>
            <Link href="/about" className="hover:text-gold transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-gold transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Input type="search" placeholder="Search..." className="w-40 md:w-auto border-gold focus:ring-gold" />
            <CartIcon />
          </div>
        </div>
      </header>

      {/* Hero Section with Auto-changing Images */}
      <section className="py-12 md:py-20 bg-deep-purple text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4">Discover Your Signature Scent</h1>
            <p className="text-lg md:text-xl mb-6">Indulge in luxury fragrances that define your essence</p>
            <Button className="bg-gold hover:bg-gold/90 text-black" onClick={handleShopNow}>
              Shop Now
            </Button>
          </div>
          <div className="md:w-1/2">
            <Image
              src={heroImages[currentImageIndex]}
              alt="Luxury Perfume"
              width={400}
              height={400}
              className="rounded-lg shadow-lg w-full h-auto transition-all duration-500 ease-in-out"
            />
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-10 text-center">Our Exquisite Collection</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group">
                <div className="relative overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button className="bg-gold hover:bg-gold/90 text-black" onClick={() => handleQuickView(product)}>
                      Quick View
                    </Button>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-12 md:py-20 bg-light-gold">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Inspired</h2>
          <p className="text-lg md:text-xl mb-6">
            Subscribe to our newsletter for exclusive offers and fragrance insights
          </p>
          <form className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
            <Input type="email" placeholder="Enter your email" className="w-full md:w-80 border-gold focus:ring-gold" />
            <Button className="bg-gold hover:bg-gold/90 text-black w-full md:w-auto">Subscribe</Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-deep-purple text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">LUXE SCENT</h3>
              <p>Elevating your olfactory experience since 2023</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/shop" className="hover:text-gold transition-colors">
                    Shop All
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-gold transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-gold transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/collections" className="hover:text-gold transition-colors">
                    Collections
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Customer Care</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/shipping" className="hover:text-gold transition-colors">
                    Shipping
                  </Link>
                </li>
                <li>
                  <Link href="/returns" className="hover:text-gold transition-colors">
                    Returns
                  </Link>
                </li>
                <li>
                  <Link href="/gift-cards" className="hover:text-gold transition-colors">
                    Gift Cards
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-gold transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-gold transition-colors">
                  <FacebookIcon className="h-6 w-6" />
                </Link>
                <Link href="#" className="hover:text-gold transition-colors">
                  <InstagramIcon className="h-6 w-6" />
                </Link>
                <Link href="#" className="hover:text-gold transition-colors">
                  <TwitterIcon className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-10 text-center">
            <p>&copy; 2023 LUXE SCENT. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {selectedProduct && (
        <QuickViewModal product={selectedProduct} isOpen={!!selectedProduct} onClose={closeQuickView} />
      )}
    </div>
  )
  }
      
