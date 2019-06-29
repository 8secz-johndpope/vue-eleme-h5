<template>
  <div>
    <van-nav-bar title="答题列表" @click-left="onClickLeft" left-arrow fixed />
    <!-- 空格 -->
    <div class="top-space"></div>
    <van-tabs v-model="tabActive" sticky swipeable>
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
  name: 'questionList',
  data () {
    return {
      tabActive: 0, //高亮的tab
      questionListData: [], // 问题列表
      // tab列表
      tabsList: [
        {
          tabName: '推荐',
        },{
          tabName: '最新',
        },{
          tabName: '赏金最高',
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
    onLoad() {
      let obj = {
        questionId: 'questionId0001', // 问题Id
        questionTitle: '问题标题，如褚明宇老师在微博问答谈论房地产。大致观点如下：1，北京的租售比太贵',  // 问题标题
        questionDesc: '问题标题，如褚明宇老师在微博问答谈论房地产。大致观点如下：1，北京的租售比太贵', // 问题描述
        coverImg: 'https://avatars1.githubusercontent.com/u/34303195?s=460&v=4',  // 封面图片
        userName: '提问者名称',  // 提问者名称
        userId: 'userId',  // 提问者Id
        userImg: 'https://avatars1.githubusercontent.com/u/34303195?s=460&v=4',  // 提问者头像
        questionTime: '2019-07-01', // 提问时间
        answerNum: 15,  // 回答人数
        awardGold: 20,  // 问题奖励金币
        isAdopted: 1, // 是否已经被采纳 0-是，1-否 需求：问题提出后 3天内，没有人回答，则不扣除用户悬赏金币；用户可以采纳自己的回答
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
