import Vue from 'vue';
import App from './App';
import router from './router';
import store from './vuex/store';
import axios from 'axios';
import 'lib-flexible/flexible';
// import { setDPR, remChange } from './js/remChange';
import { Tabbar, TabbarItem, Cell, CellGroup, SwipeCell, Icon, Tab, Tabs, Popup, Button, NavBar, PullRefresh, Panel, Actionsheet,
         Search, Swipe, SwipeItem, Lazyload, Field, Uploader, Picker, CouponCell, CouponList, Collapse, CollapseItem, Loading, List,
         Tag, Card, SubmitBar, NoticeBar, RadioGroup, Radio, Switch, Area, Checkbox, CheckboxGroup, Progress } from 'vant';
import VueClipboards from 'vue-clipboard2'; //复制粘贴
import 'vant/lib/index.css';
// import 'font-awesome/css/font-awesome.min.css';

import globalFunc from './js/commonFunc';
import instance_ from './api/index';
Vue.prototype.instance = instance_;  //axios实例
Vue.prototype.COMMONFUNC = globalFunc;  //其中$xx为新命的名。

// 引入视频
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)

Vue.use(VueClipboards,axios);

Vue.use(Tabbar).use(TabbarItem).use(Cell).use(CellGroup).use(SwipeCell).use(Icon).use(Tab).use(Tabs).use(Popup).use(Button).use(NavBar).use(PullRefresh).use(Panel).use(Actionsheet)
   .use(Search).use(Swipe).use(SwipeItem).use(Lazyload).use(Field).use(Uploader).use(Picker).use(CouponCell).use(CouponList).use(Collapse).use(CollapseItem).use(Loading).use(List)
   .use(Tag).use(Card).use(SubmitBar).use(NoticeBar).use(RadioGroup).use(Radio).use(Switch).use(Area).use(Checkbox).use(CheckboxGroup).use(Progress);
// setDPR();
// remChange();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
