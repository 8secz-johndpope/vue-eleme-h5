<template>
  <div>
    <!-- 顶部 -->
    <div class="fixed-top">
      <van-nav-bar
        title="星座运势"
        left-arrow
        @click-left="onClickLeft"
      >
      </van-nav-bar>
    </div>
    <div class="top-space"></div>
    <div class="white-bg pd10 font-14">
      <div class="flex-space-around mgb10">
        <div @click="selectContellationTypePopup = true"><img :src="constellationImg" class="van-avatar-large img-common"/></div>
        <div>
          <div class="flex-start mgb5">
            <div><span class="gold-color mgr5" @click="selectContellationTypePopup = true">{{contellationName}}</span class="dy-font-color">{{contellationTime}}</div>
            <div class="mgl5 gold-color flex-center" @click="selectContellationTypePopup = true">
              <span>切换星座</span>
              <van-icon name="exchange" class="mgl5" />
            </div>
          </div>
          <div>
            <router-link :to="{ name: 'bloodType', params: { id: 'id001' } }"><van-button type="warning" round plain size="mini" class="btn">{{contellationName}}血型</van-button></router-link>
            <router-link :to="{ name: 'knowledge', params: { id: 'id001' } }"><van-button type="warning" round plain size="mini" class="btn">{{contellationName}}知识</van-button></router-link>
          </div>
        </div>
      </div>
      <van-tabs swipeable :swipe-threshold="6" v-model="tabActive">
        <van-tab v-for="(item, index) in tabList" :title="item.name">
          <div v-if="index < 5">
            <div class="pd15">
              <div class="flex-start mgt5">
                <span class="mgr5">综合运势：</span>
                <van-rate v-model="rateValue" readonly :size="50"/>
                <div v-if="index < 2"><span class="mgl20 mgr5">幸运数字：</span><span>11</span></div>
              </div>
              <div class="flex-start mgt5">
                <span class="mgr5">爱情运势：</span>
                <van-rate v-model="rateValue" readonly :size="50"/>
                <div v-if="index < 2"><span class="mgl20 mgr5">速配星座：</span><span>处女座</span></div>
              </div>
              <div class="flex-start mgt5">
                <span class="mgr5">工作运势：</span>
                <van-rate v-model="rateValue" readonly :size="50"/>
                <div v-if="index < 2"><span class="mgl20 mgr5">幸运颜色：</span><span>紫色</span></div>
              </div>
              <div class="flex-start mgt5">
                <span class="mgr5">理财运势：</span>
                <van-rate v-model="rateValue" readonly :size="50"/>
                <div v-if="index < 2"><span class="mgl20 mgr5">健康指数：</span><span>85%</span></div>
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
          </div>
          <div v-else>
            <van-panel>
              <div slot="header"><h4 class="pdl15 pdr15 pdt10">综合运势</h4></div>
              <div class="pdl15 pdr15 pdt10 pdb10">狮子们在2019年里的爱情运势处于逐渐上升的状态，你们对待爱情不再冲动，能够更加理性地对待，并且会思考自己真正需要的爱情形式是什么。在上半年里，爱情运势比较一般般，单身的狮子们可能还沉浸在旧日的恋情回忆，而恋爱中的狮子们与恋人的感情则比较稳定。在下半年的时候，狮子们的爱情运势则有所上升，单身的狮子们有机会邂逅心仪对象，恋爱中的狮子们与恋人的感情稳定，很有可能会订婚或是结婚，已婚的狮子们的婚姻状况也十分甜蜜恩爱，还会听到与孩子相关的好消息。</div>
            </van-panel>
            <van-panel>
              <div slot="header"><h4 class="pdl15 pdr15 pdt10">女生篇</h4></div>
              <div class="pdl15 pdr15 pdt10 pdb10">在2月和3月的时候，你们可能会因为某些场景而回想起曾经的爱恋，但是你们能够放下往日的感情，勇敢地朝前走，并且追寻属于自己的幸福。如果你们处于单身的状态，那么你们很有可能会邂逅爱情，并且与对方发展成恋人关系。如果你们处于恋爱状态，那么你们与恋人的感情状态非常不错哦，很有可能会发展成订婚或是结婚的情况。如果你们处于已婚的状态，那么你们与另一半的婚姻状况很甜蜜温馨，可能会迎来小生命哦。</div>
            </van-panel>
            <van-panel>
              <div slot="header"><h4 class="pdl15 pdr15 pdt10">男生篇</h4></div>
              <div class="pdl15 pdr15 pdt10 pdb10">婚神星会从6月份的时候来到你们的本位宫，对于单身的狮子座男生来说是极好的消息，你们可能会邂逅一个能够给予特别感觉的对象，能够和对方产生精神上的共鸣。在下半年的时候，你们的爱情会开花结果，尤其是有恋人的狮子座男生，你们与恋人的关系会有进一步的发展。不过，如果你们已婚的话，那就要保持警惕了哦，因为你们的婚姻关系可能会遭到第三者的破坏。如果能够顺利过关，那么婚姻就会更加地牢固，若是不够坚定，那么婚姻就会出现破裂。</div>
            </van-panel>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <van-popup v-model="selectContellationTypePopup" class="selectContellationTypePopup">
      <div class="border-radius white-bg pdt15 pdr15 pdl15 flex-wrap">
        <div class="classify-item mgb10" v-for="(item, index) in constellationList" :key="index" @click="selectContellationType(item)">
          <div><img :src="item.constellationImg"  class="van-avatar-large" />  </div>
          <div>{{item.name}}</div>
          <div class="dy-font-color">{{item.time}}</div>
        </div>
      </div>
      <div class="flex-center mgt20">
        <van-icon name="close" @click="selectContellationTypePopup=false" class="pop-close-icon"/>
      </div>
    </van-popup>
  </div>
