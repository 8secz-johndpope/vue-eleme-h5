<template>
  <div>
    <!-- 顶部 -->
    <van-nav-bar left-arrow title="正文" @click-left="onClickLeft" fixed>
      <van-icon name="ellipsis" slot="right" @click="openMorePop" />
    </van-nav-bar>
    <!-- 帖子内容 -->
    <div class="articleDetail">
      <!-- 帖子头部 -->
    </div>
    <!-- 分享选项 -->
    <van-actionsheet v-model="sharePopShow" title="分享到">
      <ShareBox :targetId="targetId"></ShareBox>
    </van-actionsheet>
    <!-- 撑开Fixednav挡住的位置 -->
    <div class="space"></div>
    <!-- 固定评论区 -->
    <FixedCommentsZone :showCommentsNum="true" @showCommentsPopP="showCommentsPop"></FixedCommentsZone>
  </div>
</template>
<script>
  import ShareBox from 'components/common_components/ShareBox';
  import Comments from 'components/common_components/Comments';
  import FixedCommentsZone from 'components/common_components/FixedCommentsZone';
  import { mapGetters } from 'vuex';
  export default {
    components:{
      ShareBox,
      Comments,
      FixedCommentsZone,
    },
    name: 'articleDetail',
    data () {
      return {
        msg: '1',
        sharePopShow: false,  // 更多选项
        targetId: '', // 帖子Id
        isAttention: false, // 是否已经关注
        recommendArticle: [],
        articleCommentsPopShow: false,  // 帖子评论区
      };
    },
    mounted () {
      this.recommendArticle = this.getImitateArticleList.splice(1,5)
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
        'getImitateArticleList', // 获取模拟帖子列表
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
      // 显示帖子内容评论弹框
      showCommentsPop (flag) {
        this.articleCommentsPopShow = flag;
      },
      // 关闭帖子内容评论弹框
      closeCommentsPop (flag) {
        this.articleCommentsPopShow = flag;
      }
    }
}
</script>

<style lang="less" scoped>
  .articleDetail{
      font-size: 0.375rem;
      padding: 0.312rem;
      margin: 1.066667rem 0 0 0;
  }
</style>
