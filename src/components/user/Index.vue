<template>
  <div class="parent">
    <Header :active="2"></Header>
    <main class="main">
      <h1>用户页</h1>
      <!-- 父子组件传值 -->
      <button @click="changeShow">显示元素</button>
      <button @click="changeMsg">修改向子组件传的值</button>
      <p v-text="message"></p>
      <UserId :name="show, msg" @changeShowChild="changeShow" @listenToChildEvent="showMsgFromChild">
        <!-- 插槽slot使用 -->
        <!--<p>这是一些初始内容</p>-->
        <!--<p>这是更多的初始内容</p>-->

        <!--<h1 slot="header">这里可能是一个页面标题</h1>-->

        <!--<p>主要内容的一个段落。</p>-->
        <!--<p>另一个主要段落。</p>-->

        <!--<h2 slot="footer">这里有一些联系信息</h2>-->
        <template slot-scope="props">
          <span>hello from parent</span>
          <span>{{props.text}}</span>
        </template>
      </UserId>
    </main>
  </div>
</template>

<script>
// 顶部导航
import Header from '@/components/public/Header'
import UserId from './UserId'
export default {
  name: 'User',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      show: false,
      message: ''
    }
  },
  components: {
    Header,
    UserId
  },
  created () {
  },
  methods: {
    changeShow () {
      this.show = !this.show
    },
    changeMsg () {
      this.msg = 'Hello World'
    },
    showMsgFromChild (data) {
      this.message = data
    }
  }
}
</script>

<style scoped>
.main_padding {
  padding: 0;
}
</style>
