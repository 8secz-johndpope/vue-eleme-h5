<template>
  <div id="app">
    <!--缓存想要缓存的页面，实现后退不刷新-->
    <!--加上v-if的判断，可以自定义想要缓存的组件，自定义在router里面-->
    <keep-alive v-if="$route.meta.keepAlive">
        <router-view></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    isLoading () {
      return this.$store.getters.getloading;
    }
  },
  data () {
    return {

    }
  }

};
</script>

<style lang="less">
@import "./css/common.less";
</style>
