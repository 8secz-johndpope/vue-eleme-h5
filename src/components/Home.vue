<template>
  <div class="white-bg">
    <van-search
      v-model="keywords"
      placeholder="请输入搜索关键词"
      show-action
      @search="onSearch"
      class="search-box"
    >
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
    <van-swipe :autoplay="3000" class="swipe">
      <van-swipe-item v-for="(image, index) in images" :key="index" class="flex-center swipe-img-zone">
        <img v-lazy="image" class="swipe-img" />
      </van-swipe-item>
    </van-swipe>
    <!-- <van-panel class="mg15 pd10" v-for="(menuItem, index) in getImitateMenu">
      <div slot="header">
        <i class="fa fa-heart red-color" aria-hidden="true"></i><span class="main-name">{{menuItem.levelOneName}}</span>
      </div>
      <div class="flex-start">
        <router-link v-for="(child_item, child_index) in menuItem.menuList" :to="'/result/' + child_item.listId" >
          <van-button type="danger" class="item-linear">{{child_item.levelTwoName}}</van-button>
        </router-link>
      </div>
    </van-panel> -->
    <div class="content-box">
      <div class="flex-wrap classify-zone">
        <div class="classify-item" v-for="(menuItem, index) in getImitateMenu">
          <div class="van-avatar">
            <i class="fa fa-handshake-o" aria-hidden="true"></i>
          </div>
          <div>
            {{menuItem.levelOneName}}
          </div>
        </div>
      </div>
      <van-cell value="更多" is-link :to="'/recommend'">
        <template slot="title">
          <div class="flex-start">
            <van-icon name="like-o" class="red-color mgr10" />
            <span class="custom-text">推荐话术</span>
          </div>
        </template>
      </van-cell>
      <van-cell icon="like-o" title="精选视频" is-link value="更多" />
      <div>
        <div class="van-avatar" @click="openVideoPop">
        </div>
      </div>
      <!-- <van-cell icon="like-o" title="优质文章" is-link value="更多" />
      <van-cell icon="like-o" title="情感百科" is-link value="更多" /> -->
    </div>
    <!-- 撑开Fixednav挡住的位置 -->
    <div class="space"></div>
    <!-- 固定标签页 -->
    <Fixednav></Fixednav>
    <van-popup v-model="videoPopShow">
      <div class="videoPop">
        <video-player
          class="video-player vjs-custom-skin"
          ref="videoPlayer"
          :playsinline="true"
          @play="onPlayerPlay($event)"
          @pause="onPlayerPause($event)"
          @ended="onPlayerEnded($event)"
          :options="playerOptions"
          >
        </video-player>
      </div>
    </van-popup>
  </div>
</template>
<!-- 视频事件
@loadeddata="onPlayerLoadeddata($event)"
@waiting="onPlayerWaiting($event)"
@playing="onPlayerPlaying($event)"
@timeupdate="onPlayerTimeupdate($event)"
@canplay="onPlayerCanplay($event)"
@canplaythrough="onPlayerCanplaythrough($event)"
@ready="playerReadied"
@statechanged="playerStateChanged($event)" -->
<script>
import Fixednav from './common_components/Fixed_nav';
import { mapGetters } from 'vuex';
import "../css/common.css"; // 一次引入，全局使用 ？？？
export default {
  name: 'home',
  components: {
    Fixednav,
  },
  data () {
    return {
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
        poster: "http://img2.imgtn.bdimg.com/it/u=3121687100,2370171796&fm=26&gp=0.jpg", //你的封面地址
        width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true  //全屏按钮
        }
      },
      videoPopShow: false, // 视频弹框
      keywords: '',  // 搜索词
      images: [
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550992736&di=b5f7eaa82f8368773fc73615fdec6ee4&imgtype=jpg&er=1&src=http%3A%2F%2Fphoto.16pic.com%2F00%2F11%2F23%2F16pic_1123089_b.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550992736&di=b5f7eaa82f8368773fc73615fdec6ee4&imgtype=jpg&er=1&src=http%3A%2F%2Fphoto.16pic.com%2F00%2F11%2F23%2F16pic_1123089_b.jpg',
      ]
    };
  },
  mounted () {

  },
  beforeDestroy () {

  },
  computed: {
    // 使用对象展开运算符将 getters 混入 computed 对象中
    // 等同于
    // isLogin () {
    //   return this.$store.getters.getLogin
    // }
    // 能少写不少代码
    ...mapGetters([
      'getLogin',
      'getFalseHotWord',
      'getImitateMenu' // 话术分类信息
    ])
  },
  methods: {
    onSearch () {
      if (!this.keywords) {this.$toast('请输入搜索关键词'); return}
      this.$store.dispatch('setKeywords', this.keywords);
      this.$router.push('/result/'+this.keywords);
    },
    openVideoPop () {
      this.videoPopShow = true;
      this.playerOptions.autoplay = true;
    },
    onPlayerPlay(player) {
      // alert("play");
    },
    onPlayerPause(player){
      // alert("pause");
    },
  },
};
</script>

<style lang="less" scoped>
  .search-box{
    background-color: #FE7C6C;
  }
  .item-linear{
    background: linear-gradient(to right, #f38181, #e46d27, #f31802);
    border: 0;
    margin: 0.312rem 0.156rem 0 0.156rem;
    width: 2.57rem;
    padding: 0 0.156rem;
    height: 1.094rem;
    line-height: 1.094rem;
  }
  .content-box{
    background-color: #fff;
    margin: 10px
  }
  .classify-zone{
    height: 4rem;
  }
  .classify-item{
    width: 25%;
    text-align: center;
    padding: 10px 0 0 0;
    line-height: 25px;
  }
  .swipe{
    height: 4.0rem;
  }
  .swipe-img-zone{
    width: 34.375rem;
    height: 13.125rem;
  }
  .swipe-img{
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 9.333rem;
    height: 4.0rem;
    padding: 0.1rem 0.4rem 0 0.4rem;
  }
  .video-item{
    width: 3rem;
  }
  .videoPop{
    width: 9rem;
  }

</style>
