import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ParceriasView from '../views/ParceriasView.vue'
import carteirinhaEstudante from '../views/CarteirinhaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/parcerias',
      name: 'parcerias',
      component: ParceriasView,
    },
    {
      path: '/carteirinha',
      name: 'carteirinha',
      component: carteirinhaEstudante,
    },
  ],
})

export default router
