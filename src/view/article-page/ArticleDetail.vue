<template>
  <div>
    <!-- 顶部 -->
    <van-nav-bar left-arrow title="文章正文" @click-left="onClickLeft" fixed></van-nav-bar>
    <!-- 文章内容 -->
    <div class="articleDetail">
      <!-- 文章头部 -->
      <ArticleHeader></ArticleHeader>
      <!-- 文章摘要 -->
      <section class="dec">
        2019年已经进入开时，屏幕面前的你，还是单身汪吗？
      </section>
      <!-- 文章内容 -->
      <article class="article-contents">
        <section class="img-zone">
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565244489401&di=dffd6a071b7f2c91fc657c3fd822f6ee&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn05%2F444%2Fw640h604%2F20180728%2Faf00-hfxsxzf6326836.jpg" class="text-img">
        </section>
        <section>
          2018年已经进入倒计时，屏幕面前的你，还是单身汪吗？
        </section>
        <section>
          没关系，对于喜欢的人就要大胆的撩，对于爱的人就要勇敢去追求。今天小编整理了20个撩妹金句送给大家，希望老铁们可以在喜欢的人面前，再勇敢一点儿，再幽默一点儿！
        </section>
      </article>
      <footer class="statement">免责声明：本文来自产品新闻客户端自媒体，不代表本网的观点和立场。</footer>
      <!-- 广告 -->
      <section class="advertisement">
        <van-panel title="这是一条广告">
          <Advertisement></Advertisement>
        </van-panel>
      </section>
      <!-- 推荐 -->
      <section class="advertisement">
        <div class="van-recommend">精彩推荐</div>
        <ArticleCard :composition="recommendArticle"></ArticleCard>
      </section>
    </div>
  </div>
</template>
<script>
  import Advertisement from 'components/common_components/Advertisement';
  import ArticleCard from 'components/common_components/ArticleCard';
  import ArticleHeader from 'components/common_components/ArticleHeader';
  import { mapGetters } from 'vuex';
  export default {
    components:{
      Advertisement,
      ArticleCard,
      ArticleHeader,
    },
    name: 'articleDetail',
    data () {
      return {
        msg: '1',
        recommendArticle: [],
      };
    },
    mounted () {
      this.recommendArticle = this.getImitateArticleList.splice(1,5)
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
        'getImitateArticleList', // 获取模拟文章列表
      ])
    },
    methods: {
      onClickLeft(){
        this.COMMONFUNC.goBack();
      },
    }
}
</script>

<style lang="less" scoped>
  .articleDetail{
      font-size: 0.375rem;
      padding: 0.312rem;
      margin: 1.066667rem 0 0 0;
  }
  .dec{
    color: #666;
    padding: 0.156rem 0;
  }
  .dec::before {
    background: url(//mat1.gtimg.com/www/mobi/2017/image/quotes.png) left top no-repeat;
    content: '';
    display: block;
    width: 0.4rem;
    height: 0.2rem;
    background-size: cover;
  }
  .dec::after {
    background: url(//mat1.gtimg.com/www/mobi/2017/image/quotes.png) right bottom no-repeat;
    content: '';
    display: block;
    width: 0.4rem;
    height: 0.2rem;
    background-size: cover;
  }
  .article-contents{
    font-size: 0.438rem;
  }
  .article-contents section{
    padding: 0.312rem 0 0 0;
  }
  .van-recommend {
    color: rgb(34, 34, 34);
    font-size: 0.5rem;
    line-height: 0.781rem;
    text-align: center;
    font-family: PingFangSC-Semibold;
    padding: 0.312rem 0 0 0;
  }
  .van-recommend::after {
    content: "";
    display: block;
    width: 0.375rem;
    height: 0.094rem;
    background: rgb(73, 139, 248);
    margin: 0.188rem auto 0.156rem;
    border-radius: 0.094rem;
  }
  .statement{
    color: #909AA4;
    padding: 0.469rem 0;
  }
</style>
