<template>
  <div>
    <div>
      <div class="closePop">
        <van-icon name="close" @click="closeVideoPop"/>
      </div>
      <div class="videoPop">
        <video-player
        class="video-player vjs-custom-skin"
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
      <div class="video-opt">
        <div class="gold-color flex-center" @click="goodsShow = true">
          <van-icon name="cart-o" class="font-gold showcase" />
          <span class="showcaseDec">男神必备</span>
        </div>
        <div>
          <span class="copy"
          v-clipboard:copy="currentPlayData.content"
          v-clipboard:success="onCopy"
          v-clipboard:error="onError"><!-- 复制 -->
          <i class="fa fa-files-o" aria-hidden="true"></i>
        </span>
        <span @click="addMyLike()" class="myLike"><i class="fa fa-heart-o" :class="{ 'red-color': currentPlayData.isLike }" aria-hidden="true"></i> {{COMMONFUNC.formatterW(currentPlayData.likers)}}</span><!-- 收藏 -->
        <span @click="openCommentsPop()" class="myLike"><i class="fa fa-commenting-o" aria-hidden="true"></i> {{COMMONFUNC.formatterW(currentPlayData.commentsNum)}}</span><!-- 评论 -->
        <span @click="share()" class="share"><i class="fa fa-share" aria-hidden="true"></i></span><!-- 分享 -->
      </div>
    </div>
  </div>
    </div>
    <!-- 分享选项 -->
    <van-actionsheet v-model="sharePopShow" title="分享到">
      <ShareBox :targetId="currentPlayData.targetId" :isShowRoofPlacementChild="currentPlayData.isShowRoofPlacement" :isTopNow="currentPlayData.itemIsTop"></ShareBox>
    </van-actionsheet>
    <!-- 评论区 -->
    <van-actionsheet v-model="commentsShow" title="共999条评论">
      <Comments class="comments-box"></Comments>
    </van-actionsheet>
    <!-- 商品展示页 -->
    <van-actionsheet v-model="goodsShow" title="XXX的推荐">
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
import { mapGetters } from 'vuex';
export default {
  name: 'videoCard',
  components: {
    ShareBox,
    Comments,
    GoodsCard,
  },
   // 父子通信
  props: {
    // 播放设置
    playerOptions: {
      type: Object,
      default: {},
    },
    // 视频数据
    currentPlayData: {
      type: Object,
      default: {},
    },
  },
  data () {
    return {
      commentsShow: false,  // 评论区
      sharePopShow: false,  // 底部 -- 分享
      goodsShow: false, //商品弹框
    };
  },

  mounted () {

  },
  beforeDestroy () {

  },
  computed: {
  },
  methods: {
    // 打开弹出层
    videoPlay () {
      let myPlayer = this.$refs.videoPlayer.player;
      myPlayer.play();
    },
    // 点击遮罩层 关闭弹出层
    closeVideoPop () {
      let that = this
      that.$emit('on-close-videoPop', false)
      let myPlayer = that.$refs.videoPlayer.player;
      myPlayer.pause();
    },
    // 点击分享
    share (index) {
      this.sharePopShow = true;
    },
    // 点击评论
    openCommentsPop () {
      this.commentsShow = true;
    },
    // 复制成功
    onCopy: function (e) {
      this.$toast('复制成功！')
    },
    // 复制失败
    onError: function (e) {
      this.$toast('复制失败！')
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
        that.$dialog.confirm({
          title: '未登录',
          message: '登录后可收藏至您的喜欢',
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
.closePop{
  font-size: 0.6rem;
  position: fixed;
  left: 0.6rem;
  top: 0.4rem;
  color: #fff;
}
.video-opt{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 0.8rem;
  padding: 0 0.4rem;
  font-size: 0.373rem;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  .copy{
    width: 0.8rem;
    text-align: center;
  }
  .myLike{
    width: 1.6rem;
    text-align: center;
  }
  .share{
    width: 0.533rem;
    text-align: right;
  }
}
.comments-box{
  height: 13rem;
  overflow: scroll;
}
.goShowcase{
  padding: 0.2rem 0 0.6rem 0;
  font-size: 16px;
}
</style>
