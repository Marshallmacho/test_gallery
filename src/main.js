import Vue from 'vue'
import App from './App.vue'
import router from './routes/router'
import store from './_store/store'
import VeeValidate from 'vee-validate'

Vue.config.productionTip = false
Vue.use(VeeValidate)

import { configureFakeBackend } from './_helpers';
configureFakeBackend();

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
