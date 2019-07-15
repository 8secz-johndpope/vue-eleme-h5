<template>
  <div>
    <van-nav-bar
      left-arrow
      title="福利社"
      right-text="福利社说明"
      @click-left="onClickLeft"
      @click-right="onClickRight"
      fiexed
      >
    </van-nav-bar>
    <van-notice-bar mode="closeable">
      注意：带*为必填内容
    </van-notice-bar>
    <van-cell-group>
      <van-field label="姓名" placeholder="请输入您的姓名" required />
      <van-field label="电话号码" placeholder="请输入电话号码" required type="tel" />
      <van-field label="店名" placeholder="XXX的店" required />
      <van-field label="邮箱" placeholder="请输入邮箱" />
    </van-cell-group>
    <div class="fixed-footer-btn-zone">
      <van-button round type="danger" size="large" @click="submit" :disabled=" isSubmit ">提交申请</van-button>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    components:{
    },
    name: 'welfareSociety',
    data () {
      return {
        isSubmit: false,  // 是否提交
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
      onClickRight(){
        this.$dialog.alert({
          title: '福利社说明',
          message: '福利社是为商家提供多样化营销开通的一款工具，商家提交申请，通过微撩系统审核之后，将可以一个月免费在兑换商城展示，并参与用户兑换'
        }).then(() => {
        });
      },
      submit () {
        let that = this;
        this.$dialog.alert({
          title: '提交成功',
          message: '工作人员将在3个工作日内与您电话，或者短信与您联系，请注意查收'
        }).then(() => {
          that.isSubmit = true;
        });
      }
    }
  }
</script>
<style lang="css" scoped>
</style>
