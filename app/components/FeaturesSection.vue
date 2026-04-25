<script setup>
defineProps({
  features: { type: Array, required: true }
})
</script>

<template>
  <section id="caracteristicas" class="section">
    <div class="section__inner text-center">
      <span class="section__label">Características</span>
      <h2 class="section__title scroll-reveal">Todo lo que necesitas en un solo sistema</h2>
      <p class="section__subtitle scroll-reveal">GESTAD combina hardware RFID con software web para automatizar cada paso del control de asistencia docente.</p>
      <div class="features__grid scroll-reveal-stagger">
        <div v-for="(f, i) in features" :key="i" class="feature-card scroll-reveal">
          <span class="feature-card__icon">{{ f.icon }}</span>
          <h3 class="feature-card__title">{{ f.title }}</h3>
          <p class="feature-card__desc">{{ f.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features__grid{display:grid;grid-template-columns:repeat(2,1fr);gap:var(--space-md);margin-top:var(--space-lg);text-align:left}
.feature-card{background:var(--color-white);border:1px solid var(--color-gray-border);border-radius:var(--radius-md);padding:var(--space-md) var(--space-md) var(--space-lg);transition:all var(--transition-base);box-shadow:var(--shadow-sm)}
.feature-card:hover{transform:translateY(-6px);box-shadow:var(--shadow-md);border-color:var(--color-primary-light)}
.feature-card__icon{display:inline-flex;align-items:center;justify-content:center;width:52px;height:52px;border-radius:var(--radius-sm);background:var(--color-primary-lighter);font-size:1.5rem;margin-bottom:var(--space-sm)}
.feature-card__title{font-size:1.1rem;font-weight:700;margin-bottom:.4rem;color:var(--color-text)}
.feature-card__desc{font-size:.92rem;color:var(--color-text-muted);line-height:1.7}
@media(max-width:640px){.features__grid{grid-template-columns:1fr}}
</style>
