<template>
  <div>
    <van-tabbar v-model="active" style="z-index:999" @change="changeTab">
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="browsing-history-o" :to="'/Recommend'">推荐</van-tabbar-item>
      <van-tabbar-item icon="add" @click="publish">发表</van-tabbar-item>
      <van-tabbar-item icon="chat-o" info="5" :to="'/Message'">消息</van-tabbar-item>
      <van-tabbar-item icon="manager-o" :to="'/Myzone'">我的</van-tabbar-item>
    </van-tabbar>
    <addConversation :popupShow="popupShow" @closePop-ok="closePop" ></addConversation>
  </div>
</template>

<script>
import addConversation from '../AddConversation';
import { mapGetters } from 'vuex';
export default {
  name: 'fixed_nav',
  components: {
    addConversation,
  },
  data () {
    return {
      popupShow: false,
    };
  },
  mounted () {
  },
  computed: {
    active: {
      // 解决 页面上切换tab的时候，vant会去改active的值
      get: function () {
        return this.$store.state.activeTab;
      },
      set: function () {
      }
    }
  },
  methods: {
    publish () {
      this.popupShow = true;
    },
    closePop () {
      this.popupShow = false;
    },
    changeTab (index) {
      this.$store.state.activeTab = index
    }
  }
};
</script>

<style lang="less" scoped>
</style>
