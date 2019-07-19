<template>
  <div>
    <!-- 顶部 -->
    <van-nav-bar
      title="个人中心"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-cell title="个人资料" icon="user-o" is-link :to="{ name: 'userinfo' }" class="cellSpace" />
    <van-cell title="我的钱包" icon="gem-o" is-link :to="{ name: 'mywallet' }" />
    <van-cell title="邀请有礼" icon="point-gift-o" is-link :to="{ name: 'invitation' }" />
    <van-cell title="邀请落地页" icon="point-gift-o" is-link :to="{ name: 'inviteToShare' }" />
    <van-cell title="设置" icon="setting-o" is-link :to="{ name: 'setting' }" />
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
