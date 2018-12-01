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
      <!-- actions触发 -->
      <button @click="touchActions">actions</button>
      <!-- 提交mutations更改state -->
      <button @click="touchMutations2">changeCommit</button>
      <p>{{countNum}}</p>
      <Child></Child>
    </main>
  </div>
</template>

<script>
import Header from '@/components/public/Header'
import Child from './Child'
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
    }
  },
  created () {

  },
  methods: {
    touchState () {
      this.$store.state.dialog.show = true
    },
    touchMutations () {
      this.$store.commit('switchDialog')
    },
    touchMutations2 () {
      this.$store.commit('increment', {amount: 10})
      // 对象方式提交mutations更改state
      // this.$store.commit({type: 'increment', amount: 10})
    },
    touchActions () {
      this.$store.dispatch('switchDialog')
    }
  }
}
</script>

<style scoped>

</style>
