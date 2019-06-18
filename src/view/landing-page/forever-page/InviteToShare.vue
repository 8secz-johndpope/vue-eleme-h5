<template>
  <div>
    <div class="main-box">
      <div class="img-zone">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553677765287&di=6ef7a2e2a5f627af18e46214c13909ba&imgtype=0&src=http%3A%2F%2Fcdn.xiangyouhui.cn%2Fuploads%2F201504%2Fjiuxian2015401cui1.jpg1b8df3f4-1342-7fd9-a6e4-0bfd1bf3bc37.jpg" class="img" />
      </div>
      <div class="content">
        <div class="txt-zone">
          <p class="flex-center giveGoldCoin">
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
        <div class="rules blue-color" @click="rulesPopShow = true">
          规则说明
        </div>
      </div>
      <!-- 规则说明弹框 -->
      <van-popup v-model="rulesPopShow" position="bottom" :overlay="true">
        <van-nav-bar
          title="活动规则"
          @click-left="rulesPopShow=false"
          left-arrow
        />
        <!-- 疑难解惑  -->
        <van-collapse v-model="activeNames">
          <van-collapse-item title="1、活动内容" name="1">
            1.1 邀请好友注册，好友即可得30金币，当好友完成首次登录邀请者得30金币，邀请者奖励无上限。</br>
          </van-collapse-item>
          <van-collapse-item title="2、参与方式" name="2">
            3.1 用户通过本平台提供的分享路径邀请好友注册，受邀者在邀请链接中输入注册手机号并提交，即成功完成一次邀请。</br>
          </van-collapse-item>
          <van-collapse-item title="3、注意事项" name="3">
            3.1 每位用户的邀请次数无上限；</br>
            3.2 拥有相同账户、手机号及设备的用户视为同一用户，该规则适用于邀请者与被邀请者；</br>
            3.3 每个订单只能获得30金币。金币不兑换现金，不可赠送他人</br>
          </van-collapse-item>
          <van-collapse-item title="4、特别声明" name="4">
            4.1 我们包含邀请注册在内的所有优惠推广活动仅向正当、合法使用我们服务的用户，
                一旦发现您存在利用我们的规则漏洞进行任何形式的作弊行为（包括但不限于通过我们的活动获得不正当的经济利益），
                我们有权取消与作弊行为相关账户的奖励、追回您作弊所得的不正当经济利益、
                关闭作弊账户或与您相关的所有账户，并保留取消您后续使用我们服务的权利，必要时会依据严重程度追究您的法律责任</br>
          </van-collapse-item>
        </van-collapse>
      </van-popup>
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
        rulesPopShow: false,
        activeNames: ['1','2','3','4'], // 常见问题折叠筐
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
  .giveGoldCoin{
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
