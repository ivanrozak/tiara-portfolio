<script setup lang="ts">
const capabilities = [{ title: 'Methodologies', items: ['Generative User Research', 'Evaluative Usability Testing', 'Service Blueprinting', 'User Journey Mapping'] }, { title: 'Tools', items: ['Figma & FigJam', 'UserTesting.com / Lookback', 'Maze', 'Gform & Typeform'] }, { title: 'Strategy', items: ['Stakeholder Management', 'Workshop/FGD Facilitation', 'Research Ops Leadership', 'Concept/Idea Test'] }]
</script>

<template>
  <div class="site-shell font-sans about-page"><SiteHeader /><main>
    <section class="about-intro site-frame reveal"><div class="about-copy"><h1>Background</h1><div class="about-body"><p>I research the gap between what organizations assume and what people actually experience. My work spans complex systems : public services, digital products, high-stakes service environments.</p><p class="muted-copy">And what stays consistent is my approach: <em>get close to the human reality</em>, understand the operational constraints, then synthesize both into something strategically useful.</p><p class="muted-copy">That's what I bring into every project.</p></div></div><div class="portrait-placeholder"><img src="/images/about-portrait.png" alt="Tiara Bisrina" width="716" height="716"></div></section>
    <section class="about-note site-frame"><p>After several years leading CX and UX research projects across healthcare and digital products in Indonesia, I stepped back in end of 2025 to focus on becoming a mother, the most human-centered work I've ever done. That time didn't slow my thinking, it clarified it.</p><p>I'm returning now, excited, energized and focused.</p></section>
    <section class="capabilities site-frame"><p class="eyebrow">Expertise &amp; capabilities</p><div class="capability-grid"><div v-for="group in capabilities" :key="group.title" class="capability-group"><h2>{{ group.title }}</h2><ul><li v-for="item in group.items" :key="item">{{ item }}</li></ul></div></div></section>
    <section class="about-cta site-frame"><h2>Ready to discuss your next research challenge?</h2><div class="button-row"><a class="button button--solid" href="#">Download Curriculum Vitae <span>↓</span></a><a class="button button--outline" href="#">View Digital Resume <span>↗</span></a></div></section>
  </main><SiteFooter /></div>
</template>
