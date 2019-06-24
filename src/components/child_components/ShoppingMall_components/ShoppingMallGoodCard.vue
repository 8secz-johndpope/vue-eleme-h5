<!-- 共获得赞数 -->
<template>
  <div>
    <div v-for="(item, index) in goodsList" class="white-bg goods-item">
      <div class="goods-item-box">
        <img class="goods-image" :src="item.image"></img>
        <div class="van-ellipsis mgt5">{{item.name}}</div>
        <div class="mgt5 gold-color" v-if="item.needMoney > 0">{{item.needGoldCoin}}金币+{{item.needMoney}}元</div>
        <div class="mgt5 gold-color" v-else>{{item.needGoldCoin}}金币</div>
        <van-button plain round type="warning" size="mini" class="mgt5" @click="exchange(item)">立即兑换</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
// 数组对象vant复选框不主动渲染，故转化成数组形式
export default {
  name: 'shoppingMallGoodCard',
  props: {
    // 选择的话题列表--对象
    goodsList: {
      type: Array,
      default: ()=>[]
    },
  },
  data () {
    return {

    };
  },
  mounted () {

  },
  computed: {

  },
  methods: {
    // 兑换商品
    exchange(item) {
      
    }
  },
  watch: {

  }
};
</script>

<style lang="less" scoped>
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
