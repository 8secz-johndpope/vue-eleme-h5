<template>
  <div class="position-r">
    <img src="../../images/toolPage/change/bg-w-a1-vip.png" class="img-common width-100" />
    <div class="back-space" @click="onClickLeft"></div>
    <div class="i-w-wa-money">{{amount}}</div>
    <div class="white-space"></div>
  </div>
</template>
<script>
  export default {
    components:{
    },
    name: 'alipayBalance',
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
  .i-w-wa-money {
    position: absolute;
    top: 3.2rem;
    left: 0.4rem;
    font-size: 1.8rem;
    color: #fff;
    background: none;
    font-family: Arial, 微软雅黑;
  }
  .white-space{
    position: absolute;
    top: 10.2rem;
    right: 0.8rem;
    width: 2rem;
    height: 0.8rem;
    background-color: #fff;
  }
</style>
