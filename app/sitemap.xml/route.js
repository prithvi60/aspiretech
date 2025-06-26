import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";

export async function GET() {
  // Static routes
  const links = [
    { url: "/", changefreq: "daily", priority: 1.0 },
    {
      url: "/",
      changefreq: "weekly",
      priority: 0.9,
    },
    { url: "/about", changefreq: "monthly", priority: 0.8 },
    { url: "/contact", changefreq: "monthly", priority: 0.9 },
    { url: "/impact", changefreq: "weekly", priority: 0.9 },
    { url: "/job-board", changefreq: "weekly", priority: 0.9 },
    { url: "/news", changefreq: "weekly", priority: 0.9 },
    {
      url: "/programs/data-science-architecture-program",
      changefreq: "weekly",
      priority: 0.9,
    },
    {
      url: "/programs/data-analytics-launchpad",
      changefreq: "weekly",
      priority: 0.9,
    },
    {
      url: "/programs/UI-UX-design-course",
      changefreq: "weekly",
      priority: 0.9,
    },
    {
      url: "/enterprise/training-solution",
      changefreq: "weekly",
      priority: 0.9,
    },
    {
      url: "/enterprise/talent-solution",
      changefreq: "weekly",
      priority: 0.9,
    },
    {
      url: "/contact",
      changefreq: "monthly",
      priority: 0.9,
    },
  ];

  try {
    const hostname = "https://www.aspiretechacademy.com";
    const stream = new SitemapStream({ hostname });

    const xml = await streamToPromise(Readable.from(links).pipe(stream)).then(
      (data) => data.toString()
    );

    return new Response(xml, {
      headers: {
        "Content-Type": "application/xml",
        "Content-Disposition": 'inline; filename="sitemap.xml"',
      },
    });
  } catch (e) {
    return new Response(
      `
      <?xml version="1.0" encoding="UTF-8"?>
      <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <sitemap>
          <loc>https://www.aspiretechacademy.com/sitemap-fallback.xml</loc>
        </sitemap>
      </sitemapindex>
    `,
      {
        status: 500,
        headers: { "Content-Type": "application/xml" },
      }
    );
  }
}
