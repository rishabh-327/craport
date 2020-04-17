import Vue from 'vue'
import Vuex from 'vuex'

import { generateId, persistWorks } from '@/utils'
import { defaultWorksList } from '@/config'

const defaultList =
  JSON.parse(localStorage.getItem('works')) || defaultWorksList

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [persistWorks],
  state: {
    works: defaultList
  },
  getters: {
    getWorkById: state => workId => {
      for (let [workIndex, work] of state.works.entries()) {
        if (work.workId === workId) {
          return { work, workIndex }
        }
      }
    }
  },
  mutations: {
    ADD_NEW_WORK(state, work) {
      state.works.push(work)
    },
    DELETE_WORK(state, workIndex) {
      state.works.splice(workIndex, 1)
    },
    UPDATE_WORK(state, { workIndex, work }) {
      const workToUpdate = state.works[workIndex]
      workToUpdate.name = work.name
      workToUpdate.work = work.work
      workToUpdate.client = work.client
      workToUpdate.status = work.status
    }
  },
  actions: {
    addWork({ commit }, work) {
      const newWork = {
        workId: generateId(),
        ...work
      }
      commit('ADD_NEW_WORK', newWork)
    },
    deleteWork({ commit }, workIndex) {
      commit('DELETE_WORK', workIndex)
    },
    updateWork({ commit }, { workIndex, work }) {
      commit('UPDATE_WORK', { workIndex, work })
    }
  },
  modules: {}
})
