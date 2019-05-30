<template>
  <div class="wx-body">
    <div class="flex-center i-body i-body-pay-detail" :style="{minHeight: contentHeight + 'px'}">
      <div class="goBack" @click="onClickLeft">

      </div>
      <div class="pay-content">
        <div class="i-w-pay-money"><span>{{amount}}</span></div>
        <div class="i-sy-year">转入资金即享2.83%年化收益</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    components:{
    },
    name: 'wechatChange',
    data () {
      return {
        amount: 0,  // 金额
        contentHeight: 0, // 屏幕内容高度
      };
    },
    created () {
      this.contentHeight = window.innerHeight
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
    top: 10px;
    left: 10px;
    width: 40px;
    height: 40px;
  }
  .i-body-pay-detail {
    background-image: url(../../images/toolPage/change/wx_money_bgy.png);
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
    background: url(../../images/toolPage/change/w-pay-detail-$.jpg) 0 center no-repeat;
    padding: 0.266667rem 0 0 0.533333rem;
    display: inline-block;
    font-weight: bold;
    font-family: "黑体";
  }
  .i-sy-year {
    margin: 23px 0 0 0;
    color: #fa9d3b;
    font-size: 0.426667rem;
  }
  .pay-content{
    margin: 0 0 2.666667rem 0;
  }
</style>
