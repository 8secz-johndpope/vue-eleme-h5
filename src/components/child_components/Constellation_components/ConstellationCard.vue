<template>
  <div class="font-14">
    <div class="flex-space-around mgb10">
      <div><img :src="constellationImg" class="van-avatar-large img-common"/></div>
      <div>
        <div class="flex-start">
          <div><span class="gold-color mgr5">{{contellationName}}</span>今日运势</div>
          <div class="mgl10 gold-color flex-center" @click="selectContellationTypePopup = true">
            <span>切换</span>
            <van-icon name="exchange" class="mgl5" />
          </div>
        </div>
        <div>有效期限：2019-07-16</div>
      </div>
    </div>
    <div>
      <div class="flex-start mgt5">
        <span class="mgr5">综合运势：</span>
        <van-rate v-model="rateValue" readonly size="50"/>
        <span class="mgl20 mgr5">健康指数：</span><span>85%</span>
      </div>
      <div class="flex-start mgt5">
        <span class="mgr5">工作运势：</span>
        <van-rate v-model="rateValue" readonly size="50"/>
        <span class="mgl20 mgr5">速配星座：</span><span>处女座</span>
      </div>
      <div class="flex-start mgt5">
        <span class="mgr5">爱情运势：</span>
        <van-rate v-model="rateValue" readonly size="50"/>
        <span class="mgl20 mgr5">幸运颜色：</span><span>紫色</span>
      </div>
      <div class="flex-start mgt5">
        <span class="mgr5">理财运势：</span>
        <van-rate v-model="rateValue" readonly size="50"/>
        <span class="mgl20 mgr5">幸运数字：</span><span>11</span>
      </div>
    </div>
    <van-popup v-model="selectContellationTypePopup" class="border-radius selectContellationTypePopup">
      <div class="white-bg pdt15 pdr15 pdl15 flex-wrap">
        <div class="classify-item mgb10" v-for="(item, index) in constellationList" :key="index" @click="selectContellationType(item)">
          <div><img :src="item.constellationImg"  class="van-avatar-large" />  </div>
          <div>{{item.name}}</div>
        </div>
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
        contellationName: '白羊座',  // 星座名
        rateValue: 3, // 运势度
        constellationImg: require('images/constellation/baiyang.png'), // 星座图片
        selectContellationTypePopup: false, // 星座选择弹框
        constellationList: [
          {
            name: '双鱼座',  // 星座名
            constellationImg: require('images/constellation/shuangyu.png'), // 星座图片
            id: 'id001',
          },{
            name: '白羊座',  // 星座名
            constellationImg: require('images/constellation/baiyang.png'), // 星座图片
            id: 'id001',
          },{
            name: '金牛座',  // 星座名
            constellationImg: require('images/constellation/jinniu.png'), // 星座图片
            id: 'id001',
          },{
            name: '双子座',  // 星座名
            constellationImg: require('images/constellation/shuangzi.png'), // 星座图片
            id: 'id001',
          },{
            name: '巨蟹座',  // 星座名
            constellationImg: require('images/constellation/juxie.png'), // 星座图片
            id: 'id001',
          },{
            name: '狮子座',  // 星座名
            constellationImg: require('images/constellation/shizi.png'), // 星座图片
            id: 'id001',
          },{
            name: '处女座',  // 星座名
            constellationImg: require('images/constellation/chunv.png'), // 星座图片
            id: 'id001',
          },{
            name: '天秤座',  // 星座名
            constellationImg: require('images/constellation/tianping.png'), // 星座图片
            id: 'id001',
          },{
            name: '天蝎座',  // 星座名
            constellationImg: require('images/constellation/tianxie.png'), // 星座图片
            id: 'id001',
          },{
            name: '射手座',  // 星座名
            constellationImg: require('images/constellation/sheshou.png'), // 星座图片
            id: 'id001',
          },{
            name: '摩羯座',  // 星座名
            constellationImg: require('images/constellation/mojie.png'), // 星座图片
            id: 'id001',
          },{
            name: '水瓶座',  // 星座名
            constellationImg: require('images/constellation/shuiping.png'), // 星座图片
            id: 'id001',
          },
        ]
      };
    },
    mounted () {
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
    width: 80%;
  }
  .classify-item{
    width: 25%;
    text-align: center;
    line-height: 0.8rem;
  }
</style>
