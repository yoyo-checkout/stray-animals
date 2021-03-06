export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: '浪浪回家 | Stray Animals',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '尋找喜歡的可愛浪浪們，讓牠們回到家' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'shortcut icon', href: '/favicon.ico' },
      { rel: 'apple-touch-startup-image', href: '/touch-image.png' },
      { rel: 'apple-touch-icon', href: '/touch-image.png' },
    ]
  },

  pwa: {
    icon: {
      source: '/touch-image.png',
    },
    meta: {
      name: '浪浪回家 | Stray Animals',
      description: '尋找喜歡的可愛浪浪們，讓牠們回到家',
      theme_color: '#fbd157',
      lang: 'zh',
      nativeUI: true,
    },
    manifest: {
      name: '浪浪回家 | Stray Animals',
      short_name: '浪浪回家',
      description: '尋找喜歡的可愛浪浪們，讓牠們回到家',
      icons: {
        source: '/touch-image.png',
        sizes: [64, 120, 144, 152, 192, 384, 512],
      },
      start_url: '/',
      background_color: '#fbd157',
      theme_color: '#fbd157',
      lang: 'zh-Hant-TW',
    },
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
    '@nuxtjs/vuetify',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
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
