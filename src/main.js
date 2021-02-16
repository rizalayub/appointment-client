import Vue from 'vue'
import { BootstrapVue, BootstrapVueIcons  } from 'bootstrap-vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false

Vue.use(BootstrapVue)

Vue.use(BootstrapVueIcons)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
