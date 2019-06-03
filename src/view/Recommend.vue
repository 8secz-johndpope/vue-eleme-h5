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
    },
    onSearch () {
      if (!this.keywords) {this.$toast('请输入搜索关键词'); return}
      this.$store.dispatch('setKeywords', this.keywords);
      this.$router.push('/result/'+this.keywords);
    },
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
</style>
