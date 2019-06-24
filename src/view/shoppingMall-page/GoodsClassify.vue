<template>
  <div class="white-bg goodsList">
    <van-nav-bar
      left-arrow
      @click-left="onClickLeft"
      title="分类名"
      fixed
    />
    <!-- 撑开Fixednav挡住的位置 -->
    <div class="top-space"></div>
    <van-search placeholder="请输入搜索关键词" v-model="searchValue" />
    <!-- 推荐商品展示区 列表-->
    <div>
      <ShoppingMallGoodCard :goodsList="getImitateGoodsList"></ShoppingMallGoodCard>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ShoppingMallGoodCard from 'components/child_components/ShoppingMall_components/ShoppingMallGoodCard';
export default {
  name: 'goodsClassify',
  components: {
    ShoppingMallGoodCard,
  },
  data () {
    return {
      searchValue: '',  // 搜索关键词
    };
  },
  mounted () {

  },
  computed: {
    ...mapGetters([
      'getImitateGoodsList',  // 模拟商品列表
    ])
  },
  methods: {
    onClickLeft(){
      this.COMMONFUNC.goBack();
    },
  },
};
</script>

<style lang="less" scoped>
  .swipe-img{
    width: 10rem;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 3rem;
  }
  .classify-item{
    width: 25%;
    height: 1.8rem;
    float: left;
    text-align: center;
    line-height: 30px;
  }
  .classify-title{
    font-size: 18px;
  }
  .goods-item{
    float: left;
    width: 33%;
    height: 5rem;
    text-align: center;
  }
  .goods-item-box{
    padding: 0 10px 10px 10px;
  }
  .van-ellipsis{
    max-width: 3rem;
    margin: 0 auto;
  }
  .goods-image{
    width: 3rem;
    height: 3rem;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
</style>
