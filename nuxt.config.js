export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'stray-animals',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  manifest: {
    name: '浪浪回家 | Stray Animals',
    short_name: '浪浪回家',
    description: '找到中意的可愛浪浪們，讓牠們回到家',
    background_color: '#fbd157',
    theme_color: '#fbd157',
    lang: 'zh',
    start_url: '/',
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/proxy',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    proxy: true,
    credentials: true,
  },
  proxy: {
    '/api/': {
      target: 'https://data.coa.gov.tw/Service/OpenData',
      pathRewrite: {
        '^/api/': '',
      },
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  // vuetify sass variables
  vuetify: {
    customVariables: ['@/assets/vuetify-variables.scss'],
    treeShake: true,
  },
}
