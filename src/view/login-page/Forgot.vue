<template>
  <div>
    <Backbar :titleName="'忘记密码'"></Backbar>
    <div class="top-space"></div>
    <div class="login_box">
      <!-- <Backbar title="登录"></Backbar> -->
      <div class="title">
        <img src="http://img.bqatj.com/img/6a51e6cae12c5002.jpg" class="common-img" />
        <h2>产品名称</h2>
      </div>
      <div class="input_login">
        <van-cell-group>
          <van-field
            v-model="uname"
            placeholder="请输入中国大陆手机号码"
            label="手机号码"
            center
            clearable
          />
        </van-cell-group>
        <van-cell-group>
          <van-field
            v-model="pwd"
            type="password"
            placeholder="6-15位英文和数字组合密码"
            label="新密码"
            center
            clearable
          >
          </van-field>
        </van-cell-group>
        <van-cell-group>
          <van-field
            v-model="checkPwd"
            type="password"
            placeholder="6-15位英文和数字组合密码"
            label="确认密码"
            center
            clearable
          >
          </van-field>
        </van-cell-group>
        <van-cell-group>
          <van-field
            v-model="imgCode"
            type="password"
            placeholder="6位字符"
            label="图片验证码"
            center
            clearable
          >
            <van-button slot="button" size="small" type="default" @click="getCheckCode">图片验证码</van-button>
          </van-field>
        </van-cell-group>
        <van-cell-group>
          <van-field
            v-model="checkCode"
            type="password"
            placeholder="6位字符"
            label="短信验证码"
            center
            clearable
          >
            <van-button slot="button" size="small" type="default" v-show="btnShow" @click="getCheckCode">获取验证码</van-button>
            <van-button slot="button" size="small" type="default" v-show="!btnShow" :disabled="!btnShow">{{countTime}}秒</van-button>
          </van-field>
        </van-cell-group>
        <van-button type="primary" size="large" @click="cheack_n_p" class="classify-button">登录</van-button>
        <div class="flex-center noAccount">
          <p><router-link :to="{ name: 'loginByCheckCode', params: {} }" class="noAccount-a">验证码登录</router-link></p>
          <p class="shutiao">|</p>
          <p><router-link :to="{ name: 'register', params: {} }" class="noAccount-a">账号密码</router-link></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Backbar from 'components/common_components/Back_bar';
export default {
  name: 'forgot',
  components: {
    Backbar,
  },
  data () {
    return {
      uname: '',
      pwd: '',
      checkPwd: '', //确认密码
      imgCode: '',  // 图片验证码
      checkCode: '',  // 校验码
      token: 'isLogin',
      btnShow: true,  // 默认显示获取验证码，不显示倒计时
      countTime: '',  // 默认显示获取倒计时
    };
  },
  mounted () {
    // if (this.getLogin) {
    //   this.$router.push('/myzone');
    // }
  },
  computed: {
    ...mapGetters([
      'getLogin',
      'getuname',
      'getpwd'
    ])
  },
  methods: {
    onClickLeft(){
      this.COMMONFUNC.goBack();
    },
    // 校验用户名密码
    cheack_n_p () {
      let that = this;
      if (!that.checkInput ()) {
        return
      }
      if (that.checkCode === '') {
        that.$toast('请输入确认验证码');
        return
      }
      that.COMMONFUNC.addCookie("token",that.token,"","/");
      that.$store.dispatch('setLogin', true);
      that.COMMONFUNC.goBack();
    },
    // 获取验证码
    getCheckCode () {
      let that = this;
      if (!that.checkInput ()) {
        return
      }
      that.$toast('验证码发送中，请注意查收');
      //定时器
      let curCount = 60;
      that.btnShow = false;
      that.countTime = curCount;
      let InterValObj = window.setInterval(function () {
        if (curCount == 0) {
          that.btnShow = true;
          that.countTime = curCount;
          window.clearInterval(InterValObj);    // 停止计时器
        } else {
          that.countTime = curCount;
          curCount--;
        }
      }, 1000); // 启动计时器，1秒执行一次
    },
    // 校验手机号码
    checkInput () {
      let flag = true;
      let that = this;
      if (that.uname === '') {
        that.$toast('手机号码不能为空');
        flag = false;
      }else if (!(/^1[34578]\d{9}$/.test(that.uname))) {
        that.$toast('请输入正确的手机号码');
        flag = false;
      }else if (that.checkPwd === '') {
        that.$toast('请输入确认密码');
        flag = false;
      }else if (!(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,15}$/.test(that.pwd))) {
        that.$toast('请输入6-15位英文和数字组合密码');
        flag = false;
      }else if (this.pwd !== this.checkPwd) {
        this.$toast('两次密码不一致');
        flag = false;
      }else if (that.imgCode === '') {
        that.$toast('请输入图片验证码');
        flag = false;
      }
      return flag;
    },
  },
};
</script>

<style lang="less" scoped>
  .title{
    display: flex;
    align-items: center;
    margin-left: 0.2rem;
    height: 1.5rem;
  }
  .common-img{
    width:1rem;
    height:1rem;
    border-radius:50%;
    float: left;
    margin-right: 0.2rem;
  }
  .noAccount{
    font-size: 0.373333rem;
    padding: 0.2rem;
    .noAccount-a{
      text-align: right;
      color: #409EFF;
    }
    .noAccount-a:hover{
      cursor: pointer;
    }
    .shutiao{
      padding: 0 0.1rem;
      margin-bottom: 0.08rem;
      color: #409EFF;
    }
  }
</style>
