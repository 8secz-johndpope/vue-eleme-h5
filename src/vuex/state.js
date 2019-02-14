import { falseHotWord, falseOrder, falseBussinessbrief, falseBussinessInfo } from '../falsedata/falsedata.js';
import { imitateUser, imitateUserList, imitateConversation } from '../falsedata/imitateData.js';

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
};
