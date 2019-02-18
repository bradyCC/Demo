/**
 * 各种画echarts图表的方法都封装在这里
 */

import echarts from 'echarts'
const install = function (Vue) {
  Object.defineProperties(Vue.prototype, {
    $chart: {
      get () {
        return {
          // 画一条简单的线
          line1: function (id) {
            this.chart = echarts.init(document.getElementById(id))
            this.chart.clear()

            const optionData = {
              xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
              },
              yAxis: {
                type: 'value'
              },
              series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                smooth: true
              }]
            }

            this.chart.setOption(optionData)
          },
          // DEMO
          demo: id => {
            this.chart = echarts.init(document.getElementById(id))
            this.chart.clear()

            const optionData = {
              // 标题组件，包含主标题和副标题。
              title: {},
              // 图例组件
              legend: {},
              //
              grid: {},
              // 直角坐标系 grid 中的 x 轴，一般情况下单个 grid 组件最多只能放上下两个 x 轴，多于两个 x 轴需要通过配置 offset 属性防止同个位置多个 x 轴的重叠。
              xAxis: {},
              // 直角坐标系 grid 中的 y 轴，一般情况下单个 grid 组件最多只能放左右两个 y 轴，多于两个 y 轴需要通过配置 offset 属性防止同个位置多个 Y 轴的重叠。
              yAxis: {},
              // 极坐标系，可以用于散点图和折线图。每个极坐标系拥有一个角度轴和一个半径轴。
              polar: {},
              // 极坐标系的径向轴。
              radiusAxis: {},
              // 极坐标系的角度轴。
              angleAxis: {},
              // 雷达图坐标系组件，只适用于雷达图。
              radar: {},
              // dataZoom 组件 用于区域缩放，从而能自由关注细节的数据信息，或者概览数据整体，或者去除离群点的影响。
              dataZoom: [],
              // visualMap 是视觉映射组件，用于进行『视觉编码』，也就是将数据映射到视觉元素（视觉通道）。
              visualMap: [],
              // 直角坐标系内绘图网格，单个 grid 内最多可以放置上下两个 X 轴，左右两个 Y 轴。可以在网格上绘制折线图，柱状图，散点图（气泡图）。
              tooltip: {},
              // 这是坐标轴指示器（axisPointer）的全局公用设置。
              axisPointer: {},
              // 工具栏。内置有导出图片，数据视图，动态类型切换，数据区域缩放，重置五个工具。
              toolbox: {},
              // brush 是区域选择组件，用户可以选择图中一部分数据，从而便于向用户展示被选中数据，或者他们的一些统计计算结果。
              brush: {},
              // 地理坐标系组件用于地图的绘制，支持在地理坐标系上绘制散点图，线集。
              geo: {},
              // 平行坐标系（Parallel Coordinates） 是一种常用的可视化高维数据的图表。
              parallel: {},
              // 这个组件是平行坐标系中的坐标轴。
              parallelAxis: {},
              // 单轴。可以被应用到散点图中展现一维数据
              singleAxis: {},
              // timeline 组件，提供了在多个 ECharts option 间进行切换、播放等操作的功能。
              timeline: {},
              // graphic 是原生图形元素组件。可以支持的图形元素包括：
              graphic: {},
              // 日历坐标系组件。
              calendar: {},
              // ECharts 4 开始支持了 数据集（dataset）组件用于单独的数据集声明，从而数据可以单独管理，被多个组件复用，并且可以自由指定数据到视觉的映射。这在不少场景下能带来使用上的方便。
              dataset: {},
              // W3C 制定了无障碍富互联网应用规范集（WAI-ARIA，the Accessible Rich Internet Applications Suite），致力于使得网页内容和网页应用能够被更多残障人士访问。ECharts 4.0 遵从这一规范，支持自动根据图表配置项智能生成描述，使得盲人可以在朗读设备的帮助下了解图表内容，让图表可以被更多人群访问。
              aria: {},
              // 系列列表。每个系列通过 type 决定自己的图表类型
              series: [],
              // 调色盘颜色列表。如果系列没有设置颜色，则会依次循环从该列表中取颜色作为系列颜色。
              color: {},
              // 背景色，默认无背景。
              backgroundColor: {},
              // 全局的字体样式。
              textStyle: {},
              // 是否开启动画。
              animation: {},
              // 是否开启动画的阈值，当单个系列显示的图形数量大于这个阈值时会关闭动画。
              animationThreshold: {},
              // 初始动画的时长，支持回调函数
              animationDuration: {},
              // 初始动画的缓动效果
              animationEasing: {},
              // 初始动画的延迟，支持回调函数
              animationDelay: {},
              // 数据更新动画的时长。
              animationDurationUpdate: {},
              // 数据更新动画的缓动效果。
              animationEasingUpdate: {},
              // 数据更新动画的延迟，支持回调函数
              animationDelayUpdate: {},
              // 图形的混合模式
              blendMode: {},
              // 图形数量阈值，决定是否开启单独的 hover 层，在整个图表的图形数量大于该阈值时开启单独的 hover 层。
              hoverLayerThreshold: {},
              // 是否使用 UTC 时间。
              userUTC: {}
            }

            this.chart.setOption(optionData)
          }
        }
      }
    }
  })
}

export default {
  install
}
