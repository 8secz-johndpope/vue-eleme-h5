import { areaList } from '../jsonData/Area.js';
import { EXPSList } from '../jsonData/EXPSList.js';
import { falseHotWord, falseOrder, falseBussinessbrief, falseBussinessInfo } from '../falsedata/falsedata.js';
import { imitateUser, imitateUserList, imitateConversation, imitateArticleList, imitateMenu, imitateMessage,
         imitateComments, imitateMyPraiseAndComments, imitateVideoList, imitateEncyclopediasClassfication, 
         imitateEncyclopediasList, imitatePostList } from '../falsedata/imitateData.js';

export default {
  // 是否在加载中
  isLoading: true,
  // 假用户名
  username: 'admin',
  // 假密码
  password: 'admin',
  // 是否登录
  isLogin: false,
  // 当前所在页面 homepage | order | myzone (myzone切换还有问题)
  whichPage: '',
  // 假的热搜词
  falseHotWord,
  // 推荐页当前高亮tab
  recommendHighLightTab: 0,
  // 通用图片
  globalUserImg: 'https://avatars1.githubusercontent.com/u/34303195?s=460&v=4',
  // 高亮的菜单
  activeTab: 0,
  // 关键词
  keywords: '',
  // 地址列表
  areaList,
  // 表情列表
  EXPSList,
  // 已完成订单
  falseOrder,
  // 商家简略信息
  falseBussinessbrief,
  // 商家详细数据
  falseBussinessInfo,
  // 模拟用户
  imitateUser,
  // 模拟用户列表 -- 粉丝 或 关注
  imitateUserList,
  // 模拟对话
  imitateConversation,
  // 模拟文章列表
  imitateArticleList,
  // 模拟菜单列表
  imitateMenu,
  // 模拟消息
  imitateMessage,
  // 模拟评论
  imitateComments,
  // 模拟视频列表
  imitateVideoList,
  // 模拟用户相关的点赞、评论和@列表
  imitateMyPraiseAndComments,
  // 模拟百科分类
  imitateEncyclopediasClassfication,
  // 模拟百科列表
  imitateEncyclopediasList,
  // 模拟帖子列表
  imitatePostList,
};
