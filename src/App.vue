<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import './assets/main.css';
@import './assets/normalize.css';
* {
  margin: 0;
  padding: 0;
}
.clearfix:before,
.clearfix:after {
  content: " ";
  display: table;
}
.clearfix:after {
  clear: both;
}
.main {
  padding-top: 51px;
}
#app {
  padding: 30px;
}
</style>
