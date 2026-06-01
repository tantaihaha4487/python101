import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

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
  base: process.env.GITHUB_PAGES === 'true' ? '/python101/' : '/',
  lang: 'th-TH',
  title: 'Python101',
  description: 'A detailed beginner Python course in Thai and English.',
  cleanUrls: true,
  lastUpdated: true,
  mermaid: {
    theme: 'base',
    themeVariables: {
      primaryColor: '#e8f5e9',
      primaryTextColor: '#1b1b1f',
      primaryBorderColor: '#2f7d32',
      lineColor: '#2f7d32',
      secondaryColor: '#e3f2fd',
      tertiaryColor: '#fff8e1'
    }
  },
  themeConfig: {
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
