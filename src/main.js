import Vue from 'vue'
import App from './App.vue'
import vpay from './lib/vpay';
Vue.use(vpay)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
