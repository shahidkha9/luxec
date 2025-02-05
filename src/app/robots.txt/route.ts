export async function GET() {
    return new Response(
      `User-agent: *
  Allow: /
  Sitemap: https://luxec-187i.vercel.app/sitemap.xml`,
      {
        headers: { "Content-Type": "text/plain" },
      }
    );
  }
  