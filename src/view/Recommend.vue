<template>
  <div class="content-box">
    <van-tabs v-model="activeTab" type="card" @click="changeTab" class="tab" sticky>
      <van-tab title="话术">
        <Conversation :composition="getImitateConversation" class="item-box"></Conversation>
      </van-tab>
      <van-tab title="文章">
        <articleList :composition="getImitateArticleList" class="item-box"></articleList>
      </van-tab>
    </van-tabs>
    <div class="search-box">
      <router-link :to="{ name: 'result', params: {'id':'o'} }"> <van-icon name="search" /></router-link>
    </div>
    <!-- 撑开Fixednav挡住的位置 -->
    <div class="space"></div>
    <Fixednav></Fixednav>
  </div>
</template>

<script>
import Fixednav from 'components/common_components/Fixed_nav';
import Conversation from 'components/common_components/Conversation';
import articleList from 'components/common_components/articleList';
import { mapGetters } from 'vuex';
export default {
  name: 'recommend',
  data () {
    return {
      uname: '',
      activeTab: 0,
    };
  },
  mounted () {
    this.activeTab = this.getRecommendHighLightTab;
  },
  computed: {
    ...mapGetters([
      'getImitateConversation', // 获取模拟对话
      'getImitateArticleList', // 获取模拟文章列表
      'getRecommendHighLightTab', // 得到推荐页高亮tab
    ]),
  },
  methods: {
    changeTab(index, title) {
      this.$store.dispatch('setRcommendHighLightTab', index);
    },
  },
  components: {
    Fixednav,
    Conversation,
    articleList,
  }
};
</script>

<style lang="less" scoped>
  .item-box{
    margin-top: 15px;
  }
  .search-box{
    position: fixed;
    top: 0.4rem;
    right: 0.4rem;
    font-size: 0.4rem;
    z-index: 999;
  }
</style>
