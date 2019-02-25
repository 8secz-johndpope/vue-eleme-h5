<template>
  <div>
    <!-- 顶部 -->
    <van-nav-bar
      title="我的钱包"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-panel title="账户余额">
      <div class="flex-space-between balance">
        <div class="">
          <van-icon name="gold-coin-o" />1,000
        </div>
        <van-button size="small" type="danger">充值</van-button>
      </div>
    </van-panel>
    <van-cell title="签名" is-link value="做个俗人，贪财好色" @click="openAutographSettingPopup" />
    <van-cell title="充值记录" is-link />
    <van-cell title="优惠券" is-link />
    <van-cell title="常见问题" is-link />
    <van-cell title="联系客服" is-link />
    <!-- 个人签名设置 -->
    <van-popup v-model="autographSettingShow" position="bottom" :overlay="true" class="grayBg">
      <van-nav-bar
        title="个性签名设置"
        left-text="取消"
        right-text="确认"
        @click-left="cancelUpdateAutograph"
        @click-right="updateAutograph"
        class="grayBarBg"
      />
      <van-cell-group>
        <van-field v-model="autograph" placeholder="请输入个性签名" clearable />
      </van-cell-group>
    </van-popup>
  </div>
</template>
<script>
  export default {
    components:{
    },
    name: 'mywallet',
    data () {
      return {
        msg: '1',
        autographSettingShow: false,  // 个性签名设置弹框
        autograph: '做个俗人，贪财好色', // 个性签名
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
      // 打开修改个性签名弹框
      openAutographSettingPopup () {
        this.autographSettingShow = true;
      },
      // 取消修改个性签名
      cancelUpdateAutograph () {
        this.autographSettingShow = false;
      },
      // 修改个性签名
      updateAutograph () {
        this.$toast('修改个性签名成功')
        this.autographSettingShow = false;
      }
    }
}
</script>

<style lang="less" scoped>
  .balance{
    width: 80%;
    margin: 0 auto;
  }
</style>
