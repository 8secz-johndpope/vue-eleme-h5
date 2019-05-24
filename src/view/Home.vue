<template>
  <div class="white-bg home-view">
    <van-search
      v-model="keywords"
      placeholder="请输入搜索关键词"
      show-action
      @search="onSearch"
      class="search-box"
    >
      <div slot="action" @click="onSearch" class="search-box-btn-zone"><van-button size="small" type="danger">搜索</van-button></div>
    </van-search>
    <van-swipe :autoplay="3000" class="swipe">
      <van-swipe-item v-for="(image, index) in images" :key="index" class="flex-center swipe-img-zone">
        <img v-lazy="image" class="swipe-img" />
      </van-swipe-item>
    </van-swipe>
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
      <!-- 精选视频 -->
      <van-cell value="更多" is-link :to="'/recommend'" class="home-van-cell">
        <template slot="title">
          <div class="flex-start">
            <van-icon name="like-o" class="red-color mgr5" />
            <span class="custom-text">精选视频</span>
          </div>
        </template>
      </van-cell>
      <div class="video-list">
        <div class="video-list-item" v-for="(item, index) in getImitateVideoList">
          <div class="img-zone" v-bind:style="{background:'url(' + item.videopic + ') no-repeat 100% 100%' }"  @click="openVideoPop">
            <div class="img-zone-dec">{{item.title}}</div>
          </div>
          <div class="flex-space-between video-desc">
            <span>@{{item.author}}</span>
            <span @click="addMyLike()" class="myLike"><i class="fa fa-heart-o" :class="{ 'red-color': item.isLike }" aria-hidden="true"></i> {{COMMONFUNC.formatterW(item.likers)}}</span><!-- 收藏 -->
          </div>
        </div>
      </div>
      <!-- 优选文章 -->
      <van-cell value="更多" is-link :to="'/recommend'" class="home-van-cell">
        <template slot="title">
          <div class="flex-start">
            <van-icon name="like-o" class="red-color mgr5" />
            <span class="custom-text">优选文章</span>
          </div>
        </template>
      </van-cell>
      <!-- 文章列表，默认四篇 -->
      <div>
        <ArticleCard :composition="getImitateArticleList" class="item-box"></ArticleCard>
      </div>
      <!-- 情感百科 -->
      <van-cell value="更多" is-link :to="'/recommend'" class="home-van-cell">
        <template slot="title">
          <div class="flex-start">
            <van-icon name="like-o" class="red-color mgr5" />
            <span class="custom-text">情感百科</span>
          </div>
        </template>
      </van-cell>
      <!-- 情感百科列表，默认3篇 -->
      <div>
        <EncyclopediasCard></EncyclopediasCard>
      </div>
    </div>
    <!-- 撑开Fixednav挡住的位置 -->
    <div class="space"></div>
    <!-- 固定标签页 -->
    <Fixednav></Fixednav>
    <!-- 视频弹框 -->
    <van-popup v-model="videoPopShow" :close-on-click-overlay="false">
      <VideoCard ref="childVideoCard" :playerOptions="playerOptions" :currentPlayData="currentPlayData" @on-close-videoPop="closeVideoPop"></VideoCard>
    </van-popup>
  </div>
</template>
<script>
import Fixednav from 'components/common_components/Fixed_nav';
import ShareBox from 'components/common_components/ShareBox';
import Comments from 'components/common_components/Comments';
import GoodsCard from 'components/common_components/GoodsCard';
import ArticleCard from 'components/common_components/ArticleCard';
import VideoCard from 'components/common_components/VideoCard';
import EncyclopediasCard from 'components/common_components/EncyclopediasCard';
import { mapGetters } from 'vuex';
import "../css/common.css"; // 一次引入，全局使用 ？？？
export default {
  name: 'home',
  components: {
    Fixednav,
    Comments,
    ShareBox,
    GoodsCard,
    ArticleCard,
    VideoCard,
    EncyclopediasCard,
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
          src: "" //你的视频地址（必填）
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
      currentPlayData: {
        content: '这是视频文本',  // 复制的视频文本
        isLike: true,  // 是否喜欢
        likers: 10001,  // 喜欢数
        commentsNum: 10001,  // 评论数
        targetId: '', // 选中的id值
        itemIsTop: 1, // 子项是否置顶中的置顶
        isShowRoofPlacement: false, // 是否在分享弹框显示置顶按钮
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
      'getImitateArticleList', // 获取模拟文章列表
      'getImitateVideoList', // 获取模拟视频列表
      'getImitateEncyclopediasClassfication', // 模拟百科分类
      'getImitateEncyclopediasList', // 模拟百科列表
      'getImitateMenu' // 话术分类信息
    ])
  },
  methods: {
    onSearch () {
      if (!this.keywords) {this.$toast('请输入搜索关键词'); return}
      this.$store.dispatch('setKeywords', this.keywords);
      this.$router.push('/result/'+this.keywords);
    },
    // 打开弹出层
    openVideoPop () {
      let that = this;
      const c_toast = this.$toast.loading({
        duration: 0,       // 持续展示 toast
        forbidClick: true, // 禁用背景点击
        loadingType: 'spinner',
        message: '加载中...'
      });
      setTimeout( () => {
        that.videoPopShow = true;
        that.playerOptions.sources[0].src =  "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" //你的视频地址（必填）
        that.$toast.clear();
        // myPlayer.requestFullscreen(); // 全屏
        // myPlayer.exitFullscreen();  // 退出全屏
        setTimeout( () => {
          that.$refs.childVideoCard.videoPlay();  // 触发子组件的方法
        },300)
      },1000)
    },
    // 点击遮罩层 关闭弹出层
    closeVideoPop (params) {
      this.videoPopShow = params;
    },
  },
};
</script>

<style lang="less" scoped>
  .home-view .van-popup{
    height: 100%;
    background-color: rgba(0,0,0,.7);
    display: flex;
    align-items: center;
  }
  .search-box{
    background-color: #FE7C6C;
    padding: 0.186667rem 0.266667rem
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
  }
  .classify-item{
    width: 25%;
    text-align: center;
    line-height: 0.666667rem;
  }
  .swipe{
    height: 4.2rem;
  }
  .swipe-img-zone{
    width: 34.375rem;
    height: 13.125rem;
  }
  .swipe-img{
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 4.0rem;
    padding: 0.266667rem;
  }
  .home-van-cell{
    padding: 0.266667rem 0.133333rem;
  }
  .video-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .video-list-item{
    height: 3.2rem;
    width: 47%;
    box-shadow: 3px 3px 2px #ddd;
    margin: 0 0 10px 0
  }
  .img-zone{
    height: 2.5rem;
    width: 100%;
    overflow: hidden;
    position: relative;
    color: #fff;
  }
  .img-zone-dec{
    position: absolute;
    height: 0.9rem;
    width: 100%;
    bottom: 0;
    padding: 0 0.266667rem;
    align-items: center;
    display: flex;
    background-color: rgba(0, 0, 0, 0.7);
  }
  .video-desc{
    padding: 0.133333rem 0.266667rem;
  }
</style>
