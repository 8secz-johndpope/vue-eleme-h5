<template>
  <div class="content-box">
    <van-nav-bar title="结果页" left-text="返回" left-arrow>
      <van-icon name="search" slot="right" @click="clickSearchBtn"/>
    </van-nav-bar>
    <form action="/">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <Conversation :composition="getImitateConversation" class="item-box"></Conversation>
    <!-- 撑开Fixednav挡住的位置 -->
    <div class="space"></div>
  </div>
</template>

<script>
import Conversation from './Conversation';
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
    ])
  },
  methods: {
    
  },
  components: {
    Conversation,
  }
};
</script>

<style lang="less" scoped>
  .item-box{
    margin-top: 15px;
  }
</style>
