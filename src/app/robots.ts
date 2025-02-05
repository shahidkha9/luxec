export async function GET() {
    const BASE_URL = process.env.BASE_URL || "https://luxec-187i.vercel.app";
  
    const robots = `
      User-agent: *
      Allow: /
      Sitemap: ${BASE_URL}/sitemap.xml
    `;
  
    return new Response(robots, { headers: { "Content-Type": "text/plain" } });
  }
  