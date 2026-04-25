<script setup>
</script>

<template>
  <section id="problema" class="section section--alt">
    <div class="section__inner">
      <div class="problem">
        <div class="problem__content scroll-reveal">
          <span class="section__label">El problema</span>
          <h2 class="section__title">El control manual de asistencia ya no funciona</h2>
          <p class="problem__text">
            Los colegios e instituciones educativas llevan el control de asistencia de sus docentes de forma manual — listas en papel, Excel o sistemas lentos — lo que genera <strong>imprecisión</strong>, <strong>pérdida de tiempo administrativo</strong> y dificultad para detectar inasistencias o retardos a tiempo.
          </p>
          <p class="problem__text problem__text--highlight">
            GESTAD automatiza todo ese proceso con hardware RFID y software web centralizado.
          </p>
        </div>
        <div class="problem__visual scroll-reveal">
          <div class="problem__comparison">
            <div class="problem__col">
              <span class="problem__col-label problem__col-label--before">Antes</span>
              <ul class="problem__list">
                <li><span class="problem__icon problem__icon--bad">✗</span>Listas en papel o Excel</li>
                <li><span class="problem__icon problem__icon--bad">✗</span>Errores humanos constantes</li>
                <li><span class="problem__icon problem__icon--bad">✗</span>Sin visibilidad en tiempo real</li>
                <li><span class="problem__icon problem__icon--bad">✗</span>Retardos no detectados</li>
              </ul>
            </div>
            <div class="problem__divider"><div class="problem__divider-line"></div><span class="problem__divider-icon">→</span><div class="problem__divider-line"></div></div>
            <div class="problem__col">
              <span class="problem__col-label problem__col-label--after">Con GESTAD</span>
              <ul class="problem__list">
                <li><span class="problem__icon problem__icon--good">✓</span>Registro automático RFID</li>
                <li><span class="problem__icon problem__icon--good">✓</span>Datos precisos y auditables</li>
                <li><span class="problem__icon problem__icon--good">✓</span>Visibilidad inmediata</li>
                <li><span class="problem__icon problem__icon--good">✓</span>Notificaciones automáticas</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.problem{display:grid;grid-template-columns:1fr 1fr;gap:var(--space-xl);align-items:center}
.problem__text{margin-top:var(--space-sm);font-size:1.05rem;line-height:1.8}
.problem__text strong{color:var(--color-text);font-weight:600}
.problem__text--highlight{color:var(--color-primary-dark);font-weight:600;padding-left:1rem;border-left:3px solid var(--color-primary)}
.problem__comparison{display:flex;align-items:stretch;gap:1rem;background:var(--color-white);border-radius:var(--radius-md);padding:1.5rem;box-shadow:var(--shadow-card);border:1px solid var(--color-gray-border)}
.problem__col{flex:1}
.problem__col-label{display:inline-block;font-family:var(--font-heading);font-size:.75rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;padding:.2rem .7rem;border-radius:var(--radius-full);margin-bottom:.8rem}
.problem__col-label--before{background:#f8d7da;color:#721c24}
.problem__col-label--after{background:var(--color-primary-lighter);color:var(--color-primary-dark)}
.problem__list{display:flex;flex-direction:column;gap:.65rem}
.problem__list li{display:flex;align-items:center;gap:.55rem;font-size:.88rem;font-weight:500;color:var(--color-text)}
.problem__icon{display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;font-size:.68rem;font-weight:800;flex-shrink:0}
.problem__icon--bad{background:#f8d7da;color:#c0392b}
.problem__icon--good{background:var(--color-primary-lighter);color:var(--color-primary-dark)}
.problem__divider{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.4rem;padding:0 .2rem}
.problem__divider-line{width:2px;flex:1;background:var(--color-gray-border);border-radius:2px}
.problem__divider-icon{font-size:1.1rem;color:var(--color-primary);font-weight:700}
@media(max-width:860px){
  .problem{grid-template-columns:1fr;gap:var(--space-lg)}
  .problem__comparison{flex-direction:column;gap:1.5rem}
  .problem__divider{flex-direction:row;padding:0}
  .problem__divider-line{width:auto;height:2px;flex:1}
}
</style>
