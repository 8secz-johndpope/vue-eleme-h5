import Vue from 'vue';
import Router from 'vue-router';
import Home from 'components/Home';
import Homepage from 'components/Homepage';
import Shop from 'components/Shop';
import Order from 'components/Order';
import Myzone from 'components/Myzone';
import Recommend from 'components/Recommend';
import Business from 'components/Business';
import Login from 'components/Login';
import Search from 'components/Search';
import Myfans from 'components/Myfans';
import Message from 'components/Message';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'homes',
      component: Home
    },
    {
      path: '/homepage',
      name: 'homepage',
      component: (resolve) => require(['../components/Homepage'],resolve),
    },
    {
      path: '/shop',
      name: 'shop',
      component: (resolve) => require(['../components/Shop'],resolve),
    },
    {
      path: '/order',
      name: 'order',
      component: (resolve) => require(['../components/Order'],resolve),
    },
    {
      path: '/myzone',
      name: 'myzone',
      component: (resolve) => require(['../components/Myzone'],resolve),
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: (resolve) => require(['../components/Recommend'],resolve),
    },
    {
      path: '/myfans',
      name: 'myfans',
      component: (resolve) => require(['../components/Myfans'],resolve),
    },
    {
      path: '/message',
      name: 'message',
      component: (resolve) => require(['../components/Message'],resolve),
    },
    {
      path: '/setting',
      name: 'setting',
      component: (resolve) => require(['../components/Setting'],resolve),
    },
    {
      path: '/setting/userinfo',
      name: 'userinfo',
      component: (resolve) => require(['../components/child_components/Setting_components/Userinfo'],resolve),
    },
    {
      path: '/setting/mywallet',
      name: 'mywallet',
      component: (resolve) => require(['../components/child_components/Setting_components/Mywallet'],resolve),
    },
    {
      path: '/setting/feedback',
      name: 'feedback',
      component: (resolve) => require(['../components/child_components/Setting_components/Feedback'],resolve),
    },
    {
      path: '/setting/contact',
      name: 'contact',
      component: (resolve) => require(['../components/child_components/Setting_components/Contact'],resolve),
    },
    {
      path: '/business/:id',
      name: 'business',
      component: (resolve) => require(['../components/Business'],resolve),
    },
    {
      path: '/search/:keyword',
      name: 'Search',
      component: (resolve) => require(['../components/Search'],resolve),
    },
    {
      path: '/login',
      name: 'Login',
      component: (resolve) => require(['../components/Login'],resolve),
    },
    {
      path: '/forgot',
      name: 'Forgot',
      component: (resolve) => require(['../components/login_components/Forgot'],resolve),
    },
    {
      path: '/register',
      name: 'Register',
      component: (resolve) => require(['../components/login_components/Register'],resolve),
    },
    {
      path: '/loginByCheckCode',
      name: 'LoginByCheckCode',
      component: (resolve) => require(['../components/login_components/LoginByCheckCode'],resolve),
    },
    {
      path: '/result/:id',
      name: 'result',
      component: (resolve) => require(['../components/common_components/Result'],resolve),
    },
  ]
});
