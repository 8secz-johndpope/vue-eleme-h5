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
    sex: 0, // 性别类型 0-男 1-女
    fansNum: 9999,  // 粉丝数
    workNum: 10000, // 作品数
    autograph: '个性签名，吸引用户关注对方', // 个性签名
  },
  {
    LiaoNo: '000002', // 编号
    userName: '破天小神',
    userId: '',
    userImg: 'https://avatars1.githubusercontent.com/u/34303195?s=460&v=4',
    follow_type: 1, // 关注类型 0-未关注 1-已关注 2-互相关注
    sex: 1, // 性别类型 0-男 1-女
    fansNum: 9999,  // 粉丝数
    workNum: 10000, // 作品数
    autograph: '个性签名，吸引用户关注对方', // 个性签名
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
    commentsNum: 999, // 评论数
    isLike: false, // 是否喜欢
    contentHtml: '<p>男：justify-content: flex-start | flex-end | center | space-between | space-around;</p><p>女：xxx</p><p>男：xxx</p>', // 对话渲染html
    content: 'justify-content: flex-start | flex-end | center | space-between | space-around;xxx;xxx',  // 复制粘贴内容
    isTop: 0, // 是否置顶 0-是， 1-否
  },
  {
    userName: '',
    userId: '',
    id: 'zs20190213',
    author: '李四',
    time: '2019.02.13',
    likers: 9999,   // 喜欢数
    commentsNum: 999, // 评论数
    isLike: false, // 是否喜欢
    contentHtml: '<p>男：justify-content: flex-start | flex-end | center | space-between | space-around;</p><p>女：xxx</p><p>男：xxx</p>', // 对话渲染html
    content: 'justify-content: flex-start | flex-end | center | space-between | space-around;xxx;xxx',  // 复制粘贴内容
    isTop: 0, // 是否置顶 0-是， 1-否
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
    time: '1552833875',
    contents: '欢迎来到xxx',
    isReaded: 0,    // 是否已读， 0-是， 1-否
    messageId: 'mId000001',  // 消息Id
  },
  {
    isOfficial: 1,  // 是否官方，0-是，1-否
    sendUserImg: 'https://avatars1.githubusercontent.com/u/34303195?s=460&v=4',
    sendUserName: '破天小神',
    time: '1552838875',
    contents: 'hello，可否加个朋友',
    isReaded: 1,    // 是否已读， 0-是， 1-否
    messageId: 'mId000001',  // 消息Id
  },
];
// 模拟评论
export var imitateComments = [
  {
    isOfficial: 0,  // 是否官方，0-是，1-否
    vipLevel: 1,  // VIP等级，后续可能做vip评论高亮等处理
    sendUserImg: 'https://avatars1.githubusercontent.com/u/34303195?s=460&v=4',   // 评论者头像
    sendUserName: '评论者名称', // 评论者的用户名
    time: '1552833875',   // 评论时间戳
    contents: '这是一条非常非常非常非常非常非常非常非常非常非常长的评论内容',  // 评论内容
    contentsStatus: 0,  // 评论内容状态，0-正常，1-被删除， 因为有的评论发动等被后台删除
    praiseNum: 9999, // 评论数
    isPraised: 0,    // 是否已点赞， 0-是， 1-否
    commentsId: 'mId000001',  // 评论Id
    position: '中国·深圳·南山', // 评论者所在位置
    Id: 'mId000001',  // 消息Id
    postId: 'postId0000121', // 所评论文章，对话的id
    childLength: 3,
    isShowReply: true,  // 回复框 与 取消回复框
    child: [
      {
        childId: 'mId000001', // 子级二级评论id,
        childUserId: 'mId000001', // 子级二级评论者id,
        childUserImg: 'https://avatars1.githubusercontent.com/u/34303195?s=460&v=4',   // 评论者头像
        childTime: '1552833875',   // 子级评论时间戳，子级评论按照时间先后
        childPraiseNum: 10000,   // 子级评论评论数,评论说多的前三条放在最前面，后面的按照时间先后顺序
        childUserName: '二级评论员', // 子级二级评论者id,
        childIsPraised: 0,    // 是否已点赞， 0-是， 1-否
        childCommentsNum: 12, // 子级二级评论数,
        childCommentsContents: '我是二级评论内容，这是一条非常非常非常非常非常非常非常非常非常非常长的评论内容', // 子级二级评论内容,
        childContentsStatus: 0,  // 评论内容状态，0-正常，1-被删除， 因为有的评论发动等被后台删除
        childIsShowReply: true,  // 回复框 与 取消回复框
      },
      {
        childId: 'mId000001', // 子级二级评论id,
        childUserId: 'mId000001', // 子级二级评论者id,
        childUserImg: 'https://avatars1.githubusercontent.com/u/34303195?s=460&v=4',   // 评论者头像
        childTime: '1552833875',   // 子级评论时间戳，子级评论按照时间先后
        childPraiseNum: 9999,   // 子级评论评论数,评论说多的前三条放在最前面，后面的按照时间先后顺序
        childUserName: '二级评论员', // 子级二级评论者id,
        childIsPraised: 1,    // 是否已点赞， 0-是， 1-否
        childCommentsNum: 12, // 子级二级评论数,
        childCommentsContents: '我是二级评论内容', // 子级二级评论内容,
        childContentsStatus: 1,  // 评论内容状态，0-正常，1-被删除， 因为有的评论发动等被后台删除
        childIsShowReply: true,  // 回复框 与 取消回复框
      },
    ]
  },
  {
    isOfficial: 0,  // 是否官方，0-是，1-否
    vipLevel: 1,  // VIP等级，后续可能做vip评论高亮等处理
    sendUserImg: 'https://avatars1.githubusercontent.com/u/34303195?s=460&v=4',   // 评论者头像
    sendUserName: '评论者名称', // 评论者的用户名
    time: '1552833875',   // 评论时间戳
    contents: '评论内容',  // 评论内容
    contentsStatus: 1,  // 评论内容状态，0-正常，1-被删除， 因为有的评论发动等被后台删除
    praiseNum: 10000, // 评论数
    isPraised: 0,    // 是否已点赞， 0-是， 1-否
    commentsId: 'mId000001',  // 评论Id
    position: '中国·深圳·南山', // 评论者所在位置
    Id: 'mId000001',  // 消息Id
    postId: 'postId0000121', // 所评论文章，对话的id
    childLength: 0,
    isShowReply: true,  // 回复框 与 取消回复框
    child: [],
  },
];

