<template>
  <div class="home-view">
    <!-- 顶部 -->
    <van-nav-bar
      title="微撩"
      fixed
    />
    <!-- 撑开Fixednav挡住的位置 -->
    <div class="top-space"></div>
    <van-swipe :autoplay="3000" class="white-bg van-swipe-zone">
      <van-swipe-item v-for="(image, index) in swiptImages" :key="index" class="flex-center">
        <router-link :to="{ name: 'shoppingMallIndex', params: {} }">
          <img v-lazy="image" class="swipe-img img-common border-radius" />
        </router-link>
      </van-swipe-item>
    </van-swipe>
    <!-- 菜单分类 -->
    <div class="flex-wrap white-bg classify-zone">
      <div class="classify-item" v-for="(menuItem, index) in menuList">
        <router-link :to="{ name: menuItem.linkUrlName, params: {} }"  >
          <div>
            <img :src="menuItem.img"  class="van-avatar-large" />
          </div>
          <div>
            {{menuItem.levelOneName}}
          </div>
        </router-link>
      </div>
    </div>
    <div class="content-box">
      <!-- 优选文章 -->
      <van-cell title="优选文章" value="更多" is-link :to="'/article/articleList'" class="mgt10"></van-cell>
      <!-- 文章列表，默认四篇 -->
      <div class="white-bg">
        <ArticleCard :composition="getImitateArticleList"></ArticleCard>
      </div>
      <!-- 星座运势 -->
      <van-cell title="星座运势" value="更多" is-link :to="'/constellation/index'" class="mgt10"></van-cell>
      <div class="pd15 white-bg">
        <ConstellationCard></ConstellationCard>
      </div>
      <!-- 情感百科 -->
      <van-cell title="情感百科" value="更多" is-link :to="'/encyclopedias/encyclopediasList'" class="mgt10"></van-cell>
      <!-- 情感百科列表，默认3篇 -->
      <div class="white-bg pd10">
        <EncyclopediasCard></EncyclopediasCard>
      </div>
      <!-- AI导师 -->
      <van-cell title="AI导师" value="更多" is-link :to="'/AITeaching/AITeachingChatList'" class="mgt10"></van-cell>
      <!-- AI导师列表，默认四篇 -->
      <div class="flex-space-around white-bg pd10">
        <!-- AI导师卡片 -->
        <ImgCard :composition="getImitateVideoList"></ImgCard>
      </div>
    </div>
    <!-- 撑开Fixednav挡住的位置 -->
    <div class="space"></div>
    <!-- 固定标签页 -->
    <Fixednav></Fixednav>
  </div>
</template>
<script>
import Fixednav from 'components/common_components/Fixed_nav';
import ShareBox from 'components/common_components/ShareBox';
import Comments from 'components/common_components/Comments';
import ArticleCard from 'components/common_components/ArticleCard';
import EncyclopediasCard from 'components/common_components/EncyclopediasCard';
import ImgCard from 'components/child_components/AITeaching_components/ImgCard';
import ConstellationCard from 'components/child_components/Constellation_components/ConstellationCard';
import { mapGetters } from 'vuex';
// import "../css/common.css"; // 一次引入，全局使用 ？？？
export default {
  name: 'home',
  components: {
    Fixednav,
    Comments,
    ShareBox,
    ArticleCard,
    EncyclopediasCard,
    ImgCard,
    ConstellationCard,
  },
  data () {
    return {
      swiptImages: [
        'http://img3.imgtn.bdimg.com/it/u=1631905243,177371678&fm=26&gp=0.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550992736&di=b5f7eaa82f8368773fc73615fdec6ee4&imgtype=jpg&er=1&src=http%3A%2F%2Fphoto.16pic.com%2F00%2F11%2F23%2F16pic_1123089_b.jpg',
      ],
      menuList: [
        {
          levelOneName: '恋爱话术', // 分类名称
          linkUrlName: 'talkingLibrary',
          img: require('images/menu/huashu.png'), // 绝对路径
        },
        {
          levelOneName: '精选文章', // 分类名称
          linkUrlName: 'articleList',
          img: require('images/menu/wenzhang.png'), // 绝对路径
        },
        {
          levelOneName: '情感百科', // 分类名称
          linkUrlName: 'encyclopediasList',
          img: require('images/menu/baike.png'), // 绝对路径
        },
        {
          levelOneName: 'AI导师', // 分类名称
          linkUrlName: 'AITeachingChatList',
          img: require('images/menu/daoshi.png'), // 绝对路径
        },
        {
          levelOneName: '情感问答', // 分类名称
          linkUrlName: 'questionAndAnswer',
          img: require('images/menu/wenda.png'), // 绝对路径
        },
        {
          levelOneName: '任务中心', // 分类名称
          linkUrlName: 'taskCenter',
          img: require('images/menu/renwuzhongxin.png'), // 绝对路径
        },
        {
          levelOneName: '星座运势', // 分类名称
          linkUrlName: 'constellation',
          img: require('images/menu/xingzuo.png'), // 绝对路径
        },
        {
          levelOneName: '实用工具', // 分类名称
          linkUrlName: 'toolList',
          img: require('images/menu/gongju.png'), // 绝对路径
        },
      ]
    };
  },
  mounted () {

  },
  computed: {
    // 使用对象展开运算符将 getters 混入 computed 对象中
    // 等同于
    // isLogin () {
    //   return this.$store.getters.getLogin
    // }
    // 能少写不少代码
    ...mapGetters([
      'getLogin',
      'getImitateArticleList', // 获取模拟文章列表
      'getImitateVideoList', // 获取模拟视频列表
      'getImitateEncyclopediasClassfication', // 模拟百科分类
      'getImitateEncyclopediasList', // 模拟百科列表
    ])
  },
  methods: {
  },
};
</script>

<style lang="less" scoped>
  .home-view .van-popup{
    height: 100%;
    background-color: rgba(0,0,0,.7);
    display: flex;
    align-items: center;
  }
  .classify-zone{
    padding: 0.266667rem 0 0 0;
  }
  .classify-item{
    width: 25%;
    text-align: center;
    line-height: 0.8rem;
  }
  .van-swipe-zone{
    height: 4.2rem;
    width: 100%;
  }
  .swipe-img{
    height: 4.0rem;
    width: 9.7rem;
  }
</style>
