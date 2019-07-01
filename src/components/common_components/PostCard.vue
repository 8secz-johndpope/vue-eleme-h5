<template>
  <!-- 列表单个 -->
  <van-panel class="panel-s">
    <div slot="header" class="flex-space-between header">
      <div class="flex" @click.stop="toUserZone">
        <img class="van-avatar" :src="postObj.userImg">
        <div class="mgl10">
          <div>{{'@'+postObj.author}}</div>
          <div class="gray-color createTime">{{COMMONFUNC.commentsTimeFormatter(postObj.createTime)}}</div>
        </div>
      </div>
      <!-- 右边位置 -->
      <div class="flex-center">
        <div>
          <van-button @click.stop="addFollow(postObj)" type="default" size="small" v-if="postObj.isFollow === 1" class="addFollow">+加关注</van-button>
          <van-button @click.stop="addPraise(postObj)" type="default" size="small" v-if="postObj.isFollow === 0 && postObj.isPraised === 1" class="addFollow">
            <span class="flex-center"><van-icon name="thumb-circle-o" class="mgr5" />帮顶</span>
          </van-button>
          <van-button type="default" size="small" v-if="postObj.isFollow === 0 && postObj.isPraised === 0" class="addFollow" @click.stop="toTopPraiseUserList(postObj)">
            {{postObj.helpPraiseNum}}人已顶
          </van-button>
        </div>
      </div>
    </div>
    <div class="content-box" v-html="postObj.contents">
      {{postObj.contents}}
    </div>
    <!-- 图片区域 -->
    <ul class="img-zone" v-if="postObj.postType === 1">
      <li v-for="(imgItem, imgIndex) in postObj.imgList" class="img-cell">
        <img :src="imgItem" @click.stop="postImgList(postObj.imgList, imgIndex)" class="img-item"/>
      </li>
    </ul>
    <!-- 视频区域 -->
    <div class="video-zone" v-if="postObj.postType === 2" @click.stop="toPostVideo(postObj)">
      <img :src="postObj.videoImg" class="video-img">
      <van-icon name="play-circle-o" class="video-play-icon" />
      <div class="flex-space-between video-info">
        <div class="mgl10">{{postObj.watchNum}}次观看</div>
        <div class="mgr10">{{postObj.duration}}</div>
      </div>
    </div>
    <!-- 标签，商品展示区域 -->
    <div class="flex-space-between showcase-zone">
      <!-- 帖子分类标签 -->
      <div>
        <span v-for="(c_postObj, c_index) in postObj.tagsList" v-if="showTag && postObj.tagsList.length > 0" class="mgr5" @click.stop="toPostClassify(c_postObj)">
          <van-tag mark class="van-ellipsis tag-ellipsis">{{c_postObj.tagsName}}</van-tag>
        </span>
      </div>
      <div class="gold-color flex" v-if="postObj.isBusiness === 0 && !isQuetionAndAnswer" @click.stop="openShowcase">
        <van-icon name="cart-o" class="font-gold showcase" />
        <span class="showcaseDec">撩妹必备</span>
      </div>
    </div>
    <!-- 底部，评论，点赞，转发区域 -->
    <div slot="footer" class="flex-space-around" v-if="showFooterGuide">
      <!-- 喜欢收藏 -->
      <span @click.stop="addMyLike(postObj)" class="footer-item">
        <i class="fa fa-heart-o" :class="{ 'red-color': postObj.isLike }" aria-hidden="true"></i>
        {{COMMONFUNC.formatterW(postObj.likers)}}
      </span>
      <!-- 评论 -->
      <span @click.stop="openCommentsPop(postObj)" class="footer-item">
        <i class="fa fa-commenting-o" aria-hidden="true"></i>
        {{COMMONFUNC.formatterW(postObj.commentsNum)}}
      </span>
      <!-- 转发分享 -->
      <span @click.stop="sharePost(postObj)" class="footer-item">
        <i class="fa fa-share" aria-hidden="true"></i>
        {{COMMONFUNC.formatterW(postObj.forwardNum)}}
      </span>
    </div>
    <div class="footer-space" v-if="!showFooterGuide"></div>
  </van-panel>
</template>

