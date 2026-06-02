import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

const isProduction = process.env.NODE_ENV === 'production'
const base = isProduction ? '/python101/' : '/'
const siteUrl = 'https://docs.thanachot.xyz/python101/'
const siteDescription = 'Python101 is a beginner-friendly Python course for Thai learners, with Thai-first lessons, mirrored English explanations, examples, exercises, projects, and Mermaid diagrams.'

const lessons = [
  { text: 'Setup / ติดตั้ง', link: 'setup' },
  { text: 'Basics / พื้นฐาน', link: 'basics' },
  { text: 'Input & Output', link: 'input-output' },
  { text: 'Conditions / เงื่อนไข', link: 'conditions' },
  { text: 'Loops / ลูป', link: 'loops' },
  { text: 'Data Structures', link: 'data-structures' },
  { text: 'Functions / ฟังก์ชัน', link: 'functions' },
  { text: 'Files / ไฟล์', link: 'files' },
  { text: 'Errors / ข้อผิดพลาด', link: 'errors' },
  { text: 'Modules / โมดูล', link: 'modules' },
  { text: 'OOP / คลาส', link: 'oop' },
  { text: 'Projects / โปรเจกต์', link: 'projects' },
  { text: 'Roadmap / แผนเรียน', link: 'roadmap' }
]

function sidebar(prefix: 'th' | 'en') {
  return [
    {
      text: prefix === 'th' ? 'Python101 ภาษาไทย' : 'Python101 English',
      items: [
        { text: prefix === 'th' ? 'เริ่มต้นคอร์ส' : 'Start Here', link: `/${prefix}/` },
        ...lessons.map((lesson) => ({
          text: lesson.text,
          link: `/${prefix}/${lesson.link}`
        }))
      ]
    }
  ]
}

function pagePath(relativePath: string) {
  return relativePath
    .replace(/(^|\/)index\.md$/, '$1')
    .replace(/\.md$/, '')
}

function pageUrl(relativePath: string) {
  return new URL(pagePath(relativePath), siteUrl).href
}

function pageLang(relativePath: string) {
  return relativePath.startsWith('en/') ? 'en-US' : 'th-TH'
}

export default withMermaid(defineConfig({
  base,
  lang: 'th-TH',
  title: 'Python101',
  titleTemplate: ':title | Python101',
  description: siteDescription,
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: `${base}python-icon.svg` }],
    ['link', { rel: 'apple-touch-icon', href: `${base}python-icon.svg` }],
    ['meta', { name: 'theme-color', content: '#3776ab' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Python101' }],
    ['meta', { property: 'og:image', content: `${siteUrl}og-image.png` }],
    ['meta', { property: 'og:image:type', content: 'image/png' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: `${siteUrl}og-image.png` }]
  ],
  transformPageData(pageData) {
    const canonicalUrl = pageUrl(pageData.relativePath)
    const pageTitle = pageData.frontmatter.title || pageData.title || 'Python101'
    const pageDescription = pageData.frontmatter.description || siteDescription
    const lang = pageLang(pageData.relativePath)

    pageData.frontmatter.lang = lang
    pageData.frontmatter.head ??= []
    pageData.frontmatter.head.push(
      ['link', { rel: 'canonical', href: canonicalUrl }],
      ['meta', { property: 'og:url', content: canonicalUrl }],
      ['meta', { property: 'og:title', content: `${pageTitle} | Python101` }],
      ['meta', { property: 'og:description', content: pageDescription }],
      ['meta', { name: 'twitter:title', content: `${pageTitle} | Python101` }],
      ['meta', { name: 'twitter:description', content: pageDescription }]
    )
  },
  mermaid: {
    theme: 'base',
    flowchart: {
      curve: 'basis',
      padding: 12,
      nodeSpacing: 36,
      rankSpacing: 48,
      useMaxWidth: true
    },
    themeVariables: {
      primaryColor: '#e8f5e9',
      primaryTextColor: '#1b1b1f',
      primaryBorderColor: '#2f7d32',
      lineColor: '#2f7d32',
      secondaryColor: '#e3f2fd',
      tertiaryColor: '#fff8e1',
      fontFamily: 'Kanit, system-ui, sans-serif',
      fontSize: '18px'
    }
  },
  themeConfig: {
    logo: '/python-icon.svg',
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Projects', link: '/th/projects' },
      { component: 'LanguageSwitcher' }
    ],
    sidebar: {
      '/th/': sidebar('th'),
      '/en/': sidebar('en')
    },
    outline: {
      level: [2, 3],
      label: 'On this page'
    },
    docFooter: {
      prev: 'Previous',
      next: 'Next'
    },
    footer: {
      message: 'Python101: learn Python step by step.',
      copyright: 'Content by Thanachot P. Built with VitePress and Bun.'
    }
  }
}))
