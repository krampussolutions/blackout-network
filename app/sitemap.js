import { categories, getAllArticleSlugsByType } from '@/lib/site-data';

export default function sitemap() {
  const base = 'https://example.com';
  const staticRoutes = ['', '/best-gear', '/comparisons', '/guides', '/about', '/contact'];
  const categoryRoutes = categories.map((c) => `/categories/${c.slug}`);
  const bestGearRoutes = getAllArticleSlugsByType('best-gear').map((slug) => `/best-gear/${slug}`);
  const comparisonRoutes = getAllArticleSlugsByType('comparisons').map((slug) => `/comparisons/${slug}`);
  const guideRoutes = getAllArticleSlugsByType('guides').map((slug) => `/guides/${slug}`);

  return [...staticRoutes, ...categoryRoutes, ...bestGearRoutes, ...comparisonRoutes, ...guideRoutes].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8
  }));
}
