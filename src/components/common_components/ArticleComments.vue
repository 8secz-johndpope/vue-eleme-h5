<template>
  <div>
    <!-- 顶部 -->
    <van-nav-bar left-arrow @click-left="onClickLeft" title="精彩评论">
      <van-icon name="ellipsis" slot="right" @click="openMorePop" />
    </van-nav-bar>
    <!-- 文章内容 -->
    <div class="articleDetail">
      <!-- 文章头部 -->
      <header class="header">
        <h2>如何在赚钱的同时，追到自己喜欢的妹子</h2>
        <section class="title-tag flex-between">
          <div><span>花牛时报</span><span>&nbsp;03/14 14:08:42</span></div>
          <div @click="addAttention">
            <van-tag round type="primary" size="medium">{{isAttention ? '已关注' : '+关注'}}</van-tag>
          </div>
        </section>
      </header>
      <!-- 评论 -->
      <section class="comments">
        <div class="commentsTotalNumZone">
          <span>全部评论（5400）</span>
        </div>
        <Comments></Comments>
      </section>
    </div>
    <!-- 分享选项 -->
    <van-actionsheet v-model="sharePopShow" title="分享到">
      <ShareBox :targetId="targetId"></ShareBox>
    </van-actionsheet>
    <!-- 撑开Fixednav挡住的位置 -->
    <div class="space"></div>
    <!-- 固定评论区 -->
    <FixedCommentsZone></FixedCommentsZone>
  </div>
</template>
<script>
  import ShareBox from './ShareBox';
  import Comments from './Comments';
  import FixedCommentsZone from './FixedCommentsZone';
  import { mapGetters } from 'vuex';
  export default {
    components:{
      ShareBox,
      Comments,
      FixedCommentsZone,
    },
    name: 'mywallet',
    data () {
      return {
        msg: '1',
        sharePopShow: false,  // 更多选项
        targetId: '', // 文章Id
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
      ...mapGetters([
        'getImitateArticleList', // 获取模拟文章列表
      ])
    },
    methods: {
      onClickLeft(){
        this.COMMONFUNC.goBack();
      },
      // 打开更多弹框
      openMorePop () {
        this.sharePopShow = true;
      },
      // 加关注
      addAttention: function () {
        let that = this;
        if(that.isLogin){
          if (that.addAttention) {
            that.addAttention = false;
          }else{
            that.addAttention = true;
            that.$toast('成功收藏！');
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
  .articleDetail{
      font-size: 0.375rem;
      padding: 0.312rem;
  }
  .header{
    // padding: 15px 0;
  }
  .title-tag{
    padding: 0.156rem 0;
    color: #666;
  }
  .commentsTotalNumZone{
    margin: 0.156rem 0;
  }
</style>
