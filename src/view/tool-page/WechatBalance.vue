<template>
  <div class="wx">
    <van-nav-bar class="wx-top">
      <div slot="left">
        <van-icon name="arrow-left" class="wx-top-icon" @click="onClickLeft" />
      </div>
      <div slot="title" class="wx-color wx-title">支付</div>
      <div slot="right">
        <van-icon name="ellipsis" class="wx-top-icon" />
      </div>
    </van-nav-bar>
    <div class="pay-wallet-zone">
      <div class="paymentCode">
        <img src="../../images/toolPage/payment/shoufukuan.png" class="pay-icon"/>
        <div>收付款</div>
      </div>
      <div class="wallet">
        <img src="../../images/toolPage/payment/weixinqianbao.png" class="pay-icon"/>
        <div>
          <div>钱包</div>
          <div class="amount">¥800.58</div>
        </div>
      </div>
    </div>
    <!-- 腾讯服务 -->
    <div class="service-zone">
      <div class="service-zone-title">腾讯服务</div>
      <div class="flex-wrap">
        <div class="flex-center service-zone-item">
          <div>
            <img src="../../images/toolPage/payment/wallet_icon_xyk.png" />
            <div>信用卡还款</div>
          </div>
        </div>
        <div class="flex-center service-zone-item">
          <div>
            <img src="../../images/toolPage/payment/wallet_icon_wld.png" />
            <div>微粒贷借钱</div>
          </div>
        </div>
        <div class="flex-center service-zone-item">
          <div>
            <img src="../../images/toolPage/payment/wallet_icon_pcz.png" />
            <div>手机充值</div>
          </div>
        </div>
        <div class="flex-center service-zone-item">
          <div>
            <img src="../../images/toolPage/payment/wallet_icon_lct.png" />
            <div>理财通</div>
          </div>
        </div>
        <div class="flex-center service-zone-item">
          <div>
            <img src="../../images/toolPage/payment/wallet_icon_sh.png" />
            <div>生活缴费</div>
          </div>
        </div>
        <div class="flex-center service-zone-item">
          <div>
            <img src="../../images/toolPage/payment/wallet_icon_qb.png" />
            <div>Q币充值</div>
          </div>
        </div>
        <div class="flex-center service-zone-item">
          <div>
            <img src="../../images/toolPage/payment/wallet_icon_fw.png" />
            <div>城市服务</div>
          </div>
        </div>
        <div class="flex-center service-zone-item">
          <div>
            <img src="../../images/toolPage/payment/wallet_icon_gy.png" />
            <div>腾讯公益</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 第三方服务 -->
    <div class="service-zone">
      <div class="service-zone-title">第三方服务</div>
      <div class="flex-wrap">
        <div class="flex-center service-zone-item">
          <div>
            <img src="../../images/toolPage/payment/wallet_icon_hcp.png" />
            <div>火车票机票</div>
          </div>
        </div>
        <div class="flex-center service-zone-item">
          <div>
            <img src="../../images/toolPage/payment/wallet_icon_ddcx.png" />
            <div>滴滴出行</div>
          </div>
        </div>
        <div class="flex-center service-zone-item">
          <div>
            <img src="../../images/toolPage/payment/wallet_icon_jdyx.png" />
            <div>京东优选</div>
          </div>
        </div>
        <div class="flex-center service-zone-item">
          <div>
            <img src="../../images/toolPage/payment/wallet_icon_mtwm.png" />
            <div>美团外卖</div>
          </div>
        </div>
        <div class="flex-center service-zone-item">
          <div>
            <img src="../../images/toolPage/payment/wallet_icon_my.png" />
            <div>电影演出赛事</div>
          </div>
        </div>
        <div class="flex-center service-zone-item">
          <div>
            <img src="../../images/toolPage/payment/wallet_icon_dzdp.png" />
            <div>吃喝玩乐</div>
          </div>
        </div>
        <div class="flex-center service-zone-item">
          <div>
            <img src="../../images/toolPage/payment/wallet_icon_jd.png" />
            <div>酒店</div>
          </div>
        </div>
        <div class="flex-center service-zone-item">
          <div>
            <img src="../../images/toolPage/payment/wallet_icon_pdd.png" />
            <div>拼多多</div>
          </div>
        </div>
        <div class="flex-center service-zone-item">
          <div>
            <img src="../../images/toolPage/payment/wallet_icon_mgj.png" />
            <div>蘑菇街女装</div>
          </div>
        </div>
        <div class="flex-center service-zone-item">
          <div>
            <img src="../../images/toolPage/payment/wallet_icon_wph.png" />
            <div>唯品会特卖</div>
          </div>
        </div>
        <div class="flex-center service-zone-item">
          <div>
            <img src="../../images/toolPage/payment/wallet_icon_zzes.png" />
            <div>转转二手</div>
          </div>
        </div>
        <div class="flex-center service-zone-item">
          <div>
            <img src="../../images/toolPage/payment/wallet_icon_bkzf.png" />
            <div>贝壳找房</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    components:{

    },
    name: 'wechatBalance',
    data () {
      return {
        rulesPopShow: false,
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
  .wx{
    background-color: #F6F6F6;
    .van-nav-bar{
      background-color: #F6F6F6;
    }
    .wx-top{
      font-family: -apple-system-font,Helvetica Neue,Helvetica,sans-serif;
      color: #000000;
      .wx-top-icon{
        font-size: 0.48rem;
        color: #000000;
      }
      .wx-title{
        font-weight: 500;
        font-size: 0.48rem;
      }
    }
  }
  .pay-wallet-zone{
    display: flex;
    border-radius: 0.266667rem;
    background-color: #3CB373;
    height: 3.2rem;
    font-size: 0.426667rem;
    color: #fff;
    text-align: center;
    margin: 0.133333rem 0.266667rem 0.266667rem 0.266667rem;
  }
  .paymentCode{
    width: 50%;
    height: 100%;
    padding: 0.533333rem 0 0 0;
  }
  .wallet{
    width: 50%;
    height: 100%;
    padding: 0.533333rem 0 0 0;
    .amount{
      color: #87E1AD;
      font-size: 0.373333rem;
      padding: 0.133333rem 0 0 0;
    }
  }
  .pay-icon{
    width: 1.12rem;
    height: 0.96rem;
  }
  .service-zone{
    background-color: #fff;
    color: #000000;
    font-size: 0.373333rem;
    margin: 0 0.266667rem 0.266667rem 0.266667rem;
  }
  .service-zone-title{
    padding: 0.266667rem 0 0.266667rem 0.4rem;
    color: #707072;
    border-bottom: 1px solid #ECECEC;
  }
  .service-zone-item{
    width: 33%;
    height: 3rem;
    text-align: center;
    border-bottom: 1px solid #ECECEC;
    border-right: 1px solid #ECECEC;
  }
  .service-zone-item img{
    width: 0.666667rem;
    padding: 0.133333rem 0;
  }
</style>
