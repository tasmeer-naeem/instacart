import { createApp } from 'vue'
import App from './App.vue'
import store from './components/store'
import router from './components/router'
//import VueAxios from 'vue-axios'
//import axios from 'axios'

const app = createApp(App)
app.use(router)
app.use(store)
//app.use(VueAxios, axios) 
app.mount('#app')
