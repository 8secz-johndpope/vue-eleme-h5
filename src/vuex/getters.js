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
  // 得到模拟文章列表数据
  getImitateArticleList: (state) => state.imitateArticleList,
  // 得到模拟菜单列表
  getImitateMenu: (state) => state.imitateMenu,
  // 得到模拟消息
  getImitateMessage: (state) => state.imitateMessage,
  // 得到模拟评论
  getImitateComments: (state) => state.imitateComments,
  // 得到关键词
  getKeywords: (state) => state.keywords,
  // 得到模拟用户相关的点赞、评论和@列表
  getImitateMyPraiseAndComments: (state) => state.imitateMyPraiseAndComments,
  // 得到推荐页高亮tab
  getRecommendHighLightTab: (state) => state.recommendHighLightTab,
  // 地址列表
  getAreaList: (state) => state.areaList,
  // 表情列表
  getEXPSList: (state) => state.EXPSList,
  // 模拟视频列表
  getImitateVideoList: (state) => state.imitateVideoList,
  // 模拟百科分类
  getImitateEncyclopediasClassfication: (state) => state.imitateEncyclopediasClassfication,
  // 模拟百科列表
  getImitateEncyclopediasList: (state) => state.imitateEncyclopediasList,
  // 模拟帖子列表
  getImitatePostList: (state) => state.imitatePostList,
  // 模拟推荐菜单列表
  getImitateRecommendMenuList: (state) => state.imitateRecommendMenuList,
  // 模拟推荐话题列表
  getImitateTopicList: (state) => state.imitateTopicList,
  // 模拟商品分类列表
  getImitateGoodsClassifyList: (state) => state.imitateGoodsClassifyList,
  // 模拟商品列表
  getImitateGoodsList: (state) => state.imitateGoodsList,
  // 模拟问题列表
  getImitateQuestionList: (state) => state.imitateQuestionList,
};
