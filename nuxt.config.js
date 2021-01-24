export default {
  ssr: false,

  target: 'static',

  head: {
    titleTemplate: '%s - hallinto-nuxt',
    title: 'hallinto-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['@mdi/font/css/materialdesignicons.css'],

  plugins: [],

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/composition-api',
  ],

  modules: [],

  router: {
    // middleware: ['signed-in-checker'],
  },

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      options: {
        themeCache: {
          get: (key) => localStorage.getItem(key),
          set: (key, value) => localStorage.setItem(key, value),
        },
      },
    },
  },

  generate: {
    interval: 2000,
  },

  build: {},
}
