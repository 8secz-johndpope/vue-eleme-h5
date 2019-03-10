<template>
  <div class="content-box">
    <van-tabs v-model="active" type="card" @click="changeTab" class="tab">
      <van-tab title="话术">
        <Conversation :composition="getImitateConversation" class="item-box"></Conversation>
      </van-tab>
      <van-tab title="文章">
        <Article :composition="getImitateArticleList" class="item-box"></Article>
      </van-tab>
    </van-tabs><!-- 撑开Fixednav挡住的位置 -->
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
      this.$toast(title);
    },
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
</style>
