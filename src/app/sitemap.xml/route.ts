export async function GET() {
    const baseUrl = "https://luxec-187i.vercel.app"; // Apni website ka domain likhein
  
    // Yahan apni website ke important pages ka array banayein
    const urls = [
      "",
      "/shop",
      "/about",
      "/contact",
      "/collections",
    ];
  
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${urls
          .map((url) => `<url><loc>${baseUrl}${url}</loc></url>`)
          .join("")}
      </urlset>`;
  
    return new Response(sitemap, {
      headers: { "Content-Type": "application/xml" },
    });
  }
  