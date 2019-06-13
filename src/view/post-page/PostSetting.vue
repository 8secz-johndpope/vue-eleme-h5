<template>
  <div>
    <!-- 顶部 -->
    <van-nav-bar
      title="微博设置"
      left-arrow
      @click-left="onClickLeft"
      fixed
    />
    <!-- 撑开Fixednav挡住的位置 -->
    <div class="top-space"></div>
    <van-panel title="分享范围设置">
      <van-cell title="色情低俗" is-link to="/accusation/report/1"/>
    </van-panel>
    <van-panel title="评论设置">
      <van-cell title="盗用TA人作品" is-link to="/accusation/report/7"/>
    </van-panel>
  </div>
</template>
<script>
  export default {
    components:{
    },
    name: 'postSetting',
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
