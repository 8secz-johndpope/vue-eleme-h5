<template>
  <div>
    <van-nav-bar title="榜单" @click-left="onClickLeft" @click-right="onClickRight" left-arrow fixed>
      <van-icon name="question-o" slot="right" />
    </van-nav-bar>
    <!-- 空格 -->
    <div class="top-space"></div>
    <van-tabs v-model="tabActive" @click="onClickTab" sticky swipeable>
      <van-tab :title="item.tabName" v-for="(item, index) in tabsList" :key="index">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="我也是底线的"
          :lazy-load="true"
          @load="onLoad"
        >
          <QuestionCard :questionList="questionListData"></QuestionCard>
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import QuestionCard from 'components/common_components/QuestionCard';
export default {
  name: 'rankgingList',
  data () {
    return {
      tabActive: 0, //高亮的tab
      questionListData: [], // 问题列表
      // tab列表
      tabsList: [
        {
          tabName: '热度榜',
          desc: '已采纳或已有最佳回答的超过后台系统设置的数值，如10条，以时间先后顺序排序',
        },{
          tabName: '导师榜',
          desc: '按照回答值排行，回答值=采纳数*10+回答数，如用户A有100个回答，其中10个被采纳了，则回答值为100+10*10=200，用户B有50个回答，20个被采纳了，则回答值为50+20*10=250，回答值相同，回答数高在前',
        }
      ],
      loading: false,
      finished: false,
    };
  },
  components: {
    QuestionCard,
  },
  mounted () {
    this.questionListData = this.getImitateQuestionList;
  },
  computed: {
    ...mapGetters([
      'getImitateQuestionList', // 获取模拟帖子列表
    ]),
  },
  watch: {

  },
  methods: {
    onClickLeft(){
      this.COMMONFUNC.goBack();
    },
    onClickRight(){
      this.$dialog.alert({
        title: '悬赏问题规则',
        message: '悬赏问题，先扣除提问者相应的金币；7天内，若提问者采纳某个回答，则赏金归被采纳者所有，问题状态变成已采纳；如果7天内有回答，但是没有采纳，则由回答中的帮顶人数最高者获得（不限自己），状态变成已解决；若7天无回答，则问题流拍，赏金退回，赏金变为0；提问者不可以采纳自己的回答'
      }).then(() => {
        // on close
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
    // 加载更多
    onLoad() {
      let obj = {
        questionId: 'questionId0001', // 问题Id
        questionTitle: '问题标题，如和妹子聊天很久了，但是对方总是忽冷忽热怎么办',  // 问题标题
        questionDesc: '问题描述，如追她有很多天了，一开始挺好的，后面就慢慢变成现在这样了', // 问题描述
        coverImg: 'https://avatars1.githubusercontent.com/u/34303195?s=460&v=4',  // 封面图片
        userName: '提问者名称',  // 提问者名称
        userId: 'userId',  // 提问者Id
        userImg: 'https://avatars1.githubusercontent.com/u/34303195?s=460&v=4',  // 提问者头像
        questionTime: '2019-07-01', // 提问时间
        answerNum: 15,  // 回答人数
        awardGold: 20,  // 问题奖励金币
        state: 2, // 问题状态 0-已采纳，1-已解决 2-未解决
      };
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 5; i++) {
          this.questionListData.push(obj);
        }
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.questionListData.length >= 10) {
          this.finished = true;
        }
      }, 500);
    },
  }
};
</script>

<style lang="less" scoped>
</style>
