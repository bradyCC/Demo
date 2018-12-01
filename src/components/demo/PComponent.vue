<template>
  <div class="pcomponent">
    <!-- 父子组件传值 -->
    <!-- 1.父传子 在子组件上绑定值, 如:name="resutls" 子组件在computed接收 return this.$attrs.name -->
    <!-- 2.子传父 子组件绑定事件, 如msgToParent() {this.$emit('listenToChildEvent', this.message)} 父组件在子组件上绑定监听事件接收 @listenToChildEvent="showMsgFromChild" -->
    <CComponent :name="results" @listenToChildEvent="showMsgFromChild">
      <!-- 插槽slot用法 -->
      <h3>This is slot number one</h3>
      <p slot="header">This is slot header</p>
    </CComponent>
    {{message}}
  </div>
</template>

<script>
import CComponent from '@/components/demo/CComponent'
export default {
  name: 'PComponent',
  data () {
    return {
      results: [
        {title: 'pageA', content: 'This is pageA'},
        {title: 'pageB', content: 'This is pageB'},
        {title: 'pageC', content: 'This is pageC'}
      ],
      message: ''
    }
  },
  components: {
    CComponent
  },
  methods: {
    showMsgFromChild (data) {
      this.message = data
    }
  }
}
</script>

<style scoped>

</style>
