<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vitepress'

const props = defineProps<{
  screenMenu?: boolean
}>()

const route = useRoute()
const router = useRouter()

const currentLang = computed(() => {
  if (route.path.startsWith('/en/')) return 'en'
  if (route.path.startsWith('/th/')) return 'th'
  return 'th'
})

function targetPath(lang: 'th' | 'en') {
  if (route.path === '/') {
    return lang === 'th' ? '/th/' : '/en/'
  }

  if (route.path.startsWith('/th/')) {
    return lang === 'th' ? route.path : route.path.replace(/^\/th\//, '/en/')
  }

  if (route.path.startsWith('/en/')) {
    return lang === 'en' ? route.path : route.path.replace(/^\/en\//, '/th/')
  }

  return lang === 'th' ? '/th/' : '/en/'
}

function navigate(to: string) {
  if (to !== route.path) {
    router.go(to)
  }
}
</script>

<template>
  <div class="language-switcher" :class="{ 'is-screen-menu': props.screenMenu }" aria-label="Language switcher">
    <a
      :href="targetPath('th')"
      class="language-switcher__link"
      :class="{ 'is-active': currentLang === 'th' }"
      :aria-current="currentLang === 'th' ? 'page' : undefined"
      aria-label="ภาษาไทย"
      title="ภาษาไทย"
      @click.prevent="navigate(targetPath('th'))"
    >
      TH
    </a>
    <a
      :href="targetPath('en')"
      class="language-switcher__link"
      :class="{ 'is-active': currentLang === 'en' }"
      :aria-current="currentLang === 'en' ? 'page' : undefined"
      aria-label="English"
      title="English"
      @click.prevent="navigate(targetPath('en'))"
    >
      EN
    </a>
  </div>
</template>
