import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const routes =  [
  {
    path: '/',
    name: 'Home',
    component: () => import( '../views/Home.vue'), 
  },
  {
    // dynamic route passing the id to Detail
    path: '/detail/:id',
    name: 'Detail',
    component: () => import( '../views/Detail.vue'), 
  }, 
  {
    path: '/category/:id',
    name: 'Category',
    component: () => import( '../views/Category.vue'), 
  }, 
  {
    path: '/random',
    name: 'Random',
    component: () => import( '../views/Random.vue')
  }
]

const router = new VueRouter({
  routes, 
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
})

export default router
