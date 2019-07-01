<template>
  <div class="content-box">
    <form action="/">
      <van-search
        v-model="keywords"
        placeholder="请输入搜索关键词"
        show-action
        @search="onSearch"
        @cancel="onCancel"
        class="fixed-top"
      />
    </form>
    <!-- 空格 -->
    <div class="top-space"></div>
    <Conversation :composition="getImitateConversation"></Conversation>
    <!-- 撑开Fixednav挡住的位置 -->
    <div class="space"></div>
  </div>
</template>

<script>
import Conversation from 'components/common_components/Conversation';
import { mapGetters } from 'vuex';
export default {
  name: 'talkingLibraryResult',
  data () {
    return {
      uname: '',
      active: 0,
      keywords: '',
    };
  },
  mounted () {
    this.keywords = this.getKeywords;
  },
  computed: {
    ...mapGetters([
      'getImitateConversation', // 获取模拟对话
      'getKeywords',  // 获取关键词
    ])
  },
  methods: {
    // 取消返回上一页
    onCancel(){
      this.$store.dispatch('setKeywords', '');
      this.COMMONFUNC.goBack();
    },
    // 查询
    onSearch () {
      if (!this.keywords) {this.$toast('请输入搜索关键词'); return}
      this.$store.dispatch('setKeywords', this.getKeywords);
      this.$toast('查询成功');
    }
  },
  components: {
    Conversation,
  }
};
</script>

<style lang="less" scoped>
  .fixed-top{
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;
  }
  .top-space{
    height: 1.3rem
  }
</style>
