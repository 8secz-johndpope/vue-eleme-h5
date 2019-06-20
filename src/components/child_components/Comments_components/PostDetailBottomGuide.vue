<template>
  <div class="fixed-footer white-bg">
    <div class="flex-space-around fixed-footer-zone">
      <!-- 喜欢收藏 -->
      <span @click.stop="addMyLike" class="footer-item">
        <i class="fa fa-heart-o" :class="{ 'red-color': postObj.isLike }" aria-hidden="true"></i>
        <span class="mgr5">喜欢</span>
      </span>
      <!-- 评论 -->
      <span @click.stop="openCommentsInputPopup" class="footer-item footer-item-center">
        <i class="fa fa-commenting-o" aria-hidden="true"></i>
        <span class="mgr5">评论</span>
      </span>
      <!-- 转发分享 -->
      <span @click.stop="sharePost()" class="footer-item">
        <i class="fa fa-share" aria-hidden="true"></i>
        <span class="mgr5">分享</span>
      </span>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    name: 'postDetailBottomGuide',
    props: {
      // 是否有评论数
      postObj: {
        type: Object,
        default: {},
      },
    },
    data () {
      return {
      };
    },
    components: {
    },
    mounted () {
    },
    computed: {
    },
    methods: {
      // 打开评论输入框
      openCommentsInputPopup () {
        this.$emit('on-open-comments-input-popup', true)
      },
      // 点击分享
      sharePost () {
        let sharePopShow = true;
        let itemIsTop = true;
        this.$emit('on-share-post', sharePopShow, itemIsTop)
      },
      // 加入喜欢
      addMyLike: function () {
        let that = this;
        if(that.isLogin){
          if (postObj.isLike) {
            postObj.isLike = false;
            postObj.likers -= 1;
          }else{
            postObj.isLike = true;
            postObj.likers += 1;
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
    }
  }
</script>
<style lang="css" scoped>
  .fixed-footer{
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 100;
    border-top: 1px solid #ECECEC;
  }
  .fixed-footer-zone{
    height: 1.2rem;
    font-size: 14px;
    background-color: #F6F6F6
  }
  .footer-item{
    width: 33%;
    text-align: center;
  }
  .footer-item-center{
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
  }
</style>
