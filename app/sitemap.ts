import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cleanslatepressurewashingnola.com'

  const routes = [
    '',
    '/about',
    '/services',
    '/contact',
    '/blog',
    '/gallery',
    '/services/soft-and-pressure-washing',
    '/services/commercial-properties',
    '/services/concrete-washing',
    '/services/fence-cleaning',
    '/services/gutter-cleaning',
    '/services/roof-washing',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1,
  }))
}

