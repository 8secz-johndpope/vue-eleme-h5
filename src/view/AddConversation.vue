<template>
  <div class="white-bg">
    <van-nav-bar
      title="发微博"
      left-arrow
      @click-left="onClickLeft"
      fixed
    >
      <div slot="right" @click="onClickRight">
        <van-button type="danger" size="small">发表</van-button>
      </div>
    </van-nav-bar>
    <!-- 撑开Fixednav挡住的位置 -->
    <div class="top-space"></div>
    <!-- 内容区域 -->
    <div>
      <van-cell-group>
        <van-field
          v-model="message"
          type="textarea"
          placeholder="分享新鲜事"
          rows="10"
          autosize
        />
      </van-cell-group>
    </div>
    <!-- 底部固定区域 -->
    <footer class="fixed-footer white-bg">
      <div class="flex-space-between pd15">
        <div class="fixed-footer-left">
          <van-uploader :after-read="onRead" accept="image/gif, image/jpeg, image/png" :max-count="9" multiple>
            <van-icon name="photo-o" class="footer-icon" />
          </van-uploader>
          <van-icon name="smile-o" class="footer-icon" @click="showEmoji = !showEmoji"/>
        </div>
        <div>
          <van-tag plain color="#f2826a">公开</van-tag>
        </div>
      </div>
      <!-- emoji表情 -->
      <van-swipe :auto="0" v-if="showEmoji">
       <van-swipe-item v-for="n in Math.ceil(emojiList.length/15)" :key="n" class="footer-van-swipe-item">
        <li v-for="(item, index) in getEmotionData(n,15)" class="xw-faceEmoji"> <img :src="item.file" :data="item.title" v-on:click="message+=item.title" /> </li>
       </van-swipe-item>
      </van-swipe>
    </footer>
  </div>
</template>

<script>
import Vue from "vue";
import { mapGetters } from 'vuex';
export default {
  name: 'add_conversation',
  data () {
    return {
      message: '',  // 微博文本内容
      emojiList: [],  // emoji表情集合
      showEmoji: false, // 是否显示emoji
    };
  },
  mounted () {
    this.emojiList = this.getEXPSList.EXPS.slice(0);
  },
  computed: {
    ...mapGetters([
      'getEXPSList',
    ])
  },
  watch: {

  },
  methods: {
    onClickLeft () {
      this.COMMONFUNC.goBack();
    },
    // 发表微博
    onClickRight () {
      this.$toast('发表成功，已转至后台审核')
    },
    // 草稿箱
    draft () {
      this.$toast('成功保存至草稿')
    },
    // 读取文件
    onRead(file) {
      let that = this;
      console.log(file);
      this.$toast('上传图片至服务器，服务器返回图片地址')
    },
    // 获取emoji表情
    getEmotionData(pageNow, pageSize) {
      return this.emojiList.slice((pageNow - 1) * pageSize, pageSize * pageNow)
    },
  }
};
</script>

<style lang="less" scoped>
  .fixed-footer{
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  .fixed-footer-left{
    font-size: 0.586667rem;
  }
  .footer-icon{
    width: 1.066667rem;
  }
  .xw-faceEmoji{
    margin-bottom: 7px;
    width: 20%;
    float: left;
    text-align: center;
  }
  .xw-faceEmoji img{
    width: 0.533rem;
  }
  .footer-van-swipe-item{
    margin: 0 0 0.4rem 0;
  }
</style>
