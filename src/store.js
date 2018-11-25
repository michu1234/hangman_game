import Vue from 'vue'
import Vuex from 'vuex'

import { gameState } from './modules/state'
import { gameGetters } from './modules/getters'
import { gameMutations } from './modules/mutations';
import { gameActions } from './modules/actions';

Vue.use(Vuex)
 
export default new Vuex.Store({
  state: {
      ...gameState
  },
  getters: {
      ...gameGetters
  },
  mutations: {
      ...gameMutations
  },
  actions: {
      ...gameActions
  }
})
