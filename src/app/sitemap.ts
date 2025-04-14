import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.tpgmanagement.net';

  const routes = [
    '',
    '/services',
    '/pricing',
    '/about',
    '/contact',
    '/contact/sfh', // Added
    '/contact/mf',  // Added
    '/contact/co',  // Added
    '/referral',
    '/faq',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date('2025-04-10T05:58:55+00:00'), // Matches the XML lastmod
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}