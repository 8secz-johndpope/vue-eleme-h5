<template>
  <div class="fixedBottom">
    <van-cell-group class="input-zone">
      <form action="javascript:void(0)">
        <van-field
          v-model="value"
          clearable
          @keyup.enter="send"
          placeholder="写评论，优质评论会优先展示哦"
        >
        <div slot="label" v-if="replyWho !== '' ">{{replyWho}}</div>
        </van-field>
      </form>
    </van-cell-group>
    <!-- <form action="/">
      <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      show-action
      @search="onSearch"
      @cancel="onCancel"
      />
    </form> -->
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
    send: function () {
      this.$toast("ok")
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
