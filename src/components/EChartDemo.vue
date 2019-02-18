<template>
  <div class="charts">
    <div id="line1"></div>
    <div id="line2"></div>
    <div id="line3"></div>
    <div id="bar1"></div>
    <div id="pie1"></div>
    <div id="scatter1"></div>
  </div>
</template>

<script>
export default {
  name: 'EChartDemo',
  data () {
    return {
    }
  },
  mounted () {
    this.$chart.line1('line1')
    this.$chart.line2('line2')
    this.$chart.line3('line3')
    this.$chart.bar1('bar1')
    this.$chart.pie1('pie1')
    this.$chart.scatter1('scatter1')
  }
}
</script>

<style scoped>
.charts {
  display: flex;
}
.charts div {
  width: 300px;
  height: 300px;
}
</style>
