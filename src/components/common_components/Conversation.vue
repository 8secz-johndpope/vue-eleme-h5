<template>
  <div>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="我也是底线的"
      @load="onLoad"
    >
      <!-- 列表单个 -->
      <van-panel class="panel-s" v-for="(item,index) in composition">
        <div slot="header" class="flex-space-between header">
          <router-link :to="{ name: 'userzone', params: {} }"><span>{{'@'+item.author}}</span></router-link>
          <van-tag type="danger" v-if="isShowRoofPlacement && item.isTop === 0">置顶</van-tag>
        </div>
        <div class="content-box" v-html="item.contentHtml">
          {{item.contentHtml}}
        </div>
        <div slot="footer" class="flex-r">
          <!-- <i class="fa fa-eye" aria-hidden="true"></i><span>1w</span> -->
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
        <ShareBox :targetId="targetId" :isShowRoofPlacementChild="isShowRoofPlacement" :isTopNow="itemIsTop"></ShareBox>
      </van-actionsheet>
      <!-- 评论区 -->
      <van-actionsheet v-model="commentsShow" title="共999条评论">
        <Comments></Comments>
      </van-actionsheet>
    </van-list>
  </div>
</template>

<script>
import ShareBox from './ShareBox';
import Comments from './Comments';
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
  },
  components : {
    ShareBox,
    Comments,
  },
  data () {
    return {
      sharePopShow: false,  // 底部 -- 分享
      loading: false,
      finished: false,
      commentsShow: false,  // 评论区 弹框
      targetId: '', // 选中的id值
      itemIsTop: 1, // 子项是否置顶中的置顶
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
        isTop: 0, // 是否置顶 0-是， 1-否
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
    margin: 0.267rem 0.4rem;
    font-size: 0.373rem;
  }
  .header{
    padding: 0.2rem;
  }
  .panel-s:first-child{
    margin-top: 0.267rem;
  }
  .content-box{
    padding: 0 0.4rem;
    line-height: 0.533rem;
  }
  .red-color{
    color: red;
  }
</style>
