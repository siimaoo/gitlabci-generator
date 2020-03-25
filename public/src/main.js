import Vue from 'vue'
import App from './App.vue'
import VueMask from 'v-mask'

Vue.use(VueMask);

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
