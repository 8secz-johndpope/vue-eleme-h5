<template>
  <div>
    <!-- 顶部 -->
    <van-nav-bar left-arrow @click-left="onClickLeft">
      <van-icon name="ellipsis" slot="right" @click="openMorePop" />
    </van-nav-bar>
    <!-- 文章内容 -->
    <div class="articleDetail">
      <!-- 文章头部 -->
      <header class="header">
        <h2>如何在赚钱的同时，追到自己喜欢的妹子</h2>
        <section class="title-tag flex-between">
          <div><span>花牛时报</span><span>&nbsp;03/14 14:08:42</span></div>
          <div @click="addAttention">
            <van-tag round type="primary" size="medium">{{isAttention ? '已关注' : '+关注'}}</van-tag>
          </div>
        </section>
      </header>
      <!-- 文章摘要 -->
      <section class="dec">
        2019年已经进入开时，屏幕面前的你，还是单身汪吗？
      </section>
      <!-- 文章内容 -->
      <article class="article-contents">
        <section>
          <img src="https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1552210959430&amp;di=c51a258d17691b5059e1ad6db3ee56fb&amp;imgtype=0&amp;src=http%3A%2F%2Fimg18.3lian.com%2Fd%2Ffile%2F201709%2F21%2Fa05161a4469dc5ef8be88ee217d53d92.jpg" class="text-img">
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
        <Article :composition="recommendArticle"></Article>
      </section>
      <!-- 评论 -->
      <section class="comments">
        <div class="van-recommend">精彩评论</div>
        <div class="commentsTotalNumZone">
          <span>全部评论（5400）</span>
        </div>
        <Comments></Comments>
      </section>
    </div>
    <!-- 分享选项 -->
    <van-actionsheet v-model="sharePopShow" title="分享到">
      <ShareBox :targetId="targetId"></ShareBox>
    </van-actionsheet>
    <!-- 撑开Fixednav挡住的位置 -->
    <div class="space"></div>
    <!-- 固定评论区 -->
    <FixedCommentsZone></FixedCommentsZone>
  </div>
</template>
<script>
  import ShareBox from './ShareBox';
  import Advertisement from './Advertisement';
  import Comments from './Comments';
  import Article from './Article';
  import FixedCommentsZone from './FixedCommentsZone';
  import { mapGetters } from 'vuex';
  export default {
    components:{
      ShareBox,
      Advertisement,
      Article,
      Comments,
      FixedCommentsZone,
    },
    name: 'mywallet',
    data () {
      return {
        msg: '1',
        sharePopShow: false,  // 更多选项
        targetId: '', // 文章Id
        isAttention: false, // 是否已经关注
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
      // 打开更多弹框
      openMorePop () {
        this.sharePopShow = true;
      },
      // 加关注
      addAttention: function () {
        let that = this;
        if(that.isLogin){
          if (that.addAttention) {
            that.addAttention = false;
          }else{
            that.addAttention = true;
            that.$toast('成功收藏！');
          }
        }else {
          that.$dialog.confirm({
            title: '未登录',
            message: '登录后可关注哦',
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

<style lang="less" scoped>
  .articleDetail{
      font-size: 0.375rem;
      padding: 0.312rem;
  }
  .header{
    // padding: 15px 0;
  }
  .title-tag{
    padding: 0.156rem 0;
    color: #666;
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
  .commentsTotalNumZone{
    margin: 0.156rem 0;
  }
</style>
