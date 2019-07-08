<template>
  <div>
    <!-- 顶部 -->
    <van-nav-bar
      title="橱窗设置"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-cell title="商品管理" value="新增、编辑商品" is-link to="{ name : ''}" />
    <van-cell title="橱窗信息" value="橱窗通用信息" is-link :to="{ name: 'shopInfo', params: { id: 'shopId001' } }" />
    <van-cell title="数据分析" value="用户行为、画像" is-link to="setting/certification" />
    <van-cell title="福利社" value="拓展营销渠道" is-link to="setting/applyOpenShop" />
    <van-cell title="橱窗达人榜" value="每天中午12点更新排行" is-link to="setting/applyOpenShop" />
    <van-cell title="更多" is-link to="/setting/contact" />
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
