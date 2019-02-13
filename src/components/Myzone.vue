<template>
  <div class="myzone_index">
    <Backbar title="我的"></Backbar>
    <!-- <van-icon name="setting-o" class="setting" /> -->
    <i class="fa fa-bars setting" @click="openSetting"></i>
    <div class="myzone_content">
      <!-- 头 -->
      <div class="myzone_info clear">
        <img src="../images/slider-pic/slider-pic11.jpeg" alt="">
        <div class="myzone_uid">
          <h3>{{ uname }}</h3>
          <p>183*****935</p>
        </div>
      </div>
    </div>
    <!-- 3分 -->
    <div class="three_lan">
      <a class="three_lan_">
        <p class="big_colorful">
          <span class="index-2FmrF_0" style="color: rgb(255, 153, 0);">1.2亿</span><span class="index-2V-Hh_0">获赞</span>
        </p>
      </a>
      <a class="three_lan_" style="border-left: 1px solid #ddd;border-right: 1px solid #ddd;">
        <p class="big_colorful">
          <span class="index-2FmrF_0" style="color: rgb(255, 95, 62);">3</span><span class="index-2V-Hh_0">粉丝</span>
        </p>
      </a>
      <a class="three_lan_">
        <p class="big_colorful">
          <span class="index-2FmrF_0" style="color: rgb(106, 194, 11);">6250</span><span class="index-2V-Hh_0">关注</span>
        </p>
      </a>
    </div>
    <van-tabs v-model="active" sticky @click="onClick">
      <van-tab title="我的作品">
        <Conversation></Conversation>
      </van-tab>
      <van-tab title="我的收藏">
        我的收藏
      </van-tab>
    </van-tabs>
    <van-popup v-model="show" position="right" :overlay="true">
      <!-- 栏 -->
      <Setting></Setting>
    </van-popup>
    <Fixednav></Fixednav>
  </div>
</template>

<script>
import Backbar from './small_components/Back_bar';
import Fixednav from './small_components/Fixed_nav';
import Conversation from './small_components/Conversation';
import Setting from './Setting';
export default {
  name: 'myzone',
  data () {
    return {
      uname: '',
      active: 1,
      show: false,
    };
  },
  mounted () {
    if (!this.isLogin) {
      this.$router.replace('/login');
    } else {
      this.uname = this.$store.getters.getuname;
      // 设置当前标记为我的
      this.$store.dispatch('setWhichpage', 'myzone');
    }
  },
  computed: {
    isLogin () {
      return this.$store.getters.getLogin;
    }
  },
  methods: {
    onClick(index, title) {
      this.$toast(title);
    },
    openSetting(){
      this.show = true;
    }
  },
  components: {
    Fixednav,
    Backbar,
    Setting,
    Conversation,
  }
};
</script>

<style lang="less" scoped>
.setting{
  z-index: 999;
  position: fixed;
  right: 0.3rem;
  top: 0.3rem;
  color: #fff;
}
.myzone_content{
  width: 10rem;
  height: 2rem;
  margin-top: 1rem;
  padding: 0.2rem .4rem;
  box-sizing: border-box;
  background: #0097ff;
  img{
    width:1.4rem;
    height:1.4rem;
    border-radius:50%;float: left;
  }
  .myzone_uid{
    float: left;
    margin-left:.5rem;
    color:#fff;
    h3{
      font-size:.7rem;
    }
    p{
      font-size:.4rem;
    }
  }
}
.three_lan{
  display: table;
  width: 100%;
  height: 2.24rem;
  color: #fff;
  border-bottom: 1px solid #ddd;
  background-color: #0097ff;
  .three_lan_{
    display: table-cell;
    width: 33.3333%;
    vertical-align: middle;
    text-align: center;
    p.big_colorful{
      line-height:.4rem;
    }
    .index-2FmrF_0 {
        padding: .4rem 0 0;
        font-size: .6rem;
        line-height: .6rem;
        font-weight: 700;
    }
    .index-2V-Hh_0 {
        font-size: .32rem;
        line-height: .32rem;
        color: #fff;
    }
    .index-3S6cZ_0 {
        font-size: .32rem;
        line-height: .37rem;
        font-weight: 500;
        color: #fff;
    }

  }
}
</style>
