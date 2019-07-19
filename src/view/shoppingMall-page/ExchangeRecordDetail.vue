<template>
  <div class="white-bg exchangeRecord">
    <!-- 顶部 -->
    <van-nav-bar
      title="兑换记录"
      left-arrow
      @click-left="onClickLeft"
      fixed
    />
    <!-- 撑开Fixednav挡住的位置 -->
    <div class="top-space"></div>
    <p class="noData grayBarBg">
      您还没有兑换记录
    </p>
    <div v-for="(item, index) in exchangeRecordList" :key="item.id" class="record-item" @click="toGoodsDetail(item)">
      <div class="flex-space-between pdt15 pdl15 pdr15">
        <div>订单编号：{{item.orderNumber}}</div>
        <div>兑换时间：{{item.time}}</div>
      </div>
      <van-card
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        :thumb="item.imageURL"
      >
      </van-card>
      <div>

      </div>
    </div>
  </div>
</template>
<script>
  export default {
    components:{
    },
    name: 'exchangeRecord',
    data () {
      return {
        exchangeRecordList: [ // 充值记录
          {
            id: '01',
            orderNumber: '123456789', // 订单编号
            amount: 6,  // 金额
            goldCoin: 20, // 金币
            time: '2019.06.26 08:08', // 兑换时间
            imageURL: 'https://img14.360buyimg.com/n7/jfs/t8089/8/1792179428/262248/7b596735/59bf8e42N3e97209f.jpg',  // 商品图片
          },
          {
            id: '02',
            orderNumber: '123456789', // 订单编号
            amount: 6,  // 金额
            goldCoin: 20, // 金币
            time: '2019.06.26 08:08', // 兑换时间
            imageURL: 'https://img14.360buyimg.com/n7/jfs/t8089/8/1792179428/262248/7b596735/59bf8e42N3e97209f.jpg',  // 商品图片
          }
        ],
      }
    },
    mounted () {

    },
    computed: {

    },
    methods: {
      onClickLeft () {
        this.COMMONFUNC.goBack();
      },
      // 前往商品详情
      toGoodsDetail (item) {
        this.$router.push( {
          name: 'goodsDetail',
          params: {
            goodsId: 'goodsId00001'
          }
        })
      }
    }
}
</script>

<style lang="less" scoped>
  .record-item{
    border-bottom:  1px solid #ccc;
  }
</style>
