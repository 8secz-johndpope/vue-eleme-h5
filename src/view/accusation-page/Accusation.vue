<template>
  <div>
    <!-- 顶部 -->
    <van-nav-bar
      title="举报"
      left-arrow
      @click-left="onClickLeft"
      fixed
    />
    <!-- 撑开Fixednav挡住的位置 -->
    <div class="top-space"></div>
    <van-panel title="内容违规">
      <van-cell title="色情低俗" is-link to="/accusation/report/1"/>
      <van-cell title="政治敏感" is-link to="/accusation/report/2"/>
      <van-cell title="违法犯罪" is-link to="/accusation/report/3"/>
      <van-cell title="垃圾广告、售卖假货等" is-link to="/accusation/report/4"/>
      <van-cell title="造谣传谣、涉嫌欺诈" is-link to="/accusation/report/4"/>
      <van-cell title="侮辱谩骂" is-link to="/accusation/report/6"/>
    </van-panel>
    <van-panel title="侵犯权益">
      <van-cell title="盗用TA人作品" is-link to="/accusation/report/7"/>
    </van-panel>
    <van-panel title="其他">
      <van-cell title="诱导点赞、分享、关注" is-link to="/accusation/report/8"/>
      <van-cell title="其他" is-link to="/accusation/report/9"/>
    </van-panel>
  </div>
</template>
<script>
  export default {
    components:{
    },
    name: 'accusation',
    data () {
      return {
        msg: '1',
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
    }
}
</script>

<style lang="less" scoped>
</style>
