const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: "Proyecto  Nuxt",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href:"https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" } 
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' , height:'10px',duration:1000 },
  loadingIndicator:{
      name:'circle',
      color: '#fa923f'
  },

  /*
  ** Global CSS
  */
  css: [
    '~assets/styles/main.css'

  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
        '~plugins/core-components.js'

  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  },
  env:{
    baseUrl: process.env.BASE_URL ||  'https://nuxt-blog-1a161-default-rtdb.firebaseio.com'

  },
  transition:{
      name:'fade',
      mode:'out-in'
  }    
   
}
