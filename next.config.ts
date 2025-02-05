// next.config.ts
import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/public/sitemap.xml',
      },
    ]
  },
}

export default nextConfig
