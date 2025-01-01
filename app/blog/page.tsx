import Link from 'next/link';
import { getBlogPosts } from 'app/db/blog';
import PageTitle from 'app/components/page-title';

export const metadata = {
  title: 'Blog',
  description: 'Colección de artículos sobre desarrollo web, IA y tecnología en general.',
};

export default function BlogPage() {
  let allBlogs = getBlogPosts();

  return (
    <section className="max-w-4xl mx-auto">
      <PageTitle title="Blog" />
      
      <p className='mb-12 text-lg prose prose-neutral dark:prose-invert'>
        Un blog sobre Desarrollo Web, Inteligencia Artifical y Tecnología en general
      </p>

      <div className="space-y-8">
        {allBlogs
          .sort((a, b) => {
            if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block group"
            >
              <article className="p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h2 className="text-2xl font-semibold mb-2 group-hover:text-blue-500 transition-colors">
                  {post.metadata.title}
                </h2>
                <time className="text-sm text-neutral-600 dark:text-neutral-400">
                  {new Date(post.metadata.publishedAt).toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </article>
            </Link>
          ))}
      </div>
    </section>
  );
}
