import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App'
import router from './router'
// 解决部分手机点击事件延迟300毫秒问题
import fastClick from 'fastclick'
// 解决不同手机样式不同问题
import 'styles/reset.css'
// 解决移动端1像素边框问题， 1px的边框会显示2px
import 'styles/border.css'
// 引入iconfont
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
