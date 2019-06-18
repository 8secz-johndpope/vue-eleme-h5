<template>
  <div class="postCard">
    <van-list
      v-model="loading"
      :finished="finished"
      :finished-text=" isRecommend ? '我也是底线的' : '' "
      @load="onLoad"
    >
      <!-- 列表单个 -->
      <van-panel class="panel-s" v-for="(item,index) in composition">
        <div slot="header" class="flex-space-between header">
          <router-link :to="{ name: 'userzone', params: {} }">
            <div class="flex">
              <img class="van-avatar" :src="item.userImg">
              <div class="mgl10">
                <div>{{'@'+item.author}}</div>
                <div class="gray-color createTime">{{COMMONFUNC.commentsTimeFormatter(item.createTime)}}</div>
              </div>
            </div>
          </router-link>
          <!-- 右边位置 -->
          <div class="flex-center">
            <div>
              <van-button @click="addFollow(item, index)" type="default" size="small" v-if="item.isFollow === 1" class="addFollow">+加关注</van-button>
              <van-button @click="addPraise(item, index)" type="default" size="small" v-if="item.isFollow === 0 && item.isPraised === 1" class="addFollow">
                <span class="flex-center"><van-icon name="thumb-circle-o" class="mgr5" />帮顶</span>
              </van-button>
              <van-button type="default" size="small" v-if="item.isFollow === 0 && item.isPraised === 0" class="addFollow">{{item.helpPraiseNum}}人已顶</van-button>
            </div>
          </div>
        </div>
        <div class="content-box" v-html="item.contents">
          {{item.contents}}
        </div>
        <!-- 图片区域 -->
        <ul class="img-zone" v-if="item.postType === 1">
          <li v-for="(imgItem, imgIndex) in item.imgList" class="img-cell">
            <img :src="imgItem" @click="postImgList(item.imgList, imgIndex)" class="img-item"/>
          </li>
        </ul>
        <!-- 视频区域 -->
        <div class="video-zone" v-if="item.postType === 2">
          <img :src="item.videoImg" class="video-img">
          <van-icon name="play-circle-o" class="video-play-icon" />
          <div class="flex-space-between video-info">
            <div class="mgl10">{{item.watchNum}}次观看</div>
            <div class="mgr10">{{item.duration}}</div>
          </div>
        </div>
        <!-- 标签，商品展示区域 -->
        <div class="flex-space-between showcase-zone">
          <!-- 帖子分类标签 -->
          <div>
            <span v-for="(c_item, c_index) in item.tagsList" v-if="showTag && item.tagsList.length > 0" class="mgr5" @click="toPostClassify(c_item)">
              <van-tag mark class="van-ellipsis tag-ellipsis">{{c_item.tagsName}}</van-tag>
            </span>
          </div>
          <div class="gold-color flex" v-if="item.isBusiness === 0" @click="goodsShow = true">
            <van-icon name="cart-o" class="font-gold showcase" />
            <span class="showcaseDec">撩妹必备</span>
          </div>
        </div>
        <!-- 底部，评论，点赞，转发区域 -->
        <div slot="footer" class="flex-space-around">
          <!-- 喜欢收藏 -->
          <span @click="addMyLike(index)" class="myLike">
            <i class="fa fa-heart-o" :class="{ 'red-color': item.isLike }" aria-hidden="true"></i>
            {{COMMONFUNC.formatterW(item.likers)}}
          </span>
          <!-- 评论 -->
          <span @click="openCommentsPop(index)" class="myLike">
            <i class="fa fa-commenting-o" aria-hidden="true"></i>
            {{COMMONFUNC.formatterW(item.commentsNum)}}
          </span>
          <!-- 转发分享 -->
          <span @click="share(index)" class="share">
            <i class="fa fa-share" aria-hidden="true"></i>
            {{COMMONFUNC.formatterW(item.forwardNum)}}
          </span>
        </div>
      </van-panel>
      <!-- 分享选项 -->
      <van-actionsheet v-model="sharePopShow" title="分享到">
        <ShareBox :targetId="targetId" :isShowRoofPlacementChild="isShowRoofPlacement" :isTopNow="itemIsTop"></ShareBox>
      </van-actionsheet>
      <!-- 评论区 -->
      <van-actionsheet v-model="commentsShow" title="共999条评论">
        <Comments @on-get-replyWho="getReplyWho" class="comments-box" @on-more-operate="moreOperate" @on-open-comments-input-popup="commentsInputPopup = true"></Comments>
      </van-actionsheet>
      <!-- 评论输入框弹框 -->
      <van-popup
        v-model="commentsInputPopup"
        position="bottom"
        @closed="closeInputPopup"
      >
        <FixedCommentsZone :replyWho="replyWho"></FixedCommentsZone>
      </van-popup>
      <!-- 评论更多操作 -->
      <van-popup
        v-model="moreOptPopup"
        position="bottom"
      >
        <MoreOperate :optObj="optObj" @on-after-more-operate="afterMoreOperate"></MoreOperate>
      </van-popup>
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
    </van-list>
  </div>
