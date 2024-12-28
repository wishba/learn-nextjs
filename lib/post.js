import matter from 'gray-matter'
import { marked } from 'marked'
import { readFile } from 'node:fs/promises'
import path from 'path'

export async function getPost(slug) {
  const filePath = path.join(process.cwd(), `content/blog/${slug}.md`)
  const text = await readFile(filePath, 'utf-8')
  const {
    content,
    data: { title, image, date, author },
  } = matter(text)
  const body = marked(content)

  return { title, image, date, author, body }
}

