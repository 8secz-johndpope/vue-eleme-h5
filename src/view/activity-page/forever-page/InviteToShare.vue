<template>
  <div>
    <div class="main-box">
      <div class="img-zone">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553677765287&di=6ef7a2e2a5f627af18e46214c13909ba&imgtype=0&src=http%3A%2F%2Fcdn.xiangyouhui.cn%2Fuploads%2F201504%2Fjiuxian2015401cui1.jpg1b8df3f4-1342-7fd9-a6e4-0bfd1bf3bc37.jpg" class="img" />
      </div>
      <div class="content">
        <div class="txt-zone">
          <p class="flex-center giveIntegral">
            恭喜获得<span class="red-color num">5元</span>红包
          </p>
          <p class="flex-center allHas">
            自古深情留不住，从来套路得人心
          </p>
        </div>
        <div class="input_login">
          <van-cell-group>
            <van-field
            v-model="telphone"
            placeholder="请输入中国大陆手机号码"
            label="手机号码"
            center
            clearable
            />
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
    </div>
        <div class="btn-zone" @click="register">
          <van-button size="large" type="danger" round >立即领取</van-button>
        </div>
        <!-- 规则说明 -->
        <router-link :to="{ name: 'invitationRules', params: {} }">
          <div class="rules blue-color">规则说明</div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    components:{

    },
    name: 'inviteToShare',
    data () {
      return {
        telphone: '',
        imgCode: '',
        checkCode: '',
        countTime: '',
        btnShow: true,
      };
    },
    mounted () {

    },
    computed: {

    },
    methods: {
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
        if (that.telphone === '') {
          that.$toast('手机号码不能为空');
          flag = false;
        }else if (!(/^1[34578]\d{9}$/.test(that.telphone))) {
          that.$toast('请输入正确的手机号码');
          flag = false;
        }else if (that.imgCode === '') {
          that.$toast('请输入图片验证码');
          flag = false;
        }
        return flag;
      },
      // 注册
      register () {
        let that = this;
        if (!that.checkInput ()) {
          return
        }
        if (that.checkCode === '') {
          that.$toast('请输入确认验证码');
          return
        }
        that.$toast('领取成功');
      }
    }
}
</script>

<style lang="less" scoped>
  .img-zone{
    width: 100%;
    height: 6.5rem;
  }
  .img{
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .main-box{
    background-color: #fff;
  }
  .content{
    width: 80%;
    margin: 0 auto;
  }
  .txt-zone{
    height: 2rem;
    text-align: center;
  }
  .giveIntegral{
    padding-top: 0.2rem;
    font-size: 0.586667rem;
    color: #333;
    height: 1rem;
  }
  .allHas{
    font-size: 0.373333rem;
    height: 0.6rem;
  }
  .rules{
    text-align: center;
    padding: 0.2rem 0;
    font-size: 0.373333rem;
  }
  .num{
    margin: 0 0.133rem;
  }
</style>
