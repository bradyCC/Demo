<template>
  <div class="lifecycle">
    <button @click="toggleShow">切换</button>
    <div v-if="isShow"></div>
    <h1>倒计时：<span>{{time}}</span></h1>
  </div>
</template>

<script>
export default {
  name: 'LifeCycle',
  data () {
    return {
      isShow: false,
      time: '60'
    }
  },
  beforeCreate () {
    console.log('beforeCreate')
  },
  created () {
    console.log('created')
    this.test().then(function (data) {
      console.log(data)
    })
  },
  beforeMount () {
    console.log('beforeMount')
  },
  mounted () {
    console.log('mounted')
  },
  beforeUpdate () {
    console.log('beforeUpdate')
  },
  updated () {
    console.log('updated')
  },
  beforeDestroy () {
    console.log('beforeDestroy')
  },
  destroyed () {
    console.log('destroyed')
  },
  methods: {
    toggleShow () {
      this.isShow = !this.isShow
    },
    test () {
      // Promise用法
      let p = new Promise(function (resolve, reject) {
        setTimeout(function () {
          console.log('执行完成')
          resolve('aaa')
        }, 2000)
      })
      return p
    }
  }
}
</script>

<style scoped>

</style>
