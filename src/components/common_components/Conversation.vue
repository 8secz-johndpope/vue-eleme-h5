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
          <router-link :to="{ name: 'userzone', params: {} }"><span>{{'@'+item.author}}</span></router-link>
          <van-tag type="danger" v-if="isShowRoofPlacement && item.isTop === 0">置顶</van-tag>
          <div class="gold-color showcase-zone" v-if="!isShowRoofPlacement && item.isBusiness === 0" @click="goodsShow = true">
            <van-icon name="cart-o" class="font-gold showcase" />
            <span class="showcaseDec">撩妹必备</span>
          </div>
        </div>
        <div class="content-box" v-html="item.contentHtml">
          {{item.contentHtml}}
        </div>
        <div slot="footer" class="flex-r">
          <span class="copy"
            v-clipboard:copy="item.content"
            v-clipboard:success="onCopy"
            v-clipboard:error="onError"><!-- 复制 -->
            <i class="fa fa-files-o" aria-hidden="true"></i>
          </span>
          <span @click="addMyLike(index)" class="myLike"><i class="fa fa-heart-o" :class="{ 'red-color': item.isLike }" aria-hidden="true"></i> {{COMMONFUNC.formatterW(item.likers)}}</span><!-- 收藏 -->
          <span @click="openCommentsPop(index)" class="myLike"><i class="fa fa-commenting-o" aria-hidden="true"></i> {{COMMONFUNC.formatterW(item.commentsNum)}}</span><!-- 评论 -->
          <span @click="share(index)" class="share"><i class="fa fa-share" aria-hidden="true"></i></span><!-- 分享 -->
        </div>
      </van-panel>
      <!-- 分享选项 -->
      <van-actionsheet v-model="sharePopShow" title="分享到">
        <ShareBox
          :targetId="targetId"
          :isShowRoofPlacementChild="isShowRoofPlacement"
          :isTopNow="itemIsTop"
          @on-delete-post="deletePost"
          @on-open-share-range-setting="shareRangeSettingPopup = true">
        </ShareBox>
      </van-actionsheet>
      <!-- 分享范围设置 -->
      <van-actionsheet v-model="shareRangeSettingPopup" title="分享范围设置">
        <ShareRangeSetting @on-finished-select-share-range="finishedSelectShareRange"></ShareRangeSetting>
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
import ShareRangeSetting from 'components/child_components/Share_components/ShareRangeSetting';
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
    ShareRangeSetting,
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
      shareRangeSettingPopup: false,  //  分享范围设置弹框
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
    // 下拉加载更多
    onLoad() {
      let obj = {
        userName: '',
        userId: '',
        id: 'zs20190213',
        author: '李四',
        time: '2019.02.13',
        likers: 9999,   // 喜欢数
        commentsNum: 999, // 评论数
        isLike: false, // 是否喜欢
        contentHtml: '<p>女：你是什么星座的呀</p><p>男：我呀，是为你量身定做的（避实就虚，保持男生神秘感，激发兴趣）</p>', // 对话渲染html
        content: '女：你是什么星座的呀</br>男：我呀，是为你量身定做的（避实就虚，保持男生神秘感，激发兴趣）',  // 复制粘贴内容
        isTop: 1, // 是否置顶 0-是， 1-否
        isBusiness: 1, // 是否商家 0-是， 1-否
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
    // 删除帖子
    deletePost (id) {
      this.$toast('调用接口，删除！' + id);
      this.sharePopShow = false;
    },
    // 结束选择分享范围设置
    finishedSelectShareRange () {
      this.sharePopShow = false;
      this.shareRangeSettingPopup = false;
    }
  }
};
</script>

<style lang="less" scoped>
  .flex-r{
    display: flex;
    justify-content: flex-end;
    align-items: baseline;
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
  .panel-s{
    padding: 0.2rem 0.4rem 0 0.4rem;
    font-size: 0.373rem;
  }
  .header{
    padding: 0.2rem;
  }
  .content-box{
    padding: 0.2rem 0.4rem 0 0.4rem;
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
</style>
