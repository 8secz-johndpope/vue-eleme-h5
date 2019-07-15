<template>
  <div class="wx-body">
    <div class="flex-center i-body i-body-pay-detail" :style="{minHeight: contentHeight + 'px'}">
      <div class="goBack" @click="onClickLeft">
      </div>
      <div class="pay-content">
        <div class="i-w-pay-money"><span>{{amount}}</span></div>
        <div class="i-sy-year">转入资金即享2.83%年化收益</div>
      </div>
      <div class="time">
        <div class="i-w-pay-sen-time"><span>{{today}} 09:46:26</span></div>
        <div class="i-w-pay-rec-time"><span>{{today}} 09:51:26</span></div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    components:{
    },
    name: 'alipayTransfer',
    data () {
      return {
        amount: 0,  // 金额
        contentHeight: 0, // 屏幕内容高度
        today: '',  // 今天
      };
    },
    created () {
      this.contentHeight = window.innerHeight
      this.today = new Date().toLocaleDateString();     //获取当前日期
      this.today = this.today.replace(/(\/)/g,'-');
    },
    mounted () {
      this.amount = parseFloat(this.$route.params.amount).toFixed(2);
    },
    computed: {
    },
    methods: {
      onClickLeft(){
        this.COMMONFUNC.goBack();
      },
    }
}
</script>
<style lang="less" scoped>
  .wx-body{
    width: 100%;
    color: rgb(0, 0, 0);
    font-family: Arial, 微软雅黑;
  }
  .goBack{
    position: fixed;
    top: 0.266667rem;
    left: 0.266667rem;
    width: 1.066667rem;
    height: 1.066667rem;
  }
  .i-body-pay-detail {
    background-image: url(../../images/toolPage/transfer/wxpay_bgvs.png);
    background-size: 100%;
    width: 100%;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 100%;
  }
  .i-w-pay-money {
    text-align: center;
    font-size: 1.066667rem;
    font-weight: bold;
  }
  .i-w-pay-money span {
    background: url(../../images/toolPage/transfer/w-pay-detail-$.jpg) 0 center no-repeat;
    padding: 0.266667rem 0 0 0.533333rem;
    display: inline-block;
    font-weight: bold;
    font-family: "黑体";
  }
  .i-sy-year {
    margin: 4rem 0.8rem 0 0;
    color: rgb(0, 0, 0);;
    font-size: 0.373333rem;
  }
  .pay-content{
    height: 6.6rem;
    padding: 1rem 0 0 0;
  }
  .time{
    position: fixed;
    bottom: 1.47rem;
    line-height: 20px;
    font-size: 0.32rem;
    padding: 0px 0 0 50px;
    color: #898989;
  }
</style>
