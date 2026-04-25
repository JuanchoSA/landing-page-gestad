<script setup>
import { useScrollAnimation } from '~/composables/useScrollAnimation'

useScrollAnimation()

const features = [
  {
    icon: '📡',
    title: 'Marcación automática con tarjeta RFID',
    description: 'El docente pasa su tarjeta por el lector. El sistema registra automáticamente si llegó a tiempo, llegó tarde (+15 min) o se ausentó (+30 min). Sin intervención manual.',
  },
  {
    icon: '🗓️',
    title: 'Gestión de horarios por bloques semanales',
    description: 'Los administradores asignan horarios semanales a cada docente (día, hora inicio, hora fin, salón). El sistema valida la asistencia solo dentro del bloque activo.',
  },
  {
    icon: '📄',
    title: 'Reportes exportables en PDF',
    description: 'Genera reportes filtrados por rango de fechas y/o cédula del docente. Exporta en PDF con tabla de nombre, fecha, hora, estado y observaciones.',
  },
  {
    icon: '🔔',
    title: 'Notificaciones automáticas al administrador',
    description: 'Cuando un docente llega tarde o no asiste, el sistema genera una notificación interna y envía un correo automático al administrador con el detalle del evento.',
  },
]

const stack = [
  { icon: '🐘', label: 'Backend', value: 'PHP (MVC)' },
  { icon: '🗄️', label: 'Base de datos', value: 'MySQL' },
  { icon: '📟', label: 'Hardware', value: 'ESP32 + RC522' },
  { icon: '📡', label: 'Comunicación', value: 'HTTP POST / WiFi' },
  { icon: '📑', label: 'PDFs', value: 'TCPDF' },
  { icon: '🌐', label: 'Frontend', value: 'HTML + CSS + JS' },
  { icon: '📦', label: 'Dependencias', value: 'Composer' },
]

const team = [
  { name: 'Juan Sánchez', role: 'Project Manager / Programador Backend', initial: 'J', color: 'linear-gradient(135deg, #3a9e6f, #6abf8a)' },
  { name: 'Wilmer Beltrán', role: 'Programador Hardware / IoT', initial: 'W', color: 'linear-gradient(135deg, #5ca8e0, #7ec8f2)' },
  { name: 'Camilo Cañas', role: 'Diseñador Frontend / UI', initial: 'C', color: 'linear-gradient(135deg, #e08a5c, #f2b87e)' },
]
</script>

<template>
  <div>
    <NavBar />
    <main>
      <HeroSection />
      <ProblemSection />
      <FeaturesSection :features="features" />
      <AudienceSection />
      <StackSection :stack="stack" />
      <TeamSection :team="team" />
      <ContactSection />
    </main>
    <FooterSection />
  </div>
</template>
