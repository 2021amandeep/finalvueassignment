import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
import Home from './components/Home.vue';
import Dashboard from './components/Dashboard.vue';
import Register from './components/Register.vue';
import Userdetails from './components/Userdetails.vue';
import Store from './store'

Vue.use(VueRouter);
const routes = [
  { path: '/', component: Home },
  { path: '/dashboard', component: Dashboard },
  { path: '/register', component: Register },
  { path: '/userdetail', component: Userdetails }
]
const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  store: Store,
  router: router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
