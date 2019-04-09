<template>
  <div>
    <!-- 顶部 -->
    <van-nav-bar
      title="商品分享功能申请"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-panel title="申请条件" desc="完成以下条件即可申请商品分享功能">
      <!-- <div class="flex-wrap"> -->
        <div class="conditionItem flex-center">
          <div>
            <van-icon name="friends-o" />
            <div>粉丝量</div>
            <div>≥0名</div>
            <div>已完成</div>
          </div>
        </div>
        <div class="conditionItem flex-center">
          <div>
            <van-icon name="friends-o" />
            <div>粉丝量</div>
            <div>≥0名</div>
            <div>已完成</div>
          </div>
        </div>
        <div class="conditionItem flex-center">
          <div>
            <van-icon name="friends-o" />
            <div>粉丝量</div>
            <div>≥0名</div>
            <div>已完成</div>
          </div>
        </div>
      <!-- </div> -->
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
    }
}
</script>

<style lang="less" scoped>
  .conditionItem{
    background-color: #ccc;
    width: 33%;
    margin: 0.2rem 0.1rem;
    padding: 0.2rem;
    font-size: 14px;
    text-align: center;
  }
  .getProfit{
    padding: 0 0.5rem 0.5rem 0.5rem;
    font-size: 14px;
  }
</style>
