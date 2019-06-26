<!-- 共获得赞数 -->
<template>
  <div>
    <div v-for="(item, index) in goodsList" class="white-bg goods-item">
      <div class="goods-item-box" @click="toGoodsDetail(item)">
        <img class="goods-image" :src="item.image"></img>
        <div class="van-ellipsis mgt5">{{item.name}}</div>
        <div class="mgt5 gold-color" v-if="item.needMoney > 0">{{item.needGoldCoin}}金币+{{item.needMoney}}元</div>
        <div class="mgt5 gold-color" v-else>{{item.needGoldCoin}}金币</div>
        <van-button plain round type="warning" size="mini" class="mgt5" @click.stop="exchange(item)">立即兑换</van-button>
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
      currentCoin: 1000, // 当前拥有金币
    };
  },
  mounted () {

  },
  computed: {

  },
  methods: {
    // 兑换商品
    exchange(item) {
      let that = this;
      if(item.needGoldCoin > that.currentCoin){
        that.$dialog.confirm({
          title: '提示',
          message: '金币不足，前往任务中心赚钱积分',
          confirmButtonText: '立即前往',
          cancelButtonText: '取消'
        }).then(() => {
          that.$router.push( {
            name: 'taskCenter',
            params: ''
          })
        }).catch(() => {
          // on cancel
        });
      }else {
        that.$dialog.confirm({
          title: '注意！',
          message: '如果是虚拟商品，如兑换码，优惠券等，则不需要填写地址',
        }).then(() => {
          that.$router.push( {
            name: 'receivingAddress',
            params: { userId: item.userId },
          })
        }).catch(() => {
          // on cancel
        });
      }
    },
    // 前往商品详情
    toGoodsDetail (item) {
      this.$router.push( {
        name: 'goodsDetail',
        params: { goodsId: 'userId0001' },
        query: { goodsType: item.goodsType }
      })
    }
  },
  watch: {

  }
};
</script>

<style lang="less" scoped>
  .goods-item{
    display: flex;
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
