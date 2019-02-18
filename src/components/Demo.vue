<template>
  <div class="demo">
    <template>
      <!-- Echarts start -->
      <MyCharts></MyCharts>
      <!-- Echarts end -->
      <!-- vue-echarts start -->
      <ECharts></ECharts>
      <!-- vue-echarts end -->
      <!-- 生成二维码 qrcodejs2 start -->
      <h1>二维码2</h1>
      <div id="qrcode"></div>
      <!-- 生成二维码 end -->
      <!-- 生成二维码 qrcode start -->
      <h1>二维码</h1>
      <canvas id="canvas"></canvas>
      <!-- 生成二维码 end -->
      <!-- 分享vue-social-share start -->
      <share :config="config"></share>
      <!-- 分享 end -->
      <!-- nextTick用法 start -->
      <div ref="msgDiv">{{msg}}</div>
      <div v-if="msg1">Message got outside $nextTick: {{msg1}}</div>
      <div v-if="msg2">Message got inside $nextTick: {{msg2}}</div>
      <div v-if="msg3">Message got outside $nextTick: {{msg3}}</div>
      <button @click="changeMsg">
        Change the Message
      </button>
      <!-- nextTick用法 end -->
    </template>
    <template>
      <!-- 生命周期、Promise用法 start -->
      <button @click="toggleShow">切换</button>
      <div v-if="isShow"></div>
      <h1>倒计时：<span>{{time}}</span></h1>
      <!-- 生命周期、Promise用法 end -->
    </template>
    <template>
      <!-- 剪切板vue-clipboard2 start -->
      <input type="text" v-model="msg">
      <button type="button"
              v-clipboard:copy = "msg"
              v-clipboard:success = "onCopy"
              v-clipboard:error = "onError"
      >一键复制</button>
      <!-- 剪切板 end -->
    </template>
    <template>
      <!-- 懒加载vue-lazyload、图片查看vue-photo-preview start -->
      <ul>
        <li v-for="(item, index) in imgList" :key="index">
          <img v-lazy="item" src="" alt="" Preview="index" width="500" height="500" style="cursor: pointer;">
        </li>
      </ul>
      <!-- 懒加载、图片查看 end -->
    </template>
  </div>
</template>

<script>
import { Message } from 'element-ui'
import QrCode from 'qrcode'
import QRCode from 'qrcodejs2'
import MyCharts from './demo/MyCharts'
import ECharts from './demo/ECharts'

