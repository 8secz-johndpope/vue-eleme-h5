<template>
  <div class="conversationActionsheet"><!-- closeable 模式，在右侧显示关闭按钮 -->
    <van-notice-bar mode="closeable">
      点击内容即可复制，未登录，最多显示20条内容
    </van-notice-bar>
    <van-list
      v-model="loading"
      :finished="finished"
      :finished-text=" isRecommend ? '我也是底线的' : '' "
      @load="onLoad"
    >
      <!-- 列表单个 -->
      <div
        v-for="(item,index) in composition"
        class="white-bg content-box"
        v-html="item.contentHtml"
        v-clipboard:copy="item.content"
        v-clipboard:success="onCopy"
        v-clipboard:error="onError"
      >
        {{item.contentHtml}}
      </div>
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
    },
    // 是否为推荐的页面
    isRecommend: {
      type: Boolean,
      default: true,
    }
  },
  components : {
  },
  data () {
    return {
      loading: false,   //  是否处于加载状态，加载过程中不触发load事件, 默认false
      finished: false,  // 	是否已加载完成，加载完成后不再触发load事件, 默认false
    };
  },
  mounted () {
    // 如果不是推荐页，而是回复详情页
    if(!this.isRecommend){
      this.finished = true;
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
    // 复制成功
    onCopy: function (e) {
      this.$toast.success({
        message: '复制成功',
        duration: 1000,
      });
    },
    // 复制失败
    onError: function (e) {
      this.$toast('复制失败！')
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
        content: '女：你是什么星座的呀男：我呀，是为你量身定做的（避实就虚，保持男生神秘感，激发兴趣）',  // 复制粘贴内容
        isTop: 1, // 是否置顶 0-是， 1-否
        isBusiness: 1, // 是否商家 0-是， 1-否
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
  }
};
</script>

<style lang="less" scoped>
  .content-box{
    padding: 0.2rem 0.4rem;
    line-height: 0.533rem;
    margin: 10px 10px 0 10px;
  }
</style>
