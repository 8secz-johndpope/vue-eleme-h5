// 模拟用户
export var imitateUser = {
    LiaoNo: 'glh888888', // 编号
    userName: 'ganluhua',   // 用户名
    userId: '',     // 用户ID
    sex: 1, // 0-男,1-女
    area: '深圳',     // 用户地区
    areaValue: '110000',     // 用户地区编号 110000: '北京市',
    birthday: '1993-04-26',     // 生日，应该用时间戳表示
    userImg: 'https://avatars1.githubusercontent.com/u/34303195?s=460&v=4', // 用户头像
    tel: '18124655386', // 用户电话
    goldCoin: 1000,  // 用户金币
    getPraised: 9999, // 用户获赞
    year: 26, // 用户年龄，与生日时间戳重复了
    fans: 9999, // 用户粉丝
    follow: 999,  // 用户关注
    autograph: '个性签名，吸引用户关注对方', // 用户的个性签名
};
// 模拟用户列表， 粉丝 或 关注对象
export var imitateUserList = [
  {
    LiaoNo: '000001', // 编号
    userName: 'ganluhua',    // 用户名
    userId: '', // 用户ID
    userImg: 'https://avatars1.githubusercontent.com/u/34303195?s=460&v=4', // 用户头像
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
    levelOneName: '恋爱话术', // 分类一级名称
    menuList: [
        {
            levelTwoName: '全部',
            level: 2,   // 类目级别，接入新的应用，1如商品橱窗，用以广告的商品展示,基本类型
            openNewLink: false,  // 打开新连接
            linkAddress: '',   // 新链接地址
            listId: 'id0001',   // 菜单Id
        },
        {
            levelTwoName: '搭讪开场白',  // 分类二级名称
            level: 2,   // 类目级别，接入新的应用，1如商品橱窗，用以广告的商品展示,基本类型
            openNewLink: false,  // 打开新连接
            linkAddress: '',   // 新链接地址
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
            levelTwoName: '星座表情',
            level: 1,   // 类目级别，接入新的应用，如商品橱窗，用以广告的商品展示
            openNewLink: true,  // 打开新连接
            linkAddress: 'www.baidu.com',   // 新链接地址
            listId: 'id0001',   // 菜单Id
        },
        {
            levelTwoName: '废物应对',
            level: 2,   // 类目级别，接入新的应用，1如商品橱窗，用以广告的商品展示,基本类型
            openNewLink: false,  // 打开新连接
            linkAddress: '',   // 新链接地址
            listId: 'id0001',   // 菜单Id
        },
        {
            levelTwoName: '服从引导',
            level: 2,   // 类目级别，接入新的应用，1如商品橱窗，用以广告的商品展示,基本类型
            openNewLink: false,  // 打开新连接
            linkAddress: '',   // 新链接地址
            listId: 'id0001',   // 菜单Id
        },
    ]
  },
  {
    levelOneName: '邀约约会', // 分类一级名称
    menuList: [
        {
            levelTwoName: '邀约套路',
            level: 1,   // 类目级别，接入新的应用，如商品橱窗，用以广告的商品展示
            openNewLink: true,  // 打开新连接
            linkAddress: 'www.baidu.com',   // 新链接地址
            listId: 'id0001',   // 菜单Id
        },
        {
            levelTwoName: '约会准备',
            level: 1,   // 类目级别，接入新的应用，如商品橱窗，用以广告的商品展示
            openNewLink: true,  // 打开新连接
            linkAddress: 'www.baidu.com',   // 新链接地址
            listId: 'id0001',   // 菜单Id
        },
        {
            levelTwoName: '约后拉伸',
            level: 2,   // 类目级别，接入新的应用，1如商品橱窗，用以广告的商品展示,基本类型
            openNewLink: false,  // 打开新连接
            linkAddress: '',   // 新链接地址
            listId: 'id0001',   // 菜单Id
        },
    ]
  },
  {
    levelOneName: '肢体升温', // 分类一级名称
    menuList: [
        {
            levelTwoName: '化解抵抗',
            level: 1,   // 类目级别，接入新的应用，如商品橱窗，用以广告的商品展示
            openNewLink: true,  // 打开新连接
            linkAddress: 'www.baidu.com',   // 新链接地址
            listId: 'id0001',   // 菜单Id
        },
        {
            levelTwoName: '牵手技巧',
            level: 1,   // 类目级别，接入新的应用，如商品橱窗，用以广告的商品展示
            openNewLink: true,  // 打开新连接
            linkAddress: 'www.baidu.com',   // 新链接地址
            listId: 'id0001',   // 菜单Id
        },
        {
            levelTwoName: '接吻技巧',
            level: 1,   // 类目级别，接入新的应用，如商品橱窗，用以广告的商品展示
            openNewLink: true,  // 打开新连接
            linkAddress: 'www.baidu.com',   // 新链接地址
            listId: 'id0001',   // 菜单Id
        },
    ]
  },
  {
    levelOneName: '幽默机智', // 分类一级名称
    menuList: [
        {
            levelTwoName: '神回复',
            level: 1,   // 类目级别，接入新的应用，如商品橱窗，用以广告的商品展示
            openNewLink: true,  // 打开新连接
            linkAddress: 'www.baidu.com',   // 新链接地址
            listId: 'id0001',   // 菜单Id
        },
        {
            levelTwoName: '开心一刻',
            level: 2,   // 类目级别，接入新的应用，1如商品橱窗，用以广告的商品展示,基本类型
            openNewLink: false,  // 打开新连接
            linkAddress: '',   // 新链接地址
            listId: 'id0001',   // 菜单Id
        },
        {
            levelTwoName: '奇闻趣事',    // 奇闻趣事
            level: 1,   // 类目级别，接入新的应用，如商品橱窗，用以广告的商品展示
            openNewLink: true,  // 打开新连接
            linkAddress: 'www.baidu.com',   // 新链接地址
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
    contentHtml: '<p>男：你今天有点怪</p><p>女：哪里怪了（脸红）</p><p>男：怪可爱的，哈哈哈</p>', // 对话渲染html
    content: '男：你今天有点怪女：哪里怪了（脸红）男：怪可爱的，哈哈哈',  // 复制粘贴内容
    isTop: 0, // 是否置顶 0-是， 1-否
    isBusiness: 0, // 是否商家 0-是， 1-否
  },
  {
    userName: '',
    userId: '',
    id: 'zs20190213',
    author: '御姐',
    time: '2019.02.13',
    likers: 9999,   // 喜欢数
    commentsNum: 999, // 评论数
    isLike: false, // 是否喜欢
    contentHtml: '<p>男：你脸上有点东西</p><p>女：什么东西（脸红）</p><p>男：有点可爱</p>', // 对话渲染html
    content: '男：你脸上有点东西女：什么东西（脸红）男：有点可爱',  // 复制粘贴内容
    isTop: 0, // 是否置顶 0-是， 1-否
    isBusiness: 0, // 是否商家 0-是， 1-否
  },
  {
    userName: '',
    userId: '',
    id: 'zs20190213',
    author: '软萌妹子',
    time: '2019.02.13',
    likers: 9999,   // 喜欢数
    commentsNum: 999, // 评论数
    isLike: false, // 是否喜欢
    contentHtml: '<p>女：你是什么星座的呀</p><p>男：我呀，是为你量身定做的（避实就虚，保持男生神秘感，激发兴趣）</p>', // 对话渲染html
    content: '女：你是什么星座的呀男：我呀，是为你量身定做的（避实就虚，保持男生神秘感，激发兴趣）',  // 复制粘贴内容
    isTop: 1, // 是否置顶 0-是， 1-否
    isBusiness: 0, // 是否商家 0-是， 1-否
  },
];
// 模拟文章列表
export var imitateArticleList = [
  {
    id: 'zs20190214',
    title: '老想睡觉怎么办？老司机给你带路',
    desc: '如何像案例中这样搜索话术聊天，可以微信添加导师微信领取与咨询,老司机带你一夜暴富，脱贫脱单.....',
    imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552210959430&di=c51a258d17691b5059e1ad6db3ee56fb&imgtype=0&src=http%3A%2F%2Fimg18.3lian.com%2Fd%2Ffile%2F201709%2F21%2Fa05161a4469dc5ef8be88ee217d53d92.jpg',
    time: '2019.02.13',
    readingNumbers: 99999,   // 阅读数
    isCarefullyChosen: true, // 是否精选
  },
  {
    id: 'zs20190214',
    title: '老想睡觉怎么办？老司机给你带路',
    desc: '如何像案例中这样搜索话术聊天，可以微信添加导师微信领取与咨询,老司机带你一夜暴富，脱贫脱单.....',
    imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552210959430&di=c51a258d17691b5059e1ad6db3ee56fb&imgtype=0&src=http%3A%2F%2Fimg18.3lian.com%2Fd%2Ffile%2F201709%2F21%2Fa05161a4469dc5ef8be88ee217d53d92.jpg',
    time: '2019.02.13',
    readingNumbers: 9999,   // 阅读数
    isCarefullyChosen: false, // 是否精选
  },
  {
    id: 'zs20190214',
    title: '老想睡觉怎么办？老司机给你带路',
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
    commentsId: 'cID000001', // 该评论的Id
    commentsType: 0,  // 评论所属类型， 0-作品，1-文章
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
    commentsId: 'cID000002', // 该评论的Id
    commentsType: 1,  // 评论所属类型， 0-作品，1-文章
  },
];

// 模拟视频列表
export var imitateVideoList = [
  {
    author: '我是作者', // 视频作者
    likers: 10001,  // 喜欢数
    videopic: 'http://img2.imgtn.bdimg.com/it/u=3121687100,2370171796&fm=26&gp=0.jpg',
    videoId: 'v00001',  // 视频Id，调用视频的时候会通过请求获取链接，防止盗链
    title: '关注我，教你日进斗金', // 视频标题
    isLike: true, // 是否喜欢
    likers: 9999,   // 喜欢数
    watchers: 9999,   // 观看数
    // 标签分类
    list: [
      {
        itemId: 'itemId1', //词条分类id
        itemName: '社交撩妹', // 词条分类名
      },
    ]
  },
  {
    author: '我是作者', // 视频作者
    likers: 10001,  // 喜欢数
    videopic: 'http://img2.imgtn.bdimg.com/it/u=3121687100,2370171796&fm=26&gp=0.jpg',
    videoId: 'v00002',  // 视频Id，调用视频的时候会通过请求获取链接，防止盗链
    title: '关注我，教你如何日进斗金，走向人生巅峰', // 视频标题
    isLike: false, // 是否喜欢
    likers: 9999,   // 喜欢数
    watchers: 9999,   // 观看数
    // 标签分类
    list: [
      {
        itemId: 'itemId0', //词条分类id
        itemName: '聊天搭讪', // 词条分类名
      },
    ]
  },
  {
    author: '我是作者', // 视频作者
    likers: 10001,  // 喜欢数
    videopic: 'http://img2.imgtn.bdimg.com/it/u=3121687100,2370171796&fm=26&gp=0.jpg',
    videoId: 'v00003',  // 视频Id，调用视频的时候会通过请求获取链接，防止盗链
    title: '关注我，教你如何日进斗金，走向人生巅峰', // 视频标题
    isLike: false, // 是否喜欢
    likers: 9999,   // 喜欢数
    watchers: 9999,   // 观看数
    // 标签分类
    list: [
      {
        itemId: 'itemId0', //词条分类id
        itemName: '聊天搭讪', // 词条分类名
      },
    ]
  },
  {
    author: '我是作者', // 视频作者
    likers: 10001,  // 喜欢数
    videopic: 'http://img2.imgtn.bdimg.com/it/u=3121687100,2370171796&fm=26&gp=0.jpg',
    videoId: 'v00004',  // 视频Id，调用视频的时候会通过请求获取链接，防止盗链
    title: '关注我，教你如何日进斗金，走向人生巅峰', // 视频标题
    isLike: false, // 是否喜欢
    likers: 9999,   // 喜欢数
    watchers: 9999,   // 观看数
    // 标签分类
    list: [
      {
        itemId: 'itemId0', //词条分类id
        itemName: '聊天搭讪', // 词条分类名
      },
    ]
  },
];

// 模拟百科分类
export var imitateEncyclopediasClassfication = [
  {
    id: 'id0', // 该百科词条的id
    img: 'http://img2.imgtn.bdimg.com/it/u=3121687100,2370171796&fm=26&gp=0.jpg',  // 图片
    name: '单身期',  //  名称
    list: [
      {
        itemId: 'itemId0', //词条分类id
        itemName: '聊天搭讪', // 词条分类名
      },
      {
        itemId: 'itemId1', //词条分类id
        itemName: '社交撩妹', // 词条分类名
      },
      {
        itemId: 'itemId2', //词条分类id
        itemName: '暗恋', // 词条分类名
      },
      {
        itemId: 'itemId14', //词条分类id
        itemName: '形象改造', // 词条分类名
      },
      {
        itemId: 'itemId15', //词条分类id
        itemName: '读懂女性', // 词条分类名
      },
      {
        itemId: 'itemId16', //词条分类id
        itemName: '相亲', // 词条分类名
      },
    ]
  },
  {
    id: 'id1', // 该百科词条的id
    img: 'http://img2.imgtn.bdimg.com/it/u=3121687100,2370171796&fm=26&gp=0.jpg',  // 图片
    name: '追求期',  //  名称
    list: [
      {
        itemId: 'itemId3', //词条分类id
        itemName: '套路', // 词条分类名
      },
      {
        itemId: 'itemId4', //词条分类id
        itemName: '表白', // 词条分类名
      },
      {
        itemId: 'itemId5', //词条分类id
        itemName: '约会', // 词条分类名
      },
    ]
  },
  {
    id: 'id2', // 该百科词条的id
    img: 'http://img2.imgtn.bdimg.com/it/u=3121687100,2370171796&fm=26&gp=0.jpg',  // 图片
    name: '恋爱期',  //  名称
    list: [
      {
        itemId: 'itemId6', //词条分类id
        itemName: '相处技巧', // 词条分类名
      },
      {
        itemId: 'itemId7', //词条分类id
        itemName: '吵架', // 词条分类名
      },
      {
        itemId: 'itemId8', //词条分类id
        itemName: '异地恋', // 词条分类名
      },
    ]
  },
  {
    id: 'id3', // 该百科词条的id
    img: 'http://img2.imgtn.bdimg.com/it/u=3121687100,2370171796&fm=26&gp=0.jpg',  // 图片
    name: '失恋期',  //  名称
    list: [
      {
        itemId: 'itemId9', //词条分类id
        itemName: '分手挽回', // 词条分类名
      },
      {
        itemId: 'itemId10', //词条分类id
        itemName: '走出失恋', // 词条分类名
      },
      {
        itemId: 'itemId11', //词条分类id
        itemName: '自我提升', // 词条分类名
      },
    ]
  },
  {
    id: 'id', // 该百科词条的id
    img: 'http://img2.imgtn.bdimg.com/it/u=3121687100,2370171796&fm=26&gp=0.jpg',  // 图片
    name: '婚后期',  //  名称
    list: [
      {
        itemId: 'itemId12', //词条分类id
        itemName: '读懂女性', // 词条分类名
      },
      {
        itemId: 'itemId13', //词条分类id
        itemName: '思考总结', // 词条分类名
      },
      {
        itemId: 'itemId14', //词条分类id
        itemName: '挽回婚姻', // 词条分类名
      },
    ]
  },
];

// 模拟百科列表
export var imitateEncyclopediasList = [
  {
    id: 'id', // 该百科词条的id
    title: '工作996，生病ICU，年轻人，你的头发还好吗？', // 百科标题
    praiseNum: 996, // 点赞人数
    belongsClassification: '0', // 所属分类
    belongsClassificationCnName: '吐槽', // 所属分类名
  },
  {
    id: 'id', // 该百科词条的id
    title: '工作996，生病ICU，年轻人，你的头发还好吗？', // 百科标题
    praiseNum: 996, // 点赞人数
    belongsClassification: '0', // 所属分类
    belongsClassificationCnName: '吐槽', // 所属分类名
  },
  {
    id: 'id', // 该百科词条的id
    title: '工作996，生病ICU，年轻人，你的头发还好吗？', // 百科标题
    praiseNum: 996, // 点赞人数
    belongsClassification: '0', // 所属分类
    belongsClassificationCnName: '吐槽', // 所属分类名
  },
];

// 模拟推荐菜单列表
export var imitateRecommendMenuList = [
  {
    name: '推荐',
    containerid: 0, // 内容分类id
    cardType: 0,  // 0-PostCard, 1-Conversation, 2-articleList
  },
  {
    name: '关注',
    containerid: 1, // 内容分类id
    cardType: 0,  // 0-PostCard, 1-Conversation, 2-articleList
  },
  {
    name: '视频',
    containerid: 2, // 内容分类id
    cardType: 0,  // 0-PostCard, 1-Conversation, 2-articleList
  },
  {
    name: '话术',
    containerid: 3, // 内容分类id
    cardType: 1,  // 0-PostCard, 1-Conversation, 2-articleList
  },
  {
    name: '文章',
    containerid: 4, // 内容分类id
    cardType: 2,  // 0-PostCard, 1-Conversation, 2-articleList
  },
  {
    name: '幽默',
    containerid: 5, // 内容分类id
    cardType: 0,  // 0-PostCard, 1-Conversation, 2-articleList
  },
  {
    name: '影视动漫',
    containerid: 6, // 内容分类id
    cardType: 0,  // 0-PostCard, 1-Conversation, 2-articleList
  },
  {
    name: '文学',
    containerid: 7, // 内容分类id
    cardType: 0,  // 0-PostCard, 1-Conversation, 2-articleList
  },
  {
    name: '美女',
    containerid: 8, // 内容分类id
    cardType: 0,  // 0-PostCard, 1-Conversation, 2-articleList
  },
  {
    name: '星座表情',
    containerid: 9, // 内容分类id
    cardType: 0,  // 0-PostCard, 1-Conversation, 2-articleList
  },
  {
    name: '电竞',
    containerid: 10, // 内容分类id
    cardType: 0,  // 0-PostCard, 1-Conversation, 2-articleList
  },
  {
    name: '校园',
    containerid: 11, // 内容分类id
    cardType: 0,  // 0-PostCard, 1-Conversation, 2-articleList
  },
];

// 模拟推荐话题列表
export var imitateTopicList = [
  {
    name: '为追女孩子曾经做过的蠢事',   // 话题名称
    topicId: 0, // 话题id
    topicTypeName: '美女',    // 话题类型名称
    topicTypeBelongClassifyId: 0,   //  话题类型所属Id
    discussNum: 1241575,    // 话题讨论数量（统计的是发帖的数量）
    topicImg: 'http://img2.imgtn.bdimg.com/it/u=3121687100,2370171796&fm=26&gp=0.jpg',  // 话题头像
  },
  {
    name: '如何用古诗词撩动妹子',   // 话题名称
    topicId: 1, // 话题id
    topicTypeName: '文学',    // 话题类型名称
    topicTypeBelongClassifyId: 1,   //  话题类型所属Id
    discussNum: 1241575,    // 话题讨论数量（统计的是发帖的数量）
    topicImg: 'http://img2.imgtn.bdimg.com/it/u=3121687100,2370171796&fm=26&gp=0.jpg',  // 话题头像
  },
  {
    name: '霸道总裁爱上我',   // 话题名称
    topicId: 2, // 话题id
    topicTypeName: '影视动漫',    // 话题类型名称
    topicTypeBelongClassifyId: 2,   //  话题类型所属Id
    discussNum: 1241575,    // 话题讨论数量（统计的是发帖的数量）
    topicImg: 'http://img2.imgtn.bdimg.com/it/u=3121687100,2370171796&fm=26&gp=0.jpg',  // 话题头像
  },
  {
    name: '校花专题',   // 话题名称
    topicId: 3, // 话题id
    topicTypeName: '校园',    // 话题类型名称
    topicTypeBelongClassifyId: 2,   //  话题类型所属Id
    discussNum: 1241575,    // 话题讨论数量（统计的是发帖的数量）
    topicImg: 'http://img2.imgtn.bdimg.com/it/u=3121687100,2370171796&fm=26&gp=0.jpg',  // 话题头像
  },
  {
    name: '为何小可爱不洗碗',   // 话题名称
    topicId: 4, // 话题id
    topicTypeName: '校园',    // 话题类型名称
    topicTypeBelongClassifyId: 2,   //  话题类型所属Id
    discussNum: 1241575,    // 话题讨论数量（统计的是发帖的数量）
    topicImg: 'http://img2.imgtn.bdimg.com/it/u=3121687100,2370171796&fm=26&gp=0.jpg',  // 话题头像
  },
];

// 模拟帖子列表
export var imitatePostList = [
  {
    postId: 'id0', // 帖子id
    postType: 0,    // 帖子类型，0-纯文本，1-含有图片，不含视频，2-只含有视频，不含图片
    contents: '<p>工作996，生病ICU，年轻人，你的头发还好吗？</p>', // 帖子内容，会包含表情，HTML格式
    imgList: [],    // 帖子图片
    videoUrl: '',   // 视频URL，备注：图片、视频互斥
    videoImg: '',   // 视频封面图片
    likers: 996, // 点赞人数
    commentsNum: 996, // 评论人数
    forwardNum: 996, // 转发人数
    author: '作者', // 作者名
    authorId: 'userId1',  // 作者Id
    userImg: 'http://img2.imgtn.bdimg.com/it/u=3121687100,2370171796&fm=26&gp=0.jpg',  // 用户头像
    tagsList: [],   // 帖子标签集合
    createTime: 1552838875, // 发表时间
    watchNum: 140124, // 观看人数
    duration: '4:57', // 时长
    isFollow: 0,  // 是否关注 0-关注，1-未关注
    isPraised: 0,   // 是否已顶，0-已顶，1-未顶
    helpPraiseNum: 102, // 帮顶的人数
    isBusiness: 1, // 是否商家 0-是， 1-否
  },
  {
    postId: 'id1', // 帖子id
    postType: 1,    // 帖子类型，0-纯文本，1-含有图片，不含视频，2-只含有视频，不含图片
    contents: '<p>工作996，生病ICU，年轻人，你的头发还好吗？</p>', // 帖子内容，会包含表情，HTML格式
    // 帖子图片
    imgList: [
        'http://img2.imgtn.bdimg.com/it/u=3121687100,2370171796&fm=26&gp=0.jpg',
        'http://img2.imgtn.bdimg.com/it/u=3121687100,2370171796&fm=26&gp=0.jpg',
        'http://img2.imgtn.bdimg.com/it/u=3121687100,2370171796&fm=26&gp=0.jpg',
        'http://img2.imgtn.bdimg.com/it/u=3121687100,2370171796&fm=26&gp=0.jpg',
        'http://img2.imgtn.bdimg.com/it/u=3121687100,2370171796&fm=26&gp=0.jpg',
        'http://img2.imgtn.bdimg.com/it/u=3121687100,2370171796&fm=26&gp=0.jpg',
        'http://img2.imgtn.bdimg.com/it/u=3121687100,2370171796&fm=26&gp=0.jpg',
        'http://img2.imgtn.bdimg.com/it/u=3121687100,2370171796&fm=26&gp=0.jpg',
        'http://img2.imgtn.bdimg.com/it/u=3121687100,2370171796&fm=26&gp=0.jpg',
    ],
    videoUrl: '',   // 视频URL，备注：图片、视频互斥
    videoImg: '',   // 视频封面图片
    likers: 996, // 点赞人数
    commentsNum: 996, // 评论人数
    forwardNum: 996, // 转发人数
    author: '作者', // 作者名
    authorId: 'userId1',  // 作者Id
    userImg: 'http://img2.imgtn.bdimg.com/it/u=3121687100,2370171796&fm=26&gp=0.jpg',  // 用户头像
    // 帖子标签集合
    tagsList: [
        {
            tagsName: '校花专题', // 标签分类名
            containerid: 'tagsId1', // 标签所属id
        },
        {
            tagsName: '为追女孩子曾经做过的蠢事', // 标签分类名
            containerid: 'tagsId2', // 标签所属id
        },
    ],
    createTime: 1552838875, // 发表时间
    watchNum: 140124, // 观看人数
    duration: '4:57', // 时长
    isFollow: 1,  // 是否关注 0-关注，1-未关注
    isPraised: 1,   // 是否已顶，0-已顶，1-未顶
    helpPraiseNum: 102, // 帮顶的人数
    isBusiness: 0, // 是否商家 0-是， 1-否
  },
  {
    postId: 'id2', // 帖子id
    postType: 2,    // 帖子类型，0-纯文本，1-含有图片，不含视频，2-只含有视频，不含图片
    contents: '<p>工作996，生病ICU，年轻人，你的头发还好吗？</p>', // 帖子内容，会包含表情，HTML格式
    imgList: [],   // 帖子图片
    videoUrl: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',   // 视频URL，备注：图片、视频互斥
    videoImg: 'http://img2.imgtn.bdimg.com/it/u=3121687100,2370171796&fm=26&gp=0.jpg',   // 视频封面图片
    likers: 996, // 点赞人数
    commentsNum: 996, // 评论人数
    forwardNum: 996, // 转发人数
    author: '作者', // 作者名
    authorId: 'userId1',  // 作者Id
    userImg: 'http://img2.imgtn.bdimg.com/it/u=3121687100,2370171796&fm=26&gp=0.jpg',  // 用户头像
    // 帖子标签集合
    tagsList: [
        {
            tagsName: '霸道总裁爱上我', // 标签分类名
            containerid: 'tagsId3', // 标签所属id
        },
    ],
    createTime: 1558838875, // 发表时间
    watchNum: 140124, // 观看人数
    duration: '4:57', // 时长
    isFollow: 1,  // 是否关注 0-关注，1-未关注
    isPraised: 1,   // 是否已顶，0-已顶，1-未顶
    helpPraiseNum: 102, // 帮顶的人数
    isBusiness: 0, // 是否商家 0-是， 1-否
  },
];

// 模拟商品分类列表
export var imitateGoodsClassifyList = [
    {
      name: '精美饰品',
      id: '01',
    },{
      name: '休闲零食',
      id: '02',
    },{
      name: '运动健身',
      id: '03',
    },{
      name: '美妆护肤',
      id: '04',
    },{
      name: '鲜花玩偶',
      id: '05',
    },{
      name: '手机数码',
      id: '06',
    },{
      name: '卡券票券',
      id: '07',
    },{
      name: '养生保健',
      id: '08',
    }
];

// 模拟商品列表
export var imitateGoodsList = [
    {
      id: '01',
      name: 'SWAROVSKI(施华洛世奇) DUO EVIL EYE 玫瑰金色恶魔之眼手镯',
      image: 'https://img14.360buyimg.com/n7/jfs/t8089/8/1792179428/262248/7b596735/59bf8e42N3e97209f.jpg',
      goodsType: 0, // 商品类型 0-实物， 1-虚拟物品 虚拟物品不需要填写地址
      needGoldCoin: 5000,  //  需要金币
      needMoney: 0, // 需要金额
      stock: 1000, // 库存
      belongsClassifyName: '精美饰品',  // 所属类目名称
      belongsClassifyId: '01',  // 所属类目Id
    },
    {
      id: '02',
      name: '淘票票5元观影券',
      image: 'https://img14.360buyimg.com/n7/jfs/t8089/8/1792179428/262248/7b596735/59bf8e42N3e97209f.jpg',
      goodsType: 1, // 商品类型 0-实物， 1-虚拟物品 虚拟物品不需要填写地址
      needGoldCoin: 500,  //  需要金币
      needMoney: 100, // 需要金额
      stock: 1000, // 库存
      belongsClassifyName: '卡券票券',  // 所属类目名称
      belongsClassifyId: '01',  // 所属类目Id
    },
    {
      id: '03',
      name: 'SWAROVSKI(施华洛世奇) DUO EVIL EYE 玫瑰金色恶魔之眼手镯',
      image: 'https://img14.360buyimg.com/n7/jfs/t8089/8/1792179428/262248/7b596735/59bf8e42N3e97209f.jpg',
      goodsType: 0, // 商品类型 0-实物， 1-虚拟物品 虚拟物品不需要填写地址
      needGoldCoin: 1500,  //  需要金币
      needMoney: 100, // 需要金额
      stock: 1000, // 库存
      belongsClassifyName: '精美饰品',  // 所属类目名称
      belongsClassifyId: '01',  // 所属类目Id
    },
    {
      id: '04',
      name: 'SWAROVSKI(施华洛世奇) DUO EVIL EYE 玫瑰金色恶魔之眼手镯',
      image: 'https://img14.360buyimg.com/n7/jfs/t8089/8/1792179428/262248/7b596735/59bf8e42N3e97209f.jpg',
      goodsType: 0, // 商品类型 0-实物， 1-虚拟物品 虚拟物品不需要填写地址
      needGoldCoin: 2500,  //  需要金币
      needMoney: 100, // 需要金额
      stock: 1000, // 库存
      belongsClassifyName: '卡券票券',  // 所属类目名称
      belongsClassifyId: '02',  // 所属类目Id
    },
    {
      id: '05',
      name: 'SWAROVSKI(施华洛世奇) DUO EVIL EYE 玫瑰金色恶魔之眼手镯',
      image: 'https://img14.360buyimg.com/n7/jfs/t8089/8/1792179428/262248/7b596735/59bf8e42N3e97209f.jpg',
      goodsType: 0, // 商品类型 0-实物， 1-虚拟物品 虚拟物品不需要填写地址
      needGoldCoin: 800,  //  需要金币
      needMoney: 0, // 需要金额
      stock: 1000, // 库存
      belongsClassifyName: '精美饰品',  // 所属类目名称
      belongsClassifyId: '01',  // 所属类目Id
    },
    {
      id: '06',
      name: 'SWAROVSKI(施华洛世奇) DUO EVIL EYE 玫瑰金色恶魔之眼手镯',
      image: 'https://img14.360buyimg.com/n7/jfs/t8089/8/1792179428/262248/7b596735/59bf8e42N3e97209f.jpg',
      goodsType: 0, // 商品类型 0-实物， 1-虚拟物品 虚拟物品不需要填写地址
      needGoldCoin: 500,  //  需要金币
      needMoney: 100, // 需要金额
      stock: 1000, // 库存
      belongsClassifyName: '精美饰品',  // 所属类目名称
      belongsClassifyId: '01',  // 所属类目Id
    },
];