</template>

<script>
import ShareBox from 'components/common_components/ShareBox';
import Comments from 'components/common_components/Comments';
import GoodsCard from 'components/common_components/GoodsCard';
import FixedCommentsZone from 'components/common_components/FixedCommentsZone';
import MoreOperate from 'components/child_components/Comments_components/MoreOperate';
import { ImagePreview } from 'vant';
export default {
  // 父子通信
  props: {
    composition: {
      type: Array,
      default: [],
    },
    // 是否在分享弹框显示置顶按钮
    isShowRoofPlacement: {
      type: Boolean,
      default: false,
    },
    // 是否为推荐的页面
    isRecommend: {
      type: Boolean,
      default: true,
    },
    // 是否显示标签
    showTag: {
      type: Boolean,
      default: true,
    }
  },
  components : {
    ShareBox,
    Comments,
    GoodsCard,
    FixedCommentsZone,
    MoreOperate,
  },
  data () {
    return {
      sharePopShow: false,  // 底部 -- 分享
      loading: false,   //  是否处于加载状态，加载过程中不触发load事件, 默认false
      finished: false,  // 	是否已加载完成，加载完成后不再触发load事件, 默认false
      commentsShow: false,  // 评论区 弹框
      targetId: '', // 选中的id值
      itemIsTop: 1, // 子项是否置顶中的置顶
      goodsShow: false, //商品弹框
      replyWho: '', // 回复谁
      moreOptPopup: false,  // 更多操作弹框
      optObj: {}, // 操作对象
      commentsInputPopup: false,  // 评论输入框
    };
  },
  mounted () {
    // 如果不是推荐页，而是回复详情页
    if(!this.isRecommend){
      this.finished = true;
      this.commentsShow = true;
    }
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
    share (index) {
      this.sharePopShow = true;
      this.itemIsTop = this.composition[index].isTop;
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
    addFollow: function (item, index) {
      let that = this;
      if(that.isLogin){
        if (item.isFollow === 1) {
          item.isFollow = 0;
          that.$toast('关注成功！');
        }
      }else {
        that.$dialog.confirm({
          title: '未登录',
          message: '请先登录',
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
    // 帮顶
    addPraise: function (item, index) {
      let that = this;
      if(that.isLogin){
        if (item.isPraised === 1) {
          item.isPraised = 0;
          that.$toast('帮顶成功，将会有更多的人看到哦！');
        }
      }else {
        that.$dialog.confirm({
          title: '未登录',
          message: '请先登录',
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
    // 下拉加载更多
    onLoad() {
      let obj = {
        id: 'id0', // id
        postType: 0,    // 帖子类型，0-纯文本，1-含有图片，不含视频，2-只含有视频，不含图片
        contents: '<p>工作996，生病ICU，年轻人，你的头发还好吗？</p>', // 帖子内容，会包含表情，HTML格式
        contentsImg: [],   // 帖子图片
        videoUrl: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',   // 视频URL，备注：图片、视频互斥
        videoImg: 'http://img2.imgtn.bdimg.com/it/u=3121687100,2370171796&fm=26&gp=0.jpg',   // 视频封面图片
        praiseNum: 996, // 点赞人数
        commentsNum: 996, // 评论人数
        forwardNum: 996, // 转发人数
        userName: '作者', // 作者名
        userId: 'userId1',  // 作者Id
        userImg: 'http://img2.imgtn.bdimg.com/it/u=3121687100,2370171796&fm=26&gp=0.jpg',  // 用户头像
        // 帖子标签集合
        tagsList: [
            {
                tagsName: '美女',
                id: 'tagsId1',
            },
        ],
        isBusiness: 0, // 是否商家 0-是， 1-否
      };
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 5; i++) {
          this.composition.push(obj);
        }
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.composition.length >= 10) {
          this.finished = true;
        }
      }, 500);
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
    // 前往帖子分类
    toPostClassify (item) {
      this.$router.push({ name: 'postClassify', params: { containerid: item.containerid }})
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
  .red-color{
    color: red;
  }
  .showcase-zone{
    display: flex;
    margin: 0 0.4rem 0.133333rem 0.4rem;
  }
  .showcase{
    font-size: 0.5rem;
    padding: 0 0.1rem 0 0;
  }
  .btn-zone{
    padding: 0.2rem 1rem;
  }
  .goShowcase{
    padding: 0.2rem 0 0.6rem 0;
    font-size: 16px;
  }
  .comments-box{
    height: 11rem;
    overflow: scroll;
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
</style>
