import Vue from 'vue';
import App from './App';
import router from './router';
import store from './vuex/store';
import axios from 'axios';
import 'lib-flexible/flexible';
import { setDPR, remChange } from './js/remChange';
import globalFunc from './js/commonFunc';
import { Tabbar, TabbarItem, Cell, CellGroup, SwipeCell, Icon, Tab, Tabs, Popup, Button, NavBar, PullRefresh, Panel, Actionsheet,
         Search, Swipe, SwipeItem, Lazyload, Field, Uploader, Picker, CouponCell, CouponList, Collapse, CollapseItem, Loading, List,
         Tag, Card } from 'vant';
import VueClipboards from 'vue-clipboard2'; //复制粘贴
import 'vant/lib/index.css';

Vue.use(VueClipboards,axios);

Vue.use(Tabbar).use(TabbarItem).use(Cell).use(CellGroup).use(SwipeCell).use(Icon).use(Tab).use(Tabs).use(Popup).use(Button).use(NavBar).use(PullRefresh).use(Panel).use(Actionsheet)
   .use(Search).use(Swipe).use(SwipeItem).use(Lazyload).use(Field).use(Uploader).use(Picker).use(CouponCell).use(CouponList).use(Collapse).use(CollapseItem).use(Loading).use(List)
   .use(Tag).use(Card);
// setDPR();
// remChange();

Vue.prototype.COMMONFUNC = globalFunc;  //其中$xx为新命的名。

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
