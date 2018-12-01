export default {
  state: { // 存储状态
    show: false,
    todos: [ // 列表
      {id: 1, text: 'ID1的text...', done: true},
      {id: 2, text: 'ID2的text...', done: false},
      {id: 3, text: 'ID3的text...', done: true}
    ],
    count: 1
  },
  getters: { // 派生状态,获取state的状态
    notShow: state => { // 这里的state对应着上面这个state
      return !state.show
    },
    doneTodos: state => { // 过滤列表, done为false的值排除
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => { // 获取列表长度
      return getters.doneTodos.length
    },
    getTodoById: state => id => { // 获取特定ID
      return state.todos.find(todo => todo.id === id)
    }
  },
  mutations: { // 提交状态修改, 同步
    switchDialog: state => { // 这里的state对应着上面这个state
      // /* eslint-disable */
      state.show = state.show ? 0 : true
      // /* eslint-enable */
      // 你还可以在这里执行其他的操作改变state
    },
    touchAction: state => {
      state.count++
    }
  },
  actions: { // 提交mutations, 异步
    switchDialog: context => { // 这里的context和我们使用的$store拥有相同的对象和方法
      context.commit('switchDialog')
      // 你还可以在这里触发其他的mutations方法
    },
    touchAction ({ commit }) { // ES2015参数结构
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('touchAction')
          resolve()
        }, 1000)
      })
    },
    touchAction2 ({ dispatch, commit }) {
      return dispatch('touchAction').then(() => {
        commit('touchAction')
      })
    }
  }
}
