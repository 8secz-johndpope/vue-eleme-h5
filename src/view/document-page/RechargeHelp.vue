<template>
  <div>
    <van-nav-bar
      title="常见问题"
      @click-left="onClickLeft"
      left-arrow
      fixed
    />
    <!-- 撑开Fixednav挡住的位置 -->
    <div class="top-space"></div>
    <!-- pc 和 移动端看到的样式有出入  -->
    <van-collapse v-model="helpActiveNames">
      <van-collapse-item title="1、如何充值积分？" name="1">
        1.1 我的页面打开充值面板，可以快速充值；</br>
        1.2 在 “我的-更多-钱包”页面中进行充值。</br>
      </van-collapse-item>
      <van-collapse-item title="2、为什么提示“充值失败”？" name="2">
        2.1 请检查付款时网络连接是否正常；</br>
        2.2 请检查付款账号余额是否大于购买的积分金额。</br>
      </van-collapse-item>
      <van-collapse-item title="3、付款成功，但积分没到账？" name="3">
        3.1 由于网络原因可能导致积分到账延迟，滞后90分钟内属正常现象，请耐心等候；</br>
        3.1 如超过90分钟积分仍未到账，则请提供「充值时的扣款截屏，需包含消费时间、金额、
          收款对象等各种必要证明信息」及「你的应用个人主页截屏」到设置中的问题反馈进行反馈，两者缺一不可，我们会在工作时间尽快帮你核查。</br>
      </van-collapse-item>
      <van-cell title="4、一旦充值，将不做退款处理，请知悉" />
    </van-collapse>
  </div>
</template>
<script>
  export default {
    components:{
    },
    name: 'mywallet',
    data () {
      return {
        helpActiveNames: ['1','2','3'], // 常见问题折叠筐
      }
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

<style lang="less" scoped>
</style>
