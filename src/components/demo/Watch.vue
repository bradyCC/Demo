<template>
  <div class="watch">
    {{msg}}
    <input type="text" v-model="msg">
    <button @click="changeMsg">点击</button>
  </div>
</template>

<script>
export default {
  name: 'Watch',
  data () {
    return {
      msg: 'watch'
    }
  },
  // 监听
  watch: {
    msg () {
      console.log('监听msg变化')
    }
  },
  methods: {
    // msg反转
    changeMsg () {
      this.msg = this.msg.split('').reverse().join('')
    }
  }
}
</script>

<style scoped>

</style>