<script>
import { ImagePreview } from 'vant';
export default {
  // 父子通信
  props: {
    postObj: {
      type: Object,
      default: {}
    },
    // 是否显示标签
    showTag: {
      type: Boolean,
      default: true,
    },
    // 是否显示底部底栏，喜欢，评论，转发
    showFooterGuide: {
      type: Boolean,
      default: true,
    },
    // 是否是提问帖子
    isQuetionAndAnswer: {
      type: Boolean,
      default: false,
    },
  },
  components : {
  },
  data () {
    return {

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
    // 点击分享
    sharePost (item) {
      let sharePopShow = true;
      let itemIsTop = true;
      this.$emit('on-share-post', sharePopShow, itemIsTop)
    },
    // 点击评论
    openCommentsPop (item) {
      this.$emit('on-open-comments-popup', item)
    },
    // 加入喜欢
    addMyLike: function (item) {
      let that = this;
      if(that.isLogin){
        if (item.isLike) {
          item.isLike = false;
          item.likers -= 1;
        }else{
          item.isLike = true;
          item.likers += 1;
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
    // 加关注
    addFollow: function (item) {
      let that = this;
      if(that.isLogin){
        if (item.isFollow === 1) {
          item.isFollow = 0;
          that.$toast('关注成功！');
        }
      }else {
        that.$router.push({  //核心语句
          path:'/login'   //跳转的路径
        })
      }
    },
    // 帮顶
    addPraise: function (item) {
      let that = this;
      if(that.isLogin){
        if (item.isPraised === 1) {
          item.isPraised = 0;
          that.$toast('帮顶成功，将会有更多的人看到哦！');
        }
      }else {
        that.$router.push({  //核心语句
          path:'/login'   //跳转的路径
        })
      }
    },
    // 图片预览
    postImgList (list, imgIndex) {
      ImagePreview({
        images: list,
        startPosition: imgIndex,
        onClose() {
          // do something
        }
      });
    },
    // 前往用户主页
    toUserZone () {
      this.$router.push({ name: 'userzone', params: '' })
    },
    // 前往帖子分类
    toPostClassify (item) {
      this.$router.push({ name: 'postClassify', params: { containerid: item.containerid }})
    },
    // 前往视频播放
    toPostVideo (item) {
      this.$router.push({ name: 'postVideo', params: { postId: item.postId }})
    },
    // 前往顶赞用户列表
    toTopPraiseUserList (item) {
      this.$router.push({ name: 'topPraiseUserList', params: { postId: item.postId }})
    },
    // 打开橱窗
    openShowcase () {
      this.$emit('on-open-showcase', true)
    }
  }
};
</script>

<style lang="less" scoped>
  .panel-s{
    font-size: 0.373rem;
  }
  .header{
    padding: 0.4rem;
  }
  .top-space{
    height: 1.3rem
  }
  .content-box{
    padding: 0 0.4rem 0.2rem 0.4rem;
    line-height: 0.533rem;
  }
  .showcase-zone{
    display: flex;
    margin: 0 0.4rem 0.133333rem 0.4rem;
  }
  .showcase{
    font-size: 0.5rem;
    padding: 0 0.1rem 0 0;
  }
  .img-zone{
    display: flex;
    flex-wrap: wrap;
    margin: 0.1rem 0.4rem 0.2rem 0.4rem;
  }
  .img-cell{
    box-sizing: border-box;
    width: 33.33%;
    padding: 0 0.133333rem 0.133333rem 0;
  }
  .img-cell:nth-child(3n){
    box-sizing: border-box;
    width: 33.33%;
    padding: 0 0 0.133333rem 0;
  }
  .img-item{
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
  }
  .video-zone{
    margin: 0.1rem 0.4rem 0.2rem 0.4rem;
    position: relative;
  }
  .video-img{
    width: 100%;
    height: 100%;
    vertical-align: top;
    -o-object-fit: cover;
    object-fit: cover;
  }
  .video-play-icon{
    font-size: 54px;
    color: rgba(0,0,0,.4);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .createTime{
    font-size: 0.32rem;
    color: #939393;
  }
  .video-info{
    font-size: 0.32rem;
    position: absolute;
    height: 0.8rem;
    width: 100%;
    bottom: 0;
    left: 0;
    -ms-flex-align: center;
    align-items: center;
    display: -ms-flexbox;
    color: #fff;
    background-image: -webkit-gradient(linear,left top,left bottom,color-stop(3%,transparent),color-stop(98%,rgba(0,0,0,.2)));
    background-image: linear-gradient(-180deg,transparent 3%,rgba(0,0,0,.2) 98%);
  }
  .addFollow{
    background-color: #eee;
  }
  .tag-ellipsis{
    max-width: 100px;
  }
  .footer-space{
    height: 10px;
  }
  .footer-item{
    width: 33%;
    text-align: center;
  }
</style>
