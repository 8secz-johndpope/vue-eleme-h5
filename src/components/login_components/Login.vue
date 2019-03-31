<template>
  <div>
    <van-nav-bar
      title="登录"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="login_box">
      <!-- <Backbar title="登录"></Backbar> -->
      <div class="title">
        <img src="http://img.bqatj.com/img/6a51e6cae12c5002.jpg" class="common-img" />
        <h2>产品名称</h2>
      </div>
      <div class="input_login">
        <van-cell-group class="fieldDiv_long">
          <van-field
            v-model="uname"
            placeholder="请输入手机号码"
            label="用户名"
            left-icon="contact"
            center
            clearable
          />
        </van-cell-group>
        <van-cell-group class="fieldDiv_long">
          <van-field
            v-model="pwd"
            type="password"
            left-icon="bag-o"
            placeholder="不少于6位字符"
            label="密码"
            center
            clearable
          >
            <van-button slot="button" size="small" type="default" @click="goForget">忘记密码</van-button>
          </van-field>
        </van-cell-group>
        <van-button type="primary" size="large" @click="cheack_n_p" class="classify-button">登录</van-button>
        <div class="flex-center noAccount">
          <p><router-link :to="{ name: 'LoginByCheckCode', params: {} }" class="noAccount-a">验证码登录</router-link></p>
          <p class="shutiao">|</p>
          <p><router-link :to="{ name: 'Register', params: {} }" class="noAccount-a">新用户注册</router-link></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'login',
  data () {
    return {
      uname: '',
      pwd: '',
      token: 'isLogin',
    };
  },
  mounted () {
    if (this.getLogin) {
      this.$router.replace('/myzone');
    }
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
      if (this.uname === '') {
        this.$toast('用户名不能为空');
        return;
      }
      if (this.pwd === '') {
        this.$toast('密码不能为空');
        return;
      }
      if (this.uname !== this.getuname || this.pwd !== this.getpwd) {
        this.$toast('用户名或密码错误');
      } else {
        this.$toast({message: '登陆成功',duration: 1500});
        this.COMMONFUNC.addCookie("token",this.token,"","/");
        this.$store.dispatch('setLogin', true);
        this.COMMONFUNC.goBack();
      }
    },
    // 跳转忘记密码页面，写在页面不生效
    goForget () {
      this.$router.push('/forgot')
    }
  },
  components: {
    // 'Backbar': Backbar
  }
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
