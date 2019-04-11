<template>
  <div>
    <van-nav-bar
      title="对话帮助"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      :fixed="true"
    />
    <div class="question-zone">
      <p class="question-tips font-orange">注意：请确保您的内容符合规范，否则将不能通过审核</span></p>
      <p class="question-tips">一键对话实例</p>
      <img src="../../../images/dialogCase/01.png" class="caseImg" />
      <p class="question-tips">分段对话实例</p>
      <img src="../../../images/dialogCase/02.png" class="caseImg" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'add_conversation_question',
  data () {
    return {
    };
  },
  mounted () {
  },
  computed: {
  },
  watch: {
  },
  methods: {
    onClickLeft () {
      this.COMMONFUNC.goBack();
    },
  }
};
</script>

<style lang="less" scoped>
  .question-zone{
    width: 90%;
    margin: 1.226667rem auto;
    text-align: center;
  }
  .questionPopTitle{
    display: flex;
    width: 100%;
  }
  .caseImg{
    width: 80%;
    height: 80%;
    background-repeat: no-repeat;
    background-size: 80% 80%;
  }
  .question-tips{
    width: 80%;
    margin: 0 auto;
    color: #333;
    font-size: 0.373333rem;
    text-align: left;
    padding: 0.2rem 0;
  }
  .font-orange{
    color: #ed6a0c;
  }
</style>
