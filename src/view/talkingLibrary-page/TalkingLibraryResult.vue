<template>
  <div>
    <div class="pdl15 pdr15 white-bg flex-align-center top-zone">
      <van-icon name="arrow-left" class="top-zone-left" @click="onClickLeft"/>
      <form action="/" class="top-zone-right">
        <van-search
          v-model="keywords"
          placeholder="请输入搜索关键词"
          @search="onSearch"
          clear
        />
      </form>
    </div>
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
  components: {
    Conversation,
  },
  data () {
    return {
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
    onClickLeft(){
      this.COMMONFUNC.goBack();
    },
    // 查询
    onSearch () {
      if (!this.keywords) {this.$toast('请输入搜索关键词'); return}
      this.$store.dispatch('setKeywords', this.getKeywords);
      this.$toast('查询成功');
    }
  },
};
</script>

<style lang="less" scoped>
  .top-zone{
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 999;
  }
  .top-zone-left{
    font-size: 18px;
  }
  .top-zone-right{
    width: 100%;
  }
  .top-space{
    height: 1.5rem
  }
</style>
