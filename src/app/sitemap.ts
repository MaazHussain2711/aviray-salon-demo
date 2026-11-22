import type { MetadataRoute } from 'next';
import { siteURL } from '@/lib/site';
export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: siteURL + '/', changeFrequency: 'monthly', priority: 1 }, { url: siteURL + '/privacy/', changeFrequency: 'yearly', priority: 0.3 }];
}
