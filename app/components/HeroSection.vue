<script setup>
</script>

<template>
  <section id="hero" class="hero">
    <div class="hero__bg">
      <div class="hero__shape hero__shape--1"></div>
      <div class="hero__shape hero__shape--2"></div>
      <div class="hero__shape hero__shape--3"></div>
    </div>

    <div class="hero__inner">
      <div class="hero__content">
        <span class="hero__badge">🔒 Sistema RFID automatizado</span>
        <h1 class="hero__title">
          <span class="hero__title-accent">GESTAD</span>
          <span class="hero__title-sub">Control de asistencia docente automatizado con tecnología RFID</span>
        </h1>
        <p class="hero__description">
          Sistema web que automatiza el registro de asistencia de docentes mediante tarjetas RFID, eliminando el control manual y dando visibilidad en tiempo real a los directivos.
        </p>
        <div class="hero__actions">
          <a href="#contacto" class="btn btn--primary btn--lg">
            Solicitar Demo
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
          <a href="#caracteristicas" class="btn btn--secondary btn--lg">
            Ver más
          </a>
        </div>
      </div>

      <div class="hero__visual">
        <div class="hero__card hero__card--main">
          <div class="hero__card-header">
            <span class="hero__card-dot hero__card-dot--green"></span>
            <span class="hero__card-dot hero__card-dot--yellow"></span>
            <span class="hero__card-dot hero__card-dot--red"></span>
            <span class="hero__card-title-bar">GESTAD — Panel</span>
          </div>
          <div class="hero__card-body">
            <div class="hero__card-row">
              <span class="hero__card-avatar">JS</span>
              <div class="hero__card-info">
                <span class="hero__card-name">Juan Sánchez</span>
                <span class="hero__card-time">07:58 AM</span>
              </div>
              <span class="hero__card-status hero__card-status--ok">A tiempo</span>
            </div>
            <div class="hero__card-row">
              <span class="hero__card-avatar">WB</span>
              <div class="hero__card-info">
                <span class="hero__card-name">Wilmer Beltrán</span>
                <span class="hero__card-time">08:17 AM</span>
              </div>
              <span class="hero__card-status hero__card-status--late">+15 min</span>
            </div>
            <div class="hero__card-row">
              <span class="hero__card-avatar">CC</span>
              <div class="hero__card-info">
                <span class="hero__card-name">Camilo Cañas</span>
                <span class="hero__card-time">—</span>
              </div>
              <span class="hero__card-status hero__card-status--absent">Ausente</span>
            </div>
          </div>
        </div>

        <div class="hero__card hero__card--floating">
          <span class="hero__floating-icon">📡</span>
          <span class="hero__floating-text">Tarjeta detectada</span>
          <span class="hero__floating-check">✓</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 7rem var(--space-md) var(--space-2xl);
  overflow: hidden;
}

/* === Decorative background shapes === */
.hero__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.hero__shape {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.45;
}

.hero__shape--1 {
  width: 600px;
  height: 600px;
  background: var(--color-primary-lighter);
  top: -200px;
  right: -100px;
  animation: float1 18s ease-in-out infinite;
}

.hero__shape--2 {
  width: 400px;
  height: 400px;
  background: var(--color-primary-light);
  bottom: -100px;
  left: -100px;
  animation: float2 22s ease-in-out infinite;
}

.hero__shape--3 {
  width: 250px;
  height: 250px;
  background: var(--color-accent);
  top: 40%;
  left: 40%;
  animation: float3 15s ease-in-out infinite;
}

@keyframes float1 {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(-30px, 40px); }
}
@keyframes float2 {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(40px, -30px); }
}
@keyframes float3 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-20px, 20px) scale(1.1); }
}

/* === Layout === */
.hero__inner {
  max-width: var(--max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-xl);
  align-items: center;
  position: relative;
  z-index: 1;
}

/* === Content === */
.hero__badge {
  display: inline-block;
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--color-primary-dark);
  background: var(--color-primary-lighter);
  border: 1px solid var(--color-primary-light);
  padding: 0.35rem 1rem;
  border-radius: var(--radius-full);
  margin-bottom: var(--space-md);
  animation: fadeInDown 0.8s ease both;
}

