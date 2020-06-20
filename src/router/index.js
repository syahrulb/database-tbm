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
]

const router = new VueRouter({
  mode: 'history',
  linkExactActiveClass: 'menu-active',
  base: process.env.BASE_URL,
  routes,
})

export default router
