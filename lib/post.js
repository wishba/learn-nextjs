import matter from 'gray-matter'
import { marked } from 'marked'
import { readdir, readFile } from 'node:fs/promises'
import path from 'path'

export async function getPost(slug) {
  const filePath = path.join(process.cwd(), `content/blog/${slug}.md`)
  const text = await readFile(filePath, 'utf-8')
  const {
    content,
    data: { title, image, date, author },
  } = matter(text)
  const body = marked(content)

  return { slug, title, image, date, author, body }
}

export async function getAllPost() {
  const files = await readdir('content/blog')
  const slugs = files
    .filter(file => file.endsWith('.md'))
    .map(file => file.slice(0, -".md".length))

  const posts = []

  for (const slug of slugs) {
    const post = await getPost(slug)
    posts.push(post)
  }

  return posts
}