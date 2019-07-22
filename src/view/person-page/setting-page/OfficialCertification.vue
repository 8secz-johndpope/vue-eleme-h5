<template>
  <div class="applyOpenShop">
    <!-- 顶部 -->
    <van-nav-bar
      title="微撩官方认证"
      left-arrow
      @click-left="onClickLeft"
      fixed
    />
    <div class="top-space"></div>
    <van-cell title="个人认证" label="适合公众人物、领域专家和网络名人申请"/>
    <div class="white-bg flex-center">
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
    <div class="flex-center mgb10 mgt10">
      <van-button size="large" round type="danger" class="apply-btn" @click="apply" v-if="applyState === 2">立即申请</van-button>
      <van-button size="large" round type="danger" class="apply-btn" v-else-if="applyState === 1" disabled>认证中</van-button>
      <van-button size="large" round type="danger" class="apply-btn" v-else disabled>已认证</van-button>
    </div>
    <van-cell title="企业、机构认证" label="适合企业、媒体、国家机构和其他知名机构申请"/>
    <van-panel title="认证有什么好处？" class="mgt15" >
      <div class="pdl15 pdr15 pdb10 lh25">
        <p>1、专属微撩认证标识，独特的橙v认证标识以身份认证</p>
        <p>2、辨识力强和搜索优先、排序优先</p>
        <p>3、获得免审资格，微撩抢先发布</p>
        <p>4、拥有更多的个性化设置</p>
      </div>
    </van-panel>
    <van-panel title="认证需要多久？" class="mgt15" >
      <div class="pdl15 pdr15 pdb10 lh25">
        <p>3-5个工作日会以系统消息通知，请注意查收</p>
      </div>
    </van-panel>
  </div>
</template>
<script>
  export default {
    components:{
    },
    name: 'officialCertification',
    data () {
      return {
        applyState: 2,  // 0-已认证  1-认证中  2-申请认证
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
          message: '满足上述三个条件后，我们会在3个工昨日内回复您，请留意'
        }).then(() => {
          that.applyState = 1;
        });
      }
    }
}
</script>

<style lang="less" scoped>
  .conditionItem{
    background-color: #0E0040;
    width: 26%;
    margin: 0.3rem 0.1rem;
    padding: 0.6rem 0.2rem;
    font-size: 14px;
    text-align: center;
    color: #969799;
  }
  .apply-btn{
    width: 90%;
  }
  .icon{
    font-size: 20px;
  }
</style>
