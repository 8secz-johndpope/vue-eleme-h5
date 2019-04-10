<template>
  <div>
    <!-- 顶部 -->
    <van-nav-bar
      title="实名认证"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-cell-group>
      <van-field
      v-model="userName"
      clearable
      label="真实姓名"
      placeholder="请输入姓名"
      />
      <van-field
      v-model="IDCard"
      clearable
      label="身份证号"
      placeholder="请输入身份证号码"
      />
      <van-field
      v-model="tel"
      clearable
      label="手机号码"
      placeholder="请输入手机号码"
      />
    </van-cell-group>
    <!-- 图片上传 -->
    <van-panel title="" desc="身份证照片"  class="cellDiv">
      <div class="flex-space-between photo-zone">
        <div class="flex-center photo-zone-left">
          <img src="https://avatars1.githubusercontent.com/u/34303195?s=460&v=4" class="photo" />
          <span>必须本人手持身份证，保证身份证上信息清晰可见（样例详见左图）</span>
        </div>
        <div class="flex-center photo-zone-right">
          <van-uploader :after-read="onRead" accept="image/gif, image/jpeg" multiple>
            <van-icon name="photograph" class="photograph-icon" />
          </van-uploader>
        </div>
      </div>
      <div slot="footer">
        <span>继续表示同意</span>
        <span class="gold-color" @click="showUserAgreementPop = true">用户协议及隐私条款</span>
      </div>
    </van-panel>
    <div class="fixed-footer-btn-zone">
      <van-button size="large" round type="danger" class="submit-btn" @click="submit">提交审核</van-button>
    </div>
    <van-popup v-model="showUserAgreementPop" position="bottom" :overlay="true">
      <div class="fixed-top">
        <van-nav-bar
          title="用户协议及隐私条款"
          @click-left="showUserAgreementPop = false"
          left-arrow
        />
      </div>
      <div class="fixed-content-box">
        <UserAgreement></UserAgreement>
      </div>
    </van-popup>
  </div>
</template>
<script>
  import UserAgreement from '../../word_components/UserAgreement';
  export default {
    components:{
      UserAgreement,
    },
    name: 'report',
    data () {
      return {
        userName: '',  // 真实姓名
        IDCard: '', // 身份证号码
        tel: '',  // 手机号
        showUserAgreementPop: false,  // 隐私协议条款
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
      // 提交审核
      submit () {
        let that = this;
        this.$dialog.confirm({
          title: '提示',
          message: '该身份信息将用于您的身份认证，确认后无法更改，请谨慎填写，现是否填写准确无误'
        }).then(() => {
          that.$toast.loading({
            mask: true,
            message: '提交中...'
          });
          setTimeout( () => {
            that.$dialog.alert({
              title: '提交成功',
              message: '提交成功,我们会在3个工昨日内回复您，请留意'
            }).then(() => {
              // on close
            });
          },3000)
        }).catch(() => {
          // on cancel
        });
      }
    },
    watch: {
    }
}
</script>

<style lang="less" scoped>
  .cellDiv{
    margin-top: 0.133333rem;
    color: #808080;
  }
  .photo-zone{
    padding: 0.266667rem 0.4rem;
  }
  .photo-zone-left{
    width: 70%;
    display: flex;
    font-size: 0.373333rem;
  }
  .photo-zone-right{
    width: 30%;
  }
  .photo{
    width: 1.6rem;
    height: 1.6rem;
    padding: 0 0.2rem 0 0;
  }
  .photograph-icon{
    font-size: 1.6rem;
  }
  .submit-btn{
    width: 90%;
  }
</style>
