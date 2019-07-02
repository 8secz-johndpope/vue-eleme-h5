<template>
  <div>
    <div class="pdl15 pdr15 white-bg flex-align-center top-zone">
      <van-icon name="arrow-left" class="top-zone-left" @click="onClickLeft"/>
      <form action="/" class="top-zone-right">
        <van-search
          v-model="searchValue"
          placeholder="请输入搜索关键词"
          @search="onSearch"
          clear
        />
      </form>
    </div>
    <van-tabs v-model="tabActive" @click="onClickTab" sticky swipeable>
      <van-tab :title="item.tabName" v-for="(item, index) in tabsList" :key="index">
        <PostList :composition="getImitatePostList" :isThanksShow="true"></PostList>
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
      searchValue: '搜索词',  // 搜索词
      tabActive: 0, //高亮的tab
      // tab列表
      tabsList: [
        {
          tabName: '综合',
          desc: '以发布时间先后顺序排序',
        },{
          tabName: '帖子',
          desc: '我所关注用户的提问，时间排序',
        },{
          tabName: '用户',
          desc: '我所关注用户的提问，时间排序',
        },{
          tabName: '问答',
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
    onSearch () {
      this.$toast('sd')
    },
  }
};
</script>

<style lang="less" scoped>
  .top-zone{
    width: 100%;
  }
  .top-zone-left{
    font-size: 18px;
  }
  .top-zone-right{
    width: 100%;
  }
</style>
