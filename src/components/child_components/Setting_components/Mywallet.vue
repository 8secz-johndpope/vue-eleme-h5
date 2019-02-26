<template>
  <div>
    <!-- 顶部 -->
    <van-nav-bar
      title="我的钱包"
      left-text="返回"
      right-text="充值记录"
      left-arrow
      @click-left="onClickLeft"
      @click-right="openRechargePopup"
    />
    <van-panel class="panel-self">
      <div class="balance">
        <van-icon name="gold-coin-o" class="balance-icon"></van-icon><span>账户余额</span>
      </div>
      <div class="flex-space-between amount">
        <span>1，000</span>
        <van-button size="small" type="danger">充值</van-button>
      </div>
    </van-panel>
    <van-cell title="积分说明" is-link @click="openIntegralPopup" />
    <van-cell title="常见问题" is-link @click="openHelpPopup" />
    <!-- 充值记录设置 -->
    <van-popup v-model="rechargeRecordPopShow" position="bottom" :overlay="true" class="grayBg">
      <van-nav-bar
        title="充值记录"
        @click-left="cancelUpdateAutograph"
        left-arrow
        class="grayBarBg"
      />
      <van-cell-group>
        <p class="noData grayBarBg">
          您还没有充值记录
        </p>
        <van-cell :title="item.amount + '元 ' + item.integral + '积分'" :value="item.time" v-for="(item,index) in rechargeRecord" />
      </van-cell-group>
    </van-popup>
    <!-- 常见问题设置 -->
    <van-popup v-model="helpPopupShow" position="bottom" :overlay="true" class="grayBg">
      <van-nav-bar
        title="常见问题"
        @click-left="closeHelpPopup"
        left-arrow
        class="grayBarBg"
      />
      <van-cell-group>
        <div class="grayBarBg popup-content">
          <p class="question">1.如何充值积分？</p>
          <p class="answer">1.1 我的页面打开充值面板，可以快速充值；</p>
          <p class="answer">1.2 在 “我的-更多-钱包”页面中进行充值。</p>
          <p class="question">2.为什么提示“充值失败”？</p>
          <p class="answer">2.1 请检查付款时网络连接是否正常；</p>
          <p class="answer">2.2 请检查付款账号余额是否大于购买的积分金额。</p>
          <p class="question">3.付款成功，但积分没到账？</p>
          <p class="answer">3.1 由于网络原因可能导致积分到账延迟，滞后90分钟内属正常现象，请耐心等候；</p>
          <p class="answer">3.2 如超过90分钟积分仍未到账，则请提供「充值时的扣款截屏，需包含消费时间、金额、
            收款对象等各种必要证明信息」及「你的应用个人主页截屏」到设置中的问题反馈进行反馈，两者缺一不可，我们会在工作时间尽快帮你核查。</p>
          <p class="question">4.每日提现限额</p>
          <p class="answer">一旦充值，将不做退款处理，请知悉</p>
        </div>
      </van-cell-group>
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
        <div class="grayBarBg popup-content">
          <p class="question">1.做任务获取积分</p>
          <p class="answer">1.1 我的页面每日签到获得2积分；</p>
          <p class="answer">1.2 我的页面打开充值面板，或者在 “我的-更多-钱包”页面中，可以快速充值；</p>
          <p class="answer">1.3 发表对话，审核通过之后，获得2积分；（暂定）</p>
          <p class="answer">1.4 邀请好友，通过邀请码，每次邀请一个，获50积分（暂定）；</p>
          <p class="question">2.充值购买积分？（暂定）</p>
          <p class="answer">2.1 分6种方式，充的越多，积分、收藏容量相应层级增加，可叠加；</p>
          <p class="answer">2.2  </br>5元   100积分    送 10篇收藏容量（暂定）
                                 </br>10元  250积分   送 25篇收藏容量（暂定）
                                 </br>20元  600积分   送 60篇收藏容量（暂定）
                                 </br>30元  1000积分 送 100篇收藏容量（暂定）
                                 </br>50元  2000积分 送 200篇收藏容量（暂定）
          </p>
          <p class="question">3.提醒</p>
          <p class="answer">积分不可转让，也不可兑换</p>
        </div>
      </van-cell-group>
    </van-popup>
  </div>
</template>
<script>
  export default {
    components:{
    },
    name: 'mywallet',
    data () {
      return {
        msg: '1',
        rechargeRecordPopShow: false,  // 充值记录设置弹框
        helpPopupShow: false, // 常见问题 帮助中心弹框
        integralPopupShow: false, // 积分说明弹框
        rechargeRecord: [ // 充值记录
          {
            amount: 6,  // 金额
            integral: 20, // 积分
            time: '2019.02.19', // 充值时间
          },
          {
            amount: 6,  // 金额
            integral: 20, // 积分
            time: '2019.02.19', // 充值时间
          }
        ]
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
      // 打开修改充值记录弹框
      openRechargePopup () {
        this.rechargeRecordPopShow = true;
      },
      // 取消修改充值记录
      cancelUpdateAutograph () {
        this.rechargeRecordPopShow = false;
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
