<template>
  <div class="">
    <div id="chart1"></div>
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
  }
}
</script>

<style scoped>
#chart1 {
  width: 300px;
  height: 300px;
}
</style>
