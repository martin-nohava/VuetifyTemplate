import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      firstName: '',
      lastName: '',
      email: '',
      additionaTokens: []
    }
  },
  mutations: {
    SET_FIRSTNAME (state, payload) {
      state.user.firstName = payload
    },
    SET_LASTNAME (state, payload) {
      state.user.lastName = payload
    },
  },
  actions: {
    setName(context, payload) {
      context.commit('SET_FIRSTNAME', payload.firstName)
      context.commit('SET_LASTNAME', payload.lastName)
    }
  },
  modules: {
  },
  getters: {
    getUserName(state) {
      return state.user.firstName + ' ' + state.user.lastName
    }
  }
})
