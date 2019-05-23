<template>
  <div>
    <!-- 顶部 -->
    <van-nav-bar
      title="设置"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-cell title="个人资料" icon="user-o" is-link to="setting/userinfo" class="cellSpace" />
    <van-cell title="我的钱包" icon="gem-o" is-link to="setting/mywallet" />
    <van-cell title="商店分享功能" icon="shopping-cart-o" value="立即开通" is-link to="setting/applyOpenShop" />
    <van-cell title="实名认证" icon="certificate" value="未认证" is-link to="setting/certification" />
    <van-cell title="反馈建议" icon="envelop-o" is-link to="/setting/feedback" />
    <van-cell title="邀请有礼" icon="point-gift-o" is-link to="/setting/invitation" />
    <van-cell title="邀请落地页" icon="point-gift-o" is-link to="/activity/inviteToShare" />
    <van-cell title="联系我们" icon="more-o" is-link to="/setting/contact" />
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
        this.$store.dispatch('setLogin', false);
        this.COMMONFUNC.clearCookie(); //清除所有的cookies
        this.$toast({message: '安全退出',duration: 1500});
        this.$router.push({  //核心语句
          path:'/'   //跳转的路径
          // query:{           //路由传参时push和query搭配使用 ，作用时传递参数
          //   id:this.id ,
          // }
        })
      },
    }
}
</script>

<style lang="less" scoped>
  .cellSpace{
    margin-top: 5px;
  }
</style>
