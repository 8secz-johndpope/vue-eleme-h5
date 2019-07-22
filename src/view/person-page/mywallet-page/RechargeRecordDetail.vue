<template>
  <div>
    <!-- 顶部 -->
    <van-nav-bar
      title="订单详情"
      left-arrow
      right-text="对订单有疑问"
      @click-left="onClickLeft"
      @click-right="onClickRight"
      fixed
    />
    <div class="top-space"></div>
    <!-- 付款成功 -->
    <div>
      <div class="pd15 white-bg">
        <div class="dy-font-color">订单状态：</div>
        <div class="flex-center font-20 font-bold">{{ orderState === 0 ? '已完成' :  orderState === 1 ? '待付款' : '已取消' }}</div>
      </div>
      <van-cell-group>
        <van-cell title="充值金币" value="1366" />
        <van-cell title="赠送金币" value="30" />
        <van-cell title="付款总金额" value="182元" />
        <van-cell title="优惠金额" value="2元" />
        <van-cell title="实际付款金额" value="180元" />
      </van-cell-group>
      <van-cell-group title="订单信息">
        <van-cell title="订单号" value="20190720190718" />
        <van-cell title="下单时间" value="2019.07.08 20:25" />
      </van-cell-group>
    </div>
    <div class="footer-space"></div>
    <div class="footer-space"></div>
    <div class="fixed-footer-btn-zone" v-if="orderState === 1">
      <div class="width-100"><van-button class="width-100" type="danger" @click="continueBuy">继续付款</van-button></div>
      <div class="width-100 mgt"><van-button class="width-100" type="default" @click="cancelOrder">取消订单</van-button></div>
    </div>
    <div class="fixed-footer-btn-zone" v-else>
      <div class="width-100"><van-button class="width-100" type="danger" @click="bugAgain">再来一单</van-button></div>
    </div>
  </div>
</template>
<script>
  export default {
    components:{
    },
    name: 'rechargeRecordDetail',
    data () {
      return {
        orderState: 1, // 0-已完成 1-待付款 2-已取消
        recordIcon: require('images/icon/zhangdan.png'),
      };
    },
    mounted () {
    },
    methods: {
      onClickLeft () {
        this.COMMONFUNC.goBack();
      },
      onClickRight () {
        this.$router.push({ name: 'rechargeHelp' })
      },
      // 继续购买
      continueBuy () {
        this.$router.push({ name: 'payment', params: { orderId: 'orderId001' } })
      },
      // 取消订单
      cancelOrder () {
        let that = this;
        this.$dialog.confirm({
          title: '提示',
          message: '确定取消订单吗'
        }).then(() => {
          that.$toast('订单取消成功')
          that.orderState = 2;
        }).catch(() => {
          // on cancel
        });
      },
      // 再来一单
      bugAgain () {
        this.$router.push({ name: 'buyCoin' })
      },
    },
    watch: {
    },
    computed: {
    }
}
</script>

<style lang="less" scoped>
  .fixed-footer-btn-zone{
    bottom: 0;
  }
</style>
