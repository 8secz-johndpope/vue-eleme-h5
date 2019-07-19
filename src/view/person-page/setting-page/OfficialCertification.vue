<template>
  <div class="applyOpenShop">
    <div class="fixed-top">
      <!-- 顶部 -->
      <van-nav-bar
        title="微撩官方认证"
        left-arrow
        right-text="问题与帮助"
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </div>
    <div class="fixed-content-box">
      <van-panel title="个人认证" desc="适合公众人物、领域专家和网络名人申请">
        <div class="flex-center">
          <div class="conditionItem flex-center">
            <router-link :to="{ name: 'publishPost', params: {} }">
              <div>
                <van-icon name="medel-o " class="icon pink-color" />
                <div class="gray-color">发布作品</div>
                <div class="gray-color">≥10个</div>
                <div class="white-color">未完成</div>
              </div>
            </router-link>
          </div>
          <div class="conditionItem flex-center">
            <div>
              <van-icon name="friends-o" class="icon pink-color" />
              <div>粉丝量</div>
              <div>≥1000名</div>
              <div>已完成</div>
            </div>
          </div>
          <div class="conditionItem flex-center">
            <router-link :to="{ name: 'certification', params: {} }">
              <div>
                <van-icon name="user-o" class="icon pink-color" />
                <div class="gray-color">实名认证</div>
                <div class="gray-color">通过认证</div>
                <div class="white-color">未完成</div>
              </div>
            </router-link>
          </div>
        </div>
      </van-panel>
      <van-cell title="企业、机构认证" value="适合企业、媒体、国家机构和其他知名机构申请" size="large" label="申请方式：请" />
      <van-panel title="获得权益" desc="官方认证功能将为您带来以下收益">
        <div class="getProfit">
          <p>
            1.专属微撩认证标识，昵称旁独特的橙v认证标识以身份认证
            2.辨识力强和搜索优先
            3.获得免审资格，微撩抢先发布
          </p>
          <p>
            2.可以为您发布的作品添加商品并售卖。
          </p>
          <p>
            3.拥有liao+(流量推广)功能，可以将您发布的作品推广给更多的人。
          </p>
        </div>
      </van-panel>
    </div>
    <div class="flex-center fixed-footer-btn-zone">
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
      // 前往卖家问题，争议处理
      onClickRight(){
        this.$router.push({ name: 'transactionDisputes' })
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
