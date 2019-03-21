<template>
  <div class="fixedBottom">
    <van-cell-group class="input-zone">
      <van-field
        v-model="value"
        clearable
        placeholder="写评论，优质评论会优先展示哦"
      >
      <div slot="label" v-if="replyWho !== '' ">{{replyWho}}</div>
      </van-field>
    </van-cell-group>
    <div class="comments">
      <van-icon name="smile-o" class="smile-o"></van-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: 'fixedCommentsZone',
  components: {
  },
  props: {
    // 回复的人
    replyWho: {
      type: String,
      default: '',
    }
  },
  data () {
    return {
      value: '',
    };
  },
  mounted () {
  },
  computed: {

  },
  methods: {
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
    width: 90%;
  }
  .comments{
    width: 10%;
    background-color: #fff;
    font-size: 0.6rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
</style>
