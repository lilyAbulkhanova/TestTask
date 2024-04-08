import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import VueMaterial from 'vue-material'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ru-RU'
import axios from 'axios';

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueMaterial)
Vue.prototype.$axios = axios
Vue.use(ElementUI, { locale })

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
