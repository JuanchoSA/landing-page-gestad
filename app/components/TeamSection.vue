<script setup>
defineProps({ team: { type: Array, required: true } })
</script>

<template>
  <section id="equipo" class="section section--alt">
    <div class="section__inner text-center">
      <span class="section__label">Equipo</span>
      <h2 class="section__title scroll-reveal">Las personas detrás de GESTAD</h2>
      <p class="section__subtitle scroll-reveal">Un equipo multidisciplinario enfocado en resolver un problema real.</p>
      <div class="team__grid scroll-reveal-stagger">
        <div v-for="(m, i) in team" :key="i" class="team-card scroll-reveal">
          <div class="team-card__avatar" :style="{ background: m.color }">
            {{ m.initial }}
          </div>
          <h3 class="team-card__name">{{ m.name }}</h3>
          <p class="team-card__role">{{ m.role }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.team__grid{display:grid;grid-template-columns:repeat(3,1fr);gap:var(--space-md);margin-top:var(--space-lg)}
.team-card{background:var(--color-white);border:1px solid var(--color-gray-border);border-radius:var(--radius-md);padding:var(--space-lg) var(--space-md);text-align:center;transition:all var(--transition-base);box-shadow:var(--shadow-sm)}
.team-card:hover{transform:translateY(-6px);box-shadow:var(--shadow-md);border-color:var(--color-primary-light)}
.team-card__avatar{display:inline-flex;align-items:center;justify-content:center;width:72px;height:72px;border-radius:var(--radius-lg);color:var(--color-white);font-family:var(--font-heading);font-weight:800;font-size:1.5rem;margin-bottom:var(--space-sm)}
.team-card__name{font-size:1.1rem;font-weight:700;color:var(--color-text);margin-bottom:.25rem}
.team-card__role{font-size:.88rem;color:var(--color-text-muted);line-height:1.5}
@media(max-width:640px){.team__grid{grid-template-columns:1fr;max-width:360px;margin-left:auto;margin-right:auto}}
</style>
