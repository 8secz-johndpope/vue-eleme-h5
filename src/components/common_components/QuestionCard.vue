<template>
  <!-- 问题卡片 -->
  <div>
    <div class="white-bg mgt5 pd10 position-r" v-for="(item,index) in questionList" :key="index">
      <div class="flex-space-between">
        <div class="flex-center">
          <img :src="item.coverImg" class="van-avatar-small" />
          <span>{{item.userName}}</span>
          <span class="gray-color mgl5">提出问题</span>
        </div>
        <div class="gray-color">
          {{item.questionTime}}
        </div>
      </div>
      <div class="flex mgt5">
        <div>
          <img :src="item.coverImg" class="photo" />
        </div>
        <div class="question-r flex-space-between pdl10">
          <div class="question-content">
            <div class="question-title pdb5" v-html="getMaxTitle(item.questionTitle)">
              {{getMaxTitle(item.questionTitle)}}
            </div>
            <div class="van-ellipsis mgt5" v-html="item.questionDesc">
              {{item.questionDesc}}
            </div>
          </div>
          <div>
            <van-button type="warning" size="small">回答</van-button>
          </div>
        </div>
      </div>
      <div class="flex-space-between gray-color mgt5">
        <div>{{item.answerNum}}个回答</div>
        <div>悬赏<span class="gold-color">{{item.awardGold}}</span>金币</div>
      </div>
      <!-- 问题状态 -->
      <div class="state-zone">
        <img :src="yijiejue_img" class="state-img">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'questionCard',
  props: {
    questionList: {
      type: Array,
      default: ()=> []
    }
  },
  data () {
    return {
      yijiejue_img: require('images/icon/yijiejue.png')
    };
  },
  components: {
  },
  mounted () {
  },
  computed: {
  },
  watch: {

  },
  methods: {
    getMaxTitle(text) {
      if (text.length > 25) {
        text = text.substring(0, 25) + '...'
      }
      return text
    }
  }
};
</script>

<style lang="less" scoped>
  .photo{
    width: 2rem;
    height: 2rem;
    border-radius: 5px;
  }
  .question-r{
    width: 100%;
  }
  .question-content{
    width: 70%;
  }
  .question-title{
    font-size: 14px;
  }
  .van-ellipsis{
    color: #939393;
    max-width: 5rem;
  }
  .state-zone{
    position: absolute;
    right: 0;
    top: 0;
  }
  .state-img{
    width: 0.8rem;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
</style>
