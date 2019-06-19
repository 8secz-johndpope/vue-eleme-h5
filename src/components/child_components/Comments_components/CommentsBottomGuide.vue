<template>
  <div class="fixed-footer white-bg">
    <div class="flex-space-between">
      <div class="input-zone" @click="openCommentsInputPopup"><van-icon name="edit" />写评论，优质评论会优先展示哦</div>
      <div class="comments" :class="showCommentsNum ? 'commentsHasNum' : '' " v-if="showCommentsNum">
        <router-link :to="'/articleComments/articleId' " >
          <van-icon name="comment-o" class="blue-color commentsNum-zone" >
            <span class="black-color commentsNum">9999</span>
          </van-icon>
        </router-link>
      </div>
      <div class="comments" :class="showMainText ? 'commentsHasNum' : '' " v-if="showMainText">
        <router-link :to="'/articleDetail/zs20190214' " >
          <van-icon name="comment-o" class="blue-color commentsNum-zone">
            <span class="black-color commentsNum">正文</span>
          </van-icon>
        </router-link>
      </div>
      <div class="flex-start smile-o mgr10">
        <van-icon name="smile-o" @click="openCommentsInputPopup"></van-icon>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    name: 'commentsBottomGuide',
    props: {
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
      };
    },
    components: {
    },
    mounted () {
    },
    computed: {
    },
    methods: {
      // 打开评论输入框
      openCommentsInputPopup () {
        this.$emit('on-open-comments-input-popup', true)
      }
    }
  }
</script>
<style lang="css" scoped>
  .fixed-footer{
    position: fixed;
    bottom: 0;
    width: 100%;
    border-top: 1px solid #ECECEC;
  }
  .input-zone{
    width: 65%;
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
    width: 80px;
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
  .smile-o{
    font-size: 0.6rem;
    /* width: 50px; */
  }
</style>
