import Vue from 'vue'
import VueRouter from 'vue-router'
import Mypage from '../views/MyPage'
import Index from '@/Main/Index'
import Sign from '../views/Sign'
import Community from '../views/Community'
import Diary from '../views/Diary'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/MyPage',
    name: 'MyPage',
    component: Mypage
  },
  {
    path: '/Community',
    name: 'Community',
    component: Community
  },
  {
    path: '/Sign',
    name: 'Sign',
    component: Sign
  },
  {
    path : '/Diary',
    name : 'Diary',
    component : Diary
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
