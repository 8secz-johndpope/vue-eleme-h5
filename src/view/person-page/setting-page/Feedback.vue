<template>
  <div>
    <!-- 顶部 -->
    <van-nav-bar
      title="意见和反馈"
      right-text="提交"
      left-arrow
      @click-left="onClickLeft"
      @click-right="commitAdvice"
    />
    <!-- 文本框 -->
    <van-cell-group class="van-cell-group">
      <van-field
        v-model="message"
        type="textarea"
        placeholder="请输入您的宝贵意见或建议"
        rows="3"
        autosize
        class="cellDiv"
      />
      <span class="dec">{{message.length}}/200</span>
    </van-cell-group>
    <!-- 图片上传 -->
    <van-cell size="large" class="cellDiv">
      <van-uploader :after-read="onRead" accept="image/gif, image/jpeg" multiple>
        <van-icon name="photograph" />
      </van-uploader>
    </van-cell>
    <van-cell-group class="cellDiv">
      <van-field v-model="tel" placeholder="请输入您的联系方式" />
    </van-cell-group>
  </div>
</template>
<script>
  export default {
    components:{
    },
    name: 'feedback',
    data () {
      return {
        message: '',
        tel: '',
      };
    },
    mounted () {

    },
    computed: {

    },
    methods: {
      onClickLeft(){
        this.COMMONFUNC.goBack();
      },
      onRead(file) {
        console.log(file);
        this.$toast('上传成功')
      },
      commitAdvice () {
        this.$toast('感谢您的宝贵建议')
      }
    },
    watch: {
      message: function (curVal, oldVal) {
        if (curVal.length > 200) {
          this.message = this.message.slice(0, 200);
        }
      }
    }
}
</script>

<style lang="less" scoped>
  .cellDiv{
    margin-top: 5px;
  }
  .van-cell-group{
    position: relative;
  }
  .dec{
    position: absolute;
    bottom: 0.1rem;
    right: 0.3rem;
    color: #969799;
  }
</style>
