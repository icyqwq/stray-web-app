import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import en from '@/local/en'

import App from './App.vue'
import router from './router'

// import 'vuetify/styles'
// import { createVuetify } from 'vuetify'
// import { VSlider } from 'vuetify/components/VSlider'

// const vuetify = createVuetify({
// 	components: {
// 		VSlider
// 	}
// 	// directives: {

// 	// }
// })

const i18n = createI18n({
	locale: 'en',
	fallbackLocale: 'en',
	messages: {
		en: en
	}
})

const app = createApp(App)

app.use(i18n)
app.use(createPinia())
app.use(router)
// app.use(vuetify)

app.mount('#app')
