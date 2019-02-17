export default {
  // 得到是否登录
  getLogin: (state) => state.isLogin,
  // 得到假用户名
  getuname: (state) => state.username,
  // 得到假密码
  getpwd: (state) => state.password,
  // 得到是否加载中
  getloading: (state) => state.isLoading,
  // 得到当前所在页标签
  getwhichpage: (state) => state.whichPage,
  // 得到热搜词
  getFalseHotWord: (state) => state.falseHotWord,
  // 得到已完成订单
  getFalseOrder: (state) => state.falseOrder,
  // 得到商家简略信息
  getFalseBussinessbrief: (state) => state.falseBussinessbrief,
  // 得到商家详细数据
  getFalseBussinessInfo: (state) => state.falseBussinessInfo,
  // 得到模拟用户数据
  getImitateUser: (state) => state.imitateUser,
  // 得到模拟用户列表数据 -- 粉丝 或者 关注
  getImitateUserList: (state) => state.imitateUserList,
  // 得到模拟对话数据
  getImitateConversation: (state) => state.imitateConversation,
  // 得到模拟菜单列表
  getImitateMenu: (state) => state.imitateMenu,
  // 得到模拟消息
  getImitateMessage: (state) => state.imitateMessage,
};
