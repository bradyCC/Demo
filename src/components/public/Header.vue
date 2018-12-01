<template>
  <div class="header">
    <nav class="navtop clearfix">
      <ul>
        <!-- <router-link>默认渲染成带有正确链接的<a>标签 -->
        <li><router-link to="/" tag="h1" :class="show==1?'select':''">首页</router-link></li>
        <!-- 可以通过配置tag属性生成指定标签 -->
        <li><router-link to="/user" tag="h1" :class="show==2?'select':''">用户页</router-link></li>
        <!-- :to 配合路由动态传值，作用相当于：router.push({name: 'user', params: {userid: 123}}) -->
        <li><router-link :to="{name: 'userid', params: {userid: 123}}" tag="h1" :class="show==3?'select':''">用户详情页</router-link></li>
        <li><router-link to="/detail" tag="h1" :class="show==6?'select':''">详情页</router-link></li>
        <!-- 配置replace属性，导航后不会留下history记录 -->
        <li><router-link :to="{name: 'userid', params: {userid: 123}}" replace tag="h1">无history页</router-link></li>
        <li><router-link to="/parent" replace tag="h1" :class="show==4?'select':''">Parent</router-link></li>
        <li><router-link to="/child" replace tag="h1">Child</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
    }
  },
  computed: {
    show () {
      return this.$attrs.active
    }
  },
  created () {
    console.log(this.$attrs)
    console.log(this.$attrs.active)
  }
}
</script>

<style scoped>
.navtop {
  width: 100%;
  background: #000;
  color: #fff;
  padding: 10px 20px;
  position: fixed;
  opacity: 0.7;
}
.navtop ul li {
  float: left;
  margin-right: 20px;
  list-style: none;
  cursor: pointer;
}
.select, .navtop ul li:hover {
  color: #f00;
}

</style>
