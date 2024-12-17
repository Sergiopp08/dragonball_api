import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueSplide from '@splidejs/vue-splide'
import VueSocialSharing from 'vue-social-sharing'



const app = createApp(App)

app.use(router)
app.use(VueSplide)
app.use(VueSocialSharing)

app.mount('#app')
