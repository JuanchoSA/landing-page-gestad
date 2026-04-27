<script setup>
const navLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Problema', href: '#problema' },
  { label: 'Características', href: '#caracteristicas' },
  { label: 'Audiencia', href: '#audiencia' },
  { label: 'Tecnología', href: '#stack' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Contacto', href: '#contacto' },
]
</script>

<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__top">
        <div class="footer__brand">
          <div class="footer__logo">
            <img src="~/assets/images/logo-gestad.png" alt="GESTAD Logo" class="footer__logo-icon" />
            <span class="footer__logo-text">GESTAD</span>
          </div>
          <p class="footer__tagline">Control de asistencia docente automatizado con tecnología RFID.</p>
        </div>
        <nav class="footer__nav">
          <span class="footer__nav-title">Navegación</span>
          <a v-for="link in navLinks" :key="link.href" :href="link.href" class="footer__link">{{ link.label }}</a>
        </nav>
      </div>
      <div class="footer__bottom">
        <p class="footer__copy">© 2026 GESTAD. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer{background:var(--color-text);color:var(--color-white);padding:var(--space-xl) var(--space-md) var(--space-md)}
.footer__inner{max-width:var(--max-width);margin:0 auto}
.footer__top{display:flex;justify-content:space-between;align-items:flex-start;gap:var(--space-xl);padding-bottom:var(--space-lg);border-bottom:1px solid rgba(255,255,255,.1)}
.footer__logo{display:flex;align-items:center;gap:.6rem;margin-bottom:.6rem}
.footer__logo-icon{width:100px;height:100px;object-fit:contain}
.footer__logo-text{font-family:var(--font-heading);font-weight:700;font-size:1.15rem}
.footer__tagline{font-size:.88rem;color:rgba(255,255,255,.55);max-width:300px;line-height:1.6}
.footer__nav{display:flex;flex-direction:column;gap:.45rem}
.footer__nav-title{font-family:var(--font-heading);font-size:.75rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:rgba(255,255,255,.4);margin-bottom:.3rem}
.footer__link{font-size:.88rem;color:rgba(255,255,255,.65);transition:color var(--transition-fast)}
.footer__link:hover{color:var(--color-primary-light)}
.footer__bottom{padding-top:var(--space-md);text-align:center}
.footer__copy{font-size:.8rem;color:rgba(255,255,255,.4)}
@media(max-width:640px){.footer__top{flex-direction:column;gap:var(--space-lg)}}
</style>
