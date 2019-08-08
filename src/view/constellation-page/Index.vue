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
            <van-button type="warning" round plain size="mini" class="btn" @click="$toast('跳转后台配置的文章')">{{contellationName}}爱情</van-button>
          </div>
        </div>
      </div>
      <van-tabs swipeable :swipe-threshold="6" v-model="tabActive">
        <van-tab v-for="(item, index) in tabList" :title="item.name" :key="index">
          <div class="pdl15 pdr15 pdb10 pdt10">
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
              <span class="mgr5">财富运势：</span>
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
            <div slot="header"><h4 class="pdl15 pdr15 pdt10">财富运势</h4></div>
            <div class="pdl15 pdr15 pdt10 pdb10">花钱买了一堆不实用的东西。</div>
          </van-panel>
        </van-tab>
      </van-tabs>
    </div>
    <!-- 星座密语文章 -->
    <van-cell value="来自星星的蜜语" >
      <template slot="title">
        <span class="font-16">星座蜜语</span>
      </template>
    </van-cell>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="我也是底线的"
      :lazy-load="true"
      @load="onLoad"
    >
      <ArticleCard :composition="articleListData"></ArticleCard>
    </van-list>
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
import { mapGetters } from 'vuex';
import ArticleCard from 'components/common_components/ArticleCard';
export default {
  name: 'constellation',
  components: {
    ArticleCard
  },
  data () {
    return {
      loading: false,   // 加载中
      finished: false,  // 加载完成
      articleListData: [],  // 文章列表
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
        }
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
    this.articleListData = JSON.parse(JSON.stringify(this.getImitateArticleList));
    this.today = this.COMMONFUNC.crtTimeFtt(new Date(), 'yy-mm-dd')
  },
  computed: {
    ...mapGetters([
      'getImitateArticleList', // 获取模拟文章列表
    ]),
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
    },
    // 加载更多文章
    onLoad() {
      let that = this;
      let obj = {
        id: 'zs20190214',
        title: '网上撩妹怎么聊？老司机给你带路',
        desc: '如何像案例中这样搜索话术聊天，可以微信添加导师微信领取与咨询,老司机带你一夜暴富，脱贫脱单.....',
        imgSrc: 'http://img2.imgtn.bdimg.com/it/u=3121687100,2370171796&fm=26&gp=0.jpg',
        time: '2019.02.13',
        readingNumbers: 99999,   // 阅读数
        isCarefullyChosen: true, // 是否精选
      };
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 5; i++) {
          that.articleListData.push(obj);
        }
        // 加载状态结束
        that.loading = false;
        // 数据全部加载完成
        if (that.articleListData.length >= 10) {
          that.finished = true;
        }
      }, 500);
    },
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
