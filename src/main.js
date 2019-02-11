import Vue from 'vue'
import App from './App'
import router from './router'
// 解决部分手机点击事件延迟300毫秒问题
import fastClick from 'fastclick'
// 解决不同手机样式不同问题
import './assets/styles/reset.css'
// 解决移动端1像素边框问题， 1px的边框会显示2px
import './assets/styles/border.css'

fastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
