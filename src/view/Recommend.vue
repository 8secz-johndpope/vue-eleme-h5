<template>
  <div class="recommend-page">
    <van-search
      v-model="keywords"
      placeholder="请输入搜索关键词"
      show-action
      shape="round"
      @search="onSearch"
      class="recommend-van-search"
    >
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
    <!-- 空格 -->
    <div class="top-space"></div>
    <div class="content-box">
      <van-tabs v-model="activeTab" @click="changeTab" sticky swipeable>
        <van-tab :title="item.name" v-for="(item,index) in getImitateRecommendMenuList">
          <PostCard :composition="getImitatePostList"></PostCard>
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
import PostCard from 'components/common_components/PostCard';
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
    onSearch () {
      if (!this.keywords) {this.$toast('请输入搜索关键词'); return}
      this.$store.dispatch('setKeywords', this.keywords);
      this.$router.push('/result/'+this.keywords);
    },
    // 菜单选择
    selectTab (item, index) {
      this.activeTab = index;
      this.allTabsShow = false;
    }
  },
  components: {
    Fixednav,
    PostCard,
  }
};
</script>

<style lang="less" scoped>
  .recommend-van-search{
    position: fixed;
    height: 1.333333rem;
    z-index: 999;
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
