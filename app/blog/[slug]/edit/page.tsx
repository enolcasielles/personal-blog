import { getBlogPosts } from 'app/db/blog';
import dynamic from 'next/dynamic'
import { notFound } from 'next/navigation';
import { Suspense } from 'react'

const EditorComp = dynamic(() => import('./components/Editor'), { ssr: false })

export default function Home({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }
  return (
    <>
    <p>This is a bare-bones unstyled MDX editor without any plugins and no toolbar. Check the EditorComponent.tsx file for the code.</p>
      <p>To enable more features, add the respective plugins to your instance - see <a className="text-blue-600" href="https://mdxeditor.dev/editor/docs/getting-started">the docs</a> for more details.</p>
      <br />
    <div style={{border: '1px solid black'}}>
      <Suspense fallback={null}>
        <EditorComp markdown={post.content} />
      </Suspense>
    </div>
    </>
  )
}
