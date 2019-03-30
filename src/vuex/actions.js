export default {
  // 改变是否登录状态
  setLogin ({commit}, platform) {
    commit('SET_LOGIN', platform);
  },
  // 改变是否正在加载状态
  setLoading ({commit}, platform) {
    commit('SET_LOADING', platform);
  },
  // 改变当前页
  setWhichpage ({commit}, platform) {
    commit('SET_WHICHPAGE', platform);
  },
  // 首页加载更多
  setHomepageMore ({commit}, platform) {
    commit('SET_HOME_PAGE_MORE', platform);
  },
  // 改变 推荐页 推荐加载更多
  setRecommendPageRecommendMore ({commit}, platform) {
    commit('SET_RECOMMEND_PAGE_RECOMMEND_MORE', platform);
  },
  // 添加订单
  setOrder ({commit}, platform) {
    commit('SET_ORDER', platform);
  },
  // 修改关键词
  setKeywords ({commit}, platform) {
    commit('SET_KEYWORDS', platform);
  },
  // 修改推荐页高亮tab
  setRcommendHighLightTab ({commit}, platform) {
    commit('SET_RECOMMENDHIGHLIGHTTAB', platform);
  },
};
