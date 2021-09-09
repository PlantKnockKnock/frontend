import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Index from '@/components/index'
import Chart from '@/components/Chart'
import loginpage from '../views/test.vue'
import Board from '../views/board'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Home',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/chart',
    name: 'Chart',
    component: Chart
  },
  {
    path: '/loginpage',
    name: 'loginpage',
    component: loginpage
  },
  {
    path: '/board',
    name: 'board',
    component: Board
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
