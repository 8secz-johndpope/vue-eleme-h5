<template>
  <div>
    <van-cell-group class="mg15">
      <form action="javascript:void(0)">
        <van-field
          v-model="message"
          type="textarea"
          rows="1"
          :placeholder=" replyWho !== '' ? '回复' + replyWho + '：' :'写评论，优质评论会优先展示哦' "
          @focus="inputFieldFocus"
          :autosize = '{ maxHeight: 120, minHeight: 60 }'
          >
        </van-field>
      </form>
    </van-cell-group>
    <div class="flex-space-between pdr15 pdl15 pdb10">
      <van-button type="danger" size="mini" @click="send" :disabled="message.length === 0">发表</van-button>
      <van-icon name="smile-o" class="smile-o" @click="showEmoji = !showEmoji"></van-icon>
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
    // 是否有评论数
    showCommentsNum: {
      type: Boolean,
      default: false,
    },
    // 是否显示正文
    showMainText: {
      type: Boolean,
      default: false,
    }
  },
  data () {
    return {
      message: '',  // 评论信息
      emojiList: [],  // emoji表情集合
      showEmoji: false, // 是否显示emoji
    };
  },
  mounted () {
    this.emojiList = this.getEXPSList.EXPS.slice(0);
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
      this.$emit('on-send-comments', '');
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
    replyWho (newVal, oldVal) {
      if (newVal !== '') {
        console.log('l')
      }
    }
  }
};
</script>

<style lang="less" scoped>
  .input-zone{
    width: 90%;
    display: flex;
    box-sizing: border-box;
    color: #323233;
    font-size: 14px;
    line-height: 24px;
    background-color: #fff;
    padding: 10px 15px;
    align-items: center;
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
  .fixed-footer{
    position: fixed;
    bottom: 0;
    width: 100%;
    border-top: 1px solid #ECECEC;
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
