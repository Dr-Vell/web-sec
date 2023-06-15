// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public:{
            newsApiKey: process.env.NEWS_API_KEY,  
        }      
      }, 

    pages: true,

    css: ["~/assets/styles.css"],

    app: {
      pageTransition: { name: 'page', mode: 'out-in' }
    }
    })
