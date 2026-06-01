import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

const isProduction = process.env.NODE_ENV === 'production'
const base = isProduction ? '/python101/' : '/'
const siteUrl = 'https://docs.thanachot.xyz/python101/'
const siteDescription = 'Python101 is a detailed beginner Python course in Thai and English with examples, exercises, projects, and Mermaid diagrams.'

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
    ['link', { rel: 'canonical', href: siteUrl }],
    ['meta', { name: 'theme-color', content: '#3776ab' }],
    ['meta', { name: 'keywords', content: 'Python101, Python beginner course, learn Python Thai, Python ภาษาไทย, VitePress Python course' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Python101' }],
    ['meta', { property: 'og:title', content: 'Python101 - Learn Python from zero' }],
    ['meta', { property: 'og:description', content: siteDescription }],
    ['meta', { property: 'og:url', content: siteUrl }],
    ['meta', { property: 'og:image', content: `${siteUrl}og-image.svg` }],
    ['meta', { property: 'og:image:type', content: 'image/svg+xml' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Python101 - Learn Python from zero' }],
    ['meta', { name: 'twitter:description', content: siteDescription }],
    ['meta', { name: 'twitter:image', content: `${siteUrl}og-image.svg` }]
  ],
  mermaid: {
    theme: 'base',
    flowchart: {
      curve: 'basis',
      padding: 18,
      nodeSpacing: 58,
      rankSpacing: 72
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
      { text: 'ไทย', link: '/th/' },
      { text: 'English', link: '/en/' },
      { text: 'Projects', link: '/th/projects' }
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
      copyright: 'Built with VitePress and Bun.'
    }
  }
}))
