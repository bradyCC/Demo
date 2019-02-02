<template>
  <div class="index">
    This is es6 test
  </div>
</template>

<script>
export default {
  name: 'ES6',
  data () {
    return {
    }
  },
  mounted () {
    this.test1()
  },
  methods: {
    test1 () {
      function *show () {
        alert('a')

        yield 12

        alert('b')

        return 55
      }
      let gen = show()
      let result1 = gen.next()
      console.log(result1)
      let result2 = gen.next()
      console.log(result2)
    }
  }
}
</script>

<style scoped>
</style>
