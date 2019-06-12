<template>
  <div class="mywallet">
    <!-- 顶部 -->
    <van-nav-bar
      title="我的钱包"
      right-text="充值记录"
      left-arrow
      @click-left="onClickLeft"
      @click-right="toRechargeRecord"
    />
    <van-panel class="panel-self">
      <div class="balance">
        <van-icon name="gold-coin-o" class="balance-icon"></van-icon><span>账户余额</span>
      </div>
      <div class="flex-space-between amount">
        <span>1，000</span>
        <router-link :to="'/setting/shopping'" >
          <van-button size="small" type="danger">点我充值</van-button>
        </router-link>
      </div>
    </van-panel>
    <!-- 优惠券单元格 -->
    <Coupon :componentsType="1"></Coupon>
    <van-cell title="积分说明" is-link @click="openIntegralPopup" />
    <van-cell title="常见问题" is-link @click="openHelpPopup" />
    <!-- 常见问题设置 -->
    <van-popup v-model="helpPopupShow" position="bottom" :overlay="true">
      <van-nav-bar
        title="常见问题"
        @click-left="closeHelpPopup"
        left-arrow
      />
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
    </van-popup>
    <!-- 积分说明设置 -->
    <van-popup v-model="integralPopupShow" position="bottom" :overlay="true" class="grayBg">
      <van-nav-bar
        title="积分说明"
        @click-left="closeIntegralPopup"
        left-arrow
        class="grayBarBg"
      />
      <van-cell-group>
        <!-- pc 和 移动端看到的样式有出入  -->
        <van-collapse v-model="integralActiveNames">
          <van-collapse-item title="1、如何做任务获取积分？" name="1">
            1.1 我的页面每日签到获得2积分；</br>
            1.2 我的页面打开充值面板，或者在 “我的-更多-钱包”页面中，可以快速充值；</br>
            1.3 参加每日活动，如发表对话，审核通过之后，获得4积分，评论获得2积分，收藏内容获得2积分；（暂定）</br>
            1.4 邀请好友，通过邀请码，每次邀请一个，获30积分（暂定）；</br>
          </van-collapse-item>
          <van-collapse-item title="2，充值购买积分？（暂定）" name="2">
            2.1 分6种方式，充的越多，送的越多；</br>
            2.2 如果您是月度会员，查询不会消耗您的积分；若您有未用完的积分或会员剩余时间，我们会帮您累计
          </van-collapse-item>
          <van-collapse-item title="3、积分可转让或者兑换？" name="3">
            积分暂时不可转让，也不可兑换</br>
          </van-collapse-item>
        </van-collapse>
      </van-cell-group>
    </van-popup>
  </div>
</template>
<script>
  import Coupon from 'components/common_components/Coupon';
  export default {
    components:{
      Coupon,
    },
    name: 'mywallet',
    data () {
      return {
        helpPopupShow: false, // 常见问题 帮助中心弹框
        integralPopupShow: false, // 积分说明弹框
        helpActiveNames: ['1','2','3'], // 常见问题折叠筐
        integralActiveNames: ['1','2','3'], // 积分说明折叠筐
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
      // 前往充值记录
      toRechargeRecord () {
        this.$router.push({  //核心语句
          name:'rechargeRecord'   //跳转的路径
          // path:'rechargeRecord'   //跳转的路径
          // query:{           //路由传参时push和query搭配使用 ，作用时传递参数
          //   id:this.id ,
          // }
        })
      },
      // 打开常见问题 帮助中心弹框
      openHelpPopup () {
        this.helpPopupShow = true;
      },
      // 关闭常见问题 帮助中心弹框
      closeHelpPopup () {
        this.helpPopupShow = false;
      },
      // 打开积分说明弹框
      openIntegralPopup () {
        this.integralPopupShow = true;
      },
      // 关闭积分说明弹框
      closeIntegralPopup () {
        this.integralPopupShow = false;
      },
    }
}
</script>

<style lang="less" scoped>
  .balance{
    font-size: 0.4rem;
    width: 90%;
    margin: 0 auto;
    padding: 0.1rem 0;
    .balance-icon{
      color: gold;
      padding: 0 0.2rem 0 0;
    }
  }
  .amount{
    width: 90%;
    margin: 0 auto;
    font-family: Arial, "Microsoft YaHei";
    font-size: 0.8rem;
  }
  .popup-content{
    padding: 0 0.4rem;
  }
  .question{
    font-size: 0.3rem;
    padding: 0.2rem 0;
  }
  .answer{
    font-size: 0.12rem;
  }

</style>
