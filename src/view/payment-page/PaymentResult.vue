<template>
  <div>
    <!-- 顶部 -->
    <van-nav-bar
      title="支付结果"
      left-text="订单"
      right-text="完成"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <!-- 支付成功 -->
    <div v-if="payState === 0">
      <div class="white-bg tcenter pdb15">
        <div>
          <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3524168456,1333029941&fm=26&gp=0.jpg" class="img-common" />
        </div>
        <div class="success">支付成功</div>
      </div>
      <van-cell-group>
        <van-cell title="订单号" value="20190720190718" />
        <van-cell title="支付总金额" value="182元" />
        <van-cell title="优惠金额" value="182元" />
        <van-cell title="实际支付金额" value="182元" />
        <van-cell title="付款时间" value="2019-09-20 19:20:16" />
      </van-cell-group>
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
        payState: 0, // 0-支付成 1-支付失败（余额不足，网络中断） 2-取消支付
      };
    },
    mounted () {
    },
    methods: {
      onClickLeft(){
        let that = this;
        that.$dialog.alert({
          title: '提示',
          message: '如果是金币充值的付款'
        }).then(() => {
          // on close
        });
        // this.$router.push({ name: '' })
      },
      onClickRight(){
        this.$router.push({ name: '' })
      },
    },
    watch: {
    },
    computed: {
    }
}
</script>

<style lang="less" scoped>
  .success{
    font-size: 0.8rem;
  }
</style>
