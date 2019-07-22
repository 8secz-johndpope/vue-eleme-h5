import Vue from 'vue';
import Router from 'vue-router';
import Home from 'view/Home';
Vue.use(Router);

export default new Router({
  scrollBehavior(to,from,savePosition){ // 在点击浏览器的“前进/后退”，或者切换导航的时候触发。
    // to：要进入的目标路由对象，到哪里去  from：离开的路由对象，哪里来 savePosition：会记录滚动条的坐标，点击前进/后退的时候记录值{x:?,y:?}
    if(savePosition) {
      return savePosition;
    }else{
      return {x:0,y:0}
    }
  },
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
      name: 'search',
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
        keepAlive: true, // 需要缓存
      },
      component: (resolve) => require(['view/Recommend'],resolve),
    },
    // 发微撩
    {
      path: '/publishPost',
      name: 'publishPost',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/PublishPost'],resolve),
    },
    // 转发微撩
    {
      path: '/publish/retransmission/:postId',
      name: 'retransmission',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/publish-page/Retransmission'],resolve),
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
      name: 'myzone', // 我的用户中心
      meta: {
        keepAlive: true // 需要缓存
      },
      component: (resolve) => require(['view/Myzone'],resolve),
    },
    {
      path: '/otherUser/userzone/:userId',
      name: 'userzone',   // 他人用户中心
      meta: {
        keepAlive: true // 需要缓存
      },
      component: (resolve) => require(['view/user-common-page/Userzone'],resolve),
    },
    /*
      文档说明 -- 开始
    */
    {
      path: '/document/goldCoinRechargeDesc',
      name: 'goldCoinRechargeDesc', // 金币充值说明
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/document-page/GoldCoinRechargeDesc'],resolve),
    },
    {
      path: '/document/invitationRules',
      name: 'invitationRules',  // 充值帮助
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/document-page/InvitationRules'],resolve),
    },
    {
      path: '/document/userAgreement',
      name: 'userAgreement',  // “微撩”用户服务协议
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/document-page/UserAgreement'],resolve),
    },
    {
      path: '/document/privacyPolicy',
      name: 'privacyPolicy',  // 隐私政策
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/document-page/PrivacyPolicy'],resolve),
    },
    {
      path: '/document/extendRequirement',
      name: 'extendRequirement',  // 投放要求
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/document-page/ExtendRequirement'],resolve),
    },
    {
      path: '/document/rechargeHelp',
      name: 'rechargeHelp', // 邀请活动规则
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/document-page/RechargeHelp'],resolve),
    },
    {
      path: '/document/transactionDisputes',
      name: 'transactionDisputes', // 卖家常见问题，处理争议
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/document-page/TransactionDisputes'],resolve),
    },
    {
      path: '/document/marginTreaty',
      name: 'marginTreaty', // 保证金条约
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/document-page/MarginTreaty'],resolve),
    },
    {
      path: '/document/bondDesc',
      name: 'bondDesc', // 保证金说明
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/document-page/BondDesc'],resolve),
    },
    {
      path: '/document/extendDesc',
      name: 'extendDesc', // 速推常见问题
      meta: {
        keepAlive: true // 需要缓存
      },
      component: (resolve) => require(['view/document-page/ExtendDesc'],resolve),
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
      name: 'myfollows',
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
    /*
      个人中心页 -- 开始
    */
    {
      path: '/personalCenter/index',
      name: 'personalCenter',  // 个人用户中心 -- 首页
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/person-page/PersonalCenter'],resolve),
    },
    {
      path: '/otherUser/userSetting/:userId',
      name: 'userSetting',     // 其他用户更多
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/person-page/UserSetting'],resolve),
    },
    {
      path: '/personalCenter/userinfo',
      name: 'userinfo',  // 个人用户中心 -- 用户个人资料
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/person-page/Userinfo'],resolve),
    },
    {
      path: '/personalCenter/mywallet/index',
      name: 'mywallet', // 个人用户中心 -- 钱包首页
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/person-page/mywallet-page/Mywallet'],resolve),
    },
    {
      path: '/personalCenter/mywallet/buyCoin',
      name: 'buyCoin',  // 个人用户中心 -- 购买金币
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/person-page/mywallet-page/BuyCoin'],resolve),
    },
    {
      path: '/personalCenter/mywallet/rechargeRecord',
      name: 'rechargeRecord',  // 个人用户中心 -- 充值记录
      meta: {
        keepAlive: true // 需要缓存
      },
      component: (resolve) => require(['view/person-page/mywallet-page/RechargeRecord'],resolve),
    },
    {
      path: '/personalCenter/mywallet/rechargeRecord/detail/:orderId',
      name: 'rechargeRecordDetail',  // 个人用户中心 -- 充值记录详情
      meta: {
        keepAlive: true // 需要缓存
      },
      component: (resolve) => require(['view/person-page/mywallet-page/rechargeRecordDetail'],resolve),
    },
    {
      path: '/personalCenter/setting/index',
      name: 'setting', // 个人用户中心 -- 设置页
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/person-page/setting-page/Setting'],resolve),
    },
    {
      path: '/personalCenter/setting/invitation',
      name: 'invitation', // 邀请分享
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/person-page/setting-page/Invitation'],resolve),
    },
    {
      path: '/personalCenter/setting/feedback',
      name: 'feedback', // 反馈建议
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/person-page/setting-page/Feedback'],resolve),
    },
    {
      path: '/personalCenter/setting/contact',
      name: 'contact',  // 联系我们
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/person-page/setting-page/Contact'],resolve),
    },
    {
      path: '/personalCenter/setting/applyOpenShop',
      name: 'applyOpenShop',  // 申请开店
      meta: {
        keepAlive: true // 需要缓存
      },
      component: (resolve) => require(['view/person-page/setting-page/ApplyOpenShop'],resolve),
    },
    {
      path: '/personalCenter/setting/certification',
      name: 'certification',   // 实名认证
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/person-page/setting-page/Certification'],resolve),
    },
    {
      path: '/personalCenter/setting/officialCertification',
      name: 'officialCertification',   // 官方认证
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/person-page/setting-page/OfficialCertification'],resolve),
    },
    {
      path: '/personalCenter/setting/receivingAddress/:userId',
      name: 'receivingAddress',  // 地址列表
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/person-page/setting-page/ReceivingAddress'],resolve),
    },
    {
      path: '/personalCenter/setting/addorUpAddress',
      name: 'addorUpAddress',  // 新增或修改地址
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/person-page/setting-page/AddorUpAddress'],resolve),
    },
    {
      path: '/personalCenter/extensionOrderManage/index',
      name: 'extensionOrderManage', // 速推订单管理 -- 首页
      meta: {
        keepAlive: true // 需要缓存
      },
      component: (resolve) => require(['view/person-page/extensionOrderManage/Index'],resolve),
    },
    {
      path: '/personalCenter/extensionOrderManage/detail/:orderId',
      name: 'extensionOrdeDetail', // 速推订单管理 -- 详情
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/person-page/extensionOrderManage/Detail'],resolve),
    },
    /*
      个人中心页 -- 结束
    */
    /*
      支付页 -- 开始
    */
    {
      path: '/payment/:orderId',
      name: 'payment',    // 支付订单页
      meta: {
        keepAlive: false // 需要缓存
      },
      component: (resolve) => require(['view/payment-page/Payment'],resolve),
    },
    {
      path: '/payment/result/:orderId',
      name: 'paymentResult',    // 支付订单结果
      meta: {
        keepAlive: false // 需要缓存
      },
      component: (resolve) => require(['view/payment-page/PaymentResult'],resolve),
    },
    /*
      支付页 -- 结束
    */
    {
      path: '/login',
      name: 'login',
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
      name: 'register',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/login-page/Register'],resolve),
    },
    {
      path: '/loginByCheckCode',
      name: 'loginByCheckCode',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/login-page/LoginByCheckCode'],resolve),
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
    // 商品橱窗
    {
      path: '/showcase/index/:shopId',
      name: 'showcase',
      meta: {
        keepAlive: true // 不需要缓存
      },
      component: (resolve) => require(['view/showcase-page/Showcase'],resolve),
    },
    {
      path: '/commodity/index/:id',
      name: 'commodity',  // 商品详情
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/showcase-page/Commodity'],resolve),
    },
    {
      path: '/extension/workId/:id',
      name: 'extension',  // 速推+上热门
      meta: {
        keepAlive: true // 需要缓存
      },
      component: (resolve) => require(['view/showcase-page/Extension'],resolve),
    },
    {
      path: '/showcase/shoppingAssistant',
      name: 'shoppingAssistant',  // 购物助手
      meta: {
        keepAlive: true // 需要缓存
      },
      component: (resolve) => require(['view/showcase-page/ShoppingAssistant'],resolve),
    },
    {
      path: '/showcase/goodsRanking',
      name: 'goodsRanking',  // 好物榜
      meta: {
        keepAlive: true // 需要缓存
      },
      component: (resolve) => require(['view/showcase-page/GoodsRanking'],resolve),
    },
    {
      path: '/showcase/showcaseTools/:showcaseId',
      name: 'showcaseTools',  // 电商工具箱
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/showcase-page/ShowcaseTools'],resolve),
    },
    {
      path: '/showcase/showcaseTools/goodsManage/:showcaseId',
      name: 'goodsManage',  // 电商工具箱 -- 商品管理
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/showcase-page/showcaseTools/GoodsManage'],resolve),
    },
    {
      path: '/showcase/showcaseTools/addOrUpdateCommodity/:showcaseId',
      name: 'addOrUpdateCommodity',  // 电商工具箱 -- 商品管理 -- 新增或者修改商品
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/showcase-page/showcaseTools/AddOrUpdateCommodity'],resolve),
    },
    {
      path: '/showcase/showcaseTools/showcaseInfo/:showcaseId',
      name: 'showcaseInfo', // 电商工具箱 -- 橱窗信息
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/showcase-page/showcaseTools/ShowcaseInfo'],resolve),
    },
    {
      path: '/showcase/showcaseTools/dataAnalysis/:showcaseId',
      name: 'dataAnalysis', // 电商工具箱 -- 数据分析
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/showcase-page/showcaseTools/DataAnalysis'],resolve),
    },
    {
      path: '/showcase/showcaseTools/welfareSociety/:showcaseId',
      name: 'welfareSociety', // 电商工具箱 -- 福利社
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/showcase-page/showcaseTools/WelfareSociety'],resolve),
    },
    {
      path: '/showcase/showcaseTools/showcaseRanking/:showcaseId',
      name: 'showcaseRanking', // 电商工具箱 -- 橱窗达人榜
      meta: {
        keepAlive: true // 需要缓存
      },
      component: (resolve) => require(['view/showcase-page/showcaseTools/ShowcaseRanking'],resolve),
    },
    {
      path: '/showcase/showcaseTools/showcaseMoreSetting/:showcaseId',
      name: 'showcaseMoreSetting', // 电商工具箱 -- 更多设置
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/showcase-page/showcaseTools/ShowcaseMoreSetting'],resolve),
    },
    {
      path: '/showcase/showcaseTools/showcaseMoreSetting/bond/:showcaseId',
      name: 'bond', // 电商工具箱 -- 更多设置 -- 保证金
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/showcase-page/showcaseTools/ShowcaseMoreSetting/Bond'],resolve),
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
      component: (resolve) => require(['view/encyclopedias-page/EncyclopediasList'],resolve),
    },
    {
      path: '/encyclopedias/classify/:id',
      name: 'encyclopediasClassification',
      meta: {
        keepAlive: true // 需要缓存
      },
      component: (resolve) => require(['view/encyclopedias-page/EncyclopediasClassification'],resolve),
    },
    {
      path: '/encyclopedias/article/:id',
      name: 'encyclopedias',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/encyclopedias-page/Encyclopedias'],resolve),
    },
    /*
      情感百科 -- 结束
    */

    /*
      活动页 -- 开始
    */
    {
      path: '/activity/inviteToShare',
      name: 'inviteToShare',  // 邀请有礼
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/activity-page/forever-page/InviteToShare'],resolve),
    },
    {
      path: '/activity/taskCenter',
      name: 'taskCenter',  // 任务中心
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/activity-page/TaskCenter'],resolve),
    },
    {
      path: '/activity/brandAlliance',
      name: 'brandAlliance',  // 品牌联盟活动公告
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/activity-page/BrandAlliance'],resolve),
    },
    /*
      活动页 -- 结束
    */

    /*
      仿微信、支付宝支付页 -- 开始
    */
    {
      path: '/toolPage/ToolList',
      name: 'toolList',   // 工具列表
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/tool-page/ToolList'],resolve),
    },
    {
      path: '/toolPage/InputSetting/:routerLink',
      name: 'inputSetting',   // 输入设置
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/tool-page/InputSetting'],resolve),
    },
    {
      path: '/toolPage/wechatPayment/:amount',
      name: 'wechatPayment',  // 微信支付
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/tool-page/WechatPayment'],resolve),
    },
    {
      path: '/toolPage/wechatRedPacket/:amount',
      name: 'wechatRedPacket',  // 微信红包
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/tool-page/WechatRedPacket'],resolve),
    },
    {
      path: '/toolPage/wechatChange/:amount',
      name: 'wechatChange',   // 微信零钱
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/tool-page/WechatChange'],resolve),
    },
    {
      path: '/toolPage/alipayBalance/:amount',
      name: 'alipayBalance', // 支付宝余额
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/tool-page/AlipayBalance'],resolve),
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

    {
      path: '/talkingLibrary/result/:id',
      name: 'talkingLibraryResult', // 话术结果页
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/talkingLibrary-page/TalkingLibraryResult'],resolve),
    },
    /*
      话术库 -- 结束
    */

    /*
      帖子 微撩 -- 开始
    */
    {
      path: '/post/postSearch',
      name: 'postSearch', // 搜索帖子
      meta: {
        keepAlive: true // 需要缓存
      },
      component: (resolve) => require(['view/post-page/PostSearch'],resolve),
    },
    {
      path: '/post/postSearchResult/:content',
      name: 'postSearchResult', // 搜索帖子结果
      meta: {
        keepAlive: true // 需要缓存
      },
      component: (resolve) => require(['view/post-page/PostSearchResult'],resolve),
    },
    {
      path: '/post/postClassify/:containerid',
      name: 'postClassify', // 帖子分类
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/post-page/PostClassify'],resolve),
    },
    {
      path: '/post/postDetail/:postId',
      name: 'postDetail', // 帖子详情
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/post-page/PostDetail'],resolve),
    },
    {
      path: '/post/postVideo/:postId',
      name: 'postVideo', // 帖子详情
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/post-page/PostVideo'],resolve),
    },
    {
      path: '/post/topPraiseUserList/:postId',
      name: 'topPraiseUserList', // 顶赞列表
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/post-page/TopPraiseUserList'],resolve),
    },
    {
      path: '/post/hotSearchRanking',
      name: 'hotSearchRanking', // 热搜榜
      meta: {
        keepAlive: true // 需要缓存
      },
      component: (resolve) => require(['view/post-page/HotSearchRanking'],resolve),
    },
    {
      path: '/post/redPeopleRanking',
      name: 'redPeopleRanking', // 微撩红人榜
      meta: {
        keepAlive: true // 需要缓存
      },
      component: (resolve) => require(['view/post-page/RedPeopleRanking'],resolve),
    },
    {
      path: '/post/darenRanking',
      name: 'darenRanking', // 问答达人榜
      meta: {
        keepAlive: true // 需要缓存
      },
      component: (resolve) => require(['view/post-page/DarenRanking'],resolve),
    },
    {
      path: '/document/redPeopleRankingRules',
      name: 'redPeopleRankingRules', // 微撩红人榜规则
      meta: {
        keepAlive: true // 需要缓存
      },
      component: (resolve) => require(['view/document-page/RedPeopleRankingRules'],resolve),
    },
    {
      path: '/document/darenRankingRules',
      name: 'darenRankingRules', // 问答达人榜规则
      meta: {
        keepAlive: true // 需要缓存
      },
      component: (resolve) => require(['view/document-page/DarenRankingRules'],resolve),
    },
    /*
      帖子 微撩 -- 结束
    */

    /*
      商城 -- 开始
    */
    {
      path: '/shoppingMall/shoppingMallIndex',
      name: 'shoppingMallIndex', // 商品商城首页
      meta: {
        keepAlive: true // 需要缓存
      },
      component: (resolve) => require(['view/shoppingMall-page/ShoppingMallIndex'],resolve),
    },
    {
      path: '/shoppingMall/goodsClassify/:classifyId',
      name: 'goodsClassify', // 商品分类列表
      meta: {
        keepAlive: true // 需要缓存
      },
      component: (resolve) => require(['view/shoppingMall-page/GoodsClassify'],resolve),
    },
    {
      path: '/shoppingMall/goodsDetail/:goodsId',
      name: 'goodsDetail', // 商品详情
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/shoppingMall-page/GoodsDetail'],resolve),
    },
    {
      path: '/shoppingMall/myExchange/:userId',
      name: 'myExchange', // 我的兑换
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/shoppingMall-page/MyExchange'],resolve),
    },
    {
      path: '/shoppingMall/exchangeRecord/:userId',
      name: 'exchangeRecord', // 兑换记录
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/shoppingMall-page/ExchangeRecord'],resolve),
    },
    /*
      商城 -- 结束
    */

    /*
      问答专区 -- 开始
    */
    {
      path: '/questionAndAnswer/index',
      name: 'questionAndAnswer', // 问答专区首页
      meta: {
        keepAlive: true // 需要缓存
      },
      component: (resolve) => require(['view/questionAndAnswer-page/QuestionAndAnswer'],resolve),
    },
    {
      path: '/questionAndAnswer/myAsk/:userId',
      name: 'myAsk',  // 我的提问
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/questionAndAnswer-page/MyAsk'],resolve),
    },
    {
      path: '/questionAndAnswer/myfollowsAsk',
      name: 'myfollowsAsk',  // 我关注的人的问答
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/questionAndAnswer-page/MyfollowsAsk'],resolve),
    },
    {
      path: '/questionAndAnswer/newestAsk',
      name: 'newestAsk',  // 最新问答
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/questionAndAnswer-page/NewestAsk'],resolve),
    },
    /*
      问答专区 -- 结束
    */

    /*
      星座运势 -- 开始
    */
    {
      path: '/constellation/index',
      name: 'constellation', // 星座运势首页
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/constellation-page/Index'],resolve),
    },
    {
      path: '/constellation/bloodType/:id',
      name: 'bloodType',  // 星座运势 血型页
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/constellation-page/BloodType'],resolve),
    },
    {
      path: '/constellation/knowledge/:id',
      name: 'knowledge',  // 星座运势 知识页
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: (resolve) => require(['view/constellation-page/Knowledge'],resolve),
    },
    /*
      星座运势 -- 结束
    */
  ]
});
