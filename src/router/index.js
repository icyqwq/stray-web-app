import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/affection',
      name: 'Affection',
      component: () => import(/* webpackChunkName: "affection" */ '../views/AffectionView.vue')
    },
    {
      path: '/control',
      name: 'Control',
      component: () => import(/* webpackChunkName: "control" */ '../views/ControlView.vue')
    },
    {
      path: '/function',
      name: 'Function',
      component: () => import(/* webpackChunkName: "function" */ '../views/FunctionView.vue')
    },
    {
      path: '/setting',
      name: 'Setting',
      component: () => import(/* webpackChunkName: "setting" */ '../views/SettingView.vue')
    },
    {
      path: '/update',
      name: 'Update',
      component: () => import(/* webpackChunkName: "update" */ '../views/UpdateView.vue')
    },
  ]
})

export default router
