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
    <div class="flex-space-between font-14 pdl15 pdt15 pdb5 white-bg">
      <div class="flex-align-center dy-font-color" @click="timePopup = true">
        <span>月份：</span>
        <span class="mgl5 mgr5 black-color">{{COMMONFUNC.crtTimeFtt(defaultTime, 'yy-mm')}}</span>
        <van-icon name="arrow-down" />
      </div>
    </div>
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
      <div class="font-14" v-else>
        <van-cell title="金币充值" :label="item.time" v-for="(item,index) in rechargeRecordList" @click="toDetail(item)">
          <template slot="default">
            <div class="font-16" :class="index !== 0 ? 'gold-color' : '' ">{{item.goldCoin}}金币</div>
            <div>{{index !== 0 ? '充值完成' : '待付款' }}</div>
          </template>
        </van-cell>
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
        @confirm="confirmTime"
        @cancel="timePopup = false"
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
        timePopup: false,  // 时间弹框
        currentDate: new Date(),  // 当前时间
        defaultTime: new Date(),  // 默认时间
        minDate: new Date(2018, 10, 1), // 可选的最小时间
        maxDate: new Date(), // 可选的最大时间
        rechargeRecordList: [],  // 充值记录
        recordObj: {
          amount: 6,  // 金额
          goldCoin: 20, // 金币
          time: '2019.02.19 08:25', // 充值时间
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
      // 确认时间
      confirmTime (value) {
        this.defaultTime = value;
        this.timePopup = false;
      },
      // 前往订单详情
      toDetail (item) {
        this.$router.push({ name: 'rechargeRecordDetail', params: { orderId: 'orderId001' } })
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
