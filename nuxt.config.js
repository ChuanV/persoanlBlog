export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'XieYuXiang',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'XIE Yuxiang' },
      { name: 'description', content: '谢雨湘的个人网站' }
    ],
    script: [
      {src: 'https://cdn.bootcss.com/jquery/2.1.1/jquery.min.js'},
      {src: 'https://cdn.bootcss.com/twitter-bootstrap/3.3.7/js/bootstrap.min.js'}
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/index.css' },
      { rel: 'stylesheet', href: 'https://cdn.bootcss.com/twitter-bootstrap/3.3.7/css/bootstrap.min.css' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    // 'bootstrap-vue/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
