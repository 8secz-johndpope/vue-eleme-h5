<template>
  <div>
    <van-nav-bar
      title="微撩红人榜"
      @click-left="onClickLeft"
      @click-right="onClickRight"
      right-text="榜单规则"
      left-arrow
      fixed
    />
    </van-nav-bar>
    <!-- 空格 -->
    <div class="top-space"></div>
    <div>
      <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1177216182,3827976010&fm=11&gp=0.jpg" class="top-bg" />
    </div>
    <div class="pd15 font-14">
      <div class="mgb10 dy-font-color">
        更新于 2019-07-02 20:30:00
      </div>
      <div class="mg5 recommendItem" v-for="(item, index) in userListData" :key="index" @click="toUserzone">
        <div class="flex-space-between">
          <div class="flex">
            <span :class=" index < 3 ? 'gold-color' : '' " class="mgr5">{{index + 1}}.</span>
            <img :src="item.userImg" class="van-avatar" />
            <span class="van-ellipsis mgr5">{{item.name}}</span>
          </div>
          <div>
            <span class="dy-font-color">132.2w 影响力</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserList from 'components/common_components/UserList';
export default {
  name: 'redPeopleRanking',
  data () {
    return {
      userListData: [],
    };
  },
  components: {
    UserList,
    ...mapGetters([
      'getImitateUserList', // 获取用户列表数据
    ])
  },
  mounted () {
    this.userListData = [...this.getImitateUserList];
  },
  computed: {
  },
  watch: {

  },
  methods: {
    onClickLeft(){
      this.COMMONFUNC.goBack();
    },
    onClickRight(){
      this.$toast('榜单规则')
    },
    // 前往帖子分类
    toUserzone () {
      this.$router.push({ name: 'userzone', params: ''})
    },
  }
};
</script>

<style lang="less" scoped>
  .top-bg{
    background-repeat: no-repeat;
    width: 100%;
    height: 4rem;
    background-size: 100% 100%;
  }
  .recommendItem{
    height: 0.8rem;
  }
  .van-ellipsis{
    max-width: 5.4rem;
  }
</style>
