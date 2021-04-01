import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    textInClipboard: localStorage.getItem('textInClipboard') || '', 
    data: JSON.parse(localStorage.getItem('data') || '[]'),
    sections: JSON.parse(localStorage.getItem('sections') || '{}'),
  },
  mutations: {
    LOAD_SECTIONS (state, payload) {
      const [{ simple, accompanying, rare }] = payload
      const iSsections = { simple, accompanying, rare }

      if(!localStorage.getItem("sections")) {
        localStorage.setItem('sections', JSON.stringify(iSsections))
        state.sections = iSsections
      }
    },
    LOAD_DATA(state, payload) {
      state.data = payload
    },
    LOAD_CLIPBOARD_DATA(state, payload) {
      const statusCheck = state.textInClipboard === payload
      
      if(!statusCheck) {
        state.textInClipboard = payload
        localStorage.setItem('textInClipboard', payload)
      }
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
    },
    async SET_CLIPBOARD_DATA ({ commit }, payload) {
      let result = ''
      try {
        const text = await window.navigator.clipboard.readText()
        const textCheck = text.split(' ')

        if (textCheck.length <= 1) {
          result = textCheck.join()
        } else {
          result = !textCheck[0] ? textCheck[0] : textCheck[1]
        }
        
        commit('LOAD_CLIPBOARD_DATA', result)
      } catch (error) {
        console.log(error.message)
        throw error
      }

      if(payload) {
        commit('LOAD_CLIPBOARD_DATA', payload === true ? '' : payload)
      }
    },
  },
  getters: {
    getDataList: state => {
      return state.data
    },
    getSectionsList: (state) => {
      return state.sections
    },
    getClipboardData: (state) => {
      return state.textInClipboard
    }
    // getActiveData: (state) => (id) => {
    //     return state.datas.find(struct => struct.id === id)
    // }
  },
})
