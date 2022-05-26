import { createRouter, createWebHistory } from 'vue-router'
import HeroView from '../views/hero/HeroView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HeroView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/LoginView')
  },
  {
    path: '/about/management',
    name: 'about-mgmt',
    meta: {
      auth: true
    },
    component: () => import('@/views/about-management/AboutMgmt')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'page-not-found',
    component: () => import('@/views/page-not-found/PageNotFound')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 70
      }
    }

    return {
      el: '#home',
      behavior: 'smooth'
    }
  }
})

export default router
