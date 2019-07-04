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
    <van-tabs v-model="tabActive" sticky swipeable>
      <van-tab title="综合">
        <div class="mgb10 white-bg">
          <div class="pdl15 pdt15 dy-font-color">用户（如果搜索精确匹配到用户）</div>
          <UserCard :userInfo="getImitateUserList[0]"></UserCard>
        </div>
        <PostList :composition="getImitatePostList" :isThanksShow="true"></PostList>
      </van-tab>
      <van-tab title="微博">
        <PostList :composition="getImitatePostList" :isThanksShow="true"></PostList>
      </van-tab>
      <van-tab title="用户">
        <!-- 主体内容 -->
        <van-list
          v-model="userListLoading"
          :finished="userListFinished"
          finished-text="暂时没有更多了"
          @load="userListNnLoadMore"
        >
          <div v-for="(item,index) in userList">
            <UserCard :userInfo="item"></UserCard>
          </div>
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import PostList from 'components/common_components/PostList';
import UserCard from 'components/common_components/UserCard';
export default {
  name: 'questionList',
  data () {
    return {
      tabActive: 0, // 高亮tab
      searchValue: '搜索词',  // 搜索词
      userListLoading: false,
      userListFinished: false,
      userList: [], // 用户列表
    };
  },
  components: {
    PostList,
    UserCard,
  },
  mounted () {
    this.userList = [...this.getImitateUserList]
  },
  computed: {
    ...mapGetters([
      'getImitatePostList', // 获取模拟帖子列表
      'getImitateUserList', // 获取用户列表数据
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
    onSearch () {
      this.$toast('sd')
    },
    // 下拉加载更多
    userListNnLoadMore () {
      let obj = {
        LiaoNo: '000001', // 编号
        userName: 'ganluhua',
        userId: '',
        userImg: 'https://avatars1.githubusercontent.com/u/34303195?s=460&v=4',
        follow_type: 0, // 关注类型 0-未关注 1-已关注 2-互相关注
        sex: 0, // 性别类型 0-男 1-女
        fansNum: 9999,  // 粉丝数
        workNum: 10000, // 作品数
        autograph: '个性签名，吸引用户关注对方', // 个性签名
      };
      // 异步更新数据
      setTimeout(() => {
        // 每次加载10条
        for (let i = 0; i < 10; i++) {
          this.userList.push(obj);
        }
        // 加载状态结束
        this.userListLoading = false;
        // 数据全部加载完成
        if (this.userList.length >= 10) {
          this.userListFinished = true;
        }
      }, 500);
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
