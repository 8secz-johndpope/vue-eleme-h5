<template>
  <div class="coupon-module">
    <!-- 优惠券单元格 -->
    <van-coupon-cell
      :coupons="coupons"
      :chosen-coupon="chosenCoupon"
      @click="showList = true"
    />
    <!-- 优惠券列表 -->
    <van-popup v-model="showList" position="bottom">
      <van-coupon-list
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        :disabled-coupons="disabledCoupons"
        :show-exchange-bar="false"
        @change="onChange"
        @exchange="onExchange"
      />
    </van-popup>
  </div>
</template>
<script>
  import Vue from 'vue';
  import { CouponCell, CouponList } from 'vant';
  Vue.use(CouponCell).use(CouponList);
  // 优惠券字段说明
  const coupon = [{
    // available: 1,
    condition: '无使用门槛\n最多优惠12元',
    reason: '',
    value: 500,
    name: '优惠券名称',
    startAt: 1554038332,
    endAt: 1565838332,
    valueDesc: '5.0',
    denominations: 500,//优惠券金额 单位分
    unitDesc: '元',
    description: '',  // 底部描述文字
  },{
    // available: 1,
    condition: '无使用门槛\n最多优惠12元',
    reason: '',
    value: 300,
    name: '优惠券名称',
    startAt: 1554038332,
    endAt: 1565838332,
    valueDesc: '3.0',
    denominations: 300,//优惠券金额 单位分
    unitDesc: '元',
    description: '',  // 底部描述文字
  }];
  export default {
    components:{
    },
    name: 'coupon',
    props: {
      // 类型
      componentsType: Number,
      default: 0, // 0-本地，1-跳转
    },
    data () {
      return {
        showList: false,
        chosenCoupon: -1,
        coupons: coupon,
        disabledCoupons: coupon,
      };
    },
    mounted () {

    },
    computed: {

    },
    methods: {
      // 关闭优惠券弹框
      onChange(index) {
        if (this.componentsType === 1 && index !== -1) {
          this.$router.push({ name: 'buyCoin' })
        }
        this.showList = false;
        this.chosenCoupon = index;
        let couponNum = index === -1 ? 0 : this.coupons[index].value;
        this.$emit('sendCouponNum',couponNum)
      },
      onExchange(code) {
        this.coupons = coupon;
      }
    }
}
</script>

<style lang="less" scoped>
</style>
