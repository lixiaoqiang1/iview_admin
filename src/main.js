// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'    // 使用 CSS
import '@/assets/conmon/bootstrap/css/bootstrap.min.css'//引用bootstrap

//v-charts
import VCharts from 'v-charts'
Vue.use(VCharts)

//引用axios
import axios from 'axios'
Vue.prototype.axios = axios


// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts 

//引用自建的mock文件
require('./mock');

Vue.use(iView)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
