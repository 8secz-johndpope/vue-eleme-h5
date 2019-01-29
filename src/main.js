import Vue from 'vue';
import App from './App';
import router from './router';
import store from './vuex/store';
import 'lib-flexible/flexible';
import { setDPR, remChange } from './js/remChange';
import { Tabbar, TabbarItem, Cell, CellGroup, SwipeCell, Icon, Tab, Tabs } from 'vant';
import 'vant/lib/index.css';

Vue.use(Tabbar).use(TabbarItem).use(Cell).use(CellGroup).use(SwipeCell).use(Icon).use(Tab).use(Tabs);
setDPR();
remChange();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
