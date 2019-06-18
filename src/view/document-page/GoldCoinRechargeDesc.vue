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
        <van-collapse-item title="1、如何做任务获取金币？" name="1">
          1.1 我的页面每日签到获得2金币；</br>
          1.2 我的页面打开充值面板，或者在 “我的-更多-钱包”页面中，可以快速充值；</br>
          1.3 参加每日活动，如发表对话，审核通过之后，获得4金币，评论获得2金币，收藏内容获得2金币；（暂定）</br>
          1.4 邀请好友，通过邀请码，每次邀请一个，获30金币（暂定）；</br>
        </van-collapse-item>
        <van-collapse-item title="2，充值购买金币？（暂定）" name="2">
          2.1 分6种方式，充的越多，送的越多；</br>
          2.2 如果您是月度会员，查询不会消耗您的金币；若您有未用完的金币或会员剩余时间，我们会帮您累计
        </van-collapse-item>
        <van-collapse-item title="3、金币可转让或者兑换？" name="3">
          金币暂时不可转让，也不可兑换</br>
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
