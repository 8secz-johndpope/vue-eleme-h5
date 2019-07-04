<template>
  <div class="questionAndAnswer-page">
    <van-nav-bar title="我的关注" @click-left="onClickLeft" @click-right="onClickRight" left-arrow right-text="提问" fixed/>
    <!-- 空格 -->
    <div class="top-space"></div>
    <PostList :composition="getImitatePostList" :isQuetionAndAnswer="true"></PostList>
  </div>
</template>

<script>
import PostList from 'components/common_components/PostList';
import { mapGetters } from 'vuex';
export default {
  name: 'myAsck',
  data () {
    return {
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
      this.$router.push('/publishPost');
    },
  },
  components: {
    PostList,
  }
};
</script>

<style lang="less" scoped>
</style>
