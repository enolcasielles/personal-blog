'use client'

import { BlockTypeSelect, BoldItalicUnderlineToggles, CodeToggle, CreateLink, InsertAdmonition, InsertCodeBlock, InsertImage, ListsToggle, MDXEditor, MDXEditorMethods, Separator, UndoRedo, directivesPlugin, headingsPlugin, imagePlugin, linkDialogPlugin, listsPlugin, quotePlugin, thematicBreakPlugin, toolbarPlugin } from '@mdxeditor/editor'
import '@mdxeditor/editor/style.css'
import {FC} from 'react'

interface EditorProps {
  markdown: string
  editorRef?: React.MutableRefObject<MDXEditorMethods | null>
}

/**
 * Extend this Component further with the necessary plugins or props you need.
 * proxying the ref is necessary. Next.js dynamically imported components don't support refs. 
*/
const Editor: FC<EditorProps> = ({ markdown, editorRef }) => {
  return (
    <MDXEditor 
      ref={editorRef} 
      markdown={markdown} 
      plugins={[
        headingsPlugin(), 
        listsPlugin(), 
        quotePlugin(), 
        thematicBreakPlugin(),
        listsPlugin(),
        linkDialogPlugin(),
        imagePlugin(),
        directivesPlugin(),
        toolbarPlugin({
          toolbarContents: () => (
            <>
              {' '}
              <UndoRedo />
              <Separator />
              <BoldItalicUnderlineToggles />
              <CodeToggle />
              <Separator />
              <ListsToggle />
              <Separator />
              <BlockTypeSelect />
              <Separator />
              <CreateLink />
              <InsertImage />
              <Separator />
              <InsertCodeBlock />
              <InsertAdmonition />
            </>
          )
        })
      ]} 
    />
  )
}

export default Editor
