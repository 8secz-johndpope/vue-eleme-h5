<template>
  <div class="rechargeRecord">
    <!-- 顶部 -->
    <van-nav-bar
      title="充值记录"
      left-arrow
      @click-left="onClickLeft"
      fixed
    />
    <div class="top-space"></div>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="我也是底线的"
      :lazy-load="true"
      @load="onLoad"
      >
      <div class="noData wx-bg font-16 mgt20" v-if="rechargeRecordList.length === 0">
        您还没有充值记录
      </div>
      <div v-else>
        <van-cell :title="item.amount + '元 ' + item.goldCoin + '金币'" :value="item.time" v-for="(item,index) in rechargeRecordList" />
      </div>
    </van-list>
    <van-popup
      v-model="timePopup"
      position="bottom"
    >
      <van-datetime-picker
        v-model="currentDate"
        type="year-month"
        :min-date="minDate"
        :max-date="maxDate"
        :formatter="formatter"
        :item-height="80"
      />
    </van-popup>
  </div>
</template>
<script>
  export default {
    components:{
    },
    name: 'rechargeRecord',
    data () {
      return {
        loading: false,
        finished: false,  // 是否已加载完成，加载完成后不再触发load事件，默认false
        timePopup: true,  // 时间弹框
        currentDate: new Date(),  // 当前时间
        minDate: new Date(2018, 10, 1), // 可选的最小时间
        maxDate: new Date(), // 可选的最大时间
        rechargeRecordList: [],  // 充值记录
        recordObj: {
          amount: 6,  // 金额
          goldCoin: 20, // 金币
          time: '2019.02.19', // 充值时间
          state: 0,   // 0-已完成 1-已取消
        }
      }
    },
    mounted () {
      let that = this;
      // setTimeout( ()=> {
      //   that.rechargeRecordList.push(that.recordObj)
      // }, 1500)
    },
    computed: {

    },
    methods: {
      onClickLeft(){
        this.COMMONFUNC.goBack();
      },
      // 时间日期格式化
      formatter(type, value) {
        if (type === 'year') {
          return `${value}年`;
        } else if (type === 'month') {
          return `${value}月`
        }
        return value;
      },
      onLoad() {
        let that = this;
        // 异步更新数据
        setTimeout(() => {
          for (let i = 0; i < 10; i++) {
            this.rechargeRecordList.push(that.recordObj);
          }
          // 加载状态结束
          this.loading = false;
          // 数据全部加载完成
          if (this.rechargeRecordList.length >= 30) {
            this.finished = true;
          }
        }, 500);
      },
    }
}
</script>

<style lang="less" scoped>

</style>
