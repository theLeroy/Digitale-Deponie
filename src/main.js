import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false

// Vue.use(moment)

// Global Components
// Vue.component('Page', Page)

// Mixins
// Vue.mixin(validatorMixin)

// Vue.use(VueLazyload)
// or with options
Vue.use(VueLazyload, {
  preLoad: 2,
  error: 'dist/error.png',
  loading: '/img/fico/apple-touch-icon.png',
  attempt: 3
})



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
