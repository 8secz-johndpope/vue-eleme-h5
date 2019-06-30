<template>
  <div>
    <van-nav-bar title="答题列表" @click-left="onClickLeft" @click-right="onClickRight" left-arrow fixed>
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
  name: 'questionList',
  data () {
    return {
      tabActive: 0, //高亮的tab
      questionListData: [], // 问题列表
      // tab列表
      tabsList: [
        {
          tabName: '推荐',
          desc: '回答数超过后台系统设置的数值，如10条，以时间先后顺序排序',
        },{
          tabName: '最新',
          desc: '未采纳的问题，以发布时间先后顺序排序',
        },{
          tabName: '赏金最高',
          desc: '未采纳的问题，以赏金最高顺序排序',
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
        message: '悬赏问题，先扣除提问者相应的金币；3天内，若提问者采纳某个回答，则赏金归被采纳者所有，问题状态变成已采纳；如果3天内有回答，但是没有采纳，则由帮顶人数最高者获得（不限自己），状态变成最佳答案；若3天无回答，则问题流拍，赏金退回，状态变成流拍，不再具有赏金性质；提问者不可以采纳自己的回答'
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
