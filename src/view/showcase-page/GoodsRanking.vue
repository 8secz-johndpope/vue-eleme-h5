<template>
  <div>
    <van-nav-bar
      title="好物榜"
      @click-left="onClickLeft"
      left-arrow
      fixed
    />
    </van-nav-bar>
    <!-- 空格 -->
    <div class="top-space"></div>
    <div>
      <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1177216182,3827976010&fm=11&gp=0.jpg" class="top-bg" />
    </div>
    <van-tabs v-model="tabActive" swipeable sticky @change="changeTab">
      <van-tab v-for="(tabItem, tabIndex) in tabList" :title="tabItem.name">
        <div class="pdt10 font-14" @click="toPostDetail">
          <div class="pdl5 mg5 pdb5" v-for="(item, index) in userListData" :key="index">
            <div class="flex-space-between">
              <div class="flex-align-center">
                <div class="mgr5 flex-center ranking-user top-user" v-if="index < 3">
                  {{index + 1}}
                </div>
                <span class="mgr5 flex-center ranking-user" v-else>{{index + 1}}.</span>
                <div class="mgl5">
                  <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1735688044,4235283864&fm=26&gp=0.jpg" class="img-common goodsImg">
                </div>
                <div class="mgl5">
                  <div>这是商品描述，如广西百色芒果包邮【买2送1，买3送2】</div>
                  <div class="flex">
                    <span class="red-color">￥</span>
                    <span class="font-14 red-color mgr10">69</span>
                    <span class="dy-font-color">57.6w人看过</span>
                  </div>
                  <div class="flex-start">
                    <img :src="item.userImg" class="van-avatar-small" />
                    <span class="dy-font-color" @click.stop="toShowcase()">作者名称 在售></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserList from 'components/common_components/UserList';
export default {
  name: 'redPeopleRanking',
  data () {
    return {
      tabActive: 0, // 当前tab位置
      tabList: [
        {
          name: '今日榜',
          rules: '统计的是今天凌晨至当前时间前五分钟的点击查看量',
        },{
          name: '7日榜',
          rules: '统计的是前7日的点击查看量',
        },{
          name: '30日榜',
          rules: '统计的是前30日的点击查看量',
        },
      ],
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
    // 切花tab触发
    changeTab (name, title) {
      this.$toast(this.tabList[name].rules)
    },
    // 前往橱窗
    toShowcase () {
      this.$router.push({
        name: 'showcase',
        params: {
          shopId: 'shopId001'
        }
      })
    },
    // 前往作品
    toPostDetail () {
      this.$router.push({
          name: 'postDetail', 
          params: {
            postId: 'postId001'
          }
      })
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
    width: 15%;
    height: 0.8rem;
  }
  .top-user{
    background-image: url('../../images/icon/huangguan.png');
    font-size: 12px;
    padding: 5px 0 0 0;
    color: #fff;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .goodsImg{
    width: 3rem;
    height: 2.2rem;
  }
</style>
