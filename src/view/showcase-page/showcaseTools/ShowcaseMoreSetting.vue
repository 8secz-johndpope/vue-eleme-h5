<template>
  <div>
    <!-- 顶部 -->
    <van-nav-bar
      title="橱窗更多设置"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- <van-cell title="服务费" value="前三个月免租金" is-link :to="{ name: 'serviceCharge', params: { showcaseId: 'showcaseId001' } }" /> -->
    <van-cell title="保证金" value="保障信用，守护你我" is-link :to="{ name: 'bond', params: { showcaseId: 'showcaseId001' } }" />
    <!-- <van-cell title="不良记录" value="用户行为、画像" is-link :to="{ name: 'addOrUpdateCommodity', params: { showcaseId: 'showcaseId001' } }" /> -->
  </div>
</template>
<script>
  export default {
    components:{
    },
    name: 'shopSetting',
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