// 模拟用户相关的点赞、评论和@列表 一段时间内的，如果用户实时在线，则每一秒一次，否则则是上一次查看到这一次的时间
export var imitateMyPraiseAndComments = [
  {
    userList: [ // 子一级评论/点赞用户列表
        {
            userId: '',
            userName: '最新用户',
            userImg: 'https://avatars1.githubusercontent.com/u/34303195?s=460&v=4',
        },
        {
            userId: '',
            userName: '最新用户',
            userImg: 'https://avatars1.githubusercontent.com/u/34303195?s=460&v=4',
        },
        {
            userId: '',
            userName: '最新用户',
            userImg: 'https://avatars1.githubusercontent.com/u/34303195?s=460&v=4',
        },
        {
            userId: '',
            userName: '最新用户',
            userImg: 'https://avatars1.githubusercontent.com/u/34303195?s=460&v=4',
        },
        {
            userId: '',
            userName: '最新用户',
            userImg: 'https://avatars1.githubusercontent.com/u/34303195?s=460&v=4',
        },
    ],
    workId: 'workId001',    // 作品Id
    workAuthor: '作品作者',  // 作品作者
    workFirstHtml: '<p>男：点赞作品html</p>',
    time: '1552838875',
    type: 0,    // 0-点赞作品，1-点赞评论，2-评论内容
    total: 5,   // 点赞/评论 总人数
    comments: '这是一条评论',
    firstUserId: '',    // 最新用户的id，跟userList数组第一个一致
    firstUserName: '最新用户',    // 最新用户的id
    firstUserImg: 'https://avatars1.githubusercontent.com/u/34303195?s=460&v=4',      // 最新用户的id
  },
  {
    userList: [ // 子一级评论/点赞用户列表
        {
            userId: '',
            userName: '最新用户',
            userImg: 'https://avatars1.githubusercontent.com/u/34303195?s=460&v=4',
        },
        {
            userId: '',
            userName: '最新用户',
            userImg: 'https://avatars1.githubusercontent.com/u/34303195?s=460&v=4',
        },
    ],
    workId: 'workId001',    // 作品Id
    workAuthor: '作品作者',  // 作品作者
    workFirstHtml: '<p>男：点赞评论html</p>',
    time: '1552838875',
    type: 1,    // 0-点赞作品，1-点赞评论，2-评论内容
    total: 2,   // 点赞/评论 总人数
    comments: '这是一条评论',
    firstUserId: '',    // 最新用户的id，跟userList数组第一个一致
    firstUserName: '最新用户',    // 最新用户的名称
    firstUserImg: 'https://avatars1.githubusercontent.com/u/34303195?s=460&v=4',      // 最新用户的头像
  },
];
