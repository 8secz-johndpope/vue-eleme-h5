<template>
  <div>
    <!-- 顶部 -->
    <div class="fixed-top">
      <van-nav-bar
        title="星座运势"
        left-arrow
        @click-left="onClickLeft"
        fixed
      >
      </van-nav-bar>
    </div>
    <div class="top-space"></div>
    <div class="white-bg pd10 font-14">
      <div class="flex-space-around mgb10">
        <div @click="selectContellationTypePopup = true"><img :src="constellationImg" class="van-avatar-large img-common"/></div>
        <div>
          <div class="flex-start mgb5">
            <div><span class="gold-color mgr5" @click="selectContellationTypePopup = true">{{contellationName}}</span>今日运势</div>
            <div class="mgl5 gold-color flex-center" @click="selectContellationTypePopup = true">
              <span>切换星座</span>
              <van-icon name="exchange" class="mgl5" />
            </div>
          </div>
          <div>有效期限：{{today}}</div>
        </div>
      </div>
      <van-tabs swipeable :swipe-threshold="6" v-model="tabActive">
        <van-tab v-for="(item, index) in tabList" :title="item.name">
          <div class="pd15">
            <div class="flex-start mgt5">
              <span class="mgr5">综合运势：</span>
              <van-rate v-model="rateValue" readonly :size="50"/>
              <span class="mgl20 mgr5">幸运数字：</span><span>11</span>
            </div>
            <div class="flex-start mgt5">
              <span class="mgr5">爱情运势：</span>
              <van-rate v-model="rateValue" readonly :size="50"/>
              <span class="mgl20 mgr5">速配星座：</span><span>处女座</span>
            </div>
            <div class="flex-start mgt5">
              <span class="mgr5">工作运势：</span>
              <van-rate v-model="rateValue" readonly :size="50"/>
              <span class="mgl20 mgr5">幸运颜色：</span><span>紫色</span>
            </div>
            <div class="flex-start mgt5">
              <span class="mgr5">理财运势：</span>
              <van-rate v-model="rateValue" readonly :size="50"/>
              <span class="mgl20 mgr5">健康指数：</span><span>85%</span>
            </div>
          </div>
          <van-panel>
            <div slot="header"><h4 class="pdl15 pdr15 pdt10">综合运势</h4></div>
            <div class="pdl15 pdr15 pdt10 pdb10">你容易通过花钱的方式来发泄心中的不满情绪，在购物这件事上特别冲动。与他人交流或是商谈的时候，不要过分自我，也不要把自己摆在高高在上的位置，这样容易让自己陷入孤立无援。有伴者可以多为伴侣用点心，能够驱赶Ta心里面的不安。</div>
          </van-panel>
          <van-panel>
            <div slot="header"><h4 class="pdl15 pdr15 pdt10">爱情运势</h4></div>
            <div class="pdl15 pdr15 pdt10 pdb10">单身的整理好自己的情感，不合适尽早悬崖勒马。</div>
          </van-panel>
          <van-panel>
            <div slot="header"><h4 class="pdl15 pdr15 pdt10">工作运势</h4></div>
            <div class="pdl15 pdr15 pdt10 pdb10">凡事多动脑筋，听听别人的劝告，能少走很多弯路。</div>
          </van-panel>
          <van-panel>
            <div slot="header"><h4 class="pdl15 pdr15 pdt10">理财运势</h4></div>
            <div class="pdl15 pdr15 pdt10 pdb10">花钱买了一堆不实用的东西。</div>
          </van-panel>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
import ConstellationCard from 'components/child_components/Constellation_components/ConstellationCard';
export default {
  name: 'constellation',
  components: {
    ConstellationCard,
  },
  data () {
    return {
      today: '',  // 当日
      contellationName: '白羊座',  // 星座名
      rateValue: 3, // 运势度
      tabActive: 0, // 绑定当前选中标签的标识符
      constellationImg: require('images/constellation/baiyang.png'), // 星座图片
      selectContellationTypePopup: false, // 星座选择弹框
      tabList: [ // tab列表
        {
          name: '今日',
        },{
          name: '明日',
        },{
          name: '本周',
        },{
          name: '本月',
        },{
          name: '今年',
        },{
          name: '爱情',
        },
      ],
      constellationList: [
        {
          name: '双鱼座',  // 星座名
          time: '02/19-03/20',
          constellationImg: require('images/constellation/shuangyu.png'), // 星座图片
          id: 'id001',
        },{
          name: '白羊座',  // 星座名
          time: '03/21-04/19',
          constellationImg: require('images/constellation/baiyang.png'), // 星座图片
          id: 'id001',
        },{
          name: '金牛座',  // 星座名
          time: '04/20-05/20',
          constellationImg: require('images/constellation/jinniu.png'), // 星座图片
          id: 'id001',
        },{
          name: '双子座',  // 星座名
          time: '05/21-06/21',
          constellationImg: require('images/constellation/shuangzi.png'), // 星座图片
          id: 'id001',
        },{
          name: '巨蟹座',  // 星座名
          time: '06/22-07/22',
          constellationImg: require('images/constellation/juxie.png'), // 星座图片
          id: 'id001',
        },{
          name: '狮子座',  // 星座名
          time: '07/23-08/22',
          constellationImg: require('images/constellation/shizi.png'), // 星座图片
          id: 'id001',
        },{
          name: '处女座',  // 星座名
          time: '08/23-09/22',
          constellationImg: require('images/constellation/chunv.png'), // 星座图片
          id: 'id001',
        },{
          name: '天秤座',  // 星座名
          time: '09/23-10/23',
          constellationImg: require('images/constellation/tianping.png'), // 星座图片
          id: 'id001',
        },{
          name: '天蝎座',  // 星座名
          time: '10/24-11/22',
          constellationImg: require('images/constellation/tianxie.png'), // 星座图片
          id: 'id001',
        },{
          name: '射手座',  // 星座名
          time: '11/23-12/21',
          constellationImg: require('images/constellation/sheshou.png'), // 星座图片
          id: 'id001',
        },{
          name: '摩羯座',  // 星座名
          time: '12/22-01/19',
          constellationImg: require('images/constellation/mojie.png'), // 星座图片
          id: 'id001',
        },{
          name: '水瓶座',  // 星座名
          time: '01/20-02/18',
          constellationImg: require('images/constellation/shuiping.png'), // 星座图片
          id: 'id001',
        },
      ]
    };
  },
  mounted () {
    this.today = this.COMMONFUNC.crtTimeFtt(new Date(), 'yy-mm-dd')
  },
  computed: {
  },
  methods: {
    onClickLeft(){
      this.COMMONFUNC.goBack();
    },
  },
};
</script>

<style lang="less" scoped>
  .img{
    width: 1rem;
    height: 1rem;
  }
</style>
