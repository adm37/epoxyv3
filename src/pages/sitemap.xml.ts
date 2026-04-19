import type { APIRoute } from 'astro';
import { getAllPublicPaths, toAbsoluteUrl } from '../data/site';

export const GET: APIRoute = () => {
  const urls = getAllPublicPaths();
  const now = new Date().toISOString();

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (path) => `  <url>
    <loc>${toAbsoluteUrl(path)}</loc>
    <lastmod>${now}</lastmod>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};