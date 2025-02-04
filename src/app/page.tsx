"use client"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
<<<<<<< HEAD
=======
import { FacebookIcon, InstagramIcon, TwitterIcon } from "@/components/ui/icons"
import { CartIcon } from "@/components/CartIcon"
>>>>>>> ce834c932b44e753e901ec5a89ff03cd930cd418
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

  // Sample products
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

<<<<<<< HEAD
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const heroImages = [
    "/assets/luxury_perfume.jpeg",
    "/assets/ethereal_essence_perfume.jpeg",
    "/assets/midnight_mystery_perfume.jpeg",
  ]

=======
  // State for managing the current image index in the Hero section
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const heroImages = [
    "/assets/luxury_perfume.jpeg",
    "/assets/ethereal_essence_perfume.jpeg", // You can add more images here
    "/assets/midnight_mystery_perfume.jpeg",
  ]

  // Auto-change image every 5 seconds
>>>>>>> ce834c932b44e753e901ec5a89ff03cd930cd418
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 5000)

<<<<<<< HEAD
    return () => clearInterval(interval)
  }, [heroImages.length])

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-deep-purple text-white text-center">
=======
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
>>>>>>> ce834c932b44e753e901ec5a89ff03cd930cd418
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold">Discover Your Signature Scent</h1>
            <p className="text-lg md:text-xl my-4">Indulge in luxury fragrances that define your essence</p>
            <Button className="bg-gold hover:bg-gold/90 text-black" onClick={handleShopNow}>Shop Now</Button>
          </div>
          <div className="md:w-1/2">
<<<<<<< HEAD
            <Image src={heroImages[currentImageIndex]} alt="Luxury Perfume" width={400} height={400} className="rounded-lg w-full h-auto" />
=======
            <Image
              src={heroImages[currentImageIndex]}
              alt="Luxury Perfume"
              width={400}
              height={400}
              className="rounded-lg shadow-lg w-full h-auto transition-all duration-500 ease-in-out"
            />
>>>>>>> ce834c932b44e753e901ec5a89ff03cd930cd418
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Our Exquisite Collection</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="text-center">
                <Image src={product.image} alt={product.name} width={300} height={300} className="w-full h-auto" />
                <h3 className="text-xl font-semibold mt-2">{product.name}</h3>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
                <Button className="mt-2 bg-gold text-black" onClick={() => handleQuickView(product)}>Quick View</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 md:py-20 bg-light-gold text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold">Stay Inspired</h2>
          <p className="text-lg my-4">Subscribe for exclusive offers and fragrance insights</p>
          <form className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <Input type="email" placeholder="Enter your email" className="w-full md:w-80" />
            <Button className="bg-gold text-black w-full md:w-auto">Subscribe</Button>
          </form>
        </div>
      </section>

      {selectedProduct && <QuickViewModal product={selectedProduct} isOpen={!!selectedProduct} onClose={closeQuickView} />}
    </div>
  )
<<<<<<< HEAD
}
=======
  }
      
>>>>>>> ce834c932b44e753e901ec5a89ff03cd930cd418
