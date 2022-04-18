import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeIndex'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '@/views/about/AboutIndex')
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import(/* webpackChunkName: "portfolio" */ '@/views/portfolio/PortfolioIndex')
  },
  {
    path: '/resume',
    name: 'resume',
    component: () => import(/* webpackChunkName: "resume" */ '@/views/resume/ResumeIndex')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "contact" */ '@/views/contact/ContactIndex')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
