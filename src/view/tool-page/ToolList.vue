<template>
  <div>
    <div>
      <van-nav-bar
        title="工具列表"
        left-arrow
        @click-left="onClickLeft"
        fixed
        >
      </van-nav-bar>
    </div>
    <div class="top-space"></div>
    <van-panel title="常用截图">
      <div class="flex-wrap panel-content">
        <div class="flex-column panel-item">
          <router-link :to="{ name: 'inputSetting', params: {'routerLink' : 'wechatPayment' } }">
            <img src="../../images/toolPage/toolList/wx-wallet.png" class="van-avatar-large mgt10">
            <div>某信支付</div>
          </router-link>
        </div>
        <div class="flex-column panel-item">
          <router-link :to="{ name: 'inputSetting', params: {'routerLink' : 'wechatRedPacket' } }">
            <img src="../../images/toolPage/toolList/wx-withdrawal.png" class="van-avatar-large mgt10">
            <div>某信红包</div>
          </router-link>
        </div>
        <div class="flex-column panel-item">
          <router-link :to="{ name: 'inputSetting', params: {'routerLink' : 'wechatChange' } }">
            <img src="../../images/toolPage/toolList/wx-balance.png" class="van-avatar-large mgt10">
            <div>某信零钱</div>
          </router-link>
        </div>
        <div class="flex-column panel-item">
          <router-link :to="{ name: 'inputSetting', params: {'routerLink' : 'alipayBalance' } }">
            <img src="../../images/toolPage/toolList/zfb-ye.png" class="van-avatar-large mgt10">
            <div>某宝余额</div>
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
    name: 'toolList',
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
  .van-avatar-large{
    background-color: #fff;
  }
</style>
