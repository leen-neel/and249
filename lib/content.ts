import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const CONTENT_DIR = path.join(process.cwd(), 'content')

export interface CaseStudyFrontmatter {
  title: string
  timeline: string
  metric: string
  date: string
  summary: string
  tech?: string[]
  highlights?: string[]
}

export interface BlogPostFrontmatter {
  title: string
  date: string
  description?: string
  tags?: string[]
}

export function getCaseStudies() {
  const caseStudiesDir = path.join(CONTENT_DIR, 'case-studies')
  if (!fs.existsSync(caseStudiesDir)) return []
  
  const files = fs.readdirSync(caseStudiesDir)
  const caseStudies = files
    .filter(filename => filename.endsWith('.md'))
    .map(filename => {
      const slug = filename.replace(/\.md$/, '')
      const markdownWithMeta = fs.readFileSync(path.join(caseStudiesDir, filename), 'utf-8')
      const { data } = matter(markdownWithMeta)
      return {
        slug,
        frontmatter: data as CaseStudyFrontmatter,
      }
    })

  return caseStudies.sort((a, b) => (new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()))
}

export function getCaseStudy(slug: string) {
  const markdownWithMeta = fs.readFileSync(path.join(CONTENT_DIR, 'case-studies', `${slug}.md`), 'utf-8')
  const { data, content } = matter(markdownWithMeta)
  return {
    frontmatter: data as CaseStudyFrontmatter,
    content,
    slug,
  }
}

export function getBlogPosts() {
  const blogDir = path.join(CONTENT_DIR, 'blog')
  if (!fs.existsSync(blogDir)) return []
  
  const files = fs.readdirSync(blogDir)
  const posts = files
    .filter(filename => filename.endsWith('.md'))
    .map(filename => {
      const slug = filename.replace(/\.md$/, '')
      const markdownWithMeta = fs.readFileSync(path.join(blogDir, filename), 'utf-8')
      const { data } = matter(markdownWithMeta)
      return {
        slug,
        frontmatter: data as BlogPostFrontmatter,
      }
    })

  return posts.sort((a, b) => (new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()))
}

export function getBlogPost(slug: string) {
  const markdownWithMeta = fs.readFileSync(path.join(CONTENT_DIR, 'blog', `${slug}.md`), 'utf-8')
  const { data, content } = matter(markdownWithMeta)
  return {
    frontmatter: data as BlogPostFrontmatter,
    content,
    slug,
  }
}

export interface SpeakingFrontmatter {
  title: string
  conference: string
  year: string
  date?: string
  tag: string
  summary: string
  videoUrl?: string
  slidesUrl?: string
}

export function getSpeakingAppearances() {
  const speakingDir = path.join(CONTENT_DIR, 'speaking')
  if (!fs.existsSync(speakingDir)) return []

  const files = fs.readdirSync(speakingDir)
  const appearances = files
    .filter((filename) => filename.endsWith('.md'))
    .map((filename) => {
      const slug = filename.replace(/\.md$/, '')
      const markdownWithMeta = fs.readFileSync(path.join(speakingDir, filename), 'utf-8')
      const { data } = matter(markdownWithMeta)
      return {
        slug,
        frontmatter: data as SpeakingFrontmatter,
      }
    })

  return appearances.sort((a, b) => {
    const aTime = a.frontmatter.date
      ? new Date(a.frontmatter.date).getTime()
      : Number(a.frontmatter.year)
    const bTime = b.frontmatter.date
      ? new Date(b.frontmatter.date).getTime()
      : Number(b.frontmatter.year)
    return bTime - aTime
  })
}

export function getSpeakingAppearance(slug: string) {
  const markdownWithMeta = fs.readFileSync(
    path.join(CONTENT_DIR, 'speaking', `${slug}.md`),
    'utf-8'
  )
  const { data, content } = matter(markdownWithMeta)
  return {
    frontmatter: data as SpeakingFrontmatter,
    content,
    slug,
  }
}
