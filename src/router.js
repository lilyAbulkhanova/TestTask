import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardPage from './pages/DashboardPage.vue'
import CardsPage from './pages/CardsPage.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'dashboard',
        component: DashboardPage
    },
    {
        path: '/cards',
        name: 'cards',
        component: CardsPage
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router