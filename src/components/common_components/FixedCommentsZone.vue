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
    <div class="comments" :class="showCommentsNum ? 'commentsHasNum' : '' ">
      <van-icon name="comment-o" class="blue-color commentsNum-zone" @click="openCommentsPop" v-if="showCommentsNum"><span class="black-color commentsNum">9999</span></van-icon>
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
    },
    // 是否有评论数
    showCommentsNum: {
      type: Boolean,
      default: false,
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
    },
    // 打开评论弹框
    openCommentsPop () {
      this.$emit('showCommentsPopP', true)
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
  .commentsHasNum{
    width: 35%;
  }
  .commentsNum-zone{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .commentsNum{
    font-size: 0.438rem;
    padding: 0 0 0.1rem 0.1rem;
  }
</style>
