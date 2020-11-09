import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      firstName: '',
      lastName: '',
      email: '',
      selectedAdditionalTokens: [],
      additionalTokensData: []
    },
    stepper: {
      step: 1
    },
    darkmode: false,
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
    SET_SELECTED_TOKENS (state, payload) {
      state.user.selectedAdditionalTokens = payload
    },
    SET_TOKENS_DATA (state, payload) {
      state.user.additionalTokensData.push(payload)
    },
    INCREMENT_STEP(state) {
      state.stepper.step += 1
    },
    SET_DARKMODE(state) {
      state.darkmode = !state.darkmode
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
    setSelectedTokens (context, payload) {
      context.commit('SET_SELECTED_TOKENS', payload)
    },
    setTokensData (context, payload) {
      context.commit('SET_TOKENS_DATA', payload)
    },
    incrementStep(context) {
      context.commit('INCREMENT_STEP')
    },
    setDarkmode(context) {
      context.commit('SET_DARKMODE')
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
    getSelectedTokens(state) {
      return state.user.selectedAdditionalTokens
    },
    getTokensData(state) {
      return state.user.additionalTokensData
    },
    getStep(state) {
      return state.stepper.step
    },
    getDarkmodeStatus(state) {
      return state.darkmode
    }
  }
})
