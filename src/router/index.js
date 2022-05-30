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
    path: '/hero/management',
    name: 'hero-mgmt',
    meta: {
      auth: true
    },
    component: () => import('@/views/hero-management/HeroMgmt')
  },
  {
    path: '/flow/management',
    name: 'flow-mgmt',
    meta: {
      auth: true
    },
    component: () => import('@/views/flow-management/FlowMgmt')
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
    path: '/services/management',
    name: 'services-mgmt',
    meta: {
      auth: true
    },
    component: () => import('@/views/services-management/ServicesMgmt')
  },
  {
    path: '/testimonials/management',
    name: 'testimonials-mgmt',
    meta: {
      auth: true
    },
    component: () => import('@/views/testimonials-management/TestimonialsMgmt')
  },
  {
    path: '/gallery/management',
    name: 'gallery-mgmt',
    meta: {
      auth: true
    },
    component: () => import('@/views/gallery-management/GalleryMgmt')
  },
  {
    path: '/socials/management',
    name: 'socials-mgmt',
    meta: {
      auth: true
    },
    component: () => import('@/views/socials-management/SocialsMgmt')
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
  }
})

export default router
