import { getBlogPosts } from 'app/db/blog';
import { locales } from 'i18n/routing';

export default async function sitemap() {
  const blogs: {url: string, lastModified: string}[] = [];
  for (const locale of locales) {
    blogs.push(...getBlogPosts({locale: locale}).map((post) => ({
      url: `https://www.enolcasielles.com/blog/${post.slug}`,
      lastModified: post.metadata.publishedAt,
    })));
  }

  let routes = ['', '/blog', '/projects'].map((route) => ({
    url: `https://www.enolcasielles.com${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...blogs];
}
