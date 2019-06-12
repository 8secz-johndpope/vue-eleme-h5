<template>
  <div class="mywallet">
    <!-- 顶部 -->
    <van-nav-bar
      title="充值记录"
      left-arrow
      @click-left="onClickLeft"
      fixed
    />
    <!-- 撑开Fixednav挡住的位置 -->
    <div class="top-space"></div>
    <p class="noData grayBarBg">
      您还没有充值记录
    </p>
    <van-cell :title="item.amount + '元 ' + item.integral + '积分'" :value="item.time" v-for="(item,index) in rechargeRecord" />
  </div>
</template>
<script>
  export default {
    components:{
    },
    name: 'rechargeRecord',
    data () {
      return {
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
        ],
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
