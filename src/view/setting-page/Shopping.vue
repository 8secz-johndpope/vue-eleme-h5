<template>
  <div>
    <!-- 顶部 -->
    <van-nav-bar
      title="购买积分"
      left-text="返回"
      right-text="充值帮助"
      left-arrow
      @click-left="onClickLeft"
      @click-right="integralPopupShow=true"
    />
    <van-notice-bar
      text="开业大酬宾，充值积分满100送10，充的越多，送的越多，快快参加吧"
      left-icon="volume-o"
    />
    <!-- 充值列表区域 -->
    <div class="shopList-zone">
      <van-button plain :type=" currentSelect == index ? 'danger' : 'default' " v-for="(item, index) in shopList"  @click="selectShop(index, item)" class="shop-btn">
        <span>{{item.value}}</span>
        <van-tag plain type="danger" v-if="item.isHot === 0">推荐</van-tag>
      </van-button>
    </div>
    <!-- 优惠券单元格 -->
    <div class="coupon-zone">
      <Coupon @sendCouponNum="getCouponNum" :msg="msg"></Coupon>
    </div>
    <van-submit-bar
      :disabled="isShoping"
      :price="price"
      button-text="提交订单"
      :tip="shopTips"
      @submit="onSubmit"
    >
      <!-- <div>共：166积分</div> -->
    </van-submit-bar>
    <!-- 积分说明设置 -->
    <van-popup v-model="integralPopupShow" position="bottom" :overlay="true" class="grayBg">
      <van-nav-bar
        title="积分说明"
        @click-left="integralPopupShow=false"
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
  import Vue from 'vue';
  export default {
    components:{
      Coupon,
    },
    name: 'shopping',
    data () {
      return {
        shopList: [
          {
            num: 9.9,
            value: '66积分（￥9.9）',
            isHot: 1, // 是否热选，0-是，1-否
            integral: '66积分', // 价值积分
            extraIntegral: 0,  // 赠送积分
          },
          {
            num: 19.9,
            value: '166积分（￥19.9）',
            isHot: 0, // 是否热选，0-是，1-否
            integral: '166积分', // 价值积分
            extraIntegral: 10,  // 赠送积分
          },
          {
            num: 38,
            value: '466积分（￥38）',
            isHot: 1, // 是否热选，0-是，1-否
            integral: '466积分', // 价值积分
            extraIntegral: 50,  // 赠送积分
          },
          {
            num: 68,
            value: '1266积分（￥68）',
            isHot: 1, // 是否热选，0-是，1-否
            integral: '1266积分', // 价值积分
            extraIntegral: 150,  // 赠送积分
          },
          {
            num: 28,
            value: '1个月（￥28）',
            isHot: 1, // 是否热选，0-是，1-否
            integral: '1个月', // 价值积分
            extraIntegral: 0,  // 赠送积分
          },
          {
            num: 66,
            value: '3个月（￥66）',
            isHot: 0, // 是否热选，0-是，1-否
            integral: '3个月', // 价值积分
            extraIntegral: 0,  // 赠送积分
          },
          {
            num: 98,
            value: '6个月（￥98）',
            isHot: 1, // 是否热选，0-是，1-否
            integral: '6个月', // 价值积分
            extraIntegral: 0,  // 赠送积分
          },
          {
            num: 188,
            value: '一年（￥188）',
            isHot: 1, // 是否热选，0-是，1-否
            integral: '1年', // 价值积分
            extraIntegral: 0,  // 赠送积分
          },
        ],
        currentSelect: 1,  // 当前选中
        integralPopupShow: false, // 积分帮助
        integralActiveNames: ['1','2','3'], // 积分说明折叠筐
        isShoping: false, // 是否交易中
        price: 1990, // 价格，分为单位
        shopTips: '166积分权益，额外再赠送：10积分', // 充值提示
        isCounponed: 1, // 是否已经优惠，0-是，1-否
        couponNum: 0, // 优惠金额
        msg: 0,
      };
    },
    mounted () {
    },
    computed: {    },
    methods: {
      onClickLeft(){
        this.COMMONFUNC.goBack();
      },
      // 提交商品
      onSubmit () {
        let that = this;
        that.isShoping = true;
        setTimeout(() => {
          that.isShoping = false;
          that.$router.push('/setting/payment')
        }, 1000);
      },
      // 选择商品
      selectShop (index, item) {
        this.currentSelect = index;
        this.price = item.num * 100;
        this.price -= this.couponNum;
        this.shopTips = item.integral + '权益，额外再赠送：' + item.extraIntegral + '积分';
      },
      // 获取优惠金额
      getCouponNum (msg) {
        // 优惠金额取消
        this.price += this.couponNum; // 加回去原来的金额
        this.price -= msg;
        this.couponNum = msg;
      }
    }
}
</script>

<style lang="less" scoped>
  .shopList-zone{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 0.4rem 0 0 0;
  }
  .shop-btn{
    width: 4.533rem;
    margin: 0.133rem 0.133rem;
    padding: 0;
  }
  .coupon-zone{
    margin: 1rem 0 0 0;
  }
</style>
