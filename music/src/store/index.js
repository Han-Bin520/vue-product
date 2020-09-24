import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters

/*  // 保存全局共享数据
  state: {
    isFullScreen: false
  },
  // 保存和修改全局共享的数据方法
  mutations: {
    changeFullScreen (state, flag) {
      state.isFullScreen = flag
    }
  },
  // 保存和触发mutations中保存的方法的方法
  actions: {
    setFullScreen ({ commit }, flag) {
      commit('changeFullScreen', flag)
    }
  },
  getters: {
    isFullScreen (state) {
      return state.isFullScreen
    }
  } */
})
