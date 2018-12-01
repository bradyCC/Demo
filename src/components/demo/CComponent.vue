<template>
  <div class="ccomponent">
    <h2>父组件向子组件传值</h2>
    <ul>
      <li v-for="(item, index) in getResult" :key="index">
        <h3>{{item.title}}</h3>
        <p>{{item.content}}</p>
      </li>
    </ul>
    <h2>子组件向父组件传值</h2>
    <button @click="msgToParent">传值</button>
    <!-- 插槽 可以有默认内容 <slot>I am some default text</slot>, 如果没有在插槽填充其他内容, 则显示默认内容 -->
    <slot></slot>
    <!-- 具名插槽 -->
    <slot name="header"></slot>
  </div>
</template>

<script>
export default {
  name: 'CComponent',
  data () {
    return {
      message: 'Message From Child'
    }
  },
  computed: {
    // 获取父组件向子组件的传值
    getResult () {
      return this.$attrs.name
    }
  },
  methods: {
    // 子组件向父组件传值
    msgToParent () {
      this.$emit('listenToChildEvent', this.message)
    }
  }
}
</script>

<style scoped>

</style>
