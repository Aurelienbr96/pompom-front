import './main.css'
import 'vue-final-modal/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueQueryPlugin } from '@tanstack/vue-query'
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  locale: 'fr',
  fallbackLocale: 'en',
  messages: {
    en: {
      message: {
        hello: 'hello world'
      }
    },
    fr: {
      message: {
        hello: 'Bonjour'
      }
    }
  }
})

import App from './App.vue'
import router from './router'
import { createVfm } from 'vue-final-modal'

const app = createApp(App)

const vfm = createVfm()
app.use(vfm)

app.use(i18n)
app.use(createPinia())
app.use(VueQueryPlugin)
app.use(router)

app.mount('#app')
