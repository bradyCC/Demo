<template>
  <div class="amap-wrapper">
    {{ new Date() | dateFilter}}
    <!-- 构建地图 -->
    <el-amap class="amap-box" :vid="'amap-vue'" :zoom="zoom" :center="center" :plugin="plugin">
      <!-- 添加标注点 -->
      <el-amap-marker vid="marker" :position="center" :label="label"></el-amap-marker>
      <!-- 添加圆形区域 -->
      <el-amap-circle vid="circle" :center="center" :radius="radius" fill-opacity="0.2" strokeColor="#38f" strokeOpacity="0.8" strokeWeight="1" fillColor="#38f"></el-amap-circle>
    </el-amap>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'MapDemo',
  data () {
    return {
      zoom: 16, // 地图显示的缩放级别
      center: [117.086892, 36.648723], // 坐标
      label: { // 标注点
        content: '名士豪庭',
        offset: [10, 12]
      },
      radius: 100, // 半径
      plugin: [ // 插件
        {pName: 'ToolBar', position: 'LB'},
        {pName: 'MapType', defaultType: 0, showTraffic: true},
        {pName: 'OverView', isOpen: true},
        {pName: 'Scale'},
        {
          pName: 'Geolocation',
          showMarker: false,
          events: {
            init (o) {
              o.getCurrentPosition((status, result) => {
                console.log(result)
                this.center = [result.position.lng, result.position.lat]
              })
            }
          }
        }
      ]
    }
  },
  methods: {
  },
  filters: {
    dateFilter (value) {
      return moment(value).format('YYYY-MM-DD HH:mm:ss')
    }
  }
}
</script>

<style scoped>
.amap-wrapper {
  width: 500px;
  height: 500px;
}
</style>
