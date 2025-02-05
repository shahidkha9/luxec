import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://luxec-187i.vercel.app/", lastModified: new Date() },
    { url: "https://luxec-187i.vercel.app/shop", lastModified: new Date() },
    { url: "https://luxec-187i.vercel.app/about", lastModified: new Date() },
    { url: "https://luxec-187i.vercel.app/contact", lastModified: new Date() },
    { url: "https://luxec-187i.vercel.app/collections", lastModified: new Date() },
  ]
}
