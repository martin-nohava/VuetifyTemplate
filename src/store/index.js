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
    },
    stepper: {
      step: 1
    }
  },
  mutations: {
    SET_FIRSTNAME (state, payload) {
      state.user.firstName = payload
    },
    SET_LASTNAME (state, payload) {
      state.user.lastName = payload
    },
    SET_EMAIL (state, payload) {
      state.user.email = payload
    },
    SET_TOKENS (state, payload) {
      state.user.additionaTokens = payload
    },
    INCREMENT_STEP(state) {
      state.stepper.step += 1
    }
  },
  actions: {
    setName(context, payload) {
      context.commit('SET_FIRSTNAME', payload.firstName)
      context.commit('SET_LASTNAME', payload.lastName)
    },
    setEmail (context, payload) {
      context.commit('SET_EMAIL', payload)
    },
    setTokens (context, payload) {
      context.commit('SET_TOKENS', payload)
    },
    incrementStep(context) {
      context.commit('INCREMENT_STEP')
    }
  },
  modules: {
  },
  getters: {
    getUserName(state) {
      return state.user.firstName + ' ' + state.user.lastName
    },
    getEmail(state) {
      return state.user.email
    },
    getTokens(state) {
      return state.user.additionaTokens
    },
    getStep(state) {
      return state.stepper.step
    }
  }
})
