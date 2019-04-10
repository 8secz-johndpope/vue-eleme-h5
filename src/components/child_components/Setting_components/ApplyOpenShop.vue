<template>
  <div class="applyOpenShop">
    <!-- 顶部 -->
    <van-nav-bar
      title="商品分享功能申请"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-panel title="申请条件" desc="完成以下条件即可申请商品分享功能">
      <div class="flex-center">
        <div class="conditionItem flex-center">
          <div>
            <van-icon name="friends-o" class="icon pink-color" />
            <div>粉丝量</div>
            <div>≥10名</div>
            <div>已完成</div>
          </div>
        </div>
        <div class="conditionItem flex-center">
          <div>
            <van-icon name="medel-o " class="icon pink-color" />
            <div>发布作品</div>
            <div>≥10个</div>
            <div class="white-color">未完成</div>
          </div>
        </div>
        <div class="conditionItem flex-center">
          <div>
            <van-icon name="user-o" class="icon pink-color" />
            <div>实名认证</div>
            <div>通过认证</div>
            <div class="white-color">未完成</div>
          </div>
        </div>
      </div>
    </van-panel>
    <van-panel title="获得权益" desc="商品分享功能将为您带来以下收益">
      <div class="getProfit">
        <p>
          1.拥有个人主页电商橱窗。
        </p>
        <p>
          2.可以为您发布的作品添加商品并售卖。
        </p>
        <p>
          3.拥有liao+(流量推广)功能，可以将您发布的作品推广给更多的人。
        </p>
      </div>
    </van-panel>
    <div class="fixed-footer-btn-zone">
      <van-button size="large" round type="danger" class="apply-btn" @click="apply">立即申请</van-button>
    </div>
  </div>
</template>
<script>
  export default {
    components:{
    },
    name: 'applyOpenShop',
    data () {
      return {
        msg: '1',
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
      // 申请开店
      apply () {
        let that = this;
        this.$dialog.alert({
          title: '提交成功',
          message: '我们会在3个工昨日内回复您，请留意'
        }).then(() => {
          that.onClickLeft()
        });
      }
    }
}
</script>

<style lang="less" scoped>
  .conditionItem{
    background-color: #0E0040;
    width: 26%;
    margin: 0.2rem 0.1rem;
    padding: 0.2rem;
    font-size: 14px;
    text-align: center;
    color: #969799;
  }
  .getProfit{
    padding: 0 0.5rem 0.5rem 0.5rem;
    font-size: 14px;
  }
  .apply-btn{
    width: 90%;
  }
  .icon{
    font-size: 20px;
  }
</style>
