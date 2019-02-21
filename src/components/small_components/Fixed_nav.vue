<template>
  <div>
    <van-tabbar v-model="active" style="z-index:999">
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="search" dot :to="'/Recommend'">推荐</van-tabbar-item>
      <van-tabbar-item icon="add" @click="publish">发表</van-tabbar-item>
      <van-tabbar-item icon="friends-o" info="5" :to="'/Message'">消息</van-tabbar-item>
      <van-tabbar-item icon="setting-o" info="20" :to="'/Myzone'">我的</van-tabbar-item>
    </van-tabbar>
    <addConversation :popupShow="popupShow" @closePop-ok="closePop" ></addConversation>
  </div>
</template>

<script>
import addConversation from '../AddConversation';
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
    setInterval(() => {
      // console.log(this.returnPageNow);
    }, 2000);
  },
  computed: {
    returnPageNow () {
      return this.$store.getters.getwhichpage;
    }
  },
  methods: {
    publish () {
      this.popupShow = true;
    },
    closePop () {
      this.popupShow = false;
    },
  }
};
</script>

<style lang="less" scoped>
</style>
