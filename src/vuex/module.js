import * as types from './types'
const state = {
  html: '',
  css:'',
  js:'',
  codeKey:''//存入缓存的key
 
}
const mutations = {
  [types.html](state, string) {
    state.html = string
  },
  [types.css](state, string) {
    state.css = string
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
  css({
    commit
  }, string) {
    commit(types.css, string)
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
