<template>
  <div>
    <!-- 顶部 -->
    <van-nav-bar
      title="更多"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <van-icon name="share" slot="right" />
    </van-nav-bar>
    <van-cell title="举报" is-link to="/accusation"/>
    <van-cell title="拉黑" is-link @click="pullBlack" />
    <!-- 分享选项 -->
    <van-actionsheet v-model="sharePopShow" title="分享到">
      <ShareBox></ShareBox>
    </van-actionsheet>
  </div>
</template>
<script>
  import ShareBox from './common_components/ShareBox';
  export default {
    components:{
      ShareBox
    },
    name: 'accusation',
    data () {
      return {
        sharePopShow: false,  // 分享
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
      onClickRight () {
        this.sharePopShow = true;
      },
      // 拉黑
      pullBlack () {
        let that = this;
        that.$dialog.confirm({
          message: '拉黑对方后，将不会收到对方的信息，确定拉黑吗？'
        }).then(() => {
          that.$toast('拉黑成功')
        }).catch(() => {
          // on cancel
        });
      }
    }
}
</script>

<style lang="less" scoped>
</style>
