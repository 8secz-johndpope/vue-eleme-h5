<template>
  <div class="myzone_index">
    <!-- <van-icon name="setting-o" class="setting" /> -->
    <i class="fa fa-bars setting" @click="openSetting"></i>
    <div class="myzone_content">
      <!-- 头 -->
      <div class="myzone_info clear">
        <img :src="getImitateUser.userImg" alt="">
        <div class="myzone_uid">
          <h3>{{ getImitateUser.userName }}</h3>
          <p>183*****935</p>
        </div>
      </div>
    </div>
    <!-- 3分 -->
    <div class="three_lan">
      <a class="three_lan_">
        <p class="big_colorful">
          <span class="index-2FmrF_0" style="color: rgb(255, 153, 0);">{{getImitateUser.getPraised}}</span><span class="index-2V-Hh_0">获赞</span>
        </p>
      </a>
      <a class="three_lan_" style="border-left: 1px solid #ddd;border-right: 1px solid #ddd;">
        <p class="big_colorful">
          <span class="index-2FmrF_0" style="color: rgb(255, 95, 62);">{{getImitateUser.fans}}</span><span class="index-2V-Hh_0">粉丝</span>
        </p>
      </a>
      <a class="three_lan_">
        <p class="big_colorful">
          <span class="index-2FmrF_0" style="color: rgb(106, 194, 11);">{{getImitateUser.follow}}</span><span class="index-2V-Hh_0">关注</span>
        </p>
      </a>
    </div>
    <van-tabs v-model="active" sticky @click="onClick">
      <van-tab title="我的作品">
        <Conversation :composition="getImitateConversation"></Conversation>
      </van-tab>
      <van-tab title="我的收藏">
        <Conversation :composition="getImitateConversation"></Conversation>
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
import Fixednav from './small_components/Fixed_nav';
import Conversation from './small_components/Conversation';
import Setting from './Setting';
import { mapGetters } from 'vuex';
export default {
  name: 'myzone',
  data () {
    return {
      uname: '',
      active: 0,
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
    },
    ...mapGetters([
      'getImitateUser', // 获取用户数据
      'getImitateConversation', // 获取模拟对话
    ])
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
  height: 2rem;
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
