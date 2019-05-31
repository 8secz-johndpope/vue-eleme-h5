<template>
  <div class="white-bg body" :style="{minHeight: contentHeight + 'px'}">
      <div class="goBack" @click="onClickLeft"></div>
      <div class="box">
          <div class="head"></div>
          <div class="avatar">
            <img :src="userImg1" class="avatar-img">
          </div>
          <div class="nickname mgt10">安泽汐的红包</div>
          <div class="content mgt10">恭喜发财，大吉大利！</div>
          <div class="mgt10"><span class="amount">{{amount}}</span>元</div>
          <div class="remark mgt10">已存入零钱，可直接消费</div>
          <div class="feedback">留言</div>
      </div>
  </div>
</template>
<script>
  export default {
    components:{
    },
    name: 'wechatRedPacket',
    data () {
      return {
        amount: 0,  // 金额
        userImg1: require('chatSrc/images/logo.jpg'),  // 用户图片1
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
  .body{
    text-align: center;
    font-size: 0.373333rem;
    color: #333333;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  }
  .goBack{
    position: fixed;
    top: 0.5rem;
    left: 0.266667rem;
    width: 1.066667rem;
    height: 1.066667rem;
  }
  .head{
    background: url(../../images/toolPage/redPacket/weixin-redbag.png) no-repeat 0 0;
    height: 3.2rem;
    background-size: 100% 100%;
  }
  .avatar{
    margin: -0.8rem 0 0 0;
  }
  .avatar-img{
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 0.133333rem;
  }
  .nickname{
    font-weight: 700;
  }
  .amount{
    color: #000;
    font-size: 1.066667rem;
    font-weight: 700;
  }
  .remark{
    color: #5072B2;
    border-bottom: 1px solid #ECECEC;
    padding: 0 0 0.533333rem 0;
  }
  .feedback{
    color: #000;
    font-size: 0.426667rem;
    border-bottom: 0.026667rem solid #ECECEC;
    padding: 0.8rem 0;
  }
</style>
