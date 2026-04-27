<script setup>
const audiences = [
  { icon: '🏫', title: 'Instituciones educativas', desc: 'Colegios e institutos técnicos que necesitan controlar la asistencia de su planta docente de forma precisa.' },
  { icon: '👔', title: 'Coordinadores y directivos', desc: 'Quienes requieren visibilidad en tiempo real sobre puntualidad y ausencias del personal docente.' },
  { icon: '🖥️', title: 'Administradores de sistemas escolares', desc: 'Encargados de gestionar docentes, horarios y reportes internos de asistencia.' }
]
</script>

<template>
  <section id="audiencia" class="section section--alt">
    <div class="section__inner text-center">
      <span class="section__label">¿Para quién es?</span>
      <h2 class="section__title scroll-reveal">Diseñado para instituciones educativas reales</h2>
      <p class="section__subtitle scroll-reveal">GESTAD está pensado para el día a día de colegios colombianos que necesitan orden y control.</p>
      <div class="audience__grid scroll-reveal-stagger">
        <div v-for="(a, i) in audiences" :key="i" class="audience-card scroll-reveal">
          <span class="audience-card__icon">{{ a.icon }}</span>
          <h3 class="audience-card__title">{{ a.title }}</h3>
          <p class="audience-card__desc">{{ a.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.audience__grid{display:grid;grid-template-columns:repeat(3,1fr);gap:var(--space-md);margin-top:var(--space-lg);text-align:left}
.audience-card{background:var(--color-white);border:1px solid var(--color-gray-border);border-radius:var(--radius-md);padding:var(--space-md);transition:all var(--transition-base);box-shadow:var(--shadow-sm)}
.audience-card:hover{transform:translateY(-4px);box-shadow:var(--shadow-md);border-color:var(--color-primary-light)}
.audience-card__icon{display:inline-flex;align-items:center;justify-content:center;width:48px;height:48px;border-radius:var(--radius-sm);background:var(--color-primary-lighter);font-size:1.4rem;margin-bottom:.75rem}
.audience-card__title{font-size:1rem;font-weight:700;margin-bottom:.35rem;color:var(--color-text)}
.audience-card__desc{font-size:.88rem;color:var(--color-text-muted);line-height:1.65}
@media(max-width:860px){.audience__grid{grid-template-columns:repeat(2,1fr)}}
@media(max-width:540px){.audience__grid{grid-template-columns:1fr}}
</style>
