<template>
  <van-tabbar v-model="active" style="z-index:999" @change="changeTab" active-color="#000">
    <van-tabbar-item icon="home-o" :to="{ name: 'home' }">首页</van-tabbar-item>
    <van-tabbar-item icon="browsing-history-o" :to="{ name: 'recommend' }">推荐</van-tabbar-item>
    <van-tabbar-item icon="add" :to="{ name: 'publishPost' }">发表</van-tabbar-item>
    <van-tabbar-item icon="chat-o" info="25" :to="{ name: 'message' }">消息</van-tabbar-item>
    <van-tabbar-item icon="manager-o" :to="{ name: 'myzone' }">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'fixed_nav',
  components: {
  },
  data () {
    return {
      popupShow: false,
    };
  },
  mounted () {
    this.COMMONFUNC.deleteCookie("activeTab","/");
    this.COMMONFUNC.addCookie("activeTab",this.active,"","/");
  },
  computed: {
    active: {
      // 解决 页面上切换tab的时候，vant会去改active的值，根据地址栏确定高亮菜单序列
      get: function () {
        if(window.location.hash.indexOf('index') !== -1){
          return 0;
        }else if(window.location.hash.indexOf('recommend') !== -1){
          return 1;
        }else if(window.location.hash.indexOf('message') !== -1){
          return 3;
        }else if(window.location.hash.indexOf('myzone') !== -1){
          return 4;
        }else {
          return this.$store.state.activeTab;
        }
      },
      set: function () {
      }
    }
  },
  methods: {
    changeTab (index) {
      this.$store.state.activeTab = index;
    }
  }
};
</script>

<style lang="less" scoped>
</style>
