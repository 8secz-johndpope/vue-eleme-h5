<template>
  <div class="wx">
    <van-nav-bar class="wx-top">
      <div slot="left">
        <van-icon name="arrow-left" class="wx-top-icon" />
      </div>
      <div slot="title" class="wx-color wx-title">支付</div>
      <div slot="right">
        <van-icon name="ellipsis" class="wx-top-icon" />
      </div>
    </van-nav-bar>
    <div class="pay-wallet-zone">
      <div class="paymentCode">
        <img src="../../images/toolPage/shoufukuan.png" class="pay-icon"/>
        <div>收付款</div>
      </div>
      <div class="wallet">
        <img src="../../images/toolPage/weixinqianbao.png" class="pay-icon"/>
        <div>
          <div>钱包</div>
          <div class="amount">¥800.58</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    components:{

    },
    name: 'wechatBalance',
    data () {
      return {
        rulesPopShow: false,
      };
    },
    mounted () {

    },
    computed: {

    },
    methods: {
    }
}
</script>

<style lang="less" scoped>
  .wx{
    background-color: #F6F6F6;
    .wx-top{
      font-family: -apple-system-font,Helvetica Neue,Helvetica,sans-serif;
      color: #000000;
      .wx-top-icon{
        font-size: 0.48rem;
        color: #000000;
      }
      .wx-title{
        font-weight: 500;
        font-size: 0.48rem;
      }
    }
  }
  .pay-wallet-zone{
    display: flex;
    border-radius: 10px;
    background-color: #3CB373;
    height: 3.2rem;
    font-size: 16px;
    color: #fff;
    text-align: center;
    margin: 15px 5px;
  }
  .paymentCode{
    width: 50%;
    height: 100%;
    padding: 20px 0 0 0;
  }
  .wallet{
    width: 50%;
    height: 100%;
    padding: 20px 0 0 0;
    .amount{
      color: #87E1AD;
      font-size: 14px;
      padding: 5px 0 0 0;
    }
  }
  .pay-icon{
    width: 38px;
    height: 36px;
  }
</style>
