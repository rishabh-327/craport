import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/report/:id',
    name: 'report',
    component: () => import('@/views/Report/Report.vue'),
    props: true,
    children: [
      {
        path: '/edit/:workId',
        name: 'edit-work',
        component: () => import('@/views/Report/EditWork.vue'),
        props: true
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
