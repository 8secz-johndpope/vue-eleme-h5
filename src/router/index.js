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
      redirect: '/index',
      meta: {
        keepAlive: false // 不需要缓存
      },
    },
    {
      path: '/index',
      name: 'homes',
      component: Home,
      meta: {
        keepAlive: false // 不需要缓存
      },
    },
    {
      path: '/homepage',
      name: 'homepage',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['../components/reference_components/Homepage'],resolve),
    },
    {
      path: '/shop',
      name: 'shop',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['../components/reference_components/Shop'],resolve),
    },
    {
      path: '/order',
      name: 'order',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['../components/reference_components/Order'],resolve),
    },
    {
      path: '/myzone',
      name: 'myzone',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['../components/Myzone'],resolve),
    },
    {
      path: '/userzone',
      name: 'userzone',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['../components/Userzone'],resolve),
    },
    {
      path: '/addConversation',
      name: 'addConversation',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['../components/AddConversation'],resolve),
    },
    {
      path: '/addConversation/question',
      name: 'addConversationQuestion',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['../components/child_components/AddConversation_components/AddConversationQuestion'],resolve),
    },
    {
      path: '/recommend',
      name: 'recommend',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['../components/Recommend'],resolve),
    },
    {
      path: '/myfans',
      name: 'myfans',
      meta: {
        keepAlive: true // 需要缓存
      },
      component: (resolve) => require(['../components/Myfans'],resolve),
    },
    {
      path: '/myfollows',
      name: 'Myfollows',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['../components/Myfollows'],resolve),
    },
    {
      path: '/message',
      name: 'message',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['../components/Message'],resolve),
    },
    // 聊天室
    {
      path: '/chat/:id',
      name: 'chat',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['../components/common_components/Chat'],resolve),
    },
    // 个人用户设置 -- 自己的
    {
      path: '/setting',
      name: 'setting',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['../components/Setting'],resolve),
    },
    // 其他用户更多
    {
      path: '/userSetting',
      name: 'userSetting',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['../components/UserSetting'],resolve),
    },
    {
      path: '/setting/userinfo',
      name: 'userinfo',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['../components/child_components/Setting_components/Userinfo'],resolve),
    },
    {
      path: '/setting/mywallet',
      name: 'mywallet',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['../components/child_components/Setting_components/Mywallet'],resolve),
    },
    // 购买商品页
    {
      path: '/setting/shopping',
      name: 'shopping',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['../components/child_components/Setting_components/Shopping'],resolve),
    },
    // 支付订单页
    {
      path: '/setting/payment',
      name: 'payment',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['../components/child_components/Setting_components/Payment'],resolve),
    },
    // 邀请分享
    {
      path: '/setting/invitation',
      name: 'invitation',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['../components/child_components/Setting_components/Invitation'],resolve),
    },
    {
      path: '/setting/feedback',
      name: 'feedback',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['../components/child_components/Setting_components/Feedback'],resolve),
    },
    {
      path: '/setting/contact',
      name: 'contact',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['../components/child_components/Setting_components/Contact'],resolve),
    },
    // 申请开店
    {
      path: '/setting/applyOpenShop',
      name: 'applyOpenShop',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['../components/child_components/Setting_components/ApplyOpenShop'],resolve),
    },
    // 实名认证
    {
      path: '/setting/certification',
      name: 'certification',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['../components/child_components/Setting_components/Certification'],resolve),
    },
    {
      path: '/business/:id',
      name: 'business',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['../components/reference_components/Business'],resolve),
    },
    {
      path: '/search/:keyword',
      name: 'Search',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['../components/reference_components/Search'],resolve),
    },
    {
      path: '/login',
      name: 'Login',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['../components/login_components/Login'],resolve),
    },
    {
      path: '/forgot',
      name: 'Forgot',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['../components/login_components/Forgot'],resolve),
    },
    {
      path: '/register',
      name: 'Register',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['../components/login_components/Register'],resolve),
    },
    {
      path: '/loginByCheckCode',
      name: 'LoginByCheckCode',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['../components/login_components/LoginByCheckCode'],resolve),
    },
    {
      path: '/result/:id',
      name: 'result',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['../components/common_components/Result'],resolve),
    },
    {
      path: '/articleDetail/:id',
      name: 'articleDetail',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['../components/common_components/ArticleDetail'],resolve),
    },
    {
      path: '/articleComments/:id',
      name: 'articleComments',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['../components/common_components/ArticleComments'],resolve),
    },
    {
      path: '/addFriends',
      name: 'addFriends',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['../components/AddFriends'],resolve),
    },
    {
      path: '/accusation',
      name: 'accusation',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['../components/Accusation'],resolve),
    },
    {
      path: '/accusation/report/:id',
      name: 'report',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['../components/child_components/Accusation_components/Report'],resolve),
    },
    {
      path: '/mypraise',
      name: 'mypraise',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['../components/Mypraise'],resolve),
    },
    {
      path: '/mycomments',
      name: 'mycomments',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['../components/Mycomments'],resolve),
    },
    // 回复详情页，定位到被点赞，被评论页
    {
      path: '/replyDetail/:id',
      name: 'replyDetail',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['../components/ReplyDetail'],resolve),
    },
    // 商品橱窗
    {
      path: '/showcase/userId/:id',
      name: 'showcase',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['../components/child_components/Conversation_components/Showcase'],resolve),
    },
    // 商品详情
    {
      path: '/commodity/commodityId/:id',
      name: 'commodity',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['../components/child_components/Conversation_components/Commodity'],resolve),
    },
    // 速推+上热门
    {
      path: '/extension/workId/:id',
      name: 'extension',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['../components/child_components/Conversation_components/Extension'],resolve),
    },
    /*
      落地页 -- 开始
    */
    {
      path: '/activity/inviteToShare',
      name: 'inviteToShare',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['../components/landingPage_components/InviteToShare'],resolve),
    },
    /*
      落地页 -- 结束
    */
  ]
});
