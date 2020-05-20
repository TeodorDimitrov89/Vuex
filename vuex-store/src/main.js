import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
import App from './App.vue'

import routes from './routes/routes'

import 'bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'


Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
    routes: routes,
    mode: 'history'
})


new Vue({
    store,
    router,
    render: h => h(App),

}).$mount('#app')
