import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
    teste(state, data){
      console.log(data)
    }
  },
  actions: {
    async getBestRoute({commit}){
      const origin = 'rua+jamil+nasser'
      const destination = '-22.978323,-43.395791'
      const { data } = await axios.get(`https://maps.googleapis.com/maps/api/directions/json?origin=${origin}?destination=${destination}`)
      commit('teste', data)
    }
  },
  modules: {
  }
})
