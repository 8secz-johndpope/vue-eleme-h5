<template>
  <div>
    <!-- 顶部 -->
    <van-nav-bar
      title="邀请好友"
      left-text="返回"
      right-text="活动规则"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="main-content">
      <div class="img-zone">
        <img src="http://img.zcool.cn/community/031aa6a567797a900000138c4216392.jpg" class="img" />
      </div>
      <div class="txt-zone">
        <p class="flex-center giveIntegral">
          赠送30积分
        </p>
        <p class="flex-center allHas">
          邀请好友 你我都有
        </p>
      </div>
      <div class="btn-zone" @click="sharePopShow = true">
        <van-button size="large" type="danger" round >立即邀请</van-button>
      </div>
      <!-- 我的邀请记录 -->
      <div class="flex-center record">
        <div>
          <p class="title">
            <span class="gray-color">——</span> 我的邀请记录 <span class="gray-color">——</span>
          </p>
          <p class="detail">
            累计邀请<span class="red-color prominent">10</span>人，
            共获得<span class="red-color prominent">300</span>积分
          </p>
        </div>
      </div>
    </div>
    <!-- 分享选项 -->
    <van-actionsheet v-model="sharePopShow" title="分享到">
      <ShareBox></ShareBox>
    </van-actionsheet>
    <van-popup v-model="questionPopShow" position="bottom" :overlay="true">
      <van-nav-bar
        title="活动规则"
        @click-left="questionPopShow=false"
        left-arrow
      />
      <!-- 疑难解惑  -->
      <van-collapse v-model="activeNames">
        <van-collapse-item title="1、活动内容" name="1">
          1.1 邀请好友注册，好友即可得30积分，当好友完成首次登录邀请者得30积分，邀请者奖励无上限。</br>
        </van-collapse-item>
        <van-collapse-item title="2、参与方式" name="2">
          3.1 用户通过本平台提供的分享路径邀请好友注册，受邀者在邀请链接中输入注册手机号并提交，即成功完成一次邀请。</br>
        </van-collapse-item>
        <van-collapse-item title="3、注意事项" name="3">
          3.1 每位用户的邀请次数无上限；</br>
          3.2 拥有相同账户、手机号及设备的用户视为同一用户，该规则适用于邀请者与被邀请者；</br>
          3.3 每个订单只能获得30积分。积分不兑换现金，不可赠送他人</br>
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
</template>
<script>
  import ShareBox from '../../common_components/ShareBox';
  export default {
    components:{
      ShareBox,
    },
    name: 'invitation',
    data () {
      return {
        sharePopShow: false,  // 分享弹框
        questionPopShow: false, // 问题帮助
        activeNames: ['1','2','3','4'], // 常见问题折叠筐
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
        this.questionPopShow = true;
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
  .main-content{
    background-color: #fff;
  }
  .txt-zone{
    height: 2rem;
    text-align: center;
  }
  .giveIntegral{
    font-size: 0.586667rem;
    color: #333;
    height: 1.2rem;
  }
  .allHas{
    font-size: 0.373333rem;
    height: 0.6rem;
  }
  .btn-zone{
    width: 80%;
    margin: 0 auto;
  }
  .record{
    background-image: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553666997575&di=236bc6df0208ee0d18294fe85c7b5ad1&imgtype=0&src=http%3A%2F%2Fpic.nipic.com%2F2008-02-29%2F200822910582141_2.jpg');
    background-size: 100% 100%;
    height: 3rem;
    width: 80%;
    margin: 0.4rem auto;
    text-align: center;
  }
  .title{
    font-size: 0.373333rem;
    padding: 0 0 0.2rem 0;
  }
  .detail{
    font-size: 0.373333rem;
  }
  .prominent{
    font-size: 0.48rem;
  }
</style>
