<template>
  <div>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="我也是底线的"
      @load="onLoad"
    >
      <!-- 列表单个 -->
      <van-panel :title="'@'+item.author" class="panel-s" v-for="(item,index) in composition">
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
          <span @click="addMyLike(index)" class="myLike"><i class="fa fa-commenting-o" :class="{ 'red-color': item.isLike }" aria-hidden="true"></i> {{COMMONFUNC.formatterW(item.likers)}}</span><!-- 评论 -->
          <span @click="share" class="share"><i class="fa fa-share" aria-hidden="true"></i></span><!-- 分享 -->
        </div>
      </van-panel>
      <!-- 分享选项 -->
      <van-actionsheet v-model="show" title="分享到">
        <i class="fa fa-weixin" aria-hidden="true"></i>
        <i class="fa fa-qq" aria-hidden="true"></i>
      </van-actionsheet>
    </van-list>
  </div>
</template>

<script>
export default {
  // 父子通信
  props: {
    composition: {
      type: Array,
      default: [],
    }
  },
  data () {
    return {
      show: false,  // 底部 -- 分享
      loading: false,
      finished: false,
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
    share () {
      this.show = true;
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
    onLoad() {
      let obj = {
        userName: '',
        userId: '',
        id: 'zs20190213',
        author: '王五',
        time: '2019.02.13',
        likers: 9999,   // 喜欢数
        isLike: false, // 是否喜欢
        contentHtml: '<p>男：justify-content: flex-start | flex-end | center | space-between | space-around;</p><p>女：xxx</p><p>男：xxx</p>', // 对话渲染html
        content: 'justify-content: flex-start | flex-end | center | space-between | space-around;xxx;xxx',  // 复制粘贴内容
      };
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.composition.push(obj);
        }
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.composition.length >= 20) {
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
      width: 30px;
      text-align: center;
    }
    .myLike{
      width: 60px;
      text-align: center;
    }
    .share{
      width: 20px;
      text-align: right;
    }
  }
  .panel-s{
    margin: 10px;
    font-size: 14px;
  }
  .panel-s:first-child{
    margin-top: 5px;
  }
  .content-box{
    padding: 0 15px;
    line-height: 20px;
  }
  .red-color{
    color: red;
  }
</style>
