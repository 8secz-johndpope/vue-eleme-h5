<template>
  <div>
    <!-- 顶部 -->
    <van-nav-bar
      title="添加好友"
      left-arrow
      @click-left="onClickLeft"
      fixed
    />
    <!-- 撑开Fixednav挡住的位置 -->
    <div class="top-space"></div>
    <van-search
      v-model="value"
      placeholder="搜索用户昵称/撩撩号"
      show-action
      shape="round"
      @search="onSearch"
    >
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
    <div class="recommend">
      <span>全部推荐</span>
    </div>
    <!-- 主体内容 -->
    <van-list
      v-model="listLoading"
      :finished="finished"
      finished-text="暂时没有更多了"
      @load="onLoadMore"
    >
      <div v-for="(item,index) in arrs">
        <UserCard :userInfo="item"></UserCard>
      </div>
    </van-list>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import UserCard from 'components/common_components/UserCard';
  export default {
    name: 'addFriends',
    data () {
      return {
        arrs: [],
        listLoading: false, // 下拉加载更多
        finished: false,
        value: '',
      };
    },
    components:{
      UserCard,
    },
    mounted () {
      let that = this;
      this.arrs = [...this.getImitateUserList];
    },
    computed: {
      ...mapGetters([
        'getImitateUserList', // 获取用户列表数据
      ])
    },
    methods: {
      // 添加关注
      addInterest (index){
         this.$toast('成功关注');
         this.arrs[index].follow_type = 1;
      },
      // 取消关注
      cancelInterest (index) {
        this.$dialog.confirm({
          message: '确定取消关注吗？'
        }).then(() => {
          this.arrs[index].follow_type = 0;
        }).catch(() => {
          // on cancel
        });;
      },
      onClickLeft(){
        this.COMMONFUNC.goBack();
      },
      // 下拉加载更多
      onLoadMore() {
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
            this.arrs.push(obj);
          }
          // 加载状态结束
          this.listLoading = false;
          // 数据全部加载完成
          if (this.arrs.length >= 10) {
            this.finished = true;
          }
        }, 500);
      },
      // 搜索用户
      onSearch () {
        this.$toast('搜索：' + this.value)
      },
      // 用户中心
      goUserzone () {
        this.$router.push({ name: 'userzone' })
      }
    }
  }
</script>
<style lang="css" scoped>
  .recommend{
    height: 0.6rem;
    margin: 0 0 0 0.5rem;
    display: flex;
    align-items: center;
  }
  /*我的赞，我的评论和@，好友新增搜索页 -- 开始 */
  .van-user-item-left{
    display: flex;
    align-items: center;
    width: 90%;
  }
  .van-user-item-right{
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
  }
  .van-user-item-text-info{
    margin-left: 0.2rem;
  }
  .van-userName{
    font-size: 0.438rem;
  }
  .van-autograph{
    max-width: 6rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  /*我的赞，我的评论和@，好友新增搜索页 -- 结束 */
</style>
