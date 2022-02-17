import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'lib-flexible'
import Vant from 'vant'
import 'vant/lib/index.css'
import'./assets/css/base.css'
import moment from 'moment'
import 'moment/locale/zh-cn'
import api from './api/index'

moment.locale('zh-cn');  
Vue.use(Vant).use(moment);
Vue.config.productionTip = false
Object.defineProperty(Vue.prototype, '$api', {value: api})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
