'use client'

import { MDXEditor, MDXEditorMethods } from '@mdxeditor/editor'
import '@mdxeditor/editor/style.css'
import {FC, useState} from 'react'
import { ALL_PLUGINS } from './boilerplate'

interface EditorProps {
  slug: string
  markdown: string
  editorRef?: React.MutableRefObject<MDXEditorMethods | null>
}


const Editor: FC<EditorProps> = ({ slug, markdown, editorRef }) => {
  const [content, setContent] = useState(markdown)

  const saveContent = async () => {
    try {
      const response = await fetch('/api/saveContent', {
        method: 'POST',
        body: JSON.stringify({ slug, content }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const json = await response.json()
      if (json.success) {
        
      } else {
        alert('Error saving content')
      }
    } catch (e) {
      alert('Error saving content')
    }
  }

  return (
    <>
      <div className='mb-4 flex justify-end'>
        <button onClick={saveContent} className='bg-blue-500 hover:bg-blue-400 px-4 py-2 rounded-full font-bold'>Guardar</button>
      </div>
      <MDXEditor
        ref={editorRef}
        className='bg-white'
        contentEditableClassName='prose'
        markdown={markdown}
        plugins={ALL_PLUGINS}
        onChange={(value) => setContent(value)}
      />
    </>
    
  )
}

export default Editor
