<template>
  <div>
    <!-- 顶部 -->
    <van-nav-bar
      title="购买金币"
      right-text="充值帮助"
      left-arrow
      @click-left="onClickLeft"
      @click-right="toRechargeHelp"
      fixed
    />
    <div class="top-space"></div>
    <van-notice-bar
      text="开业大酬宾，充值金币满100送10，充的越多，送的越多，快快参加吧"
      left-icon="volume-o"
    />
    <!-- 充值列表区域 -->
    <div class="shopList-zone">
      <van-button plain :type=" currentSelect == index ? 'danger' : 'default' " v-for="(item, index) in shopList"  @click="selectShop(index, item)" class="shop-btn">
        <span>{{item.value}}</span>
        <van-tag plain type="danger" v-if="item.tag">{{item.tag}}</van-tag>
      </van-button>
    </div>
    <!-- 优惠券单元格 -->
    <div class="coupon-zone">
      <Coupon @sendCouponNum="getCouponNum" :msg="msg"></Coupon>
    </div>
    <van-submit-bar
      :disabled="isShoping"
      :price="price"
      button-text="提交订单"
      :tip="shopTips"
      @submit="onSubmit"
    >
      <!-- <div>共：166金币</div> -->
    </van-submit-bar>
  </div>
</template>
<script>
  import Coupon from 'components/common_components/Coupon';
  import Vue from 'vue';
  export default {
    components:{
      Coupon,
    },
    name: 'shopping',
    data () {
      return {
        shopList: [
          {
            num: 9.98,
            value: '20金币（￥9.98）',
            tag: '促销', // 商品标签
            goldCoin: '20金币', // 价值金币
            extraGoldCoin: 0,  // 赠送金币
          },
          {
            num: 19.88,
            value: '40金币（￥19.88）',
            tag: '推荐', // 商品标签
            goldCoin: '50金币', // 价值金币
            extraGoldCoin: 0,  // 赠送金币
          },
          {
            num: 38,
            value: '80金币（￥38）',
            tag: '推荐', // 商品标签
            goldCoin: '80金币', // 价值金币
            extraGoldCoin: 0,  // 赠送金币
          },
          {
            num: 68,
            value: '150金币（￥68）',
            tag: '优选', // 商品标签
            goldCoin: '150金币', // 价值金币
            extraGoldCoin: 5,  // 赠送金币
          },
          {
            num: 88,
            value: '200金币（￥88）',
            tag: '优选', // 商品标签
            goldCoin: '200金币', // 价值金币
            extraGoldCoin: 5,  // 赠送金币
          },
          {
            num: 128,
            value: '350金币（￥128）',
            tag: '优选', // 商品标签
            goldCoin: '350金币', // 价值金币
            extraGoldCoin: 10,  // 赠送金币
          },
          {
            num: 168,
            value: '500金币（￥168）',
            tag: '爆款', // 商品标签
            goldCoin: '500金币', // 价值金币
            extraGoldCoin: 30,  // 赠送金币
          },
          {
            num: 318,
            value: '1000金币（￥318）',
            tag: '爆款', // 商品标签
            goldCoin: '1000金币', // 价值金币
            extraGoldCoin: 30,  // 赠送金币
          },
          {
            num: 588,
            value: '2000金币（￥588）',
            tag: '壕', // 商品标签
            goldCoin: '2000金币', // 价值金币
            extraGoldCoin: 50,  // 赠送金币
          },
          {
            num: 1388,
            value: '5000金币（￥1388）',
            tag: '壕', // 商品标签
            goldCoin: '5000金币', // 价值金币
            extraGoldCoin: 50,  // 赠送金币
          },
        ],
        currentSelect: 1,  // 当前选中
        isShoping: false, // 是否交易中
        price: 1990, // 价格，分为单位
        shopTips: '166金币权益，额外再赠送：10金币', // 充值提示
        isCounponed: 1, // 是否已经优惠，0-是，1-否
        couponNum: 0, // 优惠金额
        msg: 0,
      };
    },
    mounted () {
    },
    computed: {    },
    methods: {
      onClickLeft(){
        this.COMMONFUNC.goBack();
      },
      // 提交商品
      onSubmit () {
        let that = this;
        that.isShoping = true;
        setTimeout(() => {
          that.isShoping = false;
          that.$router.push({ name: 'payment', params: { orderId: 'orderId001' } })
        }, 1000);
      },
      // 选择商品
      selectShop (index, item) {
        this.currentSelect = index;
        this.price = item.num * 100;
        this.price -= this.couponNum;
        this.shopTips = item.goldCoin + '权益，额外再赠送：' + item.extraGoldCoin + '金币';
      },
      // 获取优惠金额
      getCouponNum (msg) {
        // 优惠金额取消
        this.price += this.couponNum; // 加回去原来的金额
        this.price -= msg;
        this.couponNum = msg;
      },
      // 前往帮助中心
      toRechargeHelp () {
        this.$router.push({ name: 'goldCoinRechargeDesc' })
      }
    }
}
</script>

<style lang="less" scoped>
  .shopList-zone{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 0.4rem 0 0 0;
  }
  .shop-btn{
    width: 4.533rem;
    margin: 0.133rem 0.133rem;
    padding: 0;
  }
  .coupon-zone{
    margin: 1rem 0 0 0;
  }
</style>
