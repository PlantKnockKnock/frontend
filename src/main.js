import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueApexCharts from 'vue-apexcharts'

Vue.config.productionTip = false


Vue.use(require('vue-pusher'), {
  api_key: 'da9af6249c692cb02284',
  options: {
      cluster: 'ap3',
      encrypted: true,
  }
})
Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
