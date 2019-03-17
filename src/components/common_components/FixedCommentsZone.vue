<template>
  <div class="fixedBottom">
    <van-cell-group class="input-zone">
      <van-field
        v-model="value"
        placeholder="写评论，优质评论会优先展示哦"
      >
      </van-field>
    </van-cell-group>
    <div class="comments">
      <div class="flex-center commentsNum-zone">
        <van-icon name="chat" class="icon-zone"></van-icon>
        <span class="commentsNum">{{COMMONFUNC.formatterW(commentsNum)}}</span>
      </div>
      <div class="flex-center share-zone" @click="childOpenSharePop">
        <van-icon name="share" class="icon-share"></van-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'fixedCommentsZone',
  components: {
  },
  data () {
    return {
      value: '',
      commentsNum: 99999, //评论数
    };
  },
  mounted () {
  },
  computed: {
    
  },
  methods: {
    publish () {
      this.popupShow = true;
    },
    childOpenSharePop () {
      this.$emit("openSharePop", true)
    }
  }
};
</script>

<style lang="less" scoped>
  .fixedBottom{
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
  }
  .input-zone{
    width: 75%;
  }
  .comments{
    width: 25%;
    background-color: #fff;
    font-size: 0.373333rem;
    display: flex;
    justify-content: space-around;
  }
  .commentsNum-zone{
    width: 70%;
  }
  .share-zone{
    width: 40%;
  }
  .icon-zone{
    color: #377DF8;
  }
  .icon-share{
    margin: 2px 0 0 0;
  }
  .commentsNum{
    margin: 0 0 0 3px;
  }
</style>
