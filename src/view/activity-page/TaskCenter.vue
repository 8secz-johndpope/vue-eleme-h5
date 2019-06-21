<template>
  <div class="taskCenter">
    <van-nav-bar left-arrow @click-left="onClickLeft" title="任务中心" fixed />
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
        <van-step v-for="(item, index) in 7" :key="index">{{item}}天</van-step>
      </van-steps>
      <div class="task-title">
        <van-icon name="like-o" class="red-color mgr5" /><span>日常任务</span>
      </div>
      <div class="task-box" v-for="(item, index) in taskList" :key="item.taskId">
        <div class="flex-space-between task-list">
          <div class="task-l">
            <div class="taskName">{{item.taskTitle}}</div>
            <div class="flex-center">
              <span class="gray-color mgr5">奖励</span>
              <span class="gold-color">+{{item.taskReward}}</span>
              <van-icon name="gold-coin-o" class="gold-color iconType" />
            </div>
          </div>
          <div class="task-r">
            <van-button class="task-btn btn-get" type="warning" size="small" round v-if="item.taskStatus === 1" @click="getReward(item, index)">领奖励</van-button>
            <van-button class="task-btn" type="warning" size="small" round v-if="item.taskStatus === 2" @click="taskLink(item)">去完成</van-button>
            <!-- 完成进度 -->
            <div class="progress" v-if="item.taskStatus === 2 && item.totalNumber > 1">
              <span>去完成</span>
              <span class="gold-color">{{item.completeNumber}}</span>
              <span>/</span>
              <span>{{item.totalNumber}}</span>
            </div>
            <van-button class="task-btn" type="warning" size="small" round disabled v-if="item.taskStatus === 3">已领取</van-button>
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
            "totalNumber": 3,
            "taskDetailType": 1,
            "taskType": 1,
            "taskLink": "www.baidu.com",
            "taskTitle": "写微博",
            "taskStatus": 2,
            "taskId": 14,
            "taskReward": 2,
            "completeNumber": 1
        },
        {
            "totalNumber": 1,
            "taskDetailType": 1,
            "taskType": 1,
            "taskLink": "www.baidu.com",
            "taskTitle": "评论",
            "taskStatus": 1,
            "taskId": 15,
            "taskReward": 2,
            "completeNumber": 0
        },
        {
            "totalNumber": 1,
            "taskDetailType": 1,
            "taskType": 1,
            "taskLink": "www.baidu.com",
            "taskTitle": "转发微博",
            "taskStatus": 2,
            "taskId": 16,
            "taskReward": 2,
            "completeNumber": 0
        },
        {
            "totalNumber": 1,
            "taskDetailType": 4,
            "taskType": 1,
            "taskLink": "www.baidu.com",
            "taskTitle": "点赞",
            "taskStatus": 2,
            "taskId": 17,
            "taskReward": 100,
            "completeNumber": 0
        },
        {
            "totalNumber": 1,
            "taskDetailType": 5,
            "taskType": 1,
            "taskLink": "www.baidu.com",
            "taskTitle": "关注用户",
            "taskStatus": 3,
            "taskId": 18,
            "taskReward": 300,
            "completeNumber": 0
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
    // 领取奖励
    getReward (item, index) {
      item.taskStatus = 3;
      this.goldCoin += 2;
      this.$toast.success({
        message: '领取成功',
        duration: '1500',
      })
    },
    // 任务列表
    taskLink(taskType) {

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
</style>
