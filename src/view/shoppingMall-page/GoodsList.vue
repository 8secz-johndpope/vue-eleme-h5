<template>
  <div class="white-bg goodsList">
    <van-nav-bar 
      left-arrow 
      @click-left="onClickLeft" 
      title="兑换商城" 
      right-text="使用说明"
      @click-right="onClickRight"
      fixed 
    />
    <!-- 撑开Fixednav挡住的位置 -->
    <div class="top-space"></div>
    <van-search placeholder="请输入搜索关键词" v-model="searchValue" />
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in swiptImages" :key="index" >
        <router-link :to="{ name: 'goodsDetail', params: { goodsId: 'goodsId00001'} }">
          <img v-lazy="image" class="swipe-img" />
        </router-link>
      </van-swipe-item>
    </van-swipe>
    <div class="mgt10">
      <router-link :to="{ name: 'goodsDetail', params: { goodsId: 'goodsId00001'} }" v-for="(item, index) in getImitateGoodsClassifyList"> 
        <div class="mgb10 classify-item">
          <img class="van-avatar" src="http://img4.imgtn.bdimg.com/it/u=1150747124,801627506&fm=26&gp=0.jpg"></img>
          <div class="mgt5">{{item.name}}</div>
        </div>
      </router-link>
    </div>
    <!-- 推荐商品展示区 标题-->
    <van-cell is-link value="更多" class="mgt15">
      <template slot="title">
        <span class="classify-title">每日精选</span>
      </template>
    </van-cell>
    <!-- 推荐商品展示区 列表-->
    <div>
      <div v-for="(item, index) in getImitateGoodsList" class="white-bg goods-item">
        <div class="goods-item-box">
          <img class="goods-image" :src="item.image"></img>
          <div class="van-ellipsis mgt5">{{item.name}}</div>
          <div class="mgt5 gold-color" v-if="item.needMoney > 0">{{item.needGoldCoin}}金币+{{item.needMoney}}元</div>
          <div class="mgt5 gold-color" v-else>{{item.needGoldCoin}}金币</div>
          <van-button plain round type="warning" size="mini" class="mgt5">立即兑换</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'goodsList',
  components: {
  },
  data () {
    return {
      searchValue: '',  // 搜索关键词
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
        name: 'goodsList',
        params: '',
      })
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
