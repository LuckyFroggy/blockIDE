import * as types from './types'
const state = {
  html: '',
  less:'',
  js:'',
  codeKey:''//存入缓存的key
 
}
const mutations = {
  [types.html](state, string) {
    state.html = string
  },
  [types.less](state, string) {
    state.less = string
  },
  [types.js](state, string) {
    state.js = string
  },
  [types.codeKey](state, string) {
    state.codeKey = string
  }
}
const getters = {

}
const actions = {
  html({
    commit
  }, string) {
    commit(types.html, string)
  },
  less({
    commit
  }, string) {
    commit(types.less, string)
  },
  js({
    commit
  }, string) {
    commit(types.js, string)
  },
  codeKey({
    commit
  }, string) {
    commit(types.codeKey, string)
  },
  
}
export default {
  state,
  mutations,
  getters,
  actions
}
