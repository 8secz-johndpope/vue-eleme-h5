<template>
  <div>
    <!-- 顶部 -->
    <van-nav-bar
      title="个人中心"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-cell title="商店分享功能" icon="shopping-cart-o" value="立即开通" is-link :to="{ name: 'applyOpenShop' }" />
    <van-cell title="实名认证" icon="certificate" value="未认证" is-link :to="{ name: 'certification' }" />
    <van-cell title="申请官方认证" icon="passed" value="个人、企业机构认证" is-link :to="{ name: 'officialCertification' }" />
    <van-cell title="速推订单管理" icon="orders-o" is-link :to="{ name: 'extensionOrderManage' }" />
    <van-cell title="反馈建议" icon="envelop-o" is-link :to="{ name: 'feedback' }" />
    <van-cell title="联系我们" icon="more-o" is-link :to="{ name: 'contact' }" />
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
