export async function GET() {
    const BASE_URL = process.env.BASE_URL || "https://luxec-187i.vercel.app";
  
    const urls = ["/", "/shop", "/about", "/collections", "/contact"];
  
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${urls.map((url) => `<url><loc>${BASE_URL}${url}</loc></url>`).join("")}
      </urlset>`;
  
    return new Response(sitemap, { headers: { "Content-Type": "application/xml" } });
  }
  