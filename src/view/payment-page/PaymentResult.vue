<template>
  <div>
    <!-- 顶部 -->
    <van-nav-bar
      :title=" payState === 0 ? '付款成功' : payState === 1 ? '付款中' : payState === 2 ? '付款失败' : '付款异常' "
      left-arrow
      @click-left="onClickLeft"
      fixed
    />
    <div class="top-space"></div>
    <!-- 付款成功 -->
    <div>
      <div class="white-bg tcenter pdb20">
        <div v-if="payState === 0">
          <img :src="img_pay_success" class="mgt20 img-common" />
          <div class="font-20 mgt10">付款成功</div>
        </div>
        <div v-else-if="payState === 1">
          <img :src="img_pay_ing" class="mgt20 img-common" />
          <div class="font-20 mgt10">付款中</div>
        </div>
        <div v-else-if="payState === 2">
          <img :src="img_pay_failure" class="mgt20 img-common" />
          <div class="font-20 mgt10">付款失败</div>
        </div>
        <div v-else-if="payState === 3">
          <img :src="img_pay_abnormal" class="mgt20 img-common" />
          <div class="font-20 mgt10">付款异常</div>
        </div>
      </div>
      <van-cell-group>
        <van-cell title="订单号" value="20190720190718" />
        <van-cell title="付款总金额" value="182元" />
        <van-cell title="优惠金额" value="2元" />
        <van-cell title="实际付款金额" value="180元" />
      </van-cell-group>
    </div>
    <div class="fixed-footer-btn-zone" v-if="payState !== 0">
      <div class="width-100"><van-button class="width-100" type="danger" @click="okPay">已完成付款</van-button></div>
      <div class="width-100"><van-button type="default" class="width-100" @click="cancelPay">取消付款</van-button></div>
    </div>
    <div class="fixed-footer-btn-zone" v-else>
      <div class="width-100"><van-button class="width-100" type="danger" @click="finishPay">完成</van-button></div>
    </div>
  </div>
</template>
<script>
  export default {
    components:{
    },
    name: 'paymentResult',
    data () {
      return {
        payState: 1, // 0-付款成功 1-付款中 2-付款失败（余额不足） 3-付款异常 网络中断等
        img_pay_success: require('images/icon/pay-icon/zhifuchenggong.png'), // 付款成功
        img_pay_ing: require('images/icon/pay-icon/zhifuzhong.png'), // 付款中
        img_pay_failure: require('images/icon/pay-icon/zhifushibai.png'), // 付款失败
        img_pay_abnormal: require('images/icon/pay-icon/zhifuyichang.png'), // 付款异常
      };
    },
    mounted () {
    },
    methods: {
      onClickLeft(){
        this.COMMONFUNC.goBack();
      },
      // 已完成付款
      okPay () {
        let that = this;
        that.$dialog.confirm({
          title: '提示',
          message: '请求接口，若是未完成，提示，您还未完成付款，请继续付款',
          confirmButtonText: '继续付款',
        }).then(() => {
          if (that.payState >= 3) {
            that.payState = 0
          }else {
            that.payState += 1
          }
        }).catch(() => {
          // on cancel
        });
      },
      // 取消付款
      cancelPay () {
        // this.$router.push({ name: '', params: {} });
        this.$router.go(-2);
      },
      // 订单完成
      finishPay () {
        this.$router.push({ name: 'mywallet', params: {} });
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
