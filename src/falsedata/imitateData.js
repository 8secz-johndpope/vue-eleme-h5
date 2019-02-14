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
];
