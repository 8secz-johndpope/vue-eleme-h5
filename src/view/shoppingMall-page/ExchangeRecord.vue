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
    <p class="noData dy-font-color pdt20 pdb20" v-if="exchangeRecordList.length === 0">
      您还没有兑换记录
    </p>
    <div v-else>
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="我也是底线的"
        :lazy-load="true"
        @load="onLoad"
      >
        <div v-for="(item, index) in exchangeRecordList" :key="index" class="record-item" @click="toGoodsDetail(item)">
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
        </div>
      </van-list>
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
        loading: false,
        finished: false,
        exchangeRecordList: [], // 充值记录
      }
    },
    mounted () {
      let that = this;
      setTimeout( ()=> {
        that.onLoad();
      }, 1500)
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
      },
      onLoad() {
        let obj = {
          id: '01',
          orderNumber: '123456789', // 订单编号
          amount: 6,  // 金额
          goldCoin: 20, // 金币
          time: '2019.06.26 08:08', // 兑换时间
          imageURL: 'https://img14.360buyimg.com/n7/jfs/t8089/8/1792179428/262248/7b596735/59bf8e42N3e97209f.jpg',  // 商品图片
        };
        // 异步更新数据
        setTimeout(() => {
          for (let i = 0; i < 5; i++) {
            this.exchangeRecordList.push(obj);
          }
          // 加载状态结束
          this.loading = false;
          // 数据全部加载完成
          if (this.exchangeRecordList.length >= 10) {
            this.finished = true;
          }
        }, 500);
      },
    }
}
</script>

<style lang="less" scoped>
  .record-item{
    border-bottom:  1px solid #ccc;
  }
</style>
