// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// 复制
import VueClipboard from 'vue-clipboard2'
// 图片查看器
import Preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
// 懒加载
import VueLazyLoad from 'vue-lazyload'
// 分享
import Share from 'vue-social-share'
import 'vue-social-share/dist/client.css'
// ElemntUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// Mint-UI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// 自定义弹窗插件
import Toast from './plugin/toast'

// Vue.config.silent = true // 取消Vue所有的日志与警告
// Vue.config.devtools = true // 配置是否允许vue-devtools检查代码 生产版本设为true可以启用检查

Vue.config.productionTip = false
Vue.use(VueClipboard)
Vue.use(Preview)
Vue.use(VueLazyLoad, {
  preLoad: 1.3, // 预加载高度比例
  error: 'static/img/error.jpg', // 图片路径错误时加载图片
  loading: 'static/img/load.jpg', // 预加载图片
  attempt: 1 // 尝试加载图片数量
})
Vue.use(Share)
Vue.use(ElementUI)
Vue.use(MintUI)
Vue.use(Toast)

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

// 处理页面滚动条位置
router.afterEach(function (to, from) {
  window.scrollTo(0, 0)
  document.title = to.meta.title
})
