<template>
  <div class="white-bg goodsList">
    <van-nav-bar
      left-arrow
      @click-left="onClickLeft"
      title="兑换商城"
      right-text="我的兑换"
      @click-right="onClickRight"
      fixed
    />
    <!-- 撑开Fixednav挡住的位置 -->
    <div class="top-space"></div>
    <!-- 当前金币 -->
    <div class="flex-center pd15 userGold">
      <router-link :to="{ name: 'taskCenter', params: {} }">
        <div class="gold-color">
          <van-icon name="gold-coin-o" class="gold-color" />
          <span class="goldCoin">{{goldCoin}}</span>
        </div>
      </router-link>
    </div>
    <van-search placeholder="请输入搜索关键词" v-model="searchValue" />
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in swiptImages" :key="index" >
        <router-link :to="{ name: 'goodsDetail', params: { goodsId: 'goodsId00001'} }">
          <img v-lazy="image" class="swipe-img" />
        </router-link>
      </van-swipe-item>
    </van-swipe>
    <!-- 商品类目 -->
    <div class="mgt10">
      <router-link :to="{ name: 'goodsClassify', params: { classifyId: 'classifyId001'} }" v-for="(item, index) in getImitateGoodsClassifyList">
        <div class="mgb5 classify-item">
          <img class="van-avatar" src="http://img4.imgtn.bdimg.com/it/u=1150747124,801627506&fm=26&gp=0.jpg"></img>
          <div>{{item.name}}</div>
        </div>
      </router-link>
    </div>
    <!-- 推荐商品展示区 标题-->
    <van-cell is-link value="更多" class="mgt15" @click="toGoodsClassify">
      <template slot="title">
        <span class="classify-title">精选爆款</span>
      </template>
    </van-cell>
    <!-- 推荐商品展示区 列表-->
    <ShoppingMallGoodCard :goodsList="getImitateGoodsList"></ShoppingMallGoodCard>
    <!-- 推荐商品展示区 标题-->
    <van-cell is-link value="更多" class="mgt15" @click="toGoodsClassify">
      <template slot="title">
        <span class="classify-title">品牌联盟</span>
      </template>
    </van-cell>
    <!-- 推荐商品展示区 列表-->
    <ShoppingMallGoodCard :goodsList="getImitateGoodsList"></ShoppingMallGoodCard>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ShoppingMallGoodCard from 'components/child_components/ShoppingMall_components/ShoppingMallGoodCard';
export default {
  name: 'goodsList',
  components: {
    ShoppingMallGoodCard,
  },
  data () {
    return {
      searchValue: '',  // 搜索关键词
      goldCoin: 100,
      swiptImages: [
        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=32246159,1850476516&fm=26&gp=0.jpg',
        'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2412391619,1402500369&fm=26&gp=0.jpg',
        'http://img4.imgtn.bdimg.com/it/u=1150747124,801627506&fm=26&gp=0.jpg',
      ],
    };
  },
  mounted () {

  },
  computed: {
    ...mapGetters([
      'getImitateGoodsClassifyList',  // 模拟商品分类列表
      'getImitateGoodsList',  // 模拟商品列表
    ])
  },
  methods: {
    onClickLeft(){
      this.COMMONFUNC.goBack();
    },
    onClickRight() {
      this.$router.push({
        name: 'myExchange',
        params: {
          userId: 'userId0001',
        },
      })
    },
    // 前往商品分类
    toGoodsClassify () {
      this.$router.push({
        name: 'goodsClassify',
        params: {
          classifyId: 'classifyId0001',
        },
      })
    }
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
  .userGold{
    background-color: #006599;
  }
  .myGold{
    font-size: 14px;
    color: #fff;
  }
  .goldCoin{
    font-size: 32px;
  }
</style>
