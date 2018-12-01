<template>
  <div class="parent">
    <Header :active="4"></Header>
    <main class="main">
      <!--<button @click="show = true">点击</button>-->
      <!--<Child :show.sync="show"></Child>-->
      <!-- state触发 -->
      <button @click="touchState">state</button>
      <!-- mutations触发 -->
      <button @click="touchMutations">mutations</button>
      <button @click="touchMutations2">changeCommit</button>
      <button @click="switchDialog">switchDialog</button>
      <!-- actions触发 -->
      <button @click="touchActions">actions</button>
      <button @click="touchAction">touchAction</button>
      <button @click="touchAction2">touchAction2</button>
      <p>{{countNum}}</p>
      <p>{{countNum2}}</p>
      <Child></Child>
    </main>
  </div>
</template>

<script>
import Header from '@/components/public/Header'
import Child from './Child'
import { mapMutations, mapActions } from 'vuex'

export default {
  name: 'Parent',
  data () {
    return {
      // show: false
    }
  },
  components: {
    Header,
    Child
  },
  computed: {
    countNum () {
      return this.$store.state.count
    },
    countNum2 () {
      return this.$store.state.dialog.count
    }
  },
  created () {

  },
  methods: {
    ...mapMutations([ // 提交多个mutations时使用
      'switchDialog'
    ]),
    // 修改state
    touchState () {
      this.$store.state.dialog.show = true
    },
    // 提交单个mutations
    touchMutations () {
      this.$store.commit('switchDialog')
    },
    touchMutations2 () {
      this.$store.commit('increment', {amount: 10})
      // 对象方式提交mutations更改state
      // this.$store.commit({type: 'increment', amount: 10})
    },
    ...mapActions([ // 执行多个actiongs时使用
      'touchAction', 'touchAction2'
    ]),
    // 提交单个actions
    touchActions () {
      this.$store.dispatch('switchDialog')
    }
  }
}
</script>

<style scoped>

</style>
