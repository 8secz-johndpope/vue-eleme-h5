<template>
  <div class="postDetail">
    <!-- 顶部 -->
    <van-nav-bar
      title="微博详情"
      left-arrow
      @click-left="onClickLeft"
      fixed
    />
    <!-- 撑开Fixednav挡住的位置 -->
    <div class="top-space"></div>
    <!-- 列表单个 -->
    <PostCard
      :postObj="getImitatePostList[1]"
      :showTag="true"
      @on-open-comments-popup="commentsPopup = true"
      @on-share-post="sharePost"
      @on-open-showcase="showcasePopup = true">
    </PostCard>
    <van-tabs v-model="tabActive" sticky swipeable>
      <van-tab title="喜欢">
        <Comments @on-get-replyWho="getReplyWho" @on-more-operate="moreOperate"></Comments>
      </van-tab>
      <van-tab title="评论"><Comments @on-get-replyWho="getReplyWho" @on-more-operate="moreOperate"></Comments></van-tab>
      <van-tab title="转发"><Comments @on-get-replyWho="getReplyWho" @on-more-operate="moreOperate"></Comments></van-tab>
    </van-tabs>
    <CommentsBottomGuide @on-open-comments-input-popup="commentsInputPopup = true"></CommentsBottomGuide>
    <!-- 分享选项 -->
    <van-actionsheet v-model="sharePopup" title="分享到">
      <ShareBox :targetId="targetId" :isShowRoofPlacementChild="false" :isTopNow="itemIsTop"></ShareBox>
    </van-actionsheet>
    <!-- 评论区 -->
    <van-actionsheet v-model="commentsPopup" title="共999条评论">
      <Comments @on-get-replyWho="getReplyWho" class="comments-box" @on-more-operate="moreOperate"></Comments>
      <CommentsBottomGuide @on-open-comments-input-popup="commentsInputPopup = true"></CommentsBottomGuide>
    </van-actionsheet>
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
    <!-- 商品展示页 -->
    <van-actionsheet v-model="showcasePopup" title="XXX的推荐">
      <!-- 商品组件 -->
      <GoodsCard></GoodsCard>
      <div class="btn-zone">
        <router-link :to="{ name: 'commodity', params: {'id':'01'} }" >
          <van-button size="large" round type="danger">去看看</van-button>
        </router-link>
      </div>
      <router-link :to="{ name: 'showcase', params: {'id':'01'} }" >
        <p class="flex-center goShowcase red-color">
          XXX的商品橱窗
        </p>
      </router-link>
    </van-actionsheet>
  </div>
</template>

<script>
import ShareBox from 'components/common_components/ShareBox';
import Comments from 'components/common_components/Comments';
import GoodsCard from 'components/common_components/GoodsCard';
import PostCard from 'components/common_components/PostCard';

import CommentsInputBox from 'components/child_components/Comments_components/CommentsInputBox';
import MoreOperate from 'components/child_components/Comments_components/MoreOperate';
import CommentsBottomGuide from 'components/child_components/Comments_components/CommentsBottomGuide';
import { ImagePreview } from 'vant';
import { mapGetters } from 'vuex';
export default {
  components : {
    ShareBox,
    Comments,
    GoodsCard,
    CommentsInputBox,
    MoreOperate,
    CommentsBottomGuide,
    PostCard,
  },
  data () {
    return {
      sharePopup: false,  // 底部 -- 分享
      loading: false,   //  是否处于加载状态，加载过程中不触发load事件, 默认false
      finished: false,  // 	是否已加载完成，加载完成后不再触发load事件, 默认false
      commentsPopup: false,  // 评论区 弹框
      targetId: '', // 选中的id值
      itemIsTop: 1, // 子项是否置顶中的置顶
      showcasePopup: false, //商品弹框
      replyWho: '', // 回复谁
      moreOptPopup: false,  // 更多操作弹框
      optObj: {}, // 操作对象
      commentsInputPopup: false,  // 评论输入框
      tabActive: 1, // 高亮的tab
    };
  },
  mounted () {
  },
  computed: {
    ...mapGetters([
      'getImitatePostList', // 获取模拟帖子列表
    ]),
    isLogin () {
      if(this.COMMONFUNC.getCookieValue("token") == 'isLogin'){
        return true;
      }else {
        return false;
      }
    },
  },
  methods: {
    onClickLeft(){
      this.COMMONFUNC.goBack();
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
    },
    // 点击分享
    sharePost (sharePopup, itemIsTop) {
      this.sharePopup = sharePopup;
      // this.itemIsTop = this.composition[index].isTop;
    },
  }
};
</script>

<style lang="less" scoped>
  .comments-box{
    height: 11rem;
    overflow: scroll;
  }
  .btn-zone{
    padding: 0.2rem 1rem;
  }
  .goShowcase{
    padding: 0.2rem 0 0.6rem 0;
    font-size: 16px;
  }
</style>
