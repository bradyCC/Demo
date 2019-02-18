<template>
  <div class="">
    <div id="chart1"></div>
    <div id="demo"></div>
  </div>
</template>

<script>
export default {
  name: 'MyCharts',
  data () {
    return {
    }
  },
  mounted () {
    this.$chart.line1('chart1')
    this.$chart.demo('demo')
  }
}
</script>

<style scoped>
#chart1 {
  width: 300px;
  height: 300px;
}
#demo {
  /*width: 600px;*/
  /*height: 400px;*/
}
</style>
