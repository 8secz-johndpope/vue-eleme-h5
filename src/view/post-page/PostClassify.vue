<template>
  <div>
    <!-- 顶部 -->
    <van-nav-bar
      title="校花专题"
      left-arrow
      @click-left="onClickLeft"
      fixed
    />
    <!-- 撑开Fixednav挡住的位置 -->
    <div class="top-space"></div>
    <PostList :composition="getImitatePostList" :showTag="false"></PostList>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import PostList from 'components/common_components/PostList';
export default {
  components:{
    PostList,
  },
  name: 'postSetting',
  data () {
    return {
      msg: '1',
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
  }
}
</script>

<style lang="less" scoped>
</style>
