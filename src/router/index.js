import Vue from 'vue';
import Router from 'vue-router';
import Homepage from 'components/Homepage';
import Shop from 'components/Shop';
import Order from 'components/Order';
import Myzone from 'components/Myzone';
import Recommend from 'components/Recommend';
import Business from 'components/Business';
import Login from 'components/Login';
import Search from 'components/Search';
import Myfans from 'components/Myfans';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: Homepage
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/myzone',
      name: 'myzone',
      component: Myzone
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: Recommend
    },
    {
      path: '/myfans',
      name: 'myfans',
      component: Myfans
    },
    {
      path: '/business/:id',
      name: 'business',
      component: Business
    },
    {
      path: '/search/:keyword',
      name: 'Search',
      component: Search
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
});