export default {
  name: 'Demo',
  data () {
    return {
      n1: 0,
      n2: 0,
      reslut: 0,
      opt: '+',
      config: {
        sites: ['qzone', 'qq', 'weibo', 'wechat']
      },
      msg: 'Hello Vue.',
      msg1: '',
      msg2: '',
      msg3: '',
      imgList: [
        'static/img/1.jpg',
        'static/img/2.jpg',
        'static/img/3.jpg',
        'static/img/4.jpg'
      ],
      message: 'Vue的声明周期',
      isShow: false,
      time: '60'
    }
  },
  components: {
    MyCharts,
    ECharts
  },
  // 组件实例被创建, 组件属性计算之前, 如data属性等
  beforeCreate () {
    console.log('beforeCreate')
    // console.group('--- beforeCreate 创建前状态 ---')
    // console.log('%c%s', 'color:red', 'el     : ' + this.$el) // undefined
    // console.log('%c%s', 'color:red', 'data   : ' + this.$data) // undefined
    // console.log('%c%s', 'color:red', 'message: ' + this.message) // 未初始化
  },
  // 组件实例创建完成, 属性已绑定 , 但DOM还未生成, $el属性还不存在
  created () {
    console.log('created')
    this.test().then(function (data) {
      console.log(data)
    })
    // console.group('--- created 创建完成状态 ---')
    // console.log('%c%s', 'color:red', 'el     : ' + this.$el) // undefined
    // console.log('%c%s', 'color:red', 'data   : ' + this.$data) // 已初始化
    // console.log('%c%s', 'color:red', 'message: ' + this.message) // 已初始化
  },
  // 模版编译、挂载之前
  beforeMount () {
    console.log('beforeMount')
    // console.group('--- beforeMount 挂载前状态 ---')
    // console.log('%c%s', 'color:red', 'el     : ' + this.$el) // 已初始化
    // console.log(this.$el) // undefined
    // console.log('%c%s', 'color:red', 'data   : ' + this.$data) // 已初始化
    // console.log('%c%s', 'color:red', 'message: ' + this.message) // 已初始化
  },
  // 模版编译、挂载完成
  mounted () {
    console.log('mounted')
    // console.group('--- mounted 挂载完成状态 ---')
    // console.log('%c%s', 'color:red', 'el     : ' + this.$el) // 已初始化
    // console.log(this.$el) // DOM
    // console.log('%c%s', 'color:red', 'data   : ' + this.$data) // 已初始化
    // console.log('%c%s', 'color:red', 'message: ' + this.message) // 已初始化
    this.qrcode()
    this.qrcode2()
  },
  // 组件更新之前
  beforeUpdate () {
    console.log('beforeUpdate')
    // console.group('--- beforeUpdate 更新前状态 ---')
    // console.log('%c%s', 'color:red', 'el     : ' + this.$el)
    // console.log(this.$el)
    // console.log('%c%s', 'color:red', 'data   : ' + this.$data)
    // console.log('%c%s', 'color:red', 'message: ' + this.message)
  },
  // 组件更新完成
  updated () {
    console.log('updated')
    // console.group('--- updated 更新完成状态 ---')
    // console.log('%c%s', 'color:red', 'el     : ' + this.$el)
    // console.log(this.$el)
    // console.log('%c%s', 'color:red', 'data   : ' + this.$data)
    // console.log('%c%s', 'color:red', 'message: ' + this.message)
  },
  // keep-alive组件被激活时调用
  activated () {
  },
  // keep-alive组件被移除时调用
  deactivated () {
  },
  // 组件销毁之前
  beforeDestroy () {
    console.log('beforeDestroy')
    // console.group('--- beforeDestroy 销毁前状态 ---')
    // console.log('%c%s', 'color:red', 'el     : ' + this.$el)
    // console.log(this.$el)
    // console.log('%c%s', 'color:red', 'data   : ' + this.$data)
    // console.log('%c%s', 'color:red', 'message: ' + this.message)
  },
  // 组件销毁完成
  destroyed () {
    console.log('destroyed')
    // console.group('--- destroyed 销毁完成状态 ---')
    // console.log('%c%s', 'color:red', 'el     : ' + this.$el)
    // console.log(this.$el)
    // console.log('%c%s', 'color:red', 'data   : ' + this.$data)
    // console.log('%c%s', 'color:red', 'message: ' + this.message)
  },
  // 计算属性：有缓存
  computed: {
  },
  // 监听
  watch: {
  },
  // 方法：无缓存
  methods: {
    // nextTick()用法
    changeMsg () {
      this.msg = `Hello world.`
      this.msg1 = this.$refs.msgDiv.innerHTML
      // 异步
      this.$nextTick(() => {
        this.msg2 = this.$refs.msgDiv.innerHTML
      })
      this.msg3 = this.$refs.msgDiv.innerHTML
    },
    toggleShow () {
      this.isShow = !this.isShow
    },
    // Promise用法
    test () {
      let p = new Promise(function (resolve, reject) {
        setTimeout(function () {
          console.log('执行完成')
          resolve('aaa')
        }, 2000)
      })
      return p
    },
    onCopy () {
      Message({
        message: `复制成功`,
        duration: 1500,
        type: 'success'
      })
    },
    onError () {
      Message({
        message: `复制失败,请手动复制`,
        duration: 1500,
        type: 'error'
      })
    },
    // 生成二维码
    qrcode () {
      let qrcode = document.getElementById('canvas')
      QrCode.toCanvas(qrcode, 'http://www.baidu.com', err => {
        if (err) console.error(err)
        console.log('success!')
      })
    },
    // 生成二维码
    qrcode2 () {
      let qrcode = new QRCode('qrcode', {
        width: 100,
        height: 100,
        text: 'http://www.baidu.com'
      })
      console.log(qrcode)
    }
  },
  // 过滤器
  filters: {
  }
}
</script>

<style scoped>

</style>
