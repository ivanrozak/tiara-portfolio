<script setup lang="ts">
const route = useRoute()
const isMenuOpen = ref(false)
const { openContact } = useContactModal()
const navItems = [{ label: 'Work', href: '/work', key: 'work' }, { label: 'About', href: '/about', key: 'about' }]
const activeSection = computed(() => route.path === '/about' ? 'about' : route.path.startsWith('/work') ? 'work' : route.hash.replace('#', '') || 'work')
const closeMenu = () => { isMenuOpen.value = false }
</script>

<template>
  <header class="site-header">
    <NuxtLink class="wordmark" to="/" aria-label="Tiara Bisrina home" @click="closeMenu">TIARA BISRINA</NuxtLink>
    <button class="menu-toggle" type="button" :aria-expanded="isMenuOpen" aria-label="Toggle navigation" @click="isMenuOpen = !isMenuOpen"><span /><span /></button>
    <nav class="main-nav" :class="{ 'main-nav--open': isMenuOpen }" aria-label="Primary navigation">
      <NuxtLink v-for="item in navItems" :key="item.key" :to="item.href" :class="{ active: activeSection === item.key }" @click="closeMenu">{{ item.label }}</NuxtLink>
      <button class="nav-contact" type="button" @click="openContact(); closeMenu()">Contact</button>
    </nav>
  </header>
</template>
