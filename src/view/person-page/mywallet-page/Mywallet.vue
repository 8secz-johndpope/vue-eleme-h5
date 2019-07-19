<template>
  <div class="mywallet">
    <!-- 顶部 -->
    <van-nav-bar
      title="我的钱包"
      right-text="充值记录"
      left-arrow
      @click-left="onClickLeft"
      @click-right="toRechargeRecord"
    />
    <div class="white-bg pd15">
      <div class="font-14">
        <span>账户余额（金币：枚）</span>
      </div>
      <div class="flex-space-between pdt15">
        <div class="gold-color flex-align-center amount">
          <van-icon name="gold-coin-o" class="mgr5"></van-icon>
          <span>1,000</span>
        </div>
        <router-link :to="{ name: 'buyCoin' }" >
          <van-button size="small" type="danger">点我充值</van-button>
        </router-link>
      </div>
    </div>
    <!-- 优惠券单元格 -->
    <Coupon :componentsType="1"></Coupon>
    <van-cell title="兑换商城" is-link to="/shoppingMall/shoppingMallIndex" />
    <van-cell title="金币说明" is-link to="/document/goldCoinRechargeDesc" />
    <van-cell title="常见问题" is-link to="/document/rechargeHelp" />
  </div>
</template>
<script>
  import Coupon from 'components/common_components/Coupon';
  export default {
    components:{
      Coupon,
    },
    name: 'mywallet',
    data () {
      return {
      }
    },
    mounted () {

    },
    computed: {

    },
    methods: {
      onClickLeft(){
        this.COMMONFUNC.goBack();
      },
      // 前往充值记录
      toRechargeRecord () {
        this.$router.push({  //核心语句
          name:'rechargeRecord'   //跳转的路径
          // path:'rechargeRecord'   //跳转的路径
          // query:{           //路由传参时push和query搭配使用 ，作用时传递参数
          //   id:this.id ,
          // }
        })
      },
    }
}
</script>

<style lang="less" scoped>
  .amount{
    font-family: Arial, "Microsoft YaHei";
    font-size: 0.8rem;
  }
</style>
