<template>
  <div class="payment-components">
    <Backbar :titleName="'支付订单'"></Backbar>
    <!-- 订单区域 -->
    <div class="order-zone flex-center">
      <div class="gray-font">
        <div class="item">
          支付剩余时间 {{minute}}：{{second}}
        </div>
        <div class="flex-center money-zone">
          <span class="pay-icon">￥</span><span class="money-num">{{money}}</span>
        </div>
        <div class="item">
          <span>订单号：</span><span>{{orderNum}}</span>
        </div>
        <div class="item">
          <span>订单详情：</span><span>166积分</span>
        </div>
      </div>
    </div>
    <van-radio-group v-model="radio">
      <van-cell-group>
        <van-cell clickable @click="radio = '1'" class="flex-space-between">
          <template slot="title">
            <span class="zhifubao-icon"></span><span class="custom-text">支付宝支付</span>
          </template>
          <van-icon slot="right-icon"><van-radio name="1" /></van-icon>
        </van-cell>
        <van-cell clickable @click="radio = '2'" class="flex-space-between">
          <template slot="title">
            <span class="weixin-icon"></span><span class="custom-text">微信支付</span>
          </template>
          <van-icon slot="right-icon"><van-radio name="2" /></van-icon>
        </van-cell>
      </van-cell-group>
    </van-radio-group>
    <div class="immediately-pay-zone">
      <van-button type="warning" size="large" :disabled="isPaying" @click="pay">立即支付</van-button>
    </div>
  </div>
</template>
<script>
  import Backbar from 'components/common_components/Back_bar';
  export default {
    components:{
      Backbar
    },
    name: 'payment',
    data () {
      return {
        radio: '1', // 1=支付宝支付，2-微信支付
        minutes: 15,  // 分钟数
        seconds: 0, // 秒数
        money: '19.90', // 金额
        orderNum: '2019040516250000', // 订单编号
        isPaying: false,  // 支付当中
      };
    },
    mounted () {
      this.add()
    },
    methods: {
      num: function (n) {
        return n < 10 ? '0' + n : '' + n;
      },
      add: function () {
        var _this = this;
        var time = window.setInterval(function () {
          if (_this.seconds === 0 && _this.minutes !== 0) {
            _this.seconds = 59;
            _this.minutes -= 1;
          } else if (_this.minutes === 0 && _this.seconds === 0) {
            _this.seconds = 0;
            _this.$toast('订单取消');
            setTimeout( () => {
              history.go(-1)
            }, 3000 )
            window.clearInterval(time);
          } else {
            _this.seconds -= 1;
          }
        }, 1000)
      },
      pay () {
        let that = this;
        that.$toast.success('支付成功');
        that.isPaying = true;
        setTimeout( () => {
          that.isPaying = false;
          that.$router.push('/myzone')
        },3000)
      }
    },
    watch: {
      second: {
        handler (newVal) {
          this.num(newVal)
        }
      },
      minute: {
        handler (newVal) {
          this.num(newVal)
        }
      }
    },
    computed: {
      second: function () {
        return this.num(this.seconds)
      },
      minute: function () {
        return this.num(this.minutes)
      }
    }
}
</script>

<style lang="less" scoped>
  .payment-components{
    // position: relative;
  }
  .order-zone{
    height: 5rem;
    font-size: 0.373rem;
  }
  .money-zone{
    height: 1.2rem;
    color: #333;
  }
  .pay-icon{
    font-size: 0.48rem;
    margin-top: 0.36rem;
  }
  .money-num{
    font-size: 0.96rem;
  }
  .immediately-pay-zone{
    position: absolute;
    bottom: 0;
    width: 100%;
  }
  .item{
    height: 0.8rem;
    justify-content: center;
    display: flex;
    align-items: center;
  }
</style>
