import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '../views/Login.vue'
import InicioView from '../views/Inicio.vue'
import TutoresView from '../views/Tutores.vue'
import AgendarView from '../views/Agendar.vue'

const routes = [
    { path: '/', component: LoginView },
    { path: '/inicio', component: InicioView },
    { path: '/tutores', component: TutoresView },
    { path: '/agendar/:id', component: AgendarView },
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router