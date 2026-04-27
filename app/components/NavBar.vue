<script setup>
import { ref, onMounted } from 'vue'

const navLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Problema', href: '#problema' },
  { label: 'Características', href: '#caracteristicas' },
  { label: 'Audiencia', href: '#audiencia' },
  { label: 'Tecnología', href: '#stack' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Contacto', href: '#contacto' },
]

const scrolled = ref(false)
const menuOpen = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 30
}

const closeMenu = () => {
  menuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})
</script>

<template>
  <header :class="['navbar', { 'navbar--scrolled': scrolled }]" id="navbar">
    <div class="navbar__inner">
      <a href="#hero" class="navbar__brand" @click="closeMenu">
        <img src="~/assets/images/logo-gestad.png" alt="GESTAD Logo" class="navbar__logo-icon" />
        <span class="navbar__logo-text"></span>
      </a>

      <button
        class="navbar__toggle"
        :class="{ active: menuOpen }"
        @click="menuOpen = !menuOpen"
        aria-label="Abrir menú"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav :class="['navbar__menu', { 'navbar__menu--open': menuOpen }]">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="navbar__link"
          @click="closeMenu"
        >
          {{ link.label }}
        </a>
        <a href="#contacto" class="btn btn--primary navbar__cta" @click="closeMenu">
          Solicitar Demo
        </a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-navbar);
  padding: 1rem 1.5rem;
  transition: all var(--transition-base);
  background: transparent;
}

.navbar--scrolled {
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: 0 1px 12px rgba(42, 80, 60, 0.08);
  padding: 0.65rem 1.5rem;
}

.navbar__inner {
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar__brand {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.navbar__logo-icon {
  width: auto;
  height: 70px;
  object-fit: contain;
}

.navbar__logo-text {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.2rem;
  color: var(--color-text);
  letter-spacing: -0.02em;
}

.navbar__menu {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.navbar__link {
  font-size: 0.88rem;
  font-weight: 500;
  color: var(--color-text-muted);
  transition: color var(--transition-fast);
  position: relative;
}

.navbar__link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-primary);
  border-radius: var(--radius-full);
  transition: width var(--transition-base);
}

.navbar__link:hover {
  color: var(--color-primary-dark);
}

.navbar__link:hover::after {
  width: 100%;
}

.navbar__cta {
  padding: 0.55rem 1.3rem;
  font-size: 0.85rem;
}

/* === Hamburger === */
.navbar__toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  padding: 4px;
}

.navbar__toggle span {
  display: block;
  width: 24px;
  height: 2.5px;
  background: var(--color-text);
  border-radius: 2px;
  transition: all var(--transition-fast);
}

.navbar__toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.navbar__toggle.active span:nth-child(2) {
  opacity: 0;
}
.navbar__toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

@media (max-width: 860px) {
  .navbar__toggle {
    display: flex;
  }

  .navbar__menu {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 280px;
    background: var(--color-white);
    flex-direction: column;
    align-items: flex-start;
    padding: 5rem 2rem 2rem;
    gap: 1.2rem;
    transform: translateX(100%);
    transition: transform var(--transition-base);
    box-shadow: -8px 0 32px rgba(0, 0, 0, 0.08);
  }

  .navbar__menu--open {
    transform: translateX(0);
  }

  .navbar__link {
    font-size: 1rem;
  }

  .navbar__cta {
    margin-top: 1rem;
    width: 100%;
    text-align: center;
  }
}
</style>
