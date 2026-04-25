// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    head: {
      title: 'GESTAD — Control de asistencia docente con RFID',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Sistema web que automatiza el registro de asistencia de docentes mediante tarjetas RFID, eliminando el control manual y dando visibilidad en tiempo real a los directivos.',
        },
        { property: 'og:title', content: 'GESTAD — Control de asistencia docente con RFID' },
        {
          property: 'og:description',
          content:
            'Automatiza el registro de asistencia de docentes con tecnología RFID. Sin listas de papel, sin Excel lento.',
        },
      ],
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap',
        },
      ],
    },
  },

  css: ['~/assets/css/variables.css', '~/assets/css/global.css'],
})
