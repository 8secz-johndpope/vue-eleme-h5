<template>
  <div>
    <!-- 顶部 -->
    <van-nav-bar left-arrow @click-left="onClickLeft" title="精彩评论">
      <van-icon name="ellipsis" slot="right" @click="openMorePop" />
    </van-nav-bar>
    <!-- 文章内容 -->
    <div class="articleDetail">
      <!-- 文章头部 -->
      <ArticleHeader></ArticleHeader>
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
  import ArticleHeader from './ArticleHeader';
  import { mapGetters } from 'vuex';
  export default {
    components:{
      ShareBox,
      Comments,
      FixedCommentsZone,
      ArticleHeader,
    },
    name: 'articleComments',
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
    }
}
</script>

<style lang="less" scoped>
  .articleDetail{
      font-size: 0.375rem;
      padding: 0.312rem;
  }
  .commentsTotalNumZone{
    margin: 0.156rem 0;
  }
</style>
