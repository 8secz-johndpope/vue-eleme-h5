<template>
  <!-- 转发帖子 -->
  <div class="retransmission flex wx-bg pd10">
    <div class="retransmission-user-img">
      <img src="https://avatars1.githubusercontent.com/u/34303195?s=460&v=4" class="photo" />
    </div>
    <div class="retransmission-content pd10">
      <div class="retransmission-user-name pdb5">
        @我是被转发的人的昵称
      </div>
      <div class="retransmission-text" v-html="retransmissionText">
        {{retransmissionText}}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'retransmissionCard',
  data () {
    return {
      retransmissionText: '令人细思极恐、瑟瑟发抖的突发！<br />建议学校在操场立碑，永远感念这位为保证下一代的健康而身心俱毁的教师！ <a data-url="http://t.cn/AiNk7QxR" href="http://miaopai.com/show/OZOZyXLT0MbmrrFQm~yFsnUt9faw7tSZMSLwgQ__.htm" data-hide=""><span class="surl-text">新京报我们视频的秒拍视频</span></a>',
    };
  },
  components: {
  },
  mounted () {
    if (this.retransmissionText.length > 40) {
         this.retransmissionText = this.retransmissionText.substring(0, 40) + '...'
    }
  },
  computed: {
  },
  watch: {

  },
  methods: {

  }
};
</script>

<style lang="less" scoped>
  .photo{
    width: 2rem;
    height: 2rem;
    border-radius: 5px;
  }
  .retransmission-user-name{
    font-size: 16px;
  }
  .retransmission-text{
    color: #939393;
  }
</style>
