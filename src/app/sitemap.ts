import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.tpgmanagement.net';
  
  const routes = [
    '',
    '/services',
    '/pricing',
    '/about',
    '/contact',
    '/referral',
    '/faq',
    '/vendor',
    '/pm',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
} 