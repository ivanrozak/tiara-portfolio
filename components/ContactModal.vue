<script setup lang="ts">
const { isContactOpen, closeContact } = useContactModal()
const closeButton = ref<HTMLButtonElement | null>(null)

watch(isContactOpen, (isOpen) => {
  if (import.meta.client) document.body.style.overflow = isOpen ? 'hidden' : ''
  if (isOpen) nextTick(() => closeButton.value?.focus())
})

onUnmounted(() => { if (import.meta.client) document.body.style.overflow = '' })
</script>

<template>
  <Teleport to="body">
    <div v-if="isContactOpen" class="contact-modal-layer" @keydown.esc="closeContact">
      <button class="contact-backdrop" type="button" aria-label="Close contact modal" @click="closeContact" />
      <section class="contact-modal" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title">
        <button ref="closeButton" class="modal-close" type="button" aria-label="Close contact modal" @click="closeContact">×</button>
        <p class="eyebrow">Get in touch</p>
        <h2 id="contact-modal-title">Let’s talk about<br>your next project.</h2>
        <p class="modal-intro">Have a research challenge in mind? Reach out and let’s start a conversation.</p>
        <div class="contact-methods"><a class="contact-method" href="mailto:tbisfir@gmail.com"><span class="method-label">Email</span><strong>tbisfir@gmail.com</strong><span class="method-arrow">↗</span></a><a class="contact-method" href="https://wa.me/6281379163839" target="_blank" rel="noreferrer"><span class="method-label">WhatsApp</span><strong>+62 813 7916 3839</strong><span class="method-arrow">↗</span></a></div>
      </section>
    </div>
  </Teleport>
</template>
