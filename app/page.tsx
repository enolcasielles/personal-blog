import Link from 'next/link';
import { getBlogPosts } from 'app/db/blog';

export const metadata = {
  title: 'Enol Casielles Blog',
  description: 'Creo artículos de cosas que aprendo en mi día a día como desarrollador web.',
};

export default function BlogPage() {
  let allBlogs = getBlogPosts();

  return (
    <section>
      <h1 className="font-medium text-4xl mb-4 tracking-tighter">
        Blog
      </h1>
      <p className='mb-8 text-lg prose prose-neutral dark:prose-invert'>Un blog sobre Desarrollo Web, Inteligencia Artifical y Tecnología en general</p>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post, i) => (
          <>
              <hr className='bg-neutral-500 h-[1px] border-0 mb-4 mt-4'/>
              <div className="w-full flex flex-col">
                <Link
                  key={post.slug}
                  className="flex flex-col space-y-4 mb-4"
                  href={`/blog/${post.slug}`}
                >
                    <span className="text-xl text-neutral-900 dark:text-neutral-100 tracking-tight hover:text-blue-400 dark:hover:text-blue-400">
                      {post.metadata.title}
                    </span>
                </Link>
                <span className='text-base text-neutral-500 dark:text-neutral-500 tracking-tight'>
                  {post.metadata.publishedAt}
                </span>
              </div>
          </>
        ))}
    </section>
  );
}
