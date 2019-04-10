<template>
  <div>
    <div class="fixed-top">
        <van-nav-bar
        title="速推+上热门"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        >
      </van-nav-bar>
    </div>
    <div class="fixed-content-box">
      <!-- 作品区域 -->
      <van-panel class="work-panel">
        <div class="flex-wrap">
          <div class="flex-center">
            <img src="https://avatars1.githubusercontent.com/u/34303195?s=460&v=4" class="van-avatar" />
          </div>
          <div class="work-panel-right">
            <div>
              <p>男：你今天有点怪</p><p>女：哪里怪了（脸红）</p><p>男：怪可爱的，哈哈哈</p>
            </div>
            <div class="gray-color">XXX的作品</div>
          </div>
        </div>
      </van-panel>
      <div class="flex-space-between">
        <div>
          <span>期望提升</span>
          <van-icon name="question-o" />
          <span>粉丝增长></span>
        </div>
        <span>|</span>
        <div>
          <span>投放时长</span>
          <van-icon name="question-o" @click="showHelpPop = true"/>
          <span>6小时></span>
        </div>
      </div>
    </div>
    <van-submit-bar
      :disabled="isShoping"
      :price="price"
      button-text="提交订单"
      @submit="onSubmit"
    >
    </van-submit-bar>
    <!-- 问题弹框 -->
    <van-popup v-model="showHelpPop" class="helpPop">
      <div class="pop-content">
        <h3>把作品推荐给潜在兴趣用户</h3>
        <span>将作品展现给更多潜在兴趣用户，提升作品的曝光量</span>
      </div>
      <div class="flex-center pop-close-zone">
        <van-icon name="close" @click="showHelpPop=false" class="pop-close-icon"/>
      </div>
    </van-popup>
  </div>
</template>

<script>
  export default {
    components:{
    },
    name: 'extension',
    data () {
      return {
        isShoping: false, // 是否交易中
        price: 1990, // 价格，分为单位
        showHelpPop: false,  // 帮助问题弹框
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
      // 提交商品
      onSubmit () {
        let that = this;
        that.isShoping = true;
        setTimeout(() => {
          that.isShoping = false;
          that.$router.push('/setting/payment')
        }, 1000);
      },
    }
  }
</script>
<style lang="css" scoped>
  .work-panel{
    padding: 0 0.4rem 0.4rem 0.4rem; 
  }
  .work-panel-right{
    padding: 0 0 0 0.4rem;
  }
  .helpPop{
    background-color: transparent;
  }
  .pop-content{
    width: 6rem;
    background-color: #fff;
    text-align: center;
    padding: 0.2rem;
    line-height: 0.666667rem;
  }
  .pop-close-zone{
    margin: 0.8rem 0 0 0;
  }
  .pop-close-icon{
    color: #fff;
    font-size: 0.64rem;
  }
</style>
