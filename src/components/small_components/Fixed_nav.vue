<template>
    <!-- 列表单个商家 -->

  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o">标签</van-tabbar-item>
    <van-tabbar-item icon="search" dot :to="'/business/s10001'">商家</van-tabbar-item>
    <van-tabbar-item icon="friends-o" info="5" :to="'/Myfans'">粉丝</van-tabbar-item>
    <van-tabbar-item icon="setting-o" info="20">标签</van-tabbar-item>
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
  .fixed_nav{
     width:10rem;
     height:1.2rem;
     background:#fff;
     position:fixed;
     left:0;
     right:0;
     bottom:0;
     font-size: .28rem;
     z-index: 999;
     svg{
      width:.45rem;
      height: .45rem;
      display:block;
      margin: .2rem auto .1rem;
     }
     .one_fixed_nav {
        width: 19.3%;
        display: inline-block;
        height: 1.2rem;
        text-align: center;
        line-height: 1.2rem;
        font-size: 0.35rem;
    }
  }
</style>
