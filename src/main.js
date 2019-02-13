import Vue from 'vue';
import App from './App';
import router from './router';
import store from './vuex/store';
import 'lib-flexible/flexible';
import { setDPR, remChange } from './js/remChange';
import globalFunc from './js/commonFunc';
import { Tabbar, TabbarItem, Cell, CellGroup, SwipeCell, Icon, Tab, Tabs, Popup, Button, NavBar, PullRefresh, Panel, Actionsheet } from 'vant';
import 'vant/lib/index.css';

Vue.use(Tabbar).use(TabbarItem).use(Cell).use(CellGroup).use(SwipeCell).use(Icon).use(Tab).use(Tabs).use(Popup).use(Button).use(NavBar).use(PullRefresh).use(Panel).use(Actionsheet);
setDPR();
remChange();

Vue.prototype.COMMONFUNC = globalFunc;  //其中$xx为新命的名。

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
