<template>
  <div class="taskCenter">
    <van-nav-bar
      left-arrow
      @click-left="onClickLeft"
      title="任务中心"
      right-text="兑换商城"
      @click-right="onClickRight"
      fixed
    />
    <!-- 撑开Fixednav挡住的位置 -->
    <div class="top-space"></div>
    <!-- 当前金币 -->
    <div class="flex-center pd15 userGold">
      <div>
        <div class="flex-center myGold">我的金币</div>
        <div class="gold-color">
          <van-icon name="gold-coin-o" class="gold-color" />
          <span class="goldCoin">{{goldCoin}}</span>
        </div>
      </div>
    </div>
    <div class="pd10 white-bg">
      <div class="task-title">
        <van-icon name="like-o" class="red-color mgr5" /><span>连续签到领福利</span>
      </div>
      <van-steps :active="stepActive" active-color="#FF6766" class="mgt10 mgb10">
        <van-step v-for="(item, index) in 7" :key="index" class="step">{{item}}天</van-step>
      </van-steps>
      <div class="task-title">
        <van-icon name="like-o" class="red-color mgr5" /><span>邀请有礼，你有我也有</span>
      </div>
      <div class="mg10">
        <router-link :to="{ name: 'invitation', params: {} }">
          <img src="http://img4.imgtn.bdimg.com/it/u=1622742900,2957030660&fm=26&gp=0.jpg" class="img-common invite" />
        </router-link>
      </div>
      <div class="task-title">
        <van-icon name="like-o" class="red-color mgr5" /><span>日常任务</span>
      </div>
      <div class="task-box" v-for="(item, index) in taskList" :key="item.taskId">
        <div class="flex-space-between task-list">
          <div class="task-l">
            <div class="taskName">{{item.taskTitle}}</div>
            <div class="flex-center dy-font-color">
              <span>奖励</span>
              <span class="gold-color mgl5 mgr5">+{{item.taskReward}}</span>
              <span>金币</span>
            </div>
          </div>
          <div class="task-r">
            <van-button class="task-btn btn-get" type="warning" size="small" round v-if="item.taskStatus === 1" @click="getReward(item, index)">领奖励</van-button>
            <van-button class="task-btn" type="warning" size="small" round v-if="item.taskStatus === 2" @click="taskLink(item)">去完成</van-button>
            <van-button class="task-btn" type="warning" size="small" round disabled v-if="item.taskStatus === 3">已领取</van-button>
            <!-- 完成进度 -->
            <div class="progress" v-if="item.totalNumber > 1">
              <span>完成度</span>
              <span class="gold-color">{{item.completeNumber}}</span>
              <span>/</span>
              <span>{{item.totalNumber}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Step, Steps } from 'vant';
Vue.use(Step).use(Steps);
export default {
  name: 'taskCenter',
  components: {
  },
  data () {
    return {
      stepActive: 0,
      goldCoin: 100,
      taskList: [
        {
            "totalNumber": 1, // 完成进度需要次数
            "taskLink": "publishPost",  // 跳转地址
            "taskTitle": "写微撩", // 任务名称
            "taskStatus": 2,  //   任务状态， 1-领奖励  2-去完成  3-已领取
            "taskId": 14,   // 任务Id
            "taskReward": 2,  // 任务奖励
            "completeNumber": 0,  // 完成进度
        },
        {
            "totalNumber": 3,  // 完成进度需要次数
            "taskLink": "postClassify", // 跳转地址
            "taskTitle": "评论",  // 任务名称
            "taskStatus": 1,    //   任务状态， 1-领奖励  2-去完成  3-已领取
            "taskId": 15,  // 任务Id
            "taskReward": 1,  // 任务奖励
            "completeNumber": 3,  // 完成进度
        },
        {
            "totalNumber": 3,  // 完成进度需要次数
            "taskLink": "postClassify", // 跳转地址
            "taskTitle": "帮顶",  // 任务名称
            "taskStatus": 2,    //   任务状态， 1-领奖励  2-去完成  3-已领取
            "taskId": 17,  // 任务Id
            "taskReward": 1,  // 任务奖励
            "completeNumber": 1,  // 完成进度
        },
        {
            "totalNumber": 3,  // 完成进度需要次数
            "taskLink": "postClassify", // 跳转地址
            "taskTitle": "转发微撩",  // 任务名称
            "taskStatus": 2,    //   任务状态， 1-领奖励  2-去完成  3-已领取
            "taskId": 16,  // 任务Id
            "taskReward": 1,  // 任务奖励
            "completeNumber": 1,  // 完成进度
        },
      ]
    };
  },
  mounted () {
    let that = this;
    this.$toast.success({
      message: '签到成功',
      duration: '1500',
    })
    setTimeout ( ()=> {
      that.stepActive += 1;
      that.goldCoin += 2;
    },1500)
  },
  computed: {
  },
  methods: {
    onClickLeft(){
      this.COMMONFUNC.goBack();
    },
    onClickRight() {
      this.$router.push({
        name: 'shoppingMallIndex',
        params: '',
      })
    },
    // 领取奖励
    getReward (item, index) {
      item.taskStatus = 3;
      this.goldCoin += 2;
      this.$toast.success({
        message: '领取成功',
        duration: '1500',
      })
    },
    // 跳转任务
    taskLink(item) {
      this.$router.push({
        name: item.taskLink,
        params: ''
      })
    }
  },
};
</script>

<style lang="less" scoped>
  .task-box{
    padding: 15px 15px 0 15px;
    line-height: 30px;
  }
  .task-title{
    display: flex;
    align-items: center;
  }
  .userGold{
    background-color: #006599;
  }
  .myGold{
    font-size: 14px;
    color: #fff;
  }
  .goldCoin{
    font-size: 32px;
  }
  .task-list{
    border-bottom: 1px solid #ECECEC;
  }
  .task-l{
  }
  .task-r{
    text-align: right;
  }
  .taskName{
    font-size: 16px;
    color: #4C4C4C;
  }
  .progress{
    text-align: center;
    color: #999999;
  }
  .task-btn{
    width: 80px;
    height: 30px;
  }
  .btn-get{
    background-color: #FF6766
  }
  .invite{
    width: 100%;
    height: 2rem;
  }
</style>
