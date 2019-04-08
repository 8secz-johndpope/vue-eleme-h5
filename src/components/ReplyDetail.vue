<template>
  <div>
    <div class="fixed-top">
      <van-nav-bar
      left-arrow
      @click-left="onClickLeft"
      />
    </div>
    <div class="fixed-content-box replyDetail-box">
      <Conversation :composition="conversationArr" :isRecommend="false"></Conversation>
    </div>
  </div>
</template>

<script>
import Conversation from './common_components/Conversation';
import { mapGetters } from 'vuex';
export default {
  name: 'replyDetail',
  data () {
    return {
      conversationArr: [],  // 单个评论
    };
  },
  mounted () {
    this.conversationArr = this.getImitateConversation.splice(0,1);
  },
  computed: {
    ...mapGetters([
      'getImitateConversation', // 获取模拟对话
    ]),
  },
  methods: {
    onClickLeft(){
      this.COMMONFUNC.goBack();
    },
  },
  components: {
    Conversation,
  }
};
</script>

<style lang="less" scoped>
  .replyDetail-box{
    margin-top: 1.5rem;
  }
</style>
