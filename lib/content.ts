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

function parsePostDate(date: string): Date {
  const [year, month, day] = date.split('-').map(Number)
  return new Date(Date.UTC(year, month - 1, day))
}

function startOfTodayUtc(): Date {
  const now = new Date()
  return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()))
}

export function isBlogPostPublished(date: string): boolean {
  return parsePostDate(date).getTime() <= startOfTodayUtc().getTime()
}

function includeScheduledBlogPosts(): boolean {
  return process.env.NODE_ENV !== 'production'
}

function isBlogPostVisible(date: string): boolean {
  return includeScheduledBlogPosts() || isBlogPostPublished(date)
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

  return posts
    .filter((post) => isBlogPostVisible(post.frontmatter.date))
    .sort((a, b) => (new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()))
}

export function getBlogPost(slug: string) {
  const markdownWithMeta = fs.readFileSync(path.join(CONTENT_DIR, 'blog', `${slug}.md`), 'utf-8')
  const { data, content } = matter(markdownWithMeta)
  const frontmatter = data as BlogPostFrontmatter

  if (!isBlogPostVisible(frontmatter.date)) {
    throw new Error(`Blog post "${slug}" is not published yet`)
  }

  return {
    frontmatter,
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

export interface NoteFrontmatter {
  date: string
}

export function getNotes() {
  const notesDir = path.join(CONTENT_DIR, 'notes')
  if (!fs.existsSync(notesDir)) return []

  const files = fs.readdirSync(notesDir)
  const notes = files
    .filter((filename) => filename.endsWith('.md'))
    .map((filename) => {
      const slug = filename.replace(/\.md$/, '')
      const markdownWithMeta = fs.readFileSync(path.join(notesDir, filename), 'utf-8')
      const { data, content } = matter(markdownWithMeta)
      return {
        slug,
        frontmatter: data as NoteFrontmatter,
        body: content.trim(),
      }
    })

  return notes.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
  )
}
