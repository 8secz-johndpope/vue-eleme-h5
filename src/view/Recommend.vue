<template>
  <div class="recommend-page">
      <van-search
        v-model="keywords"
        placeholder="默认会有最新或者最热的帖子标题"
        show-action
        shape="round"
        readonly="readonly"
        @click="toPostSearch"
        class="recommend-van-search"
      >
      <div slot="action" @click="toPublishPost"><van-icon name="edit" /></div>
    </van-search>
    <!-- 空格 -->
    <div class="top-space"></div>
    <div class="content-box">
      <van-tabs v-model="activeTab" @click="changeTab" sticky swipeable>
        <van-tab :title="item.name" v-for="(item,index) in getImitateRecommendMenuList">
          <PostList :composition="getImitatePostList"></PostList>
        </van-tab>
      </van-tabs>
      <div class="moreTabs" @click="allTabsShow = !allTabsShow">
        <span v-show="allTabsShow" class="flex-center more-icon">更多<van-icon name="arrow-up" /></span>
        <span v-show="!allTabsShow" class="flex-center more-icon">更多<van-icon name="arrow-down" /></span>
      </div>
      <div class="allTabs" v-show="allTabsShow">
        <ul>
          <li v-for="(item, index) in getImitateRecommendMenuList" :key="item.containerid">
            <van-button :class=" index === activeTab ? 'recommendMenu-btn-active' : '' " type="default" size="small" class="recommendMenu-btn" @click="selectTab(item,index)">
              {{item.name}}
            </van-button>
          </li>
        </ul>
      </div>
    </div>
    <!-- 撑开Fixednav挡住的位置 -->
    <div class="space"></div>
    <Fixednav></Fixednav>
  </div>
</template>

<script>
import Fixednav from 'components/common_components/Fixed_nav';
import PostList from 'components/common_components/PostList';
import { mapGetters } from 'vuex';
export default {
  name: 'recommend',
  data () {
    return {
      uname: '',
      activeTab: 0,
      keywords: '', // 搜索关键词
      allTabsShow: false, // 所有tabs
    };
  },
  // beforeRouteLeave(to, from, next) {
  //   // 设置下一个路由的 meta
  //   to.meta.keepAlive = false;  // 让 下一个路由 不缓存，即刷新
  //   next();
  // },
  mounted () {
    this.activeTab = this.getRecommendHighLightTab;
  },
  computed: {
    ...mapGetters([
      'getImitatePostList', // 获取模拟帖子列表
      'getRecommendHighLightTab', // 得到推荐页高亮tab
      'getImitateRecommendMenuList', // 模拟推荐菜单列表
    ]),
  },
  methods: {
    changeTab(index, title) {
      this.$store.dispatch('setRcommendHighLightTab', index);
      this.allTabsShow = false;
    },
    // 前往帖子搜索
    toPostSearch () {
      this.$router.push({ name: 'postSearch' });
    },
    // 菜单选择
    selectTab (item, index) {
      this.activeTab = index;
      this.allTabsShow = false;
    },
    // 前往帖子发布
    toPublishPost () {
      this.$router.push({ name: 'publishPost' });
    }
  },
  components: {
    Fixednav,
    PostList,
  }
};
</script>

<style lang="less" scoped>
  .recommend-van-search{
    position: fixed;
    height: 1.333333rem;
    z-index: 2;
    widtH: 100%;
    top: 0 !important;
  }
  .moreTabs{
    position: fixed;
    top: 1.333333rem;
    right: 0;
    width: 50px;
    height: 1.173333rem;
    z-index: 3;
    background-color: #fff;
    display: flex;
    justify-content: right;
    align-items: center;
    font-size: 0.373333rem;
    color: #7d7e80;
  }
  .more-icon{
    color: #7d7e80;
  }
  .allTabs{
    position: fixed;
    top: 2.5rem;
    left: 0;
    right: 0;
    text-align: left;
    padding: 10px 0.426667rem 5px 0.426667rem;
    color: #333;
    background-color: #fafafa;
    z-index: 3;
  }
  .allTabs ul{
    display: flex;
    flex-wrap: wrap;
  }
  .allTabs ul li{
    width: 25%;
    text-align: center;
    margin: 0 0 10px 0;
  }
  .recommendMenu-btn{
    background-color: #eee;
    width: 90%;
  }
  .recommendMenu-btn-active{
    color: #ff8200;
  }
  .top-space{
    height: 1.3rem
  }
</style>