.hero__title {
  animation: fadeInDown 0.8s ease 0.1s both;
}

.hero__title-accent {
  display: block;
  font-size: clamp(2.8rem, 6vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  background: linear-gradient(135deg, var(--color-primary-dark), var(--color-primary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero__title-sub {
  display: block;
  font-size: clamp(1rem, 2.2vw, 1.35rem);
  font-weight: 500;
  color: var(--color-text-muted);
  margin-top: 0.4rem;
  line-height: 1.5;
}

.hero__description {
  margin-top: var(--space-md);
  font-size: 1.05rem;
  max-width: 520px;
  animation: fadeInDown 0.8s ease 0.25s both;
}

.hero__actions {
  margin-top: var(--space-lg);
  display: flex;
  gap: var(--space-sm);
  flex-wrap: wrap;
  animation: fadeInDown 0.8s ease 0.4s both;
}

.btn--lg {
  padding: 0.9rem 2rem;
  font-size: 1rem;
}

/* === Visual panel mockup === */
.hero__visual {
  position: relative;
  display: flex;
  justify-content: center;
  animation: fadeInUp 1s ease 0.5s both;
}

.hero__card--main {
  width: 100%;
  max-width: 420px;
  background: var(--color-white);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  overflow: hidden;
  border: 1px solid var(--color-gray-border);
}

.hero__card-header {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0.7rem 1rem;
  background: var(--color-gray-soft);
  border-bottom: 1px solid var(--color-gray-border);
}

.hero__card-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.hero__card-dot--green { background: #6abf8a; }
.hero__card-dot--yellow { background: #f5c842; }
.hero__card-dot--red { background: #e96d6d; }

.hero__card-title-bar {
  margin-left: 0.6rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-text-muted);
  font-family: var(--font-heading);
}

.hero__card-body {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.hero__card-row {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.65rem 0.8rem;
  border-radius: var(--radius-sm);
  background: var(--color-gray-soft);
  transition: background var(--transition-fast);
}

.hero__card-row:hover {
  background: var(--color-primary-lighter);
}

.hero__card-avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: var(--radius-sm);
  background: var(--color-primary);
  color: var(--color-white);
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 0.75rem;
  flex-shrink: 0;
}

.hero__card-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.hero__card-name {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-text);
}

.hero__card-time {
  font-size: 0.72rem;
  color: var(--color-text-muted);
}

.hero__card-status {
  font-size: 0.72rem;
  font-weight: 600;
  padding: 0.2rem 0.6rem;
  border-radius: var(--radius-full);
  flex-shrink: 0;
}

.hero__card-status--ok {
  background: #d4edda;
  color: #276749;
}

.hero__card-status--late {
  background: #fff3cd;
  color: #856404;
}

.hero__card-status--absent {
  background: #f8d7da;
  color: #721c24;
}

/* === Floating card === */
.hero__card--floating {
  position: absolute;
  bottom: -16px;
  left: -32px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--color-white);
  padding: 0.6rem 1rem;
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--color-gray-border);
  animation: pulse-float 3s ease-in-out infinite;
}

.hero__floating-icon {
  font-size: 1.2rem;
}

.hero__floating-text {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-text);
}

.hero__floating-check {
  color: var(--color-primary);
  font-weight: 700;
  font-size: 1rem;
}

@keyframes pulse-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}

@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-18px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* === Responsive === */
@media (max-width: 860px) {
  .hero {
    padding-top: 6rem;
    min-height: auto;
  }

  .hero__inner {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero__description {
    margin-left: auto;
    margin-right: auto;
  }

  .hero__actions {
    justify-content: center;
  }

  .hero__visual {
    margin-top: var(--space-lg);
  }

  .hero__card--floating {
    left: auto;
    right: -8px;
    bottom: -12px;
  }
}

@media (max-width: 480px) {
  .hero__actions {
    flex-direction: column;
  }

  .hero__card--main {
    max-width: 100%;
  }
}
</style>
