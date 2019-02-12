import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMoment from 'vue-moment'
import moment from 'moment-timezone'
import axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.$http = axios
 
Vue.use(VueMoment, {
    moment,
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
