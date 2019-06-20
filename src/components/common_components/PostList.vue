<template>
  <div class="postCard">
    <van-list
      v-model="loading"
      :finished="finished"
      :finished-text=" isRecommend ? '我也是底线的' : '' "
      @load="onLoad"
    >
      <!-- 列表单个 -->
      <div v-for="(item,index) in composition" @click="toPostDetail(item)">
        <PostCard :postObj="item" :showTag="showTag" @on-open-comments-popup="commentsPopup = true" @on-share-post="sharePost" @on-open-showcase="showcasePopup = true"></PostCard>
      </div>
      <!-- 分享选项 -->
      <van-actionsheet v-model="sharePopup" title="分享到">
        <ShareBox :targetId="targetId" :isShowRoofPlacementChild="isShowRoofPlacement" :isTopNow="itemIsTop"></ShareBox>
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
    </van-list>
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
    CommentsInputBox,
    MoreOperate,
    CommentsBottomGuide,
    PostCard,
  },
  data () {
    return {
      sharePopup: false,  // 底部弹框 -- 分享
      loading: false,   //  是否处于加载状态，加载过程中不触发load事件, 默认false
      finished: false,  // 	是否已加载完成，加载完成后不再触发load事件, 默认false
      commentsPopup: false,  // 评论区 弹框
      targetId: '', // 选中的id值
      itemIsTop: 1, // 子项是否置顶中的置顶
      showcasePopup: false, //商品弹框 弹框
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
      this.commentsPopup = true;
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
    // 前往帖子详情
    toPostDetail (item) {
      this.$router.push({ name: 'postDetail', params: { postId: item.postId }})
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
