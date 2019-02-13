<template>
    <!-- 列表单个商家 -->

  <van-tabbar v-model="active" style="z-index:9999">
    <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
    <van-tabbar-item icon="search" dot :to="'/Recommend'">推荐</van-tabbar-item>
    <van-tabbar-item icon="friends-o" info="5" :to="'/Myfans'">消息</van-tabbar-item>
    <van-tabbar-item icon="setting-o" info="20" :to="'/Myzone'">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: 'fixed_nav',
  data () {
    return {
      active: 0
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

  }
};
</script>

<style lang="less" scoped>

</style>
