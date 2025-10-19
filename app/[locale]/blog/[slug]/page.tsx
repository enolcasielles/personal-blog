import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CustomMDX } from 'app/components/mdx';
import { getBlogPosts } from 'app/db/blog';
import { locales } from 'i18n/routing';

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  const {locale, slug} = await params;
  let post = getBlogPosts({locale: locale}).find((post) => post.slug === slug);
  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
  } = post.metadata;
  let ogImage = `https://www.enolcasielles.com/blog/${params.slug}/og-image.png`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `https://www.enolcasielles.com/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export async function generateStaticParams() {
  const result: {slug: string, locale: string}[] = [];
  for (const locale of locales) {
    let posts = getBlogPosts({locale: locale});
    result.push(...posts.map((post) => ({
      slug: post.slug,
      locale: locale,
    })));
  }
  return result;
}


function formatDate(date: string) {
  if (!date.includes('T')) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date);

  let fullDate = targetDate.toLocaleString('es-es', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return `${fullDate}`;
}

export default async function Blog({ params }) {
  const _params = await params;
  console.log(_params);
  let post = getBlogPosts({locale: _params.locale}).find((post) => post.slug === _params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: `https://www.enolcasielles.com${post.metadata.image}`,
            url: `https://www.enolcasielles.com/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'Enol Casielles',
            },
          }),
        }}
      />
      <h1 className="title font-medium text-4xl tracking-tighter">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-lg text-neutral-600 dark:text-neutral-400">
          {formatDate(post.metadata.publishedAt)}
        </p>
      </div>
      <div className="h-[1px] bg-gray-500 mb-8"></div>
      <article className="prose prose-quoteless prose-neutral dark:prose-invert max-w-[1200px]">
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}
