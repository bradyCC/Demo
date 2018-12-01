export default {
  state: { // 存储状态
    show: false
  },
  getters: { // 派生状态,获取state的状态
    notShow (state) { // 这里的state对应着上面这个state
      return !state.show
    }
  },
  mutations: { // 提交状态修改,同步
    switchDialog (state) { // 这里的state对应着上面这个state
      // /* eslint-disable */
      state.show = state.show ? 0 : true
      // /* eslint-enable */
      // 你还可以在这里执行其他的操作改变state
    }
  },
  actions: { // 提交mutations,异步
    switchDialog (context) { // 这里的context和我们使用的$store拥有相同的对象和方法
      context.commit('switchDialog')
      // 你还可以在这里触发其他的mutations方法
    }
  }
}
