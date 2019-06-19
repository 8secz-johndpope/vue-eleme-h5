<template>
  <div>
    <!-- 顶部 -->
    <van-nav-bar left-arrow @click-left="onClickLeft" title="精彩评论" fixed>
      <van-icon name="ellipsis" slot="right" @click="openMorePop" />
    </van-nav-bar>
    <!-- 撑开Fixednav挡住的位置 -->
    <div class="top-space"></div>
    <!-- 文章内容 -->
    <div class="articleDetail">
      <!-- 文章头部 -->
      <ArticleHeader></ArticleHeader>
    </div>
    <!-- 评论 -->
    <section class="comments">
      <div class="commentsTotalNumZone pdl15">
        <span>全部评论（5400）</span>
      </div>
      <Comments @on-get-replyWho="getReplyWho" @on-more-operate="moreOperate"></Comments>
      <CommentsBottomGuide :showMainText="true" @on-open-comments-input-popup="commentsInputPopup = true"></CommentsBottomGuide>
    </section>
    <!-- 评论输入框弹框 -->
    <van-popup
      v-model="commentsInputPopup"
      position="bottom"
      @closed="closeInputPopup"
    >
      <CommentsInputBox :replyWho="replyWho" @on-send-comments="sendComments"></CommentsInputBox>
    </van-popup>
    <!-- 评论更多操作 -->
    <van-popup
      v-model="moreOptPopup"
      position="bottom"
    >
      <MoreOperate :optObj="optObj" @on-after-more-operate="afterMoreOperate"></MoreOperate>
    </van-popup>
    <!-- 分享选项 -->
    <van-actionsheet v-model="sharePopShow" title="分享到">
      <ShareBox :targetId="targetId"></ShareBox>
    </van-actionsheet>
    <!-- 撑开Fixednav挡住的位置 -->
    <div class="space"></div>
  </div>
</template>
<script>
  import ShareBox from 'components/common_components/ShareBox';
  import Comments from 'components/common_components/Comments';
  import ArticleHeader from 'components/common_components/ArticleHeader';
  import CommentsInputBox from 'components/child_components/Comments_components/CommentsInputBox';
  import MoreOperate from 'components/child_components/Comments_components/MoreOperate';
  import CommentsBottomGuide from 'components/child_components/Comments_components/CommentsBottomGuide';
  import { mapGetters } from 'vuex';
  export default {
    components:{
      ShareBox,
      Comments,
      CommentsInputBox,
      ArticleHeader,
      MoreOperate,
      CommentsBottomGuide,
    },
    name: 'articleComments',
    data () {
      return {
        msg: '1',
        sharePopShow: false,  // 更多选项
        targetId: '', // 文章Id
        isAttention: false, // 是否已经关注
        replyWho: '', // 回复谁
        optObj: {}, // 操作对象
        commentsInputPopup: false,  // 评论输入框
        moreOptPopup: false,  // 更多操作弹框
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
      // 子组件关闭弹框，将回复的人员名称干掉
      closePopup () {
        this.replyWho = '';
      },
      // 获取回复的人
      getReplyWho (user) {
        this.replyWho = user;
      },
      // 更多操作
      moreOperate (obj) {
        this.moreOptPopup = true;
        this.optObj = obj
      },
      // 更多操作之后
      afterMoreOperate (replyFlag, obj) {
        this.moreOptPopup = false;
        if (replyFlag) {
          this.commentsInputPopup = true;
          this.replyWho = obj.replyName;
        }
      },
      // 关闭评论输入框
      closeInputPopup () {
        this.replyWho = '';
      },
      // 发送评论
      sendComments () {
        this.commentsInputPopup = false;
      }
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
