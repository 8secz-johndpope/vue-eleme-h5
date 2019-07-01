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
    <van-search placeholder="请输入搜索关键词" v-model="keywords" />
    <!-- 菜单分类 -->
    <div class="flex-wrap white-bg classify-zone">
      <div class="classify-item" v-for="(menuItem, index) in menuList">
        <router-link :to="{ name: menuItem.linkUrlName, params: {} }"  >
          <div>
            <img :src="menuItem.img"  class="van-avatar" />
          </div>
          <div>
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
          levelOneName: '最新', // 分类名称
          linkUrlName: 'newestAsk',
          img: "http://img2.imgtn.bdimg.com/it/u=3121687100,2370171796&fm=26&gp=0.jpg",
        },
        {
          levelOneName: '提问', // 分类名称
          linkUrlName: 'publishPost',
          img: "http://img2.imgtn.bdimg.com/it/u=3121687100,2370171796&fm=26&gp=0.jpg",
        },
        {
          levelOneName: '我的关注', // 分类名称
          linkUrlName: 'myfollowsAsk',
          img: "http://img2.imgtn.bdimg.com/it/u=3121687100,2370171796&fm=26&gp=0.jpg",
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
    onSearch () {
      if (!this.keywords) {this.$toast('请输入搜索关键词'); return}
      this.$store.dispatch('setKeywords', this.keywords);
      this.$router.push('/result/'+this.keywords);
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
