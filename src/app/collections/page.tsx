import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function CollectionsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Our Collections</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {["Summer Breeze", "Midnight Mystery", "Floral Fantasy", "Citrus Splash"].map((collection) => (
          <div key={collection} className="relative group">
            <Image
              src={`/placeholder.svg?height=400&width=600`}
              alt={collection}
              width={600}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-white mb-2">{collection}</h2>
                <Button className="bg-gold hover:bg-gold/90 text-black">Explore</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

