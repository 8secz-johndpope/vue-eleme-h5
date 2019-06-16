import Vue from 'vue';
import Router from 'vue-router';
import Home from 'view/Home';
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
      path: '/index',
      name: 'homes',
      component: Home,
      meta: {
        keepAlive: false // 不需要缓存
      },
    },
    {
      path: '/recommend',
      name: 'recommend',
      meta: {
        keepAlive: true, // 不需要缓存
      },
      component: (resolve) => require(['view/Recommend'],resolve),
    },
    {
      path: '/addConversation',
      name: 'addConversation',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/AddConversation'],resolve),
    },
    {
      path: '/message',
      name: 'message',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/Message'],resolve),
    },
    {
      path: '/myzone',
      name: 'myzone',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/Myzone'],resolve),
    },

    {
      path: '/userzone',
      name: 'userzone',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/user-common-page/Userzone'],resolve),
    },
    /*
      文档说明 -- 结束
    */
    {
      path: '/addConversation/question',
      name: 'addConversationQuestion',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/document-page/AddConversationQuestion'],resolve),
    },
    // 积分充值说明
    {
      path: '/document/integralRechargeDesc',
      name: 'integralRechargeDesc',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/document-page/IntegralRechargeDesc'],resolve),
    },
    // 充值帮助
    {
      path: '/document/invitationRules',
      name: 'invitationRules',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/document-page/InvitationRules'],resolve),
    },
    // 服务协议及投放要求
    {
      path: '/document/userAgreement',
      name: 'userAgreement',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/document-page/UserAgreement'],resolve),
    },
    // 邀请活动规则
    {
      path: '/document/rechargeHelp',
      name: 'rechargeHelp',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/document-page/RechargeHelp'],resolve),
    },
    /*
      文档说明 -- 结束
    */
    {
      path: '/myfans',
      name: 'myfans',
      meta: {
        keepAlive: true // 需要缓存
      },
      component: (resolve) => require(['view/user-common-page/Myfans'],resolve),
    },
    {
      path: '/myfollows',
      name: 'Myfollows',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/user-common-page/Myfollows'],resolve),
    },
    // 聊天室
    {
      path: '/chat/:id',
      name: 'chat',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/chat-page/Chat'],resolve),
    },
    // 个人用户设置 -- 自己的
    {
      path: '/setting',
      name: 'setting',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/setting-page/Setting'],resolve),
    },
    // 其他用户更多
    {
      path: '/userSetting',
      name: 'userSetting',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/setting-page/UserSetting'],resolve),
    },
    {
      path: '/setting/userinfo',
      name: 'userinfo',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/setting-page/Userinfo'],resolve),
    },
    {
      path: '/setting/mywallet',
      name: 'mywallet',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/setting-page/mywallet-page/Mywallet'],resolve),
    },
    // 购买商品页
    {
      path: '/setting/mywallet/shopping',
      name: 'shopping',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/setting-page/mywallet-page/Shopping'],resolve),
    },
    // 支付订单页
    {
      path: '/setting/mywallet/payment',
      name: 'payment',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/setting-page/mywallet-page/Payment'],resolve),
    },
    // 邀请分享
    {
      path: '/setting/invitation',
      name: 'invitation',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/setting-page/Invitation'],resolve),
    },
    {
      path: '/setting/feedback',
      name: 'feedback',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/setting-page/Feedback'],resolve),
    },
    {
      path: '/setting/contact',
      name: 'contact',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/setting-page/Contact'],resolve),
    },
    // 申请开店
    {
      path: '/setting/applyOpenShop',
      name: 'applyOpenShop',
      meta: {
        keepAlive: true // 需要缓存
      },
      component: (resolve) => require(['view/setting-page/ApplyOpenShop'],resolve),
    },
    // 实名认证
    {
      path: '/setting/certification',
      name: 'certification',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/setting-page/Certification'],resolve),
    },
    // 充值记录
    {
      path: '/setting/mywallet/rechargeRecord',
      name: 'rechargeRecord',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/setting-page/mywallet-page/RechargeRecord'],resolve),
    },
    {
      path: '/login',
      name: 'Login',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/login-page/Login'],resolve),
    },
    {
      path: '/forgot',
      name: 'forgot',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/login-page/Forgot'],resolve),
    },
    {
      path: '/register',
      name: 'Register',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/login-page/Register'],resolve),
    },
    {
      path: '/loginByCheckCode',
      name: 'LoginByCheckCode',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/login-page/LoginByCheckCode'],resolve),
    },
    {
      path: '/result/:id',
      name: 'result',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/search-page/Result'],resolve),
    },
    // 文章列表
    {
      path: '/article/articleList',
      name: 'articleList',
      meta: {
        keepAlive: true // 需要缓存
      },
      component: (resolve) => require(['view/article-page/ArticleList'],resolve),
    },
    {
      path: '/articleDetail/:id',
      name: 'articleDetail',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/article-page/ArticleDetail'],resolve),
    },
    {
      path: '/articleComments/:id',
      name: 'articleComments',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/article-page/ArticleComments'],resolve),
    },
    {
      path: '/addFriends',
      name: 'addFriends',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/user-common-page/AddFriends'],resolve),
    },
    {
      path: '/accusation',
      name: 'accusation',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/accusation-page/Accusation'],resolve),
    },
    {
      path: '/accusation/report/:id',
      name: 'report',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/accusation-page/Report'],resolve),
    },
    {
      path: '/mypraise',
      name: 'mypraise',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/user-common-page/Mypraise'],resolve),
    },
    {
      path: '/mycomments',
      name: 'mycomments',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/user-common-page/Mycomments'],resolve),
    },
    // 回复详情页，定位到被点赞，被评论页
    {
      path: '/replyDetail/:id',
      name: 'replyDetail',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/conversation-page/ReplyDetail'],resolve),
    },
    // 商品橱窗
    {
      path: '/showcase/userId/:id',
      name: 'showcase',
      meta: {
        keepAlive: true // 不需要缓存
      },
      component: (resolve) => require(['view/shop-page/Showcase'],resolve),
    },
    // 商品详情
    {
      path: '/commodity/commodityId/:id',
      name: 'commodity',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/shop-page/Commodity'],resolve),
    },
    // 新增或者修改商品
    {
      path: '/addOrUpdateCommodity/commodityId/:id',
      name: 'addOrUpdateCommodity',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/shop-page/AddOrUpdateCommodity'],resolve),
    },
    // 速推+上热门
    {
      path: '/extension/workId/:id',
      name: 'extension',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/shop-page/Extension'],resolve),
    },
    // 店铺信息
    {
      path: '/shopInfo/shopId/:id',
      name: 'shopInfo',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/shop-page/ShopInfo'],resolve),
    },

    /*
      AI导师 -- 开始
    */
    {
      path: '/AITeaching/AITeachingChatList',
      name: 'AITeachingChatList',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/AITeaching-page/AITeachingChatList'],resolve),
    },
    {
      path: '/AITeaching/AITeachingChatList/AITeachingChat/:id',
      name: 'AITeachingChat',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/AITeaching-page/AITeachingChat'],resolve),
    },
    /*
      AI导师 -- 结束
    */

    /*
      情感百科 -- 开始
    */
    {
      path: '/encyclopedias/encyclopediasList',
      name: 'encyclopediasList',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/Encyclopedias-page/EncyclopediasList'],resolve),
    },
    {
      path: '/encyclopedias/classify/:id',
      name: 'encyclopediasClassification',
      meta: {
        keepAlive: true // 需要缓存
      },
      component: (resolve) => require(['view/Encyclopedias-page/EncyclopediasClassification'],resolve),
    },
    {
      path: '/encyclopedias/article/:id',
      name: 'encyclopedias',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/Encyclopedias-page/Encyclopedias'],resolve),
    },
    /*
      情感百科 -- 结束
    */

    /*
      落地页 -- 开始
    */
    {
      path: '/activity/inviteToShare',
      name: 'inviteToShare',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/activity-page/forever-page/InviteToShare'],resolve),
    },
    /*
      落地页 -- 结束
    */

    /*
      仿微信、支付宝支付页 -- 开始
    */
   // 工具列表
    {
      path: '/toolPage/ToolList',
      name: 'toolList',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/tool-page/ToolList'],resolve),
    },
    // 输入设置
    {
      path: '/toolPage/InputSetting/:routerLink',
      name: 'inputSetting',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/tool-page/InputSetting'],resolve),
    },
    // 微信支付
    {
      path: '/toolPage/wechatPayment/:amount',
      name: 'wechatPayment',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/tool-page/WechatPayment'],resolve),
    },
    // 微信红包
    {
      path: '/toolPage/wechatRedPacket/:amount',
      name: 'wechatRedPacket',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/tool-page/WechatRedPacket'],resolve),
    },
    // 微信零钱
    {
      path: '/toolPage/wechatChange/:amount',
      name: 'wechatChange',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/tool-page/WechatChange'],resolve),
    },
    // 微信转账
    {
      path: '/toolPage/wechatTransfer/:amount',
      name: 'wechatTransfer',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/tool-page/WechatTransfer'],resolve),
    },
    /*
      仿微信、支付宝支付页 -- 结束
    */

    /*
      话术库 -- 开始
    */
    {
      path: '/talkingLibrary/index',
      name: 'talkingLibrary',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/talkingLibrary-page/Index'],resolve),
    },
    /*
      话术库 -- 结束
    */

    /*
      帖子 微博 -- 开始
    */
    {
      path: '/post/postClassify/:containerid',
      name: 'postClassify',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/post-page/PostClassify'],resolve),
    },
    /*
      帖子 微博 -- 结束
    */
  ]
});
