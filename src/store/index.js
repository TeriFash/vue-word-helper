import Vue from 'vue'
import Vuex from 'vuex'
// import { db } from '../firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { 
    data: null,
    sections: null
  },
  mutations: {
    LOAD_SECTIONS (state, payload) {
      const [{ simple, accompanying, rare }] = payload

      state.sections = { simple, accompanying, rare }
    },
    LOAD_DATA(state, payload) {
      state.data = payload
    },
  },
  actions: {
    async FETCH_SECTIONS ({ commit }) {
      const result = []
      try {
        await this._vm.$db.collection('sections').get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            result.push(doc.data())
          })
          commit('LOAD_SECTIONS', result)
        })
      } catch (error) {
        console.log(error.message)
        throw error
      }
    },
    async SET_DATA({ commit }, payload) {
      const { collection } = payload
      const result = []
      try {
        await this._vm.$db.collection(collection).get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            result.push(doc.data())
          })
          commit('LOAD_DATA', result)
        })
      } catch (error) {
        console.log(error.message)
        throw error
      }
    }
  },
  getters: {
    getDataList: state => {
      return state.data
    },
    getSectionsList: (state) => {
      return state.sections
    }
    // getActiveData: (state) => (id) => {
    //     return state.datas.find(struct => struct.id === id)
    // }
  },
})
