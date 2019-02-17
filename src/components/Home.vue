<template>
  <div>
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      show-action
      @search="onSearch"
    >
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <van-panel class="mg15 pd10" v-for="(menuItem, index) in getImitateMenu">
      <div slot="header">
        <i class="fa fa-heart red-color" aria-hidden="true"></i><span class="main-name">{{menuItem.levelOneName}}</span>
      </div>
      <div class="flex-space-between">
        <router-link v-for="(child_item, child_index) in menuItem.menuList" :to="'/business/' + child_item.listId" >
          <van-button type="danger" class="item-linear">{{child_item.levelTwoName}}</van-button>
        </router-link>
      </div>
    </van-panel>
    <!-- 撑开Fixednav挡住的位置 -->
    <div class="space"></div>
    <!-- 固定标签页 -->
    <Fixednav></Fixednav>
  </div>
</template>

<script>
import Fixednav from './small_components/Fixed_nav';
import { mapGetters } from 'vuex';

export default {
  name: 'home',
  data () {
    return {
      showMe: false, // 是否展示当前页面
      value: '',  // 搜索词
      images: [
        'https://avatars1.githubusercontent.com/u/34303195?s=460&v=4',
        'https://img.yzcdn.cn/2.jpg'
      ]
    };
  },
  mounted () {

  },
  beforeDestroy () {

  },
  computed: {
    // 使用对象展开运算符将 getters 混入 computed 对象中
    // 等同于
    // isLogin () {
    //   return this.$store.getters.getLogin
    // }
    // 能少写不少代码
    ...mapGetters([
      'getLogin',
      'getFalseHotWord',
      'getImitateMenu' // 商家简略信息
    ])
  },
  methods: {
    onSearch () {
      this.$toast(this.value)
    }
  },
  components: {
    Fixednav,
  }
};
</script>

<style lang="less" scoped>
  .item-linear{
    background: linear-gradient(to right, #f38181, #e46d27, #f31802);
    border: 0;
    margin: 10px 5px 0 5px;
    width: 95px;
    padding: 0 5px;
    height: 35px;
    line-height: 35px;
  }
  .main-name{
    margin-left: 10px; 
  }
  .panel-header{
    padding-top: 10px;
  }
</style>
