<template>
  <div class="questionAndAnswer-page">
    <van-nav-bar title="问答专区" @click-left="onClickLeft" left-arrow fixed>
      <van-icon name="search" slot="right" />
    </van-nav-bar>
    <!-- 空格 -->
    <div class="top-space"></div>
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
    <PostList :composition="getImitatePostList"></PostList>
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
          levelOneName: '答题', // 分类名称
          linkUrlName: 'questionList',
          img: "http://img2.imgtn.bdimg.com/it/u=3121687100,2370171796&fm=26&gp=0.jpg",
        },
        {
          levelOneName: '提问', // 分类名称
          linkUrlName: 'articleList',
          img: "http://img2.imgtn.bdimg.com/it/u=3121687100,2370171796&fm=26&gp=0.jpg",
        },
        {
          levelOneName: '榜单', // 分类名称
          linkUrlName: 'encyclopediasList',
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
