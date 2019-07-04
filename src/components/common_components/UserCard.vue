<template>
  <van-cell-group>
    <van-cell class="displayflex" @click="goUserzone">
      <div class="tleft van-user-item-left">
        <div class="van-avatar-large"><img :src="userInfo.userImg" alt="" class="van-avatar-img"></div>
        <div class="flex-column van-user-item-text-info">
          <span class="van-userName">{{userInfo.userName}}</span>
          <span class="van-autograph">{{userInfo.autograph}}</span>
          <span>{{userInfo.sex === 1 ? '女' : '男'}}&nbsp;&nbsp;作品：{{COMMONFUNC.formatterW(userInfo.workNum)}} 粉丝：{{COMMONFUNC.formatterW(userInfo.fansNum)}}</span>
        </div>
      </div>
      <div class="tright van-user-item-right">
        <van-button type="danger" size="mini" @click.stop="addInterest(index)" v-show="userInfo.follow_type == 0">关注</van-button>
        <van-button type="default" size="mini" @click.stop="cancelInterest(index)" v-show="userInfo.follow_type == 1">已关注</van-button>
        <van-button type="default" size="mini" @click.stop="cancelInterest(index)" v-show="userInfo.follow_type == 2">互相关注</van-button>
      </div>
    </van-cell>
  </van-cell-group>
</template>

<script>
  export default {
    name: 'userCard',
    props: {
      userInfo: {
        type: Object,
        default: {},
      },
    },
    data () {
      return {
      };
    },
    components:{
    },
    mounted () {
    },
    computed: {
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
      // 用户中心
      goUserzone () {
        this.$router.push('/userzone')
      }
    }
  }
</script>
<style lang="css" scoped>
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
