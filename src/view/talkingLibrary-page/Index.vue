<template>
  <div>
    <div>
      <van-nav-bar
        title="恋爱话术"
        left-arrow
        @click-left="onClickLeft"
        >
      </van-nav-bar>
    </div>
    <van-search
      v-model="keywords"
      placeholder="请输入搜索关键词"
      show-action
      @search="onSearch"
    >
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index" class="flex-center swipe-img-zone">
        <img v-lazy="image" class="swipe-img" />
      </van-swipe-item>
    </van-swipe>
    <van-panel class="mg15 pd10" v-for="(menuItem, index) in getImitateMenu">
      <div slot="header">
        <i class="fa fa-heart red-color" aria-hidden="true"></i><span class="main-name">{{menuItem.levelOneName}}</span>
      </div>
      <div class="flex-start">
        <router-link v-for="(child_item, child_index) in menuItem.menuList" :to="'/result/' + child_item.listId" >
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
import Fixednav from 'components/common_components/Fixed_nav';
import { mapGetters } from 'vuex';
export default {
  name: 'home',
  data () {
    return {
      showMe: false, // 是否展示当前页面
      keywords: '',  // 搜索词
      images: [
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550992736&di=b5f7eaa82f8368773fc73615fdec6ee4&imgtype=jpg&er=1&src=http%3A%2F%2Fphoto.16pic.com%2F00%2F11%2F23%2F16pic_1123089_b.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550992736&di=b5f7eaa82f8368773fc73615fdec6ee4&imgtype=jpg&er=1&src=http%3A%2F%2Fphoto.16pic.com%2F00%2F11%2F23%2F16pic_1123089_b.jpg',
      ]
    };
  },
  mounted () {
  },
  beforeDestroy () {
  },
  computed: {
    ...mapGetters([
      'getLogin',
      'getFalseHotWord',
      'getImitateMenu' // 话术分类信息
    ])
  },
  methods: {
    onSearch () {
      if (!this.keywords) {this.$toast('请输入搜索关键词'); return}
      this.$store.dispatch('setKeywords', this.keywords);
      this.$router.push('/result/'+this.keywords);
    },
    onClickLeft(){
      this.COMMONFUNC.goBack();
    },
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
    margin: 0.312rem 0.156rem 0 0.156rem;
    width: 2.57rem;
    padding: 0 0.156rem;
    height: 1.094rem;
    line-height: 1.094rem;
  }
  .main-name{
    margin-left: 0.312rem;
  }
  .panel-header{
    padding-top: 0.312rem;
  }
  .swipe-img-zone{
    width: 34.375rem;
    height: 13.125rem;
  }
  .swipe-img{
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 9.333rem;
    height: 4.0rem;
    padding: 0.1rem 0.4rem 0 0.4rem;
  }
</style>
