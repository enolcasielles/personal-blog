import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    if (process.env.ENV !== 'dev') throw new Error('Not allowed');
    const { slug, content } = await request.json();
    // Save the content to the database
    const contentPath = path.join(process.cwd(), 'content', `${slug}.mdx`);
    const fileContent = fs.readFileSync(contentPath, 'utf-8');
    let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
    let match = frontmatterRegex.exec(fileContent);
    let frontMatterBlock = match![1];
    fs.writeFileSync(contentPath, `---\n${frontMatterBlock}\n---\n\n${content}`, 'utf-8')
    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ success: false }, {status: 500});
  }
}