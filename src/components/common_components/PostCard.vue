<template>
  <div class="conversationActionsheet">
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
            <img class="van-avatar" :src="item.userImg">
            <span>{{'@'+item.author}}</span>
          </router-link>
          <!-- <div class="gold-color showcase-zone" v-if="item.isBusiness === 0" @click="goodsShow = true">
            <van-icon name="cart-o" class="font-gold showcase" />
            <span class="showcaseDec">撩妹必备</span>
          </div> -->
        </div>
        <div class="content-box" v-html="item.contents">
          {{item.contents}}
        </div>
        <ul class="img-zone" v-if="item.postType === 1">
          <li v-for="(imgItem, imgIndex) in item.imgList" class="img-cell">
            <img :src="imgItem" @click="postImgList(item.imgList, imgIndex)" class="img-item"/>
          </li>
        </ul>
        <div class="video-zone" v-if="item.postType === 2">
          <img :src="item.videoImg" class="video-img">
          <van-icon name="play-circle-o" class="video-play-icon" />
        </div>
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
    </van-list>
  </div>
</template>

<script>
import ShareBox from './ShareBox';
import Comments from './Comments';
import GoodsCard from './GoodsCard';
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
    }
  },
  components : {
    ShareBox,
    Comments,
    GoodsCard,
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
        for (let i = 0; i < 1; i++) {
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
  }
};
</script>

<style lang="less" scoped>
  .panel-s{
    font-size: 0.373rem;
  }
  .header{
    padding: 0.2rem;
  }  
  .panel-s:first-child{
    margin-top: 1.333333rem;
  }
  .content-box{
    padding: 0 0.4rem;
    line-height: 0.533rem;
  }
  .red-color{
    color: red;
  }
  .showcase-zone{
    display: flex;
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
    height: 13rem;
    overflow: scroll;
  }
  .img-zone{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 0.2rem 0.4rem;
  }
  .img-cell{
    box-sizing: border-box;
    width: 33.33%;
    padding: 0 0.133333rem 0.133333rem 0;
  }
  .img-item{
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
  }
  .video-zone{
    margin: 0.2rem 0.4rem;
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
</style>
