<template>
  <div class="child">
    <Header :active="3"></Header>
    <main class="main">
      <h1>用户详情页</h1>
      <!-- 父子组件传值 -->
      <div v-if="selfShow">
        <button @click="changeShowParent">向父组件传值</button>
        <button @click="changeShowChild">to hidden</button>
        <p v-text="getMsg"></p>
      </div>
      <!-- 如果父组件在使用子组件UserId的时候不在里面加内容则这里的slot会显示出来 -->
      <!-- 单个插槽 -->
      <!--<slot>-->
        <!--只有在没有要分发的内容时才会显示-->
      <!--</slot>-->

      <!-- 具名插槽 -->
      <!--<div class="container">-->
        <!--<header>-->
          <!--<slot name="header"></slot>-->
        <!--</header>-->
        <!--<main>-->
          <!--<slot></slot>-->
        <!--</main>-->
        <!--<footer>-->
          <!--<slot name="footer"></slot>-->
        <!--</footer>-->
      <!--</div>-->

      <!-- 作用域插槽 -->
      <slot text="hello from child"></slot>
    </main>
  </div>
</template>

<script>
// 顶部导航
import Header from '@/components/public/Header'
export default {
  name: 'UserId',
  data () {
    return {
      message: 'Message From Child'
    }
  },
  components: {
    Header
  },
  computed: {
    selfShow () {
      return this.$attrs.name
    },
    getMsg () {
      return this.$attrs.msg
    }
  },
  methods: {
    changeShowChild () {
      this.$emit('changeShowChild')
    },
    changeShowParent () {
      this.$emit('listenToChildEvent', this.message)
    }
  }
}
</script>

<style scoped>

</style>
