import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import( '@/views/Home')
  },
  {
    path: '/signin',
    name: 'Sign In',
    component: () => import( '@/views/Signin')
  },
  {
    path: '/tambah-database',
    name: 'Tambah Database',
    component: () => import('@/views/formDatabase')
  },
  {
    path: '/table',
    name: 'Detail Table',
    components: {
      default: () => import('@/views/tampildatabase'),
    },
    children:[
      { 
        path: ':id', 
        name : 'id',
        component: () => import('@/views/tampildatabase')
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  linkExactActiveClass: 'menu-active',
  base: process.env.BASE_URL,
  routes,
})

export default router
