import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import LanguageSwitcher from './components/LanguageSwitcher.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('LanguageSwitcher', LanguageSwitcher)
  }
} satisfies Theme
