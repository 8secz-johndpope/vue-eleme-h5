<template>
  <div class="content-box">
    <van-tabs v-model="active" type="card" @click="onClick" class="tab">
      <van-tab title="推荐">
        <Conversation :composition="getImitateConversation" class="item-box"></Conversation>
      </van-tab>
      <van-tab title="好友">
        <Conversation :composition="getImitateConversation"></Conversation>
      </van-tab>
    </van-tabs>
    <Fixednav></Fixednav>
  </div>
</template>

<script>
import Fixednav from './small_components/Fixed_nav';
import Conversation from './small_components/Conversation';
import { mapGetters } from 'vuex';
export default {
  name: 'myzone',
  data () {
    return {
      uname: '',
      active: 0,
      show: false,
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
    onClick(index, title) {
      this.$toast(title);
    },
  },
  components: {
    Fixednav,
    Conversation,
  }
};
</script>

<style lang="less" scoped>
  .item-box{
    margin-top: 15px;
  }
</style>
