<template>
  <!-- 顶部 -->
  <div class="postVideo">
    <van-nav-bar left-arrow @click-left="onClickLeft" fixed class="van-nav-bar" />
    <van-popup v-model="videoPopShow" :close-on-click-overlay="false">
      <div class="videoPop">
        <video-player
          class="vjs-custom-skin"
          ref="videoPlayer"
          id="example_video_1"
          :playsinline="true"
          :options="playerOptions"
          @fullscreenchange="onPlayerFullScreenchange($event)"
          @play="onPlayerPlay($event)"
          @pause="onPlayerPause($event)"
          @ended="onPlayerEnded($event)"
          @loadeddata="onPlayerLoadeddata($event)"
          @waiting="onPlayerWaiting($event)"
          @playing="onPlayerPlaying($event)"
          @timeupdate="onPlayerTimeupdate($event)"
          @canplay="onPlayerCanplay($event)"
          @canplaythrough="onPlayerCanplaythrough($event)"
          @ready="playerReadied($event)"
          @statechanged="playerStateChanged($event)"
          >
        </video-player>
      </div>
    </van-popup>
    <!-- 底部下方描述区 -->
    <div class="pd15 white-color footer-zone">
      <!-- 商品橱窗 -->
      <div class="vant-popup-bg showcase-zone" @click="showcasePopup = true">
        <van-icon name="cart-o" class="gold-color cart-icon mgr5" />
        <span class="showcaseDec">男神必备</span>
      </div>
      <div class="userName">@大头儿子</div>
      <div class="video-desc">
        这是一段极其不通对的沙发发呆了解了解安抚；啊阿斯顿发阿暗示法啊方式阿发 啊所发生的发撒旦法大阿斯顿发
      </div>
    </div>
    <!-- 右侧操作区 -->
    <div class="white-color right-zone">
      <div class="mgt10 user-van-avatar">
        <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1735688044,4235283864&fm=26&gp=0.jpg" class="van-avatar"/>
        <div class="addMyLike-icon"><van-icon name="add" class="red-color" /></div>
      </div>
      <div class="mgt15" @click="addMyLike">
        <div><van-icon name="like-o" class="right-zone-icon" /></div>
        <div>2.1w</div>
      </div>
      <div class="mgt15" @click="openCommentsPop">
        <div><van-icon name="chat-o" class="right-zone-icon" /></div>
        <div>2.1w</div>
      </div>
      <div class="mgt15" @click="share">
        <div><van-icon name="share" class="right-zone-icon" /></div>
        <div>2.1w</div>
      </div>
    </div>
    <!-- 分享选项 -->
    <van-actionsheet v-model="sharePopShow" title="分享到">
      <ShareBox></ShareBox>
    </van-actionsheet>
    <!-- 评论区 -->
    <van-actionsheet v-model="commentsShow" title="共999条评论">
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

import CommentsInputBox from 'components/child_components/Comments_components/CommentsInputBox';
import MoreOperate from 'components/child_components/Comments_components/MoreOperate';
import CommentsBottomGuide from 'components/child_components/Comments_components/CommentsBottomGuide';
import PostDetailBottomGuide from 'components/child_components/Comments_components/PostDetailBottomGuide';

import { mapGetters } from 'vuex';
export default {
  name: 'videoCard',
  components: {
    ShareBox,
    Comments,
    GoodsCard,
    CommentsInputBox,
    MoreOperate,
    CommentsBottomGuide,
    PostDetailBottomGuide,
  },
   // 父子通信
  props: {

  },
  data () {
    return {
      optObj: {}, // 操作对象
      replyWho: '', // 回复谁
      videoPopShow: true,
      commentsShow: false,  // 评论区
      sharePopShow: false,  // 底部 -- 分享
      showcasePopup: false, //商品弹框
      commentsInputPopup: false,  // 评论输入框
      moreOptPopup: false,  // 更多操作弹框
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          type: "video/mp4",
          src: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" //你的视频地址（必填）
        }],
        poster: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1735688044,4235283864&fm=26&gp=0.jpg", //你的封面地址
        width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true  //全屏按钮
        }
      },
    };
  },

  mounted () {

  },
  beforeDestroy () {

  },
  computed: {
  },
  methods: {
    onClickLeft(){
      this.COMMONFUNC.goBack();
    },
    // 打开弹出层
    videoPlay () {
      let myPlayer = this.$refs.videoPlayer.player;
      myPlayer.play();
    },
    // 点击分享
    share (index) {
      this.sharePopShow = true;
    },
    // 点击评论
    openCommentsPop () {
      this.commentsShow = true;
    },
    // 加入喜欢
    addMyLike: function (index) {
      let that = this;
      if(that.isLogin){
        if (that.composition[index].isLike) {
          that.composition[index].isLike = false;
          that.composition[index].likers -= 1;
        }else{
          that.composition[index].isLike = true;
          that.composition[index].likers += 1;
          that.$toast('成功收藏！');
        }
      }else {
        that.$router.push({  //核心语句
          path:'/login'   //跳转的路径
        })
      }
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
    onPlayerFullScreenchange (player) {
      console.log("onPlayerFullScreenchange");
    },
    playerReadied (player) {
      console.log("onPlayerLoadeddata");
    },
    onPlayerPlay(player) {
      console.log("onPlayerLoadeddata");
    },
    onPlayerPause(player){
      console.log("onPlayerPause");
    },
    onPlayerEnded(player) {
      console.log("onPlayerEnded");
    },
    onPlayerLoadeddata(player){
      console.log("onPlayerLoadeddata");
    },
    onPlayerWaiting(player) {
      console.log("onPlayerWaiting");
    },
    onPlayerPlaying(player){
      console.log("onPlayerPlaying");
    },
    onPlayerTimeupdate(player) {
      console.log("onPlayerTimeupdate");
    },
    onPlayerCanplay(player){
      console.log("onPlayerCanplay");
    },
    onPlayerCanplaythrough(player) {
      console.log("onPlayerCanplaythrough");
    },
    playerStateChanged(player){
      console.log("playerStateChanged");
    },
  },
};
</script>

<style lang="less" scoped>
  .videoPop{
    width: 10rem;
  }
  .van-nav-bar{
    z-index: 3 !important;
    background-color: transparent;
  }
  .van-nav-bar::after{
    border-bottom-width: 0;
  }
  .van-nav-bar .van-icon {
    color: #fff;
  }
  .footer-zone{
    position: fixed;
    bottom: 0;
    z-index: 2002;
    width: 70%;
    height: 3.2rem;
    line-height: 28px;
  }
  .userName{
    font-size: 16px;
  }
  .video-desc{
    line-height: 20px;
    font-size: 14px;
  }
  .right-zone{
    position: fixed;
    bottom: 0;
    right: 10px;
    width: 1rem;
    height: 6.9rem;
    z-index: 2002;
    text-align: center;
    font-size: 14px;
  }
  .right-zone-icon{
    font-size: 28px;
  }
  .user-van-avatar{
    position: relative;
  }
  .van-avatar{
    border: 1px solid #fff;
  }
  .addMyLike-icon{
    font-size: 20px;
    position: absolute;
    bottom: -0.32rem;
    left: 0.28rem;
  }
  .showcase-zone{
    display: flex;
    align-items: center;
  }
  .cart-icon{
    font-size: 18px;
  }
  .comments-box{
    height: 11rem;
    overflow: scroll;
  }
</style>
