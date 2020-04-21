import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Report from '@/views/Report/Report.vue'
import EditWork from '@/views/Report/EditWork.vue'

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
    component: Report,
    props: true,
    children: [
      {
        path: '/edit/:workId',
        name: 'edit-work',
        component: EditWork,
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
