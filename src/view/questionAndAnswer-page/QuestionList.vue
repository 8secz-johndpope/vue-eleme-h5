<template>
  <div>
    <van-nav-bar 
      title="知乎列表" 
      right-text="我要提问" 
      @click-left="onClickLeft" 
      @click-right="onClickRight" 
      left-arrow 
      fixed 
    />
    <!-- 空格 -->
    <div class="top-space"></div>
    <van-tabs v-model="tabActive" @click="onClickTab" sticky swipeable>
      <van-tab :title="item.tabName" v-for="(item, index) in tabsList" :key="index">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="我也是底线的"
          :lazy-load="true"
          @load="onLoad"
        >
          <PostList :composition="getImitatePostList" :isThanksShow="true"></PostList>
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import PostList from 'components/common_components/PostList';
export default {
  name: 'questionList',
  data () {
    return {
      tabActive: 0, //高亮的tab
      // tab列表
      tabsList: [
        {
          tabName: '最新',
          desc: '以发布时间先后顺序排序',
        },{
          tabName: '我的关注',
          desc: '我所关注用户的提问，时间排序',
        }
      ],
      loading: false,
      finished: false,
    };
  },
  components: {
    PostList,
  },
  mounted () {
  },
  computed: {
    ...mapGetters([
      'getImitatePostList', // 获取模拟帖子列表
    ]),
  },
  watch: {

  },
  methods: {
    onClickLeft(){
      this.COMMONFUNC.goBack();
    },
    onClickRight(){
      this.$router.push({
        name: 'publishPost',
      });
    },
    // 切换tab栏
    onClickTab(index, title) {
      let that = this;
      that.$dialog.alert({
        title: '排序规则',
        message: that.tabsList[index].desc
      }).then(() => {
        // on close
      });
    },
  }
};
</script>

<style lang="less" scoped>
</style>
