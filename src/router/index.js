import Vue from 'vue'
import VueRouter from 'vue-router'
import {zhengwuRouter} from './zhengwuRouter'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: () => {
      return '/zhengwu'
    }
  },
  //  政务
  {
    path: '/zhengwu',
    component: () => import('../views/Zhengwu.vue')
  },
  {
    path: '/zw',
    component: () =>
      import ('../views/zhengwu/Home'),
    children: zhengwuRouter,
  },


  {
    path: '/shequ',
    component: () => import('../views/Shequ.vue')
  },
  {
    path: '/shetuan',
    component: () => import('../views/Shetuan.vue')
  },
  {
    path: '/shuniu',
    component: () => import('../views/Shuniu.vue')
  }



]

const router = new VueRouter({
  routes,
  base: process.env.BASE_URL,
  mode: 'history',
  scrollBehavior() {
    return {x: 0, y: 0}
  }
})

export default router