</template>
<script>
export default {
  name: 'constellation',
  components: {
  },
  data () {
    return {
      today: '',  // 当日
      contellationName: '白羊座',  // 星座名
      contellationTime: '02/19-03/20', // 星座时间
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
          contellationTime: '02/19-03/20',  // 星座时间
          constellationImg: require('images/constellation/shuangyu.png'), // 星座图片
          id: 'id001',
        },{
          name: '白羊座',  // 星座名
          contellationTime: '03/21-04/19',  // 星座时间
          constellationImg: require('images/constellation/baiyang.png'), // 星座图片
          id: 'id001',
        },{
          name: '金牛座',  // 星座名
          contellationTime: '04/20-05/20',  // 星座时间
          constellationImg: require('images/constellation/jinniu.png'), // 星座图片
          id: 'id001',
        },{
          name: '双子座',  // 星座名
          contellationTime: '05/21-06/21',  // 星座时间
          constellationImg: require('images/constellation/shuangzi.png'), // 星座图片
          id: 'id001',
        },{
          name: '巨蟹座',  // 星座名
          contellationTime: '06/22-07/22',  // 星座时间
          constellationImg: require('images/constellation/juxie.png'), // 星座图片
          id: 'id001',
        },{
          name: '狮子座',  // 星座名
          contellationTime: '07/23-08/22',  // 星座时间
          constellationImg: require('images/constellation/shizi.png'), // 星座图片
          id: 'id001',
        },{
          name: '处女座',  // 星座名
          contellationTime: '08/23-09/22',  // 星座时间
          constellationImg: require('images/constellation/chunv.png'), // 星座图片
          id: 'id001',
        },{
          name: '天秤座',  // 星座名
          contellationTime: '09/23-10/23',  // 星座时间
          constellationImg: require('images/constellation/tianping.png'), // 星座图片
          id: 'id001',
        },{
          name: '天蝎座',  // 星座名
          contellationTime: '10/24-11/22',  // 星座时间
          constellationImg: require('images/constellation/tianxie.png'), // 星座图片
          id: 'id001',
        },{
          name: '射手座',  // 星座名
          contellationTime: '11/23-12/21',  // 星座时间
          constellationImg: require('images/constellation/sheshou.png'), // 星座图片
          id: 'id001',
        },{
          name: '摩羯座',  // 星座名
          contellationTime: '12/22-01/19',  // 星座时间
          constellationImg: require('images/constellation/mojie.png'), // 星座图片
          id: 'id001',
        },{
          name: '水瓶座',  // 星座名
          contellationTime: '01/20-02/18',  // 星座时间
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
    // 选择星座
    selectContellationType (item) {
      this.contellationName = item.name;
      this.constellationImg = item.constellationImg;
      this.contellationTime = item.contellationTime;
      this.selectContellationTypePopup = false;
    }
  },
};
</script>

<style lang="less" scoped>
  .selectContellationTypePopup{
    background-color: transparent;
    width: 80%;
  }
  .classify-item{
    width: 33%;
    text-align: center;
    line-height: 0.6rem;
  }
  .pop-close-icon{
    color: #fff;
    font-size: 0.64rem;
  }
  .btn{
    width: 1.8rem;
  }
</style>
