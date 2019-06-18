<template>
  <div class="footer">
    <div class="flex-space-between">
      <!-- 底部固定区域 弹框 -->
      <van-cell-group class="footer-left">
        <van-field
          v-model="message"
          type="textarea"
          :placeholder=" currentReplyWho !== '' ? '回复' + currentReplyWho + '：' :'写评论，优质评论会优先展示哦' "
          @focus="inputFieldFocus"
          rows="1"
          ref="commentsInput"
          :autosize="{ maxHeight: 120, minHeight: 60 }"
        >
        </van-field>
      </van-cell-group>
      <div class="footer-right">
        <van-button type="danger" size="mini" @click="send" :disabled="message.length === 0" class="mgr5">发表</van-button>
        <van-icon name="smile-o" class="smile-o mgr10" @click="showEmoji = !showEmoji"></van-icon>
      </div>
    </div>
    <!-- emoji表情 -->
    <van-swipe :auto="0" v-if="showEmoji">
      <van-swipe-item v-for="n in Math.ceil(emojiList.length/15)" :key="n" class="mgb15">
        <li v-for="(item, index) in getEmotionData(n,15)" class="xw-faceEmoji"> <img :src="item.file" :data="item.title" v-on:click="message+=item.title" /> </li>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
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
  },
  data () {
    return {
      message: '',  // 评论信息
      emojiList: [],  // emoji表情集合
      showEmoji: false, // 是否显示emoji
      currentReplyWho: '',  // 当前回复人，避免更改父组件的值
    };
  },
  mounted () {
    let that = this;
    this.currentReplyWho = this.replyWho;
    this.emojiList = this.getEXPSList.EXPS.slice(0);
    document.addEventListener('click', (e) => {
      if(!that.$el.contains(e.target)) that.currentReplyWho = '';
    })
  },
  computed: {
    ...mapGetters([
      'getEXPSList',  // emoji表情
    ])
  },
  methods: {
    send: function () {
      this.$toast("发表成功")
      this.message = '';
      this.showEmoji = false;
    },
    // 获取emoji表情
    getEmotionData(pageNow, pageSize) {
      return this.emojiList.slice((pageNow - 1) * pageSize, pageSize * pageNow)
    },
    // 输入框获取焦点
    inputFieldFocus() {
      this.showEmoji = false;
    },
  },
  watch: {
    message: function (curVal, oldVal) {
      if (curVal.length > 120) {
        this.message = this.message.slice(0, 120);
        this.$toast({
          position: 'bottom',
          message: "评论最多120个字符",
          duration: 1500
        })
      }
    },
    replyWho: function (curVal, oldVal) {
      this.currentReplyWho = curVal;
      this.$ref.commentsInput.focus();
    },
  }
};
</script>

<style lang="less" scoped>
  .footer{
    padding: 10px 15px;
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #fff;
  }
  .footer-left{
    width: 75% !important;
  }
  .footer-right{
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .xw-faceEmoji{
    margin-bottom: 0.186667rem;
    width: 20%;
    float: left;
    text-align: center;
  }
  .xw-faceEmoji img {
    width: 0.533rem;
  }
  .smile-o{
    font-size: 18px;
  }
  div.wx-bg{
    background-color: #F6F6F6;
  }
</style>
