import { createApp } from 'vue'
import {createRouter,createWebHashHistory} from 'vue-router';
import App from './App.vue'
import HomeComponent from './components/HomeComponent.vue';
import ContentComponent from './components/ContentComponent.vue';
import './assets/css/index.css'

const routes = [
    {
        path: '/',
        component: HomeComponent
    },
    {
        path: '/contenido',
        component: ContentComponent
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

const app = createApp(App)

app.use(router)
app.mount('#app')
