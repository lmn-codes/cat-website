import Vue from 'vue'
import Vuex from 'vuex'
import VueAxios from 'vue-axios'
import axios from 'axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  // state stores the data from the API
  state: {
    breeds: [] 
  },
  getters: {
    breed: (state) => (id: string) => {
      // find the breed based on the id passed 
        return state.breeds.find(b => b.id === id)
    }
  },
  // mutations change the state
  mutations: {
    setBreeds(state, breeds) {
      state.breeds = breeds
      console.log("setting the API");
      console.log(breeds);
    }
  },
  // actions commit mutations
  actions: {
    // GET request 
    async getBreeds ({commit}) {
      console.log("getting the API");
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
    }
    
  },
  modules: {
  }
})
