<template>
  <div class="content-box">
    <van-tabs v-model="active" type="card" @click="changeTab" class="tab" sticky v-if="isShowSearchBox">
      <van-tab title="话术">
        <Conversation :composition="getImitateConversation" class="item-box"></Conversation>
      </van-tab>
      <van-tab title="文章">
        <Article :composition="getImitateArticleList" class="item-box"></Article>
      </van-tab>
    </van-tabs><!-- 撑开Fixednav挡住的位置 -->
    <div class="search-box" @click="openSearchBox" v-if="isShowSearchBox">
      <van-icon name="search" />
    </div>
    <form action="/" v-if="!isShowSearchBox">
      <van-search
        v-model="keywords"
        placeholder="请输入搜索关键词"
        show-action
        @search="onSearch"
        @cancel="onCancel"
        class="fixed-top"
      />
    </form>
    <div class="space"></div>
    <Fixednav></Fixednav>
  </div>
</template>

<script>
import Fixednav from './common_components/Fixed_nav';
import Conversation from './common_components/Conversation';
import Article from './common_components/Article';
import { mapGetters } from 'vuex';
export default {
  name: 'myzone',
  data () {
    return {
      uname: '',
      active: 0,
      keywords: '',
      isShowSearchBox: false,
    };
  },
  mounted () {
  },
  computed: {
    ...mapGetters([
      'getImitateConversation', // 获取模拟对话
      'getImitateArticleList', // 获取模拟文章列表
    ])
  },
  methods: {
    changeTab(index, title) {
      // this.$toast(title);
    },
    openSearchBox () {
      this.isShowSearchBox = true;
    },
    onCancel(){
      this.keywords = '';
      this.isShowSearchBox = false;
    },
    onSearch () {
      if (!this.keywords) {this.$toast('请输入搜索关键词'); return}
      // this.$store.dispatch('setKeywords', this.keywords);
      this.$router.push('/result/'+this.keywords);
    }
  },
  components: {
    Fixednav,
    Conversation,
    Article,
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
