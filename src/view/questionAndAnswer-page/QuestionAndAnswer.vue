<template>
  <div class="questionAndAnswer-page">
    <van-nav-bar
      title="情感问答"
      right-text="我的提问"
      left-arrow
      fixed
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <!-- 空格 -->
    <div class="top-space"></div>
    <van-search placeholder="默认会有最新或者最热的帖子标题" readonly="readonly" @click="toPostSearch" />
    <!-- 菜单分类 -->
    <div class="flex-wrap white-bg classify-zone">
      <div class="classify-item" v-for="(menuItem, index) in menuList">
        <router-link :to="{ name: menuItem.linkUrlName, params: {} }"  >
          <div>
            <img :src="menuItem.img"  class="van-avatar" />
          </div>
          <div class="font-14">
            {{menuItem.levelOneName}}
          </div>
        </router-link>
      </div>
    </div>
    <PostList :composition="getImitatePostList" :isQuetionAndAnswer="true"></PostList>
  </div>
</template>

<script>
import PostList from 'components/common_components/PostList';
import { mapGetters } from 'vuex';
export default {
  name: 'questionAndAnswer',
  data () {
    return {
      keywords: '', // 搜索关键词
      menuList: [
        {
          levelOneName: '提问', // 分类名称
          linkUrlName: 'publishPost',
          img: require('images/icon/questionAndAnswer/tiwen.png'), // 绝对路径
        },
        {
          levelOneName: '最新', // 分类名称
          linkUrlName: 'newestAsk',
          img: require('images/icon/questionAndAnswer/zuixin.png'), // 绝对路径
        },
        {
          levelOneName: '排行榜', // 分类名称
          linkUrlName: 'darenRanking',
          img: require('images/icon/questionAndAnswer/paihangbang.png'), // 绝对路径
        },
      ]
    };
  },
  mounted () {
  },
  computed: {
    ...mapGetters([
      'getImitatePostList', // 获取模拟帖子列表
    ]),
  },
  methods: {
    onClickLeft(){
      this.COMMONFUNC.goBack();
    },
    onClickRight(){
      this.$router.push({
        name: 'myAsk',
        params: {
          userId: 'userId0001'
        }
      });
    },
    // 前往帖子搜索
    toPostSearch () {
      this.$router.push({ name: 'postSearch' });
    },
  },
  components: {
    PostList,
  }
};
</script>

<style lang="less" scoped>
  .classify-zone{
    padding: 0.266667rem 0 0 0;
  }
  .classify-item{
    width: 33%;
    text-align: center;
    line-height: 0.8rem;
  }
</style>
