<template>
  <div>
    <div>
      <van-nav-bar
        title="工具列表"
        left-arrow
        @click-left="onClickLeft"
        >
      </van-nav-bar>
    </div>
    <van-panel title="微信截图">
      <div class="flex-wrap panel-content">
        <div class="flex-column panel-item">
          <router-link :to="{ name: 'inputSetting', params: {'routerLink' : 'wechatChange' } }">
            <img src="../../images/toolPage/toolList/wx-balance.png" class="van-avatar-large">
            <div>微信零钱</div>
          </router-link>
        </div>
        <div class="flex-column panel-item">
          <router-link :to="{ name: 'inputSetting', params: {'routerLink' : 'wechatChange' } }">
            <img src="../../images/toolPage/toolList/wx-transfer.png" class="van-avatar-large">
            <div>微信转账</div>
          </router-link>
        </div>
        <div class="flex-column panel-item">
          <router-link :to="{ name: 'inputSetting', params: {'routerLink' : 'wechatChange' } }">
            <img src="../../images/toolPage/toolList/wx-withdrawal.png" class="van-avatar-large">
            <div>微信提现</div>
          </router-link>
        </div>
        <div class="flex-column panel-item">
          <router-link :to="{ name: 'inputSetting', params: {'routerLink' : 'wechatPayment' } }">
            <img src="../../images/toolPage/toolList/wx-wallet.png" class="van-avatar-large">
            <div>微信支付</div>
          </router-link>
        </div>
      </div>
    </van-panel>
    <van-panel title="支付宝截图">
      <div class="flex-wrap panel-content">
        <div class="flex-column panel-item">
          <router-link :to="{ name: 'inputSetting', params: {} }">
            <img src="../../images/toolPage/toolList/zfb-ye.png" class="van-avatar-large">
            <div>支付宝余额</div>
          </router-link>
        </div>
        <div class="flex-column panel-item">
          <router-link :to="{ name: 'inputSetting', params: {} }">
            <img src="../../images/toolPage/toolList/zfb-zz.png" class="van-avatar-large">
            <div>提现账单</div>
          </router-link>
        </div>
      </div>
    </van-panel>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    components:{
    },
    name: 'inputMoney',
    data () {
      return {
        amount: 8888,  // 输入金额
      };
    },
    mounted () {
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
<style lang="css" scoped>
  .panel-item{
    width: 25%;
    text-align: center;
    line-height: 1rem;
  }
</style>
