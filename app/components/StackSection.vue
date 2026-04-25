<script setup>
defineProps({ stack: { type: Array, required: true } })
</script>

<template>
  <section id="stack" class="section">
    <div class="section__inner text-center">
      <span class="section__label">Tecnología</span>
      <h2 class="section__title scroll-reveal">Stack tecnológico</h2>
      <p class="section__subtitle scroll-reveal">Construido con tecnologías probadas, sin dependencias innecesarias.</p>
      <div class="stack__grid scroll-reveal-stagger">
        <div v-for="(s, i) in stack" :key="i" class="stack-badge scroll-reveal">
          <span class="stack-badge__icon">{{ s.icon }}</span>
          <div>
            <span class="stack-badge__label">{{ s.label }}</span>
            <span class="stack-badge__value">{{ s.value }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stack__grid{display:flex;flex-wrap:wrap;justify-content:center;gap:var(--space-sm);margin-top:var(--space-lg)}
.stack-badge{display:flex;align-items:center;gap:.7rem;background:var(--color-gray-soft);border:1px solid var(--color-gray-border);border-radius:var(--radius-sm);padding:.7rem 1.2rem;transition:all var(--transition-base)}
.stack-badge:hover{transform:translateY(-3px);box-shadow:var(--shadow-sm);border-color:var(--color-primary-light);background:var(--color-white)}
.stack-badge__icon{font-size:1.3rem}
.stack-badge__label{display:block;font-size:.68rem;font-weight:600;text-transform:uppercase;letter-spacing:.06em;color:var(--color-text-muted)}
.stack-badge__value{display:block;font-size:.92rem;font-weight:600;color:var(--color-text);font-family:var(--font-heading)}
</style>
