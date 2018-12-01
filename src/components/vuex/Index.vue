<template>
  <div class="parent">
    <Header :active="4"></Header>
    <main class="main">
      <!--<button @click="show = true">点击</button>-->
      <!--<Child :show.sync="show"></Child>-->
      <!-- state触发 -->
      <button @click="$store.state.dialog.show = true">state</button>
      <!-- mutations触发 -->
      <button @click="$store.commit('switchDialog')">mutations</button>
      <!-- actions触发 -->
      <button @click="$store.dispatch('switchDialog')">actions</button>
      <!-- 提交mutations更改state -->
      <button @click="$store.commit('increment', { amount: 10})">changeCommit</button>
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

  }
}
</script>

<style scoped>

</style>
