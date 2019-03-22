<template>
  <div>
    <!-- 顶部 -->
    <van-nav-bar
      :title="tabTitle"
      left-text="返回"
      right-text="添加"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <!-- 主体内容 -->
    <van-pull-refresh v-model="isRefreshLoading" @refresh="onRefresh">
      <van-list
        v-model="listLoading"
        :finished="finished"
        finished-text="我也是底线的"
        @load="onLoadMore"
      >
        <van-cell-group v-for="(item,index) in arrs">
          <van-cell class="displayflex" @click="goUserzone">
            <div class="displayflex-1 tleft">
              <span class="van-avatar"><img :src="item.userImg" alt="" class="van-avatar-img"></span>
              <span>{{item.userName}}</span>
            </div>
            <div class="displayflex-1 tright">
              <van-button type="danger" size="mini" @click.stop="addInterest(index)" v-show="item.follow_type == 0">关注</van-button>
              <van-button type="default" size="mini" @click.stop="cancelInterest(index)" v-show="item.follow_type == 1">已关注</van-button>
              <van-button type="default" size="mini" @click.stop="cancelInterest(index)" v-show="item.follow_type == 2">互相关注</van-button>
            </div>
          </van-cell>
        </van-cell-group>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>

  import { mapGetters } from 'vuex';

  export default {
    // 父子通信
    props: {
      // 用户列表类型 0-粉丝， 1-关注
      userType: {
        type: Number,
        default: 0,
      }
    },
    components:{
    },
    name: 'userList',
    data () {
      return {
        tabTitle: '', // 头部名称
        arrs: [],
        isRefreshLoading: false,  // 下拉重新刷新
        listLoading: false, // 下拉加载更多
        finished: false,
      };
    },
    mounted () {
      let that = this;
      this.arrs = [...this.getImitateUserList];
      switch (this.userType) {
        case 0:
          that.tabTitle = '我的粉丝'
          break;
        case 1:
          that.tabTitle = '我的关注'
          break;
        default:
          that.tabTitle = '我的粉丝'
      }
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
      onClickRight() {
        this.$router.push('/addFriends');
      },
      // 下拉刷新
      onRefresh() {
        setTimeout(() => {
          this.$toast('刷新成功');
          this.isRefreshLoading = false;
        }, 500);
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
      // 用户中心
      goUserzone () {
        this.$router.push('/userzone')
      }
    }
  }
</script>
<style lang="css" scoped>
</style>
