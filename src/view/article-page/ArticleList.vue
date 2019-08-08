<template>
  <div>
    <!-- 顶部 -->
    <van-nav-bar
      title="文章列表"
      left-arrow
      @click-left="onClickLeft"
      fixed
    />
    <!-- 撑开Fixednav挡住的位置 -->
    <div class="top-space"></div>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="我也是底线的"
      :lazy-load="true"
      @load="onLoad"
    >
      <ArticleCard :composition="articleListData"></ArticleCard>
    </van-list>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import ArticleCard from 'components/common_components/ArticleCard';
export default {
  components:{
    ArticleCard,
  },
  name: 'articleList',
  data () {
    return {
      loading: false,
      finished: false,
      articleListData: [],  // 文章列表
    };
  },
  mounted () {
    this.articleListData = JSON.parse(JSON.stringify(this.getImitateArticleList));
  },
  computed: {
    ...mapGetters([
      'getImitateArticleList', // 获取模拟文章列表
    ]),
  },
  methods: {
    onClickLeft(){
      this.COMMONFUNC.goBack();
    },
    // 加载更多文章
    onLoad() {
      let that = this;
      let obj = {
        id: 'zs20190214',
        title: '网上撩妹怎么聊？老司机给你带路',
        desc: '如何像案例中这样搜索话术聊天，可以微信添加导师微信领取与咨询,老司机带你一夜暴富，脱贫脱单.....',
        imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565244489401&di=dffd6a071b7f2c91fc657c3fd822f6ee&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn05%2F444%2Fw640h604%2F20180728%2Faf00-hfxsxzf6326836.jpg',
        time: '2019.02.13',
        readingNumbers: 99999,   // 阅读数
        isCarefullyChosen: true, // 是否精选
      };
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 5; i++) {
          that.articleListData.push(obj);
        }
        // 加载状态结束
        that.loading = false;
        // 数据全部加载完成
        if (that.articleListData.length >= 10) {
          that.finished = true;
        }
      }, 500);
    },
  }
}
</script>

<style lang="less" scoped>
</style>
