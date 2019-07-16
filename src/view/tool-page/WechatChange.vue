<template>
  <div class="position-r">
    <img src="../../images/toolPage/change/wx_money_bgy.png" class="img-common width-100" />
    <div class="back-space" @click="onClickLeft"></div>
    <div class="money-zone">
      <div><img src="../../images/toolPage/change/renmingbi.jpg" class="img-common mgr5 renmingbi pdb5" /></div>
      <span class="i-w-wa-money">{{amount}}</span>
    </div>
    <div class="font-16 profit">转入资金即享2.83%年化收益</div>
  </div>
</template>
<script>
  export default {
    components:{
    },
    name: 'wechatTransfer',
    data () {
      return {
        amount: 0,  // 金额
      };
    },
    created () {
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
  .back-space{
    position: absolute;
    width: 2rem;
    height: 1rem;
    top: 0.3rem;
    left: 0.4rem;
    background: none;
  }
  .money-zone{
    width: 100%;
    position: absolute;
    top: 6rem;
    display: flex;
    align-items: baseline;
    justify-content: center;
    background: none;
  }
  .renmingbi{
    width: 0.6rem;
    height: 0.8rem;
  }
  .i-w-wa-money {
    font-size: 1.3rem;
    color: #333;
    font-weight: 700;
    font-family: Arial, 微软雅黑;
  }
  .profit{
    color: #fa9d3b;
    position: absolute;
    top: 8.24rem;
    left: 2.4rem;
  }
</style>
