import Vue from 'vue';
import Router from 'vue-router';
import Home from 'components/Home';
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
      component: (resolve) => require(['../components/reference_components/Homepage'],resolve),
    },
    {
      path: '/shop',
      name: 'shop',
      component: (resolve) => require(['../components/reference_components/Shop'],resolve),
    },
    {
      path: '/order',
      name: 'order',
      component: (resolve) => require(['../components/reference_components/Order'],resolve),
    },
    {
      path: '/myzone',
      name: 'myzone',
      component: (resolve) => require(['../components/Myzone'],resolve),
    },
    {
      path: '/userzone',
      name: 'userzone',
      component: (resolve) => require(['../components/Userzone'],resolve),
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
      path: '/myfollows',
      name: 'Myfollows',
      component: (resolve) => require(['../components/Myfollows'],resolve),
    },
    {
      path: '/message',
      name: 'message',
      component: (resolve) => require(['../components/Message'],resolve),
    },
    // 个人用户设置 -- 自己的
    {
      path: '/setting',
      name: 'setting',
      component: (resolve) => require(['../components/Setting'],resolve),
    },
    // 其他用户更多
    {
      path: '/userSetting',
      name: 'userSetting',
      component: (resolve) => require(['../components/UserSetting'],resolve),
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
      component: (resolve) => require(['../components/reference_components/Business'],resolve),
    },
    {
      path: '/search/:keyword',
      name: 'Search',
      component: (resolve) => require(['../components/reference_components/Search'],resolve),
    },
    {
      path: '/login',
      name: 'Login',
      component: (resolve) => require(['../components/login_components/Login'],resolve),
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
    {
      path: '/articleDetail/:id',
      name: 'articleDetail',
      component: (resolve) => require(['../components/common_components/ArticleDetail'],resolve),
    },
    {
      path: '/addFriends',
      name: 'addFriends',
      component: (resolve) => require(['../components/AddFriends'],resolve),
    },
    {
      path: '/accusation',
      name: 'accusation',
      component: (resolve) => require(['../components/Accusation'],resolve),
    },
    {
      path: '/accusation/report/:id',
      name: 'report',
      component: (resolve) => require(['../components/child_components/Accusation_components/Report'],resolve),
    },
    {
      path: '/mypraise',
      name: 'mypraise',
      component: (resolve) => require(['../components/Mypraise'],resolve),
    },
    {
      path: '/mycomments',
      name: 'mycomments',
      component: (resolve) => require(['../components/Mycomments'],resolve),
    },
  ]
});
