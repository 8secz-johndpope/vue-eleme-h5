<template>
  <div class="font-14">
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
    <div class="mgl5 position-r">
      <div>
        <div class="flex-start mgt5">
          <span>综合运势：</span>
          <van-rate v-model="rateValue" readonly :size="50"/>
          <span class="mgl10">健康指数：</span><span>85%</span>
        </div>
        <div class="flex-start mgt5">
          <span>工作运势：</span>
          <van-rate v-model="rateValue" readonly :size="50"/>
          <span class="mgl10">幸运颜色：</span><span>紫色</span>
        </div>
        <div class="flex-start mgt5">
          <span>财富运势：</span>
          <van-rate v-model="rateValue" readonly :size="50"/>
          <span class="mgl10">幸运数字：</span><span>11</span>
        </div>
        <div class="flex-start mgt5">
          <span>爱情运势：</span>
          <van-rate v-model="rateValue" readonly :size="50"/>
          <span class="mgl10">速配星座：</span><span>处女座</span>
        </div>
      </div>
      <router-link :to="{ name: 'constellation', params: {} }" class="detail">
        <van-button round type="warning" size="small" class="detail-btn">详情</van-button>
      </router-link>
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
  import { mapGetters } from 'vuex';
  export default {
    components:{
    },
    name: 'constellationCard',
    data () {
      return {
        today: '',  //  当日
        contellationName: '白羊座',  // 星座名
        rateValue: 3, // 运势度
        constellationImg: require('images/constellation/baiyang.png'), // 星座图片
        selectContellationTypePopup: false, // 星座选择弹框
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
      ...mapGetters([
        'getAreaList',
        'getImitateUserList', // 获取用户列表数据
      ]),
    },
    watch: {

    },
    methods: {
      // 选择星座
      selectContellationType (item) {
        this.contellationName = item.name;
        this.constellationImg = item.constellationImg;
        this.selectContellationTypePopup = false;
      }
    }
  }
</script>
<style lang="css" scoped>
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
  .detail{
    position: absolute;
    right: 0;
    top: 0.8rem;
  }
  .detail-btn{
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    min-width: 0.4rem;
    width: 1.2rem;
    height: 0.8rem;
    line-height: 0.4rem;
  }
</style>
