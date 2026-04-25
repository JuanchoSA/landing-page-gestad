<script setup>
import { ref } from 'vue'

const form = ref({ name: '', institution: '', email: '', message: '' })
const submitted = ref(false)

const handleSubmit = () => {
  submitted.value = true
  setTimeout(() => { submitted.value = false }, 4000)
  form.value = { name: '', institution: '', email: '', message: '' }
}
</script>

<template>
  <section id="contacto" class="section">
    <div class="section__inner">
      <div class="contact">
        <div class="contact__info scroll-reveal">
          <span class="section__label">Contacto</span>
          <h2 class="contact__title">¿Listo para automatizar la asistencia de tu institución?</h2>
          <p class="contact__desc">Déjanos tus datos y te contactaremos para agendar una demostración personalizada de GESTAD.</p>
          <div class="contact__details">
            <div class="contact__detail">
              <span class="contact__detail-icon">📧</span>
              <span>contacto@gestad.co</span>
            </div>
            <div class="contact__detail">
              <span class="contact__detail-icon">📍</span>
              <span>Bogotá, Colombia</span>
            </div>
          </div>
        </div>
        <form class="contact__form scroll-reveal" @submit.prevent="handleSubmit">
          <div class="form__group">
            <label for="contact-name" class="form__label">Nombre</label>
            <input id="contact-name" v-model="form.name" type="text" class="form__input" placeholder="Tu nombre completo" required />
          </div>
          <div class="form__group">
            <label for="contact-institution" class="form__label">Institución</label>
            <input id="contact-institution" v-model="form.institution" type="text" class="form__input" placeholder="Nombre de la institución" required />
          </div>
          <div class="form__group">
            <label for="contact-email" class="form__label">Correo electrónico</label>
            <input id="contact-email" v-model="form.email" type="email" class="form__input" placeholder="correo@ejemplo.com" required />
          </div>
          <div class="form__group">
            <label for="contact-message" class="form__label">Mensaje</label>
            <textarea id="contact-message" v-model="form.message" class="form__input form__textarea" placeholder="Cuéntanos sobre tu institución..." rows="4"></textarea>
          </div>
          <button type="submit" class="btn btn--primary contact__submit">
            <span v-if="!submitted">Enviar mensaje</span>
            <span v-else>✓ ¡Mensaje enviado!</span>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact{display:grid;grid-template-columns:1fr 1fr;gap:var(--space-xl);align-items:start}
.contact__title{font-size:clamp(1.5rem,3vw,2rem);margin-bottom:var(--space-sm)}
.contact__desc{font-size:1.02rem;color:var(--color-text-muted);line-height:1.75;margin-bottom:var(--space-md)}
.contact__details{display:flex;flex-direction:column;gap:.7rem}
.contact__detail{display:flex;align-items:center;gap:.6rem;font-size:.92rem;font-weight:500;color:var(--color-text)}
.contact__detail-icon{font-size:1.1rem}
.contact__form{background:var(--color-gray-soft);border:1px solid var(--color-gray-border);border-radius:var(--radius-md);padding:var(--space-lg);display:flex;flex-direction:column;gap:var(--space-sm)}
.form__label{display:block;font-size:.82rem;font-weight:600;color:var(--color-text);margin-bottom:.3rem;font-family:var(--font-heading)}
.form__input{width:100%;padding:.7rem .9rem;border:1.5px solid var(--color-gray-border);border-radius:var(--radius-sm);font-family:var(--font-body);font-size:.92rem;color:var(--color-text);background:var(--color-white);transition:border-color var(--transition-fast),box-shadow var(--transition-fast);outline:none}
.form__input::placeholder{color:var(--color-text-light)}
.form__input:focus{border-color:var(--color-primary);box-shadow:0 0 0 3px rgba(106,191,138,.15)}
.form__textarea{resize:vertical;min-height:100px}
.contact__submit{width:100%;padding:.85rem;font-size:.95rem}
@media(max-width:860px){.contact{grid-template-columns:1fr;gap:var(--space-lg)}}
</style>
