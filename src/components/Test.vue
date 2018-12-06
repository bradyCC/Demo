<template>
  <div class="test">

  </div>
</template>

<script>
export default {
  name: 'Test',
  mounted () {
    this.$toast('Toast', 'center', '3000')
  }
}
</script>

<style>
.vue-toast {
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  background: rgba(0,0,0,.5);
  padding-top: 24%;
}
.vue-box {
  background: #fff;
  position: fixed;
  width: 90%;
  text-align: center;
  padding: .4rem 0rem;
  font-size:.32rem;
  color: #FF9178;
  border-radius: .2rem;
  left: 5%;
}
.toast-top {
  top: 0;
}
.toast-bottom {
  bottom: 0;
}
.toast-center {
  top: 50vh;
  margin-top: -1.12rem;
}
</style>
