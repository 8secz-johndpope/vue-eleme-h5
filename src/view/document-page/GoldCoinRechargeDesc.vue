<template>
  <div>
    <van-nav-bar
      title="金币说明"
      @click-left="onClickLeft"
      left-arrow
      fixed
    />
    <!-- 撑开Fixednav挡住的位置 -->
    <div class="top-space"></div>
    <van-cell-group>
      <!-- pc 和 移动端看到的样式有出入  -->
      <van-collapse v-model="goldCoinActiveNames">
        <van-collapse-item title="1、什么是金币？" name="1">
          1.1 “金币”是本团队向您提供的用于在本平台上进行消费的虚拟货币，您可以用金币支付查询话术、查看文章所需的费用，或者自由购买速推流量，或者用于在积分商城兑换商品。
        </van-collapse-item>
        <van-collapse-item title="2、如何获取金币？" name="2">
          2.1 每日签到获得2金币</br>
          2.2 打开充值面板，或者在 “我的-更多-钱包”页面中，可以快速充值，充的越多，送的越多</br>
          2.3 参加日常活动，通过做任务获取金币</br>
          2.4 邀请好友，通过邀请码，每次邀请一个，获20金币
        </van-collapse-item>
        <van-collapse-item title="3、金币可否转让或退款？" name="3">
          金币暂时不可转让，也不可退款</br>
        </van-collapse-item>
      </van-collapse>
    </van-cell-group>
  </div>
</template>
<script>
  export default {
    components:{
    },
    name: 'mywallet',
    data () {
      return {
        goldCoinActiveNames: ['1','2','3'], // 金币说明折叠筐
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
