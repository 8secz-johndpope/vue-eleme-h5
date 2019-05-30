<template>
  <div>
    <!-- 顶部 -->
    <van-nav-bar
      title="充值中心"
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
