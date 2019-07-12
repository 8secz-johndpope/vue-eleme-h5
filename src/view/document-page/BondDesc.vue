<template>
  <div>
    <van-nav-bar
      title="保证金说明"
      @click-left="onClickLeft"
      left-arrow
      fixed
    />
    <!-- 撑开Fixednav挡住的位置 -->
    <div class="top-space"></div>
    <!-- 疑难解惑  -->
    <van-collapse v-model="activeNames">
      <van-collapse-item title="1、什么是保证金？" name="1">
        1.1 保证金（微撩保证金）是为了更好的保障消费者，提升经营以下类目商品卖家的服务水平和商品质量。微撩依照《消费者保障服务协议》，规定必须缴纳消保保证金的商品类目。</br>
      </van-collapse-item>
      <van-collapse-item title="2、什么时候需要交保证金？" name="2">
        2.1 发布以下类目宝贝时，如果没有提交消保保证金只能发布“二手”或“闲置”商品，必须提交消保保证金才可以发布全新商品。</br>
      </van-collapse-item>
      <van-collapse-item title="3、保证金有什么好处？" name="3">
        3.1 交了保证金，就可以开通假一赔三，7天无理由退款，还有保修服务等，这对于消费者，即想到你的店里买东西的人来说，这是一个比较好的保障，可以让人买得放心。这毫无疑问会在无形中增加你的销量。</br>
        3.2 交了消保的店铺会有利于搜索。当访客在搜索相关宝贝的时候，淘宝会更优先的展示交了保证金的店铺。比如你和别的卖家是在卖同样的一件商品，同样的价格，访客搜索的时候，淘宝会优先展示交了消保的店铺。</br>
        3.3 目前淘宝有些实物类目也强调要消保才可以发布全新宝贝，而且去选择供货商的时候，有些供货商也要求你必须消保。
      </van-collapse-item>
      <van-collapse-item title="4、要交多少？" name="4">
        4.1 榜单周冠军可获得榜单首页顶部banner位推荐。</br>
        4.2 榜单双周冠军（连续两周获得榜单周冠军）可获得微撩所有banner推荐。</br>
        4.3 榜单月冠军（连续四周获得榜单周冠军）可获得微撩开机屏1天使用机会。
      </van-collapse-item>
      <van-collapse-item title="5、哪些商品类目需要交？" name="4">
        <table class="define-table width-100">
          <thead>
            <tr class="tcenter">
              <th class="width-50">商品类目</th>
              <th class="width-50">金额（人民币：元）</th>
            </tr>
          </thead>
          <tbody>
            <tr class="tcenter" v-for="(item, index) in 4" :key="index">
              <td class="width-50">食品</td>
              <td class="width-50">500</td>
            </tr>
          </tbody>
        </table>
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
        activeNames: ['1','2','3','4','5'], // 常见问题折叠筐
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
  .define-table{
    border-collapse:collapse;
    border-spacing:0;
    border-left:1px solid #888;
    border-top:1px solid #888;
  }
  .define-table th,.define-table td{
    border-right:1px solid #888;
    border-bottom:1px solid #888;
    padding:5px 15px;
  }
  .define-table th{
    font-weight:bold;background:#ccc;
  }
</style>
