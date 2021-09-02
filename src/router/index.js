import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HelloWorld from '@/components/HelloWorld'
import Chart from '@/components/Chart'
import loginpage from '../views/test.vue'
import Board from '../views/board'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
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
