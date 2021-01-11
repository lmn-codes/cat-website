import Vue from 'vue'
import VueRouter from 'vue-router'
// const { store } = require('../store/index.cjs');
// import Home from '../views/Home.vue'
// import Detail from '../views/Detail.vue'
// import Category from '../views/Category.vue'
// import Random from '../views/Random.vue'

Vue.use(VueRouter)

export const routes =  [
  {
    path: '/',
    name: 'Home',
    component: () => import( '../views/Home.vue')
  },
  {
    // dynamic route passing the id to Detail
    path: '/detail/:id',
    name: 'Detail',
    component: () => import( '../views/Detail.vue'), 
    // meta: {
		// 	sitemap: {
		// 		// Slugs can also be provided asynchronously
		// 		// The callback must always return an array
		// 		slugs: function getBreedsId() {
    //       const store = import( '../store/index')
    //       let slugArray = []
    //       if(store.state.breeds) {
    //         for(let breed of store.state.breeds) {
    //         slugArray.push(breed.id)
    //         }
    //       }
    //       return slugArray
    //     } 
		// 	}
		// }
  }, 
  {
    path: '/category/:id',
    name: 'Category',
    component: () => import( '../views/Category.vue'), 
  //   // meta: {
	// 	// 	sitemap: {
	// 	// 		// Slugs can also be provided asynchronously
	// 	// 		// The callback must always return an array
	// 	// 		// slugs: getCategoriesNames() 
	// 	// 	}
	// 	// }
  }, 
  {
    path: '/random',
    name: 'Random',
    component: () => import( '../views/Random.vue')
  }
]

// module.exports = { default: routes }

// function getBreedsId() {
//   let slugArray = []
//   if(store.state.breeds) {
//     for(let breed of store.state.breeds) {
//     slugArray.push(breed.id)
//     }
//   }
//   return slugArray
// }
// function getCategoriesNames() {
//   let slugArray = []
  
//   for(let category of store.state.categories) {
//     slugArray.push(category.name)
//   }
//   return slugArray
//}

const router = new VueRouter({
  routes, 
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
})

export default router
