<template>
  <div>
    <!-- 顶部 -->
    <van-nav-bar
      title="设置"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-cell title="个人资料" icon="user-o" is-link to="setting/userinfo" class="cellDiv" />
    <van-cell title="我的钱包" icon="gem-o" is-link to="setting/mywallet" class="cellDiv" />
    <van-cell title="积分说明" icon="orders-o" is-link to="index" class="cellDiv" />
    <van-cell title="反馈建议" icon="envelop-o" is-link to="index" />
    <van-cell title="联系我们" icon="more-o" is-link to="index" />
    <van-button size="large" @click="outLogin">退出登录</van-button>
  </div>
</template>
<script>
  export default {
    components:{
    },
    name: 'setting',
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
      outLogin () {
        this.$toast("退出登录")
      }
    }
}
</script>

<style lang="less" scoped>
  .cellDiv{
    margin-top: 5px;
  }
</style>
