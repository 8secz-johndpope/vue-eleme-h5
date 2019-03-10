// 模拟用户
export var imitateUser = {
    LiaoNo: '000001', // 编号
    userName: 'ganluhua',
    sex: 0, // 0-男,1-女
    area: '中国·广东·深圳',
    birthday: '1993-04-26',
    userId: '',
    userImg: 'https://avatars1.githubusercontent.com/u/34303195?s=460&v=4',
    tel: '18124655386',
    integral: 100,  // 积分
    getPraised: 9999, // 获赞
    fans: 9999, // 粉丝
    follow: 999,  // 关注
};
// 模拟用户列表， 粉丝 或 关注对象
export var imitateUserList = [
  {
    LiaoNo: '000001', // 编号
    userName: 'ganluhua',
    userId: '',
    userImg: 'https://avatars1.githubusercontent.com/u/34303195?s=460&v=4',
    follow_type: 0, // 关注类型 0-未关注 1-已关注 2-互相关注
  },
  {
    LiaoNo: '000002', // 编号
    userName: '破天小神',
    userId: '',
    userImg: 'https://avatars1.githubusercontent.com/u/34303195?s=460&v=4',
    follow_type: 1, // 关注类型 0-未关注 1-已关注 2-互相关注
  },
];
// 模拟话术分类列表菜单，后台可配
export var imitateMenu = [
  {
    levelOneName: '撩妹恋爱话术', // 分类一级名称
    menuList: [
        {
            levelTwoName: '宝贝屋',
            level: 1,   // 类目级别，接入新的应用，如商品橱窗，用以广告的商品展示
            openNewLink: true,  // 打开新连接
            linkAddress: 'www.baidu.com',   // 新链接地址
            listId: 'id0001',   // 菜单Id
        },
        {
            levelTwoName: '恋爱课程',
            level: 1,   // 类目级别，接入新的应用，如商品橱窗，用以广告的商品展示
            openNewLink: true,  // 打开新连接
            linkAddress: 'www.baidu.com',   // 新链接地址
            listId: 'id0001',   // 菜单Id
        },
        {
            levelTwoName: '更多撩妹应用',
            level: 1,   // 类目级别，接入新的应用，如商品橱窗，用以广告的商品展示
            openNewLink: true,  // 打开新连接
            linkAddress: 'www.baidu.com',   // 新链接地址
            listId: 'id0001',   // 菜单Id
        },
        {
            levelTwoName: '搭讪开场白',
            level: 2,   // 类目级别，接入新的应用，1如商品橱窗，用以广告的商品展示,基本类型
            openNewLink: false,  // 打开新连接
            linkAddress: '',   // 新链接地址
            listId: 'id0001',   // 菜单Id
        },
    ]
  },
  {
    levelOneName: '恋爱技巧', // 分类一级名称
    menuList: [
        {
            levelTwoName: '星座颜色',
            level: 1,   // 类目级别，接入新的应用，如商品橱窗，用以广告的商品展示
            openNewLink: true,  // 打开新连接
            linkAddress: 'www.baidu.com',   // 新链接地址
            listId: 'id0001',   // 菜单Id
        },
        {
            levelTwoName: '冷读解读',
            level: 1,   // 类目级别，接入新的应用，如商品橱窗，用以广告的商品展示
            openNewLink: true,  // 打开新连接
            linkAddress: 'www.baidu.com',   // 新链接地址
            listId: 'id0001',   // 菜单Id
        },
        {
            levelTwoName: '邀约套路',
            level: 1,   // 类目级别，接入新的应用，如商品橱窗，用以广告的商品展示
            openNewLink: true,  // 打开新连接
            linkAddress: 'www.baidu.com',   // 新链接地址
            listId: 'id0001',   // 菜单Id
        },
        {
            levelTwoName: '牵手技巧',
            level: 2,   // 类目级别，接入新的应用，1如商品橱窗，用以广告的商品展示,基本类型
            openNewLink: false,  // 打开新连接
            linkAddress: '',   // 新链接地址
            listId: 'id0001',   // 菜单Id
        },
    ]
  },
  {
    levelOneName: '开心一刻', // 分类一级名称
    menuList: [
        {
            levelTwoName: '奇葩说',
            level: 1,   // 类目级别，接入新的应用，如商品橱窗，用以广告的商品展示
            openNewLink: true,  // 打开新连接
            linkAddress: 'www.baidu.com',   // 新链接地址
            listId: 'id0001',   // 菜单Id
        },
        {
            levelTwoName: '机智答',
            level: 1,   // 类目级别，接入新的应用，如商品橱窗，用以广告的商品展示
            openNewLink: true,  // 打开新连接
            linkAddress: 'www.baidu.com',   // 新链接地址
            listId: 'id0001',   // 菜单Id
        },
        {
            levelTwoName: '幽默君',
            level: 1,   // 类目级别，接入新的应用，如商品橱窗，用以广告的商品展示
            openNewLink: true,  // 打开新连接
            linkAddress: 'www.baidu.com',   // 新链接地址
            listId: 'id0001',   // 菜单Id
        },
        {
            levelTwoName: '哄哄她',
            level: 2,   // 类目级别，接入新的应用，1如商品橱窗，用以广告的商品展示,基本类型
            openNewLink: false,  // 打开新连接
            linkAddress: '',   // 新链接地址
            listId: 'id0001',   // 菜单Id
        },
    ]
  },
];
// 模拟对话
export var imitateConversation = [
  {
    userName: '',
    userId: '',
    id: 'zs20190213',
    author: '张三哥',
    time: '2019.02.13',
    likers: 9999,   // 喜欢数
    isLike: false, // 是否喜欢
    contentHtml: '<p>男：justify-content: flex-start | flex-end | center | space-between | space-around;</p><p>女：xxx</p><p>男：xxx</p>', // 对话渲染html
    content: 'justify-content: flex-start | flex-end | center | space-between | space-around;xxx;xxx',  // 复制粘贴内容
  },
  {
    userName: '',
    userId: '',
    id: 'zs20190213',
    author: '李四',
    time: '2019.02.13',
    likers: 9999,   // 喜欢数
    isLike: false, // 是否喜欢
    contentHtml: '<p>男：justify-content: flex-start | flex-end | center | space-between | space-around;</p><p>女：xxx</p><p>男：xxx</p>', // 对话渲染html
    content: 'justify-content: flex-start | flex-end | center | space-between | space-around;xxx;xxx',  // 复制粘贴内容
  },
  {
    userName: '',
    userId: '',
    id: 'zs20190213',
    author: '王五',
    time: '2019.02.13',
    likers: 9999,   // 喜欢数
    isLike: false, // 是否喜欢
    contentHtml: '<p>男：justify-content: flex-start | flex-end | center | space-between | space-around;</p><p>女：xxx</p><p>男：xxx</p>', // 对话渲染html
    content: 'justify-content: flex-start | flex-end | center | space-between | space-around;xxx;xxx',  // 复制粘贴内容
  },
  {
    userName: '',
    userId: '',
    id: 'zs20190213',
    author: '赵二',
    time: '2019.02.13',
    likers: 9999,   // 喜欢数
    isLike: false, // 是否喜欢
    contentHtml: '<p>男：justify-content: flex-start | flex-end | center | space-between | space-around;</p><p>女：xxx</p><p>男：xxx</p>', // 对话渲染html
    content: 'justify-content: flex-start | flex-end | center | space-between | space-around;xxx;xxx',  // 复制粘贴内容
  },
  {
    userName: '',
    userId: '',
    id: 'zs20190213',
    author: '李思思',
    time: '2019.02.13',
    likers: 9999,   // 喜欢数
    isLike: false, // 是否喜欢
    contentHtml: '<p>男：justify-content: flex-start | flex-end | center | space-between | space-around;</p><p>女：xxx</p><p>男：xxx</p>', // 对话渲染html
    content: 'justify-content: flex-start | flex-end | center | space-between | space-around;xxx;xxx',  // 复制粘贴内容
  },
];
// 模拟文章列表
export var imitateArticleList = [
  {
    id: 'zs20190214',
    title: '网上撩妹怎么聊？老司机给你带路',
    desc: '如何像案例中这样搜索话术聊天，可以微信添加导师微信领取与咨询,老司机带你一夜暴富，脱贫脱单.....',
    imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552210959430&di=c51a258d17691b5059e1ad6db3ee56fb&imgtype=0&src=http%3A%2F%2Fimg18.3lian.com%2Fd%2Ffile%2F201709%2F21%2Fa05161a4469dc5ef8be88ee217d53d92.jpg',
    time: '2019.02.13',
    readingNumbers: 99999,   // 阅读数
    isCarefullyChosen: true, // 是否精选
  },
  {
    id: 'zs20190214',
    title: '网上撩妹怎么聊？老司机给你带路',
    desc: '如何像案例中这样搜索话术聊天，可以微信添加导师微信领取与咨询,老司机带你一夜暴富，脱贫脱单.....',
    imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552210959430&di=c51a258d17691b5059e1ad6db3ee56fb&imgtype=0&src=http%3A%2F%2Fimg18.3lian.com%2Fd%2Ffile%2F201709%2F21%2Fa05161a4469dc5ef8be88ee217d53d92.jpg',
    time: '2019.02.13',
    readingNumbers: 9999,   // 阅读数
    isCarefullyChosen: false, // 是否精选
  },
  {
    id: 'zs20190214',
    title: '网上撩妹怎么聊？老司机给你带路',
    desc: '如何像案例中这样搜索话术聊天，可以微信添加导师微信领取与咨询,老司机带你一夜暴富，脱贫脱单.....',
    imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552210959430&di=c51a258d17691b5059e1ad6db3ee56fb&imgtype=0&src=http%3A%2F%2Fimg18.3lian.com%2Fd%2Ffile%2F201709%2F21%2Fa05161a4469dc5ef8be88ee217d53d92.jpg',
    time: '2019.02.13',
    readingNumbers: 9999,   // 阅读数
    isCarefullyChosen: false, // 是否精选
  },
];
// 模拟消息
export var imitateMessage = [
  {
    isOfficial: 0,  // 是否官方，0-是，1-否
    sendUserImg: 'https://avatars1.githubusercontent.com/u/34303195?s=460&v=4',
    sendUserName: '消息助手',
    time: '2019-2-17',
    contents: '欢迎来到xxx',
    isReaded: 0,    // 是否已读， 0-是， 1-否
    messageId: 'mId000001',  // 消息Id
  },
  {
    isOfficial: 1,  // 是否官方，0-是，1-否
    sendUserImg: 'https://avatars1.githubusercontent.com/u/34303195?s=460&v=4',
    sendUserName: '破天小神',
    time: '2019-2-17',
    contents: 'hello，我关注了你哟',
    isReaded: 1,    // 是否已读， 0-是， 1-否
    messageId: 'mId000001',  // 消息Id
  },
];
