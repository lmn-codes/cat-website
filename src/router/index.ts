import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Detail from '../views/Detail.vue'
import Category from '../views/Category.vue'
import Random from '../views/Random.vue'


Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    // dynamic route passing the id to Detail
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  }, 
  {
    path: '/category/:id',
    name: 'Category',
    component: Category
  }, 
  {
    path: '/random',
    name: 'Random',
    component: Random
  }
]

const router = new VueRouter({
  routes
})

export default router
