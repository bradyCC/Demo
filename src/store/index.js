import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'
import dialog from './modules/dialog'

Vue.use(Vuex)
Vue.prototype.ajax = axios

export default new Vuex.Store({
  // strict: true,
  state: { // 存储状态
    show: true,
    count: 1
  },
  modules: { // 模块
    dialog // 其他组件
  },
  mutations: { // 提交状态修改
    increment: (state, payload) => {
      state.count += payload.amount
    }
  }
})
