import { createApp } from 'vue'
import {createRouter,createWebHashHistory} from 'vue-router';
import App from './App.vue'
import HomeComponent from './components/HomeComponent.vue';
import SeriesComponent from './components/SeriesComponent.vue';
import './assets/css/index.css'

const routes = [
    {
        path: '/',
        component: HomeComponent
    },
    {
        path: '/series',
        component: SeriesComponent
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

const app = createApp(App)

app.use(router)
app.mount('#app')
