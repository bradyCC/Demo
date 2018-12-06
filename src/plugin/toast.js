/**
 * Created by brady on 2018/12/6.
 */
let Toast = {}
Toast.install = (Vue, options) => {
  let opt = {
    defaultType: 'bottom',
    duration: '2500'
  }
  for (let property in options) {
    opt[property] = options[property]
  }
  Vue.prototype.$toast = (tips, type, duration) => {
    if (type) {
      opt.defaultType = type
      opt.duration = duration
    }
    if (document.getElementsByClassName('vue-toast').length) {
      return
    }
    let ToastTpl = Vue.extend({
      template: '<div class="vue-toast"><div class="vue-box toast-' + type + '">' + tips + '</div></div>'
    })
    let tpl = new ToastTpl().$mount().$el
    document.body.appendChild(tpl)
    setTimeout(function () {
      document.body.removeChild(tpl)
    }, duration)
  }
  ['bottom', 'center', 'top'].forEach(type => {
    Vue.prototype.$toast[type] = (tips) => {
      return Vue.prototype.$toast(tips, type)
    }
  })
}

module.exports = Toast
