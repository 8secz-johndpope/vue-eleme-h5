<template>
  <div class="mywallet">
    <!-- 顶部 -->
    <div class="fixed-top">
      <van-nav-bar
        title="充值记录"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <div class="top-space"></div>
    <!-- <p class="noData wx-bg font-16 mgt20" v-if="rechargeRecordList.length === 0">
      您还没有充值记录
    </p> -->
    <van-tabs v-model="tabActive" swipeable>
      <van-tab title="全部">
        <van-cell :title="item.amount + '元 ' + item.goldCoin + '金币'" :value="item.time" v-for="(item,index) in rechargeRecordList" />
      </van-tab>
      <van-tab title="已支付">
        <van-cell :title="item.amount + '元 ' + item.goldCoin + '金币'" :value="item.time" v-for="(item,index) in rechargeRecordList" />
      </van-tab>
      <van-tab title="待支付">
        <van-cell :title="item.amount + '元 ' + item.goldCoin + '金币'" :value="item.time" v-for="(item,index) in rechargeRecordList" />
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
  export default {
    components:{
    },
    name: 'rechargeRecord',
    data () {
      return {
        tabActive: 0, //高亮tab
        rechargeRecordList: [],  // 充值记录
      }
    },
    mounted () {
      let that = this;
      setTimeout( ()=> {
        let obj = {
          amount: 6,  // 金额
          goldCoin: 20, // 金币
          time: '2019.02.19', // 充值时间
          state: 0,   // 0-已完成 1-已取消
        };
        for( var i = 0; i < 50; i++){
          that.rechargeRecordList.push(obj)
        }
      }, 1500)
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
  .fixed-top{
    z-index: 100
  }
</style>
