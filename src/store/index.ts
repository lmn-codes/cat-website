/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import VueAxios from 'vue-axios'
import axios from 'axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

const store = new Vuex.Store({
  // state stores the data from the API
  state: {
    breeds: Array<any>(), 
    relatedPics: Array<any>(),
    categories: Array<any>(), 
    selectedCategoryPictures: Array<any>(),
    randomPic: Array<any>()
  },
  getters: {
    breed: (state) => (id: number) => {
      // find the breed based on the id passed 
        return state.breeds.find(b => b.id == id)
    },
  },
  // mutations change the state
  mutations: {
    // random sort the API getBreeds results
    // populate the breeds array with the first 10 elements of the sorted array
    setBreeds(state, breeds) {
      state.breeds = breeds
    }, 
    // affection level low to high 
    sortBreeds (state) {
      state.breeds.sort(function(a, b){
        return a.affection_level - b.affection_level 
      });
    },
    setRelatedPics(state, id){
      // remove the selected breed and the elements whose image is undefined
      // to ensure there are 3 relevant items shown  
      let temp = state.breeds.filter(function(el) { return el.id != id; });
      temp.filter(function(el) { return el.image != undefined})
      for (let i = temp.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * i)
        let k = temp[i]
        temp[i] = temp[j]
        temp[j] = k
      }
      state.relatedPics = temp.slice(0, 3)
    },
    // populate the breeds array 
    setCategories(state, categories) {
      state.categories = categories
    },
    setSelectedCatPics(state, selectedCatPics) {
      state.selectedCategoryPictures = selectedCatPics
      console.log(state.selectedCategoryPictures)
    },
    setRandomPic(state, randomPic) {
      state.randomPic = randomPic
      console.log(state.randomPic)
    }
  },
  // actions commit mutations
  actions: {
    // breeds: GET request 
    async getBreeds ({commit}) {
      console.log("getting the breeds");
      const BASE_URL = 'https://api.thecatapi.com/v1/breeds/';
      try {
        await axios.get(BASE_URL, {
          headers: {
            'x-api-key' : "a8c4e83f-8094-47a5-be11-0b4f9cf386cd" 
          }
        }). then(resp => commit('setBreeds', resp.data)
        );
      } catch (exception) {
        throw new Error(`API ${exception}`);
    }
    },
    getRelatedPics ({commit}, id) {
      commit('setRelatedPics', id)
    },
    //categories: GET request 
    async getCategories ({commit}) {
      console.log("getting the categories");
      const BASE_URL = 'https://api.thecatapi.com/v1/categories/';
      try {
        await axios.get(BASE_URL, {
          headers: {
            'x-api-key' : "a8c4e83f-8094-47a5-be11-0b4f9cf386cd" 
          }
        }). then(resp => commit('setCategories', resp.data)
        );
      } catch (exception) {
        throw new Error(`API ${exception}`);
    }
    },
    async getSelectedCateoryPictures({commit}, id) {
      console.log(id);
      const BASE_URL = 'https://api.thecatapi.com/v1/images/search?';
          try {
            await axios.get(BASE_URL, {
              headers: {
                'x-api-key' : "a8c4e83f-8094-47a5-be11-0b4f9cf386cd" 
              }, params :  {
                limit: 10,
                category_ids: id}
            }). then(resp => commit('setSelectedCatPics', resp.data))
            ;
          } catch (exception) {
            throw new Error(`API ${exception}`);
        }
    },
    async getRandomPic({commit}) {
      const BASE_URL = 'https://api.thecatapi.com/v1/images/search?';
          try {
            await axios.get(BASE_URL, {
              headers: {
                'x-api-key' : "a8c4e83f-8094-47a5-be11-0b4f9cf386cd" 
              }, params :  {
                limit: 1}
            }). then(resp => commit('setRandomPic', resp.data))
            ;
          } catch (exception) {
            throw new Error(`API ${exception}`);
        }
    }, 
    sortBreeds({commit}) {
      console.log('sorting breeds')
      commit('sortBreeds')
    }
  },
  modules: {
  }
})

export {store} 