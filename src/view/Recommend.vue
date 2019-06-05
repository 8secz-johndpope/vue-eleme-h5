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
    <div class="content-box">
      <van-tabs v-model="activeTab" @click="changeTab" sticky swipeable>
        <van-tab title="推荐">
          <PostCard :composition="getImitatePostList" class="item-box"></PostCard>
        </van-tab>
        <van-tab title="关注">
          <PostCard :composition="getImitatePostList" class="item-box"></PostCard>
        </van-tab>
        <van-tab title="视频">
          <Conversation :composition="getImitateConversation" class="item-box"></Conversation>
        </van-tab>
        <van-tab title="话术">
          <Conversation :composition="getImitateConversation" class="item-box"></Conversation>
        </van-tab>
        <van-tab title="文章">
          <articleList :composition="getImitateArticleList" class="item-box"></articleList>
        </van-tab>
      </van-tabs>
      <div class="flex-center moreTabs" @click="allTabsShow = !allTabsShow">
        <van-icon name="arrow-up" v-show="allTabsShow" />
        <van-icon name="arrow-down" v-show="!allTabsShow" />
      </div>
      <div class="allTabs" v-show="allTabsShow">
        <ul>
          <li v-for="(item, index) in recommendMenuList" :key="item.containerid">
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
import Conversation from 'components/common_components/Conversation';
import PostCard from 'components/common_components/PostCard';
import articleList from 'components/common_components/articleList';
import { mapGetters } from 'vuex';
export default {
  name: 'recommend',
  data () {
    return {
      uname: '',
      activeTab: 0,
      keywords: '', // 搜索关键词
      allTabsShow: false, // 所有tabs
      recommendMenuList: [
        {
          name: '推荐',
          containerid: 0, // 内容分类id
        },
        {
          name: '关注',
          containerid: 1, // 内容分类id
        },
        {
          name: '视频',
          containerid: 2, // 内容分类id
        },
        {
          name: '话术',
          containerid: 3, // 内容分类id
        },
        {
          name: '文章',
          containerid: 4, // 内容分类id
        },
      ]
    };
  },
  mounted () {
    this.activeTab = this.getRecommendHighLightTab;
  },
  computed: {
    ...mapGetters([
      'getImitateConversation', // 获取模拟对话
      'getImitatePostList', // 获取模拟帖子列表
      'getImitateArticleList', // 获取模拟文章列表
      'getRecommendHighLightTab', // 得到推荐页高亮tab
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
    Conversation,
    PostCard,
    articleList,
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
    top: 1.4rem;
    right: 0;
    width: 50px;
    height: 1rem;
    z-index: 3;
    background-color: #fff;
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
</style>
