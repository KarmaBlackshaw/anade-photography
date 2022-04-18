import { createRouter, createWebHistory } from 'vue-router'
import HeroView from '../views/hero/HeroView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HeroView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '@/views/about/AboutView')
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import(/* webpackChunkName: "portfolio" */ '@/views/portfolio/PortfolioView')
  },
  {
    path: '/resume',
    name: 'resume',
    component: () => import(/* webpackChunkName: "resume" */ '@/views/resume/ResumeView')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "contact" */ '@/views/contact/ContactView')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
