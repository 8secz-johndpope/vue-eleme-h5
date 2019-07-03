<template>
  <div>
    <van-nav-bar
      title="活动规则"
      @click-left="onClickLeft"
      left-arrow
      fixed
    />
    <!-- 撑开Fixednav挡住的位置 -->
    <div class="top-space"></div>
    <!-- 疑难解惑  -->
    <van-collapse v-model="activeNames">
      <van-collapse-item title="1、活动内容" name="1">
        1.1 邀请好友注册，好友即可得30金币，当好友完成首次登录邀请者得30金币，邀请者奖励无上限。</br>
      </van-collapse-item>
      <van-collapse-item title="2、参与方式" name="2">
        2.1 用户通过本平台提供的分享路径邀请好友注册，受邀者在邀请链接中输入注册手机号并提交，即成功完成一次邀请。</br>
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
  </div>
</template>
<script>
  export default {
    components:{
    },
    name: 'mywallet',
    data () {
      return {
        activeNames: ['1','2','3','4'], // 常见问题折叠筐
      }
    },
    mounted () {

    },
    computed: {

    },
    methods: {
      onClickLeft(){
        this.COMMONFUNC.goBack();
      },
    }
}
</script>

<style lang="less" scoped>
</style>
