<template>
  <div class="content-box">
    <van-tabs v-model="active" type="card" @click="changeTab" class="tab">
      <van-tab title="话术">
        <Conversation :composition="getImitateConversation" class="item-box"></Conversation>
      </van-tab>
      <van-tab title="文章">
        <Article :composition="getImitateConversation" class="item-box"></Article>
      </van-tab>
    </van-tabs><!-- 撑开Fixednav挡住的位置 -->
    <div class="space"></div>
    <Fixednav></Fixednav>
  </div>
</template>

<script>
import Fixednav from './common_components/Fixed_nav';
import Conversation from './common_components/Conversation';
import Article from './common_components/Article';
import { mapGetters } from 'vuex';
export default {
  name: 'myzone',
  data () {
    return {
      uname: '',
      active: 0,
      show: false,
      isLoadingMore: false,
    };
  },
  mounted () {
    setTimeout(() => {
      window.addEventListener('scroll', this.dispatchLoad, false);
    }, 0);
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.dispatchLoad, false);
  },
  computed: {
    isLogin () {
      if(this.COMMONFUNC.getCookieValue("token") == 'isLogin'){
        return true;
      }else {
        return false;
      }
    },
    ...mapGetters([
      'getImitateConversation', // 获取模拟对话
    ])
  },
  methods: {
    changeTab(index, title) {
      this.$toast(title);
    },
    // 触发加载更多
    dispatchLoad () {
      var dscrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      if (document.documentElement.offsetHeight <= (dscrollTop + window.innerHeight + 1)) {
        console.info('触发加载');
        this.loadMore();
      }
    },
    // 加载更多
    loadMore () {
      // 大于十五条不加载
      let that = this;
      if (!this.isLogin){
        that.$dialog.confirm({
          title: '未登录',
          message: '登录后可查看更多内容哦'
        }).then(() => {
          this.$router.push({  //核心语句
            path:'/login'   //跳转的路径
          })
        }).catch(() => {
          // on cancel
        });
      }else {
        // 使用路由跳转回出问题 未解决
        if (this.getImitateConversation.length > 10) {
          that.$dialog.alert({
            title: '积分不足',
            message: '可通过发表对话、前往《我的》页面签到、充值、邀请好友注册获取积分',
            confirmButtonText: '知道了'
          }).then(() => {

          })
        }else{
          this.$store.dispatch('setLoading', true);
          if (!this.isLoadingMore) { // 是否加载中
            this.isLoadingMore = true;
            setTimeout(() => {
              this.$store.dispatch('setLoading', false);
              if (this.getImitateConversation.length <= 10) {
                this.$store.dispatch('setRecommendPageRecommendMore', [...this.getImitateConversation, ...(this.getImitateConversation).slice(0, 5)]);
              }
              this.isLoadingMore = false;
            }, 100);
          }
        }
      }
    },
  },
  components: {
    Fixednav,
    Conversation,
    Article,
  }
};
</script>

<style lang="less" scoped>
  .item-box{
    margin-top: 15px;
  }
</style>
