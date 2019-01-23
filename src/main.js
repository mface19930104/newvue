// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import { NavBar } from 'vant'
// import store from './store'

import { Tabbar, TabbarItem } from 'vant'
import { Swipe, SwipeItem } from 'vant'
import { Switch } from 'vant';
import axios from 'axios'
import VueResours from 'vue-resource'
import { Lazyload } from 'vant';
import { Row, Col } from 'vant';
import { Card } from 'vant';
import { Button } from 'vant';
import { Tab, Tabs } from 'vant';
import { Stepper } from 'vant';
import store from './store/store.js'

Vue.use(Row).use(Col);
Vue.use(Stepper);
Vue.prototype.$axios = axios;
axios.defaults.baseURL='http://localhost:5000/'
Vue.use(VueResours)
Vue.use(Lazyload)
Vue.use(NavBar)
Vue.use(Swipe).use(SwipeItem);
Vue.use(Tabbar).use(TabbarItem);
Vue.use(Card);
Vue.use(Button);
Vue.use(Tab).use(Tabs);
Vue.use(Lazyload);
Vue.use(Switch);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  store,
  components: { App },
  template: '<App/>'
})
