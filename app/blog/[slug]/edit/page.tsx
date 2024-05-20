import { getBlogPosts } from 'app/db/blog';
import dynamic from 'next/dynamic'
import { notFound, redirect } from 'next/navigation';
import { Suspense } from 'react'

const EditorComp = dynamic(() => import('./components/Editor'), { ssr: false })

export default function Home({ params }) {
  if (process.env.ENV !== "dev") redirect(`/blog/${params.slug}`)
  let post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }
  return (
    <>
    <div>
      <Suspense fallback={null}>
        <EditorComp slug={params.slug} markdown={post.content} />
      </Suspense>
    </div>
    </>
  )
}
