<template>
  <div>
    <van-nav-bar
      title="问答达人榜"
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
    <div class="pdr15 pdt10 font-14">
      <div class="pdl15 mgb10 dy-font-color">
        更新于 2019-07-02 20:30:00
      </div>
      <div class="pdl5 mg5 pdb5" v-for="(item, index) in userListData" :key="index" @click="toUserzone">
        <div class="flex-space-between">
          <div class="flex-align-center">
            <div class="mgr5 flex-center ranking-user top-user" v-if="index < 3">
              {{index + 1}}
            </div>
            <span class="mgr5 flex-center ranking-user" v-else>{{index + 1}}.</span>
            <img :src="item.userImg" class="van-avatar-large" />
            <span class="van-ellipsis mgr5">{{item.userName}}</span>
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
  name: 'darenRanking',
  data () {
    return {
      userListData: [],
    };
  },
  components: {
    UserList,
  },
  mounted () {
    this.userListData = [...this.getImitateUserList];
    this.userListData = this.userListData.concat(this.userListData);
    this.userListData = this.userListData.concat(this.userListData);
  },
  computed: {
    ...mapGetters([
      'getImitateUserList', // 获取用户列表数据
    ])
  },
  watch: {

  },
  methods: {
    onClickLeft(){
      this.COMMONFUNC.goBack();
    },
    onClickRight(){
      this.$router.push({ name: 'darenRankingRules', params: ''})
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
  .van-ellipsis{
    max-width: 5.4rem;
  }
  .ranking-user{
    width: 30px;
    height: 30px;
  }
  .top-user{
    background-image: url('../../images/icon/huangguan.png');
    font-size: 12px;
    padding: 5px 0 0 0;
    color: #fff;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
</style>
