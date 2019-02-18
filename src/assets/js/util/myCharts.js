/**
 * 各种画echarts图表的方法都封装在这里
 */

import echarts from 'echarts'
const install = Vue => {
  Object.defineProperties(Vue.prototype, {
    $chart: {
      get () {
        return {
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
          },
          // Basic Line Chart
          line1: id => {
            this.chart = echarts.init(document.getElementById(id))
            this.chart.clear()

            const optionData = {
              title: {
                text: 'Basic Line Chart',
                textStyle: {
                  color: '#f00',
                  textBorderColor: '#ff0'
                }
              },
              // 直角坐标系grid中的x轴
              xAxis: {
                type: 'category', // 坐标轴类型 'value'-数据轴 'category'-类目轴 'time'-时间轴 'log'-对数轴
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] // 类目数据, 在类目轴（type: 'category'）中有效
              },
              // 直角坐标系grid中的y轴
              yAxis: {
                type: 'value' // 坐标轴类型 'value'-数据轴 'category'-类目轴 'time'-时间轴 'log'-对数轴
              },
              // 系列列表。每个系列通过 type 决定自己的图表类型
              series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line' // 折线/面积图
              }]
            }

            this.chart.setOption(optionData)
          },
          // Basic Area Chart
          line2: id => {
            this.chart = echarts.init(document.getElementById(id))
            this.chart.clear()

            const optionData = {
              title: {
                text: 'Basic Area Chart'
              },
              // 直角坐标系grid中的x轴
              xAxis: {
                type: 'category', // 坐标轴类型 'value'-数据轴 'category'-类目轴 'time'-时间轴 'log'-对数轴
                boundaryGap: false, // 类目轴中 boundaryGap 可以配置为 true 和 false。默认为 true，这时候刻度只是作为分隔线，标签和数据点都会在两个刻度之间的带(band)中间。
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] // 类目数据, 在类目轴（type: 'category'）中有效
              },
              // 直角坐标系grid中的y轴
              yAxis: {
                type: 'value' // 坐标轴类型 'value'-数据轴 'category'-类目轴 'time'-时间轴 'log'-对数轴
              },
              // 系列列表。每个系列通过 type 决定自己的图表类型
              series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line', // 折线/面积图
                areaStyle: {}
              }]
            }

            this.chart.setOption(optionData)
          },
          // Smoothed Line Chart
          line3: id => {
            this.chart = echarts.init(document.getElementById(id))
            this.chart.clear()

            const optionData = {
              title: {
                text: 'Smoothed Line Chart'
              },
              // 直角坐标系grid中的x轴
              xAxis: {
                type: 'category', // 坐标轴类型 'value'-数据轴 'category'-类目轴 'time'-时间轴 'log'-对数轴
                boundaryGap: false, // 类目轴中 boundaryGap 可以配置为 true 和 false。默认为 true，这时候刻度只是作为分隔线，标签和数据点都会在两个刻度之间的带(band)中间。
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] // 类目数据, 在类目轴（type: 'category'）中有效
              },
              // 直角坐标系grid中的y轴
              yAxis: {
                type: 'value' // 坐标轴类型 'value'-数据轴 'category'-类目轴 'time'-时间轴 'log'-对数轴
              },
              // 系列列表。每个系列通过 type 决定自己的图表类型
              series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line', // 折线/面积图
                smooth: true // 是否平滑曲线显示。
              }]
            }

            this.chart.setOption(optionData)
          },
          // Basic Bar Chart
          bar1: id => {
            this.chart = echarts.init(document.getElementById(id))
            this.chart.clear()

            const optionData = {
              title: {
                text: 'Basic Bar Chart'
              },
              tooltip: {},
              xAxis: {
                data: ['iOS', 'Vue', 'Java', 'GO']
              },
              yAxis: {},
              series: [{
                name: '热度',
                type: 'bar',
                data: [5, 6, 9, 6]
              }]
            }
            this.chart.setOption(optionData)
          },
          // Customized Pie
          pie1: id => {
            this.chart = echarts.init(document.getElementById(id))
            this.chart.clear()

            const optionData = {
              backgroundColor: '#2c343c',
              title: {
                text: 'Customized Pie',
                left: 'center',
                top: 20,
                textStyle: {
                  color: '#ccc'
                }
              },
              // 提示框组件。
              tooltip: {
                trigger: 'item', // 数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
                formatter: '{a} <br/>{b} : {c} ({d}%)' // 字符串模板
              },
              // visualMap 是视觉映射组件，用于进行『视觉编码』，也就是将数据映射到视觉元素（视觉通道）。
              visualMap: {
                show: false,
                min: 80,
                max: 600,
                inRange: {
                  colorLightness: [0, 1]
                }
              },
              series: [
                {
                  name: '访问来源',
                  type: 'pie',
                  radius: '55%',
                  center: ['50%', '50%'],
                  data: [
                    {value: 335, name: '直接访问'},
                    {value: 310, name: '邮件营销'},
                    {value: 274, name: '联盟广告'},
                    {value: 235, name: '视频广告'},
                    {value: 400, name: '搜索引擎'}
                  ].sort(function (a, b) { return a.value - b.value }),
                  roseType: 'radius',
                  label: {
                    normal: {
                      textStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                      }
                    }
                  },
                  labelLine: {
                    normal: {
                      lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                      },
                      smooth: 0.2,
                      length: 10,
                      length2: 20
                    }
                  },
                  itemStyle: {
                    normal: {
                      color: '#c23531',
                      shadowBlur: 200,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                  },

                  animationType: 'scale',
                  animationEasing: 'elasticOut',
                  animationDelay: function (idx) {
                    return Math.random() * 200
                  }
                }
              ]
            }

            this.chart.setOption(optionData)
          },
          // Basic Scatter Chart
          scatter1: id => {
            this.chart = echarts.init(document.getElementById(id))
            this.chart.clear()

            const optionData = {
              xAxis: {},
              yAxis: {},
              series: [{
                symbolSize: 20,
                data: [
                  [10.0, 8.04],
                  [8.0, 6.95],
                  [13.0, 7.58],
                  [9.0, 8.81],
                  [11.0, 8.33],
                  [14.0, 9.96],
                  [6.0, 7.24],
                  [4.0, 4.26],
                  [12.0, 10.84],
                  [7.0, 4.82],
                  [5.0, 5.68]
                ],
                type: 'scatter'
              }]
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
