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
    <div class="mgt15">
      <van-swipe :loop="false" :width="300">
        <van-swipe-item v-for="(item, index) in constellationList" :key="index">
          <img :src="item.constellationImg" class="img"/>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>
<script>
export default {
  name: 'constellation',
  components: {
  },
  data () {
    return {
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
