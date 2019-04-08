<template>
  <div>
    <!-- 文章头部 -->
    <header class="header">
      <h2>如何在赚钱的同时，追到自己喜欢的妹子</h2>
      <section class="title-tag flex-between">
        <span>来源：XXX作者</span>
        <span>&nbsp;03/14 14:08:42</span>
        <!-- <div @click="addAttention">
          <van-tag round type="primary" size="medium">{{isAttention ? '已关注' : '+关注'}}</van-tag>
        </div> -->
      </section>
    </header>
  </div>
</template>
<script>
  export default {
    components:{
    },
    name: 'articleHeader',
    data () {
      return {
        isAttention: false, // 是否已经关注
      };
    },
    mounted () {
    },
    computed: {
      isLogin () {
        if(this.COMMONFUNC.getCookieValue("token") == 'isLogin'){
          return true;
        }else {
          return false;
        }
      },
    },
    methods: {
      // 加关注
      addAttention () {
        let that = this;
        if(that.isLogin){
          if (that.isAttention) {
            that.isAttention = false;
          }else{
            that.isAttention = true;
            this.$toast({message: '成功收藏！',duration: 1500});
          }
        }else {
          that.$dialog.confirm({
            title: '未登录',
            message: '登录后可关注哦',
            confirmButtonText: '立即登录'
          }).then(() => {
            that.$router.push({  //核心语句
              path:'/login'   //跳转的路径
            })
          }).catch(() => {
            // on cancel
          });
        }
      },
    }
}
</script>

<style lang="less" scoped>
  .header{
    // padding: 15px 0;
  }
  .title-tag{
    padding: 0.156rem 0;
    color: #666;
  }
</style>
